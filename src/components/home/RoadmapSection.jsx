import React from 'react';
import { motion } from 'framer-motion';

const foundationWebsites = [
  { domain: 'LBC.Network', desc: 'Foundation & Protocol' },
  { domain: 'LBCHub.Io', desc: 'Big Brother & DeFi' },
  { domain: 'LBC-Hub.Com', desc: 'Community & Hub' },
  { domain: 'LBCHub.Site', desc: 'AI Builder Studio' },
  { domain: 'LBCHub.Tech', desc: 'LBC Auto' },
  { domain: 'LBCHub.App', desc: 'Driver Portal' },
  { domain: 'LBCHub.Live', desc: 'Live Events' },
  { domain: 'LBCHub.Shop', desc: 'Store & Digital Goods' },
  { domain: 'LBCHub.Ca', desc: 'LBC Canada' },
  { domain: 'LBCHub.Art', desc: 'NFT Gallery' },
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
      {/* ── TITLE ── */}
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-600 mb-3 block">Execution Plan</span>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Strategic Roadmap 2026–2028</h2>
      </motion.div>

      {/* ── FOUNDATION: WEBSITES ECOSYSTEM ── */}
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">Foundation — Websites Ecosystem (2026)</h3>
        </div>
        <p className="text-slate-500 text-sm font-light mb-8 ml-4">These LBC Websites Are Already Live As The Foundation Of The Ecosystem.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {foundationWebsites.map(({ domain, desc }, i) => (
            <motion.div key={domain}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.35, delay: (i % 3) * 0.05 }}
              className="flex items-center gap-4 rounded-2xl border p-4 hover:border-indigo-500/30 transition-colors duration-300"
              style={{ background: 'rgba(10,9,24,0.6)', borderColor: 'rgba(255,255,255,0.05)' }}>
              <div className="flex items-center justify-center w-11 h-11 rounded-xl text-lg font-black flex-shrink-0"
                style={{ background: 'rgba(99,102,241,0.15)', border: '2px solid rgba(99,102,241,0.45)', color: '#818cf8' }}>
                {i + 1}
              </div>
              <div className="min-w-0">
                <p className="text-white text-sm font-bold font-mono tracking-wide leading-tight">{domain}</p>
                <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── STARTING APPS: LAUNCH SEQUENCE ── */}
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-amber-500 to-emerald-500" />
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">Starting Apps — Launch Sequence (2026–2028)</h3>
        </div>
        <p className="text-slate-500 text-sm font-light mb-8 ml-4">The App Launch Order, Built On Top Of The Foundation.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {startingApps.map(({ name, year, color }, i) => (
            <motion.div key={name}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="rounded-2xl border p-6 flex items-center gap-5"
              style={{ background: 'rgba(10,9,24,0.6)', borderColor: `${color}25`, boxShadow: `0 0 30px ${color}12` }}>
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl text-3xl font-black flex-shrink-0"
                style={{ background: `${color}18`, border: `2px solid ${color}55`, color, boxShadow: `0 0 24px ${color}25` }}>
                {i + 1}
              </div>
              <div>
                <p className="text-white text-base font-black leading-tight">{name}</p>
                <p className="text-[11px] font-bold tracking-widest uppercase mt-1" style={{ color }}>{year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}