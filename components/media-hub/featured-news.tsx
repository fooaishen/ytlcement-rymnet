"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin    } from "lucide-react"

export default function FeaturedNews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-12 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="mb-2">
              <div className="inline-block w-fit bg-gray-100 text-text-color/70 text-sm px-3 py-1 rounded-md flex items-center">
                <MapPin className="h-3 w-3 mr-1" /> Malaysia
              </div>
            </div>
            <h2 className="text-3xl font-bold">
              Malayan Cement Registers 2nd Quarter Revenue of RM1.2 Billion, Profit After Tax Increases 32% to RM185
              Million
            </h2>
            <p className="text-text-color/80">
              Malayan Cement's revenue stood at RM1,153.1 million for the 3 months ended 31 December 2024 compared to
              RM1,170.4 million for the previous 3 months ended 30 September 2024. Profit before tax increased 26% to
              RM256.0 million for the 3 months under review compared to RM203.1 million for the preceding quarter,
              whilst profit after tax rose 32% to RM184.9 million this quarter over RM139.6 million last quarter.
            </p>
            <Button className="bg-primary hover:bg-primary/90 rounded-sm">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] rounded-sm overflow-hidden border border-gray-200"
          >
            <Image
              src="https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/PERFORMANCE_PIC_8c9a5dbcf3.webp"
              alt="YTL Cement Building"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
