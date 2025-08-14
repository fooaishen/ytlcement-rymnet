"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

const countries = ["Malaysia", "Vietnam", "Singapore", "Dubai", "Finland"]

const projects = {
  Malaysia: [
    {
      id: "my1",
      title: "Kuala Lumpur Commercial Tower",
      description: "A 45-story commercial tower in the heart of Kuala Lumpur's business district.",
      image: "/placeholder.svg?height=400&width=600",
      year: 2022,
    },
    {
      id: "my2",
      title: "Penang Coastal Highway",
      description: "A 24km coastal highway connecting key areas of Penang Island.",
      image: "/placeholder.svg?height=400&width=600",
      year: 2021,
    },
    {
      id: "my3",
      title: "Johor Bahru Residential Complex",
      description: "A modern residential development with 500+ units near the Singapore border.",
      image: "/placeholder.svg?height=400&width=600",
      year: 2023,
    },
  ],
  Vietnam: [
    {
      id: "vn1",
      title: "Ho Chi Minh City Metro Line",
      description: "Construction materials for the city's expanding metro network.",
      image: "/placeholder.svg?height=400&width=600",
      year: 2022,
    },
    {
      id: "vn2",
      title: "Hanoi Office Park",
      description: "A sustainable business park development in the capital city.",
      image: "/placeholder.svg?height=400&width=600",
      year: 2021,
    },
  ],
  Singapore: [
    {
      id: "sg1",
      title: "Marina Bay Development",
      description: "Specialized concrete solutions for waterfront construction.",
      image: "/placeholder.svg?height=400&width=600",
      year: 2023,
    },
    {
      id: "sg2",
      title: "Changi Airport Terminal Expansion",
      description: "High-performance materials for the airport's newest terminal.",
      image: "/placeholder.svg?height=400&width=600",
      year: 2022,
    },
  ],
  Dubai: [
    {
      id: "db1",
      title: "Dubai Sustainable Tower",
      description:
        "A 60-story sustainable commercial tower in Dubai's business district featuring innovative cooling systems.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
      year: 2023,
    },
    {
      id: "db2",
      title: "Palm Jumeirah Expansion",
      description: "Specialized marine concrete for the expansion of the iconic Palm Jumeirah development.",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2069&auto=format&fit=crop",
      year: 2022,
    },
  ],
  Finland: [
    {
      id: "fi1",
      title: "Helsinki Green Innovation Hub",
      description: "A carbon-neutral research and innovation center in Helsinki's technology district.",
      image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=2070&auto=format&fit=crop",
      year: 2023,
    },
    {
      id: "fi2",
      title: "Arctic Circle Research Facility",
      description: "Specialized cold-climate construction materials for research facilities near the Arctic Circle.",
      image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=2073&auto=format&fit=crop",
      year: 2022,
    },
  ],
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Malaysia")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="section-container bg-gray-50" ref={ref}>
      <h2 className="section-title">Our Projects</h2>
      <p className="section-subtitle">Showcasing our contributions to landmark developments across Southeast Asia</p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="mt-12"
      >
        <Tabs defaultValue="Malaysia" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
            {countries.map((country) => (
              <TabsTrigger key={country} value={country} className="text-sm md:text-base">
                {country}
              </TabsTrigger>
            ))}
          </TabsList>

          {countries.map((country) => (
            <TabsContent key={country} value={country} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects[country as keyof typeof projects].map((project, index) => (
                  <Card key={project.id} className="overflow-hidden card-hover border-0 shadow-sm">
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-md">
                        {project.year}
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                      <p className="text-text-color/80 text-sm mb-4">{project.description}</p>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                      >
                        View Project <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  )
}
