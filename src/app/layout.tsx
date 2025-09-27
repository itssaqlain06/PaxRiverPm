import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pax River Property Management',
  description: 'Property management in Southern Maryland',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans">
        <Header/>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}