import { motion } from 'framer-motion'
import { useEffect } from 'react'
import StarryBackground from './components/StarryBackground'

export default function ResumePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    
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
          href="/#/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.1)]"
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
          className="w-full max-w-4xl bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row"
          style={{ border: '1px solid rgba(212,175,55,0.2)' }}
        >
          {/* LEFT SIDEBAR */}
          <div className="w-full md:w-64 flex-shrink-0 bg-white border-r border-gray-200 p-6">
            {/* Name */}
            <div className="mb-6 border-b-2 border-green-600 pb-4">
              <h1 className="text-2xl font-black text-gray-900 leading-tight uppercase tracking-wide">
                JAYESH KUMAR<br />PRAJAPATI
              </h1>
            </div>

            {/* Contact */}
            <div className="mb-5 space-y-2">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <span className="text-green-600 w-5 flex justify-center shrink-0">✉</span>
                <span className="break-all text-xs">jaggutech24@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <span className="text-green-600 w-5 flex justify-center shrink-0">📞</span>
                <span className="text-xs">+91 7822890807</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <span className="text-green-600 w-5 flex justify-center shrink-0">📍</span>
                <span className="text-xs">Mumbai, Maharashtra</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <span className="text-green-600 w-5 flex justify-center shrink-0 font-bold">in</span>
                <a 
                  href="https://linkedin.com/in/jayeshkumarprajapati" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-green-700 font-medium hover:underline text-xs"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Education */}
            <div className="mb-5">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">
                EDUCATION
              </h2>
              <div className="mb-3">
                <p className="text-xs font-bold text-gray-800 uppercase">High School</p>
                <p className="text-[10px] text-gray-700 uppercase">ST.THOMAS HIGH SCHOOL</p>
                <p className="text-[10px] text-gray-600">Passout: March 2020 | 80.20%</p>
              </div>
              <div className="mb-3">
                <p className="text-xs font-bold text-gray-800">Higher Secondary (Science)</p>
                <p className="text-[10px] text-gray-700 uppercase leading-tight">MATRUCHHAYA COLLEGE OF SCIENCE</p>
                <p className="text-[10px] text-gray-600">05/2022 | 71.50%</p>
              </div>
              <div className="mb-3">
                <p className="text-xs font-bold text-gray-800">Bachelor of Science (CS)</p>
                <p className="text-[10px] text-gray-700 uppercase leading-tight">THAKUR RAMNARAYAN COLLEGE</p>
                <p className="text-[10px] text-gray-600">05/2025 | CGPA: 8.8</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-5">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">
                SKILLS
              </h2>
              <p className="text-[10px] text-gray-700 leading-relaxed">
                REST API, Agile, Responsive Design, Node.js, Unit Testing, CI/CD, Adaptability, Collaboration
              </p>
              <p className="text-[10px] text-gray-700 leading-relaxed mt-1">
                <span className="font-bold">Frontend:</span> React JS, JavaScript, HTML, CSS, Tailwind
              </p>
              <p className="text-[10px] text-gray-700 leading-relaxed mt-1">
                <span className="font-bold">Backend:</span> Node.js, PHP, SQL, MySQL
              </p>
              <p className="text-[10px] text-gray-700 leading-relaxed mt-1">
                <span className="font-bold">Pro:</span> Teamwork, Leadership, Project Mgmt, Problem Solving, C++, UI Path
              </p>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">
                LANGUAGES
              </h2>
              <p className="text-[10px] text-gray-700 leading-relaxed">
                English (Fluent), Hindi (Native), Punjabi (Native)
              </p>
            </div>
          </div>

          {/* RIGHT MAIN CONTENT */}
          <div className="flex-1 p-6 md:p-8 bg-white">
            {/* Summary */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">
                SUMMARY
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Front End and Web Developer with a strong foundation in modern web technologies. Proven track record in building responsive, user-focused applications like Art Gallery Management Systems and Expense Trackers by leveraging React, Node.js, and REST APIs. Skilled in Agile methodology, Git version control, and CI/CD pipelines; known for delivering scalable, high-quality code and maintaining performance through rigorous unit testing.
              </p>
            </section>

            {/* Work Experience */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">
                Work Experience
              </h2>

              <div className="mb-5">
                <h3 className="text-base font-bold text-gray-900">Graphic Designer at Premium Peti</h3>
                <p className="text-xs text-green-700 font-medium mb-1">
                  2025-08-01 – 2026-02-01 &nbsp;|&nbsp; Mumbai, Maharashtra
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Designed visually compelling graphics and branding materials for digital and print platforms, including social media creatives, packaging, and promotional campaigns.</li>
                  <li>Collaborated with the marketing team to maintain consistent brand identity across all channels.</li>
                  <li>Improved audience engagement by creating eye-catching designs, contributing to increased customer interaction and brand visibility.</li>
                </ul>
              </div>

              <div className="mb-5">
                <h3 className="text-base font-bold text-gray-900">Social Media Manager & Field Volunteer — NGO</h3>
                <p className="text-xs text-green-700 font-medium mb-1">
                  2024-01-01 – 2025-07-01 &nbsp;|&nbsp; Mumbai, Maharashtra
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Led and coordinated beach cleanup initiatives to promote environmental sustainability and community awareness.</li>
                  <li>Managed and developed content for the NGO’s Instagram and Facebook platforms, enhancing digital presence and audience engagement.</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">
                PROJECTS
              </h2>

              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">ART GALLERY MANAGEMENT SYSTEM</h3>
                <p className="text-sm text-gray-700 mt-1">Developed an Art Gallery Management System using Node.js for the backend and REST APIs for database interaction, following Agile methodology for project management.</p>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">KNOW YOUR EXPENSE – Expense Tracker</h3>
                <p className="text-sm text-gray-700 mt-1">Developed and deployed a responsive web-based expense tracker application. Managed the development lifecycle using Git with branch-based workflows and pull requests.</p>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">SORTING VISUALIZER</h3>
                <p className="text-sm text-gray-700 mt-1">Built a responsive Sorting Visualizer using React JS and Tailwind CSS, ensuring cross-browser compatibility and implementing unit testing.</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
