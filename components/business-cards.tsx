"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, TrendingUp, Users, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const businesses = [
  {
    id: 1,
    title: "Construction Materials",
    description: "High-quality cement, concrete, and aggregates for construction projects of all sizes.",
    icon: Building2,
  },
  {
    id: 2,
    title: "Infrastructure Development",
    description: "End-to-end solutions for infrastructure projects across Southeast Asia.",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Consulting Services",
    description: "Expert consulting for sustainable construction and material optimization.",
    icon: Users,
  },
  {
    id: 4,
    title: "Research & Innovation",
    description: "Pioneering new materials and methods for the construction industry.",
    icon: Lightbulb,
  },
]

export default function BusinessCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      const elements = document.querySelectorAll(".animate-fade-in")
      elements.forEach((el) => {
        el.classList.add("appear")
      })
    }
  }, [isInView])

  return (
    <section className="section-container bg-gray-50" ref={ref}>
      <h2 className="section-title">Our Businesses</h2>
      <p className="section-subtitle">
        Delivering excellence across multiple business verticals with a focus on quality and sustainability
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {businesses.map((business, index) => (
          <motion.div
            key={business.id}
            className="animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full border-t-4 border-t-primary rounded-md">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <business.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{business.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-text-color/80 text-base">{business.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
