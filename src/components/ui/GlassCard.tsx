"use client";

import { ReactNode, memo } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  glowOnHover?: boolean;
}

// Pure CSS card with edge glow effect on hover
const GlassCard = memo(function GlassCard({
  children,
  className = "",
  onClick,
  glowOnHover = true,
}: GlassCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden
        bg-[var(--glass-bg)] backdrop-blur-md
        border border-[var(--glass-border)]
        rounded-2xl shadow-[var(--glass-shadow)]
        transition-all duration-300 ease-out
        hover:bg-[var(--glass-bg-hover)] hover:border-[var(--glass-border-hover)]
        ${glowOnHover ? 'hover:shadow-[0_0_20px_rgba(139,92,246,0.3),0_0_40px_rgba(139,92,246,0.1)] hover:border-[var(--accent-red)]/40' : ''}
        group/card
        ${className}
      `}
      onClick={onClick}
    >
      {/* Animated edge glow on hover */}
      {glowOnHover && (
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl" style={{
            background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.1), transparent)',
            animation: 'shimmer 2s infinite',
          }} />
        </div>
      )}
      
      {/* Corner glow accents */}
      {glowOnHover && (
        <>
          <div className="absolute -top-1 -left-1 w-16 h-16 bg-[var(--accent-red)]/0 group-hover/card:bg-[var(--accent-red)]/20 rounded-full blur-xl transition-all duration-500 pointer-events-none" />
          <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-[var(--accent-orange)]/0 group-hover/card:bg-[var(--accent-orange)]/20 rounded-full blur-xl transition-all duration-500 pointer-events-none" />
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
});

export default GlassCard;





