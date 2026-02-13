const stats = [
  { number: "50,000+", label: "Trades Executed" },
  { number: "99.9%", label: "Uptime" },
  { number: "15+", label: "Active ML Strategies" },
];

export default function SocialProof() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Built for Results
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Currently onboarding first consulting clients. Here&apos;s what the
          systems deliver:
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-card-border bg-card p-8 text-center"
            >
              <p className="font-mono text-4xl font-bold text-accent">
                {s.number}
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
