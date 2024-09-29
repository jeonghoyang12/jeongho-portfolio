"use client"
import React from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import Image from "next/image"

interface Project {
  title: string
  description?: string
  technologies?: string[]
  githubLink?: string
  status: "completed" | "in-progress"
  snapshots?: string[]
  role?: string
  timeline?: string
  demoLink?: string
}

const projects: Record<string, Project> = {
  // goznuk: {
  //   title: "Goznuk",
  //   status: "in-progress",
  // },
  // harumada: {
  //   title: "Harumada",
  //   status: "in-progress",
  // },
  blog: {
    title: "Blog",
    description:
      "A dynamic blog platform built with Next.js and powered by the Notion API, showcasing seamless integration of content management and modern web technologies.",
    technologies: ["Next.js", "Notion API"],
    githubLink: "https://github.com/jeonghoyang12/my-blog",
    status: "completed",
    snapshots: ["/images/blog-snapshot.png", "/images/notion-snapshot.png"],
    role: "Software Engineer / Side Project",
    timeline: "May 2024 - Jun 2024",
    demoLink: "https://my-blog-ten-olive.vercel.app/blog",
  },
}

export default function ProjectDetail() {
  const params = useParams()
  const slug = params.slug as string
  const project = projects[slug]

  if (!project) {
    return (
      <div className="bg-[#1d1d1d] text-white font-mono min-h-screen p-8">
        <div className="max-w-[600px] mx-auto">
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
            <p className="font-bold">Project Not Found</p>
            <p>
              The project you&apos;re looking for doesn&apos;t exist or may have
              been moved.
            </p>
          </div>
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#1d1d1d] text-white min-h-screen p-8 text-[14px] leading-relaxed">
      <div className="max-w-[600px] mx-auto">
        <h1 className="font-bold mb-2">{project.title}</h1>

        {project.status === "completed" ? (
          <>
            <p className="mb-6 text-gray-400">
              {project.role && `${project.role} • `}
              {project.timeline}
            </p>

            {project.description && (
              <div className="mb-8">
                <p>{project.description}</p>
              </div>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-8">
                <p>
                  This project was built using {project.technologies.join(", ")}.
                  Each technology was chosen to address specific challenges and
                  contribute to the overall success of the project.
                </p>
              </div>
            )}

            {project.snapshots && project.snapshots.length > 0 && (
              <div className="mb-8">
                <div className="overflow-x-auto custom-scrollbar">
                  <div className="flex gap-6 pb-4">
                    {project.snapshots.map((snapshot, index) => (
                      <div key={index} className="flex-shrink-0 w-[400px] h-[300px] relative">
                        <Image
                          src={snapshot}
                          alt={`${project.title} snapshot ${index + 1}`}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mb-8">
              <p>
                Interested in exploring further? Check out the project on{" "}
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </Link>
                )}
                {project.demoLink && project.githubLink && " or "}
                {project.demoLink && (
                  <Link
                    href={project.demoLink}
                    className="text-blue-400 hover:underline"
                  >
                    see it in action
                  </Link>
                )}.
              </p>
            </div>
          </>
        ) : (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
            <p className="font-bold">Work in Progress</p>
            <p>
              This project is currently under development. Check back later for
              more details!
            </p>
          </div>
        )}

        <Link
          href="/"
          className="inline-block mt-8 text-blue-400 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
