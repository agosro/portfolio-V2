import { useState, useRef } from 'react'
import { SectionHeader } from '../ui/SectionHeader'
import { ProjectCard } from '../ui/ProjectCard'
import { CarouselControls } from '../ui/CarouselControls'
import { projects } from '../../data/projects'

export function Projects() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef(null)
  const total = projects.length

  const cardWidth = 400 + 32 // w-[400px] + gap-8

  const goTo = (index) => setCurrent(Math.max(0, Math.min(index, total - 1)))

  return (
    <section id="projects" className="w-full py-24">
      <div className="max-w-[1200px] mx-auto px-[5vw]">
      <SectionHeader
        label="Development"
        title="Projects"
        subtitle="Fullstack and AI-powered products I designed and built."
      />

      <div className="[overflow-x:clip] mt-12 pb-4">
        <div
          ref={trackRef}
          className="flex gap-8 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ transform: `translateX(-${current * cardWidth}px)` }}
        >
          {projects.map(p => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>

      {/* Controles abajo */}
      <div className="flex items-center justify-center mt-8">
        <CarouselControls
          current={current}
          total={total}
          onPrev={() => goTo(current - 1)}
          onNext={() => goTo(current + 1)}
          onDotClick={goTo}
        />
      </div>
      </div>
    </section>
  )
}