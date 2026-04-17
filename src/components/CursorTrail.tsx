import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorTrail() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 })
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)

  // Fast, tight spring for the inner dot
  const springConfigDot = { damping: 25, stiffness: 400, mass: 0.2 }
  const cursorX = useSpring(mouseX, springConfigDot)
  const cursorY = useSpring(mouseY, springConfigDot)

  // Slower, bouncy spring for the outer trailing ring
  const springConfigRing = { damping: 30, stiffness: 150, mass: 0.8 }
  const cursorXDelayed = useSpring(mouseX, springConfigRing)
  const cursorYDelayed = useSpring(mouseY, springConfigRing)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [mouseX, mouseY])

  // Don't render the physical cursor on mobile devices
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <>
      {/* Brittany Chiang Style Glow Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212,175,55,0.06), transparent 80%)`,
        }}
      />

      {/* Physics-based Antigravity Fluid Cursor (Hidden on mobile) */}
      {!isMobile && (
        <>
          <motion.div
            className="pointer-events-none fixed top-0 left-0 z-50 w-2.5 h-2.5 bg-[#D4AF37] rounded-full mix-blend-screen shadow-[0_0_10px_rgba(212,175,55,0.8)]"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%'
            }}
          />
          <motion.div
            className="pointer-events-none fixed top-0 left-0 z-40 w-10 h-10 border-[1.5px] border-[#D4AF37]/50 rounded-full mix-blend-screen"
            style={{
              x: cursorXDelayed,
              y: cursorYDelayed,
              translateX: '-50%',
              translateY: '-50%'
            }}
          />
        </>
      )}
    </>
  )
}
