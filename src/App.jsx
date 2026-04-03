import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Reservation from './components/Reservation'
import Footer from './components/Footer'
import PortfolioNotice from './components/PortfolioNotice'

export default function App() {
  return (
    <div className="bg-[#0A0705] text-cream min-h-screen">
      <PortfolioNotice />
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reservation />
      <Footer />
    </div>
  )
}
