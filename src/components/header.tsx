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
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }
    const formatted = date.toLocaleString("en-US", options)
    const [datePart, timePart] = formatted.split(", ")
    const [hours, minutes] = timePart.split(":")
    return `${datePart} ${hours}${showColon ? ":" : " "}${minutes}`
  }

  return (
    <header className="bg-black text-white p-2 flex justify-between items-center font-ubuntu">
      <div className="flex-1">
        <span className="font-bold text-lg">Jeongho Yang</span>
      </div>
      <div className="flex-1 text-center">
        <span>{mounted ? formatTime(currentTime) : ""}</span>
      </div>
      <div className="flex-1 flex justify-end items-center space-x-4">
        <button className="hover:bg-purple-800 p-1 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.414a5 5 0 001.42 7.072M2.758 17.242a9 9 0 001.416 12.728"
            />
          </svg>
        </button>
        <button className="hover:bg-purple-800 p-1 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}