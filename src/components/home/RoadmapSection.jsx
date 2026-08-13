import React from 'react';
import { motion } from 'framer-motion';

const websites = [
  'LBC.NETWORK',
  'LBCHUB.IO',
  'LBC-HUB.COM',
  'LBCHUB.SITE',
  'LBCHUB.TECH',
  'LBCHUB.APP',
  'LBCHUB.SHOP',
  'LBCHUB.LIVE',
  'LBCHUB.ART',
  'LBCHUB.CA',
  'LBCHUB.ORG',
  'LBC.COM',
  'LBC.INK',
  'LBCHUB.SUPPORT',
];

const startingApps = [
  { name: 'LBC Hub App', year: '2026', color: '#6366f1' },
  { name: '$LBC Liquidity Pool', year: '2026', color: '#f59e0b' },
  { name: 'Driver App', year: '2026', color: '#10b981' },
  { name: 'Wallet App', year: '2027', color: '#8b5cf6' },
  { name: 'LBC Auto App', year: '2027', color: '#14b8a6' },
  { name: 'LBC Live App', year: '2028', color: '#a855f7' },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="px-6 pb-24">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-600 mb-3 block">Execution Plan</span>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Strategic Roadmap 2026–2028</h2>
        <p className="text-slate-500 text-base font-light max-w-2xl">
          A clear, ordered view of the LBC ecosystem — the websites that form the network and the apps launching in sequence.
        </p>
      </motion.div>

      {/* ── SECTION 1: WEBSITES ECOSYSTEM ── */}
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">WEBSITES ECOSYSTEM</h3>
          <span className="text-[10px] font-bold tracking-widest uppercase text-slate-600 ml-1">14 domains</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {websites.map((site, i) => (
            <motion.div key={site}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.35, delay: (i % 3) * 0.05 }}
              className="flex items-center gap-4 rounded-2xl border p-4 hover:border-indigo-500/30 transition-colors duration-300"
              style={{ background: 'rgba(10,9,24,0.6)', borderColor: 'rgba(255,255,255,0.05)' }}>
              <div className="flex items-center justify-center w-11 h-11 rounded-xl text-2xl font-black flex-shrink-0"
                style={{ background: 'rgba(99,102,241,0.15)', border: '2px solid rgba(99,102,241,0.45)', color: '#818cf8' }}>
                {i + 1}
              </div>
              <span className="text-white text-sm font-bold font-mono tracking-wide">{site}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── SECTION 2: STARTING APPS ── */}
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-amber-500 to-emerald-500" />
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">STARTING APPS</h3>
          <span className="text-[10px] font-bold tracking-widest uppercase text-slate-600 ml-1">launch order · 2026–2028</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {startingApps.map(({ name, year, color }, i) => (
            <motion.div key={name}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="relative rounded-2xl border overflow-hidden"
              style={{ background: 'rgba(6,5,16,0.9)', borderColor: `${color}25`, boxShadow: `0 0 30px ${color}18` }}>
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
              <div className="p-6 flex items-center gap-5">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl text-3xl font-black flex-shrink-0"
                  style={{ background: `${color}18`, border: `2px solid ${color}55`, color }}>
                  {i + 1}
                </div>
                <div>
                  <p className="text-white text-base font-black leading-tight">{name}</p>
                  <p className="text-[11px] font-bold tracking-widest uppercase mt-1" style={{ color }}>{year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-slate-600">
        <span>🇨🇦 Founded in Canada</span>
        <span className="hidden sm:block w-px h-3 bg-white/8 self-center" />
        <span>🌍 Scaling to MENA, Africa & Emerging Markets</span>
        <span className="hidden sm:block w-px h-3 bg-white/8 self-center" />
        <span>☀️ Solar-Powered DePIN Nodes</span>
      </motion.div>
    </section>
  );
}