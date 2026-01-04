'use client'

import { GraduationCap, Calendar } from 'lucide-react'
import { EducationDto } from '@/types/EducationDto'

type Props = {
  educations: EducationDto[]
}

type EducationItem = {
  title: string
  school: string
  location: string
  period: string
  details: string[]
}

export default function Education({ educations }: Props) {
  const data: EducationItem[] = educations.map(edu => ({
    title: `${edu.degree} — ${edu.field}`,
    school: edu.school,
    location: 'Turkey', // backend’e eklemeden UI korunuyor
    period: `${edu.startYear} – ${
      edu.endYear === null ? 'Present' : edu.endYear
    }`,
    details: [], // description backend’de yok → UI yapısı korunuyor
  }))

  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="mb-16 text-center text-5xl md:text-6xl font-light tracking-tight">
          Education
        </h2>

        {/* Timeline */}
        <div className="space-y-12">
          {data.map((edu, index) => (
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
                    {edu.title}
                  </h3>

                  <div className="mt-2 flex items-center text-sm text-muted md:mt-0">
                    <Calendar size={16} className="mr-2" />
                    {edu.period}
                  </div>
                </div>

                {/* School */}
                <div className="mb-4 flex items-center text-lg text-muted">
                  <GraduationCap size={18} className="mr-2" />
                  {edu.school} — {edu.location}
                </div>

                {/* Details (şu an boş ama UI bozulmuyor) */}
                {edu.details.length > 0 && (
                  <ul className="space-y-2">
                    {edu.details.map((item, i) => (
                      <li
                        key={i}
                        className="flex text-muted leading-relaxed"
                      >
                        <span className="mr-3 text-gray-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
