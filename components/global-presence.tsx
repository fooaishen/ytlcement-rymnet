"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, Users, ExternalLink, ChevronRight, Globe } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
import L from "leaflet" // Import Leaflet
import { Button } from "@/components/ui/button"

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false })

// Region data
const regions = [
  {
    id: "malaysia",
    name: "Malaysia",
    description: "Our headquarters and primary manufacturing facilities",
    facilities: 12,
    employees: "2,500+",
    latLng: [3.139, 101.6869], // Kuala Lumpur coordinates
    color: "#0198D5", // primary color
    products: ["Cement", "Concrete", "Aggregates", "Construction Materials"],
    keyFacts: [
      "Headquarters in Kuala Lumpur",
      "12 manufacturing facilities",
      "Leading market position since 1955",
      "Integrated production capabilities",
    ],
  },
  {
    id: "singapore",
    name: "Singapore",
    description: "Regional office and distribution center",
    facilities: 3,
    employees: "500+",
    latLng: [1.3012, 103.8392], // Singapore coordinates
    color: "#38bdf8", // lighter blue
    products: ["Cement", "Concrete"],
    keyFacts: [
      "Strategic distribution hub",
      "Regional coordination center",
      "Advanced logistics operations",
      "Key export gateway",
    ],
  },
  {
    id: "vietnam",
    name: "Vietnam",
    description: "Manufacturing and distribution facilities",
    facilities: 8,
    employees: "1,200+",
    latLng: [10.8231, 106.6297], // Ho Chi Minh City coordinates
    color: "#0e7490", // darker blue
    products: ["Cement", "Concrete", "Aggregates"],
    keyFacts: [
      "Expanding market presence",
      "8 state-of-the-art facilities",
      "Focus on sustainable production",
      "Growing team of 1,200+ professionals",
    ],
  },
  {
    id: "dubai",
    name: "Dubai",
    description: "Middle East headquarters and innovation center",
    facilities: 4,
    employees: "800+",
    latLng: [25.2048, 55.2708], // Dubai coordinates
    color: "#f59e0b", // amber
    products: ["Cement", "Concrete", "Specialized Construction Materials"],
    keyFacts: [
      "Middle East regional headquarters",
      "Innovation and R&D center",
      "4 state-of-the-art facilities",
      "Strategic gateway to MENA markets",
    ],
  },
  {
    id: "finland",
    name: "Finland",
    description: "European operations and sustainable technology hub",
    facilities: 2,
    employees: "350+",
    latLng: [60.1699, 24.9384], // Helsinki coordinates
    color: "#10b981", // emerald
    products: ["Specialized Cement", "Green Building Materials", "Sustainable Solutions"],
    keyFacts: [
      "European sustainable technology hub",
      "Advanced R&D for cold-climate construction",
      "Carbon-neutral production facilities",
      "Leader in circular economy practices",
    ],
  },
]

// Custom icon creator function
const createCustomIcon = (region, isActive) => {
  if (typeof L !== "undefined") {
    return L.divIcon({
      className: "custom-icon",
      html: `<div class="relative">
              <div class="${
                isActive ? "scale-150" : "scale-100"
              } w-4 h-4 rounded-full border-2 transition-all duration-300" 
              style="background-color: ${isActive ? region.color : "white"}; border-color: ${region.color}"></div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 whitespace-nowrap ${
                isActive ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300">
                <div class="bg-white px-2 py-1 rounded shadow-md text-xs font-bold">
                  ${region.name.toUpperCase()}
                </div>
              </div>
            </div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    })
  }
  return null
}

export default function GlobalPresence() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>("overview") // "overview", "products", "facts"
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [mapCenter, setMapCenter] = useState([30, 60]) // Default center to show all regions
  const [mapZoom, setMapZoom] = useState(2) // Lower zoom level to show all regions

  // Set Malaysia as default active region when component mounts
  useEffect(() => {
    // Import Leaflet CSS
    import("leaflet/dist/leaflet.css")

    // No automatic zooming to a specific region
    // Just import the CSS and let the map show all regions
  }, [])

  // Handle region selection
  const handleRegionSelect = (regionId) => {
    if (regionId === activeRegion) {
      // If clicking the same region, reset to overview
      setActiveRegion(null)
      setMapCenter([30, 60])
      setMapZoom(2)
    } else {
      // Set new active region and update map view
      setActiveRegion(regionId)
      setActiveTab("overview") // Reset to overview tab when changing regions
      const selectedRegion = regions.find((r) => r.id === regionId)
      if (selectedRegion) {
        setMapCenter(selectedRegion.latLng)
        setMapZoom(8)
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-text-color mb-4">Our Global Presence</h2>
            <p className="text-text-color/70">
              Strategically positioned across Southeast Asia, we deliver quality products and services to meet the
              region's growing infrastructure needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Region Selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:sticky lg:top-24 self-start"
          >
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-text-color flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-primary" />
                  Regional Network
                </h3>
                <p className="text-sm text-text-color/70 mt-2">
                  Select a region to explore our operations and facilities.
                </p>
              </div>

              <div className="p-4">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => handleRegionSelect(region.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-md mb-2 transition-all ${
                      activeRegion === region.id ? "bg-primary/10 text-primary" : "hover:bg-gray-50 text-text-color"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full mr-3 ${activeRegion === region.id ? "animate-pulse" : ""}`}
                        style={{ backgroundColor: region.color }}
                      />
                      <div className="text-left">
                        <div className="font-medium">{region.name}</div>
                        <div className="text-xs opacity-70">{region.facilities} facilities</div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${activeRegion === region.id ? "rotate-90" : ""}`}
                    />
                  </button>
                ))}
              </div>

              {activeRegion && (
                <div className="p-4 pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => handleRegionSelect(activeRegion)}
                  >
                    View All Regions
                  </Button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Middle Column - Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              {/* Map Container */}
              <div className="relative w-full h-[400px] md:h-[500px]">
                {typeof window !== "undefined" && (
                  <MapContainer
                    key={`map-${mapCenter[0]}-${mapCenter[1]}-${mapZoom}`} // Force re-render when these values change
                    center={mapCenter}
                    zoom={mapZoom}
                    style={{ height: "100%", width: "100%" }}
                    zoomControl={true}
                    attributionControl={true}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      maxZoom={19}
                    />

                    {regions.map((region) => (
                      <Marker
                        key={region.id}
                        position={region.latLng}
                        icon={createCustomIcon(region, activeRegion === region.id)}
                        eventHandlers={{
                          click: () => handleRegionSelect(region.id),
                        }}
                      >
                        <Popup>
                          <div className="text-center">
                            <strong>{region.name}</strong>
                            <div className="text-xs">{region.facilities} facilities</div>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                )}
              </div>

              {/* Region Details Section */}
              {activeRegion && (
                <div className="border-t border-gray-100">
                  {/* Tabs */}
                  <div className="flex border-b border-gray-100">
                    <button
                      className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
                        activeTab === "overview"
                          ? "text-primary border-b-2 border-primary -mb-px"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab("overview")}
                    >
                      Overview
                    </button>
                    <button
                      className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
                        activeTab === "products"
                          ? "text-primary border-b-2 border-primary -mb-px"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab("products")}
                    >
                      Products
                    </button>
                    <button
                      className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
                        activeTab === "facts"
                          ? "text-primary border-b-2 border-primary -mb-px"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab("facts")}
                    >
                      Key Facts
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className="p-6">
                    {activeTab === "overview" && (
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div
                            className="w-4 h-4 rounded-full mr-3"
                            style={{ backgroundColor: regions.find((r) => r.id === activeRegion)?.color }}
                          />
                          <h3 className="text-xl font-bold text-text-color">
                            {regions.find((r) => r.id === activeRegion)?.name}
                          </h3>
                        </div>

                        <p className="text-text-color/80">{regions.find((r) => r.id === activeRegion)?.description}</p>

                        {/* <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="bg-gray-50 p-4 rounded-md">
                            <div className="flex items-center text-gray-600 mb-1">
                              <Building2 className="w-4 h-4 mr-2" />
                              <span className="text-xs uppercase font-medium">Facilities</span>
                            </div>
                            <div className="text-2xl font-bold text-primary">
                              {regions.find((r) => r.id === activeRegion)?.facilities}
                            </div>
                          </div>

                          <div className="bg-gray-50 p-4 rounded-md">
                            <div className="flex items-center text-gray-600 mb-1">
                              <Users className="w-4 h-4 mr-2" />
                              <span className="text-xs uppercase font-medium">Team</span>
                            </div>
                            <div className="text-2xl font-bold text-primary">
                              {regions.find((r) => r.id === activeRegion)?.employees}
                            </div>
                          </div>
                        </div> */}

                        <Link
                          href={`/about#${activeRegion}`}
                          className="inline-flex items-center text-sm text-primary font-medium hover:underline mt-4"
                        >
                          Learn more about our operations in {regions.find((r) => r.id === activeRegion)?.name}
                          <ExternalLink className="ml-1 w-3 h-3" />
                        </Link>
                      </div>
                    )}

                    {activeTab === "products" && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-bold text-text-color">
                          Products & Services in {regions.find((r) => r.id === activeRegion)?.name}
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {regions
                            .find((r) => r.id === activeRegion)
                            ?.products.map((product, idx) => (
                              <div
                                key={idx}
                                className="bg-gray-50 p-4 rounded-md text-center hover:shadow-md transition-shadow"
                              >
                                <div
                                  className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center"
                                  style={{
                                    backgroundColor:
                                      idx === 0
                                        ? `${regions.find((r) => r.id === activeRegion)?.color}20`
                                        : idx === 1
                                          ? "#fecdd320"
                                          : idx === 2
                                            ? "#fef3c720"
                                            : "#dbeafe20",
                                    color:
                                      idx === 0
                                        ? regions.find((r) => r.id === activeRegion)?.color
                                        : idx === 1
                                          ? "#be123c"
                                          : idx === 2
                                            ? "#ca8a04"
                                            : "#1d4ed8",
                                  }}
                                >
                                  {idx === 0 ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M2 20h20" />
                                      <path d="M5 20V8.2a1 1 0 0 1 .4-.8l4.6-3.8a1 1 0 0 1 1.2 0l4.6 3.8a1 1 0 0 1 .4.8V20" />
                                      <path d="M8 12h8" />
                                      <path d="M8 16h8" />
                                    </svg>
                                  ) : idx === 1 ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <rect x="3" y="3" width="18" height="18" rx="2" />
                                      <path d="M3 9h18" />
                                      <path d="M9 21V9" />
                                    </svg>
                                  ) : idx === 2 ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M12 3v19" />
                                      <path d="M5 8h14" />
                                      <path d="M15 5h-3v3h3V5Z" />
                                      <path d="M9 5H6v3h3V5Z" />
                                      <path d="M15 16h-3v3h3v-3Z" />
                                      <path d="M9 16H6v3h3v-3Z" />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0Z" />
                                      <polyline points="2.32 6.16 12 11 21.68 6.16" />
                                      <line x1="12" y1="22.76" x2="12" y2="11" />
                                    </svg>
                                  )}
                                </div>
                                <div className="font-medium">{product}</div>
                              </div>
                            ))}
                        </div>

                        <p className="text-sm text-text-color/70 mt-4">
                          Our products in {regions.find((r) => r.id === activeRegion)?.name} are manufactured to the
                          highest quality standards, meeting local regulations and international best practices.
                        </p>
                      </div>
                    )}

                    {activeTab === "facts" && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-bold text-text-color">
                          Key Facts: {regions.find((r) => r.id === activeRegion)?.name}
                        </h3>

                        <ul className="space-y-2">
                          {regions
                            .find((r) => r.id === activeRegion)
                            ?.keyFacts.map((fact, idx) => (
                              <li key={idx} className="flex items-start">
                                <div
                                  className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0"
                                  style={{ backgroundColor: regions.find((r) => r.id === activeRegion)?.color }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </div>
                                <span className="text-text-color/80">{fact}</span>
                              </li>
                            ))}
                        </ul>

                        <div className="bg-gray-50 p-4 rounded-md mt-4">
                          <p className="text-sm text-text-color/70 italic">
                            "Our operations in {regions.find((r) => r.id === activeRegion)?.name} demonstrate our
                            commitment to excellence and sustainable growth in the region."
                          </p>
                          <p className="text-sm font-medium text-right mt-2">— Regional Director</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
