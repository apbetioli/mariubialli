import { ActiveUsersCard } from './active-users-card'
import { SalesCard } from './sales-card'
import { SubscriptionsCard } from './subscriptions-card'
import { TotalRevenueCard } from './total-revenue-card'

export async function CardsWrapper() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500)
  })

  return (
    <>
      <TotalRevenueCard />
      <SubscriptionsCard />
      <SalesCard />
      <ActiveUsersCard />
    </>
  )
}
