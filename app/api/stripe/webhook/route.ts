import { prisma } from '@/lib/server/db'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export const dynamic = 'force-dynamic' // defaults to auto
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export const POST = async (request: Request) => {
  const rawBody = await request.text()

  let event: Stripe.Event

  try {
    const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET
    if (!stripeWebhookSecret) {
      throw new Error('STRIPE_WEBHOOK_SECRET not set')
    }

    const sig = request.headers.get('Stripe-Signature')
    if (!sig) {
      throw new Error('Stripe Signature missing')
    }

    event = stripe.webhooks.constructEvent(rawBody, sig, stripeWebhookSecret)
  } catch (error: any) {
    console.log(error)
    return new Response(`Webhook Error: ${error.message}`, {
      status: 400,
      headers: corsHeaders,
    })
  }

  console.log('Webhook received event:', event.type, event.id)

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    console.log(session)
    const assetId = session.metadata!['asset_id']

    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email: session.customer_email!,
      },
    })
    await prisma.user.update({
      data: {
        paidAssetIds: user.paidAssetIds.concat(assetId),
      },
      where: {
        id: user.id,
      },
    })

    console.log('✅ Success. User bougth asset:', user.email, assetId)

    // TODO Send confirmation email
  }

  return new Response('OK', {
    status: 200,
    headers: corsHeaders,
  })
}
