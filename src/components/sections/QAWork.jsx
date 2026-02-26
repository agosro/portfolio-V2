import { SectionHeader } from '../ui/SectionHeader'
import { ExternalLink, FlaskConical } from 'lucide-react'
// import { QACard } from '../ui/QACard'
// import { qaWork } from '../../data/qaWork'

export function QAWork() {
  return (
    <section id="qa" className="w-full py-24">
      <div className="max-w-[1200px] mx-auto px-[5vw]">
        <SectionHeader
          label="Quality Assurance"
          title="QA Work"
          subtitle="Game testing documentation, bug reports and test cases — all compiled in Notion."
        />

        <div className="flex justify-center mt-12">
          <a
            href="https://sky-fragrance-559.notion.site/eaba181499cc45f5b9aade56f9314627?v=5b368e52b34c4a52967e116ecf26b24c"
            target="_blank"
            rel="noopener noreferrer"
            className="card-glass rounded-2xl p-10 flex flex-col items-center gap-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 max-w-sm w-full group"
          >
            <div className="w-16 h-16 rounded-full bg-periwinkle/20 border border-periwinkle/40 flex items-center justify-center">
              <FlaskConical className="w-8 h-8 text-periwinkle" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-ink mb-2 tracking-tight">QA Game Testing Portfolio</h3>
              <p className="text-soft text-sm font-light leading-relaxed">
                Bug reports, test cases and documentation for game testing projects.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-steel group-hover:text-ink transition-colors">
              View on Notion
              <ExternalLink className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Cards individuales — comentadas para restaurar después
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {qaWork.map(q => <QACard key={q.id} {...q} />)}
        </div>
        */}
      </div>
    </section>
  )
}