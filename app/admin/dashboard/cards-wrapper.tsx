import { CardSkeleton } from '@/components/card-skeleton'
import { Suspense } from 'react'
import { ActiveUsersCard } from './active-users-card'
import { SalesCard } from './sales-card'
import { SubscriptionsCard } from './subscriptions-card'
import { TotalRevenueCard } from './total-revenue-card'

export async function CardsWrapper() {
  const from = new Date(0) //getDate30DaysAgo()
  return (
    <>
      <Suspense fallback={<CardSkeleton />}>
        <TotalRevenueCard from={from} />
      </Suspense>
      <Suspense fallback={<CardSkeleton />}>
        <SalesCard from={from} />
      </Suspense>
      <Suspense fallback={<CardSkeleton />}>
        <SubscriptionsCard from={from} />
      </Suspense>
      <Suspense fallback={<CardSkeleton />}>
        <ActiveUsersCard from={from} />
      </Suspense>
    </>
  )
}
