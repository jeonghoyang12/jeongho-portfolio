import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "jeonghoy",
  description: "Jeongho's Portfolio",
  icons: {
    icon: "/images/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="bg-[#ffffff] text-black text-[16px] min-h-screen flex flex-col">
        <main className="flex-1">
          <div className="max-w-[780px] mx-auto px-6 sm:px-8 lg:px-12 mt-12">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
