const PARTICLES = [
  { style: "top:15%;left:10%", dur: "7s", delay: "0s", color: "neon", size: "w-1 h-1", opacity: "opacity-40" },
  { style: "top:40%;left:85%", dur: "9s", delay: "2s", color: "cyan", size: "w-0.5 h-0.5", opacity: "opacity-30" },
  { style: "top:70%;left:5%", dur: "11s", delay: "1s", color: "neon", size: "w-1.5 h-1.5", opacity: "opacity-20" },
  { style: "top:25%;left:60%", dur: "8s", delay: "3s", color: "cyan", size: "w-0.5 h-0.5", opacity: "opacity-50" },
  { style: "top:80%;left:75%", dur: "10s", delay: "0.5s", color: "neon", size: "w-1 h-1", opacity: "opacity-25" },
  { style: "top:55%;left:30%", dur: "6s", delay: "4s", color: "cyan", size: "w-0.5 h-0.5", opacity: "opacity-40" },
];

export default function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className={`absolute ${p.size} rounded-full ${p.opacity} animate-float`}
          style={{
            ...(Object.fromEntries(p.style.split(";").map((s) => s.split(":").map((v) => v.trim())))),
            background: p.color === "neon" ? "#00ff9d" : "#00e5ff",
            animationDuration: p.dur,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
