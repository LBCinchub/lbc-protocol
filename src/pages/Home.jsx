import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  LayoutDashboard, 
  Truck, 
  Wallet, 
  HeadphonesIcon, 
  TrendingUp, 
  Heart, 
  ShoppingBag, 
  Palette,
  ExternalLink,
  Sparkles,
  Zap,
  Leaf,
  Wifi
} from 'lucide-react';

const domains = [
  {
    url: 'lbc.network',
    fullUrl: 'https://lbc.network',
    name: 'Main Homepage',
    description: 'The official company homepage and entry point',
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-400',
    shadowColor: 'shadow-blue-500/20'
  },
  {
    url: 'lbchub.io',
    fullUrl: 'https://lbchub.io',
    name: 'Interactive Hub',
    description: 'Central dashboard for all operations',
    icon: LayoutDashboard,
    gradient: 'from-violet-500 to-purple-400',
    shadowColor: 'shadow-violet-500/20'
  },
  {
    url: 'lbchub.app',
    fullUrl: 'https://lbchub.app',
    name: 'Driver Portal',
    description: 'Driver management and logistics center',
    icon: Truck,
    gradient: 'from-emerald-500 to-teal-400',
    shadowColor: 'shadow-emerald-500/20'
  },
  {
    url: 'lumina-blockchain.com',
    fullUrl: 'https://lumina-blockchain.com',
    name: 'Wallet & Docs',
    description: 'Blockchain wallet and documentation',
    icon: Wallet,
    gradient: 'from-amber-500 to-orange-400',
    shadowColor: 'shadow-amber-500/20'
  },
  {
    url: 'lbchub.support',
    fullUrl: 'https://lbchub.support',
    name: 'Support Portal',
    description: '24/7 customer support and help center',
    icon: HeadphonesIcon,
    gradient: 'from-rose-500 to-pink-400',
    shadowColor: 'shadow-rose-500/20'
  },
  {
    url: 'lbchub.ca',
    fullUrl: 'https://lbchub.ca',
    name: 'Investor Relations',
    description: 'Investment opportunities and reports',
    icon: TrendingUp,
    gradient: 'from-indigo-500 to-blue-400',
    shadowColor: 'shadow-indigo-500/20'
  },
  {
    url: 'lbchub.org',
    fullUrl: 'https://lbchub.org',
    name: 'Charity Portal',
    description: 'Community initiatives and giving back',
    icon: Heart,
    gradient: 'from-red-500 to-rose-400',
    shadowColor: 'shadow-red-500/20'
  },
  {
    url: 'lbchub.shop',
    fullUrl: 'https://lbchub.shop',
    name: 'Official Store',
    description: 'Merchandise and product shop',
    icon: ShoppingBag,
    gradient: 'from-fuchsia-500 to-purple-400',
    shadowColor: 'shadow-fuchsia-500/20'
  },
  {
    url: 'lbchub.art',
    fullUrl: 'https://lbchub.art',
    name: 'NFT Gallery',
    description: 'Digital art and NFT showcase',
    icon: Palette,
    gradient: 'from-cyan-500 to-blue-400',
    shadowColor: 'shadow-cyan-500/20'
  }
];

const DomainCard = ({ domain, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = domain.icon;

  return (
    <motion.a
      href={domain.fullUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className={`
        relative overflow-hidden rounded-2xl p-6 
        bg-slate-900/50 backdrop-blur-xl border border-slate-800/50
        transition-all duration-500 ease-out
        hover:border-slate-700/50 hover:bg-slate-900/70
        ${isHovered ? `shadow-2xl ${domain.shadowColor}` : 'shadow-lg shadow-black/20'}
      `}>
        {/* Gradient glow effect */}
        <div className={`
          absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500
          bg-gradient-to-br ${domain.gradient}
        `} />
        
        {/* Icon container */}
        <div className={`
          relative w-14 h-14 rounded-xl mb-5 flex items-center justify-center
          bg-gradient-to-br ${domain.gradient}
          shadow-lg ${domain.shadowColor}
          group-hover:scale-110 transition-transform duration-300
        `}>
          <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
        </div>

        {/* Content */}
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors">
              {domain.name}
            </h3>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white/70 transition-colors opacity-0 group-hover:opacity-100" />
          </div>
          
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            {domain.description}
          </p>
          
          <div className={`
            inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium
            bg-slate-800/50 text-slate-300 group-hover:bg-gradient-to-r group-hover:${domain.gradient} 
            group-hover:text-white transition-all duration-300
          `}>
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
            {domain.url}
          </div>
        </div>

        {/* Hover arrow */}
        <motion.div 
          className="absolute top-6 right-6"
          animate={{ x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${domain.gradient} flex items-center justify-center`}>
            <ExternalLink className="w-4 h-4 text-white" />
          </div>
        </motion.div>
      </div>
    </motion.a>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-12 pb-8 px-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                LBCHUB
              </h1>
            </div>
          </motion.div>
        </header>

        {/* Hero Section */}
        <section className="px-6 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Gateway to the
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                LBC Ecosystem
              </span>
            </h2>

            {/* Highlighted Tagline Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative mt-8 mb-10 mx-auto max-w-3xl"
            >
              {/* Glow behind banner */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-amber-400/20 to-orange-500/20 rounded-2xl blur-xl" />
              
              <div className="relative rounded-2xl border border-amber-400/30 bg-gradient-to-br from-slate-900/90 via-amber-950/30 to-slate-900/90 backdrop-blur-xl px-8 py-7">
                {/* Token badge */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-400/50" />
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900 text-xs font-bold tracking-widest uppercase shadow-lg shadow-amber-500/30">
                    Powered by $LUMINA Token
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-400/50" />
                </div>

                <p className="text-2xl md:text-3xl font-bold text-white leading-snug mb-2">
                  LBC Network
                </p>
                <p className="text-lg md:text-xl font-medium bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent leading-relaxed">
                  Illuminating Lebanon, MENA & Africa
                </p>
                <p className="text-slate-400 text-base mt-2">
                  with blockchain, green energy & digital access
                </p>

                {/* 3 pillars */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  {[
                    { icon: Zap, label: 'Blockchain', color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20' },
                    { icon: Leaf, label: 'Green Energy', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20' },
                    { icon: Wifi, label: 'Digital Access', color: 'text-cyan-400', bg: 'bg-cyan-400/10 border-cyan-400/20' },
                  ].map(({ icon: Icon, label, color, bg }) => (
                    <div key={label} className={`flex items-center gap-2 px-4 py-2 rounded-full border ${bg} backdrop-blur-sm`}>
                      <Icon className={`w-4 h-4 ${color}`} />
                      <span className={`text-sm font-semibold ${color}`}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
              Explore all platforms and services powered by LBCHUB — find everything in one place.
            </p>
          </motion.div>
        </section>

        {/* Domain Grid */}
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {domains.map((domain, index) => (
                <DomainCard key={domain.url} domain={domain} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 pb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="max-w-7xl mx-auto text-center"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8" />
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} LBCHUB. All rights reserved.
            </p>
          </motion.div>
        </footer>
      </div>
    </div>
  );
}