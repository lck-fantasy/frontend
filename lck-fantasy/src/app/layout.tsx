import type { Metadata } from 'next'
import '@/styles/base/_global.scss'
import { Inter } from 'next/font/google'
import styles from '@/app/app-layout.module.scss'

import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

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
      <body className={`${inter.className} ${styles.app}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
