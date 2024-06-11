import { ScrollArea } from '@/components/ui/scroll-area'
import { getCurrentUser } from '@/lib/server/auth'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import AdminMenu from './admin-menu'

const AdminLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser()
  if (!user.isAdmin) {
    notFound()
  }

  return (
    <div className="flex flex-col md:flex-row md:h-[calc(100vh-6rem)] w-full">
      <aside className="flex md:flex-col md:border-r shrink-0 overflow-auto bg-white">
        <AdminMenu />
      </aside>
      <div className="flex min-h-full w-full flex-col bg-muted/40">
        <ScrollArea>{children}</ScrollArea>
      </div>
    </div>
  )
}

export default AdminLayout
