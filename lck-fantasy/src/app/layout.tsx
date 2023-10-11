import type { Metadata } from 'next'
import { Chakra_Petch } from 'next/font/google'

import App from '@/components/App'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const chakaraPetch = Chakra_Petch({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
})

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
      <body className={chakaraPetch.className}>
        <App>{children}</App>
      </body>
    </html>
  )
}
