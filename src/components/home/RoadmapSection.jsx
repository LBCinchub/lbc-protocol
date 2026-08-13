import React from 'react';
import { motion } from 'framer-motion';

const startingApps = [
  { name: 'LBC Hub App', year: '2026', color: '#6366f1' },
  { name: '$LBC Liquidity Pool', year: '2026', color: '#f59e0b', keyMilestone: true },
  { name: 'Driver App', year: '2026', color: '#10b981' },
  { name: 'Wallet App', year: '2027', color: '#8b5cf6' },
  { name: 'LBC Auto App', year: '2027', color: '#14b8a6' },
  { name: 'LBC Live App', year: '2028', color: '#a855f7' },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="px-6 pb-24">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-600 mb-3 block">Execution Plan</span>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Strategic Roadmap 2026-2028 — LBC Hub App → $LBC Pool → Driver App → Wallet App</h2>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-amber-500 to-emerald-500" />
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">App Launch Sequence (2026–2028)</h3>
        </div>
        <p className="text-slate-500 text-sm font-light mb-8 ml-4">Building On The Foundation — Apps Launching Next</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {startingApps.map(({ name, year, color, keyMilestone }, i) => (
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
                {keyMilestone && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-black tracking-wide mb-1.5"
                    style={{ background: 'rgba(245,158,11,0.18)', border: '1px solid rgba(245,158,11,0.5)', color: '#fbbf24' }}>
                    ★ KEY MILESTONE: $LBC POOL
                  </span>
                )}
                <p className="text-white text-base font-black leading-tight" style={keyMilestone ? { textShadow: '0 0 12px rgba(245,158,11,0.4)' } : undefined}>{name}</p>
                <p className="text-[11px] font-bold tracking-widest uppercase mt-1" style={{ color }}>{year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}