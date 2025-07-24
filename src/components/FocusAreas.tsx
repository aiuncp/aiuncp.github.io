'use client';

import { useState, useEffect } from 'react';
import { Code, Brain, Monitor, MessageCircle, Shield, Lock, Zap, Smartphone, Settings, ArrowRight, Sparkles } from 'lucide-react';

export default function FocusAreas() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const areas = [
    {
      title: "Machine Learning",
      description: "Training algorithms to recognize patterns, make predictions, and learn from data. From neural networks to deep learning architectures.",
      tech: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-[#3E8B94] to-cyan-600",
      bgGradient: "from-[#3E8B94]/10 to-cyan-500/10",
      glowColor: "#3E8B94",
    },
    {
      title: "Large Language Models",
      description: "Building and fine-tuning powerful language models that can understand, generate, and reason with human language at scale.",
      tech: ["GPT", "BERT", "Transformers", "LLaMA", "Fine-tuning"],
      icon: <MessageCircle className="w-8 h-8" />,
      gradient: "from-[#B8232F] to-red-600",
      bgGradient: "from-[#B8232F]/10 to-red-500/10",
      glowColor: "#B8232F",
    },
    {
      title: "Computer Vision",
      description: "Teaching machines to see and interpret visual information. Object detection, image classification, and visual understanding.",
      tech: ["OpenCV", "YOLO", "CNNs", "Image Processing"],
      icon: <Monitor className="w-8 h-8" />,
      gradient: "from-[#3E8B94] to-teal-600",
      bgGradient: "from-[#3E8B94]/10 to-teal-500/10",
      glowColor: "#3E8B94",
    },
    {
      title: "Natural Language Processing",
      description: "Traditional NLP techniques for text analysis, sentiment detection, named entity recognition, and language understanding.",
      tech: ["spaCy", "NLTK", "Text Mining", "Sentiment Analysis"],
      icon: <Code className="w-8 h-8" />,
      gradient: "from-slate-600 to-gray-700",
      bgGradient: "from-slate-500/10 to-gray-600/10",
      glowColor: "#64748b",
    },
    {
      title: "Cybersecurity",
      description: "Protecting systems, networks, and data from digital attacks. AI-powered threat detection, vulnerability assessment, and security analytics.",
      tech: ["Penetration Testing", "Threat Detection", "Network Security", "Malware Analysis"],
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-[#B8232F] to-rose-600",
      bgGradient: "from-[#B8232F]/10 to-rose-500/10",
      glowColor: "#B8232F",
    },
    {
      title: "Cryptography",
      description: "Securing information through mathematical algorithms and protocols. From classical encryption to post-quantum cryptographic systems.",
      tech: ["RSA", "AES", "Blockchain", "Hash Functions", "Digital Signatures"],
      icon: <Lock className="w-8 h-8" />,
      gradient: "from-slate-700 to-gray-800",
      bgGradient: "from-slate-600/10 to-gray-700/10",
      glowColor: "#475569",
    },
    {
      title: "Quantum Computing",
      description: "Exploring quantum algorithms and their applications to solve complex computational problems exponentially faster than classical computers.",
      tech: ["Qiskit", "Quantum Algorithms", "Quantum Gates", "NISQ"],
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-[#3E8B94] to-cyan-700",
      bgGradient: "from-[#3E8B94]/10 to-cyan-600/10",
      glowColor: "#3E8B94",
    },
    {
      title: "AI Applications",
      description: "Building real-world solutions that make a difference. Bridging the gap between theoretical knowledge and practical implementation.",
      tech: ["Web APIs", "Mobile Apps", "Cloud Computing", "Edge AI"],
      icon: <Smartphone className="w-8 h-8" />,
      gradient: "from-[#B8232F] to-orange-600",
      bgGradient: "from-[#B8232F]/10 to-orange-500/10",
      glowColor: "#B8232F",
    },
    {
      title: "Software Engineering",
      description: "Designing, developing, and maintaining robust software systems. From full-stack development to DevOps and scalable architectures.",
      tech: ["React", "Node.js", "Docker", "Git", "Agile", "CI/CD"],
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-[#3E8B94] to-teal-700",
      bgGradient: "from-[#3E8B94]/10 to-teal-600/10",
      glowColor: "#3E8B94",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden">
      {/* Dynamic AI-themed background */}
      <div className="absolute inset-0">
        {/* Interactive floating orbs */}
        <div
          className="absolute top-20 left-20 w-96 h-96 bg-[#3E8B94]/10 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            animationDuration: '4s'
          }}
        />
        <div
          className="absolute bottom-32 right-32 w-80 h-80 bg-[#B8232F]/10 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
            animationDuration: '6s',
            animationDelay: '2s'
          }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gray-400/5 rounded-full blur-2xl animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
            animationDuration: '5s',
            animationDelay: '1s'
          }}
        />

        {/* Neural network particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${mousePosition.x * (i % 3) * 0.1}px, ${mousePosition.y * (i % 3) * 0.1}px)`,
            }}
          >
            <div 
              className={`w-1 h-1 rounded-full animate-ping ${
                i % 3 === 0 ? 'bg-[#3E8B94]' :
                i % 3 === 1 ? 'bg-[#B8232F]' :
                'bg-gray-400'
              }`}
              style={{ 
                animationDelay: `${i * 0.3}s`,
                animationDuration: '3s'
              }}
            />
          </div>
        ))}

        {/* Connection lines */}
        <div className="absolute top-32 left-32 w-24 h-0.5 bg-gradient-to-r from-[#3E8B94]/40 to-transparent rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-20 h-0.5 bg-gradient-to-r from-[#B8232F]/40 to-transparent -rotate-12 animate-pulse delay-700"></div>
        <div className="absolute top-2/3 left-1/3 w-16 h-0.5 bg-gradient-to-r from-gray-400/40 to-transparent rotate-[67deg] animate-pulse delay-1000"></div>

        {/* Holographic grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(62, 139, 148, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(184, 35, 47, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced header section */}
        <div className="text-center mb-20">
          {/* Animated badge */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3E8B94]/50 to-[#B8232F]/50 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full px-8 py-3 shadow-2xl">
              <Brain className="h-5 w-5 text-[#3E8B94] animate-pulse" />
              <span className="text-white font-semibold text-sm tracking-wide">OUR EXPERTISE</span>
              <Sparkles className="h-5 w-5 text-[#B8232F] animate-spin" style={{ animationDuration: '3s' }} />
            </div>
          </div>

          {/* Main title with effects */}
          <div className="relative mb-8">
            <div className="absolute inset-0 transform translate-x-2 translate-y-2 opacity-20">
              <h2 className="text-4xl md:text-6xl font-black text-slate-800">
                Areas of Focus
              </h2>
            </div>
            <h2 className="relative text-4xl md:text-6xl font-black leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E8B94] via-white to-[#B8232F] animate-gradient-x">
                Areas of Focus
              </span>
            </h2>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-3 h-3 bg-[#3E8B94] rounded-full animate-ping opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-[#B8232F] rounded-full animate-pulse delay-300"></div>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nine core domains where we push boundaries and create innovative solutions
          </p>
        </div>

        {/* Enhanced cards grid - 3 cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group relative h-full transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card glow effect */}
              <div 
                className="absolute -inset-1 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  background: `linear-gradient(45deg, ${area.glowColor}40, transparent, ${area.glowColor}20)` 
                }}
              ></div>

              {/* Main card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Animated particles for each card */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 rounded-full animate-ping"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                        backgroundColor: area.glowColor,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon and title section */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      {/* Icon container */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${area.gradient} mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                        <div className="text-white">
                          {area.icon}
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#3E8B94] group-hover:to-[#B8232F] transition-all duration-300">
                        {area.title}
                      </h3>
                      
                      {/* Animated underline */}
                      <div className={`w-12 h-1 bg-gradient-to-r ${area.gradient} rounded-full group-hover:w-20 transition-all duration-500`}></div>
                    </div>

                    {/* Status indicator */}
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg flex-1 group-hover:text-gray-200 transition-colors duration-300">
                    {area.description}
                  </p>

                  {/* Technologies section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                        Technologies & Tools
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {area.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1.5 text-sm font-medium rounded-xl border transition-all duration-300 ${
                            hoveredCard === index
                              ? `border-transparent bg-gradient-to-r ${area.gradient} text-white shadow-lg transform scale-105`
                              : 'border-white/20 text-gray-300 bg-white/5 hover:border-white/40 hover:bg-white/10'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${area.gradient} rounded-full opacity-60 group-hover:animate-ping`}></div>
                <div className={`absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r ${area.gradient} rounded-full opacity-40 group-hover:animate-pulse`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3E8B94]/20 to-[#B8232F]/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 transform hover:scale-105 transition-all duration-500 shadow-2xl overflow-hidden">
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3E8B94]/10 via-transparent to-[#B8232F]/10 animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#3E8B94] to-[#B8232F] rounded-full animate-pulse"></div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3E8B94] to-[#B8232F]">
                    Ready to Innovate?
                  </h3>
                  <div className="w-3 h-3 bg-gradient-to-r from-[#B8232F] to-[#3E8B94] rounded-full animate-pulse delay-300"></div>
                </div>
                
                <p className="text-gray-300 mb-8 max-w-md mx-auto text-lg leading-relaxed">
                  Join us in exploring the fascinating world of artificial intelligence and machine learning.
                </p>
                
                <a
                  href="https://uncp.presence.io/organization/artificial-intelligence-at-uncp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3E8B94] to-[#B8232F] text-white font-semibold rounded-full hover:from-[#2e6c78] hover:to-[#a01e29] transition-all duration-500 transform hover:scale-110 shadow-lg text-lg"
                >
                  <Brain className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Get Involved</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}