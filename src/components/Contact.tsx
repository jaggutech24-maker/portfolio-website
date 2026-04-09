import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] },
  }),
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const response = await fetch('https://formspree.io/f/mqegopra', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (response.ok) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-[#111111] py-28 px-6 md:px-16 relative overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.025) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212,175,55,0.025) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section label */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-10 h-px bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-inter">Contact</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
            <h2 className="font-playfair font-black text-5xl md:text-6xl text-[#F5F5F5] mb-6 leading-tight">
              Let's work<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #D4AF37' }}>together!</span>
            </h2>
            <p className="text-[#A1A1AA] text-base leading-relaxed mb-10 font-inter">
              I'm currently open to new opportunities. Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open!
            </p>

            {/* Contact links */}
            <div className="flex flex-col gap-5">
              {[
                { type: 'Email', value: 'jaggutech24@gmail.com', href: 'mailto:jaggutech24@gmail.com',
                  icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></> },
                { type: 'Phone', value: '+91 7822890807', href: 'tel:+917822890807',
                  icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.46-1.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/> },
                { type: 'LinkedIn', value: 'lnk.ink/jayeshprajapati', href: 'https://lnk.ink/jayeshprajapati',
                  icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></> },
              ].map((link, i) => (
                <motion.a
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  href={link.href}
                  target={link.type === 'LinkedIn' ? '_blank' : undefined}
                  rel={link.type === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center
                    group-hover:border-[#D4AF37] group-hover:shadow-[0_0_16px_rgba(212,175,55,0.35)] transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg,rgba(212,175,55,0.08),rgba(250,204,21,0.05))' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                      {link.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#A1A1AA] font-inter">{link.type}</p>
                    <p className="text-[#F5F5F5] font-medium text-sm group-hover:text-[#FACC15] transition-colors">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-[#0B0B0B] border border-[#D4AF37]/15 rounded-2xl p-8 hover:border-[#D4AF37]/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.07)] transition-all duration-500"
          >
            <h3 className="font-playfair font-bold text-2xl text-[#F5F5F5] mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {[
                { label: 'Your Name',  name: 'name',    type: 'text',  placeholder: 'Jayesh Prajapati' },
                { label: 'Email',      name: 'email',   type: 'email', placeholder: 'you@example.com' },
              ].map(field => (
                <div key={field.name}>
                  <label className="text-[#A1A1AA] text-xs uppercase tracking-wide font-inter block mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="w-full bg-[#111111] border border-[#D4AF37]/15 text-[#F5F5F5] placeholder:text-[#A1A1AA]/40 px-4 py-3 rounded-xl text-sm outline-none focus:border-[#D4AF37]/60 focus:shadow-[0_0_12px_rgba(212,175,55,0.15)] transition-all duration-300 font-inter"
                  />
                </div>
              ))}
              <div>
                <label className="text-[#A1A1AA] text-xs uppercase tracking-wide font-inter block mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hello Jayesh, I'd love to work with you..."
                  className="w-full bg-[#111111] border border-[#D4AF37]/15 text-[#F5F5F5] placeholder:text-[#A1A1AA]/40 px-4 py-3 rounded-xl text-sm outline-none focus:border-[#D4AF37]/60 focus:shadow-[0_0_12px_rgba(212,175,55,0.15)] transition-all duration-300 font-inter resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`font-bold py-3.5 px-8 rounded-full transition-all duration-300 text-sm mt-1 flex items-center justify-center gap-2 hover:scale-105 ${
                  loading ? 'cursor-not-allowed opacity-60' : 'hover:shadow-[0_0_24px_rgba(212,175,55,0.4)]'
                }`}
                style={{
                  background: loading ? '#333' : 'linear-gradient(135deg,#D4AF37,#FACC15)',
                  color: '#0B0B0B',
                }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Sending...
                  </>
                ) : sent ? '✓ Message Sent!' : error ? '✕ Error! Try again.' : 'Send Message →'}
              </button>
              {error && (
                <p className="text-red-400 text-xs mt-1 font-inter text-center">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
