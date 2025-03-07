"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

const images = [
  "https://res.cloudinary.com/du3er2t49/image/upload/v1741109733/qlogv4b3zbimfyzf0kay.jpg",
  "https://res.cloudinary.com/du3er2t49/image/upload/v1741110818/h5dev2uilps45czlryyd.jpg",
  "https://res.cloudinary.com/du3er2t49/image/upload/v1741108265/hmfjcjsnf4nuywnvo8nt.jpg",
  "https://res.cloudinary.com/du3er2t49/image/upload/v1741110817/hyucdutz9onmxah8limy.jpg",
  "https://res.cloudinary.com/du3er2t49/image/upload/v1741110816/pvxd7khyoxw73fng2qev.jpg",
]

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const slideDuration = 4000 // 4 seconds per slide

  // Function to reset the timer
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
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
  }, [currentIndex]) // Add currentIndex to dependency array

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
      <div className="absolute left-0 right-0 flex justify-center gap-2 bottom-4">
        {images.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white scale-110" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

