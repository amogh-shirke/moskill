"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils"
import { useRouter } from "next/navigation"
import Image from "next/image"
import logo from "@/src/images/logo.png"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    label: "Products",
    children: [
      { href: "/products/horizontal-mosquito-net", label: "Horizontal Mosquito Net" },
      { href: "/products/vertical-mosquito-net", label: "Vertical Mosquito Net" },
      { href: "/products/bird-netting", label: "Bird Netting" },
      { href: "/products/invisible-grills", label: "Invisible Grills" },
      { href: "/products/honeycomb-mosquito-net-pleated", label: "Honeycomb with Mosquito Net Pleated" },
      { href: "/products/aluminium-mosquito-net-safety", label: "Aluminium Mosquito Net with Safety" },
    ],
  },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
        )}
      >
        <div className="container flex items-center justify-between px-4 mx-auto">
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold md:text-3xl text-gradient">M</span>
              <span className="relative inline-flex items-center justify-center">
                <Image
                  src={logo}
                  alt="Moskill Logo"
                  width={32}
                  height={32}
                  className="w-[1.5em] h-[1.5em] md:w-[2.1em] md:h-[2.1em] object-contain"
                />
              </span>
              <span className="text-2xl font-bold md:text-3xl text-gradient">SKILL NETTING</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 md:flex">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative group"
              >
                {link.children ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(link.label)}
                      className="flex items-center font-medium text-gray-800 transition-colors hover:text-primary group"
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className="ml-1 transition-transform duration-200 group-hover:rotate-180"
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 w-64 py-2 mt-1 bg-white rounded-md shadow-lg top-full"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-primary hover:text-white"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link href={link.href} className="font-medium text-gray-800 transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Button variant="gradient" onClick={() => router.push("/contact")}>
                Get Quote
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="text-gray-800 md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white md:hidden"
            >
              <div className="container flex flex-col px-4 py-4 mx-auto space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {link.children ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(link.label)}
                          className="flex items-center justify-between w-full py-2 font-medium text-gray-800 hover:text-primary"
                        >
                          {link.label}
                          <ChevronDown
                            size={16}
                            className={cn(
                              "transition-transform duration-200",
                              activeDropdown === link.label ? "rotate-180" : "",
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 mt-2 space-y-2"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block py-2 text-sm text-gray-700 hover:text-primary"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="block py-2 font-medium text-gray-800 hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <Button variant="gradient" onClick={() => router.push("/contact")} className="w-full">
                  Get Quote
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

