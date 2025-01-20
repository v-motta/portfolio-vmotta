import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} ${inter.variable} bg-zinc-950 font-inter text-zinc-50 antialiased`}
      >
        <Header />

        {children}

        <Footer />

        <Toaster position="top-right" richColors expand />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
