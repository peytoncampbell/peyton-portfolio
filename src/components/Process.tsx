const timeline = [
  {
    year: "2026",
    title: "AI Trading Systems & Consulting",
    desc: "Built autonomous BTC trading bot (62K+ trades, 23 ML strategies), Polymarket trading bot, AI personal assistant, and launched Campbell Solutions consulting.",
  },
  {
    year: "2025",
    title: "Full Stack Developer — OES",
    desc: "Building and maintaining educational technology platforms. Full stack development with modern web technologies.",
  },
  {
    year: "2024",
    title: "AI & Machine Learning — Fanshawe College",
    desc: "Completed AI/ML certification covering supervised/unsupervised learning, neural networks, NLP, and computer vision.",
  },
  {
    year: "2023",
    title: "Computer Science — Western University",
    desc: "CS degree with focus on algorithms, data structures, and software engineering. Varsity basketball player.",
  },
];

export default function Process() {
  return (
    <section id="timeline" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Timeline
        </h2>
        <div className="mt-16 space-y-8">
          {timeline.map((t) => (
            <div key={t.year} className="flex gap-6">
              <span className="shrink-0 font-mono text-sm font-semibold text-accent">
                {t.year}
              </span>
              <div className="border-l border-card-border pl-6">
                <h3 className="text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
