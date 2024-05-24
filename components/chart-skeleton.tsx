import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function ChartSkeleton({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-[25px] w-[150px] rounded-xl" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[350px] w-full rounded-xl" />
        </div>
      </CardContent>
    </Card>
  )
}
