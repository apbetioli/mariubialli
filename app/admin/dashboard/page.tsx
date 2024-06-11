import { ChartSkeleton } from '@/components/chart-skeleton'
import { ListCardSkeleton } from '@/components/list-card-skeleton'
import { Suspense } from 'react'
import { CardsWrapper } from './cards-wrapper'
import { OverviewCard } from './overview-card'
import { RecentSalesCard } from './recent-sales-card'

export default async function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <CardsWrapper />
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Suspense fallback={<ChartSkeleton className="xl:col-span-2" />}>
          <OverviewCard className="xl:col-span-2" />
        </Suspense>
        <Suspense fallback={<ListCardSkeleton />}>
          <RecentSalesCard />
        </Suspense>
      </div>
    </main>
  )
}
