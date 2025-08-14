import type { Metadata } from "next"
import CareersOverview from "@/components/careers/careers-overview"
import HRPillars from "@/components/careers/hr-pillars"
import WorkingValues from "@/components/careers/working-values"
import CareerOpportunities from "@/components/careers/career-opportunities"
import JobListings from "@/components/careers/job-listings"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Careers | YTL Cement",
  description: "Join our team at YTL Cement and build your career with a leader in the construction industry.",
}

export default function CareersPage() {
  return (
    <main className="flex-1">
      {/* <CareersOverview />
      <HRPillars />
      <WorkingValues />
      <CareerOpportunities /> */}
      <JobListings />
      {/* <ScrollToTop /> */}
    </main>
  )
}
