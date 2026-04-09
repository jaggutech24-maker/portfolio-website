import profileImg from '../assets/images/profile.jpg'

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen bg-[#2d5a27] relative overflow-hidden flex flex-col">
      {/* Background Tech Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.08]">
        {/* Code Brackets */}
        <div className="absolute top-20 left-[10%] text-white text-6xl font-mono font-bold animate-pulse rotate-12">{'{ }'}</div>
        <div className="absolute bottom-40 right-[15%] text-[#E8A020] text-7xl font-mono font-bold -rotate-12">{'</>'}</div>
        
        {/* React Logo */}
        <svg className="absolute top-1/3 right-[10%] text-white animate-[spin_10s_linear_infinite]" width="80" height="80" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>

        {/* Binary / Data */}
        <div className="absolute top-1/2 left-[5%] text-white/50 text-xl font-mono leading-tight whitespace-pre -rotate-90 origin-left">
          10110<br/>01001
        </div>

        {/* Gear / Process */}
        <svg className="absolute bottom-20 left-[20%] text-white animate-[spin_15s_linear_infinite]" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>

        {/* JS Box */}
        <div className="absolute top-[15%] right-[30%] border-2 border-[#E8A020] text-[#E8A020] font-bold text-2xl p-2 rounded-md rotate-12">
          JS
        </div>

        {/* Database Node */}
        <svg className="absolute bottom-[40%] left-[30%] text-white/80" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
        
        {/* NEW ELEMENTS */}
        <div className="absolute top-[10%] left-[50%] text-white/80 text-4xl font-mono animate-pulse">{'$_'}</div>
        <svg className="absolute bottom-[25%] right-[25%] text-[#E8A020]/80" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
        <svg className="absolute top-[60%] right-[30%] text-white/40" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
      </div>

      {/* Main hero content */}
      <div className="flex-1 flex flex-col md:flex-row items-stretch pt-16 relative">
        {/* Left: Photo */}
        <div className="relative md:w-2/5 flex items-end justify-center md:justify-start">
          <div className="relative z-10 ml-0 md:ml-12 mt-12 md:mt-0">
            <div className="w-64 h-80 md:w-72 md:h-[420px] relative">
              <div className="absolute inset-0 bg-[#E8A020] rounded-sm translate-x-4 translate-y-4"></div>
              <img
                src={profileImg}
                alt="Jayesh Kumar Prajapati"
                className="relative z-10 w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>

          {/* Bio text bottom left */}
          <div className="absolute bottom-0 left-0 md:left-12 p-6 max-w-xs">
            <p className="text-white/70 text-xs leading-relaxed">
              B.Sc. CS Graduate · Frontend Developer<br />
              Built responsive web apps at OceanOwe Foundation,<br />
              boosting engagement by 15%. React · JavaScript · SQL.
            </p>
          </div>
        </div>

        {/* Right: Title */}
        <div className="md:w-3/5 flex flex-col justify-center items-start px-8 md:px-12 py-12 relative">
          {/* Decorative stars */}
          <div className="absolute top-16 right-8 text-[#E8A020]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 0L19 12L32 16L19 20L16 32L13 20L0 16L13 12L16 0Z"/>
            </svg>
          </div>
          <div className="absolute top-32 right-20 text-[#E8A020]">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 0L19 12L32 16L19 20L16 32L13 20L0 16L13 12L16 0Z"/>
            </svg>
          </div>
          <div className="absolute top-12 left-4 text-[#E8A020]">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 0L19 12L32 16L19 20L16 32L13 20L0 16L13 12L16 0Z"/>
            </svg>
          </div>

          {/* Stacked PORTFOLIO text */}
          <div className="relative mb-8">
            <h1 className="text-white font-playfair font-black text-6xl md:text-8xl leading-none tracking-tight">
              PORTFOLIO
            </h1>
            <div className="mt-1">
              <p className="font-playfair font-black text-5xl md:text-7xl leading-none tracking-tight text-transparent" style={{WebkitTextStroke: '2px rgba(232,160,32,0.5)'}}>
                DEVELOPER
              </p>
              <p className="font-playfair font-black text-4xl md:text-6xl leading-none tracking-tight text-transparent" style={{WebkitTextStroke: '2px rgba(232,160,32,0.35)'}}>
                DESIGNER
              </p>
              <p className="font-playfair font-black text-3xl md:text-5xl leading-none tracking-tight text-transparent" style={{WebkitTextStroke: '2px rgba(232,160,32,0.2)'}}>
                CODER
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mb-8">
            {/* LinkedIn */}
            <a
              href="https://lnk.ink/jayeshprajapati"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="group flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/30 bg-white/5 hover:bg-[#0077B5] hover:border-[#0077B5] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,119,181,0.5)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:jaggutech24@gmail.com"
              title="jaggutech24@gmail.com"
              className="group flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/30 bg-white/5 hover:bg-[#E8A020] hover:border-[#E8A020] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(232,160,32,0.5)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>

            {/* Location */}
            <span className="text-white/70 text-sm font-inter flex items-center gap-1">
              📍 Mira Road, Maharashtra
            </span>
          </div>
        </div>
      </div>

      {/* Bottom black bar with scroll button */}
      <div className="bg-[#1a1a1a] py-6 flex justify-center items-center relative">
        <button
          onClick={() => scrollTo('about')}
          className="bg-[#E8A020] text-[#1a1a1a] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#d4911a] transition-all hover:scale-105 shadow-lg"
        >
          Scroll down ↓
        </button>
      </div>
    </section>
  )
}
