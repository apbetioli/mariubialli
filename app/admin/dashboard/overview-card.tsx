import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { OverviewChart } from './overview-chart'

export function OverviewCard(props: { className: string }) {
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
