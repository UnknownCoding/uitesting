"use client"
import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <AnimatePresence>
          <Nav/>
          {children}  
        </AnimatePresence>      
      </body>
    </html>
  )
}
