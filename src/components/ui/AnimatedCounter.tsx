"use client";

import { useEffect, useRef, useState, memo } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

// Memoized to prevent unnecessary re-renders
const AnimatedCounter = memo(function AnimatedCounter({
  value,
  duration = 1, // Faster default duration
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    // Cancel any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    // Extract numeric part and suffix
    const numericMatch = value.match(/^([\d.]+)/);
    const suffix = value.replace(/^[\d.]+/, "");

    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseFloat(numericMatch[1]);
    const isDecimal = numericMatch[1].includes(".");
    const decimalPlaces = isDecimal
      ? numericMatch[1].split(".")[1]?.length || 0
      : 0;

    const startTime = performance.now();
    const durationMs = duration * 1000;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = targetNumber * easeOut;

      if (isDecimal) {
        setDisplayValue(currentValue.toFixed(decimalPlaces) + suffix);
      } else {
        setDisplayValue(Math.floor(currentValue).toString() + suffix);
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView, value, duration]);

  return (
    <span
      ref={ref}
      className={className}
    >
      {displayValue}
    </span>
  );
});

export default AnimatedCounter;
