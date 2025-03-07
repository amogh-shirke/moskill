"use client"

import type React from "react"
import { useRef } from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Textarea } from "@/src/components/ui/textarea"
import { useToast } from "@/src/components/ui/use-toast"
import { Mail, MapPin, Phone } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!formRef.current) return

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_CONTACT_ID!, formRef.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text)
          toast({
            title: "Message sent successfully!",
            description: "We'll get back to you as soon as possible.",
          })
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          })
        },
        (error) => {
          console.log("FAILED...", error.text)
          toast({
            title: "Failed to send message",
            description: "Please try again or contact us directly.",
            variant: "destructive",
          })
        },
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

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
              Contact Us
            </motion.h1>

            <motion.p
              className="mb-8 text-lg text-gray-100 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get in touch with us for inquiries, quotes, or to schedule a consultation. We're here to help you with all
              your mosquito net, grill, and blind needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 bg-white rounded-lg shadow-lg"
            >
              <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="horizontal-mosquito-net">Horizontal Mosquito Net</option>
                      <option value="vertical-mosquito-net">Vertical Mosquito Net</option>
                      <option value="bird-netting">Bird Netting</option>
                      <option value="invisible-grills">Invisible Grills (SS316)</option>
                      <option value="velcro-mosquito-net">Velcro Mosquito Net</option>
                      <option value="roller-blinds">Roller Blinds & Wallpapers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" variant="gradient" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Our Location</h3>
                    <p className="text-gray-600">
                      Shop No. 13, Kharkar Compound, Near Chatrapati Shivaji Maharaj Hospital, Behind HP Gas Compound,
                      Kalwa (W) - 400 605.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Phone Numbers</h3>
                    <p className="text-gray-600">9768872724 / 8898039392</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Email Address</h3>
                    <p className="text-gray-600">moskillnetsol@gmail.com</p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-semibold">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8 h-[300px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2!2d72.9!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzAwLjAiTiA3MsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MOSKILL NETTING SOLUTIONS Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="p-8 text-center text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl md:p-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Contact us today for a free consultation and quote. Let us help you protect your home with our premium
              solutions.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="xl" className="bg-white text-primary hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" /> Call Us: 9768872724
              </Button>
              <Button size="xl" className="text-white border-white bg-white/20 backdrop-blur-sm hover:bg-white/30">
                <Mail className="w-5 h-5 mr-2" /> Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


