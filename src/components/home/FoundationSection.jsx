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

export default function FoundationSection() {
  return (
    <section id="foundation" className="px-6 pb-24">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-600 mb-3 block">Already Built</span>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1 h-9 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Foundation — Websites Ecosystem</h2>
        </div>
        <p className="text-slate-500 text-base font-light ml-4">The LBC Ecosystem Foundation — Websites Already Live.</p>
      </motion.div>

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
    </section>
  );
}