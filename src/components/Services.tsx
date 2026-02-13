const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "C#", "Java"],
  },
  {
    category: "AI / ML",
    items: ["scikit-learn", "XGBoost", "RandomForest", "Feature engineering", "Model pipelines", "Claude API"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "REST APIs", "PostgreSQL", "Web scraping", "Playwright"],
  },
  {
    category: "DevOps & Infra",
    items: ["Git", "Vercel", "Cloudflare", "Docker", "WireGuard", "Windows Server"],
  },
  {
    category: "Trading & Finance",
    items: ["Binance API", "OKX API", "Polymarket CLOB", "Web3/Polygon", "Technical analysis"],
  },
];

export default function Services() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Tech Stack
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          What I work with day-to-day.
        </p>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div
              key={s.category}
              className="rounded-xl border border-card-border bg-card p-6 transition-colors hover:border-accent/40"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {s.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-card-border bg-background px-3 py-1 text-sm text-muted"
                  >
                    {item}
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
