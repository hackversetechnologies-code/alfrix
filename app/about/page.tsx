import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Sparkles, ShieldCheck, Target, Lightbulb, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Digital Engineering & Technical Philosophy",
  description:
    "ALFRIX TECH is a software development company that combines engineering, design, and practical problem-solving to build useful digital products.",
};

const principles = [
  {
    icon: <Target className="text-lime" size={24} />,
    title: "Purposeful Engineering",
    body: "Every technical decision should serve a clear business purpose. We don't adopt complexity for its own sake — we build what the product needs to work reliably.",
  },
  {
    icon: <Lightbulb className="text-lime" size={24} />,
    title: "Practical Innovation",
    body: "We apply the right technologies to real problems. Modern frameworks and tools are integrated where they genuinely improve user experience and maintainability.",
  },
  {
    icon: <ShieldCheck className="text-lime" size={24} />,
    title: "Dependable Execution",
    body: "Clients need confidence that what's agreed gets built. We maintain clear communication, honest milestones, and follow through on every technical deliverable.",
  },
  {
    icon: <Users className="text-lime" size={24} />,
    title: "Collaborative Process",
    body: "Good software is built with the people who understand the business. We involve stakeholders at every meaningful milestone — from discovery to final rollout.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="glow border-b border-white/10">
        <div className="wrap py-24 md:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
            <Sparkles size={13} />
            <span>Company & Engineering Philosophy</span>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-soft md:text-6xl">
            We Turn Complex Ideas Into Practical Digital Products.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            ALFRIX TECH is a software development and digital engineering company built around the
            conviction that technology should simplify business operations, not complicate them.
          </p>
        </div>
      </section>

      {/* ── Visual & Mission Overview ────────────────────── */}
      <section className="wrap py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="label">Our Approach</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-soft md:text-4xl">
              Engineering, Design, and Problem-Solving Working in Unison.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                We design and build websites, web applications, mobile apps, blockchain integrations,
                smart contracts, and automation systems. Our client engagements span startups
                establishing their initial digital presence, established businesses automating
                manual workflows, and organizations needing bespoke software tailored to their exact
                processes.
              </p>
              <p>
                What distinguishes ALFRIX TECH is our commitment to foundational clarity. Most digital
                initiatives encounter friction not from bad code, but from rushed discovery, unclear
                requirements, or off-the-shelf software forced into mismatched business models.
              </p>
              <p>
                We address this through structured discovery, rigorous testing, and transparent
                communication. We ask the hard architectural questions early so that your software
                operates dependably from day one.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(36,75,42,0.3)]">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=80"
                alt="Digital Engineering Workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Principles ─────────────────────────────── */}
      <section className="bg-bg2 py-24 border-y border-white/10">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="label">Core Principles</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-soft md:text-4xl">
              The Standards We Hold Ourselves To.
            </h2>
            <p className="mt-4 text-muted">
              Every system we engineer adheres to four foundational commitments.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {principles.map(({ icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-card p-7 transition hover:border-lime/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lime/10 border border-lime/20">
                  {icon}
                </div>
                <h3 className="font-display text-xl font-bold text-soft">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Serve ────────────────────────────────── */}
      <section className="wrap py-24">
        <div className="max-w-2xl">
          <p className="label">Clients & Partners</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-soft md:text-4xl">
            The Types of Clients We Work With Best.
          </h2>
          <p className="mt-4 text-muted">
            We partner across sectors with people and teams who value precision and clear accountability.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Startups & Founders", "Building an initial product, validating market viability, or engineering an MVP."],
            ["SMEs & Established Brands", "Replacing manual spreadsheets, improving internal systems, or scaling online commerce."],
            ["Commercial Businesses", "Requiring modern web presences, booking platforms, and automated customer communication."],
            ["Schools & Institutions", "Managing student records, attendance, curriculum, and administrative operations."],
            ["Service Providers & Clinics", "Automating appointment scheduling, patient inquiries, and test catalogue discovery."],
            ["Technical Teams & Agencies", "Subcontracting specialised capabilities in React Native, Expo, and blockchain."],
          ].map(([type, desc]) => (
            <div
              key={type}
              className="rounded-xl border border-white/10 bg-card p-6 transition hover:border-lime/30"
            >
              <h3 className="font-display text-base font-semibold text-soft">{type}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────── */}
      <section className="glow border-t border-white/10 bg-bg py-24 text-center">
        <div className="wrap">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-bold text-soft md:text-4xl">
            Have a Project in Mind?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Tell us what you&apos;re building. We&apos;ll review the details and propose the right
            technical approach.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Link href="/contact" className="btn-p">
              Start a Project <ArrowRight size={16} />
            </Link>
            <Link href="/work" className="btn-s">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
