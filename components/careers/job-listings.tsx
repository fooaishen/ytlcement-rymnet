"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, MapPin, Briefcase, Clock, ChevronDown } from "lucide-react"

// Sample job listings data
const jobListingsData = [
  {
    id: 1,
    title: "Process Engineer",
    location: "Kuala Lumpur, Malaysia",
    department: "Engineering",
    type: "Full-time",
    description: "Responsible for optimizing cement production processes and ensuring quality control.",
    posted: "2 weeks ago",
    pinned: true,
  },
  {
    id: 2,
    title: "Sales Manager",
    location: "Singapore",
    department: "Sales",
    type: "Full-time",
    description: "Lead sales initiatives and develop client relationships in the Singapore market.",
    posted: "3 days ago",
  },
  {
    id: 3,
    title: "Environmental Specialist",
    location: "Hanoi, Vietnam",
    department: "Sustainability",
    type: "Full-time",
    description: "Develop and implement environmental management systems across production facilities.",
    posted: "1 week ago",
  },
  {
    id: 4,
    title: "Financial Analyst",
    location: "Kuala Lumpur, Malaysia",
    department: "Finance",
    type: "Full-time",
    description: "Analyze financial data and prepare reports to guide business decisions.",
    posted: "5 days ago",
  },
  {
    id: 5,
    title: "IT Support Specialist",
    location: "Singapore",
    department: "IT",
    type: "Full-time",
    description: "Provide technical support and maintain IT infrastructure across regional offices.",
    posted: "2 days ago",
  },
  {
    id: 6,
    title: "Production Supervisor",
    location: "Ipoh, Malaysia",
    department: "Operations",
    type: "Full-time",
    description: "Oversee daily production operations and manage production team members.",
    posted: "1 month ago",
  },
  {
    id: 7,
    title: "Quality Control Manager",
    location: "Dubai, UAE",
    department: "Quality Assurance",
    type: "Full-time",
    description: "Lead quality control initiatives and ensure product standards across Middle East operations.",
    posted: "1 week ago",
  },
  {
    id: 8,
    title: "Research Scientist",
    location: "Helsinki, Finland",
    department: "R&D",
    type: "Full-time",
    description: "Conduct research on sustainable construction materials and innovative cement technologies.",
    posted: "3 weeks ago",
  },
  {
    id: 9,
    title: "Human Resources Coordinator",
    location: "Ho Chi Minh City, Vietnam",
    department: "Human Resources",
    type: "Full-time",
    description: "Support HR operations including recruitment, employee relations, and training coordination.",
    posted: "2 weeks ago",
  },
  {
    id: 10,
    title: "Logistics Coordinator",
    location: "Johor Bahru, Malaysia",
    department: "Supply Chain",
    type: "Full-time",
    description: "Coordinate logistics operations and optimize supply chain efficiency across regional facilities.",
    posted: "4 days ago",
  },
]

export default function JobListings() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [applicationData, setApplicationData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null as File | null,
  })

  // Filter job listings based on search and filters
  const filteredJobs = jobListingsData
    .filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesLocation = locationFilter === "all" || job.location.includes(locationFilter)

      const matchesDepartment = departmentFilter === "all" || job.department === departmentFilter

      return matchesSearch && matchesLocation && matchesDepartment
    })
    .sort((a, b) => {
      // Sort pinned jobs to the top
      if (a.pinned && !b.pinned) return -1
      if (!a.pinned && b.pinned) return 1
      return 0
    })

  const handleJobClick = (job: any) => {
    setSelectedJob(job)
  }

  const closeJobDetails = () => {
    setSelectedJob(null)
  }

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle application submission logic here
    console.log("Application submitted:", applicationData)
    setApplicationData({
      fullName: "",
      email: "",
      phone: "",
      coverLetter: "",
      resume: null,
    })
    alert("Application submitted successfully! We'll get back to you soon.")
  }

  const handleInputChange = (field: string, value: string) => {
    setApplicationData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setApplicationData((prev) => ({
      ...prev,
      resume: file,
    }))
  }

  // Get unique locations and departments for filters
  const locations = [
    "all",
    ...new Set(jobListingsData.map((job) => job.location.split(",")[1]?.trim() || job.location.split(",")[0]?.trim())),
  ]
  const departments = ["all", ...new Set(jobListingsData.map((job) => job.department))]

  return (
    <section className="py-16 bg-gray-50 min-h-screen" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Job Details Full Page */}
        {selectedJob ? (
          <div className="bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                {/* J<Button variant="outline" onClick={closeJobDetails} className="mb-8 bg-transparent text-text-color">
                  ← Back to Job Listings
                </Button> */}
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-text-color mb-4">{selectedJob.title}</h1>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-text-color/70">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span className="text-base">{selectedJob.location}</span>
                    </div>
                    <div className="flex items-center text-text-color/70">
                      <Briefcase className="h-5 w-5 mr-2" />
                      <span className="text-base">{selectedJob.department}</span>
                    </div>
                    <div className="flex items-center text-text-color/70">
                      <Clock className="h-5 w-5 mr-2" />
                      <span className="text-base">{selectedJob.posted}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <div className="prose prose-lg max-w-none">
                    <h2 className="font-semibold mb-6 text-xl text-text-color">Job Description</h2>
                    <p className="text-text-color/80 mb-8 leading-relaxed text-base">{selectedJob.description}</p>

                    <h2 className="font-semibold mb-6 text-xl text-text-color">Key Responsibilities</h2>
                    <ul className="list-disc pl-5 space-y-3 text-text-color/80 mb-8 text-base">
                      <li className="pl-2">Lead and manage project teams to deliver high-quality results</li>
                      <li className="pl-2">Collaborate with cross-functional teams to achieve project objectives</li>
                      <li className="pl-2">Ensure compliance with industry standards and regulations</li>
                      <li className="pl-2">Monitor project progress and provide regular updates to stakeholders</li>
                      <li className="pl-2">Identify and mitigate potential risks and issues</li>
                    </ul>

                    <h2 className="font-semibold mb-6 text-xl text-text-color">Requirements</h2>
                    <ul className="list-disc pl-5 space-y-3 text-text-color/80 mb-8 text-base">
                      <li className="pl-2">Bachelor's degree in relevant field or equivalent experience</li>
                      <li className="pl-2">Minimum 3-5 years of experience in similar role</li>
                      <li className="pl-2">Strong communication and leadership skills</li>
                      <li className="pl-2">Proficiency in relevant software and tools</li>
                      <li className="pl-2">Ability to work in a fast-paced environment</li>
                    </ul>

                    <h2 className="font-semibold mb-6 text-xl text-text-color">What We Offer</h2>
                    <ul className="list-disc pl-5 space-y-3 text-text-color/80 text-base">
                      <li className="pl-2">Competitive salary and benefits package</li>
                      <li className="pl-2">Professional development opportunities</li>
                      <li className="pl-2">Flexible working arrangements</li>
                      <li className="pl-2">Health and wellness programs</li>
                      <li className="pl-2">Collaborative and inclusive work environment</li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="sticky top-8">
                    <div className="bg-gray-100 p-8 rounded-sm">
                      <h3 className="text-xl font-semibold mb-4 text-text-color">Apply for this position</h3>
                      <p className="text-text-color/70 mb-6 text-base">
                        Ready to join our team? Submit your application and we'll get back to you soon.
                      </p>
                      <Button
                        className="w-full mb-4 py-3 text-base"
                        onClick={() => (window.location.href = `/careers/apply/${selectedJob.id}`)}
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full bg-white hover:bg-gray-50 py-3 text-base"
                        onClick={closeJobDetails}
                      >
                        Back to Listings
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Job Listings View
          <>
            {/* Hero Section */}
            {/* <div className="text-center mb-16">
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-text-color mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                Join Our Team
              </motion.h1>
              <motion.p
                className="text-xl text-text-color/80 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Build your career with YTL Cement Group, a leading provider of construction materials and solutions
                across Southeast Asia. We're committed to creating an environment where talented individuals can thrive
                and make a real impact.
              </motion.p>
            </div>  */}

            <div className="text-left mb-12">
              <motion.h2 className="text-3xl font-bold text-text-color mb-4">Current Openings</motion.h2>
              <motion.p className="text-text-color/80 max-w-2xl">
                Explore our current job openings across different locations and departments.
              </motion.p>
            </div>

            <motion.div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search jobs..."
                  className="pl-10 text-base text-text-color placeholder:text-text-color/60"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Location Filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between bg-white text-text-color">
                    <span className="text-base">{locationFilter === "all" ? "All Locations" : locationFilter}</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[var(--radix-dropdown-menu-trigger-width)]"
                >
                  {locations.map((location) => (
                    <DropdownMenuItem
                      key={location}
                      onClick={() => setLocationFilter(location)}
                      className={
                        locationFilter === location
                          ? "bg-primary/10 text-base text-text-color"
                          : "text-base text-text-color"
                      }
                    >
                      {location === "all" ? "All Locations" : location}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Department Filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between bg-white text-text-color">
                    <span className="text-base">{departmentFilter === "all" ? "All Functions" : departmentFilter}</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[var(--radix-dropdown-menu-trigger-width)]"
                >
                  {departments.map((department) => (
                    <DropdownMenuItem
                      key={department}
                      onClick={() => setDepartmentFilter(department)}
                      className={
                        departmentFilter === department
                          ? "bg-primary/10 text-base text-text-color"
                          : "text-base text-text-color"
                      }
                    >
                      {department === "all" ? "All Functions" : department}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>

            <div className="space-y-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    className="bg-white p-6 rounded-sm border border-gray-200 hover:border-primary/80 transition-colors duration-300 cursor-pointer"
                    onClick={() => handleJobClick(job)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          {/* {job.pinned && (
                            <div className="flex items-center gap-1 bg-amber-100 text-amber-700 px-2 py-1 rounded-sm text-xs font-medium border border-amber-200">
                              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                                <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />
                              </svg>
                              Pinned
                            </div>
                          )} */}
                          <h3 className="text-xl text-text-color font-semibold">{job.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <div className="flex items-center text-sm text-text-color/70">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center text-sm text-text-color/70">
                            <Briefcase className="h-4 w-4 mr-1" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center text-sm text-text-color/70">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{job.posted}</span>
                          </div>
                        </div>
                        <p className="text-text-color/80">{job.description}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation()
                            window.location.href = `/careers/apply/${job.id}`
                          }}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-sm">
                  <p className="text-text-color/70">No job openings match your search criteria.</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
