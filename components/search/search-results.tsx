"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, FileText, MapPin } from "lucide-react"

type SearchResultsProps = {
  query: string
}

// Mock data for search results
const generateResults = (query: string) => {
  return {
    all: [
      {
        type: "page",
        title: "About Us",
        description: `Learn about our company history and how we've grown to become a leader in ${query} and construction materials.`,
        url: "/about",
        icon: FileText,
      },
      {
        type: "product",
        title: `ECOCement ${query}`,
        description: "Our flagship low-carbon cement product with reduced environmental impact.",
        image: "https://images.unsplash.com/photo-1603251579711-3e2b0e8d2877?q=80&w=2070&auto=format&fit=crop",
        url: "#",
      },
      {
        type: "project",
        title: `Kuala Lumpur ${query} Tower`,
        description: "A 45-story commercial tower in the heart of Kuala Lumpur's business district.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
        location: "Malaysia",
        url: "#",
      },
      {
        type: "news",
        title: `New ${query} Plant Opens in Malaysia`,
        description: "Our newest production facility focuses on sustainable manufacturing processes.",
        date: "April 15, 2023",
        image: "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070&auto=format&fit=crop",
        url: "#",
      },
      {
        type: "page",
        title: "Sustainability Commitments",
        description: `Our comprehensive approach to environmental, social, and governance factors related to ${query}.`,
        url: "#",
        icon: FileText,
      },
      {
        type: "product",
        title: `ECOConcrete ${query} Mix`,
        description:
          "Sustainable concrete mix designed for reduced environmental impact without compromising performance.",
        image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop",
        url: "#",
      },
    ],
    products: [
      {
        title: `ECOCement ${query}`,
        description: "Our flagship low-carbon cement product with reduced environmental impact.",
        image: "https://images.unsplash.com/photo-1603251579711-3e2b0e8d2877?q=80&w=2070&auto=format&fit=crop",
        url: "#",
      },
      {
        title: `ECOConcrete ${query} Mix`,
        description:
          "Sustainable concrete mix designed for reduced environmental impact without compromising performance.",
        image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop",
        url: "#",
      },
      {
        title: `ECODrymix ${query}`,
        description: "Pre-mixed dry mortar products formulated with eco-friendly binders and additives.",
        image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?q=80&w=1974&auto=format&fit=crop",
        url: "#",
      },
      {
        title: `ECOSand ${query}`,
        description:
          "Manufactured sand produced from recycled materials, offering a sustainable alternative to natural sand.",
        image: "https://images.unsplash.com/photo-1635400509264-b9d2b98d8b0f?q=80&w=2070&auto=format&fit=crop",
        url: "#",
      },
    ],
    projects: [
      {
        title: `Kuala Lumpur ${query} Tower`,
        description: "A 45-story commercial tower in the heart of Kuala Lumpur's business district.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
        location: "Malaysia",
        year: 2022,
        url: "#",
      },
      {
        title: `${query} Coastal Highway`,
        description: "A 24km coastal highway connecting key areas of Penang Island.",
        image: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?q=80&w=2070&auto=format&fit=crop",
        location: "Malaysia",
        year: 2021,
        url: "#",
      },
      {
        title: `Ho Chi Minh City ${query} Line`,
        description: "Construction materials for the city's expanding metro network.",
        image: "https://images.unsplash.com/photo-1494587416117-f102a2ac0a8d?q=80&w=2071&auto=format&fit=crop",
        location: "Vietnam",
        year: 2022,
        url: "#",
      },
    ],
    news: [
      {
        title: `New ${query} Plant Opens in Malaysia`,
        description: "Our newest production facility focuses on sustainable manufacturing processes.",
        date: "April 15, 2023",
        image: "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070&auto=format&fit=crop",
        url: "#",
      },
      {
        title: `Partnership with Singapore ${query} Building Council`,
        description: "Collaboration to develop new standards for sustainable construction materials.",
        date: "March 22, 2023",
        image: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=2031&auto=format&fit=crop",
        url: "#",
      },
      {
        title: `Vietnam ${query} Project Completed Ahead of Schedule`,
        description: "Major highway project delivered under budget and ahead of timeline.",
        date: "February 10, 2023",
        image: "https://images.unsplash.com/photo-1494587416117-f102a2ac0a8d?q=80&w=2071&auto=format&fit=crop",
        url: "#",
      },
    ],
  }
}

export default function SearchResults({ query }: SearchResultsProps) {
  const [results, setResults] = useState<any>({})
  const [activeTab, setActiveTab] = useState("all")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call for results
    setIsLoading(true)
    setTimeout(() => {
      setResults(generateResults(query))
      setIsLoading(false)
    }, 500)
  }, [query])

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="mt-4 text-gray-500">Loading results...</p>
      </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="all" className="text-sm rounded-sm">
            All Results
          </TabsTrigger>
          <TabsTrigger value="products" className="text-sm rounded-sm">
            Products
          </TabsTrigger>
          <TabsTrigger value="projects" className="text-sm rounded-sm">
            Projects
          </TabsTrigger>
          <TabsTrigger value="news" className="text-sm rounded-sm">
            News
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="space-y-6">
            {results.all?.map((result: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={result.url}
                  className="bg-white p-4 rounded-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow block"
                >
                  <div>
                    <span className="text-xs font-medium uppercase text-primary/70 mb-1 block">{result.type}</span>
                    <h3 className="font-medium text-base mb-1 text-text-color">{result.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{result.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="products" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.products?.map((product: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={product.url}
                  className="bg-white rounded-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow block h-full flex flex-col"
                >
                  <div className="relative h-48 rounded-t-sm overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="font-medium text-lg text-text-color mb-2">{product.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">{product.description}</p>
                    <div className="flex items-center text-primary text-sm font-medium mt-auto">
                      View product <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="projects" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.projects?.map((project: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={project.url}
                  className="bg-white rounded-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow block h-full flex flex-col"
                >
                  <div className="relative h-48 rounded-t-sm overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-md">
                      {project.year}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm text-text-color text-xs px-2 py-1 rounded-md flex items-center">
                      <MapPin className="h-3 w-3 mr-1" /> {project.location}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="font-medium text-lg text-text-color mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">{project.description}</p>
                    <div className="flex items-center text-primary text-sm font-medium mt-auto">
                      View project <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="news" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.news?.map((article: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={article.url}
                  className="bg-white rounded-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow block h-full flex flex-col"
                >
                  <div className="relative h-48 rounded-t-sm overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm text-text-color text-xs px-2 py-1 rounded-md">
                      {article.date}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="font-medium text-lg text-text-color mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">{article.description}</p>
                    <div className="flex items-center text-primary text-sm font-medium mt-auto">
                      Read article <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
