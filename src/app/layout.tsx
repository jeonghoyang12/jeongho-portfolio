import type { Metadata } from "next"
import "./globals.css"
import { GeistMono } from "geist/font/mono"
import Header from "@/components/header"
// import Sidebar from "@/components/side-bar"

export const metadata: Metadata = {
  title: "JEONGHO YANG",
  description: "Jeongho's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistMono.variable}`}>
      <body className="bg-[#1d1d1d] text-[14px]">
        <Header />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {children}
        </div>
      </body>
    </html>
  )
}
