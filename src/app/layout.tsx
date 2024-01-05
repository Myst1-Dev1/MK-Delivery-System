import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'

const poppins = Poppins({ subsets: ['latin-ext'], weight:'600'})

export const metadata: Metadata = {
  title: 'M&K Delivery',
  description: 'Restaurante japônes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
