"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AnimatedCounter from "@/components/animated-counter"

export default function AboutOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
          alt="About Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 text-left text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Building a sustainable future through innovation and excellence in construction materials
            </p>
          </div>
        </div>
      </div>

      {/* Overview Content */}
      <div className="container mx-auto px-4 py-16" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mobile Image - Shows before title on mobile */}
          <div className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden border border-gray-200 lg:hidden order-first">
            <Image
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
              alt="Company headquarters"
              fill
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-text-color/80">
              Founded in 1985, our company has grown from a single cement plant to become one of Southeast Asia's
              leading construction materials providers. With operations across Malaysia, Singapore, Vietnam, and beyond,
              we combine global expertise with local knowledge to deliver exceptional products and services.
            </p>
            <p className="text-text-color/80">
              Our commitment to innovation, sustainability, and excellence has positioned us as a trusted partner for
              construction projects of all sizes. We continue to invest in cutting-edge technology and sustainable
              practices to minimize our environmental footprint while maximizing value for our stakeholders.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-50 p-4 rounded-sm">
                <div className="text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter end={35} suffix="+" />
                </div>
                <div className="text-sm text-text-color/70">Years of Experience</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-sm">
                <div className="text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter end={3} />
                </div>
                <div className="text-sm text-text-color/70">Countries</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-sm">
                <div className="text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter end={4000} suffix="+" />
                </div>
                <div className="text-sm text-text-color/70">Employees</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-sm">
                <div className="text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter end={20} suffix="+" />
                </div>
                <div className="text-sm text-text-color/70">Production Facilities</div>
              </div>
            </div>
            <Button variant="link" className="text-primary hover:underline p-0 mt-4 font-medium">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Desktop Image - Only visible on desktop, aligned with paragraph */}
          <div className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden border border-gray-200 hidden lg:block lg:self-start lg:mt-[4rem]">
            <Image
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
              alt="Company headquarters"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-primary/5 p-8 rounded-sm border-l-4 border-primary"
          >
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-text-color/80">
              To be the leading sustainable construction materials company in Southeast Asia, driving innovation and
              setting industry standards for quality and environmental responsibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary/5 p-8 rounded-sm border-l-4 border-primary"
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-text-color/80">
              To deliver superior construction materials and solutions while creating sustainable value for our
              customers, employees, shareholders, communities, and the environment through operational excellence and
              innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
