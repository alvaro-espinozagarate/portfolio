export default function Footer() {
  return (
    <footer className="border-t border-[#1a3a52]/50 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-[#3a6080]">
          <span className="text-neon">©</span> 2026 Alvaro Espinoza Garate · {" "}
          <span className="text-neon">(⌐■_■)</span>
        </div>
        <div className="font-mono text-xs text-[#3a6080]">
          <span className="text-neon">~/</span>portfolio{" "}
          <span className="text-[#00e5ff]">$</span>{" "}
          <span className="animate-blink text-neon">▊</span>
        </div>
      </div>
    </footer>
  );
}
