import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    number: 1,
    title: 'Launch',
    period: 'Q1–Q2 2026',
    status: 'IN PROGRESS',
    statusColor: '#10b981',
    color: '#10b981',
    items: [
      'LBC Hub App goes live on iOS & Android',
      '$LBC Liquidity Pool launches right after',
      '$LBC minted & fair-launched on Solana',
      'New website live at lbc-hub.com',
    ],
  },
  {
    number: 2,
    title: 'Growth',
    period: 'Q3–Q4 2026',
    status: 'UPCOMING',
    statusColor: '#f59e0b',
    color: '#f59e0b',
    items: [
      'Driver Protocol launches',
      'DePIN node prototype with solar tracking',
      'Private pilot: 1–3 Starlink dishes + solar nodes',
      'Fiat ramp partnerships',
      'Community beta in target regions',
    ],
  },
  {
    number: 3,
    title: 'Scale',
    period: '2027',
    status: 'FUTURE',
    statusColor: '#6366f1',
    color: '#6366f1',
    items: [
      'LBC Wallet App launches on iOS & Android',
      'DePIN nodes scale across Bekaa Valley',
      'LBC governance DAO goes live',
      'Global rollout: MENA, Africa & emerging markets',
    ],
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="px-6 pb-24">
      {/* ── TITLE ── */}
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-600 mb-3 block">Execution Plan</span>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Strategic Roadmap 2026–2028</h2>
      </motion.div>

      {/* ── PHASES ── */}
      <div className="space-y-6">
        {phases.map((phase, i) => (
          <motion.div key={phase.title}
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
            className="relative rounded-3xl border p-7 md:p-9 overflow-hidden"
            style={{ background: 'rgba(10,9,24,0.6)', borderColor: `${phase.color}22`, boxShadow: `0 0 40px ${phase.color}10` }}>
            {/* glow line top */}
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${phase.color}55, transparent)` }} />

            {/* Phase header */}
            <div className="flex items-center gap-5 mb-8">
              <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl text-4xl md:text-5xl font-black flex-shrink-0"
                style={{ background: `${phase.color}18`, border: `2px solid ${phase.color}50`, color: phase.color, boxShadow: `0 0 24px ${phase.color}30` }}>
                {phase.number}
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-none">{phase.title}</h3>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase"
                    style={{ background: `${phase.statusColor}15`, color: phase.statusColor, border: `1px solid ${phase.statusColor}40` }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: phase.statusColor }} />
                    {phase.status}
                  </span>
                </div>
                <p className="text-slate-500 text-xs font-semibold tracking-wider uppercase mt-2">{phase.period}</p>
              </div>
            </div>

            {/* Numbered items */}
            <div className="space-y-3">
              {phase.items.map((item, j) => (
                <div key={j} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg text-sm font-black flex-shrink-0"
                    style={{ background: `${phase.color}14`, border: `1px solid ${phase.color}38`, color: phase.color }}>
                    {j + 1}
                  </div>
                  <span className="text-slate-300 text-sm md:text-base font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}