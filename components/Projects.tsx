import { ReactNode } from "react";

interface Project {
  title: string;
  year: string;
  desc: string;
  metrics?: { value: string; label: string }[];
  tags: string[];
  color: "neon" | "cyan";
  wide?: boolean;
  icon: ReactNode;
  githubUrl?: string;
  liveUrl?: string;
}

const GitIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────
// EDITA AQUÍ: agrega githubUrl y/o liveUrl a cada proyecto.
// Si un proyecto no tiene link, simplemente no pongas el campo
// (o déjalo como "") y el ícono aparecerá deshabilitado.
// ─────────────────────────────────────────────────────────────────
const PROJECTS: Project[] = [
  // {
  //   title: "PayFlow API Gateway",
  //   year: "2024",
  //   desc: "Gateway de pagos de alta disponibilidad procesando +500k transacciones diarias. Arquitectura de microservicios con circuit breakers y rate limiting avanzado.",
  //   tags: ["Node.js", "Redis", "PostgreSQL", "Docker"],
  //   color: "neon",
  //   githubUrl: "", // ej: "https://github.com/alvaro-espinozagarate/payflow-api"
  //   liveUrl: "",   // ej: "https://payflow.tudominio.com"
  //   icon: (
  //     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
  //     </svg>
  //   ),
  // },
  // {
  //   title: "DataSync Platform",
  //   year: "2024",
  //   desc: "Plataforma de sincronización en tiempo real para datos distribuidos. Event sourcing con Kafka, reducción del 70% en latencia de datos críticos.",
  //   tags: ["Python", "Kafka", "MongoDB", "gRPC"],
  //   color: "cyan",
  //   githubUrl: "", // ej: "https://github.com/alvaro-espinozagarate/datasync"
  //   liveUrl: "",
  //   icon: (
  //     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
  //     </svg>
  //   ),
  // },
  // {
  //   title: "AuthShield Service",
  //   year: "2023",
  //   desc: "Sistema de autenticación y autorización empresarial con OAuth 2.0, JWT, MFA y auditoría completa. Protege +20 microservicios en producción.",
  //   tags: ["Go", "PostgreSQL", "Redis", "JWT"],
  //   color: "neon",
  //   githubUrl: "", // ej: "https://github.com/alvaro-espinozagarate/authshield"
  //   liveUrl: "",
  //   icon: (
  //     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  //     </svg>
  //   ),
  // },
  {
    title: "SIMAT - UNFV",
    year: "2025",
    desc: "Sistema académico que soporta +10k req/s, reduciendo tiempos de matrícula en un 90% y mejorando la experiencia de estudiantes.",
    tags: ["Django REST Framework", "SQL Server", "Azure DevOps", "Docker", "Windows Server"],
    metrics: [
      { value: "10k+", label: "req/s" },
      { value: "8", label: "microsvcs" },
      { value: "99.9%", label: "uptime" },
    ],
    color: "cyan",
    wide: true,
    githubUrl: "", // repositorio privado — déjalo vacío si no es público
    liveUrl: "https://simat.unfv.edu.pe/",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Monitor Climático - Perú",
    year: "2026",
    desc: "Motor de analytics en tiempo real con procesamiento de streams, dashboards y alertas automáticas del clima usando la API de Open Weather.",
    tags: ["TypeScript", "Next.js", "API REST"],
    color: "neon",
    githubUrl: "https://github.com/alvaro-espinozagarate/dashboard-climatologico",
    liveUrl: "https://dashboard-climatologico.vercel.app/",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

// Botones de links: si no hay URL, el ícono aparece deshabilitado (opaco)
function ProjectLinks({ githubUrl, liveUrl }: { githubUrl?: string; liveUrl?: string }) {
  return (
    <div className="flex gap-2">
      {/* GitHub */}
      {githubUrl ? (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer"
          title="Ver en GitHub"
          className="text-[#3a6080] hover:text-neon transition-colors">
          <GitIcon />
        </a>
      ) : (
        <span className="text-[#3a6080] opacity-25 cursor-not-allowed" title="Repositorio no disponible">
          <GitIcon />
        </span>
      )}

      {/* Live / Demo */}
      {liveUrl ? (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer"
          title="Ver proyecto en vivo"
          className="text-[#3a6080] hover:text-[#00e5ff] transition-colors">
          <ExternalIcon />
        </a>
      ) : (
        <span className="text-[#3a6080] opacity-25 cursor-not-allowed" title="Demo no disponible">
          <ExternalIcon />
        </span>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div
        className="absolute right-0 bottom-0 w-96 h-96 rounded-full pointer-events-none opacity-5"
        style={{ background: "radial-gradient(circle, #00ff9d, transparent)" }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="sec-num font-space mb-3">// 03 — PROYECTOS</p>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-[#c8dde8]">
              Trabajo <span className="text-neon">destacado</span>
            </h2>
          </div>
          <a href="#contact" className="hidden md:flex items-center gap-2 font-mono text-xs text-[#3a6080] hover:text-neon transition-colors border border-[#1a3a52] hover:border-neon/40 px-4 py-2 rounded-sm">
            Ver Todos →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className={`card-hover relative bg-[#0d1e2e] p-6 rounded-sm overflow-hidden${p.wide ? " md:col-span-2" : ""}`}
            >
              <div className="project-accent" />

              <div className={`flex ${p.wide ? "flex-col sm:flex-row sm:items-start" : "items-start"} justify-between gap-4 mb-4`}>
                <div className={`flex ${p.wide ? "items-center gap-4" : "items-start justify-between w-full"}`}>
                  {/* Icon */}
                  <div
                    className="w-10 h-10 border flex items-center justify-center rounded-sm flex-shrink-0"
                    style={{
                      borderColor: p.color === "neon" ? "rgba(0,255,157,0.3)" : "rgba(0,229,255,0.3)",
                      background: p.color === "neon" ? "rgba(0,255,157,0.05)" : "rgba(0,229,255,0.05)",
                      color: p.color === "neon" ? "#00ff9d" : "#00e5ff",
                    }}
                  >
                    {p.icon}
                  </div>

                  {/* Wide: título inline con el ícono */}
                  {p.wide && (
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#c8dde8]">{p.title}</h3>
                      <div className="font-mono text-xs mt-1" style={{ color: p.color === "neon" ? "#00ff9d" : "#00e5ff" }}>
                        Proyecto destacado · {p.year}
                      </div>
                    </div>
                  )}

                  {/* Normal: links a la derecha del ícono */}
                  {!p.wide && (
                    <ProjectLinks githubUrl={p.githubUrl} liveUrl={p.liveUrl} />
                  )}
                </div>

                {/* Wide: links a la derecha del bloque */}
                {p.wide && (
                  <ProjectLinks githubUrl={p.githubUrl} liveUrl={p.liveUrl} />
                )}
              </div>

              {/* Título (solo cards normales) */}
              {!p.wide && (
                <h3 className="font-display font-bold text-lg text-[#c8dde8] mb-2">{p.title}</h3>
              )}

              <p className="font-mono text-xs text-[#3a6080] leading-relaxed mb-4 max-w-2xl">{p.desc}</p>

              {/* Métricas */}
              {p.metrics && (
                <div className="grid grid-cols-3 gap-4 mb-4 max-w-sm">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display font-bold text-xl text-neon">{m.value}</div>
                      <div className="font-mono text-xs text-[#3a6080]">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
