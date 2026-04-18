import { useMemo } from 'react';

export default function StarryBackground() {
  // Generate random box-shadow strings using vw and vh for responsiveness
  const generateStars = (count: number) => {
    let shadows = '';
    for (let i = 0; i < count; i++) {
        const x = (Math.random() * 100).toFixed(2);
        const y = (Math.random() * 100).toFixed(2);
        // Add random opacity to colors to create natural depth
        const opacity = (Math.random() * 0.5 + 0.5).toFixed(2);
        shadows += `${x}vw ${y}vh rgba(255, 255, 255, ${opacity})${i < count - 1 ? ', ' : ''}`;
    }
    return shadows;
  };

  const starsSmall = useMemo(() => generateStars(300), []);
  const starsMedium = useMemo(() => generateStars(100), []);
  const starsLarge = useMemo(() => generateStars(30), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#060608]">
      {/* Deep space nebulous gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-slate-900/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-[#D4AF37]/5 via-transparent to-transparent"></div>
      
      {/* Star layers */}
      <div className="absolute inset-0 w-full h-full">
        {/* Small stars */}
        <div className="absolute rounded-full w-[1.5px] h-[1.5px] bg-transparent" style={{ boxShadow: starsSmall, animation: 'twinkleSmall 4s infinite alternate ease-in-out' }} />
        {/* Medium stars */}
        <div className="absolute rounded-full w-[2.5px] h-[2.5px] bg-transparent" style={{ boxShadow: starsMedium, animation: 'twinkleMedium 5s infinite alternate ease-in-out' }} />
        {/* Large stars */}
        <div className="absolute rounded-full w-[3.5px] h-[3.5px] bg-transparent" style={{ boxShadow: starsLarge, animation: 'twinkleLarge 6s infinite alternate ease-in-out' }} />
      </div>

      <style>{`
        @keyframes twinkleSmall {
          0% { opacity: 0.4; }
          100% { opacity: 1; }
        }
        @keyframes twinkleMedium {
          0% { opacity: 0.3; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes twinkleLarge {
          0% { opacity: 0.5; transform: scale(0.9) translateY(0px); }
          100% { opacity: 1; transform: scale(1.2) translateY(-1px); box-shadow: 0 0 10px rgba(255,255,255,0.8), ${starsLarge}; }
        }
      `}</style>
    </div>
  );
}
