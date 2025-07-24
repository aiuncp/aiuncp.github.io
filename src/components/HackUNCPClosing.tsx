'use client';

import { useState, useEffect } from 'react';
import { Code, Trophy, Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';

/**
 * HackUNCPClosing Component
 * 
 * Final section of the HackUNCP experience that provides a call-to-action
 * and wraps up the user journey with branding and navigation elements.
 * Features interactive mouse-following effects and smooth animations.
 */
export default function HackUNCPClosing() {
  // Mouse position state for interactive background effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Setup mouse movement tracking for interactive background elements
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
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden">
      {/* Smooth transition gradient from previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-t from-transparent via-slate-800/30 to-slate-800/60"></div>
      
      {/* Primary background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#3E8B94]/20 via-transparent to-[#B8232F]/20"></div>
      
      {/* Interactive floating background orbs */}
      <div className="absolute inset-0">
        {/* Teal floating orb - follows mouse movement */}
        <div
          className="absolute top-1/3 left-1/3 w-80 h-80 bg-[#3E8B94]/10 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
            animationDuration: '5s'
          }}
        />
        
        {/* Red floating orb - counter mouse movement */}
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#B8232F]/10 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
            animationDuration: '6s',
            animationDelay: '1s'
          }}
        />
        
        {/* Neutral floating orb - subtle movement */}
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gray-400/10 rounded-full blur-3xl animate-pulse" 
          style={{animationDelay: '3s'}}
        ></div>
      </div>

      {/* Animated radial gradient background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, rgba(62,139,148,0.3), transparent),
                           radial-gradient(circle at 70% 30%, rgba(184,35,47,0.3), transparent),
                           radial-gradient(circle at 50% 50%, rgba(100,116,139,0.3), transparent)`,
          backgroundSize: '100% 100%',
          animation: 'backgroundShift 12s ease-in-out infinite reverse'
        }}></div>
      </div>

      {/* Interactive particle system */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${mousePosition.x * (i % 2) * 0.08}px, ${mousePosition.y * (i % 2) * 0.08}px)`,
            }}
          >
            {/* Individual animated particles with brand colors */}
            <div 
              className={`w-1.5 h-1.5 rounded-full animate-ping ${
                i % 3 === 0 ? 'bg-[#3E8B94]' :
                i % 3 === 1 ? 'bg-[#B8232F]' :
                'bg-gray-400'
              }`}
              style={{ 
                animationDelay: `${i * 0.4}s`,
                animationDuration: '4s'
              }}
            />
          </div>
        ))}

        {/* Neural network connection lines */}
        <div className="absolute top-20 left-1/4 w-32 h-0.5 bg-gradient-to-r from-[#3E8B94]/50 to-center rotate-12 animate-pulse"></div>
        <div className="absolute top-32 right-1/3 w-28 h-0.5 bg-gradient-to-l from-[#B8232F]/50 to-center -rotate-6 animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/2 w-24 h-0.5 bg-gradient-to-r from-gray-400/50 to-center rotate-3 animate-pulse delay-1000"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Journey continuation bridge section */}
        <div className="py-12">
          {/* Connecting visual element */}
          <div className="flex justify-center items-center gap-8">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#3E8B94] to-[#3E8B94] animate-pulse"></div>
            
            {/* Central spinning icon */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#3E8B94]/30 to-[#B8232F]/30 rounded-full blur-lg animate-pulse"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-[#3E8B94] via-slate-600 to-[#B8232F] rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '8s' }}>
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="w-32 h-0.5 bg-gradient-to-l from-transparent via-[#B8232F] to-[#B8232F] animate-pulse delay-300"></div>
          </div>

          {/* Experience continuation indicator */}
          <div className="text-center mt-12">
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="w-3 h-3 bg-[#3E8B94] rounded-full animate-pulse"></div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#3E8B94] to-[#B8232F] animate-pulse delay-150"></div>
              <div className="text-gray-400 font-mono text-sm">THE EXPERIENCE CONTINUES</div>
              <div className="w-24 h-0.5 bg-gradient-to-l from-[#B8232F] to-[#3E8B94] animate-pulse delay-300"></div>
              <div className="w-3 h-3 bg-[#B8232F] rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </div>

        {/* Primary call-to-action section */}
        <div className="py-20 text-center">
          <div className="relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3E8B94]/10 to-[#B8232F]/10 rounded-3xl blur-2xl"></div>
            
            {/* Main content card with glassmorphism */}
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3E8B94]/5 via-[#B8232F]/5 to-slate-500/5"></div>
              
              <div className="relative z-10">
                {/* Main call-to-action headline */}
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3E8B94] via-[#B8232F] to-slate-400 mb-6">
                  Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E8B94] to-[#B8232F]">Innovate</span> with AI?
                </h2>
                
                {/* Supporting description text */}
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                  Join the next generation of AI innovators at HackUNCP 2026, or explore the groundbreaking projects from our spectacular 2025 event.
                </p>
                
                {/* Primary action button - clean design without artifacts */}
                <div className="mb-8">
                  <a 
                    href="https://hackuncp.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3E8B94] to-[#B8232F] text-white font-semibold rounded-full hover:from-[#2e6c78] hover:to-[#a01e29] transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span>Discover HackUNCP</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                {/* HackUNCP logo centerpiece */}
                <div className="flex justify-center items-center mb-8">
                  <div className="relative">
                    {/* Logo glow effect */}
                    <div className="absolute -inset-6 bg-gradient-to-r from-[#3E8B94]/20 to-[#B8232F]/20 rounded-full blur-xl animate-pulse"></div>
                    
                    {/* Logo container with glassmorphism */}
                    <div className="relative w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-500">
                      <Image
                        src="/logos/HackUNCP Logo.png"
                        alt="HackUNCP Logo"
                        width={60}
                        height={60}
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
                
                {/* Brand value proposition elements */}
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#3E8B94] animate-pulse"></div>
                  
                  {/* Innovation badge */}
                  <div className="flex items-center gap-2 text-[#3E8B94] font-mono text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>INNOVATION</span>
                  </div>
                  
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  
                  {/* Collaboration badge */}
                  <div className="flex items-center gap-2 text-gray-300 font-mono text-sm">
                    <Code className="w-4 h-4" />
                    <span>COLLABORATION</span>
                  </div>
                  
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  
                  {/* Excellence badge */}
                  <div className="flex items-center gap-2 text-[#B8232F] font-mono text-sm">
                    <Trophy className="w-4 h-4" />
                    <span>EXCELLENCE</span>
                  </div>
                  
                  <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#B8232F] animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-900"></div>

      {/* Component-specific CSS animations */}
      <style jsx>{`
        @keyframes backgroundShift {
          0%, 100% { 
            transform: scale(1) rotate(0deg); 
          }
          50% { 
            transform: scale(1.1) rotate(180deg); 
          }
        }
      `}</style>
    </section>
  );
}