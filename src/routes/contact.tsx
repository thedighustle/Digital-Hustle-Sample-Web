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

const goals = [
  "Digital course or membership hub",
  "Single-page website",
  "Multi-page website",
  "Not sure yet — need guidance",
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build your digital infrastructure."
        subtitle="Share a few details and we'll come to the call with a plan, not a pitch. Most replies go out within one business day."
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10">
            {sent ? (
              <div className="py-10 text-center">
                <h2 className="text-2xl font-extrabold tracking-tight text-navy">
                  Request received.
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  We'll be in touch within one business day to schedule your strategy call.
                </p>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <h2 className="text-2xl font-extrabold tracking-tight text-navy">
                  Schedule a strategy call
                </h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-navy">
                    Name
                    <input
                      required
                      name="name"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal text-navy outline-none focus:ring-2 focus:ring-ring"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-navy">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal text-navy outline-none focus:ring-2 focus:ring-ring"
                    />
                  </label>
                </div>
                <label className="block text-sm font-semibold text-navy">
                  What are you building?
                  <select
                    name="goal"
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal text-navy outline-none focus:ring-2 focus:ring-ring"
                  >
                    {goals.map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-semibold text-navy">
                  Tell us more
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Your audience size, current website, timeline…"
                    className="mt-2 w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal text-navy outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Schedule A Strategy Call <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-5">
            {[
              { icon: Mail, title: "Email us", body: "hello@thedigitalhustle.co" },
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
