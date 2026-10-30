import { createFileRoute } from "@tanstack/react-router";
import { Mail, Clock, MessageSquare } from "lucide-react";
import { Newsletter } from "@/components/site/Newsletter";
import { PageHero } from "@/components/site/Sections";
import { BookingWidget } from "@/components/site/BookingWidget";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Schedule A Strategy Call | The Digital Hustle" },
      {
        name: "description",
        content:
          "Tell us about your audience or business and book a free strategy call to plan your digital product or high-converting website.",
      },
      { property: "og:title", content: "Contact The Digital Hustle" },
      {
        property: "og:description",
        content: "Book a strategy call and let's build your digital infrastructure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build your digital infrastructure."
        subtitle="Pick a live slot from our calendar and we'll come to the call with a plan, not a pitch."
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <BookingWidget />


          <div className="space-y-5">
            {[
              { icon: Mail, title: "Email us", body: "rikhi.ktik@gmail.com" },
              { icon: Clock, title: "Response time", body: "Within one business day" },
              { icon: MessageSquare, title: "Call length", body: "30 minutes, no obligation" },
            ].map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-card"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <c.icon className="h-5 w-5" strokeWidth={2.1} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                </div>
              </div>
            ))}
            <div className="rounded-3xl bg-gradient-navy p-7 shadow-glow">
              <h3 className="text-lg font-bold text-navy-foreground">Prefer to explore first?</h3>
              <p className="mt-2 text-sm text-navy-foreground/70">
                Browse our services and process pages to see exactly how we work before booking.
              </p>
            </div>
          </div>
        </div>

        <Newsletter />
      </section>
    </>
  );
}
