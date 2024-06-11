import { CardSkeleton } from './card-skeleton'

export function CardsSkeleton({ num }: { num: number }) {
  return <>{Array(num).fill(<CardSkeleton />)}</>
}
