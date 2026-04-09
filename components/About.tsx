const VALUES = [
  "Clean Architecture", "TDD / BDD",
  "SOLID Principles", "DevOps mindset",
  "Domain Driven Design", "Event-driven Systems",
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div
        className="absolute right-0 top-0 w-96 h-96 rounded-full pointer-events-none opacity-5"
        style={{ background: "radial-gradient(circle, #00e5ff, transparent)" }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Avatar */}
          <div className="relative">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div className="aspect-square bg-[#0d1e2e] border border-[#1a3a52] relative overflow-hidden hex-border">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,255,157,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,157,0.05) 1px,transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div
                    className="w-32 h-32 rounded-full border-2 border-neon/40 flex items-center justify-center mb-4"
                    style={{ background: "rgba(0,255,157,0.05)" }}
                  >
                    <span className="font-display font-extrabold text-5xl text-neon glow-neon">AE</span>
                  </div>
                  <div className="font-mono text-sm text-[#3a6080]">@alvароespinoza</div>
                </div>
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-neon/60" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-neon/60" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-neon/60" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-neon/60" />
              </div>
              <div className="absolute -right-6 top-8 bg-[#0d1e2e] border border-neon/30 px-4 py-3 rounded-sm shadow-lg">
                <div className="font-display font-bold text-2xl text-neon">99%</div>
                <div className="font-mono text-xs text-[#3a6080]">Uptime SLA</div>
              </div>
              <div className="absolute -left-6 bottom-8 bg-[#0d1e2e] border border-[#00e5ff]/30 px-4 py-3 rounded-sm shadow-lg">
                <div className="font-display font-bold text-2xl text-[#00e5ff]">10x</div>
                <div className="font-mono text-xs text-[#3a6080]">Performance</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="sec-num font-space mb-3">// 01 — SOBRE MÍ</p>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-[#c8dde8] mb-6 leading-tight">
              Construyendo el<br />
              <span className="text-neon">backbone</span> digital
            </h2>
            <div className="space-y-4 font-mono text-sm text-[#3a6080] leading-relaxed mb-8">
              <p>
                Soy <span className="text-[#c8dde8]">Alvaro Espinoza Garate</span>, Ingeniero de Sistemas especializado en desarrollo Backend con más de 2 años de experiencia diseñando arquitecturas que escalan.
              </p>
              <p>
                Mi enfoque está en construir sistemas que no solo funcionen, sino que sean{" "}
                <span className="text-[#c8dde8]">seguros, eficientes y mantenibles</span> a largo plazo.
              </p>
              <p>
                He trabajado con equipos en startups de alto crecimiento y empresas corporativas, liderando decisiones técnicas que impactan directamente en la{" "}
                <span className="text-neon">experiencia del usuario final</span>.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {VALUES.map((v) => (
                <div key={v} className="flex items-center gap-3">
                  <span className="text-neon text-lg">→</span>
                  <span className="font-mono text-xs text-[#3a6080]">{v}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/alvaro-espinozagarate" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-[#3a6080] hover:text-neon transition-colors border border-[#1a3a52] hover:border-neon/40 px-4 py-2 rounded-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/alvaroespinozagarate/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-[#3a6080] hover:text-[#00e5ff] transition-colors border border-[#1a3a52] hover:border-[#00e5ff]/40 px-4 py-2 rounded-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
