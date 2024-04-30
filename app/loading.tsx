import { Spinner } from '@/components/ui/icons'

export default function LoadingPage() {
  return (
    <div
      className="flex min-h-full w-full justify-center items-center"
      role="status"
    >
      <Spinner />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
