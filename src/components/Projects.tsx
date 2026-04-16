import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.13, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] },
  }),
}

export default function Projects() {
  const projects = [
    {
      year: '2024',
      title: 'Know Your Expense Tracker',
      tech: ['JavaScript', 'HTML', 'CSS'],
      desc: 'Designed and developed a mobile-responsive expense tracking application to help users manage personal finances. The project involved gathering functional requirements, creating a user-friendly interface, and implementing business logic for real-time calculations and data management.',
      github: '#',
      liveDemo: '#'
    },
    {
      year: '2024',
      title: 'Art Gallery Management System',
      tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
      desc: 'Built a full-stack art gallery management system with features for gallery owners to manage artworks, exhibitions, and visitor records. Implemented secure database operations and a clean admin dashboard.',
      github: '#',
      liveDemo: '#'
    },
    {
      year: '2024',
      title: 'Sorting Visualizer',
      tech: ['React.js', 'Tailwind CSS'],
      desc: 'Interactive sorting algorithm visualizer built with React.js and Tailwind CSS. Supports multiple algorithms including Bubble Sort, Selection Sort, Merge Sort, and Quick Sort with real-time visual animation and speed control.',
      github: '#',
      liveDemo: '#'
    },
  ]

  return (
    <section id="projects" className="bg-[#0B0B0B] py-28 px-6 md:px-16 relative overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.025) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212,175,55,0.025) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Ghost WORK text */}
      <div className="absolute left-0 bottom-8 pointer-events-none select-none">
        <span className="font-playfair font-black text-[180px] leading-none text-transparent"
          style={{ WebkitTextStroke: '2px rgba(212,175,55,0.04)' }}>WORK</span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-inter">Portfolio</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}
              className="font-playfair font-black text-5xl md:text-6xl text-[#F5F5F5]"
            >
              My Work
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}
            className="text-[#A1A1AA] text-sm max-w-xs font-inter"
          >
            A selection of projects that showcase my skills in frontend development and problem-solving.
          </motion.p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111111] border border-[#D4AF37]/15 rounded-2xl p-8 relative overflow-hidden group cursor-default
                         hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.12)] transition-all duration-400"
            >
              {/* Gold corner accent on hover */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]" />
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]" />
              </div>

              {/* Year & tech tags */}
              <div className="flex items-start justify-between mb-6 flex-wrap gap-2">
                <span className="text-[#A1A1AA] text-xs font-inter">{proj.year}</span>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map(t => (
                    <span key={t}
                      className="bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-xs px-2.5 py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Large number */}
              <div className="text-7xl font-playfair font-black text-transparent leading-none mb-2 select-none"
                style={{ WebkitTextStroke: '1px rgba(212,175,55,0.12)' }}>
                0{i + 1}
              </div>

              {/* Title */}
              <h3 className="font-playfair font-black text-xl text-[#F5F5F5] mb-4 leading-tight group-hover:text-[#FACC15] transition-colors duration-300">
                {proj.title}
              </h3>

              {/* Desc */}
              <p className="text-[#A1A1AA] text-sm leading-relaxed font-inter">
                {proj.desc}
              </p>

              {/* Links */}
              <div className="mt-8 flex items-center gap-4 text-sm font-medium">
                {proj.liveDemo && (
                  <a href={proj.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-300 group/link">
                    <span>Live Demo</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform duration-300">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </a>
                )}
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-300 group/link">
                    <span>GitHub</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="group-hover/link:scale-110 transition-transform duration-300">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Project / Currently Working On */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
          className="mb-20 bg-gradient-to-r from-[#111111] to-[#0B0B0B] border border-[#D4AF37]/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 blur-3xl rounded-full pointer-events-none" />
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
              </span>
              <h3 className="text-[#F5F5F5] font-playfair font-bold text-2xl">Currently Working On</h3>
            </div>
            <p className="text-[#A1A1AA] text-sm font-inter">Exploring Advanced Frontend Frameworks, 3D Web Animations, and scaling apps with modern databases.</p>
          </div>
          <div className="flex-shrink-0">
             <span className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] px-5 py-2.5 rounded-full text-sm font-medium">Continuous Learning</span>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
          <h3 className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-6 font-inter">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS',
              'PHP', 'MySQL', 'MongoDB', 'UI PATH', 'MS-CIT', 'C++'
            ].map((skill, i) => (
              <motion.span key={skill} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }}
                className="border border-[#D4AF37]/20 text-[#A1A1AA] text-sm px-4 py-2 rounded-full hover:border-[#D4AF37] hover:text-[#FACC15] hover:shadow-[0_0_12px_rgba(212,175,55,0.25)] transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
