import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { serviceDetails, type ServiceDetail } from "@/lib/service-details";
import { PageHero } from "@/components/site/Sections";

export const Route = createFileRoute("/service/$slug")({
  loader: ({ params }): { service: ServiceDetail } => {
    const service = serviceDetails[params.slug];
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params }) => {
    const service = serviceDetails[params.slug];
    if (!service) {
      return {
        meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }],
      };
    }
    return {
      meta: [
        { title: `${service.title} — ${service.tagline} | The Digital Hustle` },
        { name: "description", content: service.intro.slice(0, 155) },
        { property: "og:title", content: `${service.title} | The Digital Hustle` },
        { property: "og:description", content: service.tagline },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetailPage,
});

function ServiceNotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-28 text-center">
      <h1 className="text-3xl font-extrabold tracking-tight text-navy">Service not found</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        That service doesn't exist. Browse everything we offer instead.
      </p>
      <Link
        to="/services"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground"
      >
        View all services <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();

  return (
    <>
      <PageHero eyebrow={service.tag} title={service.title} subtitle={service.tagline} />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-bold text-cyan-deep"
        >
          <ArrowLeft className="h-4 w-4" /> All services
        </Link>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-base leading-relaxed text-muted-foreground">{service.intro}</p>
            <p className="mt-6 text-sm font-semibold text-navy">
              Typical timeline: <span className="text-cyan-deep">{service.timeline}</span>
            </p>
            <h2 className="mt-10 text-2xl font-extrabold tracking-tight text-navy">Best for</h2>
            <ul className="mt-5 space-y-3">
              {service.bestFor.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm font-medium text-navy-soft">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={service.image}
            alt={service.alt}
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
            {service.includes.map((i) => (
              <article
                key={i.title}
                className="rounded-3xl border border-border bg-card p-7 shadow-card"
              >
                <h3 className="text-lg font-bold text-navy">{i.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <ServiceForm serviceTitle={service.title} />
          <div className="space-y-5">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy">Common questions</h2>
            {service.faqs.map((f) => (
              <div key={f.q} className="rounded-3xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-base font-bold text-navy">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
            <div className="rounded-3xl bg-gradient-navy p-7 shadow-glow">
              <h3 className="text-lg font-bold text-navy-foreground">Still comparing options?</h3>
              <p className="mt-2 text-sm text-navy-foreground/70">
                Send the form with your questions — we'll tell you honestly if another package fits
                better.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceForm({ serviceTitle }: { serviceTitle: string }) {
  const [sent, setSent] = useState(false);

  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10">
      {sent ? (
        <div className="py-10 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">Request received.</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            We'll reply within one business day with next steps for your {serviceTitle.toLowerCase()}{" "}
            project.
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
            Enquire about {serviceTitle}
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
            Business or brand
            <input
              name="brand"
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal text-navy outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <label className="block text-sm font-semibold text-navy">
            Budget range
            <select
              name="budget"
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal text-navy outline-none focus:ring-2 focus:ring-ring"
            >
              {["Under $1,000", "$1,000 – $3,000", "$3,000 – $7,000", "$7,000+", "Not sure yet"].map(
                (b) => (
                  <option key={b}>{b}</option>
                ),
              )}
            </select>
          </label>
          <label className="block text-sm font-semibold text-navy">
            Project details
            <textarea
              name="message"
              rows={5}
              placeholder="What you're building, your timeline, anything you already have…"
              className="mt-2 w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal text-navy outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
            />
          </label>
          <input type="hidden" name="service" value={serviceTitle} />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Send Enquiry <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
}
