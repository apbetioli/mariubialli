import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/server/db'
import { EventType } from '@prisma/client'
import { CreditCard } from 'lucide-react'

export async function SalesCard({ from }: { from: Date }) {
  const count = await prisma.event.count({
    where: {
      type: EventType.PAY,
      value: {
        gt: 0,
      },
      createdAt: {
        gte: from,
      },
    },
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Sales</CardTitle>
        <CreditCard className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{count}</div>
        <p className="text-xs text-muted-foreground">last 30 days</p>
      </CardContent>
    </Card>
  )
}
