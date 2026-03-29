import type { Metadata } from "next"

import { GeistMono, GeistSans } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  description: "Starter App built from a private Next.js starter.",
  title: "Starter App",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
