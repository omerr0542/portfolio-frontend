'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

type NavItem = {
  id: string
  label: string
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Active section */
  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY + 120

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id)
        if (!el) continue

        if (offset >= el.offsetTop && offset < el.offsetTop + el.offsetHeight) {
          setActiveSection(item.id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const y = el.getBoundingClientRect().top + window.pageYOffset - 96
    window.scrollTo({ top: y, behavior: 'smooth' })
    setIsMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <button
            onClick={() => scrollTo('home')}
            className="text-xl font-light tracking-tight hover:opacity-70 transition"
          >
            Ömer Faruk Yılmaz
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${
                  activeSection === item.id
                    ? 'text-black font-medium'
                    : 'text-muted hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileOpen(v => !v)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left text-sm tracking-wide transition ${
                  activeSection === item.id
                    ? 'text-black font-medium'
                    : 'text-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
