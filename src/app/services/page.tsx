"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/src/components/ui/button"
import { CheckCircle, Maximize2, ArrowUpDown, Bird, Lock, Layers, Paintbrush } from "lucide-react"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ServicesPage() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  const isProcessInView = useInView(processRef, { once: true, amount: 0.2 })

  useEffect(() => {
    // Services animation
    if (servicesRef.current) {
      const serviceItems = servicesRef.current.querySelectorAll(".service-item")

      serviceItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
          },
        )
      })
    }
  }, [])

  const services = [
    {
      id: "horizontal-mosquito-net",
      title: "Horizontal Mosquito Net",
      description:
        "Our horizontal mosquito nets are space-efficient, retractable, and feature center-opening designs that can span up to 20 feet. They're perfect for windows and smaller openings, providing effective protection against insects while allowing fresh air and natural light to enter your home.",
      features: [
        "Retractable design for easy operation",
        "Center-opening mechanism for convenient access",
        "Available in sizes up to 20 feet wide",
        "Charcoal and grey mesh options for better visibility",
        "Aluminum frames (powder-coated/anodized) for durability",
        "90% ventilation and natural light optimization",
      ],
      icon: <Maximize2 className="text-primary mr-3 mt-1" size={24} />,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "vertical-mosquito-net",
      title: "Vertical Mosquito Net",
      description:
        "Ideal for tall windows and sliding doors, our vertical mosquito nets feature a vertical operation that makes them perfect for doorways and large openings. They provide excellent protection against insects while maintaining airflow and visibility.",
      features: [
        "Vertical operation for doorways and tall windows",
        "Smooth sliding mechanism for easy use",
        "Custom-sized to fit your specific openings",
        "Durable aluminum frames for long-lasting performance",
        "High-quality mesh that's tear-resistant",
        "Professional installation for perfect fitting",
      ],
      icon: <ArrowUpDown className="text-primary mr-3 mt-1" size={24} />,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "bird-netting",
      title: "Bird Netting",
      description:
        "Our bird netting solutions are durable and strong, designed to protect open spaces from birds while maintaining aesthetics. They're perfect for balconies, terraces, and other open areas where bird intrusion is a concern.",
      features: [
        "High-strength netting that's virtually invisible from a distance",
        "UV-resistant materials for outdoor durability",
        "Custom installation for any space or area",
        "Maintains aesthetics while providing protection",
        "Humane bird deterrent solution",
        "Professional installation with minimal disruption",
      ],
      icon: <Bird className="text-primary mr-3 mt-1" size={24} />,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "invisible-grills",
      title: "Invisible Grills (SS316)",
      description:
        "Our invisible grills are made from high-strength stainless steel (SS316), providing security without compromising on aesthetics or views. They're perfect for homes where traditional grills would obstruct views or clash with modern design.",
      features: [
        "High-strength SS316 stainless steel construction",
        "Nearly invisible from a distance",
        "Maintains views while providing security",
        "Corrosion-resistant for long-lasting performance",
        "Custom designs to match your home's architecture",
        "Professional installation with proper anchoring",
      ],
      icon: <Lock className="text-primary mr-3 mt-1" size={24} />,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "velcro-mosquito-net",
      title: "Velcro Mosquito Net",
      description:
        "Our velcro mosquito nets offer a simple, removable, and effective solution for insect protection. They're easy to install and remove, making them perfect for seasonal use or rental properties.",
      features: [
        "Easy installation with velcro attachments",
        "Removable for cleaning or seasonal use",
        "Custom-sized to fit your windows perfectly",
        "High-quality mesh for durability",
        "Cost-effective insect protection solution",
        "Available in multiple colors to match your decor",
      ],
      icon: <Layers className="text-primary mr-3 mt-1" size={24} />,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "roller-blinds",
      title: "Roller Blinds & Wallpapers",
      description:
        "Our roller blinds and wallpapers are stylish, customizable interior solutions that add elegance to your space while providing privacy and light control. They're perfect for enhancing the aesthetics of any room.",
      features: [
        "Wide range of styles, colors, and patterns",
        "Custom-sized to fit your windows perfectly",
        "Light filtering and blackout options available",
        "Easy operation with chain or motorized mechanisms",
        "Professional installation for perfect fitting",
        "Adds style and functionality to any room",
      ],
      icon: <Paintbrush className="text-primary mr-3 mt-1" size={24} />,
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "We discuss your requirements and provide expert advice on the best solutions for your needs.",
    },
    {
      number: "02",
      title: "Measurement",
      description: "Our technicians visit your location to take precise measurements for a perfect fit.",
    },
    {
      number: "03",
      title: "Quotation",
      description: "We provide a detailed quote with transparent pricing and no hidden costs.",
    },
    {
      number: "04",
      title: "Installation",
      description: "Our skilled team installs your products with precision and minimal disruption.",
    },
    {
      number: "05",
      title: "After-Service",
      description: "We ensure your complete satisfaction and provide maintenance tips and support.",
    },
  ]

  const faqs = [
    {
      question: "How long does the installation process take?",
      answer:
        "The installation time varies depending on the scope of the project. Simple installations like mosquito nets for a few windows can be completed in a few hours, while larger projects may take a day or two. We'll provide you with a specific timeframe during the consultation.",
    },
    {
      question: "Do you offer warranties on your products?",
      answer:
        "Yes, all our products come with warranties. Mosquito nets typically have a 1-year warranty, while window grills and blinds come with 2-3 year warranties depending on the material and type. Our team will provide detailed warranty information for your specific purchase.",
    },
    {
      question: "What is the difference between horizontal and vertical mosquito nets?",
      answer:
        "Horizontal mosquito nets open from side to side and are ideal for windows and smaller openings up to 20 feet wide. Vertical mosquito nets open from top to bottom and are perfect for doorways, sliding doors, and tall windows. Our team can recommend the best option based on your specific needs.",
    },
    {
      question: "How do I clean and maintain mosquito nets?",
      answer:
        "Mosquito nets are easy to maintain. Regular dusting with a soft brush or vacuum cleaner with a brush attachment is recommended. For deeper cleaning, you can gently wipe them with a damp cloth and mild soap solution. Avoid using harsh chemicals that might damage the mesh.",
    },
    {
      question: "Do you serve areas outside of Mumbai?",
      answer:
        "Yes, we provide our services throughout Maharashtra, Goa, and Gujarat. Contact us with your location details, and we'll be happy to discuss how we can help you with your insect protection needs.",
    },
  ]

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
              Our Services
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover our comprehensive range of high-quality insect protection solutions designed to enhance your
              living space while keeping it insect-free.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`service-item grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="text-primary mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                        <p className="text-gray-600">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <Button variant="gradient" asChild>
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </div>

                <div
                  className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a streamlined process to ensure a smooth experience from consultation to installation.
            </p>
          </div>

          <div className="relative">
            {/* Process line */}
            <div className="hidden md:block absolute left-1/2 top-12 bottom-12 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-500 to-purple-600"></div>

            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="md:grid md:grid-cols-2 md:gap-8 items-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className={`relative ${index % 2 === 0 ? "md:text-right" : "md:col-start-2"}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <span className="text-4xl font-bold text-gradient">{step.number}</span>
                      <h3 className="text-xl font-bold mt-2 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>

                    {/* Circle on the timeline */}
                    <div
                      className="hidden md:block absolute top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 z-10 
                      ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}"
                    ></div>
                  </div>

                  {/* Empty column for layout */}
                  <div className={`hidden md:block ${index % 2 === 0 ? "md:col-start-2" : ""}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our products and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
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

