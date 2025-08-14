"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import AnimatedCounter from "@/components/animated-counter"

export default function CorporateOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] rounded-sm overflow-hidden"
          >
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Corporate headquarters"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-text-color mb-6">YTL Cement Group</h2>
            <p className="text-text-color/80 mb-6">
              YTL Cement is one of the largest manufacturers of cement and construction products in Malaysia. With over
              three decades of experience, we have established ourselves as a trusted provider of high-quality
              construction materials across Southeast Asia.
            </p>
            <p className="text-text-color/80 mb-6">
              Our state-of-the-art manufacturing facilities and commitment to innovation enable us to deliver products
              that meet the highest standards of quality and performance. We are dedicated to sustainable practices and
              continuously invest in technologies that reduce our environmental impact.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter end={35} suffix="+" />
                </div>
                <div className="text-sm text-text-color/70">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter end={20} suffix="+" />
                </div>
                <div className="text-sm text-text-color/70">Production Facilities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter end={5} />
                </div>
                <div className="text-sm text-text-color/70">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter end={4000} suffix="+" />
                </div>
                <div className="text-sm text-text-color/70">Employees</div>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm">About YTL Cement</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
