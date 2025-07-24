'use client';

import { ExternalLink } from 'lucide-react';

/**
 * Footer Component
 * 
 * Site footer with brand information, navigation links, contact details,
 * and social media links. Uses AI@UNCP brand colors and maintains
 * consistency with the overall site design.
 */
export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white py-16 overflow-hidden">
      {/* Background effects matching the site theme */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#3E8B94]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#B8232F]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gray-400/5 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(62,139,148,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(184,35,47,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Brand section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3E8B94] to-[#B8232F] rounded-lg blur opacity-60"></div>
                <div className="relative w-26 h-12 bg-gradient-to-r from-[#3E8B94] to-[#B8232F] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AI@UNCP</span>
                </div>
              </div>
              
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Artificial Intelligence @ UNCP is a student-led organization at the University of North Carolina at Pembroke focused on hands-on learning, real-world projects, and creative exploration in AI.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-[#3E8B94] rounded-full animate-pulse"></div>
              <span>Innovating at UNC Pembroke</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#3E8B94] to-[#B8232F]"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://uncp.presence.io/organization/artificial-intelligence-at-uncp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-[#3E8B94] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  Join
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://hackuncp.github.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#B8232F] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  HackUNCP
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="#team-section" 
                  className="text-gray-300 hover:text-[#3E8B94] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative">
              Contact
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#3E8B94] to-[#B8232F]"></div>
            </h4>
            <div className="space-y-3">
              <div className="text-gray-300">
                <p className="font-medium text-white mb-1">UNC Pembroke</p>
                <p className="text-sm leading-relaxed">Department of Mathematics and Computer Science</p>
              </div>
              <div>
                <a 
                  href="mailto:mathcs@uncp.edu" 
                  className="text-gray-300 hover:text-[#3E8B94] transition-colors duration-300 text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-[#3E8B94] rounded-full"></span>
                  mathcs@uncp.edu
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 AI@UNCP. All rights reserved.
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-6">
              <span className="text-gray-400 text-sm hidden md:block">Follow us:</span>
              <div className="flex gap-4">
                
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/company/ai-at-uncp/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#3E8B94] hover:border-[#3E8B94]/50 transition-all duration-300 hover:scale-110"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c .734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/aiuncp/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#B8232F] hover:border-[#B8232F]/50 transition-all duration-300 hover:scale-110"
                  title="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* BraveConnect */}
                <a 
                  href="https://uncp.presence.io/organization/artificial-intelligence-at-uncp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-all duration-300 hover:scale-110"
                  title="BraveConnect"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}