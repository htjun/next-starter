import "remixicon/fonts/remixicon.css"

import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  description: "Starter project",
  title: "App",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
