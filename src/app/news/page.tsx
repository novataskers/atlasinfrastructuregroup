"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

interface NewsArticle {
  id: string;
  title: string;
  description: string;
  date: string;
  gradient: string;
  pattern?: string;
  accent: string;
}

const articles: NewsArticle[] = [
  {
    id: "aig-engine-3-launch",
    title: "Introducing AIG Engine 3: Our Most Advanced System Yet",
    description:
      "AIG Engine 3 brings a wide range of capabilities including multimedia generation, deep data analysis, automation, application development, and real-time insights — all in one unified architecture.",
    date: "2026-03-15",
    accent: "#d4af37",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #d4af37 100%)",
    pattern: "radial-gradient(circle at 75% 25%, rgba(212,175,55,0.35) 0%, transparent 55%)",
  },
  {
    id: "hiremindx-saas-launch",
    title: "HireMindX Transforms into a Full-Scale SaaS Platform",
    description:
      "What began as a personal outreach tool has evolved into a comprehensive SaaS ecosystem featuring voice-based outreach, intelligent automation, and scalable client acquisition workflows.",
    date: "2026-02-28",
    accent: "#c9a227",
    gradient: "linear-gradient(135deg, #0d1117 0%, #161b22 30%, #1a3a1a 70%, #2e8b57 100%)",
    pattern: "radial-gradient(circle at 30% 60%, rgba(46,139,87,0.2) 0%, transparent 55%)",
  },
  {
    id: "ixra-ai-announcement",
    title: "IxraAI: Redefining Creative AI Production at Scale",
    description:
      "Powered by the AIG Engine, IxraAI delivers intelligent decision-making and creative production capabilities that enable faster workflows and unprecedented output quality.",
    date: "2026-02-10",
    accent: "#b8942a",
    gradient: "linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 40%, #6c3baa 100%)",
    pattern: "radial-gradient(circle at 60% 40%, rgba(108,59,170,0.3) 0%, transparent 50%)",
  },
  {
    id: "aig-engine-2-capabilities",
    title: "AIG Engine 2: Exploring the Internet at Scale",
    description:
      "Our second-generation engine significantly expanded capabilities, enabling large-scale internet exploration, structured data gathering, and intelligent business contact identification.",
    date: "2025-11-20",
    accent: "#a68824",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 30%, #c9a227 100%)",
    pattern: "radial-gradient(circle at 80% 20%, rgba(201,162,39,0.3) 0%, transparent 50%)",
  },
  {
    id: "atlas-infrastructure-founding",
    title: "Atlas Infrastructure Group: Building Tomorrow\u0027s Foundation",
    description:
      "We established Atlas Infrastructure Group with a clear mission — to deliver advanced AI-driven digital solutions to real-world problems and shape the future of intelligent systems.",
    date: "2025-12-01",
    accent: "#d4af37",
    gradient: "linear-gradient(135deg, #0d0d0d 0%, #1c1c1c 40%, #8b4513 100%)",
    pattern: "radial-gradient(circle at 40% 70%, rgba(139,69,19,0.25) 0%, transparent 55%)",
  },
  {
    id: "global-expansion-nour",
    title: "Expanding Global Reach Across Academic & Innovation Platforms",
    description:
      "Through strategic positioning on the international stage, HireMindX gained exposure across academic and innovation platforms, accelerating the transformation into a scalable global ecosystem.",
    date: "2025-12-15",
    accent: "#c9a227",
    gradient: "linear-gradient(135deg, #0a1628 0%, #1a2744 40%, #1f4f8f 100%)",
    pattern: "radial-gradient(circle at 50% 50%, rgba(31,79,143,0.25) 0%, transparent 50%)",
  },
  {
    id: "aig-engine-1-origins",
    title: "Where It All Began: The First AIG Engine",
    description:
      "Built on a modest 4GB RAM computer, the first AIG Engine proved that powerful automation doesn\u0027t require powerful hardware — just powerful ideas. A look back at the experiment that started it all.",
    date: "2025-05-15",
    accent: "#a68824",
    gradient: "linear-gradient(135deg, #0f0f0f 0%, #1e1e1e 40%, #333 100%)",
    pattern: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 50%)",
  },
  {
    id: "voice-outreach-feature",
    title: "Voice-Based Outreach: The Next Frontier of Client Engagement",
    description:
      "HireMindX introduces voice-based outreach capabilities, enabling users to automate personalized voice messages alongside email campaigns for maximum engagement.",
    date: "2026-01-20",
    accent: "#d4af37",
    gradient: "linear-gradient(135deg, #1a0f0a 0%, #2e1a0f 40%, #c97b2a 100%)",
    pattern: "radial-gradient(circle at 25% 75%, rgba(201,123,42,0.3) 0%, transparent 50%)",
  },
  {
    id: "efficient-ai-architecture",
    title: "Efficient AI: Running Advanced Models Without Heavy Compute",
    description:
      "Our research into lightweight AI architectures demonstrates that frontier-level capabilities can be achieved without traditional heavy computational requirements, making advanced AI accessible to all.",
    date: "2025-10-05",
    accent: "#b8942a",
    gradient: "linear-gradient(135deg, #030f1a 0%, #0a1f2e 40%, #0e4d64 70%, #14a085 100%)",
    pattern: "radial-gradient(circle at 70% 40%, rgba(20,160,133,0.2) 0%, transparent 50%)",
  },
];

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ── Featured hero card for the latest article ── */
function FeaturedCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group cursor-pointer relative overflow-hidden rounded-sm border border-white/[0.06] bg-[#0a0a0a] hover:border-white/[0.12] transition-all duration-500">
      <div className="flex flex-col md:flex-row">
        {/* Left: banner image */}
        <div
          className="w-full md:w-[340px] h-[200px] md:h-auto shrink-0 relative overflow-hidden"
          style={{ background: article.gradient }}
        >
          {article.pattern && (
            <div className="absolute inset-0" style={{ background: article.pattern }} />
          )}
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/40 to-transparent md:from-transparent md:to-[#0a0a0a]/60" />
        </div>

        {/* Right: content */}
        <div className="flex-1 p-8 md:p-10">
          <time className="text-[#666] text-[11px] tracking-[0.15em] uppercase block mb-5">
            {formatDate(article.date)}
          </time>

          <h2 className="text-white text-2xl md:text-[1.75rem] font-bold leading-tight mb-4 group-hover:text-white/85 transition-colors">
            {article.title}
          </h2>
          <p className="text-[#888] text-sm md:text-[15px] leading-relaxed font-light max-w-2xl mb-8">
            {article.description}
          </p>

          <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300" style={{ color: article.accent }}>
            <span className="tracking-wide">Read article</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── Standard card with left banner image ── */
function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group cursor-pointer border-b border-white/[0.06] pb-7 hover:border-white/[0.12] transition-all duration-300">
      <div className="flex items-stretch gap-5">
        {/* Left: banner image */}
        <div
          className="hidden md:block shrink-0 w-[160px] rounded-sm overflow-hidden relative"
          style={{ background: article.gradient, minHeight: "100px" }}
        >
          {article.pattern && (
            <div className="absolute inset-0" style={{ background: article.pattern }} />
          )}
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        {/* Middle: content */}
        <div className="flex-1 min-w-0 py-1">
          <time className="text-[#555] text-[10px] tracking-[0.15em] uppercase block mb-2">
            {formatDate(article.date)}
          </time>

          <h3 className="text-white text-[1rem] md:text-lg font-semibold leading-snug mb-1.5 group-hover:text-white/80 transition-colors">
            {article.title}
          </h3>
          <p className="text-[#666] text-[13px] leading-relaxed font-light line-clamp-2">
            {article.description}
          </p>
        </div>

        {/* Right: arrow */}
        <div className="hidden md:flex items-center shrink-0 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/40">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </article>
  );
}

export default function NewsPage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero section — no category buttons */}
      <section className="pt-28 pb-2 px-6 lg:px-12">
        <div className="max-w-[1100px] mx-auto">
          <h1 className="text-white text-[clamp(24px,3.5vw,40px)] font-bold tracking-tight leading-[1.15] mb-2">
            News & Updates
          </h1>
          <p className="text-[#555] text-sm font-light max-w-lg leading-relaxed mb-8">
            Product releases, research milestones, and company announcements from Atlas Infrastructure Group.
          </p>

          {/* Thin gold accent line */}
          <div className="w-full h-px bg-gradient-to-r from-[#d4af37]/40 via-[#d4af37]/10 to-transparent" />
        </div>
      </section>

      {/* Featured article */}
      <section className="px-6 lg:px-12 pt-10 pb-6">
        <div className="max-w-[1100px] mx-auto">
          <FeaturedCard article={featured} />
        </div>
      </section>

      {/* Article list */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col gap-7 pt-4">
            {rest.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
