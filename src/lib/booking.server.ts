const GATEWAY = "https://connector-gateway.lovable.dev/google_calendar/calendar/v3";

export const BOOKING_TIME_ZONE = "America/Edmonton";
const SLOT_MINUTES = 30;
const DAY_START_HOUR = 9;
const DAY_END_HOUR = 17;

export type Slot = { start: string; end: string; label: string };

function gatewayHeaders() {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const connKey = process.env["GOOGLE_CALENDAR_API_KEY"];
  if (!lovableKey || !connKey) throw new Error("Calendar is not connected yet.");
  return {
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": connKey,
    "Content-Type": "application/json",
  };
}

async function callCalendar(path: string, init?: RequestInit) {
  const res = await fetch(`${GATEWAY}${path}`, { ...init, headers: gatewayHeaders() });
  if (!res.ok) {
    const body = await res.text();
    console.error(`Google Calendar request failed [${res.status}]: ${body}`);
    throw new Error(`Calendar request failed [${res.status}]: ${body}`);
  }
  return res.json();
}

/** Offset in minutes of the booking time zone for a given UTC instant. */
function zoneOffsetMinutes(date: Date): number {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: BOOKING_TIME_ZONE,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const parts: Record<string, string> = {};
  for (const p of dtf.formatToParts(date)) if (p.type !== "literal") parts[p.type] = p.value;
  const asUTC = Date.UTC(
    Number(parts["year"]),
    Number(parts["month"]) - 1,
    Number(parts["day"]),
    Number(parts["hour"] === "24" ? "0" : parts["hour"]),
    Number(parts["minute"]),
    Number(parts["second"]),
  );
  return (asUTC - date.getTime()) / 60000;
}

/** Convert a wall-clock time in the booking time zone to a UTC Date. */
function zonedToUtc(year: number, month: number, day: number, hour: number, minute: number): Date {
  const guess = new Date(Date.UTC(year, month - 1, day, hour, minute));
  const offset = zoneOffsetMinutes(guess);
  return new Date(guess.getTime() - offset * 60000);
}

function formatSlotLabel(start: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: BOOKING_TIME_ZONE,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(start);
}

function parseDay(dateISO: string) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateISO);
  if (!m) throw new Error("Invalid date");
  return { year: Number(m[1]), month: Number(m[2]), day: Number(m[3]) };
}

export async function getAvailableSlots(dateISO: string): Promise<Slot[]> {
  const { year, month, day } = parseDay(dateISO);
  const dayStart = zonedToUtc(year, month, day, DAY_START_HOUR, 0);
  const dayEnd = zonedToUtc(year, month, day, DAY_END_HOUR, 0);

  const busy: Array<{ start: string; end: string }> = [];
  try {
    const fb = (await callCalendar("/freeBusy", {
      method: "POST",
      body: JSON.stringify({
        timeMin: dayStart.toISOString(),
        timeMax: dayEnd.toISOString(),
        timeZone: BOOKING_TIME_ZONE,
        items: [{ id: "primary" }],
      }),
    })) as { calendars?: Record<string, { busy?: Array<{ start: string; end: string }> }> };
    for (const cal of Object.values(fb.calendars ?? {})) busy.push(...(cal.busy ?? []));
  } catch (err) {
    console.error("freeBusy lookup failed", err);
    throw err;
  }

  const slots: Slot[] = [];
  const now = Date.now();
  for (let t = dayStart.getTime(); t + SLOT_MINUTES * 60000 <= dayEnd.getTime(); t += SLOT_MINUTES * 60000) {
    const start = new Date(t);
    const end = new Date(t + SLOT_MINUTES * 60000);
    if (start.getTime() <= now) continue;
    const overlaps = busy.some(
      (b) => new Date(b.start).getTime() < end.getTime() && new Date(b.end).getTime() > start.getTime(),
    );
    if (overlaps) continue;
    slots.push({ start: start.toISOString(), end: end.toISOString(), label: formatSlotLabel(start) });
  }
  return slots;
}

export async function createBooking(input: {
  name: string;
  email: string;
  start: string;
  end: string;
  goal?: string;
  message?: string;
}) {
  const start = new Date(input.start);
  const end = new Date(input.end);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end <= start) {
    throw new Error("Invalid time slot");
  }

  const details = [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    input.goal ? `Goal: ${input.goal}` : null,
    input.message ? `Notes: ${input.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const event = (await callCalendar("/calendars/primary/events?sendUpdates=all", {
    method: "POST",
    body: JSON.stringify({
      summary: `Strategy Call — ${input.name}`,
      description: details,
      start: { dateTime: start.toISOString(), timeZone: BOOKING_TIME_ZONE },
      end: { dateTime: end.toISOString(), timeZone: BOOKING_TIME_ZONE },
      attendees: [{ email: input.email, displayName: input.name }],
      reminders: { useDefault: true },
    }),
  })) as { id?: string; htmlLink?: string };

  return {
    id: event.id ?? null,
    confirmedFor: new Intl.DateTimeFormat("en-US", {
      timeZone: BOOKING_TIME_ZONE,
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZoneName: "short",
    }).format(start),
  };
}
