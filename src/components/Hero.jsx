export default function Hero() {
  const scrollToMenu = () => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToReserve = () => document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80')",
          filter: 'brightness(0.3)',
        }}
      />
      {/* Radial overlay */}
      <div className="absolute inset-0 bg-radial-overlay" style={{ background: 'radial-gradient(ellipse at center, transparent 20%, rgba(10,7,5,0.75) 100%)' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="anim-hidden animate-fadeUp delay-200 block text-[0.75rem] tracking-[0.3em] uppercase text-[#C9A84C] mb-6 font-dm">
          Est. 2019 · Cairo, Egypt
        </span>

        <h1 className="anim-hidden animate-fadeUp delay-400 font-cormorant text-6xl md:text-8xl font-light leading-[1.05] mb-6">
          Where Every Dish<br />
          Tells a <em className="text-[#C9A84C] not-italic font-light italic">Story</em>
        </h1>

        <p className="anim-hidden animate-fadeUp delay-600 font-dm text-cream/70 text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed">
          A fine dining experience rooted in Mediterranean flavors, reimagined through a modern lens.
        </p>

        <div className="anim-hidden animate-fadeUp delay-800 flex gap-4 justify-center flex-wrap">
          <button
            onClick={scrollToMenu}
            className="bg-[#C9A84C] text-[#0A0705] px-10 py-4 text-[0.82rem] tracking-[0.15em] uppercase font-dm font-medium cursor-pointer border-none transition-all duration-300 hover:bg-[#F5EDD8]"
          >
            Explore Menu
          </button>
          <button
            onClick={scrollToAbout}
            className="bg-transparent border border-cream/40 text-cream px-10 py-4 text-[0.82rem] tracking-[0.15em] uppercase font-dm cursor-pointer transition-all duration-300 hover:border-cream"
          >
            Our Story
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent" />
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#8A7A60] font-dm">Scroll</span>
      </div>
    </section>
  )
}
