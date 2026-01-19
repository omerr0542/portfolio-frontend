import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'

import { getProfile } from '@/services/api'
import { ProfileDto } from '@/types/ProfileDto'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ömer Faruk Yılmaz | Full Stack Developer',
  description:
    'Ömer Faruk Yılmaz personal portfolio: .NET, Next.js, SQL, DevExpress, EDI/ASN, and enterprise automation projects.',
  openGraph: {
    type: 'website',
    url: 'https://omerfarukyilmaz.com/',
    title: 'Ömer Faruk Yılmaz | Full Stack Developer',
    description:
      'Portfolio: .NET, Next.js, SQL, DevExpress, EDI/ASN, and enterprise automation projects.',
  },
}


export default async function HomePage() {
  let profile: ProfileDto | null = null

  try {
    profile = await getProfile()
  } catch (error) {
    console.error('Failed to fetch profile:', error)

    return (
      <>
        <Header />
        <main className="px-6 py-24 text-center text-red-600">
          Something went wrong. Please try again later.
        </main>
        <Footer />
      </>
    )
  }

  // 🔹 Loading fallback (çok kısa sürer ama boş ekran olmaz)
  if (!profile) {
    return (
      <>
        <Header />
        <main className="px-6 py-24 text-center text-muted">
          Loading...
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />

      <main>
        <Hero profile={profile} />
        <About about={profile.about} />
        <Experience experiences={profile.experiences} />
        <Education educations={profile.educations} />
        <Projects projects={profile.projects} />
        <Skills skills={profile.skills} />
      </main>

      <Footer />
    </>
  )
}
