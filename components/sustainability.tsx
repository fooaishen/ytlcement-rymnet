"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Leaf, Droplets, Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import AnimatedCounter from "@/components/animated-counter"

const commitments = [
  {
    id: 1,
    title: "Environmental Protection",
    description: "Reducing our carbon footprint through innovative manufacturing processes and materials.",
    icon: Leaf,
  },
  {
    id: 2,
    title: "Water Conservation",
    description: "Implementing water recycling systems across all our production facilities.",
    icon: Droplets,
  },
  {
    id: 3,
    title: "Circular Economy",
    description: "Utilizing recycled materials and minimizing waste in our production cycle.",
    icon: Recycle,
  },
]

export default function Sustainability() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-12 bg-gray-100" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-text-color mb-2">Our Commitment to Sustainability</h2>
            <p className="text-text-color/70 max-w-2xl">
              Building a greener future through responsible practices and innovation
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {commitments.map((commitment, index) => (
            <motion.div
              key={commitment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-sm border-t-2 border-primary"
            >
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-4">
                <commitment.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-text-color">{commitment.title}</h3>
              <p className="text-text-color/70">{commitment.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold mb-4 text-text-color">ESG Excellence</h3>
            <p className="text-text-color/80">
              Our comprehensive approach to environmental, social, and governance factors ensures we create value for
              all stakeholders while minimizing our environmental impact. We are committed to transparency and
              continuous improvement in our sustainability journey.
            </p>
            <p className="text-text-color/80">
              Through continuous innovation and strategic investments, we are reducing our carbon footprint, conserving
              natural resources, and developing eco-friendly products that contribute to sustainable construction.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-gray-50 p-4 rounded-sm">
                <div className="text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter end={30} suffix="%" />
                </div>
                <div className="text-sm text-text-color/70">Carbon Reduction</div>
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
            </div>
            <Button className="bg-primary hover:bg-primary/90 mt-4 rounded-sm">View ESG Report</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] rounded-sm overflow-hidden border border-gray-200 order-1 lg:order-2"
          >
            <Image
              src="https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/PERFORMANCE_PIC_8c9a5dbcf3.webp"
              alt="Sustainability initiatives"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
