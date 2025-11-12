import { useEffect, useState } from 'react'

const posts = [
  {
    src: 'https://cdn.coverr.co/videos/coverr-people-eating-outdoors-7428/1080p.mp4',
    caption: 'City nights, garlic lights ✨',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-friends-eating-together-0238/1080p.mp4',
    caption: 'Shawarma made right. #ShawarmaMadeRight',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-people-smiling-and-having-food-7951/1080p.mp4',
    caption: 'Bites, laughs, repeat.',
  },
]

export default function SocialWall() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % posts.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="bg-[#111111] py-16">
      <div className="px-6">
        <h3 className="text-3xl sm:text-5xl font-extrabold text-[#FFF9F3]">Social Wall</h3>
        <p className="mt-2 text-[#FFF9F3]/70">#ShawarmaMadeRight — Tag us to get featured!</p>
      </div>
      <div className="mt-6 grid md:grid-cols-3 gap-4 px-6">
        {posts.map((p, idx) => (
          <div key={idx} className={`relative rounded-2xl overflow-hidden border border-white/10 ${idx===i? 'ring-2 ring-[#FFB347]' : ''}`}>
            <video src={p.src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-sm text-white bg-gradient-to-t from-black/70 via-transparent to-transparent">{p.caption}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
