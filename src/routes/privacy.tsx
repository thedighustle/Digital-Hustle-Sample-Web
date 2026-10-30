import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | The Digital Hustle" },
      {
        name: "description",
        content:
          "How The Digital Hustle collects, uses and protects the information you share through our contact form and newsletter.",
      },
      { property: "og:title", content: "Privacy Policy — The Digital Hustle" },
      {
        property: "og:description",
        content: "What we collect, how we use it, and how to opt out at any time.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  { h: "What we collect", p: "Your name, email address and any details you voluntarily submit through our contact form or newsletter signup." },
  { h: "How we use it", p: "To respond to enquiries, deliver project work and — if you opt in — send occasional growth playbooks. We never sell your data." },
  { h: "Analytics", p: "We use privacy-respecting analytics to understand which pages are useful. This data is aggregated and not used to identify individuals." },
  { h: "Third-party tools", p: "Email, payment and scheduling providers may process your data on our behalf under their own privacy policies." },
  { h: "Your choices", p: "You can unsubscribe from emails at any time, or request access to and deletion of your data by contacting rikhi.ktik@gmail.com." },
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="What we collect, why we collect it, and the control you keep over it."
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
