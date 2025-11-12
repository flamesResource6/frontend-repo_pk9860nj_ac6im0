import { motion } from 'framer-motion'

export default function Location() {
  return (
    <section id="location" className="bg-[#111111] py-16">
      <div className="px-6">
        <h3 className="text-3xl sm:text-5xl font-extrabold text-[#FFF9F3]">Location & Hours</h3>
        <p className="mt-2 text-[#FFF9F3]/70">Find us in the heart of the city.</p>
      </div>
      <div className="mt-8 grid lg:grid-cols-2 gap-8 px-6">
        <div className="relative rounded-3xl overflow-hidden border border-white/10">
          <iframe
            title="map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15%2C51.49%2C-0.11%2C51.52&layer=mapnik&marker=51.505%2C-0.125"
            className="w-full h-[360px]"
          />
        </div>
        <div className="flex items-center">
          <div>
            <div className="text-[#FFF9F3] font-semibold">Hours</div>
            <div className="mt-2 text-[#FFF9F3]/80">Mon–Thu 11am–10pm</div>
            <div className="text-[#FFF9F3]/80">Fri–Sat 11am–1am</div>
            <div className="text-[#FFF9F3]/80">Sun 12pm–9pm</div>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-block mt-6 px-5 py-3 rounded-xl font-semibold text-white" style={{ background: '#B92E00' }}>Get Directions</a>
          </div>
        </div>
      </div>
    </section>
  )
}
