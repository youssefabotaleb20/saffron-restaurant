export default function About() {
  const stats = [
    { num: '12+', label: 'Years of Excellence' },
    { num: '40+', label: 'Seasonal Dishes' },
    { num: '3',   label: 'Michelin Stars' },
    { num: '98%', label: 'Guest Satisfaction' },
  ]

  return (
    <section id="about" className="py-28 px-6 md:px-16 bg-[#0A0705]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Text */}
        <div className="anim-hidden animate-slideRight">
          <span className="block text-[0.72rem] tracking-[0.3em] uppercase text-[#C9A84C] mb-4 font-dm">
            Our Philosophy
          </span>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light leading-[1.2] mb-6">
            Crafted with<br />
            <em className="text-[#C9A84C] italic">Intention</em>
          </h2>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="text-cream/65 leading-[1.9] mb-5 font-dm font-light">
            At Saffron, we believe that great food is the product of great relationships — with our
            farmers, our community, and the traditions that shape our culinary heritage.
          </p>
          <p className="text-cream/65 leading-[1.9] font-dm font-light">
            Our chef brings 20 years of Michelin-starred experience to each plate, creating dishes
            that honor the past while boldly exploring what's possible.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 mt-10 pt-10 border-t border-[#C9A84C30]">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="font-cormorant text-4xl font-light text-[#C9A84C] block">{s.num}</span>
                <span className="text-[0.78rem] tracking-[0.15em] uppercase text-[#8A7A60] mt-1 block font-dm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="anim-hidden animate-slideLeft relative">
          <div className="img-zoom">
            <img
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80"
              alt="Chef preparing dish"
              className="w-full h-[500px] object-cover brightness-90"
            />
          </div>
          {/* Decorative border accent */}
          <div className="absolute -bottom-8 -left-8 w-2/3 h-48 border border-[#C9A84C40] pointer-events-none hidden md:block" />
        </div>
      </div>
    </section>
  )
}
