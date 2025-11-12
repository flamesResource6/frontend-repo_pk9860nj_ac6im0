import Hero from './components/Hero'
import Showcase from './components/Showcase'
import OurStory from './components/OurStory'
import CityFavourites from './components/CityFavourites'
import Configurator from './components/Configurator'
import Location from './components/Location'
import SocialWall from './components/SocialWall'
import Reviews from './components/Reviews'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#111111]">
      <Hero />
      <Showcase />
      <OurStory />
      <CityFavourites />
      <Configurator />
      <Location />
      <SocialWall />
      <Reviews />
      <footer className="bg-[#0b0b0b] border-t border-white/10 py-12">
        <div className="px-6 flex flex-col items-center text-center">
          <div className="text-3xl font-extrabold" style={{ color: '#FFB347' }}>Flame & Wrap Co.</div>
          <nav className="mt-4 flex items-center gap-6 text-sm text-[#FFF9F3]/70">
            <a href="#" className="hover:text-white">Menu</a>
            <a href="#build" className="hover:text-white">Order Online</a>
            <a href="#location" className="hover:text-white">Contact</a>
          </nav>
          <div className="mt-6 text-[#FFB347]/80">© 2025 Flame & Wrap Co. | Crafted with love and garlic.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
