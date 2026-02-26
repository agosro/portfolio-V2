export function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="text-center">
      <p className="text-sm font-bold tracking-[0.15em] uppercase text-steel mb-4">
        {label}
      </p>
      <h2 className="font-serif text-5xl lg:text-6xl text-ink tracking-tight leading-tight mb-4 font-bold">
        {title}
      </h2>
      {subtitle && (
        <p className="text-soft font-light text-lg leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}