"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function CareerOpportunities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const departments = [
    "Engineering & Technical",
    "Manufacturing & Operations",
    "Research & Development",
    "Sales & Marketing",
    "Finance & Accounting",
    "Human Resources",
    "Information Technology",
    "Supply Chain & Logistics",
    "Sustainability",
  ]

  return (
    <section className="py-16 md:py-24 bg-primary/5" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-bold text-text-color mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Career Opportunities
          </motion.h2>
          <motion.p
            className="text-text-color/80 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are always on the lookout for like-minded talents to join our organisation. Explore opportunities across
            our various departments and locations. Don't see a position that matches your skills? Send your resume to
            our HR team in your region of interest.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button className="gap-2">
              <Mail className="h-4 w-4" />
              <span>Malaysia</span>
            </Button>
            <Button className="gap-2">
              <Mail className="h-4 w-4" />
              <span>Vietnam</span>
            </Button>
            <Button className="gap-2">
              <Mail className="h-4 w-4" />
              <span>Singapore</span>
            </Button>
            <Button className="gap-2">
              <Mail className="h-4 w-4" />
              <span>Dubai</span>
            </Button>
            <Button className="gap-2">
              <Mail className="h-4 w-4" />
              <span>Finland</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
