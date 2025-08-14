"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const companies = [
  {
    id: 1,
    name: "NSL",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
    description: "Leading cement manufacturer in Malaysia",
    location: "Malaysia",
  },
  {
    id: 2,
    name: "EP",
    logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    description: "Specialized in eco-friendly concrete solutions",
    location: "Singapore",
  },
  {
    id: 3,
    name: "Pramarine",
    logo: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop",
    description: "Marine construction materials specialist",
    location: "Vietnam",
  },
  {
    id: 4,
    name: "Dubai Cement",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: "Middle East operations and distribution",
    location: "UAE",
  },
  {
    id: 5,
    name: "Green Aggregates",
    logo: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?q=80&w=2070&auto=format&fit=crop",
    description: "Sustainable aggregates and sand production",
    location: "Malaysia",
  },
  {
    id: 6,
    name: "Concrete Solutions",
    logo: "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=2026&auto=format&fit=crop",
    description: "Ready-mix concrete provider",
    location: "Singapore",
  },
  {
    id: 7,
    name: "Desert Tech",
    logo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    description: "Specialized materials for extreme climates",
    location: "Dubai",
  },
  {
    id: 8,
    name: "Nordic Cement",
    logo: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=2070&auto=format&fit=crop",
    description: "Cold-climate construction solutions",
    location: "Finland",
  },
]

export default function CompanyLogos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-text-color mb-8 text-center">
          Companies under YTL Cement Group
        </h2>
        <p className="text-xl text-text-color/80 mb-12 text-center max-w-3xl mx-auto">
          Our family of companies delivering excellence across the region
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-gray-200 rounded-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-24 flex items-center justify-center mb-4 overflow-hidden">
                      <Image
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        width={160}
                        height={80}
                        className="object-cover max-h-full max-w-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                    <p className="text-text-color/80 mb-2">{company.description}</p>
                    <div className="mt-2 inline-block bg-gray-100 text-text-color/70 text-sm px-3 py-1 rounded-md">
                      {company.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
