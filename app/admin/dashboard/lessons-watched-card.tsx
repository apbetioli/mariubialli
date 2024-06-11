import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/server/db'
import { EventType } from '@prisma/client'
import { Users } from 'lucide-react'

export async function LessonsWatchedCard({ from }: { from: Date }) {
  const watched = await prisma.event.aggregate({
    where: {
      type: EventType.WATCH,
      createdAt: {
        gte: from,
      },
    },
    _count: {
      id: true,
    },
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Lessons watched</CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{watched._count.id}</div>
        <p className="text-xs text-muted-foreground">last 30 days</p>
      </CardContent>
    </Card>
  )
}
