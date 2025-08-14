"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, ArrowRight } from "lucide-react"

type SearchSuggestionsProps = {
  query: string
}

// Mock data for search suggestions
const generateSuggestions = (query: string) => {
  const categories = [
    {
      title: "Products",
      items: [
        {
          title: `ECOCement ${query}`,
          description: "Low-carbon cement with reduced clinker content",
          image: "/placeholder.svg?height=100&width=100",
          url: "#",
        },
        {
          title: `ECOConcrete ${query}`,
          description: "Sustainable concrete mix designed for reduced environmental impact",
          image: "/placeholder.svg?height=100&width=100",
          url: "#",
        },
      ],
    },
    {
      title: "Projects",
      items: [
        {
          title: `${query} Tower Project`,
          description: "Commercial development in Kuala Lumpur",
          image: "/placeholder.svg?height=100&width=100",
          url: "#",
        },
        {
          title: `${query} Infrastructure`,
          description: "Major highway development in Singapore",
          image: "/placeholder.svg?height=100&width=100",
          url: "#",
        },
      ],
    },
    {
      title: "Pages",
      items: [
        {
          title: `About ${query}`,
          description: "Learn about our company history and values",
          url: "/about",
        },
        {
          title: `${query} Sustainability`,
          description: "Our commitment to environmental responsibility",
          url: "#",
        },
      ],
    },
  ]

  return categories
}

export default function SearchSuggestions({ query }: SearchSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<any[]>([])

  useEffect(() => {
    // Simulate API call for suggestions
    setSuggestions(generateSuggestions(query))
  }, [query])

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-500">Suggested Searches</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {[`${query} products`, `${query} in Malaysia`, `${query} sustainability`, `${query} projects`].map(
            (suggestion, index) => (
              <div
                key={index}
                className="bg-white px-4 py-2 rounded-sm border border-gray-200 text-sm hover:border-primary hover:text-primary transition-colors cursor-pointer flex items-center"
              >
                <Search className="h-3 w-3 mr-1" />
                {suggestion}
              </div>
            ),
          )}
        </div>
      </div>

      {suggestions.map((category, index) => (
        <div key={index} className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">{category.title}</h3>
            <Link href="#" className="text-xs text-primary hover:underline flex items-center">
              View all <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.items.map((item: any, itemIndex: number) => (
              <Link
                href={item.url}
                key={itemIndex}
                className="bg-white p-4 rounded-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
              >
                {item.image && (
                  <div className="flex-shrink-0 w-16 h-16 relative rounded-sm overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                )}
                <div className="flex-grow">
                  <h4 className="font-medium text-text-color mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  )
}
