export interface ExperienceDto {
  id: number
  company: string
  role: string
  description: string
  startYear: number
  endYear: number | null
  isCurrent: boolean
}
