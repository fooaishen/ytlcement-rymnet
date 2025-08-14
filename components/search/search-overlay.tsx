"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { X, Search, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SearchResults from "@/components/search/search-results"
import SearchSuggestions from "@/components/search/search-suggestions"

type SearchOverlayProps = {
  onClose: () => void
}

export default function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([
    "Sustainability report",
    "ECO products",
    "Malaysia projects",
    "Company history",
  ])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Focus the input when overlay opens
    if (inputRef.current) {
      inputRef.current.focus()
    }

    // Prevent body scrolling when overlay is open
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  useEffect(() => {
    // Simulate search delay
    if (query.trim()) {
      setIsSearching(true)
      const timer = setTimeout(() => {
        setIsSearching(false)
        setShowResults(true)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setIsSearching(false)
      setShowResults(false)
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      // Add to recent searches if not already there
      if (!recentSearches.includes(query)) {
        setRecentSearches((prev) => [query, ...prev.slice(0, 3)])
      }
      setShowResults(true)
    }
  }

  const handleRecentSearchClick = (search: string) => {
    setQuery(search)
  }

  const handleClearRecent = (e: React.MouseEvent, search: string) => {
    e.stopPropagation()
    setRecentSearches((prev) => prev.filter((item) => item !== search))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex flex-col"
    >
      <div className="bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-text-color">Search</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-text-color hover:text-primary hover:bg-transparent"
              aria-label="Close search"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 pb-4">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search our website..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 pr-10 py-6 text-lg w-full border-2 border-gray-200 rounded-sm"
              />
              {query && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          {!query && recentSearches.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Recent Searches</h3>
              <div className="space-y-2">
                {recentSearches.map((search, index) => (
                  <div
                    key={index}
                    onClick={() => handleRecentSearchClick(search)}
                    className="flex items-center justify-between bg-white p-3 rounded-sm shadow-sm cursor-pointer hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-400 mr-2" />
                      <span>{search}</span>
                    </div>
                    <button
                      onClick={(e) => handleClearRecent(e, search)}
                      className="text-gray-400 hover:text-gray-600"
                      aria-label="Remove recent search"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {isSearching ? (
            <div className="flex flex-col items-center justify-center py-12">
              <p className="mt-4 text-gray-500">Searching...</p>
            </div>
          ) : query && showResults ? (
            <SearchResults query={query} />
          ) : query ? (
            <SearchSuggestions query={query} />
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Search our website</h2>
              <p className="text-gray-500 max-w-md mx-auto">
                Search for content across our website, including products, projects, news, and more.
              </p>
            </div>
          )}
        </div>
      </div>

      {query && showResults && (
        <div className="bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <p className="text-sm text-gray-500">
              Showing results for <span className="font-medium text-text-color">"{query}"</span>
            </p>
          </div>
        </div>
      )}
    </motion.div>
  )
}
