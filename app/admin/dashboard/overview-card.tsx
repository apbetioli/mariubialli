import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/server/db'
import { getDate12MonthsAgo, getDate30DaysAgo } from '@/lib/utils'
import { EventType } from '@prisma/client'
import { OverviewChart } from './overview-chart'

export async function OverviewCard(props: { className: string }) {
  function getMonthYear(date: Date) {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`
  }

  const sales = await prisma.event.findMany({
    where: {
      type: EventType.PAY,
      createdAt: {
        gte: getDate12MonthsAgo(),
      },
    },
  })

  const initial: { [name: string]: number } = {}
  let today = new Date()
  for (let i = 0; i < 12; i++) {
    const monthYear = getMonthYear(today)
    initial[monthYear] = 0
    today = getDate30DaysAgo(today)
  }

  const monthlySalesSummary = sales.reduce((acc, sale) => {
    const monthYear = getMonthYear(new Date(sale.createdAt))
    acc[monthYear] += sale.value ?? 0
    return acc
  }, initial)

  const data = Object.entries(monthlySalesSummary).map(([name, total]) => {
    return { name, total }
  })

  data.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
        <p className="text-xs text-muted-foreground">last 12 months</p>
      </CardHeader>
      <CardContent className="pl-2">
        <OverviewChart data={data} />
      </CardContent>
    </Card>
  )
}
