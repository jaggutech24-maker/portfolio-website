import { useState } from 'react'
import { motion } from 'framer-motion'

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
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-[#f5f0e8] py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Background Tech Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.05] text-[#2d5a27]">
        <svg className="absolute top-[15%] right-[10%] animate-[spin_12s_linear_infinite]" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
        <div className="absolute bottom-[30%] left-[15%] text-[#E8A020] text-5xl font-mono font-bold rotate-[-15deg]">{'=>'}</div>
        <svg className="absolute top-[60%] right-[20%]" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>

        {/* NEW ELEMENTS */}
        <div className="absolute top-[5%] left-[20%] text-8xl font-mono font-bold opacity-40 rotate-10">{'@'}</div>
        <svg className="absolute bottom-[10%] right-[5%] animate-[spin_25s_linear_infinite_reverse] text-[#E8A020]" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="12"></line><line x1="22" y1="8.5" x2="12" y2="12"></line><line x1="2" y1="8.5" x2="12" y2="12"></line></svg>
        <svg className="absolute top-[40%] left-[5%] opacity-60" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        <div className="absolute bottom-[20%] right-[45%] text-4xl font-mono text-black font-bold">{'</>'}</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0L12.5 7.5H20L14 12L16.5 20L10 15.5L3.5 20L6 12L0 7.5H7.5L10 0Z" fill="#E8A020" />
              </svg>
              <span className="text-[#E8A020] text-sm font-medium uppercase tracking-widest font-inter">Contact Me</span>
            </div>
            <h2 className="font-playfair font-black text-5xl md:text-6xl text-[#1a1a1a] mb-6 leading-tight">
              Let's work<br />together!
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-10 font-inter">
              I'm currently open to new opportunities. Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open!
            </p>

            {/* Contact links */}
            <div className="flex flex-col gap-4">
              {[
                { type: 'Email', value: 'jaggutech24@gmail.com', href: 'mailto:jaggutech24@gmail.com', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
                { type: 'Phone', value: '+91 7822890807', href: 'tel:+917822890807', icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.46-1.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /> },
                { type: 'LinkedIn', value: 'lnk.ink/jayeshprajapati', href: 'https://lnk.ink/jayeshprajapati', icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> }
              ].map((link, i) => (
                <motion.a 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  viewport={{ once: true }}
                  href={link.href} 
                  target={link.type === 'LinkedIn' ? "_blank" : undefined}
                  rel={link.type === 'LinkedIn' ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#2d5a27] rounded-full flex items-center justify-center group-hover:bg-[#E8A020] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      {link.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#888] font-inter">{link.type}</p>
                    <p className="text-[#1a1a1a] font-medium">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#2d5a27] p-8 rounded-sm"
          >
            <h3 className="font-playfair font-bold text-2xl text-white mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-white/60 text-xs uppercase tracking-wide font-inter block mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Jayesh Prajapati"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/30 px-4 py-3 rounded-sm text-sm outline-none focus:border-[#E8A020] transition-colors font-inter"
                />
              </div>
              <div>
                <label className="text-white/60 text-xs uppercase tracking-wide font-inter block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/30 px-4 py-3 rounded-sm text-sm outline-none focus:border-[#E8A020] transition-colors font-inter"
                />
              </div>
              <div>
                <label className="text-white/60 text-xs uppercase tracking-wide font-inter block mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hello Jayesh, I'd love to work with you..."
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/30 px-4 py-3 rounded-sm text-sm outline-none focus:border-[#E8A020] transition-colors font-inter resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`text-[#1a1a1a] font-bold py-3 px-8 rounded-full transition-all hover:scale-105 text-sm mt-2 flex items-center justify-center gap-2 ${loading ? 'bg-white/50 cursor-not-allowed' : 'bg-[#E8A020] hover:bg-[#d4911a]'
                  }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-[#1a1a1a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : sent ? (
                  '✓ Message Sent!'
                ) : error ? (
                  '✕ Error! Try again.'
                ) : (
                  'Send Message →'
                )}
              </button>
              {error && (
                <p className="text-red-400 text-xs mt-2 font-inter text-center">
                  Something went wrong. Please try again or email me directly at jaggutech24@gmail.com
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
