"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/src/components/ui/button"
import { Shield, Star, Award, CheckCircle, Maximize2, ArrowUpDown, Bird, Lock, Layers, Paintbrush } from "lucide-react"

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
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Moskill Netting Solutions"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 hero-content">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Premium Mosquito Nets & Insect Protection Solutions
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Serving Maharashtra, Goa, and Gujarat since 2011. Protect your home from insects while maximizing
              ventilation with our high-quality custom solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
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
                className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white/30"
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose MOSKILL?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide premium quality insect protection solutions with professional installation and excellent
              customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
              <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-600">We use only the highest quality materials for durability and performance.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
              <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Star className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Installation</h3>
              <p className="text-gray-600">
                Our skilled technicians ensure perfect fitting and installation every time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
              <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">12+ Years Experience</h3>
              <p className="text-gray-600">With over a decade of experience, we've perfected our craft and service.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
              <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">90% Ventilation</h3>
              <p className="text-gray-600">
                Our solutions optimize airflow and natural light while keeping insects out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our range of high-quality products and services designed to protect your home and enhance your
              living space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Horizontal Mosquito Net",
                description:
                  "Space-efficient, retractable, center-opening nets up to 20 feet wide. Perfect for windows and smaller openings.",
                image: "/placeholder.svg?height=600&width=800",
                icon: <Maximize2 className="text-white" size={28} />,
                link: "/services#horizontal-mosquito-net",
              },
              {
                title: "Vertical Mosquito Net",
                description:
                  "Ideal for tall windows and sliding doors. Vertical operation makes them perfect for doorways and large openings.",
                image: "/placeholder.svg?height=600&width=800",
                icon: <ArrowUpDown className="text-white" size={28} />,
                link: "/services#vertical-mosquito-net",
              },
              {
                title: "Bird Netting",
                description:
                  "Durable and strong netting solutions that protect open spaces from birds while maintaining aesthetics.",
                image: "/placeholder.svg?height=600&width=800",
                icon: <Bird className="text-white" size={28} />,
                link: "/services#bird-netting",
              },
              {
                title: "Invisible Grills (SS316)",
                description:
                  "High-strength stainless steel grills that provide security without compromising on aesthetics or views.",
                image: "/placeholder.svg?height=600&width=800",
                icon: <Lock className="text-white" size={28} />,
                link: "/services#invisible-grills",
              },
              {
                title: "Velcro Mosquito Net",
                description:
                  "Simple, removable, and effective mosquito nets with velcro attachments for easy installation and removal.",
                image: "/placeholder.svg?height=600&width=800",
                icon: <Layers className="text-white" size={28} />,
                link: "/services#velcro-mosquito-net",
              },
              {
                title: "Roller Blinds & Wallpapers",
                description:
                  "Stylish, customizable interior solutions that add elegance to your space while providing privacy and light control.",
                image: "/placeholder.svg?height=600&width=800",
                icon: <Paintbrush className="text-white" size={28} />,
                link: "/services#roller-blinds",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg card-hover"
                initial={{ opacity: 0, y: 50 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative h-60">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="link" className="p-0 text-primary" asChild>
                    <Link href={service.link}>Learn More →</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our products are designed with quality, functionality, and aesthetics in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-primary mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Custom-fit Insect Screens</h3>
                  <p className="text-gray-600">
                    Perfectly tailored screens for doors and windows of any size or shape.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-primary mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Charcoal & Grey Mesh Options</h3>
                  <p className="text-gray-600">
                    Multiple mesh colors for better visibility and seamless integration with your decor.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-primary mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Aluminum Frames</h3>
                  <p className="text-gray-600">
                    Powder-coated or anodized aluminum frames for durability and weather resistance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-primary mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Easy-to-Install Mechanisms</h3>
                  <p className="text-gray-600">
                    Retractable mechanisms for convenience and ease of use in daily operation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-primary mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">90% Ventilation</h3>
                  <p className="text-gray-600">
                    Our mesh allows maximum airflow and natural light while keeping insects out.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-primary mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Durable Construction</h3>
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="bg-white p-6 rounded-lg shadow-lg"
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
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">
                <span className="stat-counter" data-target="12">
                  0
                </span>
                +
              </h3>
              <p className="text-white/80">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">
                <span className="stat-counter" data-target="1500">
                  0
                </span>
                +
              </h3>
              <p className="text-white/80">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">
                <span className="stat-counter" data-target="3000">
                  0
                </span>
                +
              </h3>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">
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
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
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

