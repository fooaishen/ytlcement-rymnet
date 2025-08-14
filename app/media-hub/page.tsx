import MediaHubHero from "@/components/media-hub/media-hub-hero"
import FeaturedNews from "@/components/media-hub/featured-news"
import RegionalNews from "@/components/media-hub/regional-news"
import MediaSearch from "@/components/media-hub/media-search"

export default function MediaHubPage() {
  return (
    <main className="min-h-screen">
      <MediaHubHero />
      <MediaSearch />
      <FeaturedNews />
      <RegionalNews />
    </main>
  )
}
