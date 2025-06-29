'use client';

import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTeam = () => {
    const teamSection = document.getElementById('team-section');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToResearch = () => {
    const researchSection = document.getElementById('research-section');
    if (researchSection) {
      researchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(139, 92, 246, 0.3) 0%, 
            rgba(59, 130, 246, 0.2) 25%, 
            rgba(16, 24, 39, 0.9) 50%, 
            #0f172a 100%
          )
        `
      }}
    >
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.2}s`
              }}
            />
          ))}
        </svg>
        
        {/* Floating AI Nodes */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg"
              style={{
                left: `${10 + (i * 6) % 80}%`,
                top: `${15 + (i * 8) % 70}%`,
                transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 20}px)`,
                opacity: 0.3 + Math.sin(scrollY * 0.02 + i) * 0.3,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes with Scroll Animation */}
        <div 
          className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400/30 rounded-lg"
          style={{
            transform: `rotate(${scrollY * 0.1}deg) scale(${1 + scrollY * 0.0005})`
          }}
        />
        <div 
          className="absolute bottom-32 right-20 w-24 h-24 border-2 border-purple-400/40 rounded-full"
          style={{
            transform: `rotate(${-scrollY * 0.15}deg) translateY(${scrollY * 0.1}px)`
          }}
        />
        <div 
          className="absolute top-1/3 right-32 w-16 h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg"
          style={{
            transform: `rotate(${scrollY * 0.2}deg) translateX(${Math.sin(scrollY * 0.01) * 10}px)`
          }}
        />
      </div>

      {/* Top Navigation - Creative AI@UNCP Logo */}
      <div className="absolute top-8 left-8 z-30">
        <div className="group flex items-center gap-4 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 px-6 py-4 rounded-2xl shadow-2xl hover:bg-slate-800/70 transition-all duration-500 hover:scale-105">
          {/* Animated AI Icon */}
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
              <span className="text-white text-lg font-black tracking-wider">AI</span>
              {/* Pulse ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl animate-ping opacity-20 group-hover:opacity-40" />
            </div>
            {/* Status indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
          </div>
          
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl tracking-wide">@UNCP</span>
            <span className="text-blue-300 text-sm font-medium">Research Lab</span>
          </div>
          
          {/* Hover effect decoration */}
          <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6">
        
        {/* Organization Logo Section */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative mx-auto w-40 h-40 mb-8">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-full blur-xl animate-pulse" />
            
            {/* Logo container */}
            <div className="relative w-full h-full bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-500">
              <img 
                src="./logos/Artificial Intelligence @ UNCP  Logo.png" 
                alt="AI@UNCP Organization Logo"
                className="w-full h-full object-contain rounded-full"
                onError={(e) => {
                  const target = e.target;
                  target.style.display = 'none';
                  target.nextElementSibling.classList.remove('hidden');
                }}
              />
              {/* Fallback logo */}
              <div className="hidden w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center">
                <span className="text-white text-4xl font-black">AI</span>
              </div>
            </div>
            
            {/* Orbiting elements */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
              <div className="absolute -top-3 left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 shadow-lg shadow-blue-500/50" />
              <div className="absolute -bottom-3 left-1/2 w-3 h-3 bg-purple-500 rounded-full transform -translate-x-1/2 shadow-lg shadow-purple-500/50" />
              <div className="absolute top-1/2 -left-3 w-3 h-3 bg-pink-500 rounded-full transform -translate-y-1/2 shadow-lg shadow-pink-500/50" />
              <div className="absolute top-1/2 -right-3 w-4 h-4 bg-indigo-500 rounded-full transform -translate-y-1/2 shadow-lg shadow-indigo-500/50" />
            </div>
          </div>
        </div>

        {/* Creative Title Section */}
        <div className={`text-center mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Title with Creative Typography */}
          <div className="relative mb-8">
            <h1 className="font-black leading-none select-none">
              {/* "Artificial Intelligence" */}
              <div className="mb-4">
                <span 
                  className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl"
                  style={{
                    transform: `translateX(${Math.sin(scrollY * 0.005) * 10}px)`
                  }}
                >
                  ARTIFICIAL
                </span>
                <span 
                  className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl -mt-2"
                  style={{
                    transform: `translateX(${Math.sin(scrollY * 0.005 + Math.PI) * 10}px)`
                  }}
                >
                  INTELLIGENCE
                </span>
              </div>
              
              {/* "@UNCP" with special styling */}
              <div className="relative">
                <span 
                  className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl text-white font-extrabold tracking-wider drop-shadow-2xl"
                  style={{
                    transform: `scale(${1 + Math.sin(scrollY * 0.01) * 0.05})`
                  }}
                >
                  @UNCP
                </span>
                {/* Glitch effect overlay */}
                <span 
                  className="absolute inset-0 block text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl text-blue-500 font-extrabold tracking-wider opacity-20 mix-blend-multiply"
                  style={{
                    transform: `translateX(2px) translateY(-2px) scale(${1 + Math.sin(scrollY * 0.01) * 0.05})`
                  }}
                >
                  @UNCP
                </span>
              </div>
            </h1>
          </div>
        </div>

        {/* Description Section */}
        <div className={`text-center mb-16 max-w-4xl transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-100 mb-8 font-light leading-relaxed"
            style={{
              transform: `translateY(${Math.sin(scrollY * 0.003) * 5}px)`
            }}
          >
            Where <span className="text-white font-semibold">curiosity</span> meets{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              innovative technology
            </span>
          </p>
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed opacity-90"
            style={{
              transform: `translateY(${Math.sin(scrollY * 0.003 + Math.PI) * 3}px)`
            }}
          >
            Student researchers pushing the boundaries of what machines can learn and achieve
          </p>
        </div>

        {/* Interactive Buttons */}
        <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            onClick={scrollToTeam}
            className="group relative w-full sm:w-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-100%] group-hover:translate-x-0" />
            <span className="relative flex items-center justify-center gap-3 z-10">
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Meet Our Team
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <button 
            onClick={scrollToResearch}
            className="group relative w-full sm:w-auto border-3 border-white/40 hover:border-white/80 text-white hover:bg-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 backdrop-blur-sm hover:backdrop-blur-md"
          >
            <span className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Explore Research
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        style={{
          transform: `translateX(-50%) translateY(${Math.sin(scrollY * 0.01) * 5}px)`
        }}
      >
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-8 h-12 border-3 border-white/50 rounded-full flex justify-center animate-bounce group-hover:border-white/80 transition-colors duration-300">
            <div className="w-2 h-4 bg-white/70 rounded-full mt-2 animate-pulse group-hover:bg-white transition-colors duration-300" />
          </div>
          <span className="text-white/70 text-sm mt-3 font-medium group-hover:text-white transition-colors duration-300">
            Discover More
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent mt-2" />
        </div>
      </div>
    </section>
  );
}