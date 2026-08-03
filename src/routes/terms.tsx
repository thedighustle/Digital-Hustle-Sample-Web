import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | The Digital Hustle" },
      {
        name: "description",
        content:
          "The terms governing project scope, payments, revisions, ownership and liability for The Digital Hustle services.",
      },
      { property: "og:title", content: "Terms of Service — The Digital Hustle" },
      {
        property: "og:description",
        content: "Project scope, payments, revisions, ownership and liability terms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

const sections = [
  { h: "Services", p: "We provide website design, digital product development and related automation setup as described in each individual project proposal. The proposal, once accepted, defines the scope of work." },
  { h: "Payments", p: "Projects begin after the initial deposit is received. Remaining balances are due at the milestones set out in your proposal. Late payments may pause active work." },
  { h: "Revisions", p: "Each project includes the number of revision rounds stated in your proposal. Additional rounds or changes outside the agreed scope are quoted separately." },
  { h: "Ownership", p: "On final payment, you own the delivered designs, content and site files. Third-party tools and subscriptions remain governed by their own providers' terms." },
  { h: "Client responsibilities", p: "You agree to supply content, brand assets and feedback in a timely manner. Extended delays may shift delivery timelines." },
  { h: "Liability", p: "We are not liable for lost revenue, outages caused by third-party platforms, or results dependent on your marketing and audience activity." },
];

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Plain-language terms covering how we work together on every project."
      />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <div className="space-y-8">
          {sections.map((s) => (
            <article key={s.h}>
              <h2 className="text-xl font-extrabold tracking-tight text-navy">{s.h}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
