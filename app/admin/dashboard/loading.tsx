import { CardsSkeleton } from '../../../components/cards-skeleton'
import { ChartSkeleton } from '../../../components/chart-skeleton'
import { ListCardSkeleton } from '../../../components/list-card-skeleton'

export default function LoadingDashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <CardsSkeleton />
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <ChartSkeleton className="xl:col-span-2" />
        <ListCardSkeleton />
      </div>
    </main>
  )
}
