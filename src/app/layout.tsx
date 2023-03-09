'use client'
import './globals.css'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import { store } from '@/redux'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </Provider>
  )
}
