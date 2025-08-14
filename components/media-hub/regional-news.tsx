"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

const newsData = {
  malaysia: [
    {
      id: 1,
      title: "First UIRC Symposium Tropical Karst Landscape: Challenges for Conservation and Sustainable Use Symposium",
      excerpt:
        "YTL Cement participated in the first University-Industry Research Consortium (UIRC) Symposium focused on sustainable management of tropical karst landscapes.",
      date: "March 15, 2024",
      image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/SYMPOSIUM_443_dec3567f09.jpg",
      region: "Malaysia",
      link: "#",
    },
    {
      id: 2,
      title: "Second University-Industry Research Consortium (UIRC) Scientific Committee Meeting",
      excerpt:
        "The second UIRC Scientific Committee Meeting was held to discuss ongoing research projects and future collaborations.",
      date: "February 22, 2024",
      image:
        "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Whats_App_Image_2024_12_30_at_10_10_00_Copy_9fe9f64a29.jpeg",
      region: "Malaysia",
      link: "#",
    },
    {
      id: 3,
      title: "YTL Cement Launches New ECO Product Line",
      excerpt:
        "YTL Cement has launched a new line of environmentally friendly construction materials designed to reduce carbon footprint.",
      date: "January 10, 2024",
      image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Group_5_c6da4ea233.jpg",
      region: "Malaysia",
      link: "#",
    },
  ],
  singapore: [
    {
      id: 4,
      title: "YTL Cement Singapore Receives Green Building Materials Certification",
      excerpt:
        "YTL Cement Singapore has been awarded the Green Building Materials certification for its sustainable concrete products.",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=2031&auto=format&fit=crop",
      region: "Singapore",
      link: "#",
    },
    {
      id: 5,
      title: "Singapore Green Building Council Partnership Announced",
      excerpt:
        "YTL Cement Singapore has formed a strategic partnership with the Singapore Green Building Council to promote sustainable construction.",
      date: "February 18, 2024",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      region: "Singapore",
      link: "#",
    },
  ],
  vietnam: [
    {
      id: 6,
      title: "Vietnam Infrastructure Project Completed Ahead of Schedule",
      excerpt:
        "YTL Cement Vietnam has successfully completed a major infrastructure project ahead of schedule and under budget.",
      date: "March 20, 2024",
      image: "https://images.unsplash.com/photo-1494587416117-f102a2ac0a8d?q=80&w=2071&auto=format&fit=crop",
      region: "Vietnam",
      link: "#",
    },
    {
      id: 7,
      title: "YTL Cement Vietnam Expands Production Capacity",
      excerpt:
        "YTL Cement Vietnam has announced a significant expansion of its production capacity to meet growing demand.",
      date: "January 25, 2024",
      image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop",
      region: "Vietnam",
      link: "#",
    },
  ],
  dubai: [
    {
      id: 9,
      title: "YTL Cement Dubai Launches Innovation Center",
      excerpt:
        "YTL Cement Dubai has opened a new innovation center focused on developing construction materials for extreme climate conditions.",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
      region: "Dubai",
      link: "#",
    },
    {
      id: 10,
      title: "Dubai Sustainable Construction Summit",
      excerpt:
        "YTL Cement Dubai hosted the first Sustainable Construction Summit, bringing together industry leaders to discuss future trends.",
      date: "February 5, 2024",
      image: "https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?q=80&w=2071&auto=format&fit=crop",
      region: "Dubai",
      link: "#",
    },
  ],
  finland: [
    {
      id: 11,
      title: "Carbon-Neutral Facility Opens in Helsinki",
      excerpt:
        "YTL Cement Finland has opened its first carbon-neutral production facility in Helsinki, setting new industry standards.",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=2070&auto=format&fit=crop",
      region: "Finland",
      link: "#",
    },
    {
      id: 12,
      title: "Winter Construction Technology Breakthrough",
      excerpt:
        "Research team in Finland develops new concrete formulation that performs exceptionally well in sub-zero temperatures.",
      date: "January 20, 2024",
      image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=2073&auto=format&fit=crop",
      region: "Finland",
      link: "#",
    },
  ],
  other: [
    {
      id: 8,
      title: "YTL Cement Forms Strategic Alliance with European Technology Provider",
      excerpt:
        "YTL Cement has formed a strategic alliance with a leading European technology provider to enhance production efficiency.",
      date: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
      region: "International",
      link: "#",
    },
  ],
}

// Combine all news items for the "All Regions" tab
newsData.all = [
  ...newsData.malaysia,
  ...newsData.singapore,
  ...newsData.vietnam,
  ...newsData.dubai,
  ...newsData.finland,
  ...newsData.other,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export default function RegionalNews() {
  const [activeRegion, setActiveRegion] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-12 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-text-color mb-2">Regional News</h2>
            <p className="text-text-color/70 max-w-2xl">
              Latest updates and announcements from YTL Cement operations across Southeast Asia
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <Tabs defaultValue="all" value={activeRegion} onValueChange={setActiveRegion} className="w-full">
            <TabsList
              className="w-full h-full grid bg-white border border-gray-200 p-1 rounded-sm mb-8"
              style={{ gridTemplateColumns: "repeat(7, 1fr)" }}
            >
              <TabsTrigger
                value="all"
                className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                All Regions
              </TabsTrigger>
              <TabsTrigger
                value="malaysia"
                className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Malaysia
              </TabsTrigger>
              <TabsTrigger
                value="singapore"
                className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Singapore
              </TabsTrigger>
              <TabsTrigger
                value="vietnam"
                className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Vietnam
              </TabsTrigger>
              <TabsTrigger
                value="dubai"
                className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Dubai
              </TabsTrigger>
              <TabsTrigger
                value="finland"
                className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Finland
              </TabsTrigger>
              <TabsTrigger
                value="other"
                className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Other
              </TabsTrigger>
            </TabsList>

            {Object.keys(newsData).map((region) => (
              <TabsContent key={region} value={region} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {newsData[region].map((news) => (
                    <Card key={news.id} className="overflow-hidden border border-gray-200 rounded-sm h-full">
                      <div className="relative h-48">
                        <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                        <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm text-text-color text-xs px-2 py-1 rounded-md flex items-center">
                          <MapPin className="h-3 w-3 mr-1" /> {news.region}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center text-xs text-text-color/60 mb-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          {news.date}
                        </div>
                        <h3 className="font-bold text-lg mb-2 line-clamp-2">{news.title}</h3>
                        <p className="text-text-color/70 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                        <Link href={news.link}>
                          <Button
                            variant="ghost"
                            className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                          >
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {newsData[region].length > 6 && (
                  <div className="flex justify-center mt-8">
                    <Button className="bg-primary hover:bg-primary/90 rounded-sm">Load More</Button>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
