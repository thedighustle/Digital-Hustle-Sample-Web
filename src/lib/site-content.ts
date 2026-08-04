import {
  Compass,
  LayoutGrid,
  PenTool,
  Zap,
  TrendingUp,
  FileText,
  Layers,
  GraduationCap,
} from "lucide-react";
import creatorsImg from "@/assets/creators.jpg";
import businessImg from "@/assets/business.jpg";
import solutionSingle from "@/assets/solution-single.jpg";
import solutionMulti from "@/assets/solution-multi.jpg";
import solutionHub from "@/assets/solution-hub.jpg";

export const navLinks = [
  { label: "Services", to: "/services" },
  { label: "For Creators", to: "/for-creators" },
  { label: "For Businesses", to: "/for-businesses" },
  { label: "Our Process", to: "/process" },
  { label: "Contact", to: "/contact" },
] as const;

export const steps = [
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

export const offerings = [
  {
    icon: FileText,
    tag: "Option A",
    title: "Single-Page Websites",
    slug: "single-page-websites",
    body: "Stop overcomplicating. Fast-loading, high-impact landing pages designed for high conversion.",
    image: solutionSingle,
    alt: "Single-page website mockup on a laptop with navy and cyan interface",
  },
  {
    icon: Layers,
    tag: "Option B",
    title: "Multi-Page Websites",
    slug: "multi-page-websites",
    body: "Comprehensive web platforms built for established local service providers expanding their online presence.",
    image: solutionMulti,
    alt: "Layered browser windows showing a multi-page business website",
  },
  {
    icon: GraduationCap,
    tag: "Option C",
    title: "Custom Digital Products & Hubs",
    slug: "digital-products-hubs",
    body: "Complete digital ecosystems including video courses, gated communities, and recurring subscription models.",
    image: solutionHub,
    alt: "Online course membership hub on desktop and mobile",
  },
];

export const audiences = [
  {
    eyebrow: "For Micro-Creators (10K–80K Followers)",
    header: "Monetize Your Expertise Directly",
    body: "Stop relying solely on volatile brand deals and ads. We package your knowledge into structured online courses, membership hubs, and skill-based digital learning programs.",
    features: [
      "Custom Course Architecture",
      "Payment & Automation Setup",
      "Subscriber Loyalty Hubs",
    ],
    cta: "Build Your Digital Product",
    to: "/for-creators",
    image: creatorsImg,
    alt: "Creator recording an online course at a desk with a course dashboard on screen",
  },
  {
    eyebrow: "For Service-Based Businesses",
    header: "Expand Your Business Online",
    body: "Move beyond traditional flyers and business cards. We build sleek, high-converting single-page and multi-page websites that attract, inform, and convert clients automatically.",
    features: ["Custom Design", "Mobile-Optimized", "Lead Generation & Booking Integration"],
    cta: "Build Your Website",
    to: "/for-businesses",
    image: businessImg,
    alt: "Service business owner showing a modern business website on a tablet",
  },
];
