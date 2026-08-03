import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CircuitBoard,
  Menu,
  X,
  Compass,
  LayoutGrid,
  PenTool,
  Zap,
  TrendingUp,
  FileText,
  Layers,
  GraduationCap,
  Check,
} from "lucide-react";
import heroDevices from "@/assets/hero-devices.jpg";

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

const navLinks = [
  { label: "Services", href: "#solutions" },
  { label: "For Creators", href: "#audience" },
  { label: "For Businesses", href: "#audience" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const steps = [
  {
    icon: Compass,
    title: "Identify",
    body: "Pinpoint your most valuable skill, knowledge base, or core service offering.",
  },
  {
    icon: LayoutGrid,
    title: "Structure",
    body: "Map out a clear, results-driven system or user experience.",
  },
  {
    icon: PenTool,
    title: "Design",
    body: "Create a seamless, professional digital platform or website tailored to your brand.",
  },
  {
    icon: Zap,
    title: "Automate",
    body: "Implement payment processors, tech integrations, and automated workflows.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    body: "Optimize for long-term growth and sustainable revenue streams.",
  },
];

const offerings = [
  {
    icon: FileText,
    tag: "Option A",
    title: "Single-Page Websites",
    body: "Stop overcomplicating. Fast-loading, high-impact landing pages designed for high conversion.",
  },
  {
    icon: Layers,
    tag: "Option B",
    title: "Multi-Page Websites",
    body: "Comprehensive web platforms built for established local service providers expanding their online presence.",
  },
  {
    icon: GraduationCap,
    tag: "Option C",
    title: "Custom Digital Products & Hubs",
    body: "Complete digital ecosystems including video courses, gated communities, and recurring subscription models.",
  },
];

function Logo() {
  return (
    <a href="#top" className="flex min-w-0 items-center gap-2.5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-accent text-primary-foreground">
        <CircuitBoard className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <span className="truncate text-base font-extrabold tracking-tight text-navy">
        The Digital Hustle
      </span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:flex lg:justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-accent px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            Launch Your Platform
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border text-navy lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-5 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-navy"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center rounded-xl bg-gradient-accent px-4 py-3 text-sm font-semibold text-primary-foreground"
          >
            Launch Your Platform
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
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
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Get Started Today <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-secondary"
              >
                View Solutions
              </a>
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

function AudienceCard({
  eyebrow,
  header,
  body,
  features,
  cta,
}: {
  eyebrow: string;
  header: string;
  body: string;
  features: string[];
  cta: string;
}) {
  return (
    <article className="group relative flex flex-col rounded-3xl border border-border bg-card p-8 shadow-card transition-transform hover:-translate-y-1">
      <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-accent">
        {eyebrow}
      </span>
      <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-navy">{header}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <ul className="mt-6 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm font-medium text-navy-soft">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-deep transition-transform group-hover:translate-x-1"
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </a>
    </article>
  );
}

function Audience() {
  return (
    <section id="audience" className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
      <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
        Built for Creators &amp; Growing Businesses
      </h2>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <AudienceCard
          eyebrow="For Micro-Creators (10K–80K Followers)"
          header="Monetize Your Expertise Directly"
          body="Stop relying solely on volatile brand deals and ads. We package your knowledge into structured online courses, membership hubs, and skill-based digital learning programs."
          features={[
            "Custom Course Architecture",
            "Payment & Automation Setup",
            "Subscriber Loyalty Hubs",
          ]}
          cta="Build Your Digital Product"
        />
        <AudienceCard
          eyebrow="For Service-Based Businesses"
          header="Expand Your Business Online"
          body="Move beyond traditional flyers and business cards. We build sleek, high-converting single-page and multi-page websites that attract, inform, and convert clients automatically."
          features={[
            "Custom Design",
            "Mobile-Optimized",
            "Lead Generation & Booking Integration",
          ]}
          cta="Build Your Website"
        />
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-gradient-navy py-20 lg:py-28">
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
                <span className="text-sm font-bold text-navy-foreground/35">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/65">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
      <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
        Tailored Digital Solutions
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {offerings.map((o) => (
          <article
            key={o.title}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-transform hover:-translate-y-1"
          >
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-gradient-accent opacity-0 transition-opacity group-hover:opacity-100"
            />
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
              <o.icon className="h-6 w-6" strokeWidth={2.1} />
            </span>
            <span className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              {o.tag}
            </span>
            <h3 className="mt-2 text-xl font-extrabold tracking-tight text-navy">{o.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 pb-20 lg:pb-28">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-navy p-10 shadow-glow sm:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-accent opacity-30 blur-[90px]"
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-foreground sm:text-4xl">
            Ready to Turn Influence Into Impact?
          </h2>
          <p className="mt-4 text-base text-navy-foreground/70">
            Stop leaving money on the table. Let's build your digital infrastructure today.
          </p>
          <a
            href="mailto:hello@thedigitalhustle.co"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-accent px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Schedule A Strategy Call <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            The Digital Hustle turns skills into scalable digital businesses and local services
            into accessible brands.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-navy">Quick Links</h3>
          <ul className="mt-5 space-y-3">
            {[...navLinks, { label: "Terms of Service", href: "#" }, { label: "Privacy Policy", href: "#" }].map(
              (l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-cyan-deep"
                  >
                    {l.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-navy">
            Fuel your online growth
          </h3>
          <form
            className="mt-5 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setEmail("");
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              aria-label="Email address"
              className="min-w-0 flex-1 rounded-xl border border-input bg-background px-4 py-3 text-sm text-navy outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-gradient-accent px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Submit
            </button>
          </form>
          {sent && (
            <p className="mt-3 text-sm font-medium text-cyan-deep">
              You're on the list — talk soon.
            </p>
          )}
        </div>
      </div>
      <div className="border-t border-border px-5 py-6">
        <p className="mx-auto max-w-7xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} The Digital Hustle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Nav />
      <main>
        <Hero />
        <Audience />
        <Process />
        <Solutions />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
