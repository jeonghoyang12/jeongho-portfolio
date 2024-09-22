"use client"
import React from "react"
import Link from "next/link"
import { useParams } from "next/navigation"

interface Project {
  title: string;
  year?: number;
  description?: string;
  technologies?: string[];
  githubLink?: string;
  status: "completed" | "in-progress";
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
}

export default function ProjectDetail() {
  const params = useParams()
  const slug = params.slug as string
  const project = projects[slug]

  if (!project) {
    return <div className="bg-[#1d1d1d] text-gray-800 min-h-screen p-8">Project not found</div>
  }

  return (
    <div className="bg-[#1d1d1d] text-white font-mono min-h-screen p-8">
      <div className="max-w-[600px] mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        
        {project.status === "completed" ? (
          <>
            <p className="text-lg mb-4">{project.description ?? 'No description available'}</p>
            
            {project.year && <p className="mb-4"><strong>Year:</strong> {project.year}</p>}
            
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
                <ul className="list-disc list-inside">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.githubLink && (
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">GitHub</h2>
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
