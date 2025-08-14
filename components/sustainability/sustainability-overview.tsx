"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import AnimatedCounter from "@/components/animated-counter"

export default function SustainabilityOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Group_31_9c810e2a2a.jpg"
          alt="Sustainability"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 text-left text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Sustainability</h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Building a greener future through responsible practices and innovation
            </p>
          </div>
        </div>
      </div>

      {/* Overview Content */}
      <div className="container mx-auto px-4 py-16" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mobile Image - Shows before title on mobile */}
          <div className="relative h-[400px] rounded-sm overflow-hidden border border-gray-200 lg:hidden order-first">
            <Image
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1976&auto=format&fit=crop"
              alt="Sustainability initiatives"
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
            <h2 className="text-3xl font-bold">Our Commitment to Sustainability</h2>
            <p className="text-text-color/80">
              At YTL Cement Group, sustainability is at the core of our business strategy. We recognize our
              responsibility to minimize environmental impact while creating value for all stakeholders. Our
              comprehensive approach encompasses environmental stewardship, social responsibility, and sound governance
              practices.
            </p>
            <p className="text-text-color/80">
              Through continuous innovation and strategic investments, we are reducing our carbon footprint, conserving
              natural resources, and developing eco-friendly products that contribute to sustainable construction. Our
              goal is to lead the industry in the transition to a low-carbon economy while maintaining the highest
              standards of quality and performance.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-50 p-4 rounded-sm">
                <div className="text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter end={30} suffix="%" />
                </div>
                <div className="text-sm text-text-color/70">Carbon Reduction Target</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-sm">
                <div className="text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter end={45} suffix="%" />
                </div>
                <div className="text-sm text-text-color/70">Water Recycled</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-sm">
                <div className="text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter end={20} suffix="+" />
                </div>
                <div className="text-sm text-text-color/70">ESG Awards</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-sm">
                <div className="text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter end={8} suffix="+" />
                </div>
                <div className="text-sm text-text-color/70">ECO Products</div>
              </div>
            </div>
            <Button variant="link" className="text-primary hover:underline p-0 mt-4 font-medium">
              Download ESG Report <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Desktop Image - Only visible on desktop, aligned with paragraph */}
          <div className="relative h-[400px] rounded-sm overflow-hidden border border-gray-200 hidden lg:block lg:self-start lg:mt-[4rem]">
            <Image
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1976&auto=format&fit=crop"
              alt="Sustainability initiatives"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
