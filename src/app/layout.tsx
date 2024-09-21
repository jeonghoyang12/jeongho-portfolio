import type { Metadata } from "next"
import "./globals.css"
import { GeistMono } from "geist/font/mono"
import Header from "@/components/header"
import Sidebar from "@/components/side-bar"

export const metadata: Metadata = {
  title: "Jeongho Yang",
  description: "Jeongho's Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistMono.variable}`}>
      <body>
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}
