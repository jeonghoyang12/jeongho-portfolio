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
    <header className="bg-[#1d1d1d] text-white p-2">
      <div className="max-w-[600px] mx-auto py-3 flex justify-between items-center font-ubuntu">
        <div>
          <span className="font-medium">jeongho yang</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-[#a9a9a9]">EST</span>
          <span className="text-[#a9a9a9]">{mounted ? formatTime(currentTime) : ""}</span>
        </div>
      </div>
    </header>
  )
}
