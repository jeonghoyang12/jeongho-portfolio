"use client"
import React from "react"
import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react"

export default function Home() {
  return (
    <div>
      <div className="text-white font-medium mb-5">Jeongho Yang</div>
      <div className="text-white mb-8 font-light">
        Security engineer pursuing B.S. in Computer Science / Cybersecurity @
        BGSU, with a passion for implementing efficient cloud security
        solutions, combining deep technical expertise with strong communication
        skills to deliver comprehensive security solutions and infrastructure
        protection.
      </div>
      <div className="mt-12">
        {/* Projects */}
        <div className="text-white font-medium mb-5">Projects</div>
        <div className="space-y-6">

          {/* goznuk */}
          <Link
            href="https://github.com/your-username/project-1"
            target="_blank"
            className="block p-4 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white font-medium">goznuk</p>
                <p className="text-neutral-400 mt-1 font-light text-[14px]">
                  WIP
                </p>
                <div className="flex gap-2 mt-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-400">
                    Next.js
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-400">
                    TypeScript
                  </span>
                </div>
              </div>
              <ArrowUpRight className="text-neutral-400" size={20} />
            </div>
          </Link>

          {/* my-blog */}
          <Link
            href="https://github.com/your-username/project-1"
            target="_blank"
            className="block p-4 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white font-medium">my-blog</p>
                <p className="text-neutral-400 mt-1 font-light text-[14px]">
                  Blog with Notion API
                </p>
                <div className="flex gap-2 mt-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-400">
                    Next.js
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-400">
                    TypeScript
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-400">
                    Notion
                  </span>
                </div>
              </div>
              <ArrowUpRight className="text-neutral-400" size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
