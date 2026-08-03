import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import creatorsImg from "@/assets/creators.jpg";
import solutionHub from "@/assets/solution-hub.jpg";
import { CtaBanner, PageHero } from "@/components/site/Sections";

export const Route = createFileRoute("/for-creators")({
  head: () => ({
    meta: [
      { title: "For Micro-Creators — Monetize Your Expertise | The Digital Hustle" },
      {
        name: "description",
        content:
          "For creators with 10K–80K followers: turn your knowledge into structured online courses, membership hubs and recurring digital income.",
      },
      { property: "og:title", content: "For Creators — Monetize Your Expertise Directly" },
      {
        property: "og:description",
        content:
          "Course architecture, payment automation and subscriber hubs for micro-creators ready to stop relying on brand deals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CreatorsPage,
});

const outcomes = [
  {
    title: "Custom Course Architecture",
    body: "We turn scattered knowledge into a structured curriculum with modules, lessons and clear student outcomes.",
  },
  {
    title: "Payment & Automation Setup",
    body: "Checkout, receipts, access control and email sequences run without you touching a thing.",
  },
  {
    title: "Subscriber Loyalty Hubs",
    body: "Gated communities and membership tiers that turn one-time buyers into recurring revenue.",
  },
  {
    title: "Launch Playbook",
    body: "A content and offer sequence built for your platform so your first launch doesn't fall flat.",
  },
];

const objections = [
  { q: "My audience is small.", a: "10K engaged followers converting at 1% on a $150 product beats a viral post with no offer." },
  { q: "I'm not technical.", a: "We build, connect and test the entire stack. You record and publish — that's it." },
  { q: "I have no course yet.", a: "We start from your existing content and DMs to find the offer people already want." },
];

function CreatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Micro-Creators (10K–80K Followers)"
        title="Monetize your expertise directly — not through brand deals."
        subtitle="We package your knowledge into structured online courses, membership hubs and skill-based learning programs you own outright."
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={creatorsImg}
            alt="Creator recording an online course at a desk with a course dashboard on screen"
            loading="lazy"
            width={1024}
            height={768}
            className="w-full rounded-3xl border border-border object-cover shadow-card"
          />
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy">
              Ad revenue is volatile. Digital assets aren't.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Sponsorships disappear when budgets shift and algorithms change overnight. A digital
              product keeps selling while you sleep, compounds with every new follower and belongs
              to you — audience list included.
            </p>
            <ul className="mt-8 space-y-3">
              {["You own the customer relationship", "Revenue is predictable and recurring", "Every piece of content becomes a funnel"].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm font-medium text-navy-soft">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy">What we build for you</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {outcomes.map((o) => (
              <article key={o.title} className="rounded-3xl border border-border bg-card p-7 shadow-card">
                <h3 className="text-lg font-bold text-navy">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy">
              What creators usually ask
            </h2>
            <dl className="mt-8 space-y-6">
              {objections.map((o) => (
                <div key={o.q}>
                  <dt className="text-base font-bold text-navy">{o.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.a}</dd>
                </div>
              ))}
            </dl>
          </div>
          <img
            src={solutionHub}
            alt="Online course membership hub shown on desktop and mobile"
            loading="lazy"
            width={1024}
            height={768}
            className="w-full rounded-3xl border border-border object-cover shadow-card"
          />
        </div>
      </section>

      <CtaBanner title="Ready to package your knowledge?" body="Let's map your first digital product and get it selling." />
    </>
  );
}
