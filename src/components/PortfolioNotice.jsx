import { useState, useEffect } from 'react'

export default function PortfolioNotice() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Small delay so the modal feels intentional, not jarring
    const t = setTimeout(() => setVisible(true), 600)
    return () => clearTimeout(t)
  }, [])

  if (dismissed) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setDismissed(true)}
      />

      {/* Modal */}
      <div
        className={`fixed z-[101] inset-0 flex items-center justify-center p-6 transition-all duration-500 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="relative bg-[#0F0C07] border border-[#C9A84C40] max-w-lg w-full p-10 shadow-2xl">
          {/* Gold top bar */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

          {/* Label */}
          <span className="block text-[0.68rem] tracking-[0.35em] uppercase text-[#C9A84C] mb-5 font-dm">
            Portfolio Project
          </span>

          {/* Heading */}
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-[#F5EDD8] leading-snug mb-5">
            A Showcase of<br />
            <em className="text-[#C9A84C] not-italic font-light italic">Craft & Design</em>
          </h2>

          {/* Body */}
          <p className="text-[#8A7A60] text-sm leading-relaxed font-dm mb-3">
            Welcome to Saffron — a concept restaurant website created to demonstrate my skills in
            UI/UX design, front-end development, and attention to detail.
          </p>
          <p className="text-[#8A7A60] text-sm leading-relaxed font-dm mb-8">
            This is <span className="text-[#F5EDD8]/70">not a real business</span>. Reservation
            submissions, contact details, and menu items are purely illustrative. All imagery is
            sourced from Unsplash for demonstration purposes only.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setDismissed(true)}
              className="flex-1 bg-[#C9A84C] text-[#0A0705] py-3.5 text-[0.78rem] tracking-[0.15em] uppercase font-dm font-medium border-none cursor-pointer hover:bg-[#F5EDD8] transition-all duration-300"
            >
              Explore the Demo
            </button>
            <a
              href="https://linktr.ee/YoussefAbotaleb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-transparent border border-[#C9A84C50] text-[#C9A84C] py-3.5 text-[0.78rem] tracking-[0.15em] uppercase font-dm no-underline hover:border-[#C9A84C] hover:bg-[#C9A84C10] transition-all duration-300"
            >
              View My Portfolio
            </a>
          </div>

          {/* Divider + credit */}
          <div className="mt-8 pt-6 border-t border-[#C9A84C15]">
            <p className="text-[0.7rem] text-[#8A7A60]/60 font-dm tracking-wide text-center">
              Designed & developed by{' '}
              <a
                href="https://linktr.ee/YoussefAbotaleb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors no-underline"
              >
                Youssef Abotaleb
              </a>
            </p>
          </div>

          {/* Gold bottom bar */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
        </div>
      </div>
    </>
  )
}
