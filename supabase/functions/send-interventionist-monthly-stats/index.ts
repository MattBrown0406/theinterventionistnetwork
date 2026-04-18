import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

type MonthlyStatRow = {
  interventionist_id: string
  name: string
  slug: string
  email: string | null
  month_start: string
  month_end: string
  total_clicks: number
  card_profile_clicks: number
  card_match_clicks: number
  card_total_clicks: number
  profile_match_clicks: number
  profile_phone_clicks: number
  profile_email_clicks: number
  profile_website_clicks: number
}

function parseMonthStart(input?: string | null) {
  if (!input) {
    const now = new Date()
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1))
  }

  const parsed = new Date(`${input}T00:00:00.000Z`)
  if (Number.isNaN(parsed.getTime())) {
    throw new Error('Invalid monthStart. Expected YYYY-MM-DD.')
  }
  return parsed
}

function formatMonthLabel(isoDate: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${isoDate}T00:00:00.000Z`))
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function buildEmail(row: MonthlyStatRow) {
  const monthLabel = formatMonthLabel(row.month_start)
  const profileUrl = `https://theinterventionistnetwork.com/interventionist/${row.slug}`

  const bullets = [
    ['Card views and clicks', row.card_total_clicks],
    ['Card → View Profile clicks', row.card_profile_clicks],
    ['Card → Request Match clicks', row.card_match_clicks],
    ['Profile → Request Match clicks', row.profile_match_clicks],
    ['Profile phone clicks', row.profile_phone_clicks],
    ['Profile email clicks', row.profile_email_clicks],
    ['Profile website clicks', row.profile_website_clicks],
    ['Total tracked clicks', row.total_clicks],
  ]

  const lines = bullets.map(([label, value]) => `- ${label}: ${value}`).join('\n')
  const htmlRows = bullets
    .map(([label, value]) => `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;">${escapeHtml(String(label))}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;">${value}</td></tr>`)
    .join('')

  return {
    subject: `${monthLabel} profile stats from The Interventionist Network`,
    text: `Hi ${row.name},\n\nHere are your ${monthLabel} stats from The Interventionist Network.\n\n${lines}\n\nProfile URL: ${profileUrl}\n\nThese numbers reflect tracked clicks on your card and profile links.\n\nThe Interventionist Network`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827;">
        <p>Hi ${escapeHtml(row.name)},</p>
        <p>Here are your <strong>${escapeHtml(monthLabel)}</strong> stats from The Interventionist Network.</p>
        <table style="border-collapse:collapse;margin:16px 0;min-width:320px;">
          ${htmlRows}
        </table>
        <p><strong>Profile URL:</strong> <a href="${profileUrl}">${profileUrl}</a></p>
        <p>These numbers reflect tracked clicks on your card and profile links.</p>
        <p>The Interventionist Network</p>
      </div>
    `.trim(),
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

  if (!supabaseUrl || !supabaseServiceKey) {
    return new Response(JSON.stringify({ error: 'Missing Supabase environment' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const authHeader = req.headers.get('Authorization')
  if (!authHeader?.startsWith('Bearer ')) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  try {
    const body = await req.json().catch(() => ({})) as { monthStart?: string; dryRun?: boolean }
    const monthStart = parseMonthStart(body.monthStart)
    const monthStartIso = monthStart.toISOString().slice(0, 10)

    const { data, error } = await supabase.rpc('get_interventionist_monthly_click_summary', {
      target_month: monthStartIso,
    })

    if (error) throw error

    const rows = (data ?? []) as MonthlyStatRow[]
    const eligible = rows.filter((row) => row.email)

    if (body.dryRun) {
      return new Response(JSON.stringify({ monthStart: monthStartIso, eligibleCount: eligible.length, rows: eligible }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    for (const row of eligible) {
      const email = buildEmail(row)
      const payload = {
        to: row.email,
        subject: email.subject,
        html: email.html,
        text: email.text,
        from: 'The Interventionist Network <updates@mail.theinterventionistnetwork.com>',
        sender_domain: 'mail.theinterventionistnetwork.com',
        purpose: 'transactional',
        label: 'interventionist-monthly-stats',
        queued_at: new Date().toISOString(),
        message_id: `interventionist-stats:${row.interventionist_id}:${row.month_start}`,
        idempotency_key: `interventionist-stats:${row.interventionist_id}:${row.month_start}`,
        metadata: {
          interventionist_id: row.interventionist_id,
          month_start: row.month_start,
          stats: {
            total_clicks: row.total_clicks,
            card_total_clicks: row.card_total_clicks,
          },
        },
      }

      const { error: enqueueError } = await supabase.rpc('enqueue_email', {
        queue_name: 'transactional_emails',
        payload,
      })

      if (enqueueError) throw enqueueError
    }

    return new Response(JSON.stringify({ monthStart: monthStartIso, queued: eligible.length }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
