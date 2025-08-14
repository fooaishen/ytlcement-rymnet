"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Solutions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-12 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-text-color mb-8">Our Solutions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-sm">
              <h3 className="text-lg font-semibold mb-3">Construction Solutions</h3>
              <p className="text-text-color/70 mb-4">
                Comprehensive solutions for all types of construction projects, from residential to commercial and
                infrastructure.
              </p>
              <Link href="#" className="text-primary font-medium flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gray-100 p-6 rounded-sm">
              <h3 className="text-lg font-semibold mb-3">Sustainable Building</h3>
              <p className="text-text-color/70 mb-4">
                Green building solutions that reduce environmental impact while maintaining structural integrity and
                performance.
              </p>
              <Link href="#" className="text-primary font-medium flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gray-100 p-6 rounded-sm">
              <h3 className="text-lg font-semibold mb-3">Technical Support</h3>
              <p className="text-text-color/70 mb-4">
                Expert technical assistance and consulting services to optimize your construction materials and methods.
              </p>
              <Link href="#" className="text-primary font-medium flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
