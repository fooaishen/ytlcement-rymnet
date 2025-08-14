"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const efforts = [
  {
    id: 1,
    title: "Building Greener Malaysia",
    description:
      "Transitioning to a low-carbon economy by enhancing production processes, ensuring consistent quality of environmentally friendly products, and promoting a circular economy through material reuse.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/VIV_04718_a6d0eaab93.jpg",
    year: "2020-Present",
  },
  {
    id: 2,
    title: "Operating Sustainably",
    description:
      "Aspiring for carbon neutrality by 2050 through biodiversity management, carbon footprint reduction, low-carbon product development, and promotion of sustainable construction practices.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/VIV_06873_cropped_da7e194ffd.jpg",
    year: "2018-Present",
  },
  {
    id: 3,
    title: "Operating Responsibly",
    description:
      "Upholding a culture of ethics and integrity to ensure compliance with all applicable laws and regulatory requirements across our operations and business practices.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Mask_Group_3_53e2e435ef.jpg",
    year: "2019-Present",
  },
  {
    id: 4,
    title: "Building Capacity & Community",
    description:
      "Focusing on people through health and safety initiatives, talent development, and CSR activities via our BUILDS program to contribute to causes beyond business objectives.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/YTL_UPN_0512_ffdcdee460.jpg",
    year: "2021-Present",
  },
]

export default function SustainabilityEfforts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-text-color mb-2">Our Sustainability Efforts</h2>
            <p className="text-text-color/70 max-w-2xl">
              Key initiatives that demonstrate our commitment to environmental stewardship and social responsibility
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {efforts.map((effort, index) => (
            <motion.div
              key={effort.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-0 shadow-sm h-full">
                <div className="relative h-64">
                  <Image src={effort.image || "/placeholder.svg"} alt={effort.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                    {effort.year}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{effort.title}</h3>
                  <p className="text-text-color/80">{effort.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
