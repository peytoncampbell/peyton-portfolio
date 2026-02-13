const stats = [
  { number: "62,000+", label: "trades executed" },
  { number: "23", label: "ML strategies live" },
  { number: "510%", label: "paper ROI" },
  { number: "5+", label: "production systems" },
];

export default function Hero() {
  return (
    <section className="hero-grid hero-glow relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="animate-fade-in-up text-sm font-medium uppercase tracking-widest text-accent">
          Full Stack Developer &amp; AI Engineer
        </p>
        <h1 className="animate-fade-in-up delay-100 mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Peyton
          <span className="text-accent"> Campbell</span>
        </h1>
        <p className="animate-fade-in-up delay-200 mt-6 text-xl text-muted sm:text-2xl">
          I build AI systems that run in production — not slide decks.
        </p>
        <p className="animate-fade-in-up delay-300 mx-auto mt-4 max-w-2xl text-base text-muted/70 sm:text-lg">
          Trading bots, intelligent agents, ML pipelines, and full-stack apps.
          Currently shipping at OES while building autonomous systems on the side.
        </p>
        <div className="animate-fade-in-up delay-400 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            See My Work
          </a>
          <a
            href="https://btc-dashboard-amber.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-accent/50 px-8 py-3 text-base font-semibold text-accent transition-colors hover:bg-accent/10"
          >
            Live Dashboard →
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-card-border px-8 py-3 text-base font-semibold text-muted transition-colors hover:border-muted hover:text-foreground"
          >
            Get in Touch
          </a>
        </div>
        <div className="animate-fade-in-up delay-500 mt-16 flex flex-wrap items-center justify-center gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="font-mono text-sm font-semibold text-accent">
                {s.number}
              </span>
              <span className="ml-1.5 text-xs text-muted/60">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
