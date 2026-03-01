"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  icon?: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
  color?: string;
  size?: "sm" | "md" | "lg";
}

const levelColors = {
  beginner: "from-gray-400 to-gray-500",
  intermediate: "from-red-400 to-red-500",
  advanced: "from-red-400 to-red-500",
  expert: "from-yellow-400 to-orange-500",
};

const levelGlow = {
  beginner: "rgba(156, 163, 175, 0.3)",
  intermediate: "rgba(96, 165, 250, 0.3)",
  advanced: "rgba(167, 139, 250, 0.3)",
  expert: "rgba(251, 191, 36, 0.3)",
};

export default function SkillBadge({
  skill,
  icon,
  level = "intermediate",
  color,
  size = "md",
}: SkillBadgeProps) {
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 20px ${color || levelGlow[level]}`,
      }}
      className={`
        inline-flex items-center gap-2 rounded-full font-medium
        bg-gradient-to-r ${color ? "" : levelColors[level]}
        text-white shadow-lg
        ${sizeClasses[size]}
      `}
      style={color ? { background: color } : undefined}
    >
      {icon && <span>{icon}</span>}
      <span>{skill}</span>
    </motion.div>
  );
}

// Floating skill badges animation component
// Use deterministic positions based on index to avoid hydration mismatch
const getPosition = (index: number, total: number) => {
  const goldenRatio = 1.618033988749895;
  const x = ((index * goldenRatio * 37) % 80);
  const y = ((index * goldenRatio * 23) % 80);
  return { x, y };
};

export function FloatingSkills({ skills }: { skills: string[] }) {
  return (
    <div className="relative w-full h-40 overflow-hidden">
      {skills.map((skill, index) => {
        const pos = getPosition(index, skills.length);
        const pos2 = getPosition(index + 7, skills.length);
        const pos3 = getPosition(index + 13, skills.length);
        return (
        <motion.div
          key={skill}
          className="absolute"
          initial={{
            x: `${pos.x}%`,
            y: `${pos.y}%`,
            opacity: 0,
          }}
          animate={{
            x: [
              `${pos.x}%`,
              `${pos2.x}%`,
              `${pos3.x}%`,
            ],
            y: [
              `${pos.y}%`,
              `${pos2.y}%`,
              `${pos3.y}%`,
            ],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 10 + (index % 5) * 2,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut",
          }}
        >
          <div className="px-3 py-1.5 text-sm font-medium bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] rounded-full text-[var(--text-secondary)]">
            {skill}
          </div>
        </motion.div>
        );
      })}
    </div>
  );
}


