'use client'

import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-light tracking-tight">
              Ömer Faruk Yılmaz
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Software Developer
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-200 hover:-translate-y-1 hover:text-white"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-200 hover:-translate-y-1 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="mailto:example@mail.com"
              className="text-gray-400 transition-all duration-200 hover:-translate-y-1 hover:text-white"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800" />

        {/* Bottom */}
        <p className="flex items-center justify-center gap-2 text-sm text-gray-400">
          © {year} Ömer Faruk Yılmaz. Built with
          <Heart size={14} className="text-red-500" />
          using Next.js & .NET
        </p>
      </div>
    </footer>
  )
}
