import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.13, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] },
  }),
}
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.65, delay: i * 0.13, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] },
  }),
}
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.65, delay: i * 0.13, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] },
  }),
}
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] },
  }),
}

const GoldBar = () => (
  <div className="w-1 h-8 rounded-full flex-shrink-0"
    style={{ background: 'linear-gradient(180deg,#D4AF37,#FACC15)' }} />
)

export default function Resume() {
  return (
    <section id="resume" className="bg-[#111111] py-28 px-6 md:px-16 relative overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.025) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212,175,55,0.025) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Ghost RESUME text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <div className="flex flex-col items-end">
          <span className="font-playfair font-black text-8xl md:text-[140px] leading-none text-transparent"
            style={{ WebkitTextStroke: '2px rgba(212,175,55,0.06)' }}>RESUME</span>
          <span className="font-playfair font-black text-7xl md:text-[110px] leading-none text-transparent"
            style={{ WebkitTextStroke: '2px rgba(212,175,55,0.04)' }}>RESUME</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section label */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-10 h-px bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-inter">My Resume</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* ─── LEFT COLUMN ─── */}
          <div className="flex flex-col gap-10">

            {/* Education */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }}
              className="bg-[#0B0B0B] rounded-2xl border border-[#D4AF37]/15 p-8 hover:border-[#D4AF37]/35 hover:shadow-[0_0_30px_rgba(212,175,55,0.07)] transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-8">
                <GoldBar />
                <h2 className="font-playfair font-black text-3xl text-[#F5F5F5]">Education</h2>
              </div>
              <div className="relative pl-5">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-[#D4AF37]/25" />
                {[
                  { years: 'Aug 2022 – Aug 2025', school: 'Thakurramnarayan College of Arts & Commerce', field: 'Bachelor of Science in Computer Science', detail: 'CGPA: 8.8 | Mumbai, Maharashtra', icon: '🎓' },
                  { years: 'Jul 2020 – May 2022', school: 'Matruchhaya College of Science & Commerce', field: 'HSC', detail: 'Percentage: 71.50% | Mumbai, Maharashtra', icon: '📚' },
                  { years: 'Jul 2020 – May 2022', school: 'St. Thomas High School (Mira Road)', field: 'SSC', detail: 'Percentage: 80.20% | Mumbai, Maharashtra', icon: '🏫' },
                ].map((edu, i) => (
                  <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
                    className="mb-6 relative group"
                  >
                    <div className="absolute -left-[22px] top-3 w-3 h-3 rotate-45 border border-[#D4AF37]"
                      style={{ background: 'linear-gradient(135deg,#D4AF37,#FACC15)' }} />
                    <div className="ml-4 bg-[#111111] border border-[#D4AF37]/10 rounded-xl p-4 group-hover:border-[#D4AF37]/35 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-1">
                        <span>{edu.icon}</span>
                        <span className="text-[#D4AF37] font-bold text-xs font-inter">{edu.years}</span>
                      </div>
                      <h4 className="font-bold text-[#F5F5F5] text-sm mt-1">{edu.school}</h4>
                      <p className="text-[#A1A1AA] text-xs">{edu.field}</p>
                      <p className="text-[#FACC15] font-semibold text-xs mt-1">{edu.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }}
              className="bg-[#0B0B0B] rounded-2xl border border-[#D4AF37]/15 p-8 hover:border-[#D4AF37]/35 hover:shadow-[0_0_30px_rgba(212,175,55,0.07)] transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-8">
                <GoldBar />
                <h2 className="font-playfair font-black text-3xl text-[#F5F5F5]">Experience</h2>
              </div>
              <div className="relative pl-5">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-[#D4AF37]/25" />
                {[
                  {
                    year: 'Nov 2024 – May 2025',
                    title: 'Frontend Developer',
                    company: 'OceanOwe Foundation – Mira-Bhayandar, Maharashtra',
                    desc: 'Led development of responsive web pages and interactive interfaces for NGO campaigns using HTML, CSS, JS, and React.js. Analyzed user engagement metrics resulting in a 15% increase in engagement.'
                  },
                  {
                    year: '2020 – Present',
                    title: 'Social Media Manager & Field Volunteer',
                    company: 'NGO – Mumbai',
                    desc: "Led beach cleanup drives promoting environmental awareness. Managed and created content for NGO's Instagram and Facebook pages."
                  },
                ].map((exp, i) => (
                  <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
                    className="mb-8 relative group"
                  >
                    <div className="absolute -left-[22px] top-1.5 w-3 h-3 rotate-45"
                      style={{ background: 'linear-gradient(135deg,#D4AF37,#FACC15)' }} />
                    <div className="ml-4 bg-[#111111] border border-[#D4AF37]/10 rounded-xl p-4 group-hover:border-[#D4AF37]/35 transition-all duration-300">
                      <span className="text-[#A1A1AA] text-xs font-inter">{exp.year}</span>
                      <h4 className="font-bold text-[#F5F5F5] text-sm mt-1">{exp.title}</h4>
                      <p className="text-[#D4AF37]/70 text-xs mb-2">{exp.company}</p>
                      <p className="text-[#A1A1AA] text-sm leading-relaxed">{exp.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}
                className="flex flex-wrap gap-2 mt-2"
              >
                {['#Creativity', '#Communication', '#Detail-oriented', '#Adaptability'].map(tag => (
                  <span key={tag} className="text-[#D4AF37] text-xs font-medium px-4 py-1.5 rounded-full border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 transition-colors">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN ─── */}
          <div className="flex flex-col gap-10">

            {/* Technical Skills */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }}
              className="bg-[#0B0B0B] rounded-2xl border border-[#D4AF37]/15 p-8 hover:border-[#D4AF37]/35 hover:shadow-[0_0_30px_rgba(212,175,55,0.07)] transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-8">
                <GoldBar />
                <h2 className="font-playfair font-black text-3xl text-[#F5F5F5]">Technical Skills</h2>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-7">
                {/* Coding */}
                <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
                  className="bg-[#111111] border border-[#D4AF37]/10 rounded-xl p-5 hover:border-[#D4AF37]/35 transition-all duration-300"
                >
                  <h4 className="font-bold text-[#D4AF37] text-xs mb-4 uppercase tracking-wide">Coding Skills</h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'PHP', 'SQL', 'Tailwind', 'C++'].map((skill, i) => (
                      <motion.div key={skill} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }}
                        className="flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg,#D4AF37,#FACC15)' }} />
                        <span className="text-[#A1A1AA] text-xs group-hover:text-[#F5F5F5] transition-colors">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Databases */}
                <motion.div variants={scaleIn} custom={1} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
                  className="bg-[#111111] border border-[#D4AF37]/10 rounded-xl p-5 hover:border-[#D4AF37]/35 transition-all duration-300"
                >
                  <h4 className="font-bold text-[#D4AF37] text-xs mb-4 uppercase tracking-wide">Databases</h4>
                  <div className="flex flex-col gap-3">
                    {['MongoDB', 'MySQL', 'LocalStorage'].map((db, i) => (
                      <motion.div key={db} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }}
                        className="flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F5F5F5] flex-shrink-0" />
                        <span className="text-[#A1A1AA] text-xs group-hover:text-[#F5F5F5] transition-colors">{db}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Other skills */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
                <h4 className="font-bold text-[#D4AF37] text-xs mb-3 uppercase tracking-wide">Other Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'User Research', 'People Management', 'Cross Browser Compatibility',
                    'Performance Optimisation', 'Responsive Web Design', 'Requirements Gathering',
                    'Business Process Modeling', 'Stakeholder Management', 'Data Analysis', 'Data Visualization'
                  ].map((skill, i) => (
                    <motion.span key={skill} custom={i} variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }}
                      className="border border-[#D4AF37]/20 text-[#A1A1AA] text-xs px-3 py-1.5 rounded-full hover:border-[#D4AF37]/60 hover:text-[#FACC15] hover:shadow-[0_0_10px_rgba(212,175,55,0.2)] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }}
              className="bg-[#0B0B0B] rounded-2xl border border-[#D4AF37]/15 p-8 hover:border-[#D4AF37]/35 hover:shadow-[0_0_30px_rgba(212,175,55,0.07)] transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-8">
                <GoldBar />
                <h2 className="font-playfair font-black text-3xl text-[#F5F5F5]">Achievements</h2>
              </div>
              <div className="relative pl-5">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-[#D4AF37]/25" />
                {[
                  { year: 'May 2023', title: 'Business Analytics with Excel', company: 'Simplilearn x Microsoft', desc: 'Proficient in VLOOKUP, HLOOKUP, PivotTables, Power Query. Skilled in data cleaning, transformation, and modeling.', icon: '📊' },
                  { year: '2023', title: 'Weightlifting – Gold Medal 🥇', company: 'Mira Road Championship', desc: 'Won Gold in Under 70Kg Category at Mira Road weightlifting championship.', icon: '🏋️' },
                ].map((ach, i) => (
                  <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
                    className="mb-7 relative group"
                  >
                    <div className="absolute -left-[22px] top-1.5 w-3 h-3 rotate-45"
                      style={{ background: 'linear-gradient(135deg,#D4AF37,#FACC15)' }} />
                    <div className="ml-4 bg-[#111111] border border-[#D4AF37]/10 rounded-xl p-4 group-hover:border-[#D4AF37]/35 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base">{ach.icon}</span>
                        <span className="text-[#D4AF37] font-bold text-xs font-inter">{ach.year}</span>
                      </div>
                      <h4 className="font-bold text-[#F5F5F5] text-sm mt-1">{ach.title}</h4>
                      <p className="text-[#A1A1AA]/70 text-xs mb-2">{ach.company}</p>
                      <p className="text-[#A1A1AA] text-sm leading-relaxed">{ach.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
