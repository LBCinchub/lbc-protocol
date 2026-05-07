import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe, LayoutDashboard, Truck, Wallet, TrendingUp, Heart,
  ShoppingBag, Palette, HeadphonesIcon, ExternalLink,
  Zap, ArrowRight, ChevronRight, Shield, Star, Layers, Cpu, Grid,
  Radio, Car, Sparkles, Building, MessageCircle, Sun, Users, MapPin,
  Lock, X, CheckCircle2
} from 'lucide-react';
import AppPoll from '@/components/AppPoll';
import NavBar from '@/components/home/NavBar';
import HeroSection from '@/components/home/HeroSection';
import TokenSection from '@/components/home/TokenSection';
import RoadmapSection from '@/components/home/RoadmapSection';
import BigBrotherChat from '@/components/home/BigBrotherChat';

// ─── Data ─────────────────────────────────────────────────────────────────────

const domains = [
  { url: 'LBC.Network',           fullUrl: 'https://lbc.network',           name: 'LBC Network — Parent',        description: 'LBC Network — the parent ecosystem and root hub of all LBC platforms',                           icon: Globe,           gradient: 'from-blue-500 to-cyan-400',      glow: 'rgba(59,130,246,0.15)' },
  { url: 'LBCHub.io',             fullUrl: 'https://lbchub.io',             name: 'LBC Protocol — Big Brother',  description: 'LBC Protocol — Big Brother, the central intelligence and coordination layer of the ecosystem',    icon: LayoutDashboard, gradient: 'from-indigo-600 to-purple-500',   glow: 'rgba(102,51,153,0.15)' },
  { url: 'LBC-Hub.com',           fullUrl: 'https://lbc-hub.com',           name: 'LBC Community — Twin Sister', description: 'LBC Community — Twin Sister social platform, community feed, trending topics and cross-site sync',   icon: Users,           gradient: 'from-violet-500 to-purple-400',   glow: 'rgba(139,92,246,0.15)' },
  { url: 'LBCHub.site',           fullUrl: 'https://lbchub.site',           name: 'LBC AI — Twin Sister',        description: 'LBC AI — Twin Sister powered by Lumina Ultra, AI converse & builder platform by LBC.NETWORK',    icon: Building,        gradient: 'from-orange-500 to-amber-400',   glow: 'rgba(249,115,22,0.15)' },
  { url: 'Lumina-Blockchain.com', fullUrl: 'https://lumina-blockchain.com', name: 'LBC Wallet',                  description: 'LBC Wallet — non-custodial Lumina Blockchain wallet for $LBC, SOL & USDC with full documentation', icon: Wallet,          gradient: 'from-amber-400 to-yellow-300',   glow: 'rgba(251,191,36,0.15)' },
  { url: 'LBCHub.ca',             fullUrl: 'https://lbchub.ca',             name: 'LBC Investor Relations',      description: 'LBC Investor Relations — investment opportunities, financial reports & partnership inquiries',       icon: TrendingUp,      gradient: 'from-indigo-500 to-blue-400',    glow: 'rgba(99,102,241,0.15)' },
  { url: 'LBCHub.app',            fullUrl: 'https://lbchub.app',            name: 'LBC Driver Portal',           description: 'LBC Driver Portal — mobility-first app for driver management, logistics and ride coordination',     icon: Truck,           gradient: 'from-emerald-500 to-teal-400',   glow: 'rgba(16,185,129,0.15)' },
  { url: 'LBCHub.tech',           fullUrl: 'https://lbchub.tech',           name: 'LBC AUTO',                    description: 'LBC AUTO — automotive platform for vehicle services, fleet management and auto commerce',           icon: Car,             gradient: 'from-slate-600 to-gray-500',     glow: 'rgba(71,85,105,0.15)' },
  { url: 'LBCHub.shop',           fullUrl: 'https://lbchub.shop',           name: 'LBC Official Store',          description: 'LBC Official Store — branded merchandise, products and exclusive LBC ecosystem goods',              icon: ShoppingBag,     gradient: 'from-fuchsia-500 to-purple-400', glow: 'rgba(217,70,239,0.15)' },
  { url: 'LBC.ink',               fullUrl: 'https://lbc.ink',               name: 'LBC Beauty',                  description: 'LBC Beauty — wellness and beauty platform empowering women with LBC-powered commerce',              icon: Sparkles,        gradient: 'from-pink-500 to-rose-400',      glow: 'rgba(236,72,153,0.15)' },
  { url: 'LBCHub.art',            fullUrl: 'https://lbchub.art',            name: 'LBC NFT Gallery',             description: 'LBC NFT Gallery — digital art collection, NFT showcase and creator marketplace on LBC Protocol',    icon: Palette,         gradient: 'from-cyan-500 to-teal-400',      glow: 'rgba(6,182,212,0.15)' },
  { url: 'LBCHub.org',            fullUrl: 'https://lbchub.org',            name: 'LBC Charity',                 description: 'LBC Charity — transparent community initiatives, war zone aid and social impact powered by $LBC',    icon: Heart,           gradient: 'from-rose-500 to-pink-400',      glow: 'rgba(244,63,94,0.15)' },
  { url: 'LBCHub.live',           fullUrl: 'https://lbchub.live',           name: 'LBC War Zone Radar',          description: 'LBC War Zone Radar — real-time live intelligence, conflict tracking and frontline situation reports', icon: Radio,           gradient: 'from-red-600 to-orange-500',     glow: 'rgba(220,38,38,0.15)' },
  { url: 'LBCHub.support',        fullUrl: 'https://lbchub.support',        name: 'LBC Support Center',          description: 'LBC Support Center — the only official support channel for all LBC platforms and services',           icon: HeadphonesIcon,  gradient: 'from-sky-500 to-blue-400',       glow: 'rgba(14,165,233,0.15)' },
];

const architecture = [
  { icon: Cpu,    label: 'Protocol Layer',    desc: 'Solana-native blockchain — high TPS, ~$0.00025/tx. SPL token standard with mutable metadata and controlled authority for adaptive governance.', color: '#6366f1' },
  { icon: Zap,    label: 'Token Layer',       desc: 'Lumina ($LBC) — SPL utility & governance token. Powers fees, marketplace payments, DePIN node rewards, and on-chain governance signaling.',      color: '#f59e0b' },
  { icon: Layers, label: 'Application Layer', desc: 'Non-custodial wallet, freelancer marketplace with on-chain escrow, DePIN solar/Starlink nodes, and a public anti-corruption dashboard.',         color: '#8b5cf6' },
];

const solutions = [
  { icon: Wallet,  title: 'Digital Wallet & Payments',  desc: 'Non-custodial wallet with instant LBC/SOL/USDC transfers. Future fiat on/off-ramps. Borderless freelancer earnings.',            color: '#f59e0b' },
  { icon: Users,   title: 'Freelancer Marketplace',     desc: 'Connect global talent with clients worldwide. Secure on-chain escrow & reputation. Pay in $LBC — low fees, instant settlement.',  color: '#10b981' },
  { icon: Sun,     title: 'DePIN Sustainability Nodes', desc: 'Solar-powered Starlink/VSAT hotspots for underserved communities. Track energy & carbon offset on-chain. Earn $LBC rewards.',     color: '#f97316' },
  { icon: Lock,    title: 'Transparency & Governance',  desc: 'All transactions & node data logged immutably on Solana. Public dashboard for verifiable impact. Community governance via DAO.',   color: '#6366f1' },
];

const problems = [
  { icon: Zap,    title: 'Telecom & Power Monopolies', desc: 'Frequent blackouts, slow/expensive internet, high diesel costs driven by entrenched monopolies.' },
  { icon: Wallet, title: 'Financial Exclusion',        desc: 'Freelancers & families face slow international transfers, high fees, and limited banking access.' },
  { icon: Shield, title: 'Corruption & Opacity',      desc: 'Lack of verifiable records enables mismanagement. Centralized systems breed distrust and inefficiency.' },
  { icon: MapPin, title: 'Rural & Remote Challenges',  desc: 'Remote communities face compounded barriers — outages, limited banking, and cross-border trade friction.' },
];

const ecosystemApps = [
  { name: 'LBCHub — Central Intelligence',         icon: LayoutDashboard, color: '#8b5cf6' },
  { name: 'Lumina Wallet — $LBC Native Wallet',    icon: Wallet,          color: '#f59e0b' },
  { name: 'Driver Portal — Mobility First',        icon: Truck,           color: '#10b981' },
  { name: 'Digital Marketplace — Commerce Layer',  icon: ShoppingBag,     color: '#6366f1' },
  { name: 'NFT Gallery — Digital Assets',          icon: Palette,         color: '#06b6d4' },
  { name: 'Impact Framework — Transparent Giving', icon: Heart,           color: '#f43f5e' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Divider() {
  return <div className="h-px my-16" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />;
}

function SectionLabel({ children, color = 'text-slate-600' }) {
  return <span className={`text-[10px] font-bold tracking-widest uppercase mb-3 block ${color}`}>{children}</span>;
}

function DomainCard({ domain, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = domain.icon;
  return (
    <motion.a
      href={domain.fullUrl} target="_blank" rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.04 }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="group block">
      <div className="relative rounded-2xl p-5 border transition-all duration-300 overflow-hidden"
        style={{
          background: hovered ? 'rgba(15,13,32,0.98)' : 'rgba(10,9,24,0.6)',
          borderColor: hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)',
          boxShadow: hovered ? `0 0 30px ${domain.glow}` : 'none',
        }}>
        <div className="flex items-start justify-between mb-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${domain.gradient} transition-transform duration-300 ${hovered ? 'scale-110' : ''}`}>
            <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
          <ExternalLink className={`w-3.5 h-3.5 text-slate-600 transition-opacity ${hovered ? 'opacity-100' : 'opacity-0'}`} />
        </div>
        <h3 className="text-white font-bold text-sm mb-1">{domain.name}</h3>
        <p className="text-slate-500 text-xs leading-relaxed mb-4">{domain.description}</p>
        <div className="flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-emerald-500" />
          <span className="text-slate-600 text-xs font-mono">{domain.url}</span>
        </div>
      </div>
    </motion.a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-[#04040f] text-white overflow-x-hidden" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ── BACKGROUNDS ── */}
      <div className="fixed inset-0 pointer-events-none select-none overflow-hidden">
        {/* Top purple glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px]"
          style={{ background: 'radial-gradient(ellipse, rgba(79,70,229,0.15) 0%, transparent 65%)' }} />
        {/* Left amber orb */}
        <div className="absolute top-1/3 -left-20 w-80 h-80 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)' }} />
        {/* Right violet orb */}
        <div className="absolute top-2/3 -right-20 w-96 h-96 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)' }} />
        {/* Bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)' }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.016]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
      </div>

      {/* ── NAV ── */}
      <NavBar />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── HERO ── */}
        <HeroSection />

        <Divider />

        {/* ── THE PROBLEM ── */}
        <section className="px-6 pb-24">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
            <SectionLabel>Why We Exist</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">The Problem in Emerging Markets</h2>
            <p className="text-slate-500 text-base font-light max-w-2xl">Centralized solutions fail to deliver resilient, affordable, and inclusive tools for underserved communities.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl p-6 border group hover:border-rose-500/20 transition-all duration-300"
                style={{ background: 'rgba(10,9,24,0.6)', borderColor: 'rgba(255,255,255,0.05)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(244,63,94,0.1)', border: '1px solid rgba(244,63,94,0.2)' }}>
                  <Icon className="w-5 h-5 text-rose-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-sm font-bold mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── THE SOLUTION ── */}
        <section id="solution" className="px-6 pb-24">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
            <SectionLabel>LBC Hub Solution</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">A Modular, Solana-Native Platform</h2>
            <p className="text-slate-500 text-base font-light max-w-2xl">Four integrated layers delivering real-world utility across finance, connectivity, commerce, and governance.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {solutions.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl p-7 border hover:scale-[1.01] transition-all duration-300"
                style={{ background: 'rgba(10,9,24,0.6)', borderColor: `${color}15` }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                  <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-base font-bold mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── ARCHITECTURE ── */}
        <section id="architecture" className="px-6 pb-24">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
            <SectionLabel>Technical Structure</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black text-white">Architecture Overview</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {architecture.map(({ icon: Icon, label, desc, color }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl p-7 border"
                style={{ background: 'rgba(10,9,24,0.6)', borderColor: `${color}18` }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                  <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-white mb-2">{label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[10px] font-bold tracking-widest uppercase text-slate-700 mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {['Solana Blockchain', 'SPL Token Standard', 'React PWA', 'Node.js', 'Rust Programs', 'IPFS Storage', 'Starlink / VSAT', 'Solar DePIN Nodes', 'Non-Custodial Wallet', 'On-Chain Analytics'].map(tech => (
                <span key={tech} className="px-3 py-1.5 rounded-full text-xs border text-slate-500 hover:text-slate-300 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.07)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* ── TOKEN ── */}
        <div id="token">
          <TokenSection />
        </div>

        <Divider />

        {/* ── GOVERNANCE ── */}
        <section className="px-6 pb-24">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <SectionLabel>Protocol Governance</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Governance Framework</h2>
                <p className="text-slate-400 text-base leading-relaxed font-light mb-4">
                  LBC Protocol governance is designed for phased, community-driven implementation — starting with transparent signaling and evolving into a full on-chain DAO.
                </p>
                <p className="text-slate-500 text-base leading-relaxed font-light">
                  All transactions, node data, and usage are logged immutably on Solana. A public dashboard provides verifiable impact metrics — no central control, no hidden levers.
                </p>
              </div>
              <div className="rounded-2xl border p-7" style={{ background: 'rgba(99,102,241,0.04)', borderColor: 'rgba(99,102,241,0.15)' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.25)' }}>
                    <Shield className="w-4.5 h-4.5 text-indigo-400" strokeWidth={1.5} />
                  </div>
                  <span className="text-white font-bold">Anti-Corruption Core</span>
                </div>
                <div className="space-y-3.5">
                  {['Immutable on-chain transaction ledger', 'Public verifiable impact dashboard', 'Community governance via future DAO', 'Phased rollout across regions', 'Built-in regulatory awareness', 'Driver-first incentive design'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-slate-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* ── ECOSYSTEM APPLICATIONS ── */}
        <section id="ecosystem" className="px-6 pb-24">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
            <SectionLabel>Applications</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Ecosystem Applications</h2>
            <p className="text-slate-500 text-base font-light">Every application is built on LBC Protocol infrastructure.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-14">
            {ecosystemApps.map(({ name, icon: Icon, color }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-3.5 px-5 py-4 rounded-2xl border hover:scale-[1.02] transition-all duration-300"
                style={{ background: 'rgba(10,9,24,0.6)', borderColor: `${color}18` }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}18`, border: `1px solid ${color}28` }}>
                  <Icon className="w-4 h-4" style={{ color }} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white text-sm font-bold">{name}</p>
                  <p className="text-slate-600 text-xs">Built on LBC Protocol</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[10px] font-bold tracking-widest uppercase text-slate-700 mb-6">Live Platforms</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {domains.map((domain, i) => <DomainCard key={domain.url} domain={domain} index={i} />)}
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* ── ROADMAP ── */}
        <RoadmapSection />

        {/* ── POLL ── */}
        <AppPoll />

        <Divider />

        {/* ── FOOTER ── */}
        <footer className="px-6 pb-14">
          <div className="rounded-2xl border p-8 mb-8"
            style={{ background: 'rgba(10,9,24,0.6)', borderColor: 'rgba(255,255,255,0.05)' }}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #f59e0b, #7c3aed)', boxShadow: '0 0 16px rgba(124,58,237,0.3)' }}>
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm">LBC Protocol</p>
                    <p className="text-slate-600 text-[10px]">© 2026 LBC Network Inc. · All rights reserved</p>
                  </div>
                </div>
                <p className="text-slate-600 text-xs max-w-xs leading-relaxed">
                  Building brighter futures on Solana — transparent, inclusive, and decentralized.
                </p>
              </div>

              <div className="flex flex-col gap-2 text-[11px]">
                <a href="mailto:tarek-samara@lbc-hub.com" className="text-slate-600 hover:text-slate-300 transition-colors">📧 tarek-samara@lbc-hub.com</a>
                <a href="https://x.com/LBC_FOUNDER" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-600 hover:text-slate-300 transition-colors">
                  <X className="w-3 h-3" /> @LBC_FOUNDER
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <a href="https://lbc-hub.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] text-slate-600 hover:text-slate-300 transition-colors">
                  lbc-hub.com <ChevronRight className="w-3 h-3" />
                </a>
                <a href="https://lbc.network" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] text-slate-600 hover:text-slate-300 transition-colors">
                  lbc.network <ChevronRight className="w-3 h-3" />
                </a>
                <a href="https://lbchub.ca" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] text-slate-600 hover:text-slate-300 transition-colors">
                  Investor Relations <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-slate-700 text-[10px] max-w-2xl mx-auto leading-relaxed">
            This website is informational only. $LBC is a utility token. No securities offered. Participation carries risk. Always do your own research (DYOR). LBC Network Inc. – Building brighter futures on Solana.
          </p>
        </footer>

      </div>

      {/* ── BIG BROTHER CHAT ── */}
      <BigBrotherChat />

    </div>
  );
}