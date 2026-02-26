import { useState, useEffect } from 'react'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Stack',    href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'QA',       href: '#qa' },
  { label: 'Contact',  href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-[5vw] transition-all duration-300 ${
      scrolled ? 'py-3 bg-snow/80 backdrop-blur-xl shadow-md' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="font-serif text-xl text-ink/70 tracking-tight hover:text-steel transition-colors">
          Agostina
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-medium tracking-[0.08em] uppercase text-soft hover:text-ink transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-ink text-snow text-xs font-medium px-5 py-2.5 rounded-full hover:bg-steel transition-colors duration-200"
        >
          Hire me
        </a>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 card-glass rounded-xl flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-4 h-px bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`block w-4 h-px bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-4 h-px bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64 mt-4' : 'max-h-0'}`}>
        <ul className="card-glass rounded-2xl p-4 flex flex-col gap-1 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-soft hover:text-ink px-3 py-2.5 rounded-xl hover:bg-periwinkle/20 transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2 pt-2 border-t border-periwinkle/30">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center text-xs font-medium bg-ink text-snow py-2.5 rounded-xl hover:bg-steel transition-colors"
            >
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}