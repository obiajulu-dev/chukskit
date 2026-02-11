import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'chucks kit',
  description: 'we make good food',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
