import { motion } from 'framer-motion'

export default function OurStory() {
  return (
    <section className="relative bg-[#111111] text-[#FFF9F3]">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative min-h-[60vh] md:min-h-[80vh]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="https://cdn.coverr.co/videos/coverr-charcoal-grill-2261/1080p.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#111111] via-transparent to-transparent" />
        </div>
        <div className="flex items-center">
          <div className="p-8 md:p-12">
            <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-5xl font-extrabold">Our Story</motion.h3>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-6 text-lg text-[#FFF9F3]/80 leading-relaxed">
              It started on a street corner. A dream, a flame, and a family recipe that never dies.
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-4 text-[#FFF9F3]/70">
              Late nights, ember light, and the scent of garlic drifting through the city. We grill with patience, carve with heart, and serve with pride.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
