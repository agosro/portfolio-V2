import wallpaper from '../../assets/images/wallpaper1.png'

export function Hero() {

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url('${wallpaper}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay gris */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      {/* Blobs de fondo */}
      <div className="absolute top-[10%] right-[-5%] w-80 h-80 rounded-full bg-sky/60 blur-[80px] animate-[drift_8s_ease-in-out_infinite_alternate] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[15%] w-60 h-60 rounded-full bg-lilac/50 blur-[70px] animate-[drift_10s_ease-in-out_infinite_alternate-reverse] pointer-events-none" />
      <div className="absolute top-[40%] left-[-8%] w-52 h-52 rounded-full bg-periwinkle/40 blur-[70px] animate-[drift_12s_ease-in-out_infinite_alternate] pointer-events-none" />

      {/* Contenedor de contenido - alineado a la derecha */}
      <div className="relative flex flex-col justify-center h-full min-h-screen px-[5vw] pt-28 pb-16 ml-[18%] max-w-[1200px]">

      {/* Pill disponible */}
      <div className="inline-flex items-center gap-2 w-fit mb-8 px-4 py-2 rounded-full border border-periwinkle bg-periwinkle/20 animate-[fadeUp_0.6s_ease_0.1s_forwards] opacity-0">
        <span className="w-1.5 h-1.5 rounded-full bg-steel" />
        <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-steel">
          Available for work
        </span>
      </div>

      {/* Nombre */}
      <h1 className="font-serif text-[clamp(3rem,7vw,6rem)] leading-[1] tracking-[-0.06em] text-ink mb-3 animate-[fadeUp_0.6s_ease_0.2s_forwards] opacity-0">
        Agostina <em className="italic text-periwinkle px-2 py-1 rounded-lg">Torres</em>
        </h1>

      {/* Rol */}
      <div className="h-10 mb-6 animate-[fadeUp_0.6s_ease_0.3s_forwards] opacity-0">
        <p className="text-[clamp(1rem,2vw,1.3rem)] font-light text-soft tracking-wide">
          Software Developer · QA Specialist · AI Engineer 
        </p>
      </div>

      {/* Descripción */}
      <p className="text-soft font-light text-base leading-relaxed max-w-md mb-10 animate-[fadeUp_0.6s_ease_0.4s_forwards] opacity-0">
        Building intelligent, well-tested digital products — from architecture to deployment, with quality at every layer.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3 mb-16 animate-[fadeUp_0.6s_ease_0.5s_forwards] opacity-0">
        <a
          href="#projects"
          className="bg-ink text-snow text-sm font-medium px-7 py-3 rounded-full hover:bg-steel transition-colors duration-200"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="border border-periwinkle text-ink text-sm font-medium px-7 py-3 rounded-full hover:bg-periwinkle/20 transition-colors duration-200"
        >
          Get in Touch
        </a>
      </div>

      {/* Scroll hint */}
      <div className="flex items-center gap-3 animate-[fadeUp_0.6s_ease_0.6s_forwards] opacity-0">
        <div className="w-10 h-px bg-gradient-to-r from-periwinkle to-transparent" />
        <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-soft">
          Scroll to explore
        </span>
      </div>
      </div>

      {/* Keyframes en el propio componente */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes drift {
          from { transform: translate(0, 0); }
          to   { transform: translate(20px, -20px); }
        }
      `}</style>
    </section>
  )
}