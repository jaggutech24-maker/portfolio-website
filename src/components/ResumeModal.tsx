import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Jayesh_Kumar_Prajapati_Resume.pdf'
    link.download = 'Jayesh_Kumar_Prajapati_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto py-6 px-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-5xl mx-auto flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Resume Preview
              </span>
              <div className="flex items-center gap-3">
                {/* Download button */}
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37]/25 hover:border-[#D4AF37] hover:shadow-[0_0_16px_rgba(212,175,55,0.3)]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </button>
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all duration-200"
                  aria-label="Close resume"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Resume Paper */}
            <div
              className="overflow-y-auto rounded-xl shadow-2xl"
              style={{ border: '1px solid rgba(212,175,55,0.2)' }}
            >
              {/* The white resume document */}
              <div className="bg-white text-gray-900 flex flex-col md:flex-row min-h-full font-sans">

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
                      <span className="break-all">jaggutech24@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="text-green-600 w-5 flex justify-center shrink-0">📞</span>
                      <span>+91 7822890807</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="text-green-600 w-5 flex justify-center shrink-0">📍</span>
                      <span>Mumbai, Maharashtra</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="text-green-600 w-5 flex justify-center shrink-0 font-bold">in</span>
                      <a href="https://linkedin.com/in/jayeshkumarprajapati" target="_blank" rel="noreferrer" className="text-green-700 font-medium hover:underline">
                        LinkedIn
                      </a>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-green-600 w-5 flex justify-center shrink-0 mt-0.5">🔗</span>
                      <a href="https://jaggutech24-maker.github.io/portfolio-website/" target="_blank" rel="noreferrer" className="text-green-700 hover:underline break-all leading-tight">
                        Portfolio
                      </a>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-5">
                    <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">EDUCATION</h2>
                    <div className="mb-3">
                      <p className="text-xs font-bold text-gray-800 uppercase">High School</p>
                      <p className="text-xs text-gray-700">ST.THOMAS HIGH SCHOOL (Mira road)</p>
                      <p className="text-xs text-gray-600">Passout: March 2020</p>
                      <p className="text-xs text-gray-600">Percentage: 80.20%</p>
                    </div>
                    <div className="mb-3">
                      <p className="text-xs font-bold text-gray-800">Higher Secondary (Science)</p>
                      <p className="text-xs text-gray-700 uppercase">MATRUCHHAYA COLLEGE OF SCIENCE AND COMMERCE</p>
                      <p className="text-xs text-gray-600">05/2022 | Mumbai, Maharashtra</p>
                      <p className="text-xs text-gray-600">Percentage: 71.50%</p>
                    </div>
                    <div className="mb-3">
                      <p className="text-xs font-bold text-gray-800">Bachelor of Science (Computer Science)</p>
                      <p className="text-xs text-gray-700 uppercase">THAKUR RAMNARAYAN COLLEGE OF ARTS AND COMMERCE</p>
                      <p className="text-xs text-gray-600">05/2025 | Mumbai, Maharashtra</p>
                      <p className="text-xs text-gray-600">CGPA: 8.8</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-5">
                    <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">SKILLS</h2>
                    <p className="text-xs text-gray-700 leading-relaxed">REST API, Agile Methodology, Responsive Web Design, Node.js, Unit Testing, Continuous Integration, Adaptability, Collaboration</p>
                    <p className="text-xs text-gray-700 leading-relaxed mt-1">
                      <span className="font-semibold">Frontend &amp; Design:</span> React JS, JavaScript, HTML, CSS, Tailwind, Responsive Web Design
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed mt-1">
                      <span className="font-semibold">Backend &amp; Tools:</span> Node.js, PHP, SQL, MySQL, REST API, Git, Unit Testing, CI/CD, Agile
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed mt-1">
                      <span className="font-semibold">Professional:</span> Communication, Teamwork, Leadership, Time Management, Critical Thinking, Problem Solving, C++, UI Path, MS-CIT
                    </p>
                  </div>

                  {/* Languages */}
                  <div>
                    <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">LANGUAGES</h2>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      English (Fluent/Professional Working Proficiency),<br />
                      Hindi (Native/Bilingual Proficiency),<br />
                      Punjabi (Native/Bilingual Proficiency)
                    </p>
                  </div>
                </div>

                {/* RIGHT MAIN CONTENT */}
                <div className="flex-1 p-6">
                  {/* Summary */}
                  <section className="mb-6">
                    <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">SUMMARY</h2>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Front End and Web Developer with a strong foundation in modern web technologies. Proven track record in building responsive, user-focused applications like Art Gallery Management Systems and Expense Trackers by leveraging React, Node.js, and REST APIs. Skilled in Agile methodology, Git version control, and CI/CD pipelines; known for delivering scalable, high-quality code and maintaining performance through rigorous unit testing.
                    </p>
                  </section>

                  {/* Work Experience */}
                  <section className="mb-6">
                    <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">WORK EXPERIENCE</h2>
                    <div className="mb-5">
                      <h3 className="text-base font-bold text-gray-900">Graphic Designer at Premium Peti</h3>
                      <p className="text-xs text-green-700 font-medium mb-1">Aug 2025 – Feb 2026 &nbsp;|&nbsp; Mumbai, Maharashtra</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        <li>Designed visually compelling graphics and branding materials for digital and print platforms, including social media creatives, packaging, and promotional campaigns.</li>
                        <li>Collaborated with the marketing team to maintain consistent brand identity across all channels.</li>
                        <li>Improved audience engagement by creating eye-catching designs, contributing to increased customer interaction and brand visibility.</li>
                      </ul>
                    </div>
                    <div className="mb-5">
                      <h3 className="text-base font-bold text-gray-900">Social Media Manager &amp; Field Volunteer — NGO</h3>
                      <p className="text-xs text-green-700 font-medium mb-1">Jan 2024 – Jul 2025 &nbsp;|&nbsp; Mumbai, Maharashtra</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        <li>Led and coordinated beach cleanup initiatives to promote environmental sustainability and community awareness.</li>
                        <li>Managed and developed content for the NGO's Instagram and Facebook platforms, enhancing digital presence and audience engagement.</li>
                      </ul>
                    </div>
                  </section>

                  {/* Volunteering */}
                  <section className="mb-6">
                    <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">VOLUNTEERING &amp; LEADERSHIP</h2>
                    <div className="mb-3">
                      <h3 className="text-base font-bold text-gray-900">Field Volunteer — NGO</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-1">
                        <li>Led beach cleanup drives, promoting environmental awareness and community involvement.</li>
                        <li>Managed and created content for the NGO's Instagram and Facebook pages.</li>
                        <li>Assisted in organizing on-ground campaigns, handling logistics and team coordination.</li>
                      </ul>
                    </div>
                  </section>

                  {/* Projects */}
                  <section className="mb-6">
                    <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">PROJECTS</h2>
                    <div className="mb-4">
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Art Gallery Management System</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-1">
                        <li>Developed an Art Gallery Management System using Node.js for the backend and REST APIs for database interaction, following Agile methodology for project management.</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Know Your Expense – Expense Tracker</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        <li>Developed and deployed a responsive web-based expense tracker application. Managed the development lifecycle using Git with branch-based workflows and pull requests.</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Sorting Visualizer</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-1">
                        <li>Built a responsive Sorting Visualizer using React JS and Tailwind CSS, managed with Git, ensuring cross-browser compatibility and implementing unit testing to verify algorithm accuracy.</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Personal Portfolio Website</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-1">
                        <li>Developed a personal portfolio website to showcase technical projects and skills, deployed using GitHub Pages for high availability and performance.</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
