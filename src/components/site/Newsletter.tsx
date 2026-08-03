import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="mt-8 rounded-[2rem] border border-border bg-card p-8 shadow-card sm:p-10">
      <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h3 className="text-xl font-extrabold uppercase tracking-[0.1em] text-navy sm:text-2xl">
            Fuel Your Online Growth
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Get practical playbooks on monetizing expertise and converting more clients online.
          </p>
        </div>
        <div>
          <form
            className="flex flex-col gap-3 sm:flex-row"
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
              className="min-w-0 flex-1 rounded-xl border border-input bg-background px-4 py-3.5 text-sm text-navy outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
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
    </div>
  );
}
