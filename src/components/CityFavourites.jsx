import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const backend = import.meta.env.VITE_BACKEND_URL || ''

export default function CityFavourites() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${backend}/api/menu`).then(r => r.json()).then(setItems).catch(() => setItems([]))
  }, [])

  return (
    <section className="bg-[#111111] py-16">
      <div className="px-6">
        <h3 className="text-3xl sm:text-5xl font-extrabold text-[#FFF9F3] mb-8">City Favourites</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} className="relative rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/10">
              <div className="relative aspect-video">
                <img src={it.image} alt={it.name} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-white">{it.name}</h4>
                  <div className="flex items-center gap-1 text-[#FFB347]">
                    <Star size={16} fill="#FFB347" color="#FFB347" />
                    <span className="text-sm">{it.rating.toFixed(1)}</span>
                  </div>
                </div>
                <p className="mt-1 text-sm text-white/70">{it.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-white font-semibold">${it.price.toFixed(2)}</span>
                  <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="h-5 opacity-70" />
                    <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="h-4 opacity-70" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
