"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Users, Heart, Disc3Icon as Diversity3 } from "lucide-react"

export default function HRPillars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const pillars = [
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Growing Our Talent",
      description:
        "We invest in continuous learning and development programs to help our employees reach their full potential. Through mentorship, training, and career advancement opportunities, we ensure our team members can grow professionally and personally.",
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Ensure Employee Wellness",
      description:
        "The health and wellbeing of our employees is a top priority. We promote work-life balance and provide comprehensive wellness programs to support physical and mental health, creating a positive and supportive work environment.",
    },
    {
      icon: <Diversity3 className="w-12 h-12 text-primary" />,
      title: "Building a Diverse and Inclusive Workforce",
      description:
        "We celebrate diversity and are committed to creating an inclusive workplace where everyone feels valued and respected. We believe diverse perspectives drive innovation and strengthen our organization.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-text-color mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Our HR Pillars
          </motion.h2>
          <motion.p
            className="text-text-color/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our human resources strategy is built on three core pillars that guide how we attract, develop, and retain
            the best talent in the industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
            >
              <div className="mb-4 p-4 bg-primary/5 rounded-full">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-text-color mb-3">{pillar.title}</h3>
              <p className="text-text-color/80">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
