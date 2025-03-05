"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

const images = [
  "/placeholder.svg?height=1080&width=1920&text=Image1",
  "/placeholder.svg?height=1080&width=1920&text=Image2",
  "/placeholder.svg?height=1080&width=1920&text=Image3",
  "/placeholder.svg?height=1080&width=1920&text=Image4",
  "/placeholder.svg?height=1080&width=1920&text=Image5",
]

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const slideDuration = 5000 // 5 seconds per slide

  // Function to reset the timer
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()

    // Set up automatic sliding
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, slideDuration)

    // Clean up the timeout when component unmounts
    return () => {
      resetTimeout()
    }
  }, []) //Removed resetTimeout from dependency array

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Moskill Netting Solutions - Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
}

