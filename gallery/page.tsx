"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { Button } from "@/src/components/ui/button"
import { X } from "lucide-react"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin()
}

type GalleryItem = {
  id: number
  category: string
  title: string
  description: string
  image: string
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [filter, setFilter] = useState("all")
  const galleryRef = useRef<HTMLDivElement>(null)

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: "horizontal-mosquito-net",
      title: "Horizontal Sliding Window Net",
      description: "Custom horizontal sliding mosquito net installed in a modern apartment window.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      category: "horizontal-mosquito-net",
      title: "Center-Opening Mosquito Net",
      description: "Center-opening horizontal mosquito net for wide windows up to 20 feet.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      category: "vertical-mosquito-net",
      title: "Vertical Door Net",
      description: "Vertical mosquito net installed on a balcony door for insect protection.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 4,
      category: "vertical-mosquito-net",
      title: "Sliding Door Net",
      description: "Vertical mosquito net for sliding glass doors with smooth operation.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 5,
      category: "bird-netting",
      title: "Balcony Bird Netting",
      description: "Invisible bird netting installed on a residential balcony.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 6,
      category: "bird-netting",
      title: "Terrace Bird Protection",
      description: "Bird netting covering a large terrace area while maintaining visibility.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 7,
      category: "invisible-grills",
      title: "SS316 Invisible Grills",
      description: "High-strength stainless steel invisible grills providing security without obstructing views.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 8,
      category: "invisible-grills",
      title: "Balcony Safety Grills",
      description: "Invisible grills installed on a high-rise apartment balcony for child safety.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 9,
      category: "velcro-mosquito-net",
      title: "Velcro Window Net",
      description: "Simple and effective velcro mosquito net for easy installation and removal.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 10,
      category: "velcro-mosquito-net",
      title: "Removable Insect Screen",
      description: "Velcro-attached mosquito net that can be easily removed for cleaning.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 11,
      category: "roller-blinds",
      title: "Modern Roller Blinds",
      description: "Stylish roller blinds that provide privacy and light control in a living room.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 12,
      category: "roller-blinds",
      title: "Designer Wallpaper",
      description: "Custom wallpaper installation that transforms the look of a bedroom.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)

  useEffect(() => {
    if (galleryRef.current) {
      const galleryItems = galleryRef.current.querySelectorAll(".gallery-item")

      gsap.fromTo(
        galleryItems,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
      )
    }
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Gallery
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Browse through our portfolio of completed projects and get inspired for your own home. See how our
              solutions have transformed spaces across Maharashtra, Goa, and Gujarat.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant={filter === "all" ? "gradient" : "outline"} onClick={() => setFilter("all")}>
              All
            </Button>
            <Button
              variant={filter === "horizontal-mosquito-net" ? "gradient" : "outline"}
              onClick={() => setFilter("horizontal-mosquito-net")}
            >
              Horizontal Nets
            </Button>
            <Button
              variant={filter === "vertical-mosquito-net" ? "gradient" : "outline"}
              onClick={() => setFilter("vertical-mosquito-net")}
            >
              Vertical Nets
            </Button>
            <Button
              variant={filter === "bird-netting" ? "gradient" : "outline"}
              onClick={() => setFilter("bird-netting")}
            >
              Bird Netting
            </Button>
            <Button
              variant={filter === "invisible-grills" ? "gradient" : "outline"}
              onClick={() => setFilter("invisible-grills")}
            >
              Invisible Grills
            </Button>
            <Button
              variant={filter === "velcro-mosquito-net" ? "gradient" : "outline"}
              onClick={() => setFilter("velcro-mosquito-net")}
            >
              Velcro Nets
            </Button>
            <Button
              variant={filter === "roller-blinds" ? "gradient" : "outline"}
              onClick={() => setFilter("roller-blinds")}
            >
              Blinds & Wallpapers
            </Button>
          </div>

          {/* Gallery Grid */}
          <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="gallery-item relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative h-64 md:h-72">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-sm text-white/80">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Image Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition-colors"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X size={24} />
                  </button>

                  <div className="relative h-[60vh]">
                    <Image
                      src={selectedImage.image || "/placeholder.svg"}
                      alt={selectedImage.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                    <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                    <Button variant="gradient" asChild>
                      <Link href="/contact">Get a Similar Solution</Link>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a closer look at some of our most impressive installations across different locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Residential Project in Mumbai"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Residential Project in Mumbai</h3>
                <p className="text-gray-600 mb-4">
                  Complete insect protection solution for a high-rise apartment including horizontal mosquito nets for
                  windows and vertical nets for balcony doors.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Horizontal Nets
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Vertical Nets
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Villa Project in Goa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Villa Project in Goa</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive solution including mosquito nets, bird netting for the terrace, and invisible grills for
                  enhanced security without compromising the ocean view.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Bird Netting
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Invisible Grills
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Like What You See?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project and get a free quote. Our team is ready to help you create the
              perfect solution for your home.
            </p>
            <Button size="xl" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

