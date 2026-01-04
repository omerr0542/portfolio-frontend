'use client'

import { Briefcase, Calendar } from 'lucide-react'
import { ExperienceDto } from '@/types/ExperienceDto'

type Props = {
  experiences: ExperienceDto[]
}

type ExperienceItem = {
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
}

export default function Experience({ experiences }: Props) {
  const data: ExperienceItem[] = experiences.map(exp => ({
    title: exp.role,
    company: exp.company,
    location: 'Turkey', // backend’e eklemeden UI korunuyor
    period: `${exp.startYear} – ${
      exp.endYear === null ? 'Present' : exp.endYear
    }`,
    responsibilities: exp.description
      .split('\r\n')
      .map(s => s.trim())
      .filter(Boolean),
  }))

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="mb-16 text-center text-5xl md:text-6xl font-light tracking-tight">
          Experience
        </h2>

        {/* Timeline */}
        <div className="space-y-12">
          {data.map((exp, index) => (
            <div
              key={index}
              className="group relative pl-8 border-l border-gray-200"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-gray-300 bg-white group-hover:border-black group-hover:bg-black" />

              <div className="pb-8">
                {/* Header */}
                <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-2xl font-light tracking-tight">
                    {exp.title}
                  </h3>

                  <div className="mt-2 flex items-center text-sm text-muted md:mt-0">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                </div>

                {/* Company */}
                <div className="mb-4 flex items-center text-lg text-muted">
                  <Briefcase size={18} className="mr-2" />
                  {exp.company} — {exp.location}
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex text-muted leading-relaxed"
                    >
                      <span className="mr-3 text-gray-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
