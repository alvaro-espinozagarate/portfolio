"use client";
import { useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a3a52]/50"
      style={{ background: "rgba(5,10,14,0.9)", backdropFilter: "blur(20px)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group flex-shrink-0">
            <div
              className="w-7 h-7 border border-neon/60 flex items-center justify-center"
              style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}
            >
              <span className="text-neon font-mono text-xs font-bold">AE</span>
            </div>
            <span className="font-display font-bold text-[#c8dde8] text-sm tracking-wider group-hover:text-neon transition-colors">
              alvaro<span className="text-neon">.</span>espinoza
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}
                className="nav-link font-space text-xs text-[#3a6080] hover:text-neon transition-colors tracking-widest uppercase whitespace-nowrap">
                {l.label}
              </a>
            ))}

            {/* CV Button */}
            <a
              href="/cv-alvaro-espinoza.pdf"
              download="CV-Alvaro-Espinoza-Garate.pdf"
              className="flex items-center gap-1.5 border border-[#00e5ff]/50 text-[#00e5ff] font-space text-xs px-4 py-2 hover:bg-[#00e5ff]/10 transition-all tracking-widest uppercase whitespace-nowrap"
              style={{ clipPath: "polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px)" }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              CV
            </a>

            {/* Contratar Button */}
            <a href="#contact"
              className="hex-border bg-neon/10 border border-neon/50 text-neon font-space text-xs px-4 py-2 hover:bg-neon/20 transition-all tracking-widest uppercase whitespace-nowrap">
              Contratar
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-[#3a6080] hover:text-neon transition-colors p-1" onClick={() => setOpen(!open)}>
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden border-t border-[#1a3a52]/50 overflow-hidden transition-all duration-300"
          style={{ maxHeight: open ? "500px" : "0", opacity: open ? 1 : 0 }}
        >
          <div className="py-5 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}
                className="font-space text-xs text-[#3a6080] hover:text-neon transition-colors tracking-widest uppercase"
                onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="h-px bg-[#1a3a52]/50 my-1" />
            <div className="flex gap-3">
              {/* CV mobile */}
              <a
                href="/cv-alvaro-espinoza.pdf"
                download="CV-Alvaro-Espinoza-Garate.pdf"
                onClick={() => setOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 border border-[#00e5ff]/50 text-[#00e5ff] font-space text-xs py-2.5 hover:bg-[#00e5ff]/10 transition-all tracking-widest uppercase rounded-sm"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                CV
              </a>
              {/* Contratar mobile */}
              <a href="#contact" onClick={() => setOpen(false)}
                className="flex-1 flex items-center justify-center hex-border bg-neon/10 border border-neon/50 text-neon font-space text-xs py-2.5 hover:bg-neon/20 transition-all tracking-widest uppercase">
                Contratar
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
