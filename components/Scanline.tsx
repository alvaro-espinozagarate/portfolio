export default function Scanline() {
  return (
    <div
      className="pointer-events-none fixed top-0 left-0 right-0 h-0.5 z-[9998] animate-scanline"
      style={{
        background: "linear-gradient(90deg, transparent, rgba(0,255,157,0.15), transparent)",
      }}
    />
  );
}
