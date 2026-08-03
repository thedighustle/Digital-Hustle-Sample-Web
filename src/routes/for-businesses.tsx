import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import businessImg from "@/assets/business.jpg";
import solutionSingle from "@/assets/solution-single.jpg";
import { CtaBanner, PageHero } from "@/components/site/Sections";

export const Route = createFileRoute("/for-businesses")({
  head: () => ({
    meta: [
      { title: "For Service Businesses — High-Converting Websites | The Digital Hustle" },
      {
        name: "description",
        content:
          "Sleek single-page and multi-page websites for local service businesses, with booking, lead capture and mobile-first design that converts.",
      },
      { property: "og:title", content: "For Businesses — Expand Your Business Online" },
      {
        property: "og:description",
        content:
          "Move past flyers and business cards with a website that attracts, informs and books clients automatically.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BusinessesPage,
});

const capabilities = [
  { title: "Custom Design", body: "A site that looks like your best work — not a recycled template every competitor also uses." },
  { title: "Mobile-Optimized", body: "Most local searches happen on a phone. Your site loads fast and converts on small screens first." },
  { title: "Lead Generation", body: "Quote forms, click-to-call and enquiry routing that lands straight in your inbox." },
  { title: "Booking Integration", body: "Calendar-connected scheduling so clients book themselves without the back-and-forth." },
];

const industries = [
  "Trades & home services",
  "Salons, barbers & studios",
  "Health & wellness practices",
  "Cleaning & maintenance",
  "Photography & events",
  "Consultants & coaches",
];

function BusinessesPage() {
  return (
    <>
      <PageHero
        eyebrow="For Service-Based Businesses"
        title="Expand your business online with a site that books clients."
        subtitle="Move beyond traditional flyers and business cards. We build sleek, high-converting websites that attract, inform and convert clients automatically."
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy">
              Your next customer is searching right now.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              If they can't find you — or land on a page that looks dated — they call the next
              business on the list. A professional site makes you the obvious choice before you ever
              speak.
            </p>
            <ul className="mt-8 space-y-3">
              {["Show up credible in local search", "Answer questions before the first call", "Capture leads 24/7, even when you're on the job"].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm font-medium text-navy-soft">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={businessImg}
            alt="Service business owner showing a modern business website on a tablet"
            loading="lazy"
            width={1024}
            height={768}
            className="w-full rounded-3xl border border-border object-cover shadow-card"
          />
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy">What's included</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {capabilities.map((c) => (
              <article key={c.title} className="rounded-3xl border border-border bg-card p-7 shadow-card">
                <h3 className="text-lg font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <img
            src={solutionSingle}
            alt="Single-page business website mockup on a laptop"
            loading="lazy"
            width={1024}
            height={768}
            className="w-full rounded-3xl border border-border object-cover shadow-card"
          />
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy">Industries we serve</h2>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {industries.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-navy-soft"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title="Ready to get found online?" body="Let's build the website that turns local searches into booked jobs." />
    </>
  );
}
