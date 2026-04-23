import { useEffect } from 'react'
import StarryBackground from './components/StarryBackground'
import CursorTrail from './components/CursorTrail'

export default function ResumePage() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0)
    
    // Automatically trigger PDF download
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
      <CursorTrail />
      
      {/* Back to Home Button */}
      <div className="fixed top-6 left-6 z-50">
        <a 
          href="https://jaggutech24-maker.github.io/portfolio-website/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.1)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Portfolio
        </a>
      </div>

      <div className="relative z-10 py-12 px-4 md:py-20 flex items-start justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl bg-white shadow-2xl flex flex-col md:flex-row"
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
                <a 
                  href="https://linkedin.com/in/jayeshkumarprajapati" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-green-700 font-medium hover:underline"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-green-600 w-5 flex justify-center shrink-0 mt-0.5">🔗</span>
                <a
                  href="https://jaggutech24-maker.github.io/portfolio-website/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-700 hover:underline break-all leading-tight"
                >
                  https://jaggutech24-maker.github.io/portfolio-website/
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
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">
                SKILLS
              </h2>
              <p className="text-xs text-gray-700 leading-relaxed">
                REST API , Agile Methodology , Responsive Web Design , Node.js , Unit Testing ,
                Continuous Integration , Adaptability , Collaboration
              </p>
              <p className="text-xs text-gray-700 leading-relaxed mt-1">
                Frontend &amp; Design : React JS , JavaScript , HTML , CSS , Tailwind , Responsive Web Design
              </p>
              <p className="text-xs text-gray-700 leading-relaxed mt-1">
                Backend &amp; Tools : Node.js , PHP , SQL , mySQL , REST API , Git , Unit Testing ,
                Continuous Integration , Agile Methodology
              </p>
              <p className="text-xs text-gray-700 leading-relaxed mt-1">
                Professional Skills : Effective Communication , Teamwork , Leadership , Time Management ,
                Critical Thinking , Project Management , Problem Solving , Adaptability , Collaboration ,
                C++ , UI Path , MS-CIT , Weight Lifting
              </p>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">
                LANGUAGES
              </h2>
              <p className="text-xs text-gray-700 leading-relaxed">
                English (Fluent/Professional Working Proficiency),<br />
                Hindi (Native/Bilingual Proficiency), Punjabi (Native/Bilingual Proficiency)
              </p>
            </div>
          </div>

          {/* RIGHT MAIN CONTENT */}
          <div className="flex-1 p-6 overflow-y-auto bg-white">
            {/* Summary */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">
                SUMMARY
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Front End and Web Developer with a strong foundation in modern web technologies. Proven
                track record in building responsive, user-focused applications like Art Gallery Management
                Systems and Expense Trackers by leveraging React, Node.js, and REST APIs. Skilled in Agile
                methodology, Git version control, and CI/CD pipelines; known for delivering scalable,
                high-quality code and maintaining performance through rigorous unit testing.
              </p>
            </section>

            {/* Work Experience */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">
                Work Experience
              </h2>

              {/* Job 1 */}
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

              {/* Job 2 */}
              <div className="mb-5">
                <h3 className="text-base font-bold text-gray-900">Social Media Manager &amp; Field Volunteer at NGO</h3>
                <p className="text-xs text-green-700 font-medium mb-1">
                  2024-01-01 – 2025-07-01 &nbsp;|&nbsp; Mumbai, Maharashtra
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Led and coordinated beach cleanup initiatives to promote environmental sustainability and community awareness.</li>
                  <li>Managed and developed content for the NGO’s Instagram and Facebook platforms, enhancing digital presence and audience engagement.</li>
                </ul>
              </div>
            </section>

            {/* Volunteering & Leadership */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">
                VOLUNTEERING &amp; LEADERSHIP
              </h2>
              <div className="mb-3">
                <h3 className="text-base font-bold text-gray-900">Field Volunteer at NGO</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-1">
                  <li>Led beach cleanup drives, promoting environmental awareness and community involvement.</li>
                  <li>Managed and created content for the NGO's Instagram and Facebook pages.</li>
                  <li>Assisted in organizing on-ground campaigns, handling logistics, and team coordination.</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest border-b-2 border-green-500 pb-1 mb-3">
                PROJECTS
              </h2>

              {/* Project 1 */}
              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">ART GALLERY MANAGEMENT SYSTEM</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-1">
                  <li>Developed an Art Gallery Management System using Node.js for the backend and REST APIs for database interaction, following Agile methodology for project management.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">KNOW YOUR EXPENSE – An expense tracker</h3>
                <p className="text-xs text-gray-500 mb-1">07/2020 – 05/2022</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Developed and deployed a responsive web-based expense tracker application. Managed the development lifecycle using Git with branch-based workflows and pull requests to ensure code quality.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">SORTING VISUALIZER</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-1">
                  <li>Built a responsive Sorting Visualizer using React JS and Tailwind CSS, managed with Git for version control, ensuring cross-browser compatibility and implementing unit testing.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Personal Portfolio Website</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-1">
                  <li>Developed a personal portfolio website to showcase technical projects and skills, deployed using GitHub Pages for high availability and performance.</li>
                </ul>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
