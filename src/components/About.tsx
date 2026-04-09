export default function About() {
  return (
    <section id="about" className="bg-[#f5f0e8] py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Background Tech Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.05] text-[#2d5a27]">
        <svg className="absolute top-40 right-[15%] animate-[spin_15s_linear_infinite]" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="12"></line><line x1="22" y1="8.5" x2="12" y2="12"></line><line x1="2" y1="8.5" x2="12" y2="12"></line></svg>
        <div className="absolute top-1/3 left-[5%] text-6xl font-mono font-bold rotate-12">{'<div/>'}</div>
        <svg className="absolute bottom-[20%] left-[10%] animate-pulse" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
        <div className="absolute bottom-[10%] right-[10%] text-8xl font-mono font-bold text-[#E8A020] -rotate-12">{'}'}</div>

        {/* NEW ELEMENTS */}
        <div className="absolute top-[10%] left-[40%] text-5xl font-mono opacity-60">{'/*'}</div>
        <svg className="absolute bottom-[40%] right-[5%] animate-[spin_10s_linear_infinite]" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
        <svg className="absolute top-[60%] left-[50%] opacity-50" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M2 12h4l2-9 5 18 3-9h6" /></svg>
        <div className="absolute top-[5%] right-[40%] text-[#E8A020] text-3xl font-mono rotate-12">{'()'}</div>
      </div>

      {/* Second Navbar strip */}
      <div className="max-w-6xl mx-auto">

        {/* Hello section */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Left: Hello text */}
          <div className="md:w-1/2 bg-white rounded-2xl shadow-md border border-[#e8e0d0] p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-10 bg-[#E8A020] rounded-full"></div>
              <h2 className="font-playfair font-black text-5xl md:text-6xl text-[#1a1a1a] leading-tight">
                Hello,<br />
                I'm Jayesh!
              </h2>
            </div>
            <p className="text-[#555] text-base leading-relaxed mb-8 font-inter">
              I'm a recent B.Sc. Computer Science graduate with a strong foundation in core computer science concepts.
              I have hands-on experience building clean, responsive, and user-focused applications using modern technologies.
              I bring a sharp eye for design, a focus on performance optimization, and a commitment to writing scalable and
              maintainable code. Outside of technology, my discipline in weightlifting reflects the consistency, focus, and
              dedication I apply to my work.
            </p>
            <a
              href="https://lnk.ink/jayeshprajapati"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#E8A020] text-[#1a1a1a] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#E8A020] transition-colors group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              lnk.ink/jayeshprajapati
            </a>
          </div>

          {/* Right: Profile card */}
          <div className="md:w-1/2 relative">
            <div className="relative">
              {/* Profile image with green bg */}
              <div className="relative bg-[#2d5a27] p-4 rounded-sm w-fit ml-auto">
                <img
                  src="images/about-profile.png"
                  alt="Jayesh Kumar Prajapati"
                  className="w-56 h-64 object-cover object-top rounded-sm"
                />
                {/* Floating badges */}
                <div className="absolute -left-16 top-8 bg-[#E8A020] text-[#1a1a1a] px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  B.Sc. CS Graduate
                </div>
                <div className="absolute -right-6 top-1/2 bg-[#E8A020] text-[#1a1a1a] px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  Frontend Dev
                </div>
              </div>

              {/* Contact card */}
              <div className="bg-[#1a1a1a] text-white p-6 mt-4 rounded-sm">
                <h3 className="font-playfair font-bold text-xl mb-4">Contact</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#E8A020]">📍</span>
                    <span>Mira Road (E), Palghar, Maharashtra</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#E8A020]">✉️</span>
                    <a href="mailto:jaggutech24@gmail.com" className="hover:text-[#E8A020] transition-colors">
                      jaggutech24@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#E8A020]">📞</span>
                    <a href="tel:+917822890807" className="hover:text-[#E8A020] transition-colors">
                      +91 7822890807
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths */}
        <div className="mt-20 bg-[#2d5a27] rounded-2xl shadow-lg p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-[#E8A020] rounded-full"></div>
            <h3 className="font-playfair font-black text-3xl text-white">Strengths</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Project Management & Problem Solving', desc: 'Possess strong project management and problem-solving skills', icon: '🎯' },
              { title: 'Teamwork and Leadership', desc: 'Capable of effective teamwork and leadership', icon: '🤝' },
              { title: 'Time Management & Critical Thinking', desc: 'Exhibit time management and critical thinking abilities', icon: '⏱️' },
              { title: 'Effective Communication', desc: 'Strong communication skills with a focus on professionalism', icon: '💬' },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:bg-white/20 transition-all duration-300">
                <span className="text-2xl mb-3 block">{s.icon}</span>
                <h4 className="font-semibold text-white text-sm mb-2">{s.title}</h4>
                <p className="text-white/70 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages & Hobbies */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Languages */}
          <div className="bg-white rounded-2xl shadow-md border border-[#e8e0d0] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[#E8A020] rounded-full"></div>
              <h3 className="font-playfair font-black text-3xl text-[#1a1a1a]">Languages</h3>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { lang: 'English', level: 'Native', dots: 5 },
                { lang: 'Hindi', level: 'Native', dots: 5 },
                { lang: 'Punjabi', level: 'Intermediate', dots: 3 },
              ].map((l) => (
                <div key={l.lang} className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#1a1a1a] text-sm">{l.lang}</p>
                    <p className="text-[#888] text-xs">{l.level}</p>
                  </div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map(d => (
                      <div key={d} className={`w-4 h-4 rounded-full border-2 ${d <= l.dots ? 'bg-[#E8A020] border-[#E8A020]' : 'bg-transparent border-[#ddd]'}`}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="bg-[#1a1a1a] rounded-2xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[#E8A020] rounded-full"></div>
              <h3 className="font-playfair font-black text-3xl text-white">Hobbies & Interests</h3>
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
                <div key={h.label} className="flex flex-col items-center gap-2 bg-white/10 border border-white/20 p-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                  <span className="text-2xl">{h.icon}</span>
                  <span className="text-white/80 text-xs text-center font-inter">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
