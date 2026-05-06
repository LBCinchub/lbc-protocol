import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, CheckCircle2 } from 'lucide-react';

const options = [
  { id: 'ios',     label: 'iOS (iPhone)',           emoji: '🍎' },
  { id: 'android', label: 'Android',                emoji: '🤖' },
  { id: 'both',    label: 'Both iOS & Android',     emoji: '📱' },
  { id: 'web',     label: 'Web App Only',            emoji: '🌐' },
];

export default function AppPoll() {
  const [selected, setSelected] = useState(null);
  const [voted, setVoted] = useState(false);
  const [votes, setVotes] = useState({ ios: 12, android: 18, both: 47, web: 8 });

  const total = Object.values(votes).reduce((a, b) => a + b, 0);

  const handleVote = (id) => {
    if (voted) return;
    setSelected(id);
    setVotes(prev => ({ ...prev, [id]: prev[id] + 1 }));
    setVoted(true);
  };

  const getPercent = (id) => Math.round((votes[id] / (total + (voted ? 1 : 0))) * 100);

  return (
    <section className="px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto"
      >
        <div className="rounded-2xl border p-8"
          style={{ background: 'rgba(10,9,24,0.8)', borderColor: 'rgba(139,92,246,0.2)' }}>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)' }}>
              <Smartphone className="w-5 h-5 text-violet-400" strokeWidth={1.5} />
            </div>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-violet-500">Community Poll</span>
          </div>

          <h3 className="text-white font-bold text-lg mb-1">Which platform do you want first?</h3>
          <p className="text-slate-500 text-sm mb-6">
            The LBC Hub mobile app is coming in <span className="text-violet-400 font-medium">Q3–Q4 2026</span>. Tell us your preference.
          </p>

          <div className="space-y-3">
            {options.map(({ id, label, emoji }) => {
              const pct = getPercent(id);
              const isSelected = selected === id;
              return (
                <button
                  key={id}
                  onClick={() => handleVote(id)}
                  disabled={voted}
                  className="w-full text-left rounded-xl border overflow-hidden transition-all duration-300 relative"
                  style={{
                    borderColor: isSelected ? 'rgba(139,92,246,0.5)' : 'rgba(255,255,255,0.06)',
                    background: isSelected ? 'rgba(139,92,246,0.08)' : 'rgba(255,255,255,0.02)',
                    cursor: voted ? 'default' : 'pointer',
                  }}
                >
                  {/* Progress bar */}
                  {voted && (
                    <div
                      className="absolute inset-y-0 left-0 transition-all duration-700 rounded-xl"
                      style={{ width: `${pct}%`, background: isSelected ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.03)' }}
                    />
                  )}
                  <div className="relative flex items-center justify-between px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{emoji}</span>
                      <span className="text-sm font-medium text-slate-300">{label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {voted && <span className="text-xs text-slate-500 font-mono">{pct}%</span>}
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-violet-400" />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {voted ? (
            <p className="text-center text-slate-600 text-xs mt-5">
              ✅ Thanks for voting! Results are live · {total + 1} votes total
            </p>
          ) : (
            <p className="text-center text-slate-700 text-xs mt-5">
              {total} votes so far · Select your platform preference
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
}