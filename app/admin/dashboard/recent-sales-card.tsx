import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/server/db'
import { EventType } from '@prisma/client'

export async function RecentSalesCard() {
  const events = await prisma.event.findMany({
    include: {
      user: true,
    },
    where: {
      type: EventType.PAY,
      value: {
        gt: 0,
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 10,
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        {events.map((event) => (
          <div key={event.id} className="grid items-center gap-4">
            <div className="gap-1">
              <p className="text-sm font-medium leading-none">
                {event.createdAt.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">
                {event.user.name} - {event.user.email}
              </p>
            </div>
            <div className="ml-auto font-medium">
              R$ {(event.value ?? 0).toFixed(2)}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
