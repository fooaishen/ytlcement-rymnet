"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const reports = [
  {
    id: 1,
    title: "YTL Cement Group Sustainability Report 2023",
    description:
      "Comprehensive overview of our sustainability performance, initiatives, and achievements for the fiscal year 2023.",
    date: "March 15, 2023",
    fileSize: "8.5 MB",
    link: "#",
    coverImage: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Environmental Impact Assessment 2023",
    description: "Detailed analysis of our environmental footprint and mitigation strategies across all operations.",
    date: "February 10, 2023",
    fileSize: "5.2 MB",
    link: "#",
    coverImage: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Social Responsibility Report 2023",
    description: "Overview of our community engagement programs, employee wellbeing initiatives, and social impact.",
    date: "January 22, 2023",
    fileSize: "4.8 MB",
    link: "#",
    coverImage: "https://images.unsplash.com/photo-1491382825904-a4c6dca98e8c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "YTL Cement Group Sustainability Report 2022",
    description:
      "Comprehensive overview of our sustainability performance, initiatives, and achievements for the fiscal year 2022.",
    date: "March 20, 2022",
    fileSize: "7.9 MB",
    link: "#",
    coverImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2532&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Carbon Reduction Strategy 2022-2025",
    description: "Detailed roadmap for achieving our carbon reduction targets over the next three years.",
    date: "November 5, 2022",
    fileSize: "3.6 MB",
    link: "#",
    coverImage: "https://images.unsplash.com/photo-1569950044272-a6273db1e1ed?q=80&w=2574&auto=format&fit=crop",
  },
]

export default function SustainabilityReports() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [visibleReports, setVisibleReports] = useState(3)

  const loadMoreReports = () => {
    setVisibleReports(reports.length)
  }

  const displayedReports = reports.slice(0, visibleReports)
  const hasMoreReports = visibleReports < reports.length

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-text-color mb-2">Sustainability Reports</h2>
            <p className="text-text-color/70 max-w-2xl">
              Transparent reporting on our environmental, social, and governance performance
            </p>
          </div>
          <Link href="#" className="mt-4 md:mt-0 inline-flex items-center text-primary font-medium hover:underline">
            View All Reports <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-sm border border-gray-200 overflow-hidden shadow-sm"
            >
              <div className="aspect-[4/3] relative">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${report.coverImage})`,
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{report.title}</h3>
                <p className="text-text-color/70 text-sm mb-4 line-clamp-3">{report.description}</p>
                <div className="flex items-center justify-between text-sm text-text-color/60 mb-4">
                  <span>{report.date}</span>
                  <span>PDF • {report.fileSize}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-sm border-primary text-primary hover:bg-primary/5"
                >
                  <Download className="h-4 w-4 mr-2" /> Download Report
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {hasMoreReports && (
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="rounded-sm border-primary text-primary hover:bg-primary/5"
              onClick={loadMoreReports}
            >
              Load More Reports
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
