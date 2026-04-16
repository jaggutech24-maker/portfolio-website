import { motion } from 'framer-motion'
import aboutProfileImg from '../assets/images/about-profile.png'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] },
  }),
}

const titleContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}
const titleChar = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 14, stiffness: 120 } },
} as const

export default function About() {
  const titleChars = "Hello, I'm Jayesh!".split('')

  return (
    <section id="about" className="bg-[#0B0B0B] py-28 px-6 md:px-16 relative overflow-hidden">

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Section label */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-10 h-px bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-inter">About Me</span>
        </motion.div>

        {/* Hello section */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-20">

          {/* Left: Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2 bg-[#111111] rounded-2xl border border-[#D4AF37]/15 p-8 hover:border-[#D4AF37]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-10 rounded-full" style={{ background: 'linear-gradient(180deg,#D4AF37,#FACC15)' }} />
              <motion.h2
                style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
                variants={titleContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="font-playfair font-black text-4xl md:text-5xl text-[#F5F5F5] leading-tight"
              >
                {titleChars.map((char, i) => (
                  <motion.span variants={titleChar} key={i}>
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h2>
            </div>
            <p className="text-[#A1A1AA] text-base leading-relaxed mb-8 font-inter">
              I'm a recent B.Sc. Computer Science graduate with a strong foundation in core computer science concepts.
              I have hands-on experience building clean, responsive, and user-focused applications using modern technologies.
              I bring a sharp eye for design, a focus on performance optimization, and a commitment to writing scalable and maintainable code.
            </p>
            <a
              href="https://lnk.ink/jayeshprajapati"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#D4AF37]/50 text-[#D4AF37] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#D4AF37]/10 transition-all duration-300 hover:shadow-[0_0_16px_rgba(212,175,55,0.25)]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              lnk.ink/jayeshprajapati
            </a>
          </motion.div>

          {/* Right: Profile card */}
          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative rounded-xl overflow-visible w-fit ml-auto"
            >
              <div className="relative p-4 rounded-xl"
                style={{ background: 'linear-gradient(135deg,#D4AF37,#FACC15)', boxShadow: '0 0 40px rgba(212,175,55,0.3)' }}>
                <img
                  src={aboutProfileImg}
                  alt="Jayesh Kumar Prajapati"
                  className="w-52 h-64 object-cover object-top rounded-lg"
                />
                {/* Corner accents */}
                <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-[#0B0B0B]" />
                <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-[#0B0B0B]" />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: false }}
                className="absolute -left-20 top-8 text-[#0B0B0B] px-4 py-2 rounded-full text-xs font-bold shadow-xl"
                style={{ background: 'linear-gradient(135deg,#D4AF37,#FACC15)', boxShadow: '0 0 14px rgba(212,175,55,0.5)' }}
              >
                B.Sc. CS Graduate
              </motion.div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: false }}
                className="absolute -right-8 top-1/2 text-[#0B0B0B] px-4 py-2 rounded-full text-xs font-bold shadow-xl"
                style={{ background: 'linear-gradient(135deg,#D4AF37,#FACC15)', boxShadow: '0 0 14px rgba(212,175,55,0.5)' }}
              >
                Frontend Dev
              </motion.div>
            </motion.div>

            {/* Contact card */}
            <div className="bg-[#111111] text-[#F5F5F5] p-6 mt-5 rounded-xl border border-[#D4AF37]/15">
              <h3 className="font-playfair font-bold text-lg mb-4 text-[#D4AF37]">Contact</h3>
              <div className="flex flex-col gap-3">
                {[
                  { icon: '📍', text: 'Mira Road (E), Thane, Maharashtra' },
                  { icon: '✉️', text: 'jaggutech24@gmail.com', href: 'mailto:jaggutech24@gmail.com' },
                  { icon: '📞', text: '+91 7822890807', href: 'tel:+917822890807' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span>{item.icon}</span>
                    {item.href ? (
                      <a href={item.href} className="text-[#A1A1AA] hover:text-[#D4AF37] transition-colors">{item.text}</a>
                    ) : (
                      <span className="text-[#A1A1AA]">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Strengths */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="mb-16 rounded-2xl border border-[#D4AF37]/15 p-8 md:p-10"
          style={{ background: 'linear-gradient(135deg,#111111 0%,#0f0f0f 100%)' }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full" style={{ background: 'linear-gradient(180deg,#D4AF37,#FACC15)' }} />
            <h3 className="font-playfair font-black text-3xl text-[#F5F5F5]">Strengths</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { title: 'Project Management & Problem Solving', desc: 'Strong project management and problem-solving skills', icon: '🎯' },
              { title: 'Teamwork and Leadership', desc: 'Capable of effective teamwork and leadership', icon: '🤝' },
              { title: 'Time Management & Critical Thinking', desc: 'Exhibit time management and critical thinking abilities', icon: '⏱️' },
              { title: 'Effective Communication', desc: 'Strong communication skills with a focus on professionalism', icon: '💬' },
            ].map((s, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="bg-[#0B0B0B] border border-[#D4AF37]/10 rounded-xl p-5 hover:border-[#D4AF37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all duration-300 group"
              >
                <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
                <h4 className="font-semibold text-[#F5F5F5] text-sm mb-2">{s.title}</h4>
                <p className="text-[#A1A1AA] text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What I Do (Services) */}
        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: false, amount: 0.15 }}
           className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full" style={{ background: 'linear-gradient(180deg,#D4AF37,#FACC15)' }} />
            <h3 className="font-playfair font-black text-3xl text-[#F5F5F5]">What I Do</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Frontend Development', desc: 'Building responsive, pixel-perfect, and dynamic user interfaces using React, JavaScript, HTML, and modern CSS frameworks.', icon: '💻' },
              { title: 'Responsive UI/UX Eng.', desc: 'Ensuring seamless user experiences across all devices with a strong focus on accessibility, animations, and aesthetics.', icon: '📱' },
              { title: 'Performance Optimization', desc: 'Writing clean, scalable code and optimizing web applications for maximum speed and smooth interactions.', icon: '⚡' },
            ].map((service, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="bg-[#111111] border border-[#D4AF37]/15 rounded-2xl p-8 hover:border-[#D4AF37]/40 hover:shadow-[0_0_25px_rgba(212,175,55,0.1)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0B0B0B] border border-[#D4AF37]/20 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">{service.icon}</span>
                </div>
                <h4 className="font-playfair font-bold text-xl text-[#F5F5F5] mb-3 group-hover:text-[#FACC15] transition-colors">{service.title}</h4>
                <p className="text-[#A1A1AA] text-sm leading-relaxed font-inter">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages & Hobbies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Languages */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="bg-[#111111] rounded-2xl border border-[#D4AF37]/15 p-8 hover:border-[#D4AF37]/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 rounded-full" style={{ background: 'linear-gradient(180deg,#D4AF37,#FACC15)' }} />
              <h3 className="font-playfair font-black text-2xl text-[#F5F5F5]">Languages</h3>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { lang: 'English', level: 'Native', dots: 5 },
                { lang: 'Hindi',   level: 'Native', dots: 5 },
                { lang: 'Punjabi', level: 'Intermediate', dots: 3 },
              ].map(l => (
                <div key={l.lang} className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#F5F5F5] text-sm">{l.lang}</p>
                    <p className="text-[#A1A1AA] text-xs">{l.level}</p>
                  </div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map(d => (
                      <div key={d}
                        className={`w-3.5 h-3.5 rounded-full border-2 ${d <= l.dots ? 'border-[#D4AF37]' : 'border-[#333]'}`}
                        style={d <= l.dots ? { background: 'linear-gradient(135deg,#D4AF37,#FACC15)' } : {}}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="bg-[#111111] rounded-2xl border border-[#D4AF37]/15 p-8 hover:border-[#D4AF37]/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 rounded-full" style={{ background: 'linear-gradient(180deg,#D4AF37,#FACC15)' }} />
              <h3 className="font-playfair font-black text-2xl text-[#F5F5F5]">Hobbies & Interests</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: '🏋️', label: 'Weightlifting' },
                { icon: '💻', label: 'Web Dev' },
                { icon: '📊', label: 'Data Analysis' },
                { icon: '📱', label: 'Tech & Gadgets' },
                { icon: '🌊', label: 'Beach Cleanup' },
                { icon: '🎮', label: 'Gaming' },
              ].map(h => (
                <div key={h.label}
                  className="flex flex-col items-center gap-2 bg-[#0B0B0B] border border-[#D4AF37]/10 p-4 rounded-xl hover:border-[#D4AF37]/40 hover:shadow-[0_0_14px_rgba(212,175,55,0.15)] transition-all duration-300 group cursor-default"
                >
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{h.icon}</span>
                  <span className="text-[#A1A1AA] text-xs text-center font-inter">{h.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
