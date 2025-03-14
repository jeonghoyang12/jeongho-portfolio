"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-auto py-6 text-neutral-400 font-light text-[13px] mb-5">
      <div className="max-w-[780px] mx-auto px-6 sm:px-8 lg:px-12 mt-12">
        <div className="border-t border-neutral-300 py-2" />
        <div className="flex justify-between">
          <div className="flex items-center">
            <span>&copy; Jeongho Yang, {new Date().getFullYear()}</span>
          </div>
          <div className="flex space-x-4">
            <Link
              href="mailto:wjdwjdgh6998@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black flex items-center gap-1"
            >
              <span>Email</span>
            </Link>
            <Link
              href="https://github.com/jeonghoyang12"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black flex items-center gap-1"
            >
              <span>Github</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jeongho-yang/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
