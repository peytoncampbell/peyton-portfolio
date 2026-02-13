export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "62K+", label: "Trades Executed" },
            { value: "510%", label: "Paper ROI" },
            { value: "23", label: "ML Strategies Live" },
            { value: "6+", label: "Production Systems" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center rounded-xl border border-card-border bg-card p-6"
            >
              <span className="font-mono text-3xl font-bold text-accent">
                {s.value}
              </span>
              <span className="mt-2 text-xs text-muted">{s.label}</span>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            About Me
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            Full Stack Developer at OES in London, ON. Computer Science
            degree from Western University, AI &amp; Machine Learning
            certification from Fanshawe College.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Former varsity basketball player — same intensity goes into
            every system I build. I don&apos;t do half-measures.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Outside of work, I build autonomous trading systems, AI agents,
            and tools that solve real problems. Currently running a 24/7
            BTC trading bot with 23 ML strategies and building toward
            full-time tech consulting.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/peytoncampbell"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-card-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/peytoncampbell"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-card-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
