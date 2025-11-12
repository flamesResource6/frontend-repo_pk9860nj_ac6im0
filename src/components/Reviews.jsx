import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

const backend = import.meta.env.VITE_BACKEND_URL || ''

export default function Reviews() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch(`${backend}/api/reviews`).then(r => r.json()).then(setReviews).catch(() => setReviews([]))
  }, [])

  return (
    <section className="bg-[#111111] py-16">
      <div className="px-6">
        <h3 className="text-3xl sm:text-5xl font-extrabold text-[#FFF9F3]">What People Say</h3>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {reviews.map((r, i) => (
          <div key={i} className="relative rounded-2xl p-6 bg-[#0f0f0f] border border-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
            <div className="flex items-center gap-2">
              {Array.from({ length: r.rating }).map((_, j) => <Star key={j} size={16} fill="#FFB347" color="#FFB347" />)}
            </div>
            <p className="mt-3 text-white/80">“{r.quote}”</p>
            <div className="mt-4 text-sm text-white/60">— {r.name} {r.platform? `on ${r.platform}`: ''}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
