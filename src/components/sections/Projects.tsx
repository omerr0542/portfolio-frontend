'use client'

import { Github, ExternalLink, Star, GitFork } from 'lucide-react'
import { ProjectDto } from '@/types/ProjectDto'

type Props = {
  projects: ProjectDto[]
}

export default function Projects({ projects }: Props) {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="mb-16 text-center text-5xl md:text-6xl font-light tracking-tight">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <div
              key={project.id}
              className="group border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-black hover:shadow-xl hover:-translate-y-1 rounded-2xl flex flex-col h-full"
            >
              {/* Header */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center bg-gray-100 transition group-hover:bg-black">
                  <Github
                    size={20}
                    className="text-black transition group-hover:text-white"
                  />
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition hover:text-black"
                    aria-label="Project link"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="mb-2 text-xl font-light tracking-tight">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between text-sm text-muted">
                <div className="flex items-center gap-4">
                  {typeof project.stars === 'number' && (
                    <div className="flex items-center gap-1">
                      <Star size={14} />
                      {project.stars}
                    </div>
                  )}

                  {typeof project.forks === 'number' && (
                    <div className="flex items-center gap-1">
                      <GitFork size={14} />
                      {project.forks}
                    </div>
                  )}
                </div>

                {project.language && (
                  <span className="rounded bg-gray-100 px-2 py-1 text-xs">
                    {project.language}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-muted transition hover:text-black"
          >
            View all projects on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
