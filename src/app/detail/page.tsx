'use client'
import dynamic from 'next/dynamic'
import socialDetailSlice from './slice'
import { store } from '@/redux'

const Page = dynamic(
  () =>
    import('./detail').then((mod) => {
      store.injectReducer('socialDetail', socialDetailSlice)

      return mod.default
    }) as any,
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
)

export default Page
