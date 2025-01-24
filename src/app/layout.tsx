import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Providers } from './providers'

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jet-brains-mono',
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Vinicius Motta',
  description:
    'A simple portfolio of Vinicius Motta that contains some of my projects',
  keywords: [
    'vinicius motta',
    'portfolio',
    'software developer',
    'web development',
    'next.js',
    'typescript',
    'javascript',
    'tailwindcss',
    'prisma',
    'react',
    'nodejs',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetBrainsMono.variable} ${inter.variable} bg-zinc-200 font-inter text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-50`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>

        <Toaster position="top-right" richColors expand />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
