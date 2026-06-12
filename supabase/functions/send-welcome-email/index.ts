import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend'
const SITE_URL = 'https://theinterventionistnetwork.com'
const LOGO_URL = `${SITE_URL}/__l5e/assets-v1/d4b7b7ec-0a76-417f-b2de-92ae221f58b2/interventionist-network-logo.jpeg`
const FROM = 'The Interventionist Network <noreply@theinterventionistnetwork.com>'

function buildHtml(name: string) {
  const firstName = (name || '').split(' ')[0] || 'there'
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#f5f4f1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#1a2238;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f4f1;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.06);">
        <tr><td style="background:#0f1c3f;padding:28px 32px;text-align:center;">
          <img src="${LOGO_URL}" alt="The Interventionist Network" width="260" style="display:block;margin:0 auto;max-width:260px;height:auto;background:#ffffff;border-radius:6px;padding:12px;" />
        </td></tr>
        <tr><td style="padding:32px;">
          <h1 style="margin:0 0 16px;font-size:24px;color:#0f1c3f;">Welcome to the Network, ${firstName}.</h1>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Your membership application has been approved. You're now a Listed member of The Interventionist Network — alongside vetted, experienced interventionists committed to ethical, evidence-based practice.</p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">A couple of things to do next:</p>
          <ul style="margin:0 0 20px 20px;padding:0;font-size:16px;line-height:1.7;">
            <li>Watch your inbox for your directory profile details and member portal access.</li>
            <li>Display your member badge — see below.</li>
          </ul>
          <div style="background:#f8f6f1;border:1px solid #ece7da;border-radius:10px;padding:20px;text-align:center;margin:24px 0;">
            <p style="margin:0 0 14px;font-size:14px;color:#5a6478;letter-spacing:0.04em;text-transform:uppercase;">Your Member Badge</p>
            <img src="${LOGO_URL}" alt="The Interventionist Network member badge" width="320" style="display:block;margin:0 auto 16px;max-width:320px;height:auto;" />
            <a href="${LOGO_URL}" download="interventionist-network-member-badge.jpg" style="display:inline-block;background:#d97a1f;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:8px;font-weight:600;font-size:15px;">Download badge</a>
            <p style="margin:14px 0 0;font-size:13px;color:#5a6478;line-height:1.5;">Add this badge to your website or email signature to show families and referral partners you're part of the Network. Please link it to <a href="${SITE_URL}" style="color:#0f1c3f;">${SITE_URL.replace('https://', '')}</a>.</p>
          </div>
          <p style="margin:24px 0 16px;font-size:16px;line-height:1.6;">If you have any questions, just reply to this email.</p>
          <p style="margin:0;font-size:16px;line-height:1.6;">Welcome aboard,<br/><strong>Matt Brown</strong><br/>Founder, The Interventionist Network</p>
        </td></tr>
        <tr><td style="padding:18px 32px;background:#0f1c3f;color:#aab2c5;text-align:center;font-size:12px;">
          The Interventionist Network &middot; <a href="${SITE_URL}" style="color:#ffffff;text-decoration:none;">theinterventionistnetwork.com</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')
  const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
  const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
  const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')

  if (!LOVABLE_API_KEY || !RESEND_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !SUPABASE_ANON_KEY) {
    return new Response(JSON.stringify({ error: 'Service misconfigured' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  // Require an authenticated caller (admin = any signed-in user; signups are disabled).
  const authHeader = req.headers.get('Authorization') ?? ''
  const token = authHeader.replace(/^Bearer\s+/i, '')
  if (!token) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
  const userClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: `Bearer ${token}` } },
  })
  const { data: { user } } = await userClient.auth.getUser()
  if (!user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  let body: { applicationId?: string }
  try { body = await req.json() } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  if (!body.applicationId || typeof body.applicationId !== 'string') {
    return new Response(JSON.stringify({ error: 'applicationId required' }), {
      status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const admin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

  const { data: app, error: fetchErr } = await admin
    .from('membership_applications')
    .select('id, full_name, email, status')
    .eq('id', body.applicationId)
    .maybeSingle()

  if (fetchErr || !app) {
    return new Response(JSON.stringify({ error: 'Application not found' }), {
      status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const html = buildHtml(app.full_name)

  const resp = await fetch(`${GATEWAY_URL}/emails`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      'X-Connection-Api-Key': RESEND_API_KEY,
    },
    body: JSON.stringify({
      from: FROM,
      to: [app.email],
      subject: 'Welcome to The Interventionist Network',
      html,
    }),
  })

  const data = await resp.json().catch(() => ({}))

  if (!resp.ok) {
    console.error('Welcome email send failed', resp.status, data)
    return new Response(JSON.stringify({ error: 'Send failed', status: resp.status, details: data }), {
      status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  await admin
    .from('membership_applications')
    .update({
      status: 'approved',
      reviewed_at: new Date().toISOString(),
      welcome_email_sent_at: new Date().toISOString(),
    })
    .eq('id', body.applicationId)

  return new Response(JSON.stringify({ ok: true, id: (data as any)?.id ?? null }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})