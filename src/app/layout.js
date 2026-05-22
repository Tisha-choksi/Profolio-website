import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans-alt',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Tisha Choksi — AI/ML Engineer',
  description:
    'GenAI, RAG architectures, and applied NLP specialist. Building production-grade AI systems across e-commerce, blockchain, and customer automation.',
  openGraph: {
    title: 'Tisha Choksi — AI/ML Engineer',
    description:
      'GenAI, RAG architectures, and applied NLP specialist building production-grade AI systems.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      style={{ colorScheme: 'dark' }}
    >
      <body>{children}</body>
    </html>
  )
}
