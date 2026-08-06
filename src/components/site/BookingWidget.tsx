import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, CalendarDays, Loader2 } from "lucide-react";
import { getSlots, bookSlot } from "@/lib/booking.functions";

const goals = [
  "Digital course or membership hub",
  "Single-page website",
  "Multi-page website",
  "Not sure yet — need guidance",
];

function nextWeekdays(count: number) {
  const days: { iso: string; weekday: string; day: string; month: string }[] = [];
  const d = new Date();
  d.setHours(12, 0, 0, 0);
  while (days.length < count) {
    d.setDate(d.getDate() + 1);
    const dow = d.getDay();
    if (dow === 0 || dow === 6) continue;
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    days.push({
      iso,
      weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
      day: String(d.getDate()),
      month: d.toLocaleDateString("en-US", { month: "short" }),
    });
  }
  return days;
}

export function BookingWidget() {
  const days = nextWeekdays(10);
  const [date, setDate] = useState(days[0]!.iso);
  const [slot, setSlot] = useState<{ start: string; end: string; label: string } | null>(null);
  const [slotError, setSlotError] = useState(false);
  const fetchSlots = useServerFn(getSlots);
  const book = useServerFn(bookSlot);


  const slotsQuery = useQuery({
    queryKey: ["slots", date],
    queryFn: () => fetchSlots({ data: { date } }),
    retry: false,
    refetchOnWindowFocus: false,
  });


  const booking = useMutation({
    mutationFn: (vars: { name: string; email: string; goal: string; message: string }) =>
      book({ data: { ...vars, start: slot!.start, end: slot!.end } }),
  });

  if (booking.data) {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-card sm:p-10">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
          <CalendarDays className="h-6 w-6" />
        </span>
        <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-navy">You're booked in.</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Your strategy call is confirmed for{" "}
          <span className="font-semibold text-navy">{booking.data.confirmedFor}</span>. A calendar
          invite is on its way to your inbox.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10">
      <h2 className="text-2xl font-extrabold tracking-tight text-navy">Book your strategy call</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Pick a 30-minute slot from our live calendar — you'll get an instant invite.
      </p>

      <div className="mt-7">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          1. Choose a day
        </p>
        <div className="mt-3 flex gap-2.5 overflow-x-auto pb-2">
          {days.map((d) => (
            <button
              key={d.iso}
              type="button"
              onClick={() => {
                setDate(d.iso);
                setSlot(null);
              }}
              className={`flex min-w-[4.5rem] flex-col items-center rounded-2xl border px-3 py-3 text-sm transition-colors ${
                d.iso === date
                  ? "border-transparent bg-gradient-accent text-primary-foreground"
                  : "border-border bg-background text-navy hover:border-cyan-deep"
              }`}
            >
              <span className="text-xs font-semibold uppercase opacity-80">{d.weekday}</span>
              <span className="text-lg font-extrabold leading-tight">{d.day}</span>
              <span className="text-xs opacity-80">{d.month}</span>
            </button>
          ))}
        </div>
      </div>

      <div id="booking-times" className="mt-6 scroll-mt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          2. Choose a time{" "}
          <span className="normal-case tracking-normal">(times shown in Mountain Time)</span>
        </p>
        {slotsQuery.isPending ? (
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Checking availability…
          </p>
        ) : slotsQuery.isError ? (
          <p className="mt-3 text-sm text-muted-foreground">
            We couldn't load availability right now. Email us at hello@thedigitalhustle.co and we'll
            find a time.
          </p>
        ) : slotsQuery.data.slots.length === 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">
            No openings left that day — try another date.
          </p>
        ) : (
          <div className="mt-3 grid grid-cols-3 gap-2.5 sm:grid-cols-4">
            {slotsQuery.data.slots.map((s) => (
              <button
                key={s.start}
                type="button"
                onClick={() => {
                  setSlot(s);
                  setSlotError(false);
                }}
                className={`rounded-xl border px-3 py-2.5 text-sm font-semibold transition-colors ${
                  slot?.start === s.start
                    ? "border-transparent bg-gradient-accent text-primary-foreground"
                    : "border-border bg-background text-navy hover:border-cyan-deep"
                }`}
              >
                {s.label}

              </button>
            ))}
          </div>
        )}
      </div>

      <form
        className="mt-7 space-y-5 border-t border-border pt-7"
        onSubmit={(e) => {
          e.preventDefault();
          if (!slot) {
            setSlotError(true);
            document.getElementById("booking-times")?.scrollIntoView({ behavior: "smooth" });
            return;
          }
          const fd = new FormData(e.currentTarget);
          booking.mutate({
            name: String(fd.get("name") ?? ""),
            email: String(fd.get("email") ?? ""),
            goal: String(fd.get("goal") ?? ""),
            message: String(fd.get("message") ?? ""),
          });
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          3. Your details
        </p>
        <p className="text-sm text-muted-foreground">
          {slot ? (
            <>
              Selected:{" "}
              <span className="font-semibold text-navy">
                {new Date(slot.start).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  timeZone: "America/Edmonton",
                })}{" "}
                at {slot.label} MT
              </span>
            </>
          ) : (
            <span className={slotError ? "font-semibold text-destructive" : undefined}>
              Pick a time above to continue.
            </span>
          )}
        </p>

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
            rows={4}
            placeholder="Your audience size, current website, timeline…"
            className="mt-2 w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal text-navy outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
          />
        </label>

        {booking.isError && (
          <p className="text-sm font-medium text-destructive">
            We couldn't confirm that slot. Please pick another time or email us.
          </p>
        )}

        <button
          type="submit"
          disabled={booking.isPending}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
        >

          {booking.isPending ? (
            <>
              Booking… <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              {slot ? `Confirm ${slot.label}` : "Select a time first"}{" "}
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
