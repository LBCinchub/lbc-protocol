import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Grid, TrendingUp, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="px-6 pt-16 pb-24 text-center relative">
      {/* Floating orb behind hero text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)' }} />

      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-semibold tracking-widest uppercase border border-amber-400/20 text-amber-400/80 mb-10"
          style={{ background: 'rgba(251,191,36,0.06)', backdropFilter: 'blur(8px)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Powered by Lumina Blockchain ($LBC) · Built on Solana · Founded in Canada
        </span>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }}>
        <h1 className="text-5xl md:text-7xl lg:text-[82px] font-black leading-[1.02] tracking-tight mb-6">
          <span className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.75) 100%)' }}>
            LBC Protocol
          </span>
        </h1>
      </motion.div>

      <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}
        className="text-xl md:text-2xl font-light mb-6 leading-snug"
        style={{ color: 'rgba(255,255,255,0.5)' }}>
        Illuminating Communities with Transparent, Inclusive Technology
      </motion.p>

      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.26 }}
        className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed mb-14 font-light">
        A Solana-powered ecosystem delivering real-world utility through the Lumina Blockchain ($LBC) token —
        wallets, DePIN nodes, a driver portal, and transparent governance for underserved regions globally.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.34 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
        <a href="#solution"
          className="group flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 0 32px rgba(124,58,237,0.4)' }}
          onClick={(e) => { e.preventDefault(); document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' }); }}>
          Explore Solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="#ecosystem"
          className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold border text-slate-300 hover:text-white hover:border-white/20 transition-all duration-300"
          style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
          onClick={(e) => { e.preventDefault(); document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' }); }}>
          <Grid className="w-4 h-4" /> Explore Ecosystem
        </a>
      </motion.div>

      {/* Stats bar */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.44 }}
        className="flex flex-wrap items-center justify-center gap-px rounded-2xl overflow-hidden border border-white/[0.06] max-w-2xl mx-auto"
        style={{ background: 'rgba(255,255,255,0.02)' }}>
        {[
          { label: 'Token Standard', value: 'SPL / Solana' },
          { label: 'Avg TX Cost', value: '~$0.00025' },
          { label: 'Network', value: 'Solana Mainnet' },
          { label: 'Token Symbol', value: '$LBC' },
        ].map(({ label, value }, i) => (
          <div key={i} className="flex-1 min-w-[120px] px-5 py-4 border-r last:border-r-0 text-center"
            style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            <p className="text-white font-bold text-sm">{value}</p>
            <p className="text-slate-600 text-[10px] mt-0.5 tracking-wide">{label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}