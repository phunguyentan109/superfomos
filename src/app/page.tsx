'use client'
import dynamic from 'next/dynamic'
import createSocialSlice from './slice'
import { store } from '@/redux'

const Page = dynamic(
  () =>
    import('./home').then((mod) => {
      store.injectReducer('createSocial', createSocialSlice)

      return mod.default
    }) as any,
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
)

export default Page
