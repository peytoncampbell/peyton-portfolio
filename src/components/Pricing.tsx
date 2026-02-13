const tiers = [
  {
    name: "Automation Audit",
    price: "Free",
    desc: "60-minute deep dive into your workflows. We identify the highest-ROI automation opportunities.",
    cta: "Book a Call",
    highlighted: false,
  },
  {
    name: "Custom Build",
    price: "From $2,500",
    desc: "End-to-end development of a custom AI system. Includes discovery, build, deployment, and 30 days of support.",
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Retainer",
    price: "From $1,500/mo",
    desc: "Ongoing optimization, monitoring, and new feature development. Your AI systems stay sharp.",
    cta: "Learn More",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Pricing</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Transparent pricing. No surprises.
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col rounded-xl border bg-card p-6 ${
                t.highlighted
                  ? "border-accent"
                  : "border-card-border"
              }`}
            >
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="mt-2 font-mono text-2xl font-bold text-accent">
                {t.price}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {t.desc}
              </p>
              <a
                href="#contact"
                className={`mt-6 block rounded-lg px-6 py-2.5 text-center text-sm font-semibold transition-colors ${
                  t.highlighted
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "border border-card-border text-muted hover:border-muted hover:text-foreground"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
