import { useState, useRef, useEffect } from 'react'
import { SectionHeader } from '../ui/SectionHeader'
import { ProjectCard } from '../ui/ProjectCard'
import { CarouselControls } from '../ui/CarouselControls'
import { projects } from '../../data/projects'

export function Projects() {
  const [current, setCurrent] = useState(0)
  const [cardWidth, setCardWidth] = useState(432) // default lg
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragCurrent, setDragCurrent] = useState(0)
  const trackRef = useRef(null)
  const containerRef = useRef(null)
  const total = projects.length

  useEffect(() => {
    const calculateCardWidth = () => {
      if (!containerRef.current) return
      const width = window.innerWidth

      if (width < 768) {
        // Mobile: card = 90vw (calc(100vw - 10vw)) + gap-8
        setCardWidth(width * 0.9 + 32)
      } else if (width < 1024) {
        // md: w-80 = 320px + gap-8
        setCardWidth(320 + 32)
      } else {
        // lg: w-[400px] + gap-8
        setCardWidth(400 + 32)
      }
    }

    calculateCardWidth()
    window.addEventListener('resize', calculateCardWidth)
    return () => window.removeEventListener('resize', calculateCardWidth)
  }, [])

  const goTo = (index) => {
    setCurrent(Math.max(0, Math.min(index, total - 1)))
    setDragCurrent(0)
  }

  const handleDragStart = (e) => {
    setIsDragging(true)
    setDragStart(e.type === 'touchstart' ? e.touches[0].clientX : e.clientX)
    setDragCurrent(0)
  }

  const handleDragMove = (e) => {
    if (!isDragging) return
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX
    setDragCurrent(dragStart - clientX)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    const threshold = cardWidth * 0.2 // 20% del ancho de la tarjeta
    
    if (Math.abs(dragCurrent) > threshold) {
      if (dragCurrent > 0) {
        // Deslizar a la derecha, ir al siguiente
        goTo(current + 1)
      } else {
        // Deslizar a la izquierda, ir al anterior
        goTo(current - 1)
      }
    }
    setDragCurrent(0)
  }

  const transform = isDragging 
    ? `translateX(-${current * cardWidth + dragCurrent}px)` 
    : `translateX(-${current * cardWidth}px)`

  return (
    <section id="projects" className="w-full py-24">
      <div className="max-w-[1200px] mx-auto px-[5vw]">
        <SectionHeader
          label="Development"
          title="Projects"
          subtitle="Fullstack and AI-powered products I designed and built."
        />

        {/* Carrusel */}
        <div
          ref={containerRef}
          className="overflow-x-hidden mt-12 pb-4 cursor-grab active:cursor-grabbing"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div
            ref={trackRef}
            className={`flex gap-8 ${isDragging ? '' : 'transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'}`}
            style={{ transform }}
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