import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'

const roboto = localFont({
  src: './Roboto-VariableFont_wdth,wght.ttf',
})

export const metadata: Metadata = {
  title: 'PatS Portfolio',
  description: 'PatS Frontend Developer Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  )
}
