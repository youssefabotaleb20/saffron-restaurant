export default function Footer() {
  const columns = [
    { title: 'Explore', links: ['Menu', 'Wine List', 'Events', 'Gallery'] },
    { title: 'Visit',   links: ['Directions', 'Reservations', 'Private Dining', 'Gift Cards'] },
    { title: 'Connect', links: ['Instagram', 'Facebook', 'TripAdvisor', 'Contact Us'] },
  ]

  return (
    <footer className="bg-[#1A1208] border-t border-[#C9A84C20] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="font-cormorant text-3xl font-light text-[#C9A84C] mb-4">SAFFRON</div>
          <p className="text-[#8A7A60] text-sm leading-relaxed font-dm">
            A fine dining destination in the heart of Zamalek, where Mediterranean tradition meets contemporary artistry.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-[0.72rem] tracking-[0.2em] uppercase text-[#C9A84C] mb-5 font-dm">{col.title}</h4>
            <ul className="list-none flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#8A7A60] text-sm font-dm hover:text-cream transition-colors no-underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#C9A84C15] flex flex-col md:flex-row justify-between items-center gap-3">
        <span className="text-[#8A7A60] text-[0.78rem] font-dm">© 2025 Saffron Restaurant. All rights reserved.</span>
        <span className="text-[#8A7A60] text-[0.78rem] font-dm">Privacy Policy · Terms</span>
      </div>
    </footer>
  )
}
