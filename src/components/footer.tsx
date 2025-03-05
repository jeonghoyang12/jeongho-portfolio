"use client"

import Link from "next/link"
import { GithubLogo, Envelope, LinkedinLogo } from "@phosphor-icons/react"

export default function Footer() {
  return (
    <footer className="mt-auto py-6 text-neutral-400">
      <div className="flex justify-center space-x-6">
        <Link
          href="mailto:wjdwjdgh6998@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1"
        >
          <Envelope size={24} />
          <span>Email</span>
        </Link>
        <Link
          href="https://github.com/jeonghoyang12"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1"
        >
          <GithubLogo size={24} />
          <span>Github</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/jeongho-yang/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1"
        >
          <LinkedinLogo size={24} />
          <span>LinkedIn</span>
        </Link>
      </div>
    </footer>
  )
}
