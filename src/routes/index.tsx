import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import heroDevices from "@/assets/hero-devices.jpg";
import { steps, offerings, audiences } from "@/lib/site-content";
import { CtaBanner } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Digital Hustle — Turn Expertise Into Digital Assets" },
      {
        name: "description",
        content:
          "We help micro-creators monetize their knowledge with courses and membership hubs, and build high-converting websites for local service businesses.",
      },
      { property: "og:title", content: "The Digital Hustle — Fueling Your Online Growth" },
      {
        property: "og:description",
        content:
          "Scalable digital products for creators and high-converting websites for service businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-gradient-accent opacity-15 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 lg:pb-24 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Digital growth studio
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Fueling Your Online Growth.
              <span className="mt-3 block text-gradient-accent">
                Turn Your Expertise Into Scalable Digital Assets.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We help micro-creators turn their knowledge into monetizable digital products, and
              local service businesses build high-converting websites that expand their reach
              online.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Get Started Today <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-secondary"
              >
                View Solutions
              </Link>
            </div>
          </div>
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-6 rounded-[2rem] bg-gradient-accent opacity-25 blur-3xl"
            />
            <img
              src={heroDevices}
              alt="Desktop showing a custom digital course dashboard beside a mobile business website"
              width={1280}
              height={960}
              className="relative w-full rounded-[1.75rem] border border-border bg-card shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
      <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
        Built for Creators &amp; Growing Businesses
      </h2>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {audiences.map((a) => (
          <article
            key={a.header}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
          >
            <img
              src={a.image}
              alt={a.alt}
              loading="lazy"
              width={1024}
              height={768}
              className="h-52 w-full object-cover sm:h-60"
            />
            <div className="flex flex-1 flex-col p-8">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-accent">
                {a.eyebrow}
              </span>
              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-navy">{a.header}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              <ul className="mt-6 space-y-2.5">
                {a.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm font-medium text-navy-soft">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={a.to}
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-deep transition-transform group-hover:translate-x-1"
              >
                {a.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-gradient-accent opacity-25 blur-[110px]"
      />
      <div className="relative mx-auto max-w-7xl px-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">Our 5-Step System</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-navy-foreground sm:text-4xl">
          From Idea to Scalable Digital Asset
        </h2>
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-accent text-primary-foreground">
                  <s.icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <span className="text-sm font-bold text-navy-foreground/35">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/65">{s.body}</p>
            </li>
          ))}
        </ol>
        <Link
          to="/process"
          className="mt-12 inline-flex items-center gap-2 text-sm font-bold text-cyan"
        >
          Explore our full process <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
      <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
        Tailored Digital Solutions
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {offerings.map((o) => (
          <article
            key={o.title}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
          >
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-accent opacity-0 transition-opacity group-hover:opacity-100"
            />
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
              <h3 className="mt-2 text-xl font-extrabold tracking-tight text-navy">{o.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
            </div>
          </article>
        ))}
      </div>
      <Link
        to="/services"
        className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-cyan-deep"
      >
        See all services <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <Audience />
      <Process />
      <Solutions />
      <CtaBanner />
    </>
  );
}
