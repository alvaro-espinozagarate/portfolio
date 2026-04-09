const CATEGORIES = [
  {
    label: "Lenguajes",
    color: "neon",
    items: ["Python", "Node.js", "Java", "JavaScript", "Bash"],
  },
  {
    label: "Frameworks & APIs",
    color: "cyan",
    items: ["Django REST Framework", "FastAPI", "Spring Boot"],
  },
  {
    label: "Bases de datos",
    color: "neon",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Server", "SQLite"],
  },
  {
    label: "Infraestructura",
    color: "cyan",
    items: ["Docker", "Azure", "AWS", "Nginx"],
  },
  {
    label: "Mensajería & Streams",
    color: "neon",
    items: ["RabbitMQ", "AWS SQS", "Lambda"],
  },
  {
    label: "DevOps & Herramientas",
    color: "cyan",
    items: ["Git / GitHub / GitLab", "Azure DevOps", "Linux", "Postman", "Power BI"],
  },
];

const SPECIALTIES = [
  { icon: "🏗️", title: "System Design", desc: "Arquitecturas distribuidas, escalables y resilientes desde cero." },
  { icon: "⚡", title: "Performance", desc: "Optimización de queries, caché y latencia a nivel de microsegundos." },
  { icon: "🔒", title: "Seguridad", desc: "OAuth 2.0, JWT, rate limiting, input validation y OWASP Top 10." },
  { icon: "🔄", title: "Event-Driven", desc: "Sistemas asíncronos con colas de mensajes y event sourcing." },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div
        className="absolute left-0 top-1/2 w-80 h-80 rounded-full pointer-events-none opacity-5"
        style={{ background: "radial-gradient(circle, #00ff9d, transparent)" }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="sec-num font-space mb-3">// 02 — SKILLS</p>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-[#c8dde8]">
            Stack <span className="text-neon">técnico</span>
          </h2>
        </div>

        {/* Specialties */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {SPECIALTIES.map((s) => (
            <div key={s.title} className="card-hover bg-[#0d1e2e] p-5 rounded-sm">
              <div className="text-2xl mb-3">{s.icon}</div>
              <h3 className="font-display font-bold text-[#c8dde8] mb-2">{s.title}</h3>
              <p className="font-mono text-xs text-[#3a6080] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <div key={cat.label} className="card-hover bg-[#0d1e2e] p-6 rounded-sm">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#1a3a52]/60">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: cat.color === "neon" ? "#00ff9d" : "#00e5ff" }}
                />
                <span
                  className="font-space text-xs tracking-widest uppercase"
                  style={{ color: cat.color === "neon" ? "#00ff9d" : "#00e5ff" }}
                >
                  {cat.label}
                </span>
              </div>
              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="skill-tech-card font-mono text-xs text-[#3a6080]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
