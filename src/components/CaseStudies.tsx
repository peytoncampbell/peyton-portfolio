const projects = [
  {
    title: "BTC Trading Bot",
    desc: "Autonomous crypto trading system running 24/7 with 23 ML-powered strategies. Real-time regime detection via RandomForest/XGBoost, automatic position sizing, and a live performance dashboard with Cloudflare tunnel.",
    tech: ["Python", "scikit-learn", "XGBoost", "Binance API", "OKX API"],
    metrics: ["62,000+ trades", "510% paper ROI", "23 strategies", "24/7 uptime"],
    link: "https://btc-dashboard-amber.vercel.app",
    linkText: "View Live Dashboard →",
  },
  {
    title: "Polymarket Trading Bot",
    desc: "Prediction market bot that scans for mispriced contracts using AI-powered research. Automated order execution with risk management, portfolio tracking, and arbitrage detection across markets.",
    tech: ["Python", "Polymarket CLOB API", "Polygon", "Web3"],
    metrics: ["Arbitrage detection", "AI research engine", "Auto-execution"],
    link: null,
    linkText: null,
  },
  {
    title: "AI Personal Assistant (Jarvis)",
    desc: "Multi-platform AI agent with persistent memory, cron scheduling, autonomous job applications across 6 ATS platforms, browser automation, and proactive monitoring. Runs 24/7 on Telegram, Discord, and Signal.",
    tech: ["TypeScript", "Claude API", "Playwright", "Node.js"],
    metrics: ["3 platforms", "6 ATS integrations", "Persistent memory", "Browser automation"],
    link: null,
    linkText: null,
  },
  {
    title: "Real-Time Trading Dashboard",
    desc: "Live performance dashboard for the BTC bot. Pulls real-time data through a Cloudflare tunnel, displays P&L, strategy breakdowns, regime detection, and trade history. Deployed on Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Cloudflare Tunnel", "Vercel"],
    metrics: ["Real-time data", "Auto-refresh", "Mobile responsive"],
    link: "https://btc-dashboard-amber.vercel.app",
    linkText: "View Live →",
  },
  {
    title: "Campbell Solutions",
    desc: "Consulting website for AI automation services. Designed, built, and deployed in a single evening. Features animated sections, contact forms, and SEO optimization.",
    tech: ["Next.js 16", "Tailwind CSS", "Vercel"],
    metrics: ["AI-built", "Sub-1s load", "Mobile-first"],
    link: "https://campbell-solutions.vercel.app",
    linkText: "Visit Site →",
  },
  {
    title: "Pokemon Resale P&L Tracker",
    desc: "Price tracking and profit calculator for card resellers. Scans market prices, calculates margins after platform fees, and generates tax-ready reports for Canadian sellers.",
    tech: ["Python", "Web scraping", "Data analysis"],
    metrics: ["Market scanning", "Fee calculation", "Tax reports"],
    link: null,
    linkText: null,
  },
];

export default function CaseStudies() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Projects
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Real systems running in production — not tutorials.
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-xl border border-card-border bg-card p-6 transition-colors hover:border-accent/40"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {p.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-card-border/50 px-2 py-0.5 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {m}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  {p.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
