import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Bebas_Neue } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/src/components/navbar"
import { Footer } from "@/src/components/footer"
import { Toaster } from "@/src/components/ui/toaster"
import { QuotePopup } from "../components/quote-form"

// const inter = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const inter = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "MOSKILL NETTING SOLUTIONS - Premium Mosquito Nets & Grills",
  description:
    "Professional mosquito nets, grills, and blinds solutions since 2011. Protect your home with our high-quality products and expert installation services.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-pink-500`}>
        <div className="flex flex-col min-h-screen ">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
          <QuotePopup/>
        </div>
      </body>
    </html>
  )
}
