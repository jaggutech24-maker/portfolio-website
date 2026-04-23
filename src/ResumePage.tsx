import { motion } from 'framer-motion'
import { useEffect } from 'react'
import StarryBackground from './components/StarryBackground'

export default function ResumePage() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0)
    
    // Automatically trigger PDF download as well, as requested earlier
    const link = document.createElement('a')
    link.href = '/Jayesh_Kumar_Prajapati_Resume.pdf'
    link.download = 'Jayesh_Kumar_Prajapati_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-gray-900 font-sans relative">
      <StarryBackground />
      
      {/* Back to Home Button */}
      <div className="fixed top-6 left-6 z-50">
        <a 
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all text-xs font-bold uppercase tracking-widest"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Portfolio
        </a>
      </div>

      <div className="relative z-10 py-12 px-4 md:py-20 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-5xl bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row"
          style={{ border: '1px solid rgba(212,175,55,0.2)' }}
        >
          {/* LEFT SIDEBAR */}
          <div className="w-full md:w-64 flex-shrink-0 bg-white border-r border-gray-200 p-8">
            <div className="mb-8 border-b-2 border-green-600 pb-6">
              <h1 className="text-2xl font-black text-gray-900 leading-tight uppercase tracking-wide">
                JAYESH KUMAR<br />PRAJAPATI
              </h1>
            </div>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <span className="text-green-600 w-5 flex justify-center shrink-0">✉</span>
                <span className="break-all">jaggutech24@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <span className="text-green-600 w-5 flex justify-center shrink-0">📞</span>
                <span>+91 7822890807</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <span className="text-green-600 w-5 flex justify-center shrink-0 font-bold">in</span>
                <a href="https://linkedin.com/in/jayeshkumarprajapati" target="_blank" rel="noreferrer" className="text-green-700 font-medium hover:underline">LinkedIn</a>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-4">EDUCATION</h2>
              <div className="mb-4">
                <p className="text-xs font-bold text-gray-800">Bachelor of Science (Computer Science)</p>
                <p className="text-xs text-gray-700">Thakur Ramnarayan College</p>
                <p className="text-xs text-gray-600">CGPA: 8.8</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-4">SKILLS</h2>
              <p className="text-xs text-gray-700 leading-relaxed">React JS, Node.js, JavaScript, HTML/CSS, Tailwind, SQL, REST API, Git, Agile</p>
            </div>
          </div>

          {/* RIGHT MAIN CONTENT */}
          <div className="flex-1 p-8 md:p-12">
            <section className="mb-8">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-4">SUMMARY</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Front End and Web Developer with a strong foundation in modern web technologies. Proven track record in building responsive, user-focused applications. Skilled in Agile methodology, Git version control, and CI/CD pipelines.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-4">WORK EXPERIENCE</h2>
              <div className="mb-6">
                <h3 className="text-base font-bold text-gray-900">Graphic Designer at Premium Peti</h3>
                <p className="text-xs text-green-700 font-medium mb-2">2025 – 2026</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Designed visually compelling graphics and branding materials for digital and print platforms.</li>
                  <li>Collaborated with the marketing team to maintain consistent brand identity.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-4">PROJECTS</h2>
              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Art Gallery Management System</h3>
                <p className="text-sm text-gray-700 mt-1">Developed using Node.js and REST APIs for database interaction.</p>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Sorting Visualizer</h3>
                <p className="text-sm text-gray-700 mt-1">Built a responsive Sorting Visualizer using React JS and Tailwind CSS.</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
