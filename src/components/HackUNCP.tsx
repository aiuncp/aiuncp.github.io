'use client';

import { useState, useEffect } from 'react';
import {
  Calendar, MapPin, Clock, Users, Code, Trophy, Award,
  ExternalLink, ChevronLeft, ChevronRight, Play, Pause,
  Sparkles, Brain, Target, Lightbulb, Shield, Rocket,
  GraduationCap, Utensils, Wrench, ArrowRight,
} from 'lucide-react';
import Image from 'next/image';

export default function HackUNCP() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  /* ── 2025 recap data ─────────────────────────────────── */

  const stats2025 = [
    { number: '42', label: 'Participants', icon: <Users className="h-5 w-5" />, color: 'from-[#3E8B94] to-cyan-600' },
    { number: '12', label: 'Projects', icon: <Code className="h-5 w-5" />, color: 'from-[#B8232F] to-red-600' },
    { number: '20', label: 'Judges', icon: <Award className="h-5 w-5" />, color: 'from-slate-400 to-slate-600' },
    { number: '$7,486', label: 'In Prizes', icon: <Trophy className="h-5 w-5" />, color: 'from-gray-400 to-gray-600' },
  ];

  const winners = [
    { place: '1st Place', team: 'VENOMAI', prize: '$2,349 + iPad Air M3', color: 'from-[#B8232F] to-red-600', link: 'https://devpost.com/software/venomai' },
    { place: '2nd Place', team: 'EchoLearn', prize: '$1,407 + Apple Watch', color: 'from-slate-400 to-slate-600', link: 'https://devpost.com/software/echolearn' },
    { place: '3rd Place', team: 'LiftMate', prize: '$765 + AirPods 4', color: 'from-[#3E8B94] to-teal-700', link: 'https://devpost.com/software/liftmate' },
  ];

  const trackWinners = [
    { track: 'Sustainability', project: 'Firesafe', prize: '$594', link: 'https://devpost.com/software/firesafe', icon: <Lightbulb className="w-4 h-4" /> },
    { track: 'Education', project: 'Baisly', prize: '$593', link: 'https://devpost.com/software/baisly', icon: <Brain className="w-4 h-4" /> },
    { track: 'Interactive Media', project: 'Web Bestie', prize: '$592', link: 'https://devpost.com/software/web-bestie', icon: <Sparkles className="w-4 h-4" /> },
    { track: 'Healthcare', project: "AI-You-Doin'", prize: '$592', link: 'https://devpost.com/software/ai-you-doin', icon: <Shield className="w-4 h-4" /> },
    { track: 'Cybersecurity', project: 'VENOMAI', prize: '$594', link: 'https://devpost.com/software/venomai', icon: <Target className="w-4 h-4" /> },
  ];

  const photoSlides = Array.from({ length: 25 }, (_, i) => `/hackuncp2025/hackuncp2025_${i + 2}.jpg`);

  /* ── 2026 data ───────────────────────────────────────── */

  const tracks2026 = [
    { name: 'AI for Education', icon: <Brain className="w-5 h-5" />, color: 'from-[#3E8B94] to-cyan-600' },
    { name: 'AI for Healthcare', icon: <Shield className="w-5 h-5" />, color: 'from-[#B8232F] to-red-600' },
    { name: 'AI for Sustainability', icon: <Lightbulb className="w-5 h-5" />, color: 'from-emerald-500 to-green-700' },
    { name: 'AI for Cybersecurity', icon: <Target className="w-5 h-5" />, color: 'from-slate-400 to-slate-600' },
  ];

  const highlights2026 = [
    { icon: <GraduationCap className="w-5 h-5" />, text: 'Undergrad & graduate students welcome' },
    { icon: <Utensils className="w-5 h-5" />, text: 'Free meals, snacks & swag' },
    { icon: <Wrench className="w-5 h-5" />, text: 'Workshops & mentorship from industry pros' },
    { icon: <Users className="w-5 h-5" />, text: '100+ hackers expected' },
  ];

  /* ── carousel logic ──────────────────────────────────── */

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => setCurrentSlide(p => (p + 1) % photoSlides.length), 4000);
    return () => clearInterval(id);
  }, [isPlaying, photoSlides.length]);

  const next = () => setCurrentSlide(p => (p + 1) % photoSlides.length);
  const prev = () => setCurrentSlide(p => (p - 1 + photoSlides.length) % photoSlides.length);

  /* ── render ──────────────────────────────────────────── */

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden">
      {/* subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#3E8B94]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#B8232F]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ────────────── Section Header ────────────── */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
            <Rocket className="h-5 w-5 text-[#3E8B94]" />
            <span className="text-white font-semibold text-sm tracking-wide">AI@UNCP&apos;s Flagship Event</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-4">
            <span className="text-white">Hack</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E8B94] to-[#B8232F]">UNCP</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A 24-hour AI hackathon uniting brilliant minds to solve real-world challenges through artificial intelligence.
          </p>

          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2">
              <Image src="/logos/HackUNCP Logo.png" alt="HackUNCP Logo" width={40} height={40} className="rounded-full" />
              <a
                href="https://hackuncp.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3E8B94] hover:text-white transition-colors font-medium flex items-center gap-1"
              >
                hackuncp.github.io <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            HackUNCP 2026 — HAPPENING THIS MONTH
           ══════════════════════════════════════════════ */}
        <div className="mb-28">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3E8B94]/40" />
            <h3 className="text-3xl md:text-4xl font-black text-white flex items-center gap-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E8B94] to-[#B8232F]">2026</span>
              <span className="px-3 py-1 text-sm font-bold bg-[#B8232F] text-white rounded-full animate-pulse">THIS MONTH</span>
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B8232F]/40" />
          </div>

          {/* event info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { icon: <Calendar className="h-6 w-6" />, title: 'Date', info: 'Feb 21 – 22, 2026', sub: 'Saturday – Sunday' },
              { icon: <Clock className="h-6 w-6" />, title: 'Time', info: '5:30 PM – 5:30 PM', sub: '24 hours of hacking' },
              { icon: <MapPin className="h-6 w-6" />, title: 'Location', info: 'UNC Pembroke', sub: 'Pembroke, NC' },
              { icon: <Trophy className="h-6 w-6" />, title: 'Cost', info: 'Completely Free', sub: 'Meals & swag included' },
            ].map((d, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-[#3E8B94]/40 transition-all duration-300 hover:scale-[1.03]">
                <div className="text-[#3E8B94] mb-3 flex justify-center">{d.icon}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider font-medium mb-1">{d.title}</div>
                <div className="text-xl font-bold text-white mb-1">{d.info}</div>
                <div className="text-sm text-gray-400">{d.sub}</div>
              </div>
            ))}
          </div>

          {/* tracks */}
          <div className="mb-12">
            <h4 className="text-xl font-bold text-white mb-6 text-center">Competition Tracks</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tracks2026.map((t, i) => (
                <div key={i} className="group bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-all duration-300">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {t.icon}
                  </div>
                  <span className="text-gray-200 font-medium text-sm">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
            {highlights2026.map((h, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3">
                <div className="text-[#3E8B94]">{h.icon}</div>
                <span className="text-gray-300 text-sm font-medium">{h.text}</span>
              </div>
            ))}
          </div>

          {/* sponsors */}
          <div className="text-center mb-10">
            <p className="text-sm text-gray-400 mb-2 uppercase tracking-wider font-medium">Sponsored by</p>
            <p className="text-gray-300 text-sm">
              CodeCrafters &middot; UNCP College of Arts & Sciences &middot; UNCP Math & CS &middot; Thomas College of Business &middot; Byrd&apos;s Computer Service &middot; Sakura Sky
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://forms.gle/9nKvHB9M3oEAtQXg7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-[#3E8B94] to-[#B8232F] text-white font-bold rounded-full hover:from-[#2e6c78] hover:to-[#a01e29] transition-all duration-300 hover:scale-105 shadow-lg text-lg flex items-center gap-2"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://hackuncp-2026.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 text-lg flex items-center gap-2"
            >
              Devpost <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            HackUNCP 2025 — RECAP
           ══════════════════════════════════════════════ */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
            <h3 className="text-3xl md:text-4xl font-black text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E8B94] to-[#B8232F]">2025</span>
              <span className="text-gray-400 text-lg font-semibold ml-3">Recap</span>
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          {/* photo carousel */}
          <div className="mb-16 group/carousel">
            <div className="relative h-72 sm:h-96 md:h-[540px] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              {photoSlides.map((src, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-700 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img src={src} alt={`HackUNCP 2025 – ${i + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              ))}

              {/* counter */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium">
                {currentSlide + 1} / {photoSlides.length}
              </div>

              {/* controls */}
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition opacity-0 group-hover/carousel:opacity-100">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition opacity-0 group-hover/carousel:opacity-100">
                <ChevronRight className="w-5 h-5" />
              </button>

              <button onClick={() => setIsPlaying(p => !p)} className="absolute top-4 right-4 w-9 h-9 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition">
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
            </div>

            {/* dots */}
            <div className="flex justify-center mt-4 gap-1.5">
              {photoSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-6 bg-[#3E8B94]' : 'w-1.5 bg-white/30 hover:bg-white/50'}`}
                />
              ))}
            </div>
          </div>

          {/* stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {stats2025.map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className={`w-11 h-11 mx-auto mb-3 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white`}>
                  {s.icon}
                </div>
                <div className={`text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${s.color} mb-1 font-mono`}>
                  {s.number}
                </div>
                <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>

          {/* overall winners */}
          <div className="mb-14">
            <h4 className="text-2xl font-bold text-white text-center mb-8">Overall Winners</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {winners.map((w, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all duration-300">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${w.color} text-white font-bold text-sm mb-5`}>
                    <Trophy className="w-4 h-4" />
                    {w.place}
                  </div>
                  <h5 className="text-2xl font-bold text-white mb-1">{w.team}</h5>
                  <p className="text-[#3E8B94] font-semibold mb-4">{w.prize}</p>
                  <a
                    href={w.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm flex items-center gap-1 transition-colors"
                  >
                    View on Devpost <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* track winners */}
          <div className="mb-14">
            <h4 className="text-xl font-bold text-white text-center mb-6">Track Winners</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {trackWinners.map((tw, i) => (
                <a
                  key={i}
                  href={tw.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-[#3E8B94] mb-2 flex justify-center">{tw.icon}</div>
                  <div className="text-xs text-gray-400 font-medium mb-1">{tw.track}</div>
                  <div className="text-white font-bold text-sm mb-1">{tw.project}</div>
                  <div className="text-[#3E8B94] font-semibold text-sm">{tw.prize}</div>
                </a>
              ))}
            </div>
          </div>

          {/* browse all projects link */}
          <div className="text-center">
            <a
              href="https://hackuncp-2025.devpost.com/project-gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
            >
              Browse all 2025 projects on Devpost <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
