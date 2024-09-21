"use client"

import React, { useState, useEffect } from "react"

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [showColon, setShowColon] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    const blinkTimer = setInterval(() => {
      setShowColon((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(blinkTimer)
    }
  }, [])

  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }
    const formatted = date.toLocaleString("en-US", options)
    const [datePart, timePart] = formatted.split(", ")
    const [time, period] = timePart.split(" ")
    const [hours, minutes] = time.split(":")
    return `${datePart} ${hours}${showColon ? ":" : " "}${minutes} ${period}`
  }

  return (
    <header className="bg-black text-white p-2">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center font-ubuntu">
        <div>
          <span className="font-medium text-lg">JEONGHO YANG</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>EST</span>
          <span>{mounted ? formatTime(currentTime) : ""}</span>
        </div>
      </div>
    </header>
  )
}
