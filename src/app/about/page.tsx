"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import { CheckCircle, Users, Clock, Award, Shield, Globe } from "lucide-react"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutPage() {
  const historyRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)

  const isHistoryInView = useInView(historyRef, { once: true, amount: 0.3 })
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.3 })
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.3 })

  useEffect(() => {
    // Timeline animation
    if (historyRef.current) {
      const timelineItems = historyRef.current.querySelectorAll(".timeline-item")

      timelineItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
          },
        )
      })
    }
  }, [])

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
              About Us
            </motion.h1>

            <motion.p
              className="mb-8 text-lg text-gray-100 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              MOSKILL NETTING SOLUTIONS is a leading provider of high-quality mosquito nets, invisible grills, and blinds, serving Maharashtra, Goa, and Gujarat since 2011. Our mission is to deliver innovative insect protection solutions that enhance safety, comfort, and aesthetics for homes and businesses.
              With a strong focus on premium materials and expert craftsmanship, we offer a range of products designed for durability, ease of use, and seamless integration into any space. Whether it's retractable mosquito nets, bird netting, or custom blinds, our solutions are tailored to meet diverse customer needs.
              At MOSKILL, we prioritize customer satisfaction by ensuring a hassle-free experience, from consultation to installation. Our professional team is dedicated to delivering excellence in every project, making us a trusted choice for insect protection solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Our Legacy</h2>
              <p className="mb-4 text-gray-600">
              Premium-Quality Products – Strong aluminum frames, durable mesh, and top-grade materials.
              </p>
              <p className="mb-4 text-gray-600">
              Innovative Solutions – Sleek, space-saving, and retractable designs.
              </p>
              <p className="mb-4 text-gray-600">
              Customer Satisfaction – Personalized service, expert installation, and long-term reliability.
              </p>
              <div className="mt-8">
                <Button variant="gradient" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://res.cloudinary.com/du3er2t49/image/upload/v1741187119/uploads/durga-safety-nets-for-balconies-near-me-e1688731249701_1.webp"
                alt="MOSKILL NETTING SOLUTIONS Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesRef} className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Core Values</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              These principles guide everything we do and help us deliver exceptional service to our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Shield className="text-white" size={28} />,
                title: "Quality",
                description:
                  "We never compromise on the quality of our products and services, using only the finest materials and craftsmanship.",
              },
              {
                icon: <Users className="text-white" size={28} />,
                title: "Customer Focus",
                description:
                  "We put our customers first and strive to exceed their expectations with personalized solutions.",
              },
              {
                icon: <Clock className="text-white" size={28} />,
                title: "Timeliness",
                description:
                  "We respect your time and ensure prompt service, on-time delivery, and efficient installation.",
              },
              {
                icon: <Award className="text-white" size={28} />,
                title: "Integrity",
                description:
                  "We conduct our business with honesty, transparency, and ethical practices in all our dealings.",
              },
              {
                icon: <CheckCircle className="text-white" size={28} />,
                title: "Innovation",
                description:
                  "We continuously seek better solutions and stay updated with the latest technologies and trends.",
              },
              {
                icon: <Globe className="text-white" size={28} />,
                title: "Sustainability",
                description: "We are committed to environmentally friendly practices and sustainable solutions.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg card-hover"
                initial={{ opacity: 0, y: 50 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center justify-center mb-6 rounded-full w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History Timeline */}
      <section ref={historyRef} className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Journey</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              From humble beginnings to becoming a trusted name in the industry, here's how our story unfolded.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute w-1 h-full transform -translate-x-1/2 left-1/2 bg-gradient-to-b from-pink-500 to-purple-600"></div>

            {/* Timeline items */}
            <div className="space-y-3">
              {[
                {
                  year: "2011",
                  title: "Foundation",
                  description:
                    "MOSKILL NETTING SOLUTIONS was established in Kalwa, Mumbai with a focus on quality mosquito nets.",
                },
                {
                  year: "2013",
                  title: "Expansion",
                  description: "Expanded our product range to include window grills, bird netting, and blinds.",
                },
                {
                  year: "2015",
                  title: "Growth",
                  description: "Extended our services to cover all of Maharashtra and parts of Goa.",
                },
                {
                  year: "2017",
                  title: "Innovation",
                  description: "Introduced invisible grills (SS316) and advanced retractable mosquito net systems.",
                },
                {
                  year: "2019",
                  title: "Regional Expansion",
                  description: "Extended our services to Gujarat, becoming a trusted name across Western India.",
                },
                {
                  year: "2021",
                  title: "Milestone",
                  description: "Celebrated 10 years of service with over 1500 happy customers across three states.",
                },
                {
                  year: "Present",
                  title: "Continuing Excellence",
                  description:
                    "Continuing to provide premium solutions with the same dedication and quality across Maharashtra, Goa, and Gujarat.",
                },
              ].map((item, index) => (
                <div key={index} className={`timeline-item flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="w-1/2"></div>
                  <div className="relative flex items-center justify-center">
                    <div className="z-10 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600"></div>
                  </div>
                  <div className="w-1/2 p-4">
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                      <span className="text-sm font-bold text-primary">{item.year}</span>
                      <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Team</h2>
            <p className="max-w-2xl mx-auto text-gray-600">Meet the dedicated professional who leads our success.</p>
          </div>

          <div className="flex justify-center">
            <motion.div
              className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg card-hover"
              initial={{ opacity: 0, y: 50 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-80">
                <Image src="/placeholder.svg?height=400&width=400" alt="Pranay Pawar" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Pranay Pawar</h3>
                <p className="mb-3 text-primary">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 15 years of experience in the industry, Pranay leads our team with passion and expertise in
                  insect protection solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Service Areas</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We provide our premium insect protection solutions across Western India.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 text-center bg-white rounded-lg shadow-lg card-hover">
              <h3 className="mb-4 text-2xl font-bold">Maharashtra</h3>
              <p className="mb-4 text-gray-600">
                Serving Mumbai, Thane, Pune, Nashik, Nagpur, and all major cities across Maharashtra.
              </p>
              <div className="relative h-40 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Maharashtra Service Area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="p-6 text-center bg-white rounded-lg shadow-lg card-hover">
              <h3 className="mb-4 text-2xl font-bold">Goa</h3>
              <p className="mb-4 text-gray-600">
                Providing our services in Panaji, Margao, Vasco da Gama, and surrounding areas.
              </p>
              <div className="relative h-40 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Goa Service Area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="p-6 text-center bg-white rounded-lg shadow-lg card-hover">
              <h3 className="mb-4 text-2xl font-bold">Gujarat</h3>
              <p className="mb-4 text-gray-600">
                Serving Ahmedabad, Surat, Vadodara, Rajkot, and other major cities in Gujarat.
              </p>
              <div className="relative h-40 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Gujarat Service Area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="p-8 text-center text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl md:p-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Let's Work Together</h2>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Ready to enhance your home with our premium mosquito nets, grills, or blinds? Contact us today for a
              consultation.
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
