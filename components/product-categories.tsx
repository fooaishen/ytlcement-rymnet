"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Cement",
    description: "High-quality cement for various construction applications",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    id: 2,
    name: "Concrete",
    description: "Ready-mix concrete solutions for all project sizes",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    id: 3,
    name: "Aggregates",
    description: "Quality aggregates for construction and infrastructure",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    id: 4,
    name: "Drymix",
    description: "Specialized drymix products for specific applications",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
]

export default function ProductCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-text-color mb-2">Our Products</h2>
            <p className="text-text-color/70 max-w-2xl">
              Comprehensive range of construction materials engineered for performance and durability
            </p>
          </div>
          <Link href="#" className="mt-4 md:mt-0 text-primary font-medium flex items-center hover:underline">
            View All Products <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={product.link} className="block">
                <div className="relative h-64 overflow-hidden mb-4 bg-gray-100">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-text-color mb-2">{product.name}</h3>
                <p className="text-text-color/70">{product.description}</p>
                <div className="mt-4 text-primary font-medium flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
