'use client';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Intelligence", "Innovation", "Discovery", "Excellence"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

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
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-6">
        
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/logos/Artificial Intelligence @ UNCP  Logo.png" 
            alt="AI@UNCP Logo"
            className="w-24 h-24 mx-auto object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden w-24 h-24 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">AI</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Artificial{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {words[currentWord]}
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          @UNC Pembroke
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Students and faculty exploring artificial intelligence and building tomorrow&#39;s solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToTeam}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Meet Our Team
          </button>
          
          <button 
            onClick={scrollToResearch}
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            View Research
          </button>
        </div>
      </div>
    </section>
  );
}