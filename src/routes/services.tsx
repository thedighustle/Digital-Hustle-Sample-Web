import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { offerings, audiences } from "@/lib/site-content";
import { CtaBanner, PageHero } from "@/components/site/Sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Digital Products & Websites | The Digital Hustle" },
      {
        name: "description",
        content:
          "Single-page and multi-page websites, custom online courses, membership hubs and automated payment systems built for creators and service businesses.",
      },
      { property: "og:title", content: "Services — The Digital Hustle" },
      {
        property: "og:description",
        content:
          "Websites, digital courses and membership ecosystems engineered for conversion and recurring revenue.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const deliverables = [
  "Conversion-focused copy structure",
  "Responsive design across every device",
  "Payment & checkout integration",
  "Booking and lead capture forms",
  "Analytics and tracking setup",
  "Handover training and documentation",
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Tailored Digital Solutions"
        title="Services built to turn attention into revenue."
        subtitle="Choose the platform that fits where you are today — then scale it as your audience and client list grow."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {offerings.map((o) => (
            <article
              key={o.title}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card"
            >
              <img
                src={o.image}
                alt={o.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <o.icon className="h-6 w-6" strokeWidth={2.1} />
                </span>
                <span className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  {o.tag}
                </span>
                <h2 className="mt-2 text-xl font-extrabold tracking-tight text-navy">{o.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy">
              Every project includes
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              No matter which package you pick, the fundamentals of a platform that actually
              converts are always part of the build.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {deliverables.map((d) => (
              <li
                key={d}
                className="flex items-start gap-2.5 rounded-2xl border border-border bg-card p-4 text-sm font-medium text-navy-soft"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-navy">Who we build for</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {audiences.map((a) => (
            <Link
              key={a.header}
              to={a.to}
              className="group rounded-3xl border border-border bg-card p-8 shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-accent">
                {a.eyebrow}
              </span>
              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-navy">{a.header}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-deep transition-transform group-hover:translate-x-1">
                {a.cta} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner title="Not sure which package fits?" body="Book a call and we'll map the fastest path to revenue for your situation." />
    </>
  );
}
