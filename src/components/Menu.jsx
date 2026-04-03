import { useState } from 'react'

const menuData = {
  starters: [
    {
      name: 'Saffron Bruschetta',
      desc: 'Toasted sourdough with heirloom tomatoes, burrata & aged balsamic reduction',
      price: 'EGP 185',
      img: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80',
    },
    {
      name: 'Bisque du Jour',
      desc: 'Roasted lobster bisque with cream, cognac & hand-crafted croutons',
      price: 'EGP 220',
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
    },
    {
      name: 'Heritage Salad',
      desc: 'Wild arugula, roasted figs, candied walnuts, pomegranate vinaigrette',
      price: 'EGP 160',
      img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80',
    },
  ],
  mains: [
    {
      name: 'Wagyu Tenderloin',
      desc: 'A5 Wagyu, truffle butter, seasonal vegetables, red wine jus',
      price: 'EGP 890',
      img: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80',
    },
    {
      name: 'Sea Bass Royale',
      desc: 'Pan-seared sea bass, saffron risotto, lemon beurre blanc, capers',
      price: 'EGP 540',
      img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80',
    },
    {
      name: 'Garden Harvest',
      desc: "Roasted seasonal vegetables, quinoa tabbouleh, za'atar tahini",
      price: 'EGP 320',
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    },
  ],
  desserts: [
    {
      name: 'Lemon Tart',
      desc: 'Citrus curd, Swiss meringue, pistachio shortbread crust',
      price: 'EGP 145',
      img: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&q=80',
    },
    {
      name: 'Dark Chocolate Dome',
      desc: 'Valrhona 72%, salted caramel core, gold leaf garnish',
      price: 'EGP 175',
      img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80',
    },
    {
      name: 'Rose Panna Cotta',
      desc: 'Rosewater vanilla cream, strawberry coulis, edible flowers',
      price: 'EGP 130',
      img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80',
    },
  ],
}

const tabs = ['starters', 'mains', 'desserts']

export default function Menu() {
  const [active, setActive] = useState('starters')

  return (
    <section id="menu" className="py-28 px-6 md:px-16 bg-[#1A1208]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="block text-[0.72rem] tracking-[0.3em] uppercase text-[#C9A84C] mb-3 font-dm">
            Curated Selection
          </span>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light">Our Signature Menu</h2>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#C9A84C30] mt-10 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative px-8 py-4 text-[0.82rem] tracking-[0.12em] uppercase font-dm bg-transparent border-none cursor-pointer transition-colors duration-300 capitalize ${
                active === tab ? 'text-[#C9A84C]' : 'text-[#8A7A60] hover:text-cream'
              }`}
            >
              {tab}
              {active === tab && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-px bg-[#C9A84C]" />
              )}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData[active].map((item) => (
            <div
              key={item.name}
              className="border border-[#C9A84C20] hover:border-[#C9A84C60] transition-all duration-300 group"
            >
              <div className="img-zoom overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cormorant text-xl font-normal mb-2">{item.name}</h3>
                <p className="text-[#8A7A60] text-[0.82rem] leading-relaxed mb-4">{item.desc}</p>
                <span className="font-cormorant text-xl text-[#C9A84C]">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
