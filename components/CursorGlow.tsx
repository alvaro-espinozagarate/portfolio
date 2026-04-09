"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-[9999] w-[300px] h-[300px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
      style={{
        background: "radial-gradient(circle, rgba(0,255,157,0.06) 0%, transparent 70%)",
      }}
    />
  );
}
