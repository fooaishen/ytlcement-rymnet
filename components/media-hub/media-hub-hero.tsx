"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function MediaHubHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-12 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-color mb-6">Media Hub</h1>
          <p className="text-text-color/70 max-w-2xl mx-auto">
            Stay updated with the latest news, press releases, and media coverage about YTL Cement Group across our
            regional operations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
