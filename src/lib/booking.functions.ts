import { createServerFn } from "@tanstack/react-start";

export const getSlots = createServerFn({ method: "POST" })
  .inputValidator((data: { date: string }) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data?.date ?? "")) throw new Error("Invalid date");
    return { date: data.date };
  })
  .handler(async ({ data }) => {
    const { getAvailableSlots } = await import("./booking.server");
    return { slots: await getAvailableSlots(data.date) };
  });

export const bookSlot = createServerFn({ method: "POST" })
  .inputValidator(
    (data: {
      name: string;
      email: string;
      start: string;
      end: string;
      goal?: string;
      message?: string;
    }) => {
      const name = (data?.name ?? "").trim();
      const email = (data?.email ?? "").trim();
      if (name.length < 1 || name.length > 120) throw new Error("Please enter your name.");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 200)
        throw new Error("Please enter a valid email.");
      if (!data?.start || !data?.end) throw new Error("Please pick a time slot.");
      return {
        name,
        email,
        start: data.start,
        end: data.end,
        goal: (data.goal ?? "").slice(0, 200),
        message: (data.message ?? "").slice(0, 2000),
      };
    },
  )
  .handler(async ({ data }) => {
    const { createBooking } = await import("./booking.server");
    return createBooking(data);
  });
