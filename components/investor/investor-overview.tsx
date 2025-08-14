"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, Download } from "lucide-react"

export default function InvestorOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/abstract-location.png"
          alt="YTL Cement Berhad Investor Relations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 text-left text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">YTL Cement Berhad</h1>
            <p className="text-xl md:text-2xl max-w-2xl">Investor Relations & Shareholder Information</p>
          </div>
        </div>
      </div>

      {/* Overview Content */}
      <div className="container mx-auto px-4 py-16" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mobile Image - Shows before title on mobile */}
          <div className="relative h-[300px] rounded-sm overflow-hidden border border-gray-200 lg:hidden order-first">
            <Image
              src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
              alt="Financial charts and reports"
              fill
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Investor Information</h2>
            <p className="text-text-color/80">
              YTL Cement Berhad is committed to creating long-term value for our shareholders through sustainable
              growth, operational excellence, and strategic investments. We maintain transparent communication with our
              investors and provide comprehensive information about our financial performance, corporate governance, and
              future outlook.
            </p>
            <p className="text-text-color/80">
              Our investor relations program is designed to ensure timely disclosure of material information and to
              facilitate meaningful engagement with the investment community. We welcome your interest in YTL Cement
              Berhad and invite you to explore the resources available on this page.
            </p>

            <div className="mt-8">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">47th Annual General Meeting</h3>
              </div>

              <p className="text-gray-700 mb-6">
                YTL Cement Berhad cordially invites all shareholders to participate in our forthcoming 47th Annual
                General Meeting. Please find the details below:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">Wednesday, 27 November 2024</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium">11.00 a.m</p>
                  </div>
                </div>
              </div>
            </div>

            <Button variant="link" className="text-primary hover:underline p-0 mt-4 font-medium">
              View Financial Calendar <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Desktop Image - Only visible on desktop, aligned with paragraph */}
          <div className="relative h-[400px] rounded-sm overflow-hidden border border-gray-200 hidden lg:block lg:self-start lg:mt-[4rem]">
            <Image
              src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
              alt="Financial charts and reports"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Downloads Section - Full width background */}
      <div className="w-full bg-gray-50 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-text-color mb-2">Downloads</h2>
              <p className="text-text-color/70 max-w-2xl">
                Access important documents related to the 47th Annual General Meeting
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Notice of 47th AGM",
                description:
                  "Official notice for the upcoming Annual General Meeting with agenda items and resolutions.",
                date: "5 November 2024",
                fileSize: "1.2 MB",
                coverImage:
                  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Form of Proxy",
                description: "Proxy form for shareholders who are unable to attend the AGM in person.",
                date: "5 November 2024",
                fileSize: "0.8 MB",
                coverImage:
                  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022&auto=format&fit=crop",
              },
              {
                title: "Administrative Guide for the AGM",
                description: "Guidelines and instructions for participating in the Annual General Meeting.",
                date: "5 November 2024",
                fileSize: "1.5 MB",
                coverImage:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Circular to Shareholders",
                description: "Important information and updates for all YTL Cement Berhad shareholders.",
                date: "5 November 2024",
                fileSize: "2.3 MB",
                coverImage:
                  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
              },
            ].map((document, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-sm border border-gray-200 overflow-hidden shadow-sm"
              >
                <div className="aspect-[4/3] relative">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${document.coverImage})`,
                    }}
                  />
                </div>
                <div className="p-5 flex flex-col h-[220px]">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{document.title}</h3>
                    <p className="text-text-color/70 text-sm mb-4 line-clamp-3">{document.description}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-text-color/60 mb-3">
                    <span>{document.date}</span>
                    <span>PDF • {document.fileSize}</span>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full rounded-sm border-primary text-primary hover:bg-primary/5"
                  >
                    <Download className="h-4 w-4 mr-2" /> Download Document
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
