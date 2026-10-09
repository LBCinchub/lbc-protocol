import React from 'react';

const LOGO_SRC = '/lbc-protocol.png?v=1';

export default function LBCLogo({ size = 32, className = '', radius = 'rounded-lg' }) {
  return (
    <div
      role="img"
      aria-label="LBC Protocol"
      className={`flex items-center justify-center flex-shrink-0 overflow-hidden ${radius} ${className}`}
      style={{
        width: size,
        height: size,
        background: '#000000',
        padding: Math.max(2, Math.round(size * 0.12)),
        border: '1px solid rgba(139,92,246,0.35)',
      }}>
      <img src={LOGO_SRC} alt="LBC Protocol" className="w-full h-full object-contain" draggable={false} />
    </div>
  );
}