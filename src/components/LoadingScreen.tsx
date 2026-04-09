import { useEffect, useRef, useState } from 'react'

const LINES = [
  { prefix: '>', text: ' Initializing  Jayesh Portfolio...', color: '#D4AF37' },
  { prefix: '>', text: ' Loading Projects...', color: '#D4AF37' },
  { prefix: '>', text: ' Fetching Assets...', color: '#D4AF37' },
  { prefix: '>', text: ' Rendering UI...', color: '#D4AF37' },
  { prefix: '>', text: ' Launching Experience...', color: '#F5F5F5' },
]

const CHAR_DELAY = 38   // ms per character
const LINE_GAP  = 220  // ms pause before next line starts
const HOLD_MS   = 500  // ms to hold after last line before fade

interface CompletedLine {
  prefix: string
  text: string
  color: string
}

interface LoadingScreenProps {
  onDone: () => void
  onFadeStart?: () => void
}

export default function LoadingScreen({ onDone, onFadeStart }: LoadingScreenProps) {
  const [completedLines, setCompletedLines] = useState<CompletedLine[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [fading, setFading] = useState(false)
  const charIdx = useRef(0)
  const rafId  = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (currentLine >= LINES.length) {
      // All lines done — hold briefly then fade
      rafId.current = setTimeout(() => {
        setFading(true)
        if (onFadeStart) onFadeStart()
        setTimeout(onDone, 700) // matches CSS transition
      }, HOLD_MS)
      return
    }

    const line = LINES[currentLine]
    charIdx.current = 0
    setCurrentText('')

    const typeChar = () => {
      if (charIdx.current < line.text.length) {
        charIdx.current++
        setCurrentText(line.text.slice(0, charIdx.current))
        rafId.current = setTimeout(typeChar, CHAR_DELAY)
      } else {
        // Line complete — move completed lines
        setCompletedLines(prev => [...prev, line])
        setCurrentText('')
        rafId.current = setTimeout(() => {
          setCurrentLine(l => l + 1)
        }, LINE_GAP)
      }
    }

    rafId.current = setTimeout(typeChar, currentLine === 0 ? 300 : 0)

    return () => {
      if (rafId.current) clearTimeout(rafId.current)
    }
  }, [currentLine])  // eslint-disable-line react-hooks/exhaustive-deps

  const activeLine = currentLine < LINES.length ? LINES[currentLine] : null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#0B0B0B',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '0 clamp(1.5rem, 8vw, 8rem)',
        fontFamily: "'Fira Code', 'Source Code Pro', 'Courier New', monospace",
        transition: 'opacity 0.7s ease, filter 0.7s ease',
        opacity: fading ? 0 : 1,
        filter: fading ? 'blur(8px)' : 'blur(0px)',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      {/* Scanline overlay for CRT feel */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Top-left decorative label */}
      <div style={{
        position: 'absolute',
        top: 'clamp(1rem, 3vw, 2rem)',
        left: 'clamp(1.5rem, 8vw, 8rem)',
        color: '#D4AF37',
        fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)',
        letterSpacing: '0.2em',
        opacity: 0.5,
        textTransform: 'uppercase',
      }}>
        JAYESH.OS v1.0.0
      </div>

      {/* Top-right clock-style timestamp */}
      <LiveTimestamp />

      {/* Terminal window */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '720px' }}>
        {/* "Window" header bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '1.25rem',
        }}>
          <Dot color="#FF5F57" />
          <Dot color="#FFBD2E" />
          <Dot color="#28C840" />
          <span style={{
            marginLeft: '12px',
            color: '#555',
            fontSize: 'clamp(0.65rem, 1.4vw, 0.78rem)',
            letterSpacing: '0.12em',
          }}>
            portfolio — bash — 80×24
          </span>
        </div>

        {/* Completed lines */}
        {completedLines.map((ln, i) => (
          <div key={i} style={{ display: 'flex', marginBottom: '0.55rem', alignItems: 'flex-start' }}>
            <span style={{
              color: '#D4AF37',
              marginRight: '0.6rem',
              fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
              lineHeight: 1.6,
              flexShrink: 0,
              textShadow: '0 0 10px #D4AF37aa',
            }}>
              {ln.prefix}
            </span>
            <span style={{
              color: ln.color,
              fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
              lineHeight: 1.6,
              textShadow: ln.color === '#D4AF37'
                ? '0 0 14px #D4AF3799'
                : '0 0 8px rgba(245,245,245,0.3)',
            }}>
              {ln.text}
              {/* Done tick */}
              <span style={{ color: '#28C840', marginLeft: '0.5rem', fontSize: '0.9em' }}>✓</span>
            </span>
          </div>
        ))}

        {/* Currently typing line */}
        {activeLine && (
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <span style={{
              color: '#D4AF37',
              marginRight: '0.6rem',
              fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
              lineHeight: 1.6,
              flexShrink: 0,
              textShadow: '0 0 10px #D4AF37aa',
            }}>
              {activeLine.prefix}
            </span>
            <span style={{
              color: activeLine.color,
              fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
              lineHeight: 1.6,
              textShadow: '0 0 14px #D4AF3799',
            }}>
              {currentText}
              <BlinkingCursor />
            </span>
          </div>
        )}
      </div>

      {/* Bottom progress bar */}
      <ProgressBar total={LINES.length} done={completedLines.length} />

      {/* Inline styles for keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap');

        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes flicker {
          0%   { opacity: 1; }
          92%  { opacity: 1; }
          93%  { opacity: 0.85; }
          94%  { opacity: 1; }
          96%  { opacity: 0.9; }
          97%  { opacity: 1; }
          100% { opacity: 1; }
        }
        @keyframes progressGrow {
          from { width: 0%; }
        }
      `}</style>
    </div>
  )
}

/* ─── Sub-components ─────────────────────────────────────────── */

function BlinkingCursor() {
  return (
    <span style={{
      display: 'inline-block',
      width: '2px',
      height: '1.1em',
      background: '#D4AF37',
      marginLeft: '2px',
      verticalAlign: 'middle',
      boxShadow: '0 0 8px #D4AF37',
      animation: 'blink 0.9s step-end infinite',
    }} />
  )
}

function Dot({ color }: { color: string }) {
  return (
    <div style={{
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: color,
      opacity: 0.85,
    }} />
  )
}

function ProgressBar({ total, done }: { total: number; done: number }) {
  const pct = Math.round((done / total) * 100)
  return (
    <div style={{
      position: 'absolute',
      bottom: 'clamp(1.5rem, 4vw, 2.5rem)',
      left: 'clamp(1.5rem, 8vw, 8rem)',
      right: 'clamp(1.5rem, 8vw, 8rem)',
      zIndex: 2,
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '6px',
        color: '#555',
        fontSize: 'clamp(0.6rem, 1.2vw, 0.7rem)',
        letterSpacing: '0.12em',
      }}>
        <span>LOADING</span>
        <span style={{ color: '#D4AF37' }}>{pct}%</span>
      </div>
      <div style={{
        width: '100%',
        height: '2px',
        background: '#1a1a1a',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${pct}%`,
          background: 'linear-gradient(90deg, #B8860B, #D4AF37, #F0C040)',
          boxShadow: '0 0 10px #D4AF37',
          borderRadius: '2px',
          transition: 'width 0.3s ease',
        }} />
      </div>
    </div>
  )
}

function LiveTimestamp() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <div style={{
      position: 'absolute',
      top: 'clamp(1rem, 3vw, 2rem)',
      right: 'clamp(1.5rem, 8vw, 8rem)',
      color: '#D4AF37',
      fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)',
      letterSpacing: '0.15em',
      opacity: 0.45,
      fontVariantNumeric: 'tabular-nums',
    }}>
      {time}
    </div>
  )
}
