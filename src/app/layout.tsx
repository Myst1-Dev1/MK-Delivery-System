import type { Metadata } from 'next'
import { Suspense } from 'react';
import { Poppins } from 'next/font/google'
import './globals.css'

import { Header } from './components/Header'
import { AuthProvider } from './services/hooks/auth/auth'
import { UserProvider } from './services/hooks/useUser/useUser'
import { QueryProvider } from './services/hooks/useQuery/useQuery'
import Loading from './loading';

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
          <QueryProvider>
            <AuthProvider>
              <UserProvider>
                <Header />
                <Suspense fallback={<Loading />}>
                  {children}
                </Suspense>
              </UserProvider>
            </AuthProvider>
          </QueryProvider>
        </body> 
      </html>
  )
}
