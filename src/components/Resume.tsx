export default function Resume() {
  return (
    <section id="resume" className="bg-[#f5f0e8] py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Background Tech Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.05] text-[#2d5a27]">
        <div className="absolute top-[10%] left-[10%] text-5xl font-mono font-bold rotate-[-30deg]">{'// Code'}</div>
        <svg className="absolute bottom-[30%] left-[8%] animate-[spin_20s_linear_infinite]" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
        <div className="absolute top-[40%] right-[30%] text-6xl font-bold font-mono text-[#E8A020] rotate-45">{'&&'}</div>
        
        {/* NEW ELEMENTS */}
        <div className="absolute top-[70%] left-[45%] text-7xl font-mono opacity-50 rotate-[20deg]">{';'}</div>
        <svg className="absolute top-[20%] right-[15%] animate-pulse text-[#E8A020]" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
        <svg className="absolute bottom-[10%] right-[10%] opacity-60 animate-[spin_12s_linear_infinite_reverse]" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        <div className="absolute top-[5%] left-[50%] text-3xl font-mono text-[#2d5a27]">{'{{}}'}</div>
      </div>

      {/* Background RESUME text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <div className="flex flex-col items-end">
          <span className="font-playfair font-black text-8xl md:text-[140px] leading-none text-transparent" style={{WebkitTextStroke: '2px rgba(45,90,39,0.12)'}}>RESUME</span>
          <span className="font-playfair font-black text-7xl md:text-[110px] leading-none text-transparent" style={{WebkitTextStroke: '2px rgba(45,90,39,0.08)'}}>RESUME</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Column */}
          <div>
            {/* Education */}
            <div className="mb-12 bg-white rounded-2xl shadow-md border border-[#e8e0d0] p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-[#E8A020] rounded-full"></div>
                <h2 className="font-playfair font-black text-4xl text-[#1a1a1a]">Education</h2>
              </div>
              <div className="relative pl-4">
                <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-[#E8A020]/40"></div>
                {[
                  {
                    years: 'Aug 2022 – Aug 2025',
                    school: 'Thakurramnarayan College of Arts & Commerce',
                    field: 'Bachelor of Science in Computer Science',
                    detail: 'CGPA: 8.8 | Mumbai, Maharashtra',
                    icon: '🎓'
                  },
                  {
                    years: 'Jul 2020 – May 2022',
                    school: 'Matruchhaya College of Science & Commerce',
                    field: 'HSC',
                    detail: 'Percentage: 71.50% | Mumbai, Maharashtra',
                    icon: '📚'
                  },
                  {
                    years: 'Jul 2020 – May 2022',
                    school: 'St. Thomas High School (Mira Road)',
                    field: 'SSC',
                    detail: 'Percentage: 80.20% | Mumbai, Maharashtra',
                    icon: '🏫'
                  },
                ].map((edu, i) => (
                  <div key={i} className="mb-6 relative">
                    <div className="absolute -left-[18px] top-3 w-3 h-3 bg-[#E8A020] rotate-45"></div>
                    <div className="ml-4 bg-[#f9f6f0] border border-[#e8e0d0] rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span>{edu.icon}</span>
                        <span className="text-[#2d5a27] font-bold text-xs font-inter">{edu.years}</span>
                      </div>
                      <h4 className="font-bold text-[#1a1a1a] text-sm mt-1">{edu.school}</h4>
                      <p className="text-[#555] text-xs">{edu.field}</p>
                      <p className="text-[#E8A020] font-semibold text-xs mt-1">{edu.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-[#E8A020] p-8 rounded-sm">
              <h2 className="font-playfair font-black text-4xl text-[#1a1a1a] mb-8">Experience</h2>
              <div className="relative pl-4">
                <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-[#1a1a1a]/20"></div>
                {[
                  {
                    year: 'Nov 2024 – May 2025',
                    title: 'Frontend Developer',
                    company: 'OceanOwe Foundation – Mira-Bhayandar, Vasai Virar, Maharashtra',
                    desc: 'Led development of responsive web pages and interactive interfaces for NGO campaigns using HTML, CSS, JS, and React.js. Collaborated with project managers and stakeholders to understand business requirements. Analyzed user engagement metrics resulting in a 15% increase in engagement.'
                  },
                  {
                    year: '2020 – Present',
                    title: 'Social Media Manager & Field Volunteer',
                    company: 'NGO – Mumbai',
                    desc: 'Led beach cleanup drives promoting environmental awareness. Managed and created content for NGO\'s Instagram and Facebook pages. Assisted in organizing on-ground campaigns, handling logistics and team coordination.'
                  },
                ].map((exp, i) => (
                  <div key={i} className="mb-8 relative">
                    <div className="absolute -left-[18px] top-1.5 w-3 h-3 bg-[#1a1a1a] rotate-45"></div>
                    <div className="ml-4">
                      <span className="text-[#1a1a1a]/70 font-bold text-sm font-inter">{exp.year}</span>
                      <h4 className="font-bold text-[#1a1a1a] text-base mt-1">{exp.title}</h4>
                      <p className="text-[#1a1a1a]/70 text-xs mb-2">{exp.company}</p>
                      <p className="text-[#1a1a1a]/80 text-sm leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trait badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {['#Creativity', '#Communication', '#Detail-oriented', '#Adaptability'].map(tag => (
                  <span key={tag} className="bg-[#1a1a1a] text-white text-xs font-medium px-4 py-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Technical Skills */}
            <div className="mb-12 bg-[#2d5a27] rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-[#E8A020] rounded-full"></div>
                <h2 className="font-playfair font-black text-4xl text-white">Technical Skills</h2>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {/* Coding skills */}
                <div className="bg-white/10 border border-white/20 rounded-xl p-5">
                  <h4 className="font-bold text-[#E8A020] text-sm mb-4 uppercase tracking-wide">Coding Skills</h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'PHP', 'SQL', 'Tailwind', 'C++'].map(skill => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#E8A020] rounded-full"></div>
                        <span className="text-white/90 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Databases */}
                <div className="bg-white/10 border border-white/20 rounded-xl p-5">
                  <h4 className="font-bold text-[#E8A020] text-sm mb-4 uppercase tracking-wide">Databases</h4>
                  <div className="flex flex-col gap-3">
                    {['MongoDB', 'MySQL', 'LocalStorage'].map(db => (
                      <div key={db} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <span className="text-white/90 text-sm">{db}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other skill badges */}
              <div>
                <h4 className="font-bold text-[#E8A020] text-sm mb-3 uppercase tracking-wide">Other Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'User Research', 'People Management', 'Cross Browser Compatibility',
                    'Performance Optimisation', 'Responsive Web Design', 'Requirements Gathering',
                    'Business Process Modeling', 'Stakeholder Management', 'Data Analysis',
                    'Data Visualization'
                  ].map(skill => (
                    <span key={skill} className="bg-white/10 border border-white/30 text-white/90 text-xs px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Activities / Achievements */}
            <div className="bg-[#1a1a1a] rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-[#E8A020] rounded-full"></div>
                <h2 className="font-playfair font-black text-4xl text-white">Achievements</h2>
              </div>
              <div className="relative pl-4">
                <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-[#E8A020]/30"></div>
                {[
                  {
                    year: 'May 2023',
                    title: 'Business Analytics with Excel',
                    company: 'Simplilearn x Microsoft',
                    desc: 'Proficient in VLOOKUP, HLOOKUP, PivotTables, Power Query. Skilled in data cleaning, transformation, and modeling. Experienced in creating data visualizations and dashboards.',
                    icon: '📊'
                  },
                  {
                    year: '2023',
                    title: 'Weightlifting – Gold Medal 🥇',
                    company: 'Mira Road Championship',
                    desc: 'Won Gold in Under 70Kg Category at Mira Road weightlifting championship.',
                    icon: '🏋️'
                  },
                ].map((ach, i) => (
                  <div key={i} className="mb-8 relative">
                    <div className="absolute -left-[18px] top-1.5 w-3 h-3 bg-[#E8A020] rotate-45"></div>
                    <div className="ml-4 bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{ach.icon}</span>
                        <span className="text-[#E8A020] font-bold text-sm font-inter">{ach.year}</span>
                      </div>
                      <h4 className="font-bold text-white text-base mt-1">{ach.title}</h4>
                      <p className="text-white/50 text-xs mb-2">{ach.company}</p>
                      <p className="text-white/80 text-sm leading-relaxed">{ach.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
