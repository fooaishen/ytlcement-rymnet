"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title:
      "Malayan Cement Registers 2nd Quarter Revenue of RM1.2 Billion, Profit After Tax Increases 32% to RM185 Million",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/PERFORMANCE_PIC_8c9a5dbcf3.webp",
    ctaText: "Read more",
    ctaLink: "#",
  },
  {
    id: 2,
    title: "First UIRC Symposium Tropical Karst Landscape: Challenges for Conservation and Sustainable Use Symposium",
    image: "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/SYMPOSIUM_443_dec3567f09.jpg",
    ctaText: "Learn more",
    ctaLink: "#",
  },
  {
    id: 3,
    title: "Second University-Industry Research Consortium (UIRC) Scientific Committee Meeting",
    image:
      "https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/Whats_App_Image_2024_12_30_at_10_10_00_Copy_9fe9f64a29.jpeg",
    ctaText: "Discover ECO",
    ctaLink: "#",
  },
]

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const slideDuration = 5000 // 5 seconds per slide

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    resetAutoPlay()
  }

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }

    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, slideDuration)
    }
  }

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, slideDuration)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying])

  useEffect(() => {
    resetAutoPlay()
  }, [currentSlide])

  return (
    <section className="relative h-[500px] overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative h-full flex items-end pb-20">
                  <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                      <motion.h1
                        className="text-3xl md:text-4xl font-bold text-white"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {slide.title}
                      </motion.h1>
                    </div>
                  </div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-sm transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-sm transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Timing indicators */}
      <div className="absolute bottom-8 left-0 right-0 container px-4">
        <div className="w-1/2 flex">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group h-1 flex-1 mx-2"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="w-full h-full bg-white/40 rounded-none overflow-hidden">
                <div
                  className={`h-full bg-white rounded-none ${currentSlide === index ? "animate-timing" : ""}`}
                  style={{
                    width: currentSlide === index ? "100%" : index < currentSlide ? "100%" : "0%",
                    transition: currentSlide === index ? `width ${slideDuration}ms linear` : "",
                  }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
