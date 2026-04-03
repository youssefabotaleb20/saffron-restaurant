import { useState } from 'react'

export default function Reservation() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', date: '', time: '7:00 PM',
    guests: '2 People', phone: '', notes: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    // ── PHP API call (mock – replace URL with your actual PHP endpoint) ──
    try {
      const res = await fetch('/api/reserve.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      // If PHP endpoint doesn't exist yet, we simulate success after 1.2s
      if (!res.ok) throw new Error('no endpoint yet')
      await res.json()
    } catch {
      // Demo: simulate success
      await new Promise((r) => setTimeout(r, 1200))
    }

    setStatus('success')
  }

  const inputClass =
    'bg-white/[0.04] border border-[#C9A84C30] text-cream px-4 py-3 font-dm text-sm outline-none focus:border-[#C9A84C] transition-colors w-full'
  const labelClass = 'block text-[0.75rem] tracking-[0.15em] uppercase text-[#8A7A60] mb-1.5 font-dm'

  return (
    <section id="reserve" className="py-28 px-6 md:px-16 bg-[#0A0705]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Form */}
        <div>
          <span className="block text-[0.72rem] tracking-[0.3em] uppercase text-[#C9A84C] mb-4 font-dm">
            Book Your Evening
          </span>
          <h2 className="font-cormorant text-5xl font-light mb-4">Reserve<br />a Table</h2>
          <div className="w-14 h-px bg-[#C9A84C] mb-10" />

          {status === 'success' ? (
            <div className="border border-[#C9A84C40] bg-[#C9A84C10] p-6 text-[#C9A84C] font-dm text-sm leading-relaxed">
              ✓ Your reservation has been confirmed! We'll contact you shortly to finalise the details.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Ahmed" className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Hassan" className={inputClass} required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Date</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange} className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Time</label>
                  <select name="time" value={form.time} onChange={handleChange} className={inputClass + ' cursor-pointer'} style={{ background: 'rgba(255,255,255,0.04)' }}>
                    {['7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM'].map(t => (
                      <option key={t} style={{ background: '#1A1208' }}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Guests</label>
                  <select name="guests" value={form.guests} onChange={handleChange} className={inputClass + ' cursor-pointer'} style={{ background: 'rgba(255,255,255,0.04)' }}>
                    {['1 Person','2 People','3-4 People','5-6 People','7+ People'].map(g => (
                      <option key={g} style={{ background: '#1A1208' }}>{g}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+20 10 0000 0000" className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Special Requests</label>
                <input name="notes" value={form.notes} onChange={handleChange} placeholder="Dietary requirements, anniversaries..." className={inputClass} />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-[#C9A84C] text-[#0A0705] py-4 text-[0.82rem] tracking-[0.15em] uppercase font-dm font-medium border-none cursor-pointer hover:bg-[#F5EDD8] transition-all duration-300 disabled:opacity-60 mt-2"
              >
                {status === 'loading' ? 'Confirming...' : 'Confirm Reservation'}
              </button>
            </form>
          )}
        </div>

        {/* Info */}
        <div>
          <h3 className="font-cormorant text-3xl font-light mb-6">Planning Your Visit</h3>
          <p className="text-[#8A7A60] leading-relaxed text-sm mb-8 font-dm">
            We welcome guests for dinner service Tuesday through Sunday. Reservations are recommended,
            especially on weekends.
          </p>

          {[
            { icon: '◎', text: '15 Nile Corniche, Zamalek, Cairo\n11211, Egypt' },
            { icon: '◎', text: '+20 2 2736 4400' },
            { icon: '◎', text: 'reservations@saffronrestaurant.com' },
            { icon: '◎', text: 'Tue–Sun: 6:00 PM – 11:30 PM\nClosed Mondays' },
          ].map((c, i) => (
            <div key={i} className="flex gap-4 mb-5">
              <span className="text-[#C9A84C] mt-0.5">{c.icon}</span>
              <span className="text-cream/70 text-sm leading-relaxed font-dm whitespace-pre-line">{c.text}</span>
            </div>
          ))}

          <div className="mt-8 border border-[#C9A84C20] p-6">
            <img
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=700&q=80"
              alt="Restaurant interior"
              className="w-full h-44 object-cover mb-4 brightness-75"
            />
            <p className="text-[0.82rem] text-[#8A7A60] leading-relaxed italic font-dm">
              "An extraordinary evening every time. The attention to detail is unlike anything in Cairo."
              <br /><span className="not-italic text-cream/50 text-[0.75rem]">— Condé Nast Traveler</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
