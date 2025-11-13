import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reforma Marketplace',
  description: 'Plataforma para conectar proprietários e prestadores de serviços de reforma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
