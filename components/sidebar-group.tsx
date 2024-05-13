import { Group } from '@prisma/client'
import { PropsWithChildren } from 'react'

type SidebarGroupProps = {
  group: Group
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
