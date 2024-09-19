import { CheckoutRequest } from '@/app/types'
import { Stripe, loadStripe } from '@stripe/stripe-js'

let stripePromise: Promise<Stripe | null>
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  }
  return stripePromise
}

const useStripe = () => {
  const checkout = async (assetIds: string[], redirect: string) => {
    const stripe = await getStripe()
    const response = await fetch(`/api/stripe/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        assetIds,
        redirect,
      } satisfies CheckoutRequest),
    })
    const session = await response.json()
    await stripe?.redirectToCheckout({ sessionId: session.id })
  }

  return { checkout }
}

export default useStripe
