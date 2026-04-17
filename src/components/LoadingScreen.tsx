import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onDone: () => void
  onFadeStart?: () => void
}

export default function LoadingScreen({ onDone, onFadeStart }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let current = 0
    let lastTime = performance.now()
    let frameId: number

    const animateProgress = (time: number) => {
      // Calculate delta time
      const dt = time - lastTime
      lastTime = time

      // Non-linear progress increment for a realistic load feel
      if (current < 80) {
        current += dt * 0.15
      } else if (current < 99) {
        current += dt * 0.05 // slows down at the end
      } else {
        current = 100
      }

      if (current >= 100) {
        setProgress(100)
        
        // Hold at 100 briefly, then trigger the fade/slide out
        setTimeout(() => {
          setIsComplete(true)
          if (onFadeStart) onFadeStart()
          // Wait for Framer Motion exit animation to finish before unmounting
          setTimeout(onDone, 800)
        }, 400)
        return
      }

      setProgress(Math.floor(current))
      frameId = requestAnimationFrame(animateProgress)
    }

    frameId = requestAnimationFrame(animateProgress)

    return () => cancelAnimationFrame(frameId)
  }, [onDone, onFadeStart])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: "-10vh", // Slight upward lift as it fades, very premium
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-99999 flex flex-col items-center justify-center bg-[#0B0B0B]"
        >
          {/* Main loader block */}
          <div className="relative flex flex-col items-center">
            
            {/* Percent Text */}
            <motion.div 
              className="text-7xl md:text-9xl font-playfair font-black text-[#F5F5F5] tracking-tighter"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {progress}<span className="text-4xl md:text-6xl text-[#A1A1AA] font-light">%</span>
            </motion.div>
            
            {/* Minimal Progress Line */}
            <div className="w-56 md:w-72 h-px bg-[#222222] mt-6 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#D4AF37] to-[#FACC15]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
            
            {/* Brand text */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-[#A1A1AA] text-[10px] sm:text-xs font-inter tracking-[0.3em] uppercase"
            >
              Jayesh.OS · Portfolio
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
