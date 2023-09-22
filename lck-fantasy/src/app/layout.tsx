import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import App from '@/components/common/App'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LCK Fantasy',
  description: 'LCK Fantasy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App>{children}</App>
      </body>
    </html>
  )
}
