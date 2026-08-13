import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const phases = [
  {
    phase: 'Q1–Q2 2026', status: 'active', title: 'Launch',
    subtitle: 'The Foundation Goes Live',
    intro: 'This is where LBC stops being an idea and starts being infrastructure.',
    color: '#6366f1', glow: 'rgba(99,102,241,0.2)',
    items: [
      { text: '📱 LBC Hub App goes live on iOS & Android — the front door to the entire ecosystem', done: false },
      { text: '🏊 $LBC Liquidity Pool launches right after — real trading, real price discovery', done: false },
      { text: '$LBC minted & fair-launched on Solana — no VC allocation games', done: true },
      { text: 'New website live at lbc-hub.com — built to scale with every domain we add', done: true },
    ],
  },
  {
    phase: 'Q3–Q4 2026', status: 'upcoming', title: 'Growth',
    subtitle: 'Putting Wheels on the Ground',
    intro: 'Once the Hub and Pool are live, we start proving real-world utility — starting with the people who move our communities.',
    color: '#8b5cf6', glow: 'rgba(139,92,246,0.2)',
    items: [
      { text: '🚗 Driver Protocol launches — a mobility-first driver portal built for real earnings, not gig-economy scraps', done: false },
      { text: 'DePIN node prototype rolls out with solar-tracked energy data on-chain', done: false },
      { text: 'Private pilot: 1–3 Starlink dishes + solar nodes go live in target regions', done: false },
      { text: 'Fiat ramp partnerships open the door for anyone to get in', done: false },
      { text: 'Community beta expands to early target regions', done: false },
    ],
  },
  {
    phase: '2027', status: 'future', title: 'Scale',
    subtitle: 'From Community to Global Network',
    intro: 'This is where LBC becomes what it was always meant to be — infrastructure for underserved communities everywhere.',
    color: '#f59e0b', glow: 'rgba(251,191,36,0.15)',
    items: [
      { text: '💳 LBC Wallet App launches on iOS & Android — your $LBC, SOL & USDC, always in your hands', done: false },
      { text: 'DePIN nodes scale across Bekaa Valley', done: false },
      { text: 'LBC governance DAO goes live — the community starts steering the ship', done: false },
      { text: 'Global rollout begins across MENA, Africa & emerging markets', done: false },
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
        {phases.map(({ phase, status, title, subtitle, intro, color, glow, items }, i) => (
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

              <h3 className="text-xl font-black text-white mb-0.5">{String(i + 1).padStart(2, '0')} - {title}</h3>
              <p className="text-xs text-slate-600 mb-3 tracking-wide">{subtitle}</p>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed italic font-light">{intro}</p>

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