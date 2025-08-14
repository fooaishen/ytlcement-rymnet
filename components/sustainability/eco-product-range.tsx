"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const ecoProducts = [
  {
    id: 1,
    name: "ECOCement",
    description: "Low-carbon cement with reduced clinker content and supplementary cementitious materials.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Adobe_Stock_276906229_1_ca27077e31.png",
    link: "/products-solutions",
  },
  {
    id: 2,
    name: "ECOConcrete",
    description: "Sustainable concrete mix designed for reduced environmental impact without compromising performance.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Adobe_Stock_65031956_1_a4574664ae.jpg",
    link: "/products-solutions",
  },
  {
    id: 3,
    name: "ECODrymix",
    description: "Pre-mixed dry mortar products formulated with eco-friendly binders and additives.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Adobe_Stock_269504470_1_9e1a3add1b.jpg",
    link: "/products-solutions",
  },
  {
    id: 4,
    name: "ECOSand",
    description:
      "Manufactured sand produced from recycled materials, offering a sustainable alternative to natural sand.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Adobe_Stock_316393905_1_9169bd7b84.jpg",
    link: "/products-solutions",
  },
]

export default function EcoProductRange() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-text-color mb-2">ECO Product Range</h2>
            <p className="text-text-color/70 max-w-2xl">
              Our environmentally friendly construction materials designed to reduce carbon footprint
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ecoProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-sm overflow-hidden border border-gray-200 hover:shadow-sm transition-shadow flex flex-col h-full"
            >
              <div className="relative h-48">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2 text-text-color">{product.name}</h3>
                <p className="text-text-color/70 text-sm mb-4 line-clamp-3">{product.description}</p>
                <div className="mt-auto pt-2">
                  <Link href={product.link} className="text-primary font-medium flex items-center hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
