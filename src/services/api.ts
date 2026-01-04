import { ProfileDto } from '@/types/ProfileDto'
import { ExperienceDto } from '@/types/ExperienceDto'
import { EducationDto } from '@/types/EducationDto'
import { ProjectDto } from '@/types/ProjectDto'
import { SkillDto } from '@/types/SkillDto'

export const isMock = false

// const API_URL = 'http://localhost:5009/api'
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProfile(): Promise<ProfileDto> {
  const res = await fetch(`${API_BASE_URL}/profile`)
  if (!res.ok) throw new Error('Profile fetch failed')
  return res.json()
}

// export async function getExperiences(): Promise<ExperienceDto[]> {
//   const res = await fetch(`${API_URL}/experience`)
//   if (!res.ok) {
//     throw new Error('Experience fetch failed')
//   }
//   return res.json()
// }

// export async function getEducation(): Promise<EducationDto[]> {
//   const res = await fetch(`${API_URL}/education`)
//   if (!res.ok) {
//     throw new Error('Education fetch failed')
//   }
//   return res.json()
// }

// export async function getProjects(): Promise<ProjectDto[]> {
//   const res = await fetch(`${API_URL}/projects`)
//   if (!res.ok) throw new Error('Projects fetch failed')
//   return res.json()
// }

// export async function getSkills(): Promise<SkillDto[]> {
//   const res = await fetch(`${API_URL}/skills`)
//   if (!res.ok) throw new Error('Skills fetch failed')
//   return res.json()
// }