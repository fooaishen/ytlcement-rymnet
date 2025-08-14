import SustainabilityOverview from "@/components/sustainability/sustainability-overview"
import SustainabilityEfforts from "@/components/sustainability/sustainability-efforts"
import EsgPillars from "@/components/sustainability/esg-pillars"
import EcoProductRange from "@/components/sustainability/eco-product-range"
import SustainabilityInitiatives from "@/components/sustainability/sustainability-initiatives"
import SustainabilityReports from "@/components/sustainability/sustainability-reports"

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen">
      <SustainabilityOverview />
      <SustainabilityEfforts />
      <EsgPillars />
      <EcoProductRange />
      <SustainabilityInitiatives />
      <SustainabilityReports />
    </main>
  )
}
