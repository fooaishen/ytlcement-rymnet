"use client"

import { useRouter } from "next/navigation"
import { ApplicationForm } from "@/components/careers/application-form"
import { motion } from "framer-motion"

export default function GeneralApplicationPage() {
  const router = useRouter()

  const handleCancel = () => {
    router.push("/careers")
  }

  const handleSubmit = (data: any) => {
    console.log("General application submitted:", data)
    router.push("/careers")
  }

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-left mb-12">
          <motion.h2
            className="text-3xl font-bold text-text-color mb-4"
          >
            Get Started
          </motion.h2>
          <motion.p
            className="text-text-color/80 max-w-2xl"
          >
            Begin your journey with YTL Cement Group. Submit your application and we'll match you with suitable
            opportunities that align with your skills and career aspirations.
          </motion.p>
        </div>

        <div>
          {/* Application Form - No job specified */}
          <ApplicationForm job={null} onCancel={handleCancel} onSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  )
}
