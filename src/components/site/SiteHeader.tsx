import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoMark from "@/assets/logo.png";
import { navLinks } from "@/lib/site-content";

export function Logo() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2.5">
      <img
        src={logoMark}
        alt="The Digital Hustle logo"
        width={512}
        height={512}
        className="h-9 w-9 shrink-0 object-contain"
      />
      <span className="truncate text-base font-extrabold tracking-tight text-navy">
        The Digital Hustle
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:flex lg:justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              activeProps={{ className: "text-navy" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-accent px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            Launch Your Platform
          </Link>
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
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-navy"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center rounded-xl bg-gradient-accent px-4 py-3 text-sm font-semibold text-primary-foreground"
          >
            Launch Your Platform
          </Link>
        </div>
      )}
    </header>
  );
}
