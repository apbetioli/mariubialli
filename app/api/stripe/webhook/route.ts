import { prisma } from '@/lib/server/db'
import { EventType } from '@prisma/client'
import { notFound } from 'next/navigation'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export const dynamic = 'force-dynamic' // defaults to auto
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export const POST = async (request: Request) => {
  try {
    var event = await constructEvent(request)
    console.log('Webhook received event:', event.type, event.id)
  } catch (error: any) {
    console.log(error)
    return new Response(`Webhook Error: ${error.message}`, {
      status: 400,
      headers: corsHeaders,
    })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const assetId = session.metadata!['asset_id']

    const user = await prisma.user.findUnique({
      where: {
        email: session.customer_email!,
      },
    })
    if (!user) notFound()

    const asset = await prisma.asset.findUniqueOrThrow({
      where: {
        id: assetId,
      },
    })

    await Promise.all([
      prisma.user.update({
        data: {
          paidAssetIds: user.paidAssetIds.concat(assetId),
        },
        where: {
          id: user.id,
        },
      }),
      prisma.event.create({
        data: {
          userId: user.id,
          type: EventType.PAY,
          assetId,
          stripeSessionId: session.id,
          value: asset.price,
        },
      }),
    ])

    console.log('✅ Success. User bougth asset:', user.email, assetId)

    // TODO Send confirmation email
  }

  if (event.type === 'checkout.session.expired') {
    // TODO send an abandoned cart email
  }

  return new Response('OK', {
    status: 200,
    headers: corsHeaders,
  })
}

async function constructEvent(request: Request) {
  const rawBody = await request.text()

  const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!stripeWebhookSecret) {
    throw new Error('STRIPE_WEBHOOK_SECRET not set')
  }

  const sig = request.headers.get('Stripe-Signature')
  if (!sig) {
    throw new Error('Stripe Signature missing')
  }

  return stripe.webhooks.constructEvent(rawBody, sig, stripeWebhookSecret)
}
