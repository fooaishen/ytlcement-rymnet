"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { productData } from "@/lib/product-data"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function EcoProductsTabs() {
  const [activeTab, setActiveTab] = useState("cement")
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [showStickyDropdown, setShowStickyDropdown] = useState(false)

  // Handle scroll for sticky dropdown
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return

      const sectionRect = sectionRef.current.getBoundingClientRect()
      const contentRect = contentRef.current.getBoundingClientRect()

      // Calculate position relative to viewport
      const sectionTop = sectionRect.top
      const contentBottom = contentRect.bottom

      // Show sticky dropdown when section is in view but scrolled up partially,
      // and content is still visible
      if (sectionTop < 0 && contentBottom > 0) {
        setShowStickyDropdown(true)
      } else {
        setShowStickyDropdown(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="bg-gray-50 py-16 relative" ref={sectionRef}>
      {/* Sticky mobile dropdown that appears when scrolling */}
      {showStickyDropdown && (
        <div className="lg:hidden fixed top-20 left-0 right-0 z-50 bg-white shadow-md py-3 px-4 border-b border-gray-200">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between bg-transparent">
                <span>{productData[activeTab].title}</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[var(--radix-dropdown-menu-trigger-width)]">
              {Object.keys(productData).map((key) => (
                <DropdownMenuItem
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full ${key === activeTab ? "bg-primary/10" : ""}`}
                >
                  {productData[key].title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-text-color mb-2">Products and Solutions</h2>
          <p className="text-text-color/70 max-w-2xl">
            Our product range is designed with sustainability in mind, offering environmentally friendly alternatives
            without compromising on performance or durability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          ref={contentRef}
        >
          <Tabs defaultValue="cement" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-6">
              {/* Regular mobile dropdown for small screens (not sticky) */}
              <div className="lg:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between bg-transparent">
                      <span>{productData[activeTab].title}</span>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[var(--radix-dropdown-menu-trigger-width)]">
                    {Object.keys(productData).map((key) => (
                      <DropdownMenuItem
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`w-full ${key === activeTab ? "bg-primary/10" : ""}`}
                      >
                        {productData[key].title}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Desktop tabs */}
              <div className="hidden lg:block">
                <TabsList
                  className="w-full h-full grid"
                  style={{ gridTemplateColumns: `repeat(${Object.keys(productData).length}, 1fr)` }}
                >
                  {Object.keys(productData).map((key) => (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2 whitespace-nowrap"
                    >
                      {productData[key].title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>

            {Object.keys(productData).map((key) => (
              <TabsContent key={key} value={key} className="mt-6">
                <div className="bg-white rounded-sm border border-gray-200 overflow-hidden transition-all duration-300">
                  <div className="p-6 border-b border-gray-200 bg-primary/5">
                    <h3 className="text-2xl font-bold mb-2 text-text-color flex items-center">
                      {/* <span
                        style={{ backgroundColor: "#489d30" }}
                        className="text-white text-xs px-2 py-1 rounded-sm mr-3"
                      >
                        ECO
                      </span> */}
                      {productData[key].title}
                    </h3>
                    <p className="text-text-color/80">{productData[key].description}</p>
                  </div>

                  <div className="p-6">
                    {/* Layout structure */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Column 1: Product Image */}
                      <div>
                        <div className="relative w-full rounded-sm overflow-hidden border border-gray-100">
                          <div className="aspect-[16/9] w-full relative">
                            <Image
                              src={productData[key].image || "/placeholder.svg"}
                              alt={productData[key].title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Column 2: Key Features */}
                      <div>
                        <h4 className="font-semibold text-lg mb-4 pb-2 border-b border-gray-100">Key Features</h4>
                        <ul className="list-disc ml-5 space-y-4">
                          {productData[key].keyFeatures.map((feature, index) => (
                            <li key={index} className="text-text-color/80 text-sm">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Additional Information (spans full width) */}
                    <div className="mt-8">
                      <h4 className="font-semibold text-lg mb-4 pb-2 border-b border-gray-100">
                        Additional Information
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        <div className="bg-gray-50 p-4 rounded-sm border border-gray-100">
                          <h5 className="font-medium text-sm mb-2 text-text-color">Technical Specifications</h5>
                          <ul className="space-y-2">
                            {productData[key].specifications ? (
                              productData[key].specifications.map((spec, index) => (
                                <li key={index} className="text-sm text-text-color/80 flex items-start">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                                  {spec}
                                </li>
                              ))
                            ) : (
                              <li className="text-sm text-text-color/80">Standard industry specifications apply</li>
                            )}
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-sm border border-gray-100">
                          <h5 className="font-medium text-sm mb-2 text-text-color">Sustainability Benefits</h5>
                          <ul className="space-y-2">
                            {productData[key].sustainabilityBenefits ? (
                              productData[key].sustainabilityBenefits.map((benefit, index) => (
                                <li key={index} className="text-sm text-text-color/80 flex items-start">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                                  {benefit}
                                </li>
                              ))
                            ) : (
                              <li className="text-sm text-text-color/80">
                                Reduced carbon footprint compared to traditional products
                              </li>
                            )}
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-sm border border-gray-100">
                          <h5 className="font-medium text-sm mb-2 text-text-color">Sustainability Benefits</h5>
                          <ul className="space-y-2">
                            {productData[key].sustainabilityBenefits ? (
                              productData[key].sustainabilityBenefits.map((benefit, index) => (
                                <li key={index} className="text-sm text-text-color/80 flex items-start">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                                  {benefit}
                                </li>
                              ))
                            ) : (
                              <li className="text-sm text-text-color/80">
                                Reduced carbon footprint compared to traditional products
                              </li>
                            )}
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-sm border border-gray-100">
                          <h5 className="font-medium text-sm mb-2 text-text-color">Sustainability Benefits</h5>
                          <ul className="space-y-2">
                            {productData[key].sustainabilityBenefits ? (
                              productData[key].sustainabilityBenefits.map((benefit, index) => (
                                <li key={index} className="text-sm text-text-color/80 flex items-start">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                                  {benefit}
                                </li>
                              ))
                            ) : (
                              <li className="text-sm text-text-color/80">
                                Reduced carbon footprint compared to traditional products
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Project Applications (horizontal layout below additional information) */}
                    <div className="mt-8">
                      <h4 className="font-semibold text-lg mb-4 pb-2 border-b border-gray-100">Project Applications</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {productData[key].applications.map((application, index) => (
                          <div
                            key={index}
                            className="border border-gray-100 rounded-sm overflow-hidden shadow-sm flex flex-col"
                          >
                            <div className="w-full h-32 relative">
                              <Image
                                src={application.image || "/placeholder.svg"}
                                alt={application.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h5 className="font-medium text-base mb-2">{application.title}</h5>
                              <p className="text-sm text-text-color/70">{application.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Regional Availability (spans full width) */}
                    <div className="mt-8">
                      <h4 className="font-semibold text-lg mb-4 pb-2 border-b border-gray-100">
                        Regional Availability
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {productData[key].regions && productData[key].regions.length > 0 ? (
                          productData[key].regions.map((region) => (
                            <Link
                              key={region.id}
                              href={`https://ytlcement.com/${region.id}`}
                              target="_blank"
                              className="px-4 py-2 bg-gray-50 hover:bg-primary/10 border border-gray-200 rounded-sm text-sm font-medium transition-colors flex items-center"
                            >
                              {region.name}
                              <ExternalLink className="ml-2 h-3 w-3" />
                            </Link>
                          ))
                        ) : productData[key].externalLink ? (
                          <Link
                            href={productData[key].externalLink}
                            target="_blank"
                            className="px-4 py-2 bg-gray-50 hover:bg-primary/10 border border-gray-200 rounded-sm text-sm font-medium transition-colors flex items-center"
                          >
                            Visit Website
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </Link>
                        ) : (
                          <p className="text-sm text-gray-500">No regional availability information</p>
                        )}
                      </div>
                    </div>
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
