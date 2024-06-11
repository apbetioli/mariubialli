import { CheckoutRequest } from '@/app/types'
import { getCurrentUser } from '@/lib/server/auth'
import { prisma } from '@/lib/server/db'
import { notFound } from 'next/navigation'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export const POST = async (request: Request) => {
  const user = await getCurrentUser()

  const body: CheckoutRequest = await request.json()
  const origin = request.headers.get('origin')!
  const path = body.redirect

  const asset = await prisma.asset.findUnique({
    where: {
      id: body.assetId,
    },
  })
  if (!asset) notFound()

  try {
    const session = await stripe.checkout.sessions.create({
      metadata: {
        asset_id: body.assetId,
      },
      customer_email: user.email,
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'BRL',
            unit_amount: Math.round(asset.price * 100),
            product_data: {
              name: asset.name,
              description: asset.description,
              images: [asset.image],
            },
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}${path}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}${path}?cancel=true&session_id={CHECKOUT_SESSION_ID}`,
    })
    return NextResponse.json({ id: session.id })
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
