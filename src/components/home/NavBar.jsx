import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Solution', id: 'solution' },
  { label: 'Token', id: 'token' },
  { label: 'Ecosystem', id: 'ecosystem' },
  { label: 'Roadmap', id: 'roadmap' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 px-6 py-4 flex items-center justify-between transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(5,5,16,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      }}>
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #f59e0b, #7c3aed)', boxShadow: '0 0 16px rgba(124,58,237,0.35)' }}>
          <Star className="w-4 h-4 text-white fill-white" />
        </div>
        <span className="font-black text-base tracking-tight text-white">LBC Protocol</span>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-1">
        {navLinks.map(({ label, id }) => (
          <button key={id} onClick={() => scrollTo(id)}
            className="px-4 py-2 rounded-full text-xs font-semibold text-slate-400 hover:text-white transition-colors">
            {label}
          </button>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-2">
        <a href="https://lbc-hub.com" target="_blank" rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold text-slate-400 hover:text-white transition-colors"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Hub
        </a>
        <a href="https://lbchub.tech" target="_blank" rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold text-slate-400 hover:text-white transition-colors"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />Auto
        </a>
        <a href="https://lbchub.ca" target="_blank" rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border text-amber-300 hover:text-amber-200 transition-colors"
          style={{ background: 'rgba(251,191,36,0.06)', borderColor: 'rgba(251,191,36,0.2)' }}>
          <TrendingUp className="w-3.5 h-3.5" /> Investors
        </a>
        <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 border-b py-4 px-6 flex flex-col gap-2"
          style={{ background: 'rgba(5,5,16,0.97)', borderColor: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)' }}>
          {navLinks.map(({ label, id }) => (
            <button key={id} onClick={() => scrollTo(id)}
              className="text-left px-4 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all">
              {label}
            </button>
          ))}
          <a href="https://lbchub.ca" target="_blank" rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-amber-300"
            style={{ background: 'rgba(251,191,36,0.08)' }}>
            <TrendingUp className="w-4 h-4" /> Investor Relations
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}