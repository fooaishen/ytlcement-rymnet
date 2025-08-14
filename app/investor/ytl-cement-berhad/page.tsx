import type { Metadata } from "next"
import HeroBanner from "@/components/hero-banner"
import { Button } from "@/components/ui/button"
import { FileText, Calendar, Clock, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import InvestorOverview from "@/components/investor/investor-overview"


export default function YTLCementBerhadPage() {
  return (
    <main className="min-h-screen">
      <InvestorOverview />
    </main>
  )
}
