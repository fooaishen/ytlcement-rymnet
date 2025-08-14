"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar } from "lucide-react"

const countries = ["Malaysia", "Singapore", "Vietnam"]

const projects = {
  Malaysia: [
    {
      id: "my1",
      title: "Kuala Lumpur Commercial Tower",
      description: "A 45-story commercial tower in the heart of Kuala Lumpur's business district.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
      location: "Kuala Lumpur",
      year: 2022,
    },
    {
      id: "my2",
      title: "Penang Coastal Highway",
      description: "A 24km coastal highway connecting key areas of Penang Island.",
      image: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?q=80&w=2070&auto=format&fit=crop",
      location: "Penang",
      year: 2021,
    },
    {
      id: "my3",
      title: "Johor Bahru Residential Complex",
      description: "A modern residential development with 500+ units near the Singapore border.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      location: "Johor Bahru",
      year: 2023,
    },
  ],
  Singapore: [
    {
      id: "sg1",
      title: "Marina Bay Development",
      description: "Specialized concrete solutions for waterfront construction.",
      image: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=2031&auto=format&fit=crop",
      location: "Marina Bay",
      year: 2023,
    },
    {
      id: "sg2",
      title: "Changi Airport Terminal Expansion",
      description: "High-performance materials for the airport's newest terminal.",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
      location: "Changi",
      year: 2022,
    },
  ],
  Vietnam: [
    {
      id: "vn1",
      title: "Ho Chi Minh City Metro Line",
      description: "Construction materials for the city's expanding metro network.",
      image: "https://images.unsplash.com/photo-1494587416117-f102a2ac0a8d?q=80&w=2071&auto=format&fit=crop",
      location: "Ho Chi Minh City",
      year: 2022,
    },
    {
      id: "vn2",
      title: "Hanoi Office Park",
      description: "A sustainable business park development in the capital city.",
      image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop",
      location: "Hanoi",
      year: 2021,
    },
  ],
}

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState("Malaysia")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-12 bg-gray-100" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-text-color mb-2">Featured Projects</h2>
            <p className="text-text-color/70 max-w-2xl">
              Showcasing our contributions to landmark developments across Southeast Asia
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <Tabs defaultValue="Malaysia" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 w-full h-full max-w-md mx-auto mb-8 bg-white p-1 rounded-sm border border-gray-200">
              {countries.map((country) => (
                <TabsTrigger
                  key={country}
                  value={country}
                  className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {country}
                </TabsTrigger>
              ))}
            </TabsList>

            {countries.map((country) => (
              <TabsContent key={country} value={country} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects[country as keyof typeof projects].map((project) => (
                    <div
                      key={project.id}
                      className="bg-white rounded-sm overflow-hidden border border-gray-200 shadow-sm flex flex-col h-full"
                    >
                      <div className="relative h-48">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 mb-3 text-sm text-text-color/70">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {project.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {project.year}
                          </div>
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-text-color">{project.title}</h3>
                        <p className="text-text-color/70 text-sm mb-4">{project.description}</p>
                        <div className="mt-auto pt-4">
                          <Button
                            variant="outline"
                            className="w-full rounded-sm border-primary text-primary hover:bg-primary/5"
                          >
                            View Project
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
