import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rho Chapter - Lambda Upsilon Lambda Fraternity, Inc.",
  description:
    "Official website of the Rho Chapter of Lambda Upsilon Lambda Fraternity, Incorporated. La Unidad Latina - Academic Excellence, Cultural Awareness, Community Service.",
  keywords:
    "Lambda Upsilon Lambda, LUL, Rho Chapter, Latino fraternity, brotherhood, academic excellence, cultural awareness, community service",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
