import ProductsOverview from "@/components/products/products-overview"
import EcoProductsTabs from "@/components/products/eco-products-tabs"
import EcoProducts from "@/components/eco-products"

export default function ProductsSolutionsPage() {
  return (
    <main className="min-h-screen">
      <ProductsOverview />
      <EcoProducts />
      <EcoProductsTabs />
    </main>
  )
}
