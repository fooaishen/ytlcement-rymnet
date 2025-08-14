"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AnimatedCounter from "@/components/animated-counter"

const initiatives = {
  rca: {
    title: "Recycled Concrete Aggregate (RCA)",
    description:
      "Our RCA initiative transforms construction waste into valuable resources, reducing landfill waste and conserving natural aggregates. Through advanced processing techniques, we produce high-quality recycled aggregates suitable for various construction applications.",
    image: "https://images.unsplash.com/photo-1565626424178-c699f6601afd?q=80&w=1935&auto=format&fit=crop",
    stats: [
      { value: "250000", label: "Tons Recycled Annually" },
      { value: "40", label: "Reduction in Natural Aggregate Use" },
      { value: "30", label: "Lower Carbon Footprint" },
    ],
    features: [
      "Quality-controlled processing",
      "Compliance with international standards",
      "Reduced environmental impact",
      "Cost-effective alternative to natural aggregates",
    ],
  },
  cdl: {
    title: "CDL Academy",
    description:
      "The Construction & Development Leadership (CDL) Academy is our educational initiative focused on sustainable construction practices. We provide training, research opportunities, and knowledge sharing to develop the next generation of sustainability-focused construction professionals.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2064&auto=format&fit=crop",
    stats: [
      { value: "1000", label: "Professionals Trained" },
      { value: "15", label: "Research Projects" },
      { value: "25", label: "Industry Partnerships" },
    ],
    features: [
      "Specialized sustainability curriculum",
      "Industry-academic collaborations",
      "Practical training programs",
      "Research and innovation focus",
    ],
  },
  builds: {
    title: "BUILDS",
    description:
      "BUILDS is YTL Cement's Corporate Social Responsibility arm. It is dedicated to supporting causes that extend beyond business objectives. The goals of BUILDS are centred around ensuring and contributing to the wellbeing of people, the environment, and the making of sustainable and worthwhile progress.",
    image: "https://ytlcementbuilds.com/wp-content/uploads/2021/10/Group-94.svg",
    stats: [
      { value: "12", label: "Urban Projects" },
      { value: "35", label: "Average Carbon Reduction" },
      { value: "5", label: "City Partnerships" },
    ],
    features: [
      "Integrated urban planning approach",
      "Low-carbon material specifications",
      "Performance monitoring and reporting",
      "Community engagement strategies",
    ],
  },
}

export default function SustainabilityInitiatives() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-text-color mb-2">Initiatives</h2>
            <p className="text-text-color/70 max-w-2xl">
              Our key programs driving sustainability in the construction industry
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <Tabs defaultValue="builds" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8 bg-gray-100 p-1 rounded-sm">
              <TabsTrigger
                value="builds"
                className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                BUILDS
              </TabsTrigger>
              <TabsTrigger
                value="cdl"
                className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                CDL Academy
              </TabsTrigger>
              <TabsTrigger
                value="rca"
                className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                RCA
              </TabsTrigger>
            </TabsList>

            {Object.entries(initiatives).map(([key, initiative]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[300px] md:h-[400px] rounded-sm overflow-hidden border border-gray-200">
                    <Image
                      src={initiative.image || "/placeholder.svg"}
                      alt={initiative.title}
                      fill
                      className="object-fit"
                    />
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">{initiative.title}</h3>
                    <p className="text-text-color/80">{initiative.description}</p>

                    <div className="grid grid-cols-3 gap-4">
                      {initiative.stats.map((stat, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-sm text-center">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {stat.value.includes("+") ? (
                              <AnimatedCounter end={Number.parseInt(stat.value)} suffix="+" />
                            ) : stat.value.includes("%") ? (
                              <AnimatedCounter end={Number.parseInt(stat.value)} suffix="%" />
                            ) : (
                              <AnimatedCounter end={Number.parseInt(stat.value.replace(/,/g, ""))} />
                            )}
                          </div>
                          <div className="text-xs text-text-color/70">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {initiative.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                            <span className="text-text-color/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="bg-primary hover:bg-primary/90 rounded-sm">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
