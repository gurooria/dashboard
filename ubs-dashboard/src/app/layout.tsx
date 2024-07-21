import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import { Nav } from '@/components/navigation'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cost analysis of shares',
  description: 'Visualisation DEMO for summer project',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="bg-white dark:bg-zinc-900 lg:bg-zinc-100 dark:lg:bg-zinc-950"
    >
      <body className={`${inter.className} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Nav>{children}</Nav>
        </ThemeProvider>
      </body>
    </html>
  )
}
