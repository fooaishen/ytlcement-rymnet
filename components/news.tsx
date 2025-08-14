"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

const newsItems = [
  {
    id: 1,
    title: "New ECOCement Plant Opens in Malaysia",
    excerpt: "Our newest production facility focuses on sustainable manufacturing processes.",
    date: "April 15, 2023",
    image: "/placeholder.svg?height=300&width=500",
    region: "Malaysia",
  },
  {
    id: 2,
    title: "Partnership with Singapore Green Building Council",
    excerpt: "Collaboration to develop new standards for sustainable construction materials.",
    date: "March 22, 2023",
    image: "/placeholder.svg?height=300&width=500",
    region: "Singapore",
  },
  {
    id: 3,
    title: "Vietnam Infrastructure Project Completed Ahead of Schedule",
    excerpt: "Major highway project delivered under budget and ahead of timeline.",
    date: "February 10, 2023",
    image: "/placeholder.svg?height=300&width=500",
    region: "Vietnam",
  },
  {
    id: 4,
    title: "Dubai Innovation Center Launches Advanced Materials Research",
    excerpt: "New research initiative focuses on construction materials for extreme climate conditions.",
    date: "March 5, 2023",
    image: "/placeholder.svg?height=300&width=500",
    region: "Dubai",
  },
  {
    id: 5,
    title: "Finland Facility Achieves Carbon Neutrality",
    excerpt: "Our Helsinki production facility becomes the first in the industry to achieve full carbon neutrality.",
    date: "January 15, 2023",
    image: "/placeholder.svg?height=300&width=500",
    region: "Finland",
  },
]

export default function News() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="section-container" ref={ref}>
      <h2 className="section-title">Latest News</h2>
      <p className="section-subtitle">Stay updated with our regional developments and industry innovations</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {newsItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col card-hover border-0 shadow-sm overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white text-primary text-xs px-2 py-1 rounded-md font-medium">
                  {item.region}
                </div>
              </div>
              <CardHeader className="pb-2">
                <h3 className="font-semibold text-lg line-clamp-2">{item.title}</h3>
              </CardHeader>
              <CardContent className="pb-2 flex-grow">
                <p className="text-text-color/80 text-sm">{item.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-2 border-t">
                <div className="flex items-center text-xs text-text-color/60">
                  <Calendar className="h-3 w-3 mr-1" />
                  {item.date}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                >
                  Read More <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button className="bg-primary hover:bg-primary/90">View All News</Button>
      </div>
    </section>
  )
}
