import solutionSingle from "@/assets/solution-single.jpg";
import solutionMulti from "@/assets/solution-multi.jpg";
import solutionHub from "@/assets/solution-hub.jpg";

export type ServiceDetail = {
  slug: string;
  tag: string;
  title: string;
  tagline: string;
  intro: string;
  image: string;
  alt: string;
  bestFor: string[];
  includes: { title: string; body: string }[];
  timeline: string;
  faqs: { q: string; a: string }[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "single-page-websites": {
    slug: "single-page-websites",
    tag: "Option A",
    title: "Single-Page Websites",
    tagline: "One page. One goal. Maximum conversion.",
    intro:
      "Stop overcomplicating. We build fast-loading, high-impact landing pages that tell your story in a single scroll and push every visitor toward one clear action — call, book, or buy.",
    image: solutionSingle,
    alt: "Single-page website mockup on a laptop with navy and cyan interface",
    bestFor: [
      "New service businesses launching online",
      "Creators validating a single offer",
      "Ad and social campaigns that need a destination",
      "Anyone replacing flyers and business cards",
    ],
    includes: [
      { title: "Conversion-first structure", body: "Hero, proof, offer, objections, CTA — sequenced the way buyers actually decide." },
      { title: "Mobile-first build", body: "Designed on phone widths first, because that's where your traffic lives." },
      { title: "Lead capture", body: "Enquiry form, click-to-call and email routing straight to your inbox." },
      { title: "Speed & SEO basics", body: "Compressed assets, semantic markup, titles and descriptions set correctly." },
    ],
    timeline: "1–2 weeks from kickoff to launch",
    faqs: [
      { q: "Can I add more pages later?", a: "Yes — every single-page build can be extended into a multi-page platform without starting over." },
      { q: "Do you write the copy?", a: "We structure it and draft the framework; you supply the details and we polish together." },
    ],
  },
  "multi-page-websites": {
    slug: "multi-page-websites",
    tag: "Option B",
    title: "Multi-Page Websites",
    tagline: "A full web platform for an established business.",
    intro:
      "Comprehensive web platforms built for established local service providers expanding their online presence — service pages, location pages, galleries and booking, all under one clean system.",
    image: solutionMulti,
    alt: "Layered browser windows showing a multi-page business website",
    bestFor: [
      "Businesses with several distinct services",
      "Multi-location or multi-team operations",
      "Companies competing in local search",
      "Brands needing galleries, blogs or resources",
    ],
    includes: [
      { title: "Service & location pages", body: "Each offering gets its own indexable page targeting the terms customers search." },
      { title: "Booking integration", body: "Calendar-connected scheduling so clients book themselves, no back-and-forth." },
      { title: "Content system", body: "Blog or resource section you can update without touching code." },
      { title: "Analytics & tracking", body: "Know which pages and channels actually produce enquiries." },
    ],
    timeline: "3–5 weeks depending on page count",
    faqs: [
      { q: "How many pages do I need?", a: "Usually one per core service plus about, contact and proof. We map it on the strategy call." },
      { q: "Can I edit it myself?", a: "Yes. You get handover training and documentation for everything you'll touch." },
    ],
  },
  "digital-products-hubs": {
    slug: "digital-products-hubs",
    tag: "Option C",
    title: "Custom Digital Products & Hubs",
    tagline: "Turn your knowledge into recurring revenue.",
    intro:
      "Complete digital ecosystems including video courses, gated communities and recurring subscription models — architected so your expertise sells while you sleep.",
    image: solutionHub,
    alt: "Online course membership hub on desktop and mobile",
    bestFor: [
      "Micro-creators with 10K–80K followers",
      "Coaches and consultants productising their process",
      "Educators launching a cohort or evergreen course",
      "Communities moving off scattered free tools",
    ],
    includes: [
      { title: "Course architecture", body: "Modules, lessons and outcomes structured so students finish and refer." },
      { title: "Payments & automation", body: "Checkout, subscriptions, receipts and onboarding emails wired end to end." },
      { title: "Gated member hub", body: "Login-protected content, tiers and community spaces for loyal subscribers." },
      { title: "Growth instrumentation", body: "Funnel tracking from first click to renewal so you know what to scale." },
    ],
    timeline: "4–8 weeks depending on content volume",
    faqs: [
      { q: "Do I need my content finished first?", a: "No. We often build the structure first, which makes recording far faster." },
      { q: "Which platform do you use?", a: "Whatever fits your margins and audience — we recommend after reviewing your numbers." },
    ],
  },
};

export const serviceSlugs = Object.keys(serviceDetails);
