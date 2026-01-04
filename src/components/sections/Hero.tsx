'use client'

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { ProfileDto } from '@/types/ProfileDto'

type Props = {
  profile: ProfileDto
}

export default function Hero({ profile }: Props) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const y = el.getBoundingClientRect().top + window.pageYOffset - 96
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="mx-auto max-w-5xl text-center">
        {/* Animated circles */}
        <div className="mb-12 flex justify-center">
          <div className="relative h-32 w-32">
            <div className="absolute inset-0 rounded-full border border-gray-200 opacity-70 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-gray-300 opacity-60 animate-spin-reverse" />
            <div className="absolute inset-8 rounded-full border border-gray-400 opacity-50 animate-spin-fast" />
          </div>
        </div>

        {/* Name */}
        <h1 className="mb-6 text-6xl md:text-7xl font-light tracking-tight leading-tight">
          {profile.fullName.split(' ').slice(0, -1).join(' ')}
          <br />
          {profile.fullName.split(' ').slice(-1)}
        </h1>

        {/* Title */}
        <p className="mb-4 text-xl md:text-2xl text-muted font-light">
          {profile.title}
        </p>

        {/* Subtitle (about’tan türetiliyor) */}
        <p className="mx-auto mb-12 max-w-2xl text-base md:text-lg text-soft font-light leading-relaxed">
          {profile.about}
        </p>

        {/* CTA buttons */}
        <div className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm tracking-wide transition hover:bg-gray-800 hover:scale-105 rounded-lg"
          >
            View My Work
            <ArrowRight size={16} />
          </button>

          <button
            onClick={() => scrollTo('about')}
            className="inline-flex items-center gap-2 border border-black px-8 py-4 text-sm tracking-wide transition hover:bg-black hover:text-white rounded-lg"
          >
            About Me
          </button>
        </div>

        {/* Social icons (şimdilik statik) */}
        <div className="flex items-center justify-center gap-6">
          <Github size={22} className="text-gray-400" />
          <Linkedin size={22} className="text-gray-400" />
          <Mail size={22} className="text-gray-400" />
        </div>
      </div>
    </section>
  )
}
