"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title:
      "Malayan Cement Registers 2nd Quarter Revenue of RM1.2 Billion, Profit After Tax Increases 32% to RM185 Million",
    date: "April 15, 2023",
    region: "Malaysia",
    link: "#",
  },
  {
    id: 2,
    title: 'First UEM, Sycamore\'s "Forum of Natural Landscape Challenges for Construction and Sustainable Cities"',
    date: "March 22, 2023",
    region: "Singapore",
    link: "#",
  },
  {
    id: 3,
    title: "Sunway University-Industry Research Consortium (SUIRC) Quarterly Newsletter",
    date: "February 10, 2023",
    region: "Malaysia",
    link: "#",
  },
  {
    id: 4,
    title: "In Practice: Sales KPIs",
    date: "January 5, 2023",
    region: "Vietnam",
    link: "#",
  },
]

export default function NewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-12 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl font-bold text-text-color">News</h2>
          <Link href="#" className="text-primary font-medium flex items-center hover:underline mt-2 md:mt-0">
            Find Out More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-100 rounded-sm p-4 shadow-sm flex flex-col h-full"
            >
              <Link href={item.link} className="block flex-1 flex flex-col">
                <h3 className="text-lg font-medium text-text-color mb-2 flex-1">{item.title}</h3>
                <div className="flex items-center gap-2 mt-auto">
                  <div className="inline-block bg-gray-100 text-text-color/70 text-xs px-2 py-1 rounded-md flex items-center">
                    <MapPin className="h-3 w-3 mr-1" /> {item.region}
                  </div>
                  <p className="text-sm text-text-color/60">{item.date}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
