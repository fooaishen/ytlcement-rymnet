"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 bg-primary/10" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-text-color mb-6">Contact Us</h2>
            <p className="text-text-color/80 mb-8">
              Have questions about our products or services? Our team is ready to assist you with any inquiries or to
              discuss your specific project requirements.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Call Us</div>
                  <div className="text-text-color/70">+60 3 1234 5678</div>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Email Us</div>
                  <div className="text-text-color/70">info@ytlcement.com</div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Visit Us</div>
                  <div className="text-text-color/70">
                    Corporate Headquarters
                    <br />
                    123 Business Park, Kuala Lumpur, Malaysia
                  </div>
                </div>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm">Contact Us</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 rounded-sm shadow-sm"
          >
            <h3 className="text-xl font-bold mb-6 text-text-color">Send an Enquiry</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-color/70 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-color/70 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-color/70 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-color/70 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-sm">
                Submit Enquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
