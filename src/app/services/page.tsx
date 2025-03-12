"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/src/components/ui/button"
import { CheckCircle, Maximize2, ArrowUpDown, Bird, Lock, Layers, Paintbrush, Shield, Grid } from 'lucide-react'

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
          }
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
      icon: <Maximize2 className="mt-1 mr-3 text-primary" size={24} />,
      image: "https://res.cloudinary.com/du3er2t49/image/upload/v1741181645/uploads/zuqjd9qooym1v97wjti8.webp",
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
      icon: <ArrowUpDown className="mt-1 mr-3 text-primary" size={24} />,
      image: "https://res.cloudinary.com/du3er2t49/image/upload/v1741181659/uploads/moobiiaxxjq6fxzsh6qd.webp",
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
      icon: <Bird className="mt-1 mr-3 text-primary" size={24} />,
      image: "https://res.cloudinary.com/du3er2t49/image/upload/v1741181639/uploads/gxx3vq7dzye6sdatwvjd.webp",
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
      icon: <Lock className="mt-1 mr-3 text-primary" size={24} />,
      image: "https://res.cloudinary.com/du3er2t49/image/upload/v1741181653/uploads/vzns2zucqldv3vjpptpl.webp",
    },
    {
  id: "honeycomb-mosquito-net-pleated",
  title: "Honeycomb with Mosquito Net (Pleated)",
  description:
    "A premium pleated mosquito net with a honeycomb structure, offering enhanced durability and smooth operation for doors and windows.",
  features: [
    "Pleated honeycomb design for superior strength",
    "Smooth and effortless sliding mechanism",
    "Ideal for large doors and windows",
    "High-quality polyester mesh for insect protection",
    "Customizable sizes and frame finishes",
    "Weather-resistant and easy to maintain",
  ],
  icon: <Grid className="mt-1 mr-3 text-primary" size={24} />,
  image:
    "https://res.cloudinary.com/du3er2t49/image/upload/v1741181642/uploads/honeycomb-mosquito-net.webp",
},
{
  id: "aluminium-mosquito-net-safety",
  title: "Aluminium Mosquito Net with Safety",
  description:
    "A robust aluminium-framed mosquito net designed for enhanced safety, providing protection against insects while ensuring structural durability.",
  features: [
    "Strong aluminium frame for added security",
    "Available in powder-coated and anodized finishes",
    "Rust-resistant and long-lasting build",
    "High-density mosquito mesh for effective protection",
    "Ideal for homes, offices, and commercial spaces",
    "Customizable sizes to fit various openings",
  ],
  icon: <Shield className="mt-1 mr-3 text-primary" size={24} />,
  image:
    "https://res.cloudinary.com/du3er2t49/image/upload/v1741181642/uploads/aluminium-mosquito-net.webp",
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
        "Yes, all our products come with technical warranties. The warranty period varies depending on the product type and material. Our team will provide detailed warranty information specific to your purchase.",
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
      <section className="relative py-20 overflow-hidden md:py-32">
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            <motion.h1 
              className="mb-6 text-4xl font-bold md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h1>
            
            <motion.p 
              className="mb-8 text-lg text-gray-100 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover our comprehensive range of high-quality insect protection solutions designed to enhance your living space while keeping it insect-free.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="w-full overflow-hidden bg-white rounded-lg shadow-lg card-hover"
                initial={{ opacity: 0, y: 50 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative w-full h-48 sm:h-52 md:h-60">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                  {/* <Link href={service.link} className="inline-block mt-4 font-semibold text-indigo-600">
                    Learn More →
                  </Link> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Process</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We follow a streamlined process to ensure a smooth experience from consultation to installation.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line (Desktop View) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-purple-600 transform -translate-x-1/2"></div>

          {/* Process Steps */}
          <div className="space-y-2">
            {processSteps.map((step, index) => (
              <div key={index} className={`timeline-item flex ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
                {/* Empty column for alignment (Desktop) */}
                <div className="hidden w-1/2 md:block"></div>

                {/* Timeline Dot */}
                <div className="relative flex items-center justify-center">
                  <div className="z-10 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600"></div>
                </div>

                {/* Step Content */}
                <motion.div
                  className="w-full p-4 md:w-1/2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="p-6 bg-white rounded-lg shadow-lg">
                    <span className="text-4xl font-bold text-gradient">{step.number}</span>
                    <h3 className="mt-2 mb-3 text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-gray-600">Find answers to common questions about our products and services.</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6 rounded-lg shadow-sm bg-gray-50">
                  <h3 className="mb-3 text-xl font-bold">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="p-8 text-center text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl md:p-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-xl">Contact us today for a free consultation and quote. Let us help you protect your home with our premium solutions.</p>
            <Button size="xl" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
