import { SectionHeader } from '../ui/SectionHeader'
import { Code2, Bug, Zap, Shield } from 'lucide-react'

export function About() {
  const expertise = [
    {
      icon: Code2,
      title: 'Fullstack Development',
      description: 'Building end-to-end web applications with modern technologies. From React frontends to Node.js backends, creating seamless user experiences with clean, scalable code.',
    },
    {
      icon: Bug,
      title: 'QA Excellence',
      description: 'Comprehensive testing strategies with automated frameworks (Cypress, WebdriverIO) and meticulous manual testing. Ensuring quality at every layer of the application.',
    },
    {
      icon: Shield,
      title: 'AI & Automation',
      description: 'Integrating intelligent systems and automating workflows. Experience with LLMs, RAG pipelines, and intelligent automation for smart application features.',
    },
    {
      icon: Zap,
      title: 'Performance & Optimization',
      description: 'Delivering fast, responsive applications. Focused on optimization, efficient database queries, and smooth user interactions across all devices.',
    },
  ]

  return (
    <section id="about" className="w-full py-24">
      <div className="max-w-[1200px] mx-auto px-[5vw]">
      <SectionHeader
        label="Who I Am"
        title="About Me"
        subtitle="I'm Agostina Torres, a passionate fullstack developer with deep expertise in QA testing and AI integration. I build intelligent, well-tested digital products with attention to quality, performance, and user experience."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {expertise.map((item, idx) => (
          <div
            key={idx}
            className="card-glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="w-12 h-12 rounded-full bg-periwinkle/20 border border-periwinkle/40 flex items-center justify-center mb-4 flex-shrink-0">
              <item.icon className="w-6 h-6 text-periwinkle" />
            </div>
            <h3 className="text-base font-bold text-ink mb-3 tracking-tight">{item.title}</h3>
            <p className="text-soft text-sm font-light leading-relaxed flex-1">{item.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
