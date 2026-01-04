import { SkillDto } from './SkillDto'
import { ProjectDto } from './ProjectDto'
import { ExperienceDto } from './ExperienceDto'
import { EducationDto } from './EducationDto'

export interface ProfileDto {
  fullName: string
  title: string
  about: string

  skills: SkillDto[]
  projects: ProjectDto[]
  experiences: ExperienceDto[]
  educations: EducationDto[]
}
