const cases = [
  {
    title: "AI-Powered Job Application System",
    desc: "Fully autonomous pipeline that navigates ATS platforms, tailors resumes with AI, and submits applications at scale with human-level accuracy.",
    results: "Navigates Workday, Greenhouse, Lever, Avature, Taleo, and iCIMS autonomously.",
    metrics: ["6 ATS platforms", "AI resume tailoring", "Fully autonomous"],
  },
  {
    title: "BTC Trading Bot",
    desc: "Running 24/7 with real money. Top strategies achieve 3.0+ profit-to-drawdown ratios across RandomForest and XGBoost models with 15+ concurrent strategies.",
    results: null,
    metrics: ["50,000+ trades", "15+ ML strategies", "P/DD 3.0+ on top models", "24/7 autonomous"],
  },
  {
    title: "AI Personal Assistant",
    desc: "Multi-platform agent with persistent memory, cron scheduling, proactive monitoring, and full browser automation for complex tasks.",
    results: null,
    metrics: ["Telegram + Discord + Signal", "Persistent memory", "Cron scheduling", "Browser automation"],
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          What We&apos;ve Built
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Real systems solving real problems.
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-xl border border-card-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {c.desc}
              </p>
              {c.results && (
                <p className="mt-3 text-xs leading-relaxed text-accent/80 italic">
                  {c.results}
                </p>
              )}
              <div className="mt-6 flex flex-wrap gap-2">
                {c.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {m}
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
