import { CardSkeleton } from '@/components/card-skeleton'
import { Suspense } from 'react'
import { ActiveUsersCard } from './active-users-card'
import { LessonsWatchedCard } from './lessons-watched-card'
import { SalesCard } from './sales-card'
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
        <LessonsWatchedCard from={from} />
      </Suspense>
      <Suspense fallback={<CardSkeleton />}>
        <ActiveUsersCard from={from} />
      </Suspense>
    </>
  )
}
