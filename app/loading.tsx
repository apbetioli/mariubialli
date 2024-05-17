import { Spinner } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

export default function LoadingPage({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex min-h-full w-full justify-center items-center',
        className,
      )}
      role="status"
    >
      <Spinner />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
