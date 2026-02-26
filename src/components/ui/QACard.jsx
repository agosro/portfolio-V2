const dotColors = {
  bug:     'bg-pink-200',
  auto:    'bg-green-200',
  perf:    'bg-amber-200',
  default: 'bg-periwinkle',
}

export function QACard({ type, dot = 'default', title, description, notionUrl }) {
  return (
    <a
      href={notionUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="card-glass rounded-2xl p-6 block relative hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
    >
      <span className="absolute top-5 right-5 text-[10px] font-medium tracking-wide text-soft bg-black/10 rounded px-1.5 py-0.5">
        Notion ↗
      </span>
      <div className="flex items-center gap-2 mb-2">
        <span className={`w-2 h-2 rounded-full ${dotColors[dot]}`} />
        <p className="text-sm font-bold tracking-[0.1em] uppercase text-steel">{type}</p>
      </div>
      <h3 className="font-serif text-lg text-ink mb-2 tracking-tight font-bold">{title}</h3>
      <p className="text-soft text-sm font-light leading-relaxed">{description}</p>
    </a>
  )
}