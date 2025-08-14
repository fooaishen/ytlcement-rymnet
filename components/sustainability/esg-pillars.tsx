"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Leaf, Droplets, Recycle, Wind } from "lucide-react"

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
  {
    id: 4,
    title: "Renewable Energy",
    description: "Transitioning to renewable energy sources across our operations.",
    icon: Wind,
  },
]

export default function EsgPillars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-text-color mb-2">ESG Pillars</h2>
            <p className="text-text-color/70 max-w-2xl">
              Our comprehensive approach to environmental, social, and governance factors
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  )
}
