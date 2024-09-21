"use client"
import React from "react"

export default function Home() {
  return (
    <div className="bg-blackfont-mono h-screen mt-12">
      <div className="flex flex-col">
        <span className="mb-2">
          <span className="text-green-500">user@machine</span>:
          <span className="text-blue-700">~</span>$ whoami
        </span>
        <span>Born in Seoul, South Korea.</span>
        <span>Based in Bowling Green, Ohio.</span>
        
        <span className="mt-5">
          Currently pursuing B.S. Computer Science / Cybersecurity @{" "}
          <span className="underline">Bowling Green State University</span>
        </span>
      </div>
    </div>
  )
}
