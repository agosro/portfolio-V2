import { Linkedin, Github, Mail } from 'lucide-react'

const links = [
  { label: 'Stack',    href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'QA',       href: '#qa' },
  { label: 'Contact',  href: '#contact' },
]

const socials = [
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/agosro/' },
  { label: 'GitHub',   icon: Github, href: 'https://github.com/agosro' },
  { label: 'Email',    icon: Mail,  href: 'mailto:agosrotorres@gmail.com' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-periwinkle/30 mt-0">
      <div className="max-w-[1200px] mx-auto px-[5vw] py-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-10">

          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-serif text-2xl text-ink tracking-tight mb-2">Agostina Torres</p>
            <p className="text-soft text-sm font-light leading-relaxed">
              Fullstack Developer · QA Specialist · AI Engineer 
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-soft mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2 list-none">
              {links.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-soft hover:text-ink transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-soft mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label !== 'Email' ? '_blank' : undefined}
                  rel={s.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-soft hover:text-ink transition-colors duration-200"
                >
                  <span className="w-8 h-8 card-glass rounded-lg flex items-center justify-center text-steel flex-shrink-0">
                    <s.icon className="w-4 h-4" />
                  </span>
                  <span className="text-sm">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-soft mb-1">
              Ready to build?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-ink text-snow text-xs font-medium px-6 py-3 rounded-full hover:bg-steel transition-colors duration-200 w-fit"
            >
              Hire me
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-periwinkle/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-soft/70">
            © {year} <span className="font-serif italic">Agostina Torres</span>. All rights reserved.
          </p>
          <p className="text-[11px] text-soft/50">
            Designed & built with care
          </p>
        </div>

      </div>
    </footer>
  )
}