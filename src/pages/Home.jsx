import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe, LayoutDashboard, Truck, Wallet, TrendingUp, Heart,
  ShoppingBag, Palette, HeadphonesIcon, ExternalLink,
  Zap, Leaf, Wifi, ArrowRight, ChevronRight, Shield, Users, Star
} from 'lucide-react';

const domains = [
  { url: 'lbc.network', fullUrl: 'https://lbc.network', name: 'Main Homepage', description: 'The official LBC Network company homepage', icon: Globe, gradient: 'from-blue-500 to-cyan-400', glow: 'rgba(59,130,246,0.15)' },
  { url: 'lbchub.io', fullUrl: 'https://lbchub.io', name: 'Interactive Hub', description: 'Central command dashboard for all operations', icon: LayoutDashboard, gradient: 'from-violet-500 to-purple-400', glow: 'rgba(139,92,246,0.15)' },
  { url: 'lumina-blockchain.com', fullUrl: 'https://lumina-blockchain.com', name: 'Lumina Wallet', description: 'Blockchain wallet, $LUMINA token & documentation', icon: Wallet, gradient: 'from-amber-400 to-yellow-300', glow: 'rgba(251,191,36,0.15)' },
  { url: 'lbchub.app', fullUrl: 'https://lbchub.app', name: 'Driver Portal', description: 'Driver management and logistics center', icon: Truck, gradient: 'from-emerald-500 to-teal-400', glow: 'rgba(16,185,129,0.15)' },
  { url: 'lbchub.ca', fullUrl: 'https://lbchub.ca', name: 'Investor Relations', description: 'Investment opportunities, reports & financials', icon: TrendingUp, gradient: 'from-indigo-500 to-blue-400', glow: 'rgba(99,102,241,0.15)' },
  { url: 'lbchub.org', fullUrl: 'https://lbchub.org', name: 'Charity Platform', description: 'Community initiatives and social impact', icon: Heart, gradient: 'from-rose-500 to-pink-400', glow: 'rgba(244,63,94,0.15)' },
  { url: 'lbchub.support', fullUrl: 'https://lbchub.support', name: 'Support Center', description: '24/7 customer support and help resources', icon: HeadphonesIcon, gradient: 'from-sky-500 to-blue-400', glow: 'rgba(14,165,233,0.15)' },
  { url: 'lbchub.shop', fullUrl: 'https://lbchub.shop', name: 'Official Store', description: 'Merchandise, products and branded goods', icon: ShoppingBag, gradient: 'from-fuchsia-500 to-purple-400', glow: 'rgba(217,70,239,0.15)' },
  { url: 'lbchub.art', fullUrl: 'https://lbchub.art', name: 'NFT Gallery', description: 'Digital art collection and NFT showcase', icon: Palette, gradient: 'from-cyan-500 to-teal-400', glow: 'rgba(6,182,212,0.15)' },
];

const trustItems = [
  { icon: Zap, label: 'Powered by $LUMINA Token on Solana' },
  { icon: Shield, label: 'Infrastructure-Focused Ecosystem' },
  { icon: Users, label: 'Community-Driven Innovation' },
];

const missionPillars = [
  { icon: Zap, title: 'Blockchain', desc: 'Decentralized finance and transparent digital infrastructure for everyone.', color: 'amber' },
  { icon: Leaf, title: 'Green Energy', desc: 'Sustainable energy solutions powering the next generation of digital access.', color: 'emerald' },
  { icon: Wifi, title: 'Digital Access', desc: 'Bridging the connectivity gap across underserved communities in MENA & Africa.', color: 'cyan' },
];

const colorMap = {
  amber: { text: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20', glow: 'rgba(251,191,36,0.12)' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20', glow: 'rgba(16,185,129,0.12)' },
  cyan: { text: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/20', glow: 'rgba(6,182,212,0.12)' },
};

function DomainCard({ domain, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = domain.icon;
  return (
    <motion.a
      href={domain.fullUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group block relative"
    >
      <div
        className="relative rounded-2xl p-6 border transition-all duration-500 overflow-hidden"
        style={{
          background: hovered
            ? 'linear-gradient(135deg, rgba(15,15,35,0.95), rgba(20,10,40,0.95))'
            : 'linear-gradient(135deg, rgba(10,10,25,0.8), rgba(15,8,30,0.8))',
          borderColor: hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)',
          boxShadow: hovered ? `0 0 40px ${domain.glow}, 0 20px 60px rgba(0,0,0,0.4)` : '0 4px 24px rgba(0,0,0,0.3)',
        }}
      >
        {/* Corner glow */}
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl transition-opacity duration-500"
          style={{ background: `bg-gradient-to-br ${domain.gradient}`, opacity: hovered ? 0.15 : 0 }}
        />

        <div className="flex items-start justify-between mb-5">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${domain.gradient} shadow-lg transition-transform duration-300 ${hovered ? 'scale-110' : 'scale-100'}`}>
            <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
          <motion.div animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 6 }} transition={{ duration: 0.2 }}>
            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${domain.gradient} flex items-center justify-center`}>
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </div>
          </motion.div>
        </div>

        <h3 className="text-white font-semibold text-base mb-1.5 group-hover:text-white transition-colors">{domain.name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">{domain.description}</p>

        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-500 text-xs font-mono">{domain.url}</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#040410] text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(67,56,202,0.3) 0%, rgba(109,40,217,0.15) 40%, transparent 70%)' }} />
        <div className="absolute top-40 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.4) 0%, transparent 70%)' }} />
        <div className="absolute top-60 right-10 w-64 h-64 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)' }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10">
        {/* NAV */}
        <nav className="px-6 pt-8 pb-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
              className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #8b5cf6)' }}>
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">LBC Network</span>
            </motion.div>
            <motion.a
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
              href="https://lbchub.ca" target="_blank" rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-amber-400/30 text-amber-300 hover:bg-amber-400/10 transition-all duration-300"
            >
              <TrendingUp className="w-4 h-4" /> Investor Relations
            </motion.a>
          </div>
        </nav>

        {/* HERO */}
        <section className="px-6 pt-16 pb-12">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-amber-400/30 text-amber-300 mb-8"
                style={{ background: 'rgba(251,191,36,0.06)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Powered by $LUMINA Token · Built on Solana
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-8"
            >
              <span className="text-white">LBC Network</span>
              <br />
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 35%, #f59e0b 70%, #fbbf24 100%)' }}>
                Building Decentralized
              </span>
              <br />
              <span className="text-white">Infrastructure</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-4 font-light"
            >
              Across Lebanon, MENA & Africa
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12"
            >
              A unified ecosystem powered by blockchain, green energy, and digital access —
              delivering financial inclusion and real-world impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="https://lbc.network" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed, #a855f7)', boxShadow: '0 0 30px rgba(139,92,246,0.35)' }}>
                Enter Ecosystem
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://lbchub.ca" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border border-amber-400/40 text-amber-300 hover:bg-amber-400/10 transition-all duration-300"
                style={{ background: 'rgba(251,191,36,0.04)' }}>
                <TrendingUp className="w-4 h-4" />
                Investor Relations
              </a>
            </motion.div>
          </div>
        </section>

        {/* TRUST BANNER */}
        <section className="px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl border overflow-hidden"
              style={{ borderColor: 'rgba(251,191,36,0.15)', background: 'linear-gradient(135deg, rgba(15,10,40,0.8), rgba(10,5,25,0.9))' }}>
              <div className="absolute inset-0 opacity-20"
                style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.3) 0%, rgba(251,191,36,0.1) 50%, rgba(139,92,246,0.2) 100%)' }} />
              <div className="relative grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
                {trustItems.map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-3 px-8 py-5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, rgba(251,191,36,0.2), rgba(139,92,246,0.2))' }}>
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className="text-sm text-slate-300 font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ECOSYSTEM GRID */}
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3 block">Our Ecosystem</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">One Network. Nine Platforms.</h2>
              <p className="text-slate-500 max-w-xl mx-auto text-base">
                Every platform is a pillar of the LBC ecosystem — unified, purposeful, and built to scale.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {domains.map((domain, i) => <DomainCard key={domain.url} domain={domain} index={i} />)}
            </div>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl border overflow-hidden"
              style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'linear-gradient(135deg, rgba(10,8,30,0.9), rgba(15,5,35,0.95))' }}>
              <div className="absolute inset-0 opacity-30"
                style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(79,70,229,0.2), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(251,191,36,0.1), transparent 60%)' }} />

              <div className="relative px-8 md:px-16 py-16">
                <div className="text-center mb-14">
                  <span className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3 block">Our Purpose</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed font-light">
                    To build <span className="text-white font-medium">decentralized digital infrastructure</span> that empowers underserved communities through secure blockchain technology, sustainable energy solutions, and open digital access.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {missionPillars.map(({ icon: Icon, title, desc, color }, i) => {
                    const c = colorMap[color];
                    return (
                      <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={`rounded-2xl border p-6 ${c.bg} ${c.border}`}
                        style={{ boxShadow: `0 0 30px ${c.glow}` }}
                      >
                        <div className={`w-10 h-10 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center mb-4`}>
                          <Icon className={`w-5 h-5 ${c.text}`} />
                        </div>
                        <h3 className={`font-bold text-lg mb-2 ${c.text}`}>{title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STRATEGIC ROADMAP */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3 block">Execution Plan</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Strategic Roadmap</h2>
              <p className="text-slate-400 text-base max-w-3xl mx-auto leading-relaxed font-light">
                LBC Network is building a structured, multi-phase digital infrastructure ecosystem designed for long-term sustainability, regulatory alignment, and real-world impact across Lebanon, MENA, and Africa.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
              {[
                {
                  phase: 'Phase 1',
                  title: 'Foundation',
                  accent: 'rgba(99,102,241,0.12)',
                  border: 'rgba(99,102,241,0.3)',
                  dot: '#6366f1',
                  items: [
                    'LBC Network core platform',
                    'Lumina Wallet infrastructure',
                    'Investor framework (Canada-based)',
                    'Ecosystem architecture development',
                  ],
                },
                {
                  phase: 'Phase 2',
                  title: 'Digital Expansion',
                  accent: 'rgba(139,92,246,0.12)',
                  border: 'rgba(139,92,246,0.3)',
                  dot: '#8b5cf6',
                  items: [
                    'Integrated digital marketplace',
                    'NFT infrastructure layer',
                    'Token-based utility integrations',
                    'Unified service access within LBCHub',
                  ],
                },
                {
                  phase: 'Phase 3',
                  title: 'Real-World Services',
                  accent: 'rgba(251,191,36,0.08)',
                  border: 'rgba(251,191,36,0.25)',
                  dot: '#f59e0b',
                  items: [
                    'Driver-first mobility platform (60–70% driver revenue model)',
                    'Direct-impact charity infrastructure (transparent allocation model)',
                    'Branded technology and electronics expansion',
                  ],
                },
              ].map(({ phase, title, accent, border, dot, items }, i) => (
                <motion.div
                  key={phase}
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative p-8 md:p-10"
                  style={{ background: 'linear-gradient(160deg, rgba(10,8,28,0.95), rgba(8,6,20,0.98))' }}
                >
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-8 right-8 h-px" style={{ background: `linear-gradient(90deg, transparent, ${border}, transparent)` }} />

                  {/* Phase label */}
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: dot, boxShadow: `0 0 8px ${dot}` }} />
                    <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">{phase}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-6 leading-snug">{title}</h3>

                  {/* Divider */}
                  <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.05)' }} />

                  <ul className="space-y-3.5">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: dot }} />
                        <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Subtle glow */}
                  <div className="absolute inset-0 rounded-none pointer-events-none" style={{ background: accent }} />
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center text-slate-600 text-sm mt-8 max-w-2xl mx-auto leading-relaxed"
            >
              Each phase will be executed methodically, ensuring operational stability, compliance alignment, and scalable long-term growth.
            </motion.p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="px-6 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="h-px mb-12" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #f59e0b, #8b5cf6)' }}>
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">LBC Network</p>
                  <p className="text-slate-600 text-xs">© 2026 · All rights reserved</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-amber-400/60" />
                  Powered by $LUMINA
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-violet-400/60" />
                  Built on Solana
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-cyan-400/60" />
                  From Canada, Going Global
                </span>
              </div>

              <a href="https://lbc.network" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-400 transition-colors">
                lbc.network <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}