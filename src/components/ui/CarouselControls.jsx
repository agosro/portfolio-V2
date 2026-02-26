export function CarouselControls({ current, total, onPrev, onNext, onDotClick }) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onPrev}
        disabled={current === 0}
        className="w-10 h-10 rounded-full card-glass flex items-center justify-center hover:bg-periwinkle/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Anterior"
      >
        <svg className="w-4 h-4 stroke-ink" viewBox="0 0 24 24" fill="none" strokeWidth="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>

      {/* Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onDotClick(i)}
            aria-label={`Ir al proyecto ${i + 1}`}
            className={`rounded-full border-none transition-all duration-200 ${
              i === current
                ? 'w-4 h-2 bg-steel opacity-100'
                : 'w-2 h-2 bg-periwinkle opacity-50 hover:opacity-80'
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={current === total - 1}
        className="w-10 h-10 rounded-full card-glass flex items-center justify-center hover:bg-periwinkle/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Siguiente"
      >
        <svg className="w-4 h-4 stroke-ink" viewBox="0 0 24 24" fill="none" strokeWidth="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
    </div>
  )
}