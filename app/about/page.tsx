import AboutOverview from "@/components/about/about-overview"
import CompanyTimeline from "@/components/about/company-timeline"
import Sustainability from "@/components/sustainability"
import GlobalPresence from "@/components/global-presence"
import CompanyLogos from "@/components/about/company-logos"
// Remove the EnhancedFooter import if it exists
// import EnhancedFooter from "@/components/enhanced-footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutOverview />
      <CompanyTimeline />
      <Sustainability />
      <GlobalPresence />
      <CompanyLogos />
      {/* Remove the EnhancedFooter component if it exists here */}
      {/* <EnhancedFooter /> */}
    </main>
  )
}
