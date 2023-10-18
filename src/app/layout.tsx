import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Header from '@/components/Header'

const sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: '엘리의 블로그',
    template: '엘리의 블로그 | %s'
  },
  description: '풀스텍 개발자 엘리의 블로그',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
        <Header />
        <main className='grow '>{children}</main>
        <Footer />        
        </body>
    </html>
  )
}
