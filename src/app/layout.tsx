import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Bebas_Neue } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/src/components/navbar"
import { Footer } from "@/src/components/footer"
import { Toaster } from "@/src/components/ui/toaster"
import { QuotePopup } from "../components/quote-form"
import Script from "next/script"

// const inter = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const inter = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: {
    default: "Moskill Netting Solutions | Best Mosquito Nets & Invisible Grills",
    template: "%s | Moskill Netting",
  },
  description: "Get premium mosquito nets and invisible grills in Mumbai, Maharashtra, Goa, and Gujarat. High-quality, durable, and affordable solutions for homes & offices.",
  keywords: [
    "Mosquito Net",
    "Invisible Grills",
    "Mosquito Net for Windows",
    "Bird Netting",
    "Retractable Mosquito Nets",
    "Balcony Netting",
    "Window Mosquito Mesh",
    "Stainless Steel Grills",
    "Sliding Mosquito Nets",
    "Mosquito Net Installation in Mumbai",
    "Best Mosquito Netting Services",
    "Safety Grills for Windows",
    "Pigeon Netting for Balconies",
  ],
  alternates: {
    canonical: "https://www.moskillnettingsolutions.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Best Mosquito Netting & Invisible Grills | Moskill Netting Solutions",
    description: "Moskill Netting Solutions provides high-quality mosquito nets and invisible grills for homes and offices in Mumbai, Maharashtra, Goa, and Gujarat.",
    url: "https://www.moskillnettingsolutions.com",
    type: "website",
    siteName: "Moskill Netting Solutions",
    images: [
      {
        url: "/favicon.ico", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Moskill Netting Solutions - Best Mosquito Nets and Invisible Grills",
      },
    ],
  },
  authors: [
    { name: "Moskill Netting Solutions", url: "https://www.moskillnettingsolutions.com" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16959411468"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16959411468');
          `}
        </Script>
      </head>
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
