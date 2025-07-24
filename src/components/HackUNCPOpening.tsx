'use client';

import { useState, useEffect } from 'react';
import { Calendar, Trophy, Zap, Sparkles, ChevronDown } from 'lucide-react';

export default function HackUNCPOpening() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden">
      {/* AI-themed background effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#3E8B94]/20 via-transparent to-[#B8232F]/20"></div>
      <div className="absolute inset-0">
        <div
          className="absolute top-10 left-10 w-72 h-72 bg-[#3E8B94]/10 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-[#B8232F]/10 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
            animationDelay: '2s'
          }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gray-400/10 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
            animationDelay: '4s'
          }}
        />
      </div>
      
      {/* Dynamic radial gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(62,139,148,0.4), transparent),
                           radial-gradient(circle at 80% 20%, rgba(184,35,47,0.4), transparent),
                           radial-gradient(circle at 40% 40%, rgba(100,116,139,0.4), transparent)`,
          backgroundSize: '100% 100%',
          animation: 'backgroundShift 10s ease-in-out infinite'
        }}></div>
      </div>

      {/* Interactive particle network */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${mousePosition.x * (i % 3) * 0.1}px, ${mousePosition.y * (i % 3) * 0.1}px)`,
            }}
          >
            <div 
              className={`w-2 h-2 rounded-full animate-ping ${
                i % 4 === 0 ? 'bg-[#3E8B94]' :
                i % 4 === 1 ? 'bg-[#B8232F]' :
                i % 4 === 2 ? 'bg-gray-400' :
                'bg-slate-400'
              }`}
              style={{ 
                animationDelay: `${i * 0.3}s`,
                animationDuration: '3s'
              }}
            />
          </div>
        ))}

        {/* Neural network connection lines */}
        <div className="absolute top-20 left-20 w-24 h-0.5 bg-gradient-to-r from-[#3E8B94]/60 to-transparent rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-20 h-0.5 bg-gradient-to-r from-[#B8232F]/60 to-transparent -rotate-12 animate-pulse delay-700"></div>
        <div className="absolute bottom-32 left-40 w-16 h-0.5 bg-gradient-to-r from-gray-400/60 to-transparent rotate-[67deg] animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-0.5 bg-gradient-to-r from-slate-400/60 to-transparent -rotate-45 animate-pulse delay-500"></div>
        
        {/* Flow continuation lines */}
        <div className="absolute bottom-16 left-1/3 w-32 h-0.5 bg-gradient-to-r from-[#3E8B94]/40 to-[#B8232F]/40 rotate-12 animate-pulse delay-1200"></div>
        <div className="absolute bottom-8 right-1/4 w-28 h-0.5 bg-gradient-to-l from-[#B8232F]/40 to-gray-400/40 -rotate-6 animate-pulse delay-1800"></div>

        {/* Rotating circuit patterns */}
        <div className="absolute top-1/3 left-10 w-16 h-16 border-2 border-[#3E8B94]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/3 right-10 w-12 h-12 border border-[#B8232F]/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-2/3 left-1/2 w-10 h-10 border border-gray-400/30 rounded-lg -rotate-45 animate-spin" style={{ animationDuration: '25s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content container */}
        <div className="min-h-screen flex flex-col justify-center text-center">
          {/* Brand badge */}
          <div className="relative inline-block mb-8 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3E8B94]/50 to-[#B8232F]/50 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#3E8B94]/15 to-[#B8232F]/15 rounded-full px-6 py-2 border border-[#3E8B94]/30">
              <Zap className="h-5 w-5 text-[#3E8B94] animate-pulse" />
              <span className="text-[#3E8B94] font-semibold">AI@UNCP Innovation Series</span>
              <Sparkles className="h-5 w-5 text-[#B8232F] animate-spin" style={{ animationDuration: '3s' }} />
            </div>
          </div>

          {/* Hero title with depth effects */}
          <div className="relative mb-8">
            {/* Shadow layers */}
            <div className="absolute inset-0 transform translate-x-3 translate-y-3 opacity-20">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-slate-800">
                HackUNCP
              </h1>
            </div>
            <div className="absolute inset-0 transform translate-x-1.5 translate-y-1.5 opacity-30">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-slate-700">
                HackUNCP
              </h1>
            </div>
            
            {/* Primary title */}
            <h1 className="relative text-7xl md:text-8xl lg:text-9xl font-black leading-tight">
              <span className="text-white drop-shadow-2xl">Hack</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E8B94] via-[#B8232F] to-slate-400 animate-gradient-x">UNCP</span>
            </h1>

            {/* Decorative accent elements */}
            <div className="absolute -top-8 -left-8 w-4 h-4 bg-[#3E8B94] rounded-full animate-ping opacity-60"></div>
            <div className="absolute -bottom-8 -right-8 w-3 h-3 bg-[#B8232F] rounded-full animate-pulse delay-300"></div>
            <div className="absolute -top-4 -right-12 w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-700"></div>
          </div>

          {/* Event description */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
              HackUNCP is{' '}
              <span className="relative">
                <span className="text-[#3E8B94] font-bold">AI@UNCP&apos;s</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#3E8B94] animate-pulse"></span>
              </span>{' '}
              annual flagship event, uniting brilliant minds to solve real-world challenges through{' '}
              <span className="relative">
                <span className="text-[#B8232F] font-bold">AI</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#B8232F] animate-pulse delay-300"></span>
              </span>.
            </p>
            
            {/* Event timeline highlights */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl text-gray-300">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-[#B8232F] animate-bounce" />
                <span>We hosted <strong className="text-[#B8232F]">HackUNCP 2025</strong></span>
              </div>
              <div className="hidden md:block w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-[#3E8B94] animate-pulse" />
                <span>and are excited for <strong className="text-[#3E8B94]">HackUNCP 2026</strong>!</span>
              </div>
            </div>

            {/* Key statistics preview */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center group">
                <div className="text-3xl font-black text-[#3E8B94] group-hover:scale-110 transition-transform duration-300">24</div>
                <div className="text-sm text-gray-400 font-medium">Hours of Innovation</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-black text-[#B8232F] group-hover:scale-110 transition-transform duration-300">AI</div>
                <div className="text-sm text-gray-400 font-medium">Focused Solutions</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-black text-white group-hover:scale-110 transition-transform duration-300">∞</div>
                <div className="text-sm text-gray-400 font-medium">Possibilities</div>
              </div>
            </div>
          </div>

          {/* Scroll continuation indicator */}
          <div className="mt-16 flex justify-center">
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Seamless transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent via-slate-800/30 to-slate-800/60"></div>
      
      {/* Journey continuation elements */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="flex justify-center items-center gap-6">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-[#3E8B94] animate-pulse"></div>
          <div className="text-gray-400 font-mono text-xs">JOURNEY BEGINS</div>
          <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-[#B8232F] animate-pulse delay-300"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        @keyframes backgroundShift {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(180deg); }
        }
      `}</style>
    </section>
  );
}