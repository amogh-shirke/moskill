"use client"

import "./styles.css"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/src/components/ui/button"
import { Shield, Star, Award, CheckCircle, Maximize2, ArrowUpDown, Bird, Lock, Layers, Paintbrush, Grid } from "lucide-react"
import HeroSlider from "@/src/components/hero-slider"

// Mosquito Net Animation Component
const MosquitoNetAnimation = () => {
  const netRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (netRef.current) {
      // Animate the mosquito net mesh pattern
      gsap.to(netRef.current.querySelectorAll(".net-line"), {
        y: "10px",
        stagger: 0.05,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      })
    }
  }, [])

  return (
    <div ref={netRef} className="absolute inset-0 z-10 overflow-hidden pointer-events-none opacity-30">
      <div className="relative w-full h-full">
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="net-line absolute w-full h-[1px] bg-white/30" style={{ top: `${i * 5}%` }} />
          ))}
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="net-line absolute h-full w-[1px] bg-white/30" style={{ left: `${i * 5}%` }} />
          ))}
      </div>
    </div>
  )
}

// Floating Mosquito Animation
const FloatingMosquito = () => {
  const mosquitoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mosquitoRef.current && typeof window !== "undefined") {
      // Get viewport dimensions
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      // Random starting position within viewport
      const startX = Math.random() * viewportWidth
      const startY = Math.random() * viewportHeight

      // Set initial position
      gsap.set(mosquitoRef.current, {
        x: startX,
        y: startY,
        rotation: Math.random() * 360,
      })

      // Create random flight path
      const timeline = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.5,
      })

      // Add random movement points
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * viewportWidth
        const y = Math.random() * viewportHeight

        timeline.to(mosquitoRef.current, {
          x: x,
          y: y,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 3,
          ease: "power1.inOut",
        })
      }
    }
  }, [])

  return (
    <div ref={mosquitoRef} className="absolute z-30 w-6 h-6 pointer-events-none">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <animateTransform attributeType="XML" attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="0.5s" repeatCount="indefinite"/>
          
          {/* <!-- Body --> */}
          <ellipse cx="12" cy="14" rx="2" ry="4" stroke="black" strokeWidth="1.5" fill="none"/>
          <circle cx="12" cy="9" r="1.5" stroke="black" strokeWidth="1.5" fill="none"/>
          
          {/* <!-- Wings --> */}
          <path d="M10 9 C5 2, 2 5, 8 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M14 9 C19 2, 22 5, 16 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          
          {/* <!-- Legs --> */}
          <path d="M10 16 L5 20" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 16 L19 20" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 18 L4 22" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 18 L20 22" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 18 L12 22" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          
          {/* <!-- Antennae --> */}
          <line x1="11.5" y1="8" x2="10" y2="6" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="12.5" y1="8" x2="14" y2="6" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      </svg>

    </div>
  )
}

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 })
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })

  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      gsap.fromTo(".hero-content", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 })
    }

    // Stats counter animation
    if (statsRef.current) {
      const counters = statsRef.current.querySelectorAll(".stat-counter")

      counters.forEach((counter) => {
        const target = Number.parseInt(counter.getAttribute("data-target") || "0")

        ScrollTrigger.create({
          trigger: counter,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(
              counter,
              { innerText: "0" },
              {
                innerText: target,
                duration: 2,
                snap: { innerText: 1 },
                ease: "power2.out",
              },
            )
          },
        })
      })
    }
  }, [])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-black/30" />
          <MosquitoNetAnimation />
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <FloatingMosquito key={i} />
            ))}
          <HeroSlider />
        </div>

        <div className="container relative z-20 px-4 mx-auto hero-content">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              className="mb-6 text-4xl font-bold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Premium Mosquito Nets & Insect Protection Solutions
            </motion.h1>

            <motion.p
              className="mb-8 text-lg text-gray-100 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Serving Maharashtra, Goa, and Gujarat since 2011. Protect your home from insects while maximizing
              ventilation with our high-quality custom solutions.
            </motion.p>

            <motion.div
              className="flex flex-col justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button variant="gradient" size="xl" asChild>
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="text-white border-white bg-white/20 backdrop-blur-sm hover:bg-white/30"
                asChild
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose MOSKILL?</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We provide premium quality insect protection solutions with professional installation and excellent
              customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-white rounded-lg shadow-lg card-hover">
              <div className="flex items-center justify-center mb-6 rounded-full w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Premium Quality</h3>
              <p className="text-gray-600">We use only the highest quality materials for durability and performance.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg card-hover">
              <div className="flex items-center justify-center mb-6 rounded-full w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600">
                <Star className="text-white" size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Expert Installation</h3>
              <p className="text-gray-600">
                Our skilled technicians ensure perfect fitting and installation every time.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg card-hover">
              <div className="flex items-center justify-center mb-6 rounded-full w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold">12+ Years Experience</h3>
              <p className="text-gray-600">With over a decade of experience, we've perfected our craft and service.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg card-hover">
              <div className="flex items-center justify-center mb-6 rounded-full w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600">
                <CheckCircle className="text-white" size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold">90% Ventilation</h3>
              <p className="text-gray-600">
                Our solutions optimize airflow and natural light while keeping insects out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="relative py-20 bg-gray-50 services-section">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            className="absolute right-0 top-0 w-[150%] h-[150%] bg-gradient-to-r from-transparent to-pink-500/10"
            initial={{ x: "100%", rotate: -5 }}
            animate={{ x: "-100%", rotate: -5 }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </div>
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Explore our range of high-quality products and services designed to protect your home and enhance your
              living space.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
  title: "Horizontal Mosquito Net",
  description:
    "Space-efficient, retractable, center-opening nets up to 20 feet wide. Perfect for windows and smaller openings.",
  image:
    "https://res.cloudinary.com/du3er2t49/image/upload/v1741181642/uploads/ugokmsqkcnk7by6uevw2.webp",
  icon: <Maximize2 className="text-white" size={28} />,
  link: "/services#horizontal-mosquito-net",
},
{
  title: "Vertical Mosquito Net",
  description:
    "Ideal for tall windows and sliding doors. Vertical operation makes them perfect for doorways and large openings.",
  image:
    "https://res.cloudinary.com/du3er2t49/image/upload/v1741107632/t6uf1ih6p0rvgwh7jle0.webp",
  icon: <ArrowUpDown className="text-white" size={28} />,
  link: "/services#vertical-mosquito-net",
},
{
  title: "Bird Netting",
  description:
    "Durable and strong netting solutions that protect open spaces from birds while maintaining aesthetics.",
  image:
    "https://res.cloudinary.com/du3er2t49/image/upload/v1741181636/uploads/oucruqkspskmkl3arytc.webp",
  icon: <Bird className="text-white" size={28} />,
  link: "/services#bird-netting",
},
{
  title: "Invisible Grills",
  description:
    "High-strength stainless steel grills that provide security without compromising on aesthetics or views.",
  image:
    "https://res.cloudinary.com/du3er2t49/image/upload/v1741181654/uploads/ad9otjjcgvvne4kc6btf.webp",
  icon: <Lock className="text-white" size={28} />,
  link: "/services#invisible-grills",
},
{
  title: "Honeycomb with Mosquito Net Pleated",
  description:
    "Dual-layer protection with pleated mosquito net and stylish honeycomb structure, ensuring privacy and airflow.",
  image:
    "https://res.cloudinary.com/du3er2t49/image/upload/v1741712925/rx3uqiygslcixwz4t1xt.webp",
  icon: <Grid className="text-white" size={28} />,
  link: "/services#honeycomb-mosquito-net-pleated",
},
{
  title: "Aluminium Mosquito Net with Safety",
  description:
    "Durable aluminum frame with stainless steel mesh, offering high security and excellent ventilation.",
  image:
    "https://res.cloudinary.com/du3er2t49/image/upload/v1741712343/pnvv5tvxabra4kwk29zi.jpg ",
  icon: <Shield className="text-white" size={28} />,
  link: "/services#aluminium-mosquito-net-safety",
},
            ].map((service, index) => (
              <motion.div
                key={index}
                className="relative w-full overflow-hidden bg-white rounded-lg shadow-lg card-hover group"
                initial={{ opacity: 0, y: 50 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="absolute inset-0 z-0 opacity-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative h-48 sm:h-52 md:h-60">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                  <p className="mb-4 text-gray-600 line-clamp-3 sm:line-clamp-4">{service.description}</p>
                  <Button variant="link" className="p-0 text-primary" asChild>
                    <Link href={service.link}>Learn More →</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-20 bg-white">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 10px, #000 10px, #000 11px), repeating-linear-gradient(90deg, transparent, transparent 10px, #000 10px, #000 11px)",
              backgroundSize: "11px 11px",
            }}
          ></div>
        </div>
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Product Features</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our products are designed with quality, functionality, and aesthetics in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-lg card-hover">
              <div className="flex items-start mb-4">
                <CheckCircle className="mt-1 mr-3 text-primary" />
                <div>
                  <h3 className="mb-2 text-lg font-bold">Custom-fit Insect Screens</h3>
                  <p className="text-gray-600">
                    Perfectly tailored screens for doors and windows of any size or shape.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg card-hover">
              <div className="flex items-start mb-4">
                <CheckCircle className="mt-1 mr-3 text-primary" />
                <div>
                  <h3 className="mb-2 text-lg font-bold">Charcoal & Grey Mesh Options</h3>
                  <p className="text-gray-600">
                    Multiple mesh colors for better visibility and seamless integration with your decor.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg card-hover">
              <div className="flex items-start mb-4">
                <CheckCircle className="mt-1 mr-3 text-primary" />
                <div>
                  <h3 className="mb-2 text-lg font-bold">Aluminum Frames</h3>
                  <p className="text-gray-600">
                    Powder-coated or anodized aluminum frames for durability and weather resistance.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg card-hover">
              <div className="flex items-start mb-4">
                <CheckCircle className="mt-1 mr-3 text-primary" />
                <div>
                  <h3 className="mb-2 text-lg font-bold">Easy-to-Install Mechanisms</h3>
                  <p className="text-gray-600">
                    Retractable mechanisms for convenience and ease of use in daily operation.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg card-hover">
              <div className="flex items-start mb-4">
                <CheckCircle className="mt-1 mr-3 text-primary" />
                <div>
                  <h3 className="mb-2 text-lg font-bold">90% Ventilation</h3>
                  <p className="text-gray-600">
                    Our mesh allows maximum airflow and natural light while keeping insects out.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg card-hover">
              <div className="flex items-start mb-4">
                <CheckCircle className="mt-1 mr-3 text-primary" />
                <div>
                  <h3 className="mb-2 text-lg font-bold">Durable Construction</h3>
                  <p className="text-gray-600">
                    Built to last with high-quality materials that withstand daily use and weather conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Priya Sharma",
                location: "Thane",
                quote:
                  "The mosquito nets installed by MOSKILL are of excellent quality. The installation was quick and professional. We can now enjoy fresh air without worrying about insects!",
                rating: 5,
              },
              {
                name: "Rajesh Patel",
                location: "Mumbai",
                quote:
                  "We got invisible grills installed for our new apartment. The team was punctual, professional, and the quality of work is outstanding. Perfect balance of security and aesthetics.",
                rating: 5,
              },
              {
                name: "Anita Desai",
                location: "Pune",
                quote:
                  "The roller blinds look amazing and the service was excellent. The team was very helpful in suggesting the right options for our home. Highly recommended!",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isTestimonialsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                      />
                    ))}
                </div>
                <p className="mb-6 italic text-gray-600">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 text-white bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-2 text-4xl font-bold">
                <span className="stat-counter" data-target="12">
                  0
                </span>
                +
              </h3>
              <p className="text-white/80">Years of Experience</p>
            </div>
            <div>
              <h3 className="mb-2 text-4xl font-bold">
                <span className="stat-counter" data-target="3000">
                  0
                </span>
                +
              </h3>
              <p className="text-white/80">Happy Clients</p>
            </div>
            <div>
              <h3 className="mb-2 text-4xl font-bold">
                <span className="stat-counter" data-target="3700">
                  0
                </span>
                +
              </h3>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div>
              <h3 className="mb-2 text-4xl font-bold">
                <span className="stat-counter" data-target="98">
                  0
                </span>
                %
              </h3>
              <p className="text-white/80">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="p-8 text-center text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl md:p-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Contact us today for a free consultation and quote. Let us help you protect your home with our premium
              solutions.
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

