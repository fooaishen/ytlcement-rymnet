"use client"

import { useState, useRef, useEffect } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

// Milestones within each 5-year period with title and description
const periodMilestones = {
  "1950": [
    {
      title: "Initial Planning",
      description:
        "Company founders met in Kuala Lumpur to draft the initial business plan and vision for the company.",
    },
    {
      title: "Funding Secured",
      description:
        "Initial investment of 500,000 Malaysian Ringgit was secured from local investors to begin operations.",
    },
    {
      title: "Team Formation",
      description: "The founding team of 3 engineers and 2 business professionals was assembled to lead the company.",
    },
  ],
  "1955": [
    {
      title: "Kuala Lumpur Office",
      description: "First permanent office was established in downtown Kuala Lumpur with a staff of 12 employees.",
    },
    {
      title: "First Contract",
      description:
        "Secured first major contract to build residential housing for government employees in Petaling Jaya.",
    },
    {
      title: "Engineering Expansion",
      description: "Engineering team grew to 15 professionals, adding expertise in structural and civil engineering.",
    },
  ],
  "1960": [
    {
      title: "Residential Success",
      description:
        "Completed first major residential development with 50 units, establishing our reputation for quality.",
    },
    {
      title: "Equipment Acquisition",
      description: "Invested in modern construction equipment to enhance capabilities and efficiency on project sites.",
    },
    {
      title: "Local Partnerships",
      description: "Formed strategic partnerships with local suppliers to ensure reliable material sourcing.",
    },
  ],
  "1965": [
    {
      title: "Infrastructure Division",
      description: "Established dedicated infrastructure division to pursue government contracts for public works.",
    },
    {
      title: "First Highway Project",
      description: "Won contract to build a 5km section of highway connecting major industrial zones.",
    },
    {
      title: "Regional Expansion",
      description: "Opened satellite office in Penang to better serve projects in northern Malaysia.",
    },
  ],
  "1970": [
    {
      title: "Peninsula-wide Operations",
      description: "Expanded operational capacity to handle projects throughout the Malaysian peninsula.",
    },
    {
      title: "Fleet Modernization",
      description:
        "Invested in a modern fleet of construction vehicles and heavy equipment to support growing operations.",
    },
    {
      title: "New Headquarters",
      description: "Constructed and moved into purpose-built headquarters in Kuala Lumpur's business district.",
    },
  ],
  "1975": [
    {
      title: "Materials Production",
      description:
        "Began small-scale production of specialized construction materials to reduce dependency on imports.",
    },
    {
      title: "Quality Control Lab",
      description: "Established in-house quality control laboratory to ensure consistent material standards.",
    },
    {
      title: "Supply Chain Optimization",
      description: "Implemented new logistics systems to optimize material delivery and reduce project delays.",
    },
  ],
  "1980": [
    {
      title: "Digital Transformation Begins",
      description: "Implemented first IBM computer systems to manage project planning and accounting.",
    },
    {
      title: "Project Management Modernization",
      description: "Adopted international project management methodologies to improve efficiency and outcomes.",
    },
    {
      title: "Staff Development Program",
      description: "Launched comprehensive training program to upskill workforce in new technologies and methods.",
    },
  ],
  "1985": [
    {
      title: "First Cement Plant",
      description: "Constructed and commissioned first cement manufacturing plant with 500,000 ton annual capacity.",
    },
    {
      title: "Production Milestone",
      description: "Achieved full production capacity within first year of operations, meeting growing market demand.",
    },
    {
      title: "Export Capabilities",
      description: "Established export division to serve neighboring countries with quality construction materials.",
    },
  ],
  "1990": [
    {
      title: "Japanese Partnership",
      description: "Formed strategic alliance with Tanaka Construction of Japan to share technology and expertise.",
    },
    {
      title: "R&D Department",
      description: "Established dedicated research and development department to focus on material innovation.",
    },
    {
      title: "Advanced Materials Research",
      description: "Began research into high-performance concrete and other advanced construction materials.",
    },
  ],
  "1995": [
    {
      title: "Singapore Expansion",
      description: "Opened first international office in Singapore to serve the growing Southeast Asian market.",
    },
    {
      title: "Distribution Network",
      description: "Expanded regional distribution network with warehouses in key Southeast Asian cities.",
    },
    {
      title: "Regional Hub Status",
      description: "Singapore office became the hub for all international operations and business development.",
    },
  ],
  "2000": [
    {
      title: "Major Infrastructure Contracts",
      description: "Secured contracts for major infrastructure projects across Malaysia, Thailand, and Indonesia.",
    },
    {
      title: "Y2K-Ready Systems",
      description: "Successfully implemented Y2K-compliant systems across all business operations.",
    },
    {
      title: "Digital Project Management",
      description: "Adopted comprehensive digital project management tools to enhance collaboration and efficiency.",
    },
  ],
  "2005": [
    {
      title: "Sustainability Program",
      description: "Launched company-wide sustainability program with clear environmental impact reduction targets.",
    },
    {
      title: "Green Building Certification",
      description: "Achieved first green building certification for a commercial project in Kuala Lumpur.",
    },
    {
      title: "Carbon Reduction Initiative",
      description: "Implemented carbon footprint tracking and reduction initiatives across all operations.",
    },
  ],
  "2010": [
    {
      title: "ECO Product Launch",
      description:
        "Introduced first generation of environmentally friendly construction materials under the ECO brand.",
    },
    {
      title: "Sustainable Materials Research",
      description: "Intensified research into sustainable alternatives to traditional construction materials.",
    },
    {
      title: "Green Manufacturing",
      description: "Converted manufacturing facilities to use renewable energy and reduce environmental impact.",
    },
  ],
  "2015": [
    {
      title: "Industry 4.0 Adoption",
      description: "Implemented Industry 4.0 technologies across manufacturing facilities to enhance efficiency.",
    },
    {
      title: "Smart Factory Conversion",
      description: "Converted main production facility to smart factory with automated quality control systems.",
    },
    {
      title: "IoT Monitoring Systems",
      description: "Deployed IoT sensors throughout production line to monitor and optimize manufacturing processes.",
    },
  ],
  "2020": [
    {
      title: "Carbon Neutrality Pledge",
      description: "Committed to achieving carbon neutrality in all operations by 2050 with clear milestone targets.",
    },
    {
      title: "Renewable Energy Transition",
      description: "Began transition to 100% renewable energy for all manufacturing and office facilities.",
    },
    {
      title: "Sustainable Supply Chain",
      description: "Implemented strict sustainability requirements for all suppliers and partners.",
    },
  ],
  "2023": [
    {
      title: "Next-Gen ECO Products",
      description: "Launched next generation of sustainable construction materials with 40% lower carbon footprint.",
    },
    {
      title: "Carbon Reduction Achievement",
      description: "Achieved 30% reduction in overall carbon emissions compared to 2015 baseline.",
    },
    {
      title: "Circular Economy Initiatives",
      description: "Implemented circular economy principles in product design and manufacturing processes.",
    },
    {
      title: "Digital Twin Technology",
      description:
        "Pioneered digital twin technology for real-time monitoring of manufacturing facilities and construction sites.",
    },
    {
      title: "ASEAN Expansion",
      description: "Expanded operations to Vietnam and Philippines, strengthening our presence across ASEAN markets.",
    },
    {
      title: "Industry 4.0 Leadership Award",
      description: "Received prestigious Industry 4.0 Leadership Award for innovation in construction technology.",
    },
    {
      title: "Workforce Development Program",
      description:
        "Launched comprehensive reskilling program to prepare 5,000+ employees for digital construction era.",
    },
    {
      title: "Community Housing Initiative",
      description: "Committed resources to build 500 affordable, sustainable homes in underserved communities by 2025.",
    },
  ],
}

// Timeline events data with 5-year intervals from 1950 to present
const timelineEvents = [
  {
    year: 1950,
    title: "Company Inception",
    description: "Initial planning and foundation work for the company began in Malaysia.",
    image: "/1950s-construction-meeting.png",
  },
  {
    year: 1955,
    title: "First Office Established",
    description: "Opened first small office in Kuala Lumpur with a team of 5 engineers.",
    image: "/1950s-malaysian-office.png",
  },
  {
    year: 1960,
    title: "Initial Projects",
    description: "Completed first residential construction projects in central Malaysia.",
    image: "/1960s-malaysian-housing.png",
  },
  {
    year: 1965,
    title: "Expansion of Services",
    description: "Added infrastructure development to our portfolio of services.",
    image: "/infrastructure-development-1960s.png",
  },
  {
    year: 1970,
    title: "Regional Growth",
    description: "Expanded operations to cover the entire Malaysian peninsula.",
    image: "/malaysian-peninsula-map-1970s.png",
  },
  {
    year: 1975,
    title: "Manufacturing Begins",
    description: "Started small-scale production of construction materials.",
    image: "/1970s-construction-factory.png",
  },
  {
    year: 1980,
    title: "Technology Adoption",
    description: "Implemented first computerized systems for project management.",
    image: "/1980s-office-computers.png",
  },
  {
    year: 1985,
    title: "Company Founded",
    description: "Established first cement plant in Malaysia with annual capacity of 500,000 tons.",
    image: "/placeholder.svg?key=ytcat",
  },
  {
    year: 1990,
    title: "International Partnerships",
    description: "Formed strategic alliances with construction firms in Japan and South Korea.",
    image: "/1990s-asia-partnership.png",
  },
  {
    year: 1995,
    title: "Expansion to Singapore",
    description: "Opened first international office and distribution center in Singapore.",
    image: "/placeholder.svg?key=p5udv",
  },
  {
    year: 2000,
    title: "Millennium Projects",
    description: "Secured contracts for major infrastructure projects across Southeast Asia.",
    image: "/placeholder-x7hlx.png",
  },
  {
    year: 2005,
    title: "Sustainability Initiative",
    description: "Launched first company-wide sustainability program and green building practices.",
    image: "/green-building-2000s.png",
  },
  {
    year: 2010,
    title: "ECO Product Line Launch",
    description: "Introduced first generation of environmentally friendly construction materials.",
    image: "/placeholder.svg?key=m4ek7",
  },
  {
    year: 2015,
    title: "Digital Transformation",
    description: "Implemented Industry 4.0 technologies across manufacturing facilities.",
    image: "/placeholder.svg?key=70dvb",
  },
  {
    year: 2020,
    title: "Carbon Neutrality Pledge",
    description: "Committed to achieving carbon neutrality in operations by 2050.",
    image: "/placeholder.svg?key=a0fbc",
  },
  {
    year: 2023,
    title: "Expansion of ECO Product Line",
    description: "Launched next generation of sustainable construction materials with 40% lower carbon footprint.",
    image: "/placeholder.svg?key=4hk4v",
  },
].sort((a, b) => a.year - b.year)

export default function CompanyTimeline() {
  const [currentIndex, setCurrentIndex] = useState(timelineEvents.length - 1) // Start with the most recent year
  const [progressIndex, setProgressIndex] = useState(0)
  const [showingMilestone, setShowingMilestone] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const currentEvent = timelineEvents[currentIndex]
  const totalEvents = timelineEvents.length
  const currentMilestones = periodMilestones[currentEvent.year.toString()] || []
  const totalMilestones = currentMilestones.length
  const currentMilestone = currentMilestones[progressIndex] || null

  // Initialize milestone display when year changes
  useEffect(() => {
    if (totalMilestones === 0) return

    // Reset progress index when year changes
    setProgressIndex(0)
    setShowingMilestone(true)
  }, [currentIndex, totalMilestones])

  const goToIndex = (index) => {
    if (index >= 0 && index < totalEvents) {
      setCurrentIndex(index)
    }
  }

  const handleMilestoneClick = (index) => {
    setProgressIndex(index)
    setShowingMilestone(true)
  }

  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < totalEvents - 1) {
      // Swipe left - go to next (newer) year
      goToIndex(currentIndex + 1)
    }
    if (isRightSwipe && currentIndex > 0) {
      // Swipe right - go to previous (older) year
      goToIndex(currentIndex - 1)
    }
  }

  return (
    <section className="w-full bg-white py-16" ref={ref}>
      <div className="container mx-auto px-4 min-h-[600px]">
        <h2 className="text-3xl md:text-4xl font-bold text-text-color mb-8 text-center">Our Journey</h2>
        <p className="text-xl text-text-color/80 mb-12 text-center max-w-3xl mx-auto">
          Explore the key milestones that have shaped our company's history and our vision for the future
        </p>

        {/* Year navigation */}
        <div className="mb-8 w-full">
          {/* Mobile dropdown */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <span>
                    {currentEvent.year === Math.max(...timelineEvents.map((e) => e.year))
                      ? "Present"
                      : currentEvent.year}
                  </span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[var(--radix-dropdown-menu-trigger-width)]">
                {timelineEvents.map((event, index) => {
                  const isLatestYear = event.year === Math.max(...timelineEvents.map((e) => e.year))
                  return (
                    <DropdownMenuItem
                      key={event.year}
                      onClick={() => goToIndex(index)}
                      className={`w-full ${index === currentIndex ? "bg-primary/10" : ""}`}
                    >
                      {isLatestYear ? "Present" : event.year}
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop tabs */}
          <div className="hidden lg:block">
            <Tabs
              defaultValue={currentEvent.year.toString()}
              value={currentEvent.year.toString()}
              onValueChange={(value) => {
                const index = timelineEvents.findIndex((event) => event.year.toString() === value)
                if (index !== -1) {
                  goToIndex(index)
                }
              }}
            >
              <TabsList
                className="w-full grid h-full"
                style={{ gridTemplateColumns: `repeat(${timelineEvents.length}, 1fr)` }}
              >
                {timelineEvents.map((event, index) => {
                  const isLatestYear = event.year === Math.max(...timelineEvents.map((e) => e.year))
                  return (
                    <TabsTrigger
                      key={event.year}
                      value={event.year.toString()}
                      className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2 whitespace-nowrap"
                    >
                      {isLatestYear ? "Present" : event.year}
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Event card */}
        <div className="container mx-auto">
          <div key={`${currentEvent.year}-${progressIndex}`}>
            <Card
              className="border border-gray-200 shadow-md overflow-hidden min-h-[350px] touch-pan-y lg:touch-auto"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="md:flex">
                <div className="md:w-1/3 h-64 md:h-[350px]">
                  <img
                    src={currentEvent.image || "/placeholder.svg"}
                    alt={currentEvent.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 md:w-2/3 flex flex-col h-auto">
                  <div className="flex items-center mb-4">
                    <div className="text-white text-sm font-bold px-3 py-1 rounded-full bg-primary">
                      {currentEvent.year}
                    </div>
                  </div>

                  {/* Main period title always visible */}
                  <h3 className="text-2xl font-bold mb-4 text-text-color">{currentEvent.title}</h3>

                  {/* Show either milestone content or main description */}
                  {showingMilestone && currentMilestone ? (
                    <div className="transition-opacity duration-300 ease-in-out">
                      <h4 className="text-lg font-semibold mb-2 text-text-color">{currentMilestone.title}</h4>
                      <p className="text-text-color/80 text-base">{currentMilestone.description}</p>
                    </div>
                  ) : (
                    <p className="text-text-color/80 text-base">{currentEvent.description}</p>
                  )}

                  {/* Milestone progress bar */}
                  {currentMilestones.length > 0 && (
                    <div className="mt-auto pt-8">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-text-color">Key Milestones</h4>
                        <span className="text-xs text-gray-500">
                          {progressIndex + 1} of {totalMilestones}
                        </span>
                      </div>

                      {/* Segmented progress bar */}
                      <div className="flex w-full gap-4">
                        {currentMilestones.map((_, index) => (
                          <div
                            key={index}
                            className={`h-1.5 cursor-pointer flex-1 transition-all duration-300 ${
                              index === progressIndex ? "bg-primary" : "bg-gray-200"
                            }`}
                            onClick={() => handleMilestoneClick(index)}
                          ></div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </div>
            </Card>
            {/* Swipe indicator for mobile */}
            <div className="lg:hidden text-center mt-4">
              <p className="text-sm text-gray-500">Swipe left or right to navigate through years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
