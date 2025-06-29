"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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
    setIsVisible(true);
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
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToResearch = () => {
    const researchSection = document.getElementById("research-section");
    if (researchSection) {
      researchSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic gradient orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-400/25 to-indigo-500/25 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${-mousePosition.x * 0.8}px, ${
              -mousePosition.y * 0.8
            }px)`,
          }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-violet-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"
          style={{
            transform: `translate(${mousePosition.x * 0.6}px, ${
              mousePosition.y * 0.6
            }px)`,
          }}
        />

        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Creative geometric shapes */}
        <div className="absolute top-20 right-20 w-6 h-6 bg-emerald-400/40 rotate-45 animate-bounce" />
        <div className="absolute bottom-32 left-32 w-8 h-8 bg-blue-400/40 rounded-full animate-bounce delay-500" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-violet-400/50 animate-ping" />
        <div className="absolute top-3/4 left-1/6 w-4 h-4 bg-teal-400/40 rotate-45 animate-ping delay-1000" />

        {/* Neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient
              id="networkGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#networkGradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${4 + i * 0.3}s`,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Top Navigation */}
      <div className="absolute top-6 left-6 z-30">
        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl shadow-2xl hover:bg-white/10 transition-all duration-500">
          <div className="relative">
            <div className="w-28 h-12 bg-gradient-to-br from-emerald-500 via-blue-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-lg font-bold">AI@UNCP</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse" />
          </div>
          
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Enhanced Logo */}
          <div
            className={`mb-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative inline-block group">
              {/* Multi-layer glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-500 to-violet-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-indigo-500 to-purple-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />

              <div className="relative w-36 h-36 bg-white/95 backdrop-blur-sm rounded-full p-7 shadow-2xl group-hover:scale-110 transition-all duration-700 border-2 border-white/20">
                <img
                  src="/logos/Artificial Intelligence @ UNCP  Logo.png"
                  alt="AI@UNCP Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.nextElementSibling?.classList.remove("hidden");
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-emerald-500 via-blue-600 to-violet-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">AI</span>
                </div>
              </div>

              {/* Enhanced orbiting elements */}
              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "25s" }}
              >
                <div className="absolute -top-3 left-1/2 w-4 h-4 bg-emerald-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-emerald-400/50" />
                <div className="absolute -bottom-3 left-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-blue-400/50" />
                <div className="absolute top-1/2 -left-3 w-3 h-3 bg-violet-400 rounded-full transform -translate-y-1/2 shadow-lg shadow-violet-400/50" />
                <div className="absolute top-1/2 -right-3 w-4 h-4 bg-teal-400 rounded-full transform -translate-y-1/2 shadow-lg shadow-teal-400/50" />
              </div>

              {/* Additional rotating ring */}
              <div
                className="absolute inset-0 animate-spin"
                style={{
                  animationDuration: "15s",
                  animationDirection: "reverse",
                }}
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-indigo-400 rounded-full transform -translate-x-1/2" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2" />
              </div>
            </div>
          </div>

          {/* Creative Title with Enhanced Typography */}
          <div
            className={`mb-10 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="font-black leading-none mb-6">
              <span className="block text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Artificial
              </span>
              <span
                key={currentWord}
                className="block text-6xl md:text-8xl lg:text-9xl bg-gradient-to-r from-emerald-400 via-blue-500 to-violet-500 bg-clip-text text-transparent transition-all duration-1000 transform hover:scale-105"
                style={{
                  textShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
                }}
              >
                {words[currentWord]}
              </span>
            </h1>

            <div className="text-3xl md:text-5xl text-gray-300 font-light tracking-wider">
              <span className="text-emerald-400 font-semibold">@</span> UNC
              Pembroke
            </div>
          </div>

          {/* Enhanced Description */}
          <div
            className={`mb-16 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl md:text-3xl text-gray-200 mb-6 max-w-5xl mx-auto leading-relaxed font-light">
              Where <span className="text-white font-semibold">curiosity</span>{" "}
              meets{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent font-semibold">
                breakthrough innovation
              </span>
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Students and faculty pushing the boundaries of what machines can
              learn, understand, and achieve
            </p>
          </div>

          {/* Enhanced Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-8 justify-center transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button
              onClick={scrollToTeam}
              className="group relative bg-gradient-to-r from-emerald-500 via-blue-600 to-violet-600 hover:from-emerald-400 hover:via-blue-500 hover:to-violet-500 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-emerald-500/25 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative flex items-center gap-4">
                <svg
                  className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Meet Our Team
                <svg
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>

            <button
              onClick={scrollToResearch}
              className="group border-2 border-gray-300/40 hover:border-emerald-400/60 bg-white/5 hover:bg-emerald-400/10 backdrop-blur-sm text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-emerald-400/20"
            >
              <span className="flex items-center gap-4">
                <svg
                  className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Explore Research
                <svg
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center hover:border-emerald-400/50 transition-colors duration-300">
            <div className="w-2 h-5 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
          <span className="text-white/50 text-xs mt-3 font-medium tracking-wider">
            SCROLL TO EXPLORE
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent mt-2" />
        </div>
      </div>
    </section>
  );
}
