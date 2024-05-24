import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { OverviewChart } from './overview-chart'

export async function OverviewCard(props: { className: string }) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <OverviewChart />
      </CardContent>
    </Card>
  )
}
