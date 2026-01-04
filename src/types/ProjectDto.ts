export interface ProjectDto {
  id: number
  title: string
  description: string
  githubUrl?: string
  liveUrl?: string
  isFeatured: boolean
  order: number

  // external stats
  stars?: number
  forks?: number
  language?: string
}
