import { ActiveUsersCard } from './active-users-card'
import { OverviewCard } from './overview-card'
import { RecentSalesCard } from './recent-sales-card'
import { SalesCard } from './sales-card'
import { SubscriptionsCard } from './subscriptions-card'
import { TotalRevenueCard } from './total-revenue-card'

export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <TotalRevenueCard />
        <SubscriptionsCard />
        <SalesCard />
        <ActiveUsersCard />
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <OverviewCard className="xl:col-span-2" />
        <RecentSalesCard />
      </div>
    </main>
  )
}
