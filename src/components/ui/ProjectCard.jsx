import { Tag } from './Tag'

export function ProjectCard({ title, description, tags, image, github, live }) {
  return (
    <div className="card-glass rounded-3xl overflow-hidden flex flex-col flex-shrink-0 w-80 lg:w-[400px] group hover:-translate-y-1 transition-all duration-300">

      {/* Imagen */}
      <div className="aspect-video bg-gradient-to-br from-sky/50 via-lilac/40 to-periwinkle/30 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-steel/40">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
            <span className="text-[10px] tracking-widest uppercase">Add screenshot</span>
          </div>
        )}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-sky via-periwinkle to-lilac opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl text-ink tracking-tight mb-2">{title}</h3>
        <p className="text-soft text-sm font-light leading-relaxed mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.map(t => <Tag key={t.label} label={t.label} variant={t.variant} />)}
        </div>
        <div className="flex items-center gap-4">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-steel text-xs font-medium inline-flex items-center gap-1.5 hover:text-ink transition-colors">
              GitHub
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="text-periwinkle text-xs font-medium inline-flex items-center gap-1.5 hover:text-ink transition-colors">
              Live Demo
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}