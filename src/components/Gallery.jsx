const images = [
  { src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80', alt: 'Restaurant interior', class: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80', alt: 'Chef at work', class: '' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Fine dining plate', class: '' },
  { src: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&q=80', alt: 'Dessert', class: '' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80', alt: 'Wine selection', class: '' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 px-6 md:px-16 bg-[#0A0705]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="block text-[0.72rem] tracking-[0.3em] uppercase text-[#C9A84C] mb-3 font-dm">
            Visual Journey
          </span>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light">Our Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`img-zoom overflow-hidden ${img.class}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover brightness-90 hover:brightness-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
