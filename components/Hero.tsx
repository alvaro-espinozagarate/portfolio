export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-display font-extrabold text-[20vw] text-white/[0.015] select-none whitespace-nowrap">
          BACKEND
        </span>
      </div>
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,255,157,0.05) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 border border-neon/30 rounded-sm bg-neon/5 animate-[fadeInUp_0.8s_ease_0.1s_both]">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span className="font-mono text-neon text-xs tracking-widest">DISPONIBLE PARA PROYECTOS</span>
          </div>

          {/* Terminal prefix */}
          <p className="font-mono text-[#3a6080] text-sm mb-2 tracking-wider animate-[fadeInUp_0.8s_ease_0.15s_both]">
            <span className="text-neon">~/</span>portfolio
            <span className="text-[#00e5ff]">$</span> whoami
          </p>

          {/* Name */}
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-none mb-4 animate-[fadeInUp_0.8s_ease_0.25s_both]">
            <span className="text-[#c8dde8]">Alvaro</span>
            <br />
            <span className="glitch-wrap text-neon glow-neon" data-text="Espinoza">
              Espinoza
            </span>
          </h1>

          {/* Subtitle */}
          <div className="flex items-center gap-3 mb-6 animate-[fadeInUp_0.8s_ease_0.4s_both]">
            <div className="w-8 h-px bg-neon/60" />
            <span className="font-space text-[#00e5ff] text-sm tracking-widest uppercase">
              System Engineer · Backend Engineer
            </span>
          </div>

          <p className="font-mono text-[#3a6080] text-sm leading-relaxed mb-8 max-w-lg animate-[fadeInUp_0.8s_ease_0.4s_both]">
            Diseño y construyo sistemas backend de alto rendimiento, APIs robustas y arquitecturas escalables. Más de{" "}
            <span className="text-[#c8dde8]">2 años</span> transformando lógica compleja en soluciones confiables.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10 animate-[fadeInUp_0.8s_ease_0.55s_both]">
            <div className="border-l-2 border-neon/50 pl-4">
              <div className="font-display font-bold text-3xl text-neon glow-neon">2+</div>
              <div className="font-mono text-xs text-[#3a6080] mt-1">Años exp.</div>
            </div>
            <div className="border-l-2 border-[#00e5ff]/50 pl-4">
              <div className="font-display font-bold text-3xl text-[#00e5ff] glow-cyan">10+</div>
              <div className="font-mono text-xs text-[#3a6080] mt-1">Proyectos</div>
            </div>
            <div className="border-l-2 border-neon/50 pl-4">
              <div className="font-display font-bold text-3xl text-neon glow-neon">5+</div>
              <div className="font-mono text-xs text-[#3a6080] mt-1">Clientes</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-[fadeInUp_0.8s_ease_0.7s_both]">
            <a
              href="#projects"
              className="hex-border flex items-center gap-2 bg-neon text-dark font-space font-bold text-xs px-6 py-3 hover:bg-neon/90 transition-all tracking-widest uppercase shadow-[0_0_20px_rgba(0,255,157,0.3)]"
            >
              Ver Proyectos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="hex-border flex items-center gap-2 border border-[#1a3a52] text-[#c8dde8] font-space text-xs px-6 py-3 hover:border-neon/40 hover:text-neon transition-all tracking-widest uppercase"
            >
              Contactar
            </a>
          </div>
        </div>

        {/* Right: Terminal card */}
        <div className="hidden lg:block animate-[fadeInUp_0.8s_ease_0.4s_both]">
          <div className="card-hover rounded-sm overflow-hidden" style={{ background: "#0a1520" }}>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a3a52]/50" style={{ background: "#0d1e2e" }}>
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-neon/70" />
              <span className="ml-4 font-mono text-[#3a6080] text-xs">profile.json</span>
            </div>
            <div className="p-6 font-mono text-sm leading-7">
              <span className="text-[#3a6080]">{"{"}</span><br />
              &nbsp;&nbsp;<span className="text-[#00e5ff]">&quot;name&quot;</span><span className="text-[#3a6080]">:</span> <span className="text-neon">&quot;Alvaro Espinoza Garate&quot;</span><span className="text-[#3a6080]">,</span><br />
              &nbsp;&nbsp;<span className="text-[#00e5ff]">&quot;role&quot;</span><span className="text-[#3a6080]">:</span> <span className="text-neon">&quot;System Engineer&quot;</span><span className="text-[#3a6080]">,</span><br />
              &nbsp;&nbsp;<span className="text-[#00e5ff]">&quot;stack&quot;</span><span className="text-[#3a6080]">: [</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c8dde8]">&quot;Python&quot;</span><span className="text-[#3a6080]">,</span> <span className="text-[#c8dde8]">&quot;Node.js&quot;</span><span className="text-[#3a6080]">,</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c8dde8]">&quot;Django REST Framework&quot;</span><span className="text-[#3a6080]">,</span> <span className="text-[#c8dde8]">&quot;PostgreSQL&quot;</span><span className="text-[#3a6080]">,</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c8dde8]">&quot;Redis&quot;</span><span className="text-[#3a6080]">,</span> <span className="text-[#c8dde8]">&quot;Docker&quot;</span><br />
              &nbsp;&nbsp;<span className="text-[#3a6080]">],</span><br />
              &nbsp;&nbsp;<span className="text-[#00e5ff]">&quot;focus&quot;</span><span className="text-[#3a6080]">: [</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c8dde8]">&quot;Microservices&quot;</span><span className="text-[#3a6080]">,</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c8dde8]">&quot;REST APIs&quot;</span><span className="text-[#3a6080]">,</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c8dde8]">&quot;System Design&quot;</span><br />
              &nbsp;&nbsp;<span className="text-[#3a6080]">],</span><br />
              &nbsp;&nbsp;<span className="text-[#00e5ff]">&quot;status&quot;</span><span className="text-[#3a6080]">:</span> <span className="text-neon">&quot;available&quot;</span><span className="text-[#3a6080]">,</span><br />
              &nbsp;&nbsp;<span className="text-[#00e5ff]">&quot;location&quot;</span><span className="text-[#3a6080]">:</span> <span className="text-[#c8dde8]">&quot;Lima, Perú&quot;</span><br />
              <span className="text-[#3a6080]">{"}"}</span>
              <span className="animate-blink text-neon">▊</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Python","Node.js","PostgreSQL","Redis","Docker","Azure","AWS"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-mono text-xs text-[#3a6080] tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-neon to-transparent animate-pulse" />
      </div>
    </section>
  );
}
