import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

export const NeueBold = localFont({ src: './NeueHaasDisplayBold.ttf' })
export const NeueMedium = localFont({ src: './NeueHaasDisplayMediu.ttf' })
export const Proxima = localFont({ src: './Proxima Nova Semibold.otf' })

export const inter = Inter({
  weight: ['400', '500', '700'],
  style: ['normal'],
})
