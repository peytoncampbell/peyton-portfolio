const posts = [
  {
    title: "Building a 24/7 Trading Bot That Actually Works",
    excerpt:
      "Lessons from 50,000+ trades: why most bots fail and how ML-powered strategy selection changes the game.",
    tag: "AI/ML",
  },
  {
    title: "Why Your Business Needs AI Automation Yesterday",
    excerpt:
      "The ROI of replacing manual workflows with intelligent systems. Real numbers from real projects.",
    tag: "Automation",
  },
  {
    title: "From Spreadsheets to AI: A Contractor's Guide",
    excerpt:
      "How small businesses can start automating without enterprise budgets.",
    tag: "Strategy",
  },
];

export default function Insights() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Insights
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Thoughts on AI, automation, and building systems that work.
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-xl border border-card-border bg-card p-6"
            >
              <span className="w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {p.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {p.excerpt}
              </p>
              <a
                href="#contact"
                className="mt-6 text-sm font-medium text-accent hover:underline"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
