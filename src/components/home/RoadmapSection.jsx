import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const phases = [
  {
    phase: 'Q1–Q2 2026', status: 'active', title: 'Launch',
    subtitle: 'Foundation & Fair Launch',
    color: '#6366f1', glow: 'rgba(99,102,241,0.2)',
    items: [
      { text: 'New $LBC mint & fair launch on Solana', done: true },
      { text: 'Website relaunch: lbc-hub.com + new domains', done: true },
      { text: 'Private pilot: 1–3 Starlink dishes + solar nodes', done: false },
      { text: '🚗 Driver Portal App — first mobile release', done: false },
    ],
  },
  {
    phase: 'Q3–Q4 2026', status: 'upcoming', title: 'Growth',
    subtitle: 'Wallet, Hub, Pool & DePIN Beta',
    color: '#8b5cf6', glow: 'rgba(139,92,246,0.2)',
    items: [
      { text: '💳 Lumina Blockchain Wallet App — iOS & Android launch', done: false },
      { text: '📱 LBC Hub App — iOS & Android release', done: false },
      { text: '🏊 $LBC Token Liquidity Pool launch — after LBC Hub App goes live', done: false },
      { text: 'DePIN node prototype with solar tracking', done: false },
      { text: 'Fiat ramp partnerships', done: false },
      { text: 'Community beta launch in target regions', done: false },
    ],
  },
  {
    phase: '2027', status: 'future', title: 'Scale',
    subtitle: 'Full Ecosystem & DAO',
    color: '#f59e0b', glow: 'rgba(251,191,36,0.15)',
    items: [
      { text: 'Scale DePIN nodes across Bekaa Valley', done: false },
      { text: 'Launch LBC governance DAO', done: false },
      { text: 'Global rollout: MENA, Africa, and emerging markets', done: false },
      { text: 'Advanced ecosystem integrations & partnerships', done: false },
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
        {phases.map(({ phase, status, title, subtitle, color, glow, items }, i) => (
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
              {/* Status badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                  style={{
                    background: status === 'active' ? `${color}18` : 'rgba(255,255,255,0.04)',
                    color: status === 'active' ? color : 'rgba(255,255,255,0.3)',
                    border: `1px solid ${status === 'active' ? `${color}30` : 'rgba(255,255,255,0.08)'}`,
                  }}>
                  {status === 'active' ? '● In Progress' : status === 'upcoming' ? '◌ Upcoming' : '◎ Future'}
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-slate-600">{phase}</span>
              </div>

              <h3 className="text-xl font-black text-white mb-0.5">{title}</h3>
              <p className="text-xs text-slate-600 mb-6 tracking-wide">{subtitle}</p>

              <div className="h-px mb-6" style={{ background: `linear-gradient(90deg, ${color}20, transparent)` }} />

              <ul className="space-y-4">
                {items.map(({ text, done }, j) => (
                  <li key={j} className="flex items-start gap-3">
                    {done
                      ? <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color }} />
                      : <div className="w-4 h-4 mt-0.5 flex-shrink-0 rounded-full border-2 flex items-center justify-center"
                          style={{ borderColor: `${color}40` }} />
                    }
                    <span className={`text-sm leading-relaxed ${done ? 'text-slate-300' : 'text-slate-500'}`}>{text}</span>
                  </li>
                ))}
              </ul>
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