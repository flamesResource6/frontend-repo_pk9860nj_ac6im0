import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  useEffect(() => {
    // Autoplay sizzling sound at low volume on interaction
    const audio = document.getElementById('sizzle-audio')
    const enableAudio = () => {
      if (audio && audio.paused) {
        audio.volume = 0.15
        audio.play().catch(() => {})
      }
      window.removeEventListener('pointerdown', enableAudio)
    }
    window.addEventListener('pointerdown', enableAudio)
    return () => window.removeEventListener('pointerdown', enableAudio)
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-[#111111]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://cdn.coverr.co/videos/coverr-shawarma-rotisserie-slow-10527/1080p.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/40 to-transparent" />
      <motion.div style={{ y, opacity }} className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          style={{
            color: '#FFF9F3',
            textShadow: '0 6px 60px rgba(185,46,0,0.35)'
          }}
        >
          Hand-Rolled. Fire-Grilled. Made in the City.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mt-4 max-w-2xl text-[#FFF9F3]/80"
        >
          Slow-motion flavor. Ambient heat. Street energy.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#build"
            className="px-6 py-3 rounded-full font-semibold text-white shadow-lg"
            style={{ background: '#B92E00', boxShadow: '0 10px 40px rgba(185,46,0,0.5)' }}
          >
            Order Now
          </a>
          <a
            href="#location"
            className="px-6 py-3 rounded-full font-semibold text-[#FFF9F3] border border-[#FFB347]/60 hover:border-[#FFB347] transition"
          >
            Find Us
          </a>
        </motion.div>
      </motion.div>

      <audio id="sizzle-audio" src="https://cdn.pixabay.com/download/audio/2021/12/15/audio_3a0d2a2b2d.mp3?filename=grill-meat-sizzle-ambient-10465.mp3" />

      {/* Neon city light overlays */}
      <div className="pointer-events-none absolute -inset-20 opacity-60 mix-blend-screen" aria-hidden>
        <div className="absolute top-10 left-0 w-80 h-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(185,46,0,0.5), transparent 60%)' }} />
        <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255,179,71,0.4), transparent 60%)' }} />
      </div>
    </section>
  )
}
