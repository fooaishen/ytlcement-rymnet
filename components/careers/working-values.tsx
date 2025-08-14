"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"

export default function WorkingValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      title: "Honesty",
      description:
        "We believe in transparency and integrity in all our dealings, both internally and with our partners.",
      icon: "/placeholder.svg?key=6cway",
    },
    {
      title: "Hard Work",
      description: "We are committed to excellence and putting in the effort required to deliver outstanding results.",
      icon: "/placeholder.svg?key=zhdkl",
    },
    {
      title: "Moral Responsibility",
      description: "We take responsibility for our actions and their impact on communities and the environment.",
      icon: "/placeholder.svg?key=kx8sm",
    },
    {
      title: "Togetherness",
      description: "We value collaboration and believe that our strength comes from working as a unified team.",
      icon: "/placeholder.svg?key=b8plh",
    },
    {
      title: "Vitality",
      description: "We bring energy and passion to our work, constantly seeking innovation and improvement.",
      icon: "/placeholder.svg?key=vh0it",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-text-color">Working in YTL Cement Group</h2>
            <p className="text-text-color/80">
              YTL Cement has been contributing to the development of the nation's construction landscape for decades.
              Our strong family values form the foundation of our business. These are the five core values that drive
              us:
            </p>

            <ul className="list-disc ml-5 space-y-4 mt-8">
              {values.map((value, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <span className="font-semibold text-text-color">{value.title}:</span>{" "}
                  <span className="text-text-color/80">{value.description}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src="https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/DYP_YTLHQ_019_1_b2bf391ff7.jpg"
              alt="Working at YTL Cement"
              width={600}
              height={600}
              className="rounded-sm w-full h-auto object-cover mt-[4rem]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
