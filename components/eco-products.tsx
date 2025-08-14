"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ecoProducts = [
  {
    id: 1,
    name: "ECOCement",
    description: "Low-carbon cement with reduced clinker content and supplementary cementitious materials.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Adobe_Stock_276906229_1_ca27077e31.png",
    link: "#",
  },
  {
    id: 2,
    name: "ECOConcrete",
    description: "Sustainable concrete mix designed for reduced environmental impact without compromising performance.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Adobe_Stock_65031956_1_a4574664ae.jpg",
    link: "#",
  },
  {
    id: 3,
    name: "ECODrymix",
    description: "Pre-mixed dry mortar products formulated with eco-friendly binders and additives.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Adobe_Stock_269504470_1_9e1a3add1b.jpg",
    link: "#",
  },
  {
    id: 4,
    name: "ECOSand",
    description:
      "Manufactured sand produced from recycled materials, offering a sustainable alternative to natural sand.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Adobe_Stock_316393905_1_9169bd7b84.jpg",
    link: "#",
  },
]

export default function EcoProducts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-12 bg-gray-100" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-text-color mb-8">Our ECO Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ecoProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-sm overflow-hidden border border-gray-200 shadow-sm flex flex-col h-full"
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
