import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/server/db'
import { EventType } from '@prisma/client'
import { DollarSign } from 'lucide-react'

export async function TotalRevenueCard({ from }: { from: Date }) {
  const events = await prisma.event.aggregate({
    where: {
      type: EventType.PAY,
      createdAt: {
        gte: from,
      },
    },
    _sum: {
      value: true,
    },
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          R$ {(events._sum.value ?? 0).toFixed(2)}
        </div>
        <p className="text-xs text-muted-foreground">last 30 days</p>
      </CardContent>
    </Card>
  )
}
