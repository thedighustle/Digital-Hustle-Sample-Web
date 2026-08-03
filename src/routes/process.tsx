import { createFileRoute } from "@tanstack/react-router";
import { steps } from "@/lib/site-content";
import { CtaBanner, PageHero } from "@/components/site/Sections";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — From Idea to Scalable Digital Asset | The Digital Hustle" },
      {
        name: "description",
        content:
          "Our 5-step system: identify, structure, design, automate and scale — the exact process we use to build digital products and websites that grow.",
      },
      { property: "og:title", content: "Our Process — The Digital Hustle 5-Step System" },
      {
        property: "og:description",
        content:
          "Identify, structure, design, automate, scale. A clear path from raw expertise to a revenue-generating platform.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessPage,
});

const detail: Record<string, { duration: string; items: string[] }> = {
  Identify: {
    duration: "Week 1",
    items: ["Discovery call and goal setting", "Audience and offer research", "Positioning statement"],
  },
  Structure: {
    duration: "Week 1–2",
    items: ["Sitemap or curriculum outline", "User journey mapping", "Copy and content plan"],
  },
  Design: {
    duration: "Week 2–3",
    items: ["Brand-aligned visual system", "Responsive page or lesson design", "Review and revision rounds"],
  },
  Automate: {
    duration: "Week 3–4",
    items: ["Payments and checkout", "Email and CRM workflows", "Booking, forms and analytics"],
  },
  Scale: {
    duration: "Ongoing",
    items: ["Conversion tracking review", "Content and offer expansion", "Performance optimization"],
  },
};

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our 5-Step System"
        title="From idea to scalable digital asset."
        subtitle="No guesswork and no endless revisions. A defined path with clear deliverables at every stage, typically completed in four weeks."
      />

      <section className="mx-auto max-w-5xl px-5 py-20">
        <ol className="space-y-6">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-3xl border border-border bg-card p-8 shadow-card"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-accent text-primary-foreground">
                  <s.icon className="h-6 w-6" strokeWidth={2.1} />
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    Step 0{i + 1} · {detail[s.title]?.duration}
                  </span>
                  <h2 className="text-2xl font-extrabold tracking-tight text-navy">{s.title}</h2>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-3">
                {detail[s.title]?.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-2xl border border-border bg-secondary/50 px-4 py-3 text-sm font-medium text-navy-soft"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <CtaBanner title="Ready to start at step one?" body="Book a strategy call and we'll identify your highest-value asset together." />
    </>
  );
}
