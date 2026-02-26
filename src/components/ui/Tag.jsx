const variants = {
  default: 'bg-periwinkle/20 border-periwinkle/50 text-steel',
  ai:      'bg-lilac/25 border-lilac/60 text-purple-500',
}

export function Tag({ label, variant = 'default' }) {
  return (
    <span className={`text-[11px] font-medium px-3 py-1 rounded-full border ${variants[variant]}`}>
      {label}
    </span>
  )
}