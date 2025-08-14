import AnimatedCounter from "@/components/animated-counter"

const ProductsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-gray-50 p-4 rounded-sm">
        <div className="text-3xl font-bold text-primary mb-1">
          <AnimatedCounter end={1200} />
        </div>
        <div className="text-sm text-text-color/70">Total Products</div>
      </div>

      <div className="bg-gray-50 p-4 rounded-sm">
        <div className="text-3xl font-bold text-primary mb-1">
          <AnimatedCounter end={350} />
        </div>
        <div className="text-sm text-text-color/70">Active Products</div>
      </div>

      <div className="bg-gray-50 p-4 rounded-sm">
        <div className="text-3xl font-bold text-primary mb-1">
          <AnimatedCounter end={5} />
        </div>
        <div className="text-sm text-text-color/70">Countries</div>
      </div>

      <div className="bg-gray-50 p-4 rounded-sm">
        <div className="text-3xl font-bold text-primary mb-1">
          <AnimatedCounter end={85} />
        </div>
        <div className="text-sm text-text-color/70">Categories</div>
      </div>
    </div>
  )
}

export default ProductsOverview
