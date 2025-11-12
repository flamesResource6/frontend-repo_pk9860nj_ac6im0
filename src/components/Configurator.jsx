import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const PITA = ['Classic Pita', 'Whole Wheat', 'Laffa']
const PROTEIN = ['Chicken Shawarma', 'Beef Shawarma', 'Falafel']
const SAUCES = ['Garlic', 'Tahini', 'Spicy Red']
const TOPPINGS = ['Pickles', 'Tomatoes', 'Onions', 'Parsley', 'Cabbage']

export default function Configurator() {
  const [pita, setPita] = useState(PITA[0])
  const [protein, setProtein] = useState(PROTEIN[0])
  const [sauces, setSauces] = useState(['Garlic'])
  const [toppings, setToppings] = useState(['Pickles', 'Onions'])
  const [submitting, setSubmitting] = useState(false)
  const price = useMemo(() => {
    let base = 9.5
    if (protein === 'Beef Shawarma') base += 2
    if (sauces.length > 1) base += 0.5
    if (toppings.length > 3) base += 0.75
    return base
  }, [protein, sauces, toppings])

  const backend = import.meta.env.VITE_BACKEND_URL || ''

  const toggle = (list, setList, value) => {
    if (list.includes(value)) setList(list.filter(v => v !== value))
    else setList([...list, value])
  }

  const order = async () => {
    setSubmitting(true)
    try {
      const res = await fetch(`${backend}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{ name: `${protein} Wrap`, price, quantity: 1, options: { pita, sauces, toppings } }],
          subtotal: price,
          tax: +(price * 0.13).toFixed(2),
          total: +(price * 1.13).toFixed(2),
        })
      })
      const data = await res.json()
      alert(data.message)
    } catch (e) {
      alert('Order received (demo). We\'ll start the grill!')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="build" className="bg-[#111111] py-16">
      <div className="px-6">
        <h3 className="text-3xl sm:text-5xl font-extrabold text-[#FFF9F3]">Build Your Shawarma</h3>
        <p className="mt-2 text-[#FFF9F3]/70">Assemble it in real time — then we\'ll grill it for you.</p>
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-8 px-6">
        <div className="relative rounded-3xl overflow-hidden bg-[#0f0f0f] border border-white/10 p-6">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black">
            <video
              src={protein === 'Beef Shawarma' ? 'https://cdn.coverr.co/videos/coverr-fire-grilling-4037/1080p.mp4' : 'https://cdn.coverr.co/videos/coverr-grilling-meat-2869/1080p.mp4'}
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-white">
                <div className="text-lg font-semibold">{protein}</div>
                <div className="text-sm text-white/70">{pita} · {sauces.join(', ')} · {toppings.slice(0,3).join(', ')}{toppings.length>3?'…':''}</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-[#FFB347] font-bold">${price.toFixed(2)}</motion.div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <OptionGroup title="Pita" options={PITA} value={pita} onChange={setPita} />
          <OptionGroup title="Protein" options={PROTEIN} value={protein} onChange={setProtein} />
          <MultiOptionGroup title="Sauces" options={SAUCES} value={sauces} onToggle={(v)=>toggle(sauces,setSauces,v)} />
          <MultiOptionGroup title="Toppings" options={TOPPINGS} value={toppings} onToggle={(v)=>toggle(toppings,setToppings,v)} />

          <button
            onClick={order}
            disabled={submitting}
            className="w-full mt-4 px-6 py-4 rounded-xl font-bold text-white disabled:opacity-60"
            style={{ background: '#B92E00', boxShadow: '0 12px 40px rgba(185,46,0,0.45)' }}
          >
            {submitting ? 'Placing Order…' : "That's your wrap. Want to order it?"}
          </button>
        </div>
      </div>
    </section>
  )
}

function OptionGroup({ title, options, value, onChange }) {
  return (
    <div>
      <h4 className="text-[#FFF9F3] font-semibold mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map(opt => (
          <button key={opt} onClick={() => onChange(opt)} className={`px-4 py-2 rounded-full border text-sm ${value===opt? 'text-black bg-[#FFB347] border-[#FFB347]' : 'text-[#FFF9F3] border-white/20 hover:border-[#FFB347]/60'}`}>{opt}</button>
        ))}
      </div>
    </div>
  )
}

function MultiOptionGroup({ title, options, value, onToggle }) {
  return (
    <div>
      <h4 className="text-[#FFF9F3] font-semibold mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map(opt => {
          const active = value.includes(opt)
          return (
            <button key={opt} onClick={() => onToggle(opt)} className={`px-4 py-2 rounded-full border text-sm ${active? 'text-black bg-[#FFB347] border-[#FFB347]' : 'text-[#FFF9F3] border-white/20 hover:border-[#FFB347]/60'}`}>{opt}</button>
          )
        })}
      </div>
    </div>
  )
}
