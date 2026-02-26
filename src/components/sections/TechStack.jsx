import { SectionHeader } from '../ui/SectionHeader'
import { stack } from '../../data/stack'
import * as Icons from 'lucide-react'

export function TechStack() {
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName]
    return IconComponent ? <IconComponent className="w-5 h-5 text-periwinkle" /> : null
  }

  return (
    <section id="stack" className="w-full py-24">
      <div className="max-w-[1200px] mx-auto px-[5vw]">
      <SectionHeader label="Expertise" title="Tech Stack" subtitle="Tools and technologies I use across the full development lifecycle." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {stack.map(s => (
          <div
            key={s.category}
            className="card-glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-periwinkle/20 border border-periwinkle/40 flex items-center justify-center flex-shrink-0">
                {getIcon(s.icon)}
              </div>
              <h3 className="text-base font-bold text-ink">{s.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {s.items.map(item => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-ink/5 text-steel border border-periwinkle/25 hover:bg-periwinkle/15 transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}