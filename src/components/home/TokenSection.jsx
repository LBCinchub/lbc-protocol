import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Wallet, Zap, Users, Sun, Lock, TrendingUp, Shield, BarChart2, Flame } from 'lucide-react';

const tokenUses = [
  { icon: Zap,        label: 'Transaction Fees',           desc: 'Powers every on-chain interaction across the ecosystem.' },
  { icon: Users,      label: 'Marketplace Payments',       desc: 'Freelancer escrow, settlement, and reputation staking.' },
  { icon: Sun,        label: 'DePIN Node Rewards',         desc: 'Operators earn $LBC for uptime, energy, and connectivity.' },
  { icon: Shield,     label: 'Governance Signaling',       desc: 'Community-driven proposals and on-chain voting.' },
  { icon: Flame,      label: 'Burns & Scarcity',           desc: 'Deflationary burns to manage long-term supply.' },
  { icon: TrendingUp, label: 'Cross-Border Transfers',     desc: 'Instant borderless payments — low fees, high speed.' },
];

export default function TokenSection() {
  return (
    <section className="px-6 pb-24">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

        {/* Header */}
        <div className="mb-14">
          <span className="text-[10px] font-semibold tracking-widest uppercase text-amber-500/70 mb-3 block">Native Token</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Lumina <span className="text-amber-400">($LBC)</span>
          </h2>
          <p className="text-slate-500 text-base font-light max-w-xl">
            SPL utility & governance token on Solana — powering every layer of the LBC Protocol ecosystem.
          </p>
        </div>

        {/* Contract + Wallet Links */}
        <div className="flex flex-wrap gap-3 mb-10">
          <a href="https://phantom.com/tokens/solana/2UoettzUUevYNNMhLYACqxjbvkpS4dnCZhbV6xFkuKkT?referralId=jx3tz816il"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border font-bold text-sm text-white hover:scale-[1.02] transition-transform"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(79,70,229,0.2))', borderColor: 'rgba(139,92,246,0.35)', boxShadow: '0 0 20px rgba(139,92,246,0.15)' }}>
            <Wallet className="w-4 h-4 text-violet-300" />
            Buy $LBC on Phantom
            <ExternalLink className="w-3.5 h-3.5 text-violet-400" />
          </a>
          <a href="https://solscan.io/token/2UoettzUUevYNNMhLYACqxjbvkpS4dnCZhbV6xFkuKkT"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border font-mono text-sm text-amber-400/80 hover:text-amber-400 hover:scale-[1.02] transition-all"
            style={{ background: 'rgba(251,191,36,0.05)', borderColor: 'rgba(251,191,36,0.2)' }}>
            <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
            2UoettzU…uKkT
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a href="https://solscan.io/account/2SYh5UjyGEVwCMTQrY5LJrGRfEAmU9MqXECRrAMsNK34"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border text-sm text-emerald-400/80 hover:text-emerald-400 hover:scale-[1.02] transition-all"
            style={{ background: 'rgba(16,185,129,0.05)', borderColor: 'rgba(16,185,129,0.2)' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
            Official Solana Wallet
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-base leading-relaxed mb-12 font-light max-w-3xl">
          Lumina ($LBC) is the native token of LBC Protocol — fast, cheap, and scalable on Solana. It powers every
          transaction, reward, and governance decision across the ecosystem, enabling direct economic relationships
          between drivers, merchants, freelancers, node operators, and users.
        </p>

        {/* Token Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {tokenUses.map(({ icon: Icon, label, desc }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-5 rounded-2xl border group hover:border-amber-400/20 transition-all duration-300"
              style={{ background: 'rgba(251,191,36,0.03)', borderColor: 'rgba(251,191,36,0.08)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)' }}>
                <Icon className="w-4 h-4 text-amber-400" strokeWidth={1.5} />
              </div>
              <h4 className="text-white text-sm font-semibold mb-1">{label}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="rounded-xl border px-5 py-4" style={{ background: 'rgba(255,255,255,0.015)', borderColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-xs text-slate-600 leading-relaxed">
            ⚠️ $LBC is a utility token enabling protocol participation. It does not represent equity, ownership, or financial guarantees. Always do your own research (DYOR).
          </p>
        </div>

      </motion.div>
    </section>
  );
}