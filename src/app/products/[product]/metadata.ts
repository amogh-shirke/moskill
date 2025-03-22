import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Moskill Netting Solutions",
  description: "Explore our range of premium mosquito nets, invisible grills, bird netting, and more. High-quality, customizable, and designed for maximum safety.",
  keywords: [
    "Mosquito Net",
    "Invisible Grills",
    "Bird Netting",
    "Balcony Safety",
    "Mosquito Net Price",
    "Best Mosquito Net in Mumbai",
    "Moskill Netting Solutions",
  ],
  alternates: {
    canonical: "https://www.moskillnettingsolutions.com/products",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Our Products | Moskill Netting Solutions",
    description: "Explore our range of premium mosquito nets, invisible grills, bird netting, and more.",
    url: "https://www.moskillnettingsolutions.com/products",
    type: "website",
    siteName: "Moskill Netting Solutions",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Moskill Netting Solutions - High-Quality Mosquito Nets",
      },
    ],
  },
  authors: [{ name: "Moskill Netting Solutions", url: "https://www.moskillnettingsolutions.com" }],
  icons: { icon: "/favicon.ico" },
};