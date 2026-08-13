import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    phase: 'Q1–Q2 2026', status: 'active', number: 1, title: 'Phase 1 — Launch',
    subtitle: 'The Foundation Goes Live',
    intro: 'This is where LBC stops being an idea and starts being infrastructure.',
    color: '#6366f1', glow: 'rgba(99,102,241,0.2)',
    items: [
      'LBC Hub App — iOS & Android release',
      '$LBC Token Liquidity Pool launch — after LBC Hub App goes live',
      'New $LBC mint & fair launch on Solana',
      'Website relaunch: lbc-hub.com + new domains',
    ],
  },
  {
    phase: 'Q3–Q4 2026', status: 'upcoming', number: 2, title: 'Phase 2 — Growth',
    subtitle: 'Putting Wheels on the Ground',
    intro: 'Once the Hub and Pool are live, we start proving real-world utility — starting with the people who move our communities.',
    color: '#8b5cf6', glow: 'rgba(139,92,246,0.2)',
    items: [
      'Driver Protocol — mobility-first driver portal and protocol',
      'DePIN node prototype with solar tracking',
      'Private pilot: 1–3 Starlink dishes + solar nodes',
      'Fiat ramp partnerships',
      'Community beta launch in target regions',
    ],
  },
  {
    phase: '2027', status: 'future', number: 3, title: 'Phase 3 — Scale',
    subtitle: 'From Community to Global Network',
    intro: 'This is where LBC becomes what it was always meant to be — infrastructure for underserved communities everywhere.',
    color: '#f59e0b', glow: 'rgba(251,191,36,0.15)',
    items: [
      'LBC Wallet App — iOS & Android launch',
      'Scale DePIN nodes across Bekaa Valley',
      'Launch LBC governance DAO',
      'Global rollout: MENA, Africa, and emerging markets',
    ],
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="px-6 pb-24">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-600 mb-3 block">Execution Plan</span>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Strategic Roadmap 2026–2027</h2>
        <p className="text-slate-500 text-base font-light max-w-2xl">
          A structured, multi-phase approach to building global digital infrastructure — from pilot communities to worldwide scale.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {phases.map(({ phase, status, number, title, subtitle, intro, color, glow, items }, i) => (
          <motion.div key={phase}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative rounded-2xl border overflow-hidden"
            style={{
              background: 'rgba(6,5,16,0.9)',
              borderColor: `${color}25`,
              boxShadow: `0 0 40px ${glow}`,
            }}>
            {/* Top accent bar */}
            <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />

            <div className="p-7">
              {/* Large number badge + status + date */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full text-2xl font-black flex-shrink-0"
                    style={{ background: `${color}18`, border: `2px solid ${color}55`, color }}>
                    {number}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{
                      background: status === 'active' ? `${color}18` : 'rgba(255,255,255,0.04)',
                      color: status === 'active' ? color : 'rgba(255,255,255,0.3)',
                      border: `1px solid ${status === 'active' ? `${color}30` : 'rgba(255,255,255,0.08)'}`,
                    }}>
                    {status === 'active' ? 'In Progress' : status === 'upcoming' ? 'Upcoming' : 'Future'}
                  </span>
                </div>
                <span className="text-[10px] font-semibold tracking-widest text-slate-600">{phase}</span>
              </div>

              <h3 className="text-xl font-black text-white mb-0.5">{title}</h3>
              <p className="text-xs text-slate-600 mb-3 tracking-wide">{subtitle}</p>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed italic font-light">{intro}</p>

              <div className="h-px mb-6" style={{ background: `linear-gradient(90deg, ${color}20, transparent)` }} />

              {/* Numbered steps */}
              <ol className="space-y-4">
                {items.map((text, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-5 h-5 mt-0.5 flex-shrink-0 rounded-md text-[11px] font-bold"
                      style={{ background: `${color}15`, border: `1px solid ${color}35`, color }}>
                      {j + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-slate-400">{text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-slate-600">
        <span>🇨🇦 Founded in Canada</span>
        <span className="hidden sm:block w-px h-3 bg-white/8 self-center" />
        <span>🌍 Scaling to MENA, Africa & Emerging Markets</span>
        <span className="hidden sm:block w-px h-3 bg-white/8 self-center" />
        <span>☀️ Solar-Powered DePIN Nodes</span>
      </motion.div>
    </section>
  );
}