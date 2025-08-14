"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "Cement",
    description:
      "Cement is an important binding agent used in all construction. We have a range of cement products that meet all of your construction needs.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Group_5_c6da4ea233.jpg",
    link: "#",
  },
  {
    id: 2,
    name: "Concrete",
    description:
      "Concrete is one of the most widely used building materials in the world. Made from cement, aggregates and water, it is a strong and durable.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Group_8_38caba74ee.jpg",
    link: "#",
  },
  {
    id: 3,
    name: "Aggregates",
    description:
      "Aggregates are geological materials such as stone and sand that are used as a base material in construction. It is a key ingredient in ready-mixed concrete, asphalt, and more.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/aggregates_lava_c6a02e59c1.png",
    link: "#",
  },
  {
    id: 4,
    name: "Drymix",
    description:
      "QuikMix is our established brand of drymix products. We provide a range of drymix products specially formulated to ease construction and renovation.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/drymix_lava_8286cee026.png",
    link: "#",
  },
  {
    id: 5,
    name: "Precast Concrete",
    description:
      "We produce precast construction with high-quality, customized components designed for durability, efficiency, and adaptability. We offer technical support.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/precast_header_952e014a33.jpg",
    link: "#",
  },
  {
    id: 6,
    name: "Prefabricated Bathroom Units",
    description:
      "Our PREBAS bathroom units are ready-to-install, off-site prefabricated bathrooms with customizable design and layout. These units deliver efficiency, superior quality, and more.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/pbu_header_7b43404f9d.jfif",
    link: "#",
  },
  {
    id: 7,
    name: "Green Technology",
    description:
      "With a 5G license from the Malaysian Construction Industry Development Board, we provide best value solutions and technical expertise to meet the sustainability needs of construction.",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Group_18_2daf3ba351.jpg",
    link: "#",
  },
  {
    id: 8,
    name: "Environmental Services",
    description:
      "Our environmental services provide comprehensive waste management solutions. Our expertise spans the entire supply, delivery and hazardous industrial wastewater treatment.",
    image:
      "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Environmental_Services_Header_4cd13eca33.jpg",
    link: "#",
  },
]

export default function BusinessCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-12 bg-gray-100" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-text-color mb-2">Our business</h2>
            <p className="text-text-color/70 max-w-2xl">
              Showcasing our contributions to landmark developments across Southeast Asia
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-sm border border-gray-200 overflow-hidden transition-shadow hover:shadow-md flex flex-col h-full"
            >
              <div className="relative w-full overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6 border-t border-gray-100 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-text-color flex items-center">{category.name}</h3>
                <p className="text-text-color/70 text-sm mb-4 line-clamp-3 lg:line-clamp-none">
                  {category.description}
                </p>
                <Link
                  href={category.link}
                  className="text-primary text-sm font-medium flex items-center hover:underline mt-auto"
                >
                  Find out more <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
