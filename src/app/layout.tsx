import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import React from 'react'
import { clsx } from 'clsx'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blip Chatbot',
  description:
    'Blip Search is an open-source Question Answering tool powered by OpenAI. It allows users to ask questions and get accurate answers based on the provided context.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Providers>
      <html lang="en" className="min-h-screen h-full max-w-5xl mx-auto p-14 bg-gray-50">
        <body className={clsx(inter.className, 'h-full')}>
          {children}
          <Toaster />
        </body>
      </html>
    </Providers>
  )
}
