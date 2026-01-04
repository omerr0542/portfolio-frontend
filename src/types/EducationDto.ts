export interface EducationDto {
  id: number
  school: string
  degree: string
  field: string
  location: string
  startYear: number
  endYear: number | null
  isCurrent: boolean
  description: string
}
