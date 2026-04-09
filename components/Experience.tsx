const EXPERIENCES = [
  {
    role: "CEO & Lead Backend Engineer",
    company: "FAcore Peru",
    period: "2026 — Presente",
    color: "neon",
    desc: "Lideré el rediseño de la arquitectura backend migrando de monolito a microservicios, logrando un 300% de mejora en throughput y reduciendo costos de infraestructura en 40%.",
    tags: ["Python", "Node.js", "Django REST Framework", "PostgreSQL", "AWS", "Nginx", "Redis"],
  },
  {
    role: "Desarrollador de Software | Backend",
    company: "Zeia Smart Energy",
    period: "2026 — Presente",
    color: "cyan",
    desc: "Rediseñé la arquitectura backend a fines de reducir los costos de consumo en el AWS en 70%, así mismo se realizó la mejora de velocidad de respuesta en 85%.",
    tags: ["Python", "Lambda", "AWS", "RabbitMQ", "PostgreSQL"],
  },
  {
    role: "Practicante en Ing. de Sistemas",
    company: "Universidad Nacional Federico Villarreal",
    period: "2024 — 2025",
    color: "cyan",
    desc: "Construcción de APIs RESTful para clientes del sector universitario enfocado en la matrícula virtual. Primeros pasos en arquitecturas de microservicios y contenedores Docker.",
    tags: ["Python", "Django", "SQL Server", "Docker", "Azure", "Windows Server"],
  },
];

const EDUCATION = {
  title: "Ing. de Sistemas",
  institution: "Universidad Nacional Federico Villarreal",
  period: "2021 — 2025",
  desc: "Participación activa en proyectos de investigación y desarrollo de software, con enfoque en sistemas distribuidos y optimización de bases de datos.",
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="sec-num font-space mb-3">// 04 — EXPERIENCIA</p>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-[#c8dde8]">
            Trayectoria <span className="text-neon">profesional</span>
          </h2>
        </div>

        <div className="relative pl-8 max-w-3xl mx-auto">
          <div className="timeline-line" />

          {EXPERIENCES.map((exp) => (
            <div key={exp.role} className="relative mb-12 pl-8">
              <div
                className="absolute left-0 -translate-x-1/2 w-3 h-3 border-2 bg-dark rounded-full"
                style={{ top: "6px", borderColor: exp.color === "neon" ? "#00ff9d" : "#00e5ff" }}
              />
              <div className="card-hover bg-[#0d1e2e] p-6 rounded-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#c8dde8]">{exp.role}</h3>
                    <div
                      className="font-mono text-sm"
                      style={{ color: exp.color === "neon" ? "#00ff9d" : "#00e5ff" }}
                    >
                      {exp.company}
                    </div>
                  </div>
                  <div className="font-mono text-xs text-[#3a6080] border border-[#1a3a52] px-3 py-1 rounded-sm whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>
                <p className="font-mono text-xs text-[#3a6080] leading-relaxed mb-4">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}

          {/* Education */}
          <div className="relative pl-8">
            <div className="absolute left-0 -translate-x-1/2 w-3 h-3 border-2 border-[#3a6080] bg-dark rounded-full" style={{ top: "6px" }} />
            <div className="card-hover bg-[#0d1e2e] p-6 rounded-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-display font-bold text-lg text-[#c8dde8]">{EDUCATION.title}</h3>
                  <div className="font-mono text-sm text-[#3a6080]">{EDUCATION.institution}</div>
                </div>
                <div className="font-mono text-xs text-[#3a6080] border border-[#1a3a52] px-3 py-1 rounded-sm whitespace-nowrap">
                  {EDUCATION.period}
                </div>
              </div>
              <p className="font-mono text-xs text-[#3a6080] leading-relaxed">{EDUCATION.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
