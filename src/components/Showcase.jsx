import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

const cards = [
  {
    title: 'Skewered Meats',
    media: 'https://cdn.coverr.co/videos/coverr-grilling-meat-2869/1080p.mp4',
    cta: 'Add to Order',
  },
  {
    title: 'City Wraps',
    media: 'https://cdn.coverr.co/videos/coverr-preparing-wraps-3563/1080p.mp4',
    cta: 'See Ingredients',
  },
  {
    title: 'Loaded Fries',
    media: 'https://cdn.coverr.co/videos/coverr-close-up-of-french-fries-1550/1080p.mp4',
    cta: 'Add to Order',
  },
]

function Card({ item, mouseX, mouseY }) {
  const rotateX = useTransform(mouseY, [0, 1], [10, -10])
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10])
  const glow = useTransform(mouseX, [0, 1], [0.25, 0.6])

  return (
    <motion.div
      className="relative shrink-0 w-[80vw] sm:w-[50vw] md:w-[38vw] lg:w-[28vw] aspect-[4/5] rounded-3xl overflow-hidden bg-[#0f0f0f] border border-white/10 mr-6"
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <video src={item.media} className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 p-5">
        <h3 className="text-2xl font-bold text-white drop-shadow">{item.title}</h3>
        <button
          className="mt-3 px-4 py-2 rounded-full text-sm font-semibold text-white"
          style={{ background: '#B92E00', boxShadow: '0 10px 24px rgba(185,46,0,0.35)' }}
        >
          {item.cta}
        </button>
      </div>
      <motion.div
        className="absolute inset-0"
        style={{ boxShadow: glow.to(v => `inset 0 0 120px rgba(255,179,71,${v})`) }}
      />
    </motion.div>
  )
}

export default function Showcase() {
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  return (
    <section className="relative py-16 bg-[#111111]">
      <div className="px-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFF9F3] mb-6">Signature Showcase</h2>
      </div>
      <div className="flex items-stretch px-6 overflow-x-auto no-scrollbar" style={{ scrollSnapType: 'x mandatory' }}>
        {cards.map((item, i) => (
          <div key={i} style={{ scrollSnapAlign: 'start' }}>
            <Card item={item} mouseX={mouseX} mouseY={mouseY} />
          </div>
        ))}
      </div>
    </section>
  )
}
