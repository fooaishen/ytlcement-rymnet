"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimalPlaces?: number
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimalPlaces = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const countRef = useRef({ start: 0, end, current: 0, startTime: 0 })

  useEffect(() => {
    if (!isInView) return

    countRef.current = {
      start: 0,
      end,
      current: 0,
      startTime: performance.now(),
    }

    const animateCount = (timestamp: number) => {
      if (!countRef.current.startTime) {
        countRef.current.startTime = timestamp
      }

      const progress = Math.min((timestamp - countRef.current.startTime) / duration, 1)
      const easedProgress = easeOutQuart(progress)
      const currentValue = countRef.current.start + (end - countRef.current.start) * easedProgress

      countRef.current.current = currentValue
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animateCount)
      }
    }

    requestAnimationFrame(animateCount)
  }, [isInView, end, duration])

  // Easing function for smoother animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4)
  }

  const formattedCount = count.toFixed(decimalPlaces)

  return (
    <span ref={ref} className="inline-block">
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  )
}
