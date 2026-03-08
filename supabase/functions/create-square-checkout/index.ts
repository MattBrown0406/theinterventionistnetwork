import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const TIER_PRICES: Record<string, { amount: number; name: string }> = {
  listed: { amount: 4900, name: "Listed Membership — $49/month" },
  featured: { amount: 19900, name: "Featured Membership — $199/month" },
  partner: { amount: 29900, name: "Partner Membership — $299/month" },
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SQUARE_ACCESS_TOKEN = Deno.env.get('SQUARE_ACCESS_TOKEN');
    if (!SQUARE_ACCESS_TOKEN) throw new Error('SQUARE_ACCESS_TOKEN is not configured');

    const SQUARE_LOCATION_ID = Deno.env.get('SQUARE_LOCATION_ID');
    if (!SQUARE_LOCATION_ID) throw new Error('SQUARE_LOCATION_ID is not configured');

    const { tier, applicationId, redirectUrl } = await req.json();

    const tierInfo = TIER_PRICES[tier];
    if (!tierInfo) throw new Error(`Invalid tier: ${tier}`);

    const idempotencyKey = crypto.randomUUID();

    const response = await fetch('https://connect.squareup.com/v2/online-checkout/payment-links', {
      method: 'POST',
      headers: {
        'Square-Version': '2024-01-18',
        'Authorization': `Bearer ${SQUARE_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idempotency_key: idempotencyKey,
        quick_pay: {
          name: tierInfo.name,
          price_money: {
            amount: tierInfo.amount,
            currency: "USD",
          },
          location_id: SQUARE_LOCATION_ID,
        },
        checkout_options: {
          redirect_url: redirectUrl,
          ask_for_shipping_address: false,
        },
        pre_populated_data: {},
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Square API error:', JSON.stringify(data));
      throw new Error(`Square API error [${response.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({
      checkoutUrl: data.payment_link?.url || data.payment_link?.long_url,
      orderId: data.payment_link?.order_id,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating checkout:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
