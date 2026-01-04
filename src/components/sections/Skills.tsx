'use client'

import { SkillDto } from '@/types/SkillDto'

type Props = {
  skills: SkillDto[]
}

type SkillCategory = {
  title: string
  skills: string[]
}

export default function Skills({ skills }: Props) {
  // 🔹 Backend → UI shape mapping (aynı mantık, sadece fetch yok)
  const grouped = skills.reduce<Record<string, string[]>>(
    (acc, skill) => {
      acc[skill.category] = acc[skill.category] || []
      acc[skill.category].push(skill.name)
      return acc
    },
    {}
  )

  const SKILLS: SkillCategory[] = Object.entries(grouped).map(
    ([title, skills]) => ({
      title,
      skills,
    })
  )

  return (
    <section id="skills" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="mb-16 text-center text-5xl md:text-6xl font-light tracking-tight">
          Skills
        </h2>

        {/* Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {SKILLS.map((category, index) => (
            <div key={index}>
              <h3 className="mb-6 text-2xl font-light tracking-tight">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm tracking-wide transition-all hover:border-black hover:shadow-md hover:-translate-y-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
