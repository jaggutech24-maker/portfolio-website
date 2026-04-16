import { motion } from 'framer-motion'
import profileImg from '../assets/images/profile.jpg'

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen bg-[#0B0B0B] relative overflow-hidden flex flex-col">

      {/* Grid pattern background */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial gold glow centre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)' }}
      />

      {/* Floating background symbols */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.07]">
        <div className="absolute top-20 left-[10%] text-[#D4AF37] text-6xl font-mono font-bold animate-pulse rotate-12">{'{ }'}</div>
        <div className="absolute bottom-40 right-[15%] text-[#D4AF37] text-7xl font-mono font-bold -rotate-12">{'</>'}</div>
        <svg className="absolute top-1/3 right-[10%] text-[#D4AF37] animate-[spin_10s_linear_infinite]" width="80" height="80" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
        <div className="absolute top-[15%] right-[30%] border-2 border-[#D4AF37] text-[#D4AF37] font-bold text-2xl p-2 rounded-md rotate-12">JS</div>
        <div className="absolute top-[10%] left-[50%] text-[#D4AF37] text-4xl font-mono animate-pulse">{'$_'}</div>
        <div className="absolute bottom-[30%] left-[8%] text-[#D4AF37] text-5xl font-mono font-bold">{'<>'}</div>
      </div>

      {/* Main hero content */}
      <div className="flex-1 flex flex-col md:flex-row items-stretch pt-20 relative z-10">

        {/* Left: Photo */}
        <div className="relative md:w-2/5 flex items-end justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative z-10 ml-0 md:ml-14 mt-16 md:mt-0"
          >
            <div className="w-64 h-80 md:w-72 md:h-[420px] relative">
              {/* Gold offset shadow */}
              <motion.div
                initial={{ x: 20, y: 20 }}
                animate={{ x: 16, y: 16 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute inset-0 rounded-sm"
                style={{ background: 'linear-gradient(135deg,#D4AF37,#FACC15)', boxShadow: '0 0 40px rgba(212,175,55,0.35)' }}
              />
              <motion.img
                whileHover={{ scale: 1.02 }}
                src={profileImg}
                alt="Jayesh Kumar Prajapati"
                className="relative z-10 w-full h-full object-cover rounded-sm"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.7)' }}
              />
              {/* Gold corner accent */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] z-20" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] z-20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
            className="absolute bottom-0 left-0 md:left-14 p-6 max-w-xs"
          >
            <p className="text-[#A1A1AA] text-xs leading-relaxed font-inter">
              B.Sc. CS Graduate · Frontend Developer<br />
              Built responsive web apps at OceanOwe Foundation,<br />
              boosting engagement by 15%. React · JavaScript · SQL.
            </p>
          </motion.div>
        </div>

        {/* Right: Title */}
        <div className="md:w-3/5 flex flex-col justify-center items-start px-8 md:px-14 py-12 relative">

          {/* Gold star decorations */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-16 right-8 text-[#D4AF37]"
            style={{ filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.8))' }}
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 0L19 12L32 16L19 20L16 32L13 20L0 16L13 12L16 0Z"/>
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute top-28 right-20 text-[#D4AF37]/60"
          >
            <svg width="14" height="14" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 0L19 12L32 16L19 20L16 32L13 20L0 16L13 12L16 0Z"/>
            </svg>
          </motion.div>

          {/* Gold label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-inter">Frontend Developer</span>
          </motion.div>

          {/* Stacked title */}
          <div className="relative mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="text-[#F5F5F5] font-playfair font-black text-6xl md:text-8xl leading-none tracking-tight"
            >
              PORTFOLIO
            </motion.h1>
            <div className="mt-1">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-playfair font-black text-5xl md:text-7xl leading-none tracking-tight text-transparent"
                style={{ WebkitTextStroke: '2px rgba(212,175,55,0.5)' }}
              >
                DEVELOPER
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-playfair font-black text-4xl md:text-6xl leading-none tracking-tight text-transparent"
                style={{ WebkitTextStroke: '2px rgba(212,175,55,0.3)' }}
              >
                DESIGNER
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="font-playfair font-black text-3xl md:text-5xl leading-none tracking-tight text-transparent"
                style={{ WebkitTextStroke: '2px rgba(212,175,55,0.15)' }}
              >
                CODER
              </motion.p>
            </div>
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <a
              href="https://lnk.ink/jayeshprajapati"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="group flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#F5F5F5" className="group-hover:fill-[#0B0B0B] transition-colors">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:jaggutech24@gmail.com"
              title="Email"
              className="group flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#F5F5F5" className="group-hover:fill-[#0B0B0B] transition-colors">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <span className="text-[#A1A1AA] text-sm font-inter flex items-center gap-1.5">
              <span className="text-[#D4AF37]">📍</span> Mira Road, Maharashtra
            </span>
          </motion.div>

          {/* Download CV */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a href="#" download="Jayesh_Resume.pdf" className="group flex items-center gap-2 text-[#0B0B0B] font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(212,175,55,0.5)] w-fit"
              style={{ background: 'linear-gradient(135deg,#D4AF37,#FACC15)' }}>
              <span>Download CV</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-y-1 transition-transform">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA bar */}
      <div className="bg-[#111111] border-t border-[#D4AF37]/10 py-6 flex justify-center items-center">
        <button
          onClick={() => scrollTo('about')}
          className="group flex items-center gap-2 text-[#0B0B0B] font-semibold text-sm px-7 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(212,175,55,0.5)]"
          style={{ background: 'linear-gradient(135deg,#D4AF37,#FACC15)' }}
        >
          Discover More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-y-1 transition-transform">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
