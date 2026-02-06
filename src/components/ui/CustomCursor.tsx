"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const stateRef = useRef({ hovering: false, clicking: false, visible: false });

  // Check if device is desktop with pointer
  useEffect(() => {
    const checkDevice = () => {
      const hasPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isLargeScreen = window.innerWidth >= 768;
      setIsDesktop(hasPointer && !isTouchDevice && isLargeScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Direct DOM manipulation for instant cursor movement (NO React state!)
  useEffect(() => {
    if (!isDesktop) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const center = centerRef.current;
    if (!cursor || !dot || !ring || !center) return;

    // Update cursor appearance based on state
    const updateAppearance = () => {
      const { hovering, clicking, visible } = stateRef.current;
      const size = hovering ? 48 : clicking ? 24 : 32;
      
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      ring.style.marginLeft = `${-size / 2}px`;
      ring.style.marginTop = `${-size / 2}px`;
      ring.style.opacity = visible ? (hovering ? "0.9" : "0.6") : "0";
      ring.style.transform = clicking ? "scale(0.9)" : "scale(1)";
      
      const dotSize = hovering ? 6 : 4;
      center.style.width = `${dotSize}px`;
      center.style.height = `${dotSize}px`;
      center.style.marginLeft = `${-dotSize / 2}px`;
      center.style.marginTop = `${-dotSize / 2}px`;
      center.style.opacity = visible ? "1" : "0";
      
      dot.style.opacity = visible && !hovering ? "0.5" : "0";
    };

    const onMouseMove = (e: MouseEvent) => {
      // Direct transform - no RAF needed, browser handles it
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      
      if (!stateRef.current.visible) {
        stateRef.current.visible = true;
        updateAppearance();
      }
    };

    const onMouseEnter = () => {
      stateRef.current.visible = true;
      updateAppearance();
    };

    const onMouseLeave = () => {
      stateRef.current.visible = false;
      updateAppearance();
    };

    const onMouseDown = () => {
      stateRef.current.clicking = true;
      updateAppearance();
    };

    const onMouseUp = () => {
      stateRef.current.clicking = false;
      updateAppearance();
    };

    // Simplified hover detection - no getComputedStyle (expensive!)
    const checkInteractive = (el: HTMLElement): boolean => {
      const tags = ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT"];
      if (tags.includes(el.tagName)) return true;
      if (el.getAttribute("role") === "button") return true;
      if (el.classList.contains("cursor-pointer")) return true;
      if (el.hasAttribute("data-clickable")) return true;
      
      // Check 3 parent levels only
      let parent = el.parentElement;
      for (let i = 0; i < 3 && parent; i++) {
        if (tags.includes(parent.tagName) || parent.classList.contains("cursor-pointer")) {
          return true;
        }
        parent = parent.parentElement;
      }
      return false;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const wasHovering = stateRef.current.hovering;
      stateRef.current.hovering = checkInteractive(target);
      if (wasHovering !== stateRef.current.hovering) {
        updateAppearance();
      }
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [isDesktop]);

  // Don't render on mobile/touch
  if (!isDesktop) return null;

  return (
    <>
      {/* Main cursor container */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ willChange: "transform" }}
      >
        {/* Ring */}
        <div
          ref={ringRef}
          className="rounded-full border-2 border-white mix-blend-difference"
          style={{
            width: 32,
            height: 32,
            marginLeft: -16,
            marginTop: -16,
            opacity: 0,
            transition: "width 0.12s ease-out, height 0.12s ease-out, opacity 0.12s ease-out, margin 0.12s ease-out, transform 0.08s ease-out",
          }}
        />
        {/* Center dot */}
        <div
          ref={centerRef}
          className="absolute rounded-full bg-white mix-blend-difference"
          style={{
            width: 4,
            height: 4,
            marginLeft: -2,
            marginTop: -2,
            top: 0,
            left: 0,
            opacity: 0,
            transition: "width 0.1s ease-out, height 0.1s ease-out, margin 0.1s ease-out",
          }}
        />
      </div>

      {/* Trail dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ willChange: "transform" }}
      >
        <div
          className="rounded-full bg-purple-500"
          style={{
            width: 6,
            height: 6,
            marginLeft: -3,
            marginTop: -3,
            opacity: 0,
            transition: "opacity 0.15s ease-out",
          }}
        />
      </div>

      {/* Hide default cursor */}
      <style jsx global>{`
        @media (hover: hover) and (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  );
}
