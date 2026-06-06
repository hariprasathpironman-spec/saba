import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Saba Creation | Premium Wedding & Event Photography Studio',
  description:
    'Saba Creation is a premium photography studio capturing memories that last forever — Wedding, Pre-Wedding, Outdoor, Baby, Birthday and Event photography.',
  keywords: [
    'wedding photography',
    'pre-wedding shoot',
    'event photography',
    'baby photoshoot',
    'photography studio',
    'Saba Creation',
  ],
  openGraph: {
    title: 'Saba Creation | Premium Photography Studio',
    description: 'Capturing memories that last forever.',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1a1814',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${cormorant.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
