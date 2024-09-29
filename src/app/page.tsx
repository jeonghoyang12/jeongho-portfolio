"use client"
import React from "react"
import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react"

type Project = {
  name: string
  year: number
  description: string
  href: string
}

type Contact = {
  name: string
  href: string
}

const projects: Project[] = [
  // {
  //   name: "Goznuk",
  //   year: 2024,
  //   description:
  //     "WIP",
  //   href: "/projects/goznuk",
  // },
  // {
  //   name: "Harumada",
  //   year: 2024,
  //   description:
  //     "WIP",
  //   href: "/projects/harumada",
  // },
  {
    name: "Notion Blog",
    year: 2024,
    description:
      "A blog powered by Notion API.",
    href: "/projects/blog",
  }
]

const contacts: Contact[] = [
  { name: "Email", href: "mailto:wjdwjdgh6998@gmail.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jeongho-yang/" },
  { name: "Github", href: "https://github.com/jeonghoyang12" },
]

export default function Home() {
  return (
    <div className="font-mono min-h-screen flex justify-center items-start pt-12 bg-[#1d1d1d]">
      <div className="max-w-[600px] w-full">
        <div className="flex flex-col">
          {/* Bio */}
          <span className="mb-5">
            <span className="text-green-500">user@machine</span>
            <span className="text-[#a9a9a9]">:</span>
            <span className="text-blue-700">~</span>
            <span className="text-[#a9a9a9]">$ whoami</span>
          </span>
          <span className="mb-5 uppercase underline">Security Engineer.</span>
          <span>Born in Seoul, South Korea.</span>
          <span>Currently based in Ohio, USA.</span>
          <span className="mt-5">
            <span className="text-gray-500">
              Pursuing B.S. Computer Science / Cybersecurity @BGSU
            </span>
          </span>

          <div className="border-t border-gray-600 my-5 opacity-30"></div>

          {/* Projects */}
          <span className="mb-5">
            <span className="text-green-500">user@machine</span>
            <span className="text-[#a9a9a9]">:</span>
            <span className="text-blue-700">~</span>
            <span className="text-[#a9a9a9]">$ ls projects/</span>
          </span>
          <div className="flex flex-col w-full">
            {projects.map((project, index) => (
              <div 
                key={project.name} 
                className={`flex flex-col w-full ${index !== projects.length - 1 ? 'mb-5' : ''}`}
              >
                <div className="flex justify-between w-full">
                  <Link href={project.href} className="hover:underline group">
                    <span className="inline-flex items-center uppercase">
                      {project.name}
                      <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <ArrowRight size={16} className="ml-1"/>
                      </span>
                    </span>
                  </Link>
                  <span className="text-[#a9a9a9]">{project.year}</span>
                </div>
                <span className="text-gray-500 mt-1">
                  {project.description}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-600 my-5 opacity-30"></div>

          {/* Contact */}
          <span className="mb-5">
            <span className="text-green-500">user@machine</span>
            <span className="text-[#a9a9a9]">:</span>
            <span className="text-blue-700">~</span>
            <span className="text-[#a9a9a9]">$ ls contacts/</span>
          </span>
          <span>
            {contacts.map((contact, index) => (
              <Link
                key={contact.name}
                href={contact.href}
                className={`inline-flex items-center hover:underline ${
                  index > 0 ? "ml-5" : ""
                }`}
              >
                <span>{contact.name}</span>
                <ArrowUpRight size={16} className="ml-1" />
              </Link>
            ))}
          </span>

          <span className="mt-10 text-[12px] text-gray-500">
            Copyright © Jeongho Yang 2024. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  )
}
