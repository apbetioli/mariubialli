'use client'
import { Search } from 'lucide-react'
import { PropsWithChildren } from 'react'

type Props = {
  title: string
}

export function Empty({ title, children }: PropsWithChildren<Props>) {
  return (
    <div className="mt-6 flex h-96 items-center rounded-lg border text-center dark:border-gray-700 w-full">
      <div className="mx-auto flex w-full max-w-sm flex-col px-4">
        <div className="mx-auto rounded-full bg-primary-foreground p-3 text-primary dark:bg-gray-800">
          <Search />
        </div>
        <h2 className="mt-3 text-lg text-gray-800 dark:text-white">{title}</h2>
        <div className="mt-3 flex flex-col items-center gap-3 text-gray-500 dark:text-gray-400">
          {children}
        </div>
      </div>
    </div>
  )
}
