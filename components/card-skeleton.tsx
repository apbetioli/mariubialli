import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function CardSkeleton() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>
          <Skeleton className="h-[10px] w-[150px] rounded-xl" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-[30px] w-max-[250px] w-full rounded-md" />
        <Skeleton className="h-5 w-max-[200px] w-full" />
      </CardContent>
    </Card>
  )
}
