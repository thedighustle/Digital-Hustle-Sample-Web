import { Link } from "@tanstack/react-router";
import { Logo } from "./SiteHeader";
import { navLinks } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr]">
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
            {[
              ...navLinks,
              { label: "Terms of Service", to: "/terms" as const },
              { label: "Privacy Policy", to: "/privacy" as const },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-cyan-deep"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
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
