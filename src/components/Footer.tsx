export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1a1a1a] py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 0L12.5 7.5H20L14 12L16.5 20L10 15.5L3.5 20L6 12L0 7.5H7.5L10 0Z" fill="#E8A020"/>
            </svg>
            <span className="text-white font-playfair font-bold text-xl">Jayesh Kumar Prajapati</span>
          </div>

          {/* Nav */}
          <div className="flex gap-6">
            {[
              { id: 'about', label: 'About' },
              { id: 'resume', label: 'Resume' },
              { id: 'projects', label: 'Work' },
              { id: 'contact', label: 'Contact' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white/60 text-sm hover:text-[#E8A020] transition-colors font-inter"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3">
            <a
              href="mailto:jaggutech24@gmail.com"
              aria-label="Email Jayesh"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#E8A020] hover:text-[#E8A020] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <a
              href="https://lnk.ink/jayeshprajapati"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#E8A020] hover:text-[#E8A020] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="tel:+917822890807"
              aria-label="Call Jayesh"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#E8A020] hover:text-[#E8A020] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.46-1.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/40 text-sm font-inter tracking-wide">
            &copy; 2025 Jayesh Kumar Prajapati, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
