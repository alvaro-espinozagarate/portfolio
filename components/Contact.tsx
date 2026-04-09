"use client";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Errors {
  name?: boolean;
  email?: boolean;
  subject?: boolean;
  message?: boolean;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const update = (k: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: false }));
    setApiError("");
  };

  const handleSend = async () => {
    const newErrors: Errors = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = true;
    if (!form.subject.trim()) newErrors.subject = true;
    if (!form.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setApiError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error desconocido");
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setApiError(err instanceof Error ? err.message : "Error al enviar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: keyof FormState) =>
    "form-input font-mono" + (errors[field] ? " !border-red-500/70 !shadow-[0_0_0_3px_rgba(255,68,68,0.1)]" : "");

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(0,255,157,0.04) 0%, transparent 60%)" }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="sec-num font-space mb-3">// 05 — CONTACTO</p>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-[#c8dde8] mb-4">
            ¿Tienes un <span className="text-neon">proyecto</span>?
          </h2>
          <p className="font-mono text-sm text-[#3a6080] max-w-lg mx-auto">
            Estoy abierto a oportunidades freelance, posiciones full-time y colaboraciones técnicas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Info cards */}
          <div className="space-y-5">
            <div className="card-hover bg-[#0d1e2e] p-5 rounded-sm flex items-center gap-4">
              <div className="w-10 h-10 border border-neon/30 flex items-center justify-center flex-shrink-0 rounded-sm" style={{ background: "rgba(0,255,157,0.05)" }}>
                <svg className="w-5 h-5 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="font-mono text-xs text-[#3a6080] mb-1">Email</div>
                <a href="mailto:alvaro.espinozagarate@gmail.com" className="font-mono text-sm text-[#c8dde8] hover:text-neon transition-colors break-all">
                  alvaro.espinozagarate@gmail.com
                </a>
              </div>
            </div>

            <div className="card-hover bg-[#0d1e2e] p-5 rounded-sm flex items-center gap-4">
              <div className="w-10 h-10 border border-[#00e5ff]/30 flex items-center justify-center flex-shrink-0 rounded-sm" style={{ background: "rgba(0,229,255,0.05)" }}>
                <svg className="w-5 h-5 text-[#00e5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="font-mono text-xs text-[#3a6080] mb-1">Ubicación</div>
                <span className="font-mono text-sm text-[#c8dde8]">Lima, Perú · Remote OK</span>
              </div>
            </div>

            <div className="card-hover bg-[#0d1e2e] p-5 rounded-sm flex items-center gap-4">
              <div className="w-10 h-10 border border-neon/30 flex items-center justify-center flex-shrink-0 rounded-sm" style={{ background: "rgba(0,255,157,0.05)" }}>
                <svg className="w-5 h-5 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-mono text-xs text-[#3a6080] mb-1">Disponibilidad</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                  <span className="font-mono text-sm text-neon">Disponible ahora</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-1">
              <a href="https://github.com/alvaro-espinozagarate" target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 font-mono text-xs text-[#3a6080] hover:text-neon transition-colors border border-[#1a3a52] hover:border-neon/40 py-3 rounded-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/alvaroespinozagarate/" target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 font-mono text-xs text-[#3a6080] hover:text-[#00e5ff] transition-colors border border-[#1a3a52] hover:border-[#00e5ff]/40 py-3 rounded-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="card-hover bg-[#0d1e2e] p-6 sm:p-8 rounded-sm">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#1a3a52]/50">
              <span className="w-2 h-2 rounded-full bg-red-500/70" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
              <span className="w-2 h-2 rounded-full bg-neon/70" />
              <span className="ml-3 font-mono text-[#3a6080] text-xs">send_message.sh</span>
            </div>

            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 border-2 border-neon/50 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(0,255,157,0.05)" }}>
                  <svg className="w-8 h-8 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-neon mb-2">¡Mensaje enviado!</h3>
                <p className="font-mono text-sm text-[#3a6080]">Revisa tu correo — te enviamos una confirmación.</p>
                <button onClick={() => setSent(false)}
                  className="mt-6 font-mono text-xs text-[#3a6080] hover:text-neon transition-colors border border-[#1a3a52] hover:border-neon/40 px-4 py-2 rounded-sm">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-xs text-[#3a6080] block mb-2 tracking-widest">
                      // NOMBRE <span className="text-neon">*</span>
                    </label>
                    <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)}
                      className={inputClass("name")} placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-[#3a6080] block mb-2 tracking-widest">
                      // EMAIL <span className="text-neon">*</span>
                    </label>
                    <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
                      className={inputClass("email")} placeholder="tu@email.com" />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-xs text-[#3a6080] block mb-2 tracking-widest">
                    // ASUNTO <span className="text-neon">*</span>
                  </label>
                  <input type="text" value={form.subject} onChange={(e) => update("subject", e.target.value)}
                    className={inputClass("subject")} placeholder="Colaboración / Proyecto / Consulta" />
                </div>
                <div>
                  <label className="font-mono text-xs text-[#3a6080] block mb-2 tracking-widest">
                    // MENSAJE <span className="text-neon">*</span>
                  </label>
                  <textarea rows={5} value={form.message} onChange={(e) => update("message", e.target.value)}
                    className={inputClass("message") + " resize-none"} placeholder="Describe tu proyecto o consulta..." />
                </div>

                {apiError && (
                  <div className="flex items-center gap-2 text-red-400 font-mono text-xs bg-red-500/10 border border-red-500/30 px-4 py-3 rounded-sm">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {apiError}
                  </div>
                )}

                <button onClick={handleSend} disabled={loading}
                  className="w-full hex-border font-space font-bold text-xs py-4 transition-all tracking-widest uppercase flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: loading ? "rgba(0,255,157,0.5)" : "#00ff9d", color: "#050a0e", boxShadow: loading ? "none" : "0 0 20px rgba(0,255,157,0.2)" }}>
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Enviar Mensaje
                    </>
                  )}
                </button>
                <p className="font-mono text-xs text-[#3a6080] text-center">
                  Recibirás una confirmación en tu correo electrónico.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
