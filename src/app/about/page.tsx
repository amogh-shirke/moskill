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
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About MOSKILL NETTING SOLUTIONS
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Since 2011, we've been providing premium quality mosquito nets, grills, and blinds to homes and businesses
              across Maharashtra, Goa, and Gujarat.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                MOSKILL NETTING SOLUTIONS was founded in 2011 with a simple mission: to provide high-quality insect
                protection solutions that effectively protect homes while maximizing ventilation and enhancing
                aesthetics.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small operation in Kalwa has grown into a trusted name in the industry, serving
                thousands of satisfied customers across Maharashtra, Goa, and Gujarat.
              </p>
              <p className="text-gray-600 mb-4">
                Our commitment to quality, innovation, and customer satisfaction has been the cornerstone of our
                success. We take pride in our work and strive to exceed customer expectations with every installation.
              </p>
              <div className="mt-8">
                <Button variant="gradient" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and help us deliver exceptional service to our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="bg-white p-6 rounded-lg shadow-lg card-hover"
                initial={{ opacity: 0, y: 50 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History Timeline */}
      <section ref={historyRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted name in the industry, here's how our story unfolded.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-600"></div>

            {/* Timeline items */}
            <div className="space-y-12">
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
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 z-10"></div>
                  </div>
                  <div className="w-1/2 p-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <span className="text-sm font-bold text-primary">{item.year}</span>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who make our success possible.
            </p>
          </div>
          <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-8">
            {[
              {
                name: "Pranay Pawar",
                position: "Founder & CEO",
                bio: "With over 15 years of experience in the industry, Pranay leads our team with passion and expertise in insect protection solutions.",
                image: "/placeholder.svg?height=400&width=400",
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg card-hover"
                initial={{ opacity: 0, y: 50 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative h-80">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide our premium insect protection solutions across Western India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center card-hover">
              <h3 className="text-2xl font-bold mb-4">Maharashtra</h3>
              <p className="text-gray-600 mb-4">
                Serving Mumbai, Thane, Pune, Nashik, Nagpur, and all major cities across Maharashtra.
              </p>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Maharashtra Service Area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center card-hover">
              <h3 className="text-2xl font-bold mb-4">Goa</h3>
              <p className="text-gray-600 mb-4">
                Providing our services in Panaji, Margao, Vasco da Gama, and surrounding areas.
              </p>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Goa Service Area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center card-hover">
              <h3 className="text-2xl font-bold mb-4">Gujarat</h3>
              <p className="text-gray-600 mb-4">
                Serving Ahmedabad, Surat, Vadodara, Rajkot, and other major cities in Gujarat.
              </p>
              <div className="relative h-40 rounded-lg overflow-hidden">
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
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
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

