"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const words = [
    "Intelligence",
    "Innovation",
    "Discovery",
    "Excellence",
    "Collaboration",
    "Impact",
    "Possibilities",
    "Solutions",
    "Creativity",
    "Leadership",
    "Empowerment",
    "Vision",
    "Progress",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToTeam = () => {
    const teamSection = document.getElementById("team-section");
    if (teamSection) teamSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToResearch = () => {
    const researchSection = document.getElementById("research-section");
    if (researchSection) researchSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        {/* Original background orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3E8B94]/25 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-[450px] h-[450px] bg-[#B8232F]/25 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translate(${-mousePosition.x * 0.8}px, ${-mousePosition.y * 0.8}px)` }}
        />
        
        {/* Enhanced AI-themed creative elements */}
        {/* Floating AI particles */}
        <div className="absolute top-16 left-16 w-3 h-3 bg-[#3E8B94] rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-24 left-32 w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
        <div className="absolute top-40 left-20 w-2.5 h-2.5 bg-[#B8232F] rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }}></div>
        <div className="absolute top-32 left-48 w-1.5 h-1.5 bg-[#3E8B94]/70 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}></div>
        
        <div className="absolute bottom-24 right-16 w-3 h-3 bg-[#B8232F] rounded-full animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '2.8s' }}></div>
        <div className="absolute bottom-32 right-28 w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '2.2s' }}></div>
        <div className="absolute bottom-16 right-40 w-2.5 h-2.5 bg-[#3E8B94] rounded-full animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-40 right-20 w-1.5 h-1.5 bg-[#B8232F]/70 rounded-full animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '2.5s' }}></div>
        
        {/* Neural network connections - Enhanced */}
        <div className="absolute top-20 left-20 w-16 h-0.5 bg-gradient-to-r from-[#3E8B94]/60 via-white/40 to-transparent rotate-45 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        <div className="absolute top-28 left-28 w-12 h-0.5 bg-gradient-to-r from-white/50 via-[#B8232F]/40 to-transparent -rotate-12 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-44 left-24 w-10 h-0.5 bg-gradient-to-r from-[#B8232F]/60 to-transparent rotate-[67deg] animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        
        <div className="absolute bottom-28 right-20 w-16 h-0.5 bg-gradient-to-r from-[#B8232F]/60 via-white/40 to-transparent -rotate-45 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute bottom-36 right-32 w-12 h-0.5 bg-gradient-to-r from-white/50 via-[#3E8B94]/40 to-transparent rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-44 w-10 h-0.5 bg-gradient-to-r from-[#3E8B94]/60 to-transparent -rotate-[67deg] animate-pulse" style={{ animationDelay: '1.4s' }}></div>
        
        {/* Holographic grid lines */}
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-[#3E8B94]/10 to-transparent animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
        <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-[#B8232F]/10 to-transparent animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
        <div className="absolute left-0 top-1/4 w-full h-0.5 bg-gradient-to-r from-transparent via-[#3E8B94]/10 to-transparent animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute left-0 bottom-1/4 w-full h-0.5 bg-gradient-to-r from-transparent via-[#B8232F]/10 to-transparent animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        
        {/* Enhanced circuit patterns with multiple layers */}
        <div className="absolute top-1/2 left-8 w-20 h-20 border-2 border-[#3E8B94]/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '25s' }}></div>
        <div className="absolute top-1/2 left-8 w-16 h-16 border border-[#3E8B94]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/3 right-8 w-16 h-16 border-2 border-[#B8232F]/20 rounded-lg -rotate-45 animate-spin" style={{ animationDuration: '18s' }}></div>
        <div className="absolute top-1/3 right-8 w-12 h-12 border border-[#B8232F]/30 rounded-lg -rotate-45 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        
        {/* Data stream effect */}
        <div className="absolute top-1/3 left-1/3 flex flex-col space-y-1 opacity-20">
          <div className="w-1 h-8 bg-[#3E8B94] animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="w-1 h-6 bg-[#B8232F] animate-ping" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1 h-4 bg-white animate-ping" style={{ animationDelay: '0.4s' }}></div>
          <div className="w-1 h-7 bg-[#3E8B94] animate-ping" style={{ animationDelay: '0.6s' }}></div>
        </div>
        
        <div className="absolute bottom-1/3 right-1/3 flex flex-col space-y-1 opacity-20">
          <div className="w-1 h-5 bg-[#B8232F] animate-ping" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-1 h-9 bg-[#3E8B94] animate-ping" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-1 h-3 bg-white animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-1 h-6 bg-[#B8232F] animate-ping" style={{ animationDelay: '0.7s' }}></div>
        </div>
        
        {/* Enhanced binary code with more movement */}
        <div className="absolute top-1/5 right-1/3 text-[#3E8B94]/15 text-xs font-mono animate-pulse transform rotate-12" style={{ animationDelay: '0.5s' }}>
          01001000 01100101 01101100 01101100 01101111<br/>
          01010111 01101111 01110010 01101100 01100100
        </div>
        <div className="absolute bottom-1/5 left-1/3 text-[#B8232F]/15 text-xs font-mono animate-pulse transform -rotate-12" style={{ animationDelay: '1s' }}>
          01000001 01001001 01000000 01010101 01001110 01000011 01010000<br/>
          01001001 01101110 01101110 01101111 01110110 01100001 01110100 01101001 01101111 01101110
        </div>
        
        {/* Hexagonal tech patterns */}
        <div 
          className="absolute top-20 right-20 w-8 h-8 border border-[#3E8B94]/30 animate-pulse" 
          style={{ 
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
            animationDuration: '3s'
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-20 w-6 h-6 border border-[#B8232F]/30 animate-pulse" 
          style={{ 
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
            animationDuration: '3s',
            animationDelay: '0.5s'
          }}
        ></div>
        
        {/* Scanning line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#3E8B94]/50 to-transparent" 
            style={{ 
              transform: `translateY(${mousePosition.y * 2 + 50}vh)`,
              animation: 'pulse 6s ease-in-out infinite'
            }}
          ></div>
        </div>
      </div>

      {/* Ultra-enhanced logo with multiple AI effects */}
      <div className="absolute top-16 md:top-20 left-1/2 transform -translate-x-1/2 z-30">
        <div className="relative">
          {/* Multiple pulsing rings with different speeds */}
          <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 border-2 border-[#3E8B94]/40 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
          <div className="absolute inset-1 w-22 h-22 md:w-30 md:h-30 lg:w-38 lg:h-38 border border-[#B8232F]/30 rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
          <div className="absolute inset-2 w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 border border-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
          
          {/* Rotating scanner ring */}
          <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 border-t-2 border-transparent border-t-[#3E8B94] rounded-full animate-spin" style={{ animationDuration: '4s' }}></div>
          <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 border-b-2 border-transparent border-b-[#B8232F] rounded-full animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}></div>
          
          {/* Orbiting particles around logo */}
          <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 animate-spin" style={{ animationDuration: '8s' }}>
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#3E8B94] rounded-full transform -translate-x-1/2 -translate-y-1"></div>
          </div>
          <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
            <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-[#B8232F] rounded-full transform -translate-x-1/2 translate-y-1"></div>
          </div>
          <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 animate-spin" style={{ animationDuration: '10s' }}>
            <div className="absolute top-1/2 right-0 w-1 h-1 bg-white rounded-full transform -translate-y-1/2 translate-x-1"></div>
          </div>
          
          {/* Holographic glow effect */}
          <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-r from-[#3E8B94]/10 via-transparent to-[#B8232F]/10 rounded-full animate-pulse blur-sm" style={{ animationDuration: '4s' }}></div>
          
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
            <Image
              src="/logos/Artificial Intelligence @ UNCP  Logo.png"
              alt="AI@UNCP Logo"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-xl drop-shadow-2xl relative z-10 filter brightness-110"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 text-center pt-48 md:pt-56">
        <h1 className="font-black leading-tight text-6xl md:text-8xl lg:text-[10rem] text-white mb-6 drop-shadow-lg animate-fade-in relative">
          Artificial
          {/* Glitch effect elements */}
          <span className="absolute inset-0 text-[#3E8B94]/30 animate-pulse" style={{ transform: 'translate(2px, 0)', animationDelay: '0.1s' }}>Artificial</span>
          <span className="absolute inset-0 text-[#B8232F]/20 animate-pulse" style={{ transform: 'translate(-1px, 1px)', animationDelay: '0.2s' }}>Artificial</span>
        </h1>
        <h2
          key={currentWord}
          className="text-5xl md:text-7xl lg:text-[9rem] bg-gradient-to-r from-[#3E8B94] to-[#B8232F] bg-clip-text text-transparent font-extrabold mb-6 animate-fade-in-slow relative"
        >
          {words[currentWord]}
          {/* Enhanced decorative elements around the word */}
          <span className="absolute -top-4 -right-4 w-3 h-3 bg-[#3E8B94] rounded-full animate-ping opacity-75" style={{ animationDelay: '0s' }}></span>
          <span className="absolute -bottom-4 -left-4 w-2.5 h-2.5 bg-[#B8232F] rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></span>
          <span className="absolute -top-2 -left-2 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-60" style={{ animationDelay: '0.6s' }}></span>
          <span className="absolute -bottom-2 -right-2 w-2 h-2 bg-[#3E8B94] rounded-full animate-pulse opacity-80" style={{ animationDelay: '0.9s' }}></span>
          
          {/* Particle trail effect */}
          <div className="absolute -top-6 -right-6 flex space-x-1">
            <div className="w-1 h-1 bg-[#3E8B94]/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-1 h-1 bg-[#B8232F]/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
          </div>
        </h2>
        <p className="text-2xl md:text-4xl lg:text-5xl text-white/80 font-medium mb-6 animate-fade-in-delay">
          <span className="text-[#B8232F] font-bold">@</span> UNC Pembroke
        </p>
        <p className="text-xl md:text-2xl text-white/70 max-w-3xl mb-10 animate-fade-in-delay">
          Where <span className="text-white font-semibold">curiosity</span> meets
          <span className="text-[#B8232F] font-semibold"> breakthrough innovation</span>
        </p>
        <div className="flex flex-col md:flex-row gap-6 animate-fade-in-delay">
          <button
            onClick={scrollToTeam}
            className="px-8 py-4 md:px-10 md:py-5 bg-[#3E8B94] hover:bg-[#2e6c78] text-white text-lg md:text-xl rounded-xl font-semibold shadow-xl transition-all duration-300 hover:scale-105"
          >
            Meet Our Team
          </button>
          <button
            onClick={scrollToResearch}
            className="px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-[#3E8B94] to-[#B8232F] text-white text-lg md:text-xl rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-[#2e6c78] hover:to-[#a01e29]"
          >
            Focus Areas
          </button>
        </div>
        <div className="mt-16 md:mt-20 w-full flex justify-center">
          <div className="w-1 h-16 md:h-24 bg-gradient-to-b from-white/20 to-transparent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}