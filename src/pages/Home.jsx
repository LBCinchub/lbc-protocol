import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe, LayoutDashboard, Truck, Wallet, TrendingUp, Heart,
  ShoppingBag, Palette, HeadphonesIcon, ExternalLink,
  Zap, ArrowRight, ChevronRight, Shield, Star, Layers, Cpu, Grid, Radio, Car, Sparkles, Building, Brain, MessageCircle
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const domains = [
  // Family Core
  { url: 'lbc.network',          fullUrl: 'https://lbc.network',          name: 'Main Homepage',      description: 'The parent ecosystem — official LBC Network hub',          icon: Globe,           gradient: 'from-blue-500 to-cyan-400',    glow: 'rgba(59,130,246,0.15)' },
  { url: 'lbchub.io',            fullUrl: 'https://lbchub.io',            name: 'Big Brother',        description: 'Central intelligence and ecosystem coordination',          icon: LayoutDashboard, gradient: 'from-indigo-600 to-purple-500', glow: 'rgba(102,51,153,0.15)' },
  { url: 'lbc-hub.com',          fullUrl: 'https://lbc-hub.com',          name: 'Twin Sister',        description: 'Interactive hub and operational dashboard',                icon: LayoutDashboard, gradient: 'from-violet-500 to-purple-400', glow: 'rgba(139,92,246,0.15)' },
  { url: 'lbchub.site',          fullUrl: 'https://lbchub.site',          name: 'Twin Sister',        description: 'iCoin real estate and development platform',               icon: Building,        gradient: 'from-orange-500 to-amber-400', glow: 'rgba(249,115,22,0.15)' },
  
  // Financial & Blockchain
  { url: 'lumina-blockchain.com', fullUrl: 'https://lumina-blockchain.com', name: 'Lumina Wallet',     description: 'Blockchain wallet, $LBC token & documentation',        icon: Wallet,          gradient: 'from-amber-400 to-yellow-300', glow: 'rgba(251,191,36,0.15)' },
  { url: 'lbchub.ca',            fullUrl: 'https://lbchub.ca',            name: 'Investor Relations', description: 'Investment opportunities, reports & financials',          icon: TrendingUp,      gradient: 'from-indigo-500 to-blue-400',  glow: 'rgba(99,102,241,0.15)' },
  
  // Services & Operations
  { url: 'lbchub.app',           fullUrl: 'https://lbchub.app',           name: 'Driver Portal',      description: 'Driver management and logistics center',                 icon: Truck,           gradient: 'from-emerald-500 to-teal-400', glow: 'rgba(16,185,129,0.15)' },
  { url: 'lbchub.support',       fullUrl: 'https://lbchub.support',       name: 'Support Center',     description: '24/7 customer support and help resources',               icon: HeadphonesIcon,  gradient: 'from-sky-500 to-blue-400',     glow: 'rgba(14,165,233,0.15)' },
  { url: 'lbchub.tech',          fullUrl: 'https://lbchub.tech',          name: 'LBC AUTO',           description: 'Automotive platform and vehicle services',               icon: Car,             gradient: 'from-slate-600 to-gray-500',   glow: 'rgba(71,85,105,0.15)' },
  
  // Marketplace & Community
  { url: 'lbchub.shop',          fullUrl: 'https://lbchub.shop',          name: 'Official Store',     description: 'Merchandise, products and branded goods',                icon: ShoppingBag,     gradient: 'from-fuchsia-500 to-purple-400', glow: 'rgba(217,70,239,0.15)' },
  { url: 'lbc.ink',              fullUrl: 'https://lbc.ink',              name: 'LBC Beauty',         description: 'Beauty and wellness platform for her',                   icon: Sparkles,        gradient: 'from-pink-500 to-rose-400',    glow: 'rgba(236,72,153,0.15)' },
  { url: 'lbchub.art',           fullUrl: 'https://lbchub.art',           name: 'NFT Gallery',        description: 'Digital art collection and NFT showcase',                icon: Palette,         gradient: 'from-cyan-500 to-teal-400',    glow: 'rgba(6,182,212,0.15)' },
  
  // Impact & Intelligence
  { url: 'lbchub.org',           fullUrl: 'https://lbchub.org',           name: 'Charity Platform',   description: 'Community initiatives and social impact',                icon: Heart,           gradient: 'from-rose-500 to-pink-400',    glow: 'rgba(244,63,94,0.15)' },
  { url: 'lbchub.live',          fullUrl: 'https://lbchub.live',          name: 'War Zone Radar',     description: 'Real-time radar and live intelligence from active war zones', icon: Radio,           gradient: 'from-red-600 to-orange-500',   glow: 'rgba(220,38,38,0.15)' },
  { url: 'teach.ai',             fullUrl: 'https://teach.ai',             name: 'Teach AI',           description: 'AI-powered learning and knowledge platform',              icon: Brain,           gradient: 'from-cyan-500 to-blue-400',    glow: 'rgba(6,182,212,0.15)' },
];

const architecture = [
  { icon: Cpu,    label: 'Protocol Layer',     desc: 'Core blockchain infrastructure and smart contract framework.',                                                                  color: '#6366f1' },
  { icon: Zap,    label: 'Token Layer',        desc: 'Lumina ($LBC) — hybrid utility and governance token powering ecosystem participation.',                                     color: '#f59e0b' },
  { icon: Layers, label: 'Application Layer',  desc: 'Mobility, marketplace, wallet, NFT infrastructure, and impact systems built on LBC Protocol.',                                 color: '#8b5cf6' },
];

const ecosystemApps = [
  { name: 'LBCHub',                    icon: LayoutDashboard, color: '#8b5cf6' },
  { name: 'Lumina Wallet',             icon: Wallet,          color: '#f59e0b' },
  { name: 'Mobility Infrastructure',   icon: Truck,           color: '#10b981' },
  { name: 'Digital Marketplace',       icon: ShoppingBag,     color: '#6366f1' },
  { name: 'NFT Infrastructure',        icon: Palette,         color: '#06b6d4' },
  { name: 'Impact & Charity Framework',icon: Heart,           color: '#f43f5e' },
];

const roadmapPhases = [
  {
    phase: 'Phase 1', title: 'Foundation', subtitle: 'Canada-Based',
    dot: '#6366f1', bar: 'rgba(99,102,241,0.5)', bg: 'rgba(99,102,241,0.05)',
    items: ['LBC Network core platform', 'Lumina Wallet infrastructure', 'Canada-based investor framework', 'Ecosystem architecture and governance design'],
  },
  {
    phase: 'Phase 2', title: 'Digital Expansion', subtitle: 'Global Readiness',
    dot: '#8b5cf6', bar: 'rgba(139,92,246,0.5)', bg: 'rgba(139,92,246,0.05)',
    items: ['Integrated digital marketplace', 'NFT infrastructure layer', 'Token-based utility integrations', 'Unified access through LBCHub'],
  },
  {
    phase: 'Phase 3', title: 'Global Infrastructure Rollout', subtitle: 'Global Scale',
    dot: '#f59e0b', bar: 'rgba(251,191,36,0.4)', bg: 'rgba(251,191,36,0.04)',
    items: ['Driver-first mobility platform (up to 80% revenue to drivers based on customer star ratings)', 'Direct-impact charity infrastructure with transparent allocation', 'Branded technology and electronics expansion', 'Global rollout across MENA, Africa, and emerging markets'],
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

function DomainCard({ domain, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = domain.icon;
  return (
    <motion.a
      href={domain.fullUrl} target="_blank" rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.05 + index * 0.06 }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="group block"
    >
      <div className="relative rounded-xl p-6 border transition-all duration-400 overflow-hidden"
        style={{
          background: hovered ? 'rgba(15,13,32,0.95)' : 'rgba(10,9,24,0.8)',
          borderColor: hovered ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)',
          boxShadow: hovered ? `0 0 32px ${domain.glow}` : 'none',
        }}>
        <div className="flex items-start justify-between mb-4">
          <div className={`w-11 h-11 rounded-lg flex items-center justify-center bg-gradient-to-br ${domain.gradient} transition-transform duration-300 ${hovered ? 'scale-105' : ''}`}>
            <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
          <motion.div animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.15 }}>
            <ExternalLink className="w-4 h-4 text-slate-500" />
          </motion.div>
        </div>
        <h3 className="text-white font-semibold text-sm mb-1">{domain.name}</h3>
        <p className="text-slate-500 text-xs leading-relaxed mb-4">{domain.description}</p>
        <div className="flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-emerald-500" />
          <span className="text-slate-600 text-xs font-mono">{domain.url}</span>
        </div>
      </div>
    </motion.a>
  );
}

function SectionLabel({ children }) {
  return <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-600 mb-3 block">{children}</span>;
}

function Divider() {
  return <div className="h-px my-20" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }} />;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050510] text-white overflow-x-hidden" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
          style={{ background: 'radial-gradient(ellipse, rgba(79,70,229,0.18) 0%, transparent 70%)' }} />
        <div className="absolute top-32 left-0 w-80 h-80 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.07) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── NAV ── */}
        <nav className="px-6 pt-8 pb-6 flex items-center justify-between">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #f59e0b, #7c3aed)' }}>
              <Star className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="font-bold text-base tracking-tight">LBC Protocol</span>
          </motion.div>
          <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
            href="https://lbchub.ca" target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border text-amber-300 border-amber-400/25 hover:bg-amber-400/8 transition-colors"
            style={{ background: 'rgba(251,191,36,0.04)' }}>
            <TrendingUp className="w-3.5 h-3.5" /> Investor Relations
          </motion.a>
        </nav>

        {/* ── HERO ── */}
        <section className="px-6 pt-14 pb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-semibold tracking-widest uppercase border border-amber-400/20 text-amber-400/80 mb-10"
              style={{ background: 'rgba(251,191,36,0.05)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Powered by $LBC · Built on Solana
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.06] tracking-tight mb-5">
            <span className="text-white">LBC Protocol</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}
            className="text-xl md:text-2xl font-light mb-8 leading-snug"
            style={{ color: 'rgba(255,255,255,0.45)' }}>
            Decentralized Infrastructure Layer for Emerging Markets
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            Built from Canada and engineered for global scale, LBC Protocol powers blockchain-based applications across mobility, commerce, digital access, and transparent impact systems.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#architecture"
              className="group flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 0 24px rgba(124,58,237,0.3)' }}
              onClick={(e) => { e.preventDefault(); document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View Architecture <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#ecosystem"
              className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border border-white/8 text-slate-300 hover:text-white hover:border-white/15 transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.03)' }}
              onClick={(e) => { e.preventDefault(); document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Grid className="w-4 h-4" /> Explore Ecosystem
            </a>
          </motion.div>
        </section>

        <Divider />

        {/* ── WHAT IS LBC PROTOCOL ── */}
        <section className="px-6 pb-20">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <SectionLabel>Overview</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 max-w-xl leading-snug">What is LBC Protocol?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <p className="text-slate-400 text-base leading-relaxed font-light">
                LBC Protocol is a blockchain-native infrastructure layer designed to support decentralized applications operating in real-world environments.
              </p>
              <p className="text-slate-500 text-base leading-relaxed font-light">
                The protocol integrates hybrid utility mechanics, governance signaling frameworks, and scalable on-chain infrastructure designed for long-term deployment across emerging markets.
              </p>
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* ── ARCHITECTURE OVERVIEW ── */}
        <section id="architecture" className="px-6 pb-20">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
            <SectionLabel>Technical Structure</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Architecture Overview</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {architecture.map(({ icon: Icon, label, desc, color }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-xl p-7 border"
                style={{ background: 'rgba(10,9,24,0.7)', borderColor: 'rgba(255,255,255,0.05)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                  <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">{label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── NATIVE TOKEN ── */}
        <section className="px-6 pb-20">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <SectionLabel>Native Token</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Lumina <span className="text-amber-400">($LBC)</span></h2>
                <p className="text-slate-500 text-sm mb-8 font-light">Native utility and governance token of LBC Protocol</p>
                <p className="text-slate-400 text-base leading-relaxed mb-8 font-light">
                  Lumina is the native utility and governance token of LBC Protocol, enabling on-chain participation across the ecosystem.
                </p>
                <p className="text-xs text-slate-600 border border-white/5 rounded-lg px-4 py-3"
                  style={{ background: 'rgba(255,255,255,0.02)' }}>
                  $LBC does not represent equity ownership or financial guarantees.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  'On-chain ecosystem transactions',
                  'Participation in governance signaling',
                  'Application-level integration',
                  'Transparent protocol interaction',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-3.5 px-4 rounded-lg border"
                    style={{ background: 'rgba(251,191,36,0.03)', borderColor: 'rgba(251,191,36,0.1)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* ── GOVERNANCE ── */}
        <section className="px-6 pb-20">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <SectionLabel>Protocol Governance</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Governance Framework</h2>
                <p className="text-slate-400 text-base leading-relaxed font-light mb-4">
                  The LBC Protocol governance framework is designed for phased implementation.
                </p>
                <p className="text-slate-500 text-base leading-relaxed font-light">
                  Governance mechanisms will be introduced progressively as the ecosystem matures, ensuring structured community participation aligned with protocol sustainability and regulatory awareness.
                </p>
              </div>
              <div className="rounded-xl border p-6" style={{ background: 'rgba(99,102,241,0.04)', borderColor: 'rgba(99,102,241,0.12)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-indigo-400" strokeWidth={1.5} />
                  <span className="text-white text-sm font-semibold">Design Principles</span>
                </div>
                <div className="space-y-3">
                  {['Phased community participation', 'Regulatory alignment built-in', 'Protocol sustainability focus', 'Transparent signaling mechanisms'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                      <span className="text-slate-500 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* ── ECOSYSTEM APPLICATIONS ── */}
        <section id="ecosystem" className="px-6 pb-20">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
            <SectionLabel>Applications</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ecosystem Applications</h2>
            <p className="text-slate-500 text-base font-light">Every application is built on LBC Protocol infrastructure.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-14">
            {ecosystemApps.map(({ name, icon: Icon, color }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-3 px-5 py-4 rounded-xl border"
                style={{ background: 'rgba(10,9,24,0.7)', borderColor: 'rgba(255,255,255,0.05)' }}>
                <div className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}18`, border: `1px solid ${color}25` }}>
                  <Icon className="w-4 h-4" style={{ color }} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{name}</p>
                  <p className="text-slate-600 text-xs">Built on LBC Protocol</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Domain links grid */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-600 mb-6">Live Platforms</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {domains.map((domain, i) => <DomainCard key={domain.url} domain={domain} index={i} />)}
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* ── ROADMAP ── */}
        <section className="px-6 pb-20">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
            <SectionLabel>Execution Plan</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Strategic Roadmap</h2>
            <p className="text-slate-500 text-base font-light max-w-2xl">
              A structured, multi-phase approach to building global digital infrastructure. No dates. No promises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-xl overflow-hidden border border-white/[0.04]"
            style={{ background: 'rgba(255,255,255,0.025)' }}>
            {roadmapPhases.map(({ phase, title, subtitle, dot, bar, bg, items }, i) => (
              <motion.div key={phase}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative flex flex-col p-8"
                style={{ background: 'rgba(6,5,16,0.97)' }}>
                <div className="absolute top-0 inset-x-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${bar}, transparent)` }} />
                <div className="absolute inset-0 pointer-events-none" style={{ background: bg }} />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: dot }} />
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-600">{phase}</span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-tight">{title}</h3>
                  <p className="text-[11px] text-slate-600 mt-0.5 mb-5 tracking-wide">{subtitle}</p>
                  <div className="h-px mb-5" style={{ background: 'rgba(255,255,255,0.04)' }} />
                  <ul className="space-y-3.5">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="mt-[7px] w-[3px] h-[3px] rounded-full flex-shrink-0" style={{ background: dot }} />
                        <span className="text-slate-500 text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-600">
              <span className="flex items-center gap-1.5">🇨🇦 Founded in Canada</span>
              <span className="hidden sm:block w-px h-3 bg-white/8 self-center" />
              <span className="flex items-center gap-1.5">🌍 Scaling Globally</span>
              <span className="hidden sm:block w-px h-3 bg-white/8 self-center" />
              <span className="flex items-center gap-1.5">🏗️ Built like Infrastructure</span>
            </div>
            <p className="text-center text-slate-700 text-xs max-w-xl leading-relaxed">
              Built in Canada. Designed for global scale. Each phase is executed methodically to ensure compliance, operational stability, and long-term sustainability.
            </p>
          </motion.div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="px-6 pb-12">
          <div className="h-px mb-10" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }} />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #7c3aed)' }}>
                <Star className="w-3.5 h-3.5 text-white fill-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-xs">LBC Protocol</p>
                <p className="text-slate-700 text-[10px]">© 2026 · All rights reserved</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 text-[11px] text-slate-700">
              <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-amber-500/50" />Powered by $LBC</span>
              <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-violet-500/50" />Built on Solana</span>
              <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-slate-500/50" />Designed for Global Scale</span>
            </div>
            <a href="https://lbc.network" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] text-slate-700 hover:text-slate-400 transition-colors">
              lbc.network <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </footer>

      </div>

      {/* Floating AI Message */}
      <motion.a
        href="https://teach.ai"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold shadow-lg transition-all duration-300 z-50"
        style={{
          background: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
          boxShadow: '0 0 24px rgba(6,182,212,0.4)'
        }}>
        <Brain className="w-6 h-6" />
      </motion.a>
    </div>
  );
}