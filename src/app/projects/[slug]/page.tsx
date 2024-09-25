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
      "A blog powered by Notion API. Utilized Notion API and integrated with Next.js.",
    technologies: ["Next.js", "Notion API"],
    githubLink: "https://github.com/jeonghoyang12/my-blog",
    status: "completed",
    snapshots: ["/images/blog-snapshot.png"],
    role: "Full Stack Developer",
    timeline: "Jan 2024 - Mar 2024",
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
    <div className="bg-[#1d1d1d] text-white min-h-screen p-8">
      <div className="max-w-[600px] mx-auto">
        <h1 className="text-3xl font-bold mb-6">{project.title}</h1>

        {project.status === "completed" ? (
          <>
            <div className="mb-8 space-y-4">
              {project.role && (
                <p className="text-lg">
                  <span className="font-semibold">Role:</span> {project.role}
                </p>
              )}
              {project.timeline && (
                <p className="text-lg">
                  <span className="font-semibold">Timeline:</span>{" "}
                  {project.timeline}
                </p>
              )}
            </div>

            {project.description && (
              <div className="mb-8 text-lg leading-relaxed">
                {" "}
                <p>{project.description}</p>
              </div>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.snapshots && project.snapshots.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  Project Snapshots
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {" "}
                  {project.snapshots.map((snapshot, index) => (
                    <div key={index} className="relative h-[400px]">
                      {" "}
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
            )}

            {project.githubLink && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">
                  GitHub Repository
                </h2>
                <Link
                  href={project.githubLink}
                  className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                >
                  View on GitHub
                </Link>
              </div>
            )}
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
