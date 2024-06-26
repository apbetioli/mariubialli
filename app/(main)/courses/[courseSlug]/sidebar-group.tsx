import { UIGroup } from '@/app/types'
import { PropsWithChildren } from 'react'

type SidebarGroupProps = {
  group: UIGroup
}

export const SidebarGroup = ({
  group,
  children,
}: PropsWithChildren<SidebarGroupProps>) => {
  return (
    <div>
      <h2 className="px-4 text-lg font-semibold tracking-tight bg-primary/80 text-primary-foreground">
        {group.name}
      </h2>
      {children}
    </div>
  )
}
