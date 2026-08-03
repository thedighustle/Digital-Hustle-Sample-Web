import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Newsletter } from "./Newsletter";

export function CtaBanner({
  title = "Ready to Turn Influence Into Impact?",
  body = "Stop leaving money on the table. Let's build your digital infrastructure today.",
  withNewsletter = true,
}: {
  title?: string;
  body?: string;
  withNewsletter?: boolean;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 lg:pb-28">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-navy p-10 shadow-glow sm:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-accent opacity-30 blur-[90px]"
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-navy-foreground/70">{body}</p>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-accent px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Schedule A Strategy Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      {withNewsletter && <Newsletter />}
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gradient-accent opacity-15 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
