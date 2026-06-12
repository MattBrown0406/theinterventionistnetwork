import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend'
const DEFAULT_FROM = 'The Interventionist Network <noreply@theinterventionistnetwork.com>'

interface SendEmailPayload {
  to: string | string[]
  subject: string
  html?: string
  text?: string
  from?: string
  reply_to?: string
  cc?: string | string[]
  bcc?: string | string[]
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function validate(payload: any): { ok: true; data: SendEmailPayload } | { ok: false; error: string } {
  if (!payload || typeof payload !== 'object') return { ok: false, error: 'Invalid body' }
  const { to, subject, html, text } = payload
  if (!to) return { ok: false, error: 'to is required' }
  const recipients = Array.isArray(to) ? to : [to]
  if (!recipients.every((r) => typeof r === 'string' && isValidEmail(r))) {
    return { ok: false, error: 'Invalid recipient email' }
  }
  if (!subject || typeof subject !== 'string' || subject.length > 300) {
    return { ok: false, error: 'subject is required (max 300 chars)' }
  }
  if (!html && !text) return { ok: false, error: 'html or text is required' }
  return { ok: true, data: payload as SendEmailPayload }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')
  const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

  if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: 'Email service not configured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  // Optional auth: if called from the client, require a valid user.
  // Service-role callers (other edge functions) can skip via header X-Internal-Call.
  const internal = req.headers.get('X-Internal-Call') === Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!internal) {
    const authHeader = req.headers.get('Authorization') ?? ''
    const token = authHeader.replace(/^Bearer\s+/i, '')
    if (!token) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: `Bearer ${token}` } } },
    )
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
  }

  let payload: any
  try {
    payload = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const result = validate(payload)
  if (!result.ok) {
    return new Response(JSON.stringify({ error: result.error }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const { to, subject, html, text, from, reply_to, cc, bcc } = result.data

  const body: Record<string, unknown> = {
    from: from ?? DEFAULT_FROM,
    to: Array.isArray(to) ? to : [to],
    subject,
  }
  if (html) body.html = html
  if (text) body.text = text
  if (reply_to) body.reply_to = reply_to
  if (cc) body.cc = cc
  if (bcc) body.bcc = bcc

  const resp = await fetch(`${GATEWAY_URL}/emails`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      'X-Connection-Api-Key': RESEND_API_KEY,
    },
    body: JSON.stringify(body),
  })

  const data = await resp.json().catch(() => ({}))

  if (!resp.ok) {
    console.error('Resend send failed', resp.status, data)
    return new Response(JSON.stringify({ error: 'Send failed', status: resp.status, details: data }), {
      status: 502,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ ok: true, id: (data as any)?.id ?? null }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})