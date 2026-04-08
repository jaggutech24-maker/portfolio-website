export default function Projects() {
  const projects = [
    {
      year: '2024',
      title: 'Know Your Expense Tracker',
      tech: ['JavaScript', 'HTML', 'CSS'],
      desc: 'Designed and developed a mobile-responsive expense tracking application to help users manage personal finances. The project involved gathering functional requirements, creating a user-friendly interface, and implementing business logic for real-time calculations and data management.',
      color: 'bg-[#2d5a27]',
      textColor: 'text-white',
      tagColor: 'bg-[#E8A020] text-[#1a1a1a]',
    },
    {
      year: '2024',
      title: 'Art Gallery Management System',
      tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
      desc: 'Built a full-stack art gallery management system with features for gallery owners to manage artworks, exhibitions, and visitor records. Implemented secure database operations and a clean admin dashboard.',
      color: 'bg-[#E8A020]',
      textColor: 'text-[#1a1a1a]',
      tagColor: 'bg-[#1a1a1a] text-white',
    },
    {
      year: '2024',
      title: 'Sorting Visualizer',
      tech: ['React.js', 'Tailwind CSS'],
      desc: 'Interactive sorting algorithm visualizer built with React.js and Tailwind CSS. Supports multiple algorithms including Bubble Sort, Selection Sort, Merge Sort, and Quick Sort with real-time visual animation and speed control.',
      color: 'bg-[#1a1a1a]',
      textColor: 'text-white',
      tagColor: 'bg-[#2d5a27] text-white',
    },
  ]

  return (
    <section id="projects" className="bg-[#2d5a27] py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Background Tech Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-10">
        <svg className="absolute top-[20%] left-[10%] text-white animate-pulse" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
        <div className="absolute top-[40%] right-[10%] text-[#E8A020] text-7xl font-mono font-bold rotate-[15deg]">{'[]'}</div>
        <svg className="absolute bottom-[20%] left-[20%] text-white/80 animate-[spin_10s_linear_infinite_reverse]" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
        
        {/* NEW ELEMENTS */}
        <div className="absolute top-[10%] right-[40%] text-white/60 text-5xl font-mono min-w-[200px] -rotate-12">{'==='}</div>
        <svg className="absolute bottom-[10%] right-[25%] text-[#E8A020] animate-bounce" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>
        <svg className="absolute top-[60%] left-[5%] text-white/40" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
      </div>

      {/* Background text */}
      <div className="absolute left-0 bottom-8 pointer-events-none select-none opacity-10">
        <span className="font-playfair font-black text-[200px] text-white leading-none">WORK</span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
          <h2 className="font-playfair font-black text-5xl md:text-6xl text-white mb-4 md:mb-0">
            My Work
          </h2>
          <p className="text-white/60 text-sm max-w-xs font-inter">
            A selection of projects that showcase my skills in frontend development and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              className={`${proj.color} ${proj.textColor} p-8 rounded-sm relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}
            >
              {/* Year */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-medium opacity-60 font-inter">{proj.year}</span>
                <div className="flex gap-1">
                  {proj.tech.map(t => (
                    <span key={t} className={`${proj.tagColor} text-xs px-2 py-1 rounded-full font-medium`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Number */}
              <div className="text-7xl font-playfair font-black opacity-10 mb-2">
                0{i + 1}
              </div>

              {/* Title */}
              <h3 className="font-playfair font-black text-xl mb-4 leading-tight">
                {proj.title}
              </h3>

              {/* Desc */}
              <p className="text-sm leading-relaxed opacity-80 font-inter">
                {proj.desc}
              </p>

              {/* Bottom arrow */}
              <div className="mt-8 flex items-center gap-2 text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                <span>View project</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Skills used */}
        <div className="mt-20">
          <h3 className="text-white/60 text-sm uppercase tracking-widest mb-6 font-inter">Tech Stack</h3>
          <div className="flex flex-wrap gap-4">
            {[
              'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS',
              'PHP', 'MySQL', 'MongoDB', 'UI PATH', 'MS-CIT', 'C++'
            ].map(skill => (
              <span key={skill} className="border border-white/30 text-white text-sm px-4 py-2 rounded-full hover:border-[#E8A020] hover:text-[#E8A020] transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
