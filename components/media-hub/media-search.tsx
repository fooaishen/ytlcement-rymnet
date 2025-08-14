"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MediaSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeRegion, setActiveRegion] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search functionality here
    console.log("Searching for:", searchQuery)
  }

  return (
    <section className="py-8 bg-gray-50 border-t border-b border-gray-200" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search news, press releases, and media coverage..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              <Search className="h-5 w-5" />
            </Button>
          </form>

        </motion.div>
      </div>
    </section>
  )
}
