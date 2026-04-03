import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-[#0A0705]/95 backdrop-blur-md border-b border-[#C9A84C20]' : 'py-6 bg-gradient-to-b from-[#0A0705]/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="font-cormorant text-2xl font-light tracking-[0.15em] text-[#C9A84C] animate-fadeIn">
          SAFFRON
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 list-none">
          {['about', 'menu', 'gallery', 'reserve'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className="text-cream/80 text-[0.82rem] tracking-[0.12em] uppercase font-dm hover:text-[#C9A84C] transition-colors duration-300 bg-transparent border-none cursor-pointer"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo('reserve')}
          className="hidden md:block bg-transparent border border-[#C9A84C] text-[#C9A84C] px-6 py-2.5 text-[0.78rem] tracking-[0.1em] uppercase font-dm cursor-pointer transition-all duration-300 hover:bg-[#C9A84C] hover:text-[#0A0705]"
        >
          Reserve a Table
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden text-cream text-2xl bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1A1208] border-t border-[#C9A84C20] px-6 py-6 flex flex-col gap-4">
          {['about', 'menu', 'gallery', 'reserve'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-cream/80 text-sm tracking-[0.12em] uppercase font-dm text-left bg-transparent border-none cursor-pointer hover:text-[#C9A84C] transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
