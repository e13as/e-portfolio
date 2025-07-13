import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Elias - Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, Node.js and modern web technologies. Creating clean code and creative interfaces.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Elias' }],
  creator: 'Elias',
  openGraph: {
    title: 'Elias - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elias - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
