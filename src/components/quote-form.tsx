"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Textarea } from "@/src/components/ui/textarea"
import { useToast } from "@/src/components/ui/use-toast"
import emailjs from "@emailjs/browser"

export function QuotePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")

  // Regular expressions for validation
  const phoneNumberRegex = /^[0-9]{10}$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Basic email validation

  // Show popup every time user visits or refreshes the page
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000) // Show after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate phone number
    if (!phoneNumberRegex.test(phoneNumber)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      })
      return
    }

    // Validate email if entered
    if (email && !emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID! , formRef.current!, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          toast({
            title: "Quote request submitted!",
            description: "We'll get back to you as soon as possible.",
          })
          setIsOpen(false)
        },
        (error) => {
          console.error("Error sending email:", error)
          toast({
            title: "Error",
            description: "There was an error submitting your request. Please try again.",
            variant: "destructive",
          })
        },
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 duration-300 bg-black bg-opacity-50 animate-in fade-in">
      <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <button
          onClick={handleClose}
          className="absolute p-1 transition-colors rounded-full top-4 right-4 hover:bg-gray-100"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <h2 className="mb-4 text-2xl font-bold">Request a Quote</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="user_name">Name *</Label>
            <Input id="user_name" name="user_name" required />
          </div>
          <div>
            <Label htmlFor="phone_number">Phone Number *</Label>
            <Input
              id="phone_number"
              name="phone_number"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="user_email">Email (Optional)</Label>
            <Input
              id="user_email"
              name="user_email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="service">Service Interested In</Label>
            <select
              id="service"
              name="service"
              className="w-full px-3 py-2 border rounded-md border-input bg-background"
              required
            >
              <option value="">Select a service</option>
              <option value="Mosquito Net">Mosquito Net</option>
              <option value="Bird Netting">Bird Netting</option>
              <option value="Invisible Grills">Invisible Grills</option>
              <option value="Roller Blinds">Roller Blinds</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea id="message" name="message" rows={3} />
          </div>
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
