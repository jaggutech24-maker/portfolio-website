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
    },
    {
      year: '2024',
      title: 'Art Gallery Management System',
      tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
      desc: 'Built a full-stack art gallery management system with features for gallery owners to manage artworks, exhibitions, and visitor records. Implemented secure database operations and a clean admin dashboard.',
    },
    {
      year: '2024',
      title: 'Sorting Visualizer',
      tech: ['React.js', 'Tailwind CSS'],
      desc: 'Interactive sorting algorithm visualizer built with React.js and Tailwind CSS. Supports multiple algorithms including Bubble Sort, Selection Sort, Merge Sort, and Quick Sort with real-time visual animation and speed control.',
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

              {/* Arrow */}
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-all duration-300">
                <span>View project</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

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
