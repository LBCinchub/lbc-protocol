import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function BigBrotherChat() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!message.trim() || loading) return;
    const userMsg = message;
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setMessage('');
    setLoading(true);
    try {
      const response = await base44.integrations.Core.InvokeLLM({
        prompt: `You are Big Brother, the central intelligence of the LBC Protocol ecosystem — a Solana-powered platform delivering real-world utility through the Lumina Blockchain ($LBC) token, a non-custodial digital wallet, freelancer marketplace, DePIN solar-powered Starlink connectivity nodes, and transparent governance infrastructure. LBC stands for Lumina Blockchain Coin. The project is founded by @LBC_FOUNDER, built from Canada, targeting MENA and emerging markets globally. Key domains: lbc-hub.com, lbchub.io, lbc.network. Contact: info@lbc.network.\n\nUser: ${userMsg}\n\nRespond helpfully and concisely in 1-3 sentences.`,
      });
      setMessages(prev => [...prev, { text: response, sender: 'assistant' }]);
    } catch {
      setMessages(prev => [...prev, { text: 'I encountered an error. Please try again.', sender: 'assistant' }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-2xl z-50"
        style={{ background: 'linear-gradient(135deg, #6366f1, #7c3aed)', boxShadow: '0 0 28px rgba(124,58,237,0.5)' }}>
        {chatOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl border shadow-2xl overflow-hidden z-50 flex flex-col"
            style={{ height: '480px', background: 'rgba(8,7,20,0.97)', borderColor: 'rgba(99,102,241,0.25)', backdropFilter: 'blur(20px)' }}>

            {/* Header */}
            <div className="px-5 py-4 border-b flex items-center gap-3" style={{ borderColor: 'rgba(99,102,241,0.12)' }}>
              <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #6366f1, #7c3aed)' }}>
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Big Brother</p>
                <p className="text-slate-600 text-[10px]">LBC Protocol Intelligence · Always on</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-500">Online</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {messages.length === 0 && (
                <div className="rounded-xl px-4 py-3 border"
                  style={{ background: 'rgba(99,102,241,0.08)', borderColor: 'rgba(99,102,241,0.2)' }}>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Welcome. I'm the central intelligence of LBC Protocol. Ask me anything about $LBC, the wallet, DePIN nodes, the Driver Portal, or our mission.
                  </p>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'text-white rounded-br-sm'
                      : 'text-slate-300 rounded-bl-sm border'
                  }`}
                    style={msg.sender === 'user'
                      ? { background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }
                      : { background: 'rgba(99,102,241,0.06)', borderColor: 'rgba(99,102,241,0.15)' }
                    }>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-sm px-4 py-3 border"
                    style={{ background: 'rgba(99,102,241,0.06)', borderColor: 'rgba(99,102,241,0.15)' }}>
                    <div className="flex gap-1.5">
                      {[0, 150, 300].map(delay => (
                        <span key={delay} className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce"
                          style={{ animationDelay: `${delay}ms` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t" style={{ borderColor: 'rgba(99,102,241,0.1)' }}>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border"
                style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                <input
                  type="text"
                  placeholder="Ask Big Brother..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && handleSend()}
                  className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 focus:outline-none"
                />
                <button onClick={handleSend} disabled={!message.trim() || loading}
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
                  style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}