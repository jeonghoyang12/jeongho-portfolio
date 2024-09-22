"use client"
import React from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import Image from "next/image"

interface Project {
  title: string;
  year?: number;
  description?: string;
  technologies?: string[];
  githubLink?: string;
  status: "completed" | "in-progress";
  snapshots?: string[];  // Add this new property
}

const projects: Record<string, Project> = {
  goznuk: {
    title: "Goznuk",
    status: "in-progress",
  },
  harumada: {
    title: "Harumada",
    status: "in-progress",
  },
  blog: {
    title: "Blog",
    description: "A blog powered by Notion API. Utilized Notion API and integrated with Next.js.",
    year: 2024,
    technologies: ["Next.js", "Notion API"],
    githubLink: "https://github.com/jeonghoyang12/my-blog",
    status: "completed",
    snapshots: ["/images/blog-snapshot.png"],
  }
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
            <p>The project you&apos;re looking for doesn&apos;t exist or may have been moved.</p>
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
        <h1 className="font-bold mb-4">{project.title}</h1>
        
        {project.status === "completed" ? (
          <>
            <p className="mb-4">{project.description ?? 'No description available'}</p>
            
            {project.year && <p className="mb-4"><strong>Year:</strong> {project.year}</p>}
            
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-4">
                <h2 className="font-semibold mb-2">Technologies</h2>
                <ul className="list-disc list-inside">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.snapshots && project.snapshots.length > 0 && (
              <div className="mb-4">
                <h2 className="font-semibold mb-2">Project Snapshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.snapshots.map((snapshot, index) => (
                    <div key={index} className="relative h-48">
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
              <div className="mb-4">
                <h2 className="font-semibold mb-2">GitHub</h2>
                <Link href={project.githubLink} className="text-blue-600 hover:underline">
                  View on GitHub
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
            <p className="font-bold">Work in Progress</p>
            <p>This project is currently under development. Check back later for more details!</p>
          </div>
        )}
        
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
