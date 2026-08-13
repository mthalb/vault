import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
  title: 'Music & Video Dashboard',
  description:
    'A colorful, animated dashboard with quick links to music and video, switchable color themes, and a contact form.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-color-mode="auto"
      data-light-theme="light"
      data-dark-theme="dark"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
