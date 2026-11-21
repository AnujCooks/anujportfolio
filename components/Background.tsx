/** Fixed ambient background: subtle grid, dual radial glows, noise + vignette. */
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* base gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,#0d1120_0%,#07080c_55%)]" />
      {/* grid */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(75%_65%_at_50%_35%,#000_30%,transparent_100%)]" />
      {/* cyan glow — top left */}
      <div className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-neon/10 blur-[130px] animate-pulse-soft" />
      {/* violet glow — bottom right */}
      <div className="absolute -bottom-52 -right-40 h-[38rem] w-[38rem] rounded-full bg-grape/10 blur-[150px] animate-pulse-soft [animation-delay:1.6s]" />
      {/* faint blue core behind hero */}
      <div className="absolute top-[8%] left-1/2 h-[26rem] w-[52rem] -translate-x-1/2 rounded-full bg-ice/[0.05] blur-[120px]" />
      {/* noise */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
        }}
      />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_50%,transparent_60%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}
