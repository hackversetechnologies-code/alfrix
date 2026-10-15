import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "ALFRIX TECH organises its capabilities around common business needs — from digital presence to process automation and custom platforms.",
};

const solutions = [
  {
    title: "Business Digital Presence",
    problem:
      "Your business has no professional online presence, or your existing website is outdated, slow, or not working for you.",
    solution:
      "A well-structured, responsive website that communicates what your business does, builds credibility, and makes it easy for customers to take action.",
    services: ["Website Development"],
    features: [
      "Professional corporate or business website",
      "Mobile-first responsive design",
      "Contact and inquiry functionality",
      "SEO-conscious structure",
      "Fast-loading, accessible pages",
    ],
  },
  {
    title: "E-commerce & Online Sales",
    problem:
      "You want to sell products or services online but don't have a reliable way for customers to browse, order, and pay.",
    solution:
      "An e-commerce website or ordering system built for your specific product and customer type — whether that's a retail store, a restaurant, or a service business.",
    services: ["Website Development", "Web Applications"],
    features: [
      "Product catalogue and listings",
      "Online ordering or booking",
      "Payment integration (when configured)",
      "Order management",
      "Admin panel to manage stock and orders",
    ],
  },
  {
    title: "Business Process Automation",
    problem:
      "Your team spends too much time on repetitive tasks — manual data entry, following up leads, sending notifications, or handling support requests.",
    solution:
      "Automated workflows and bots that handle routine tasks, reducing manual effort and the risk of things falling through the cracks.",
    services: ["Bots & Business Automation"],
    features: [
      "Telegram bots for internal or customer workflows",
      "WhatsApp Business Platform automations (authorised integrations)",
      "Lead collection and follow-up",
      "Order and booking notifications",
      "API-connected workflows between tools",
    ],
  },
  {
    title: "Customer Portals & Dashboards",
    problem:
      "Your customers or staff need a way to log in, view their data, track progress, or manage their account — and you don't have that capability yet.",
    solution:
      "A custom web application with authentication, role-based access, and the specific views and actions your users need.",
    services: ["Web Applications & Custom Software"],
    features: [
      "Secure login and authentication",
      "Role-based access control",
      "Customer or staff dashboards",
      "Data display and reporting",
      "Document or file management where needed",
    ],
  },
  {
    title: "School & Organisational Management",
    problem:
      "Your school, institution, or organisation manages students, staff, records, or schedules using paper systems or spreadsheets that don't scale.",
    solution:
      "A custom management system built around your specific workflows — enrolment, attendance, records, communication, and reporting.",
    services: ["Web Applications & Custom Software"],
    features: [
      "Student or member management",
      "Attendance and records",
      "Staff and role management",
      "Communication tools",
      "Reporting and exports",
    ],
  },
  {
    title: "Custom SaaS Platforms",
    problem:
      "You have a business idea that requires building a multi-tenant software product — something other businesses or users will subscribe to and use.",
    solution:
      "A purpose-built SaaS platform with the right architecture, user management, subscription handling, and the core features your product needs to work.",
    services: ["Web Applications & Custom Software"],
    features: [
      "Multi-tenant architecture",
      "Subscription and plan management",
      "Admin and user dashboards",
      "API integrations",
      "Scalable foundation for future features",
    ],
  },
  {
    title: "Blockchain-Powered Products",
    problem:
      "Your product or use case genuinely benefits from decentralisation — transparent records, token interactions, or on-chain logic that traditional systems can't provide.",
    solution:
      "A Web3 application, smart contract, or blockchain integration built for the specific use case — not blockchain for its own sake.",
    services: ["Blockchain Development", "Smart Contract Development"],
    features: [
      "Wallet connection and authentication",
      "Smart contract development and deployment",
      "On-chain data integration",
      "dApp frontend interfaces",
      "Transaction and event handling",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="glow">
        <div className="wrap py-24 md:py-32">
          <p className="label">Solutions</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
            Digital Solutions Organised Around Your Business Needs.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Every project starts with a business problem. Here&apos;s how our capabilities map to
            the challenges we most commonly help clients solve.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="wrap py-20">
        <div className="space-y-10">
          {solutions.map((sol) => (
            <div
              key={sol.title}
              className="rounded-2xl border border-white/10 bg-card p-7 md:p-9"
            >
              <h2 className="font-display text-2xl font-bold text-soft">{sol.title}</h2>

              <div className="mt-5 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="label mb-2">The problem</p>
                  <p className="text-sm text-muted">{sol.problem}</p>
                </div>
                <div>
                  <p className="label mb-2">The solution</p>
                  <p className="text-sm text-muted">{sol.solution}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="label mb-3">Common features</p>
                  <ul className="space-y-1.5 text-sm text-muted">
                    {sol.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-lime">—</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label mb-3">Services involved</p>
                  <div className="flex flex-wrap gap-2">
                    {sol.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-lime/30 px-3 py-1 text-xs text-lime"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-muted">
                    All solutions are custom-built to your specific requirements. Nothing here is
                    off-the-shelf.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="glow">
        <div className="wrap py-24 text-center">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-bold">
            Have a problem that fits one of these?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Tell us what you&apos;re trying to solve. We&apos;ll figure out the right approach and
            what building it would involve.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-p">
              Start a Conversation <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-s">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
