'use client'
import { AppStore, makeStore } from '@/lib/store'
import { setupListeners } from '@reduxjs/toolkit/query'
import { useRef } from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()

    // RTK query - optional, but required for refetchOnFocus/refetchOnReconnect behaviors
    setupListeners(storeRef.current.dispatch)
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
