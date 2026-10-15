import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How ALFRIX TECH takes a project from initial conversation to launch — discovery, planning, building, testing, and delivery.",
};

const phases = [
  {
    num: "01",
    title: "Initial Inquiry",
    desc: "You tell us what you're building, what problem you're solving, or what you'd like to improve. This can be a brief outline — we don't need a complete specification at this stage.",
    detail: [
      "Submit a project inquiry via the contact form.",
      "We review the details and follow up with any initial questions.",
      "We confirm whether it's a project we can help with and what the natural next steps are.",
    ],
  },
  {
    num: "02",
    title: "Discovery & Requirements",
    desc: "Before any code is written, we invest time in understanding the business, the users, the constraints, and the desired outcomes. Skipping this stage is the most common reason software projects fail.",
    detail: [
      "Structured conversation about goals, users, and existing workflows.",
      "Review of any existing systems, designs, or documentation.",
      "Identification of the core problem to solve and the scope boundaries.",
      "Agreement on what success looks like for this project.",
    ],
  },
  {
    num: "03",
    title: "Proposal & Scope",
    desc: "We put together a written proposal that covers the technical approach, what will be built, what is outside scope, the estimated timeline, and the investment required.",
    detail: [
      "Clear description of the proposed solution.",
      "Defined deliverables — what you receive at the end.",
      "Realistic timeline based on the agreed scope.",
      "Explicit note of anything excluded to prevent scope creep.",
      "Terms for handling scope changes if they arise.",
    ],
  },
  {
    num: "04",
    title: "Design & Planning",
    desc: "For projects that include a user interface, we define the visual direction and key user flows before building begins. For API-heavy or backend projects, this phase focuses on data models and architecture.",
    detail: [
      "UI/UX direction and component planning.",
      "Data structure and API design.",
      "Technical architecture decisions.",
      "Review and approval before build begins.",
    ],
  },
  {
    num: "05",
    title: "Build",
    desc: "We implement the agreed scope using clean, maintainable code. Progress is visible through regular updates — you don't wait weeks without any visibility.",
    detail: [
      "Development in agreed milestones.",
      "Regular progress updates — weekly at minimum.",
      "Opportunities for feedback at milestone points.",
      "Staging environment where you can review work in progress.",
    ],
  },
  {
    num: "06",
    title: "Test & Refine",
    desc: "Before any product reaches production, we test the critical flows, identify issues, and resolve them. We also incorporate your feedback from the staged review.",
    detail: [
      "Testing of core user journeys and functionality.",
      "Cross-device and cross-browser checks for web products.",
      "Bug fixes and refinements based on staging review.",
      "Final sign-off review before deployment.",
    ],
  },
  {
    num: "07",
    title: "Launch & Support",
    desc: "We deploy the product, hand over relevant documentation, and support the transition to production. Post-launch support and future improvements are scoped and agreed separately.",
    detail: [
      "Deployment to production environment.",
      "Handover of credentials, access, and documentation.",
      "Post-launch monitoring for the initial period.",
      "Agreed maintenance or future development scoped separately.",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="glow">
        <div className="wrap py-24 md:py-32">
          <p className="label">How we work</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
            A Clear Process From Idea to Launch.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Every project follows a structured process that keeps work on track, maintains
            visibility, and reduces expensive surprises. Here&apos;s how it works from first
            conversation to final delivery.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="wrap py-20">
        <div className="space-y-12">
          {phases.map(({ num, title, desc, detail }) => (
            <div key={num} className="grid gap-8 md:grid-cols-5 md:items-start">
              <div className="md:col-span-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-bold text-lime">{num}</span>
                  <h2 className="font-display text-xl font-semibold text-soft">{title}</h2>
                </div>
                <p className="mt-3 text-sm text-muted">{desc}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-card p-5 md:col-span-3">
                <ul className="space-y-2 text-sm text-muted">
                  {detail.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 text-lime">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scope changes */}
      <section className="bg-bg2 py-16">
        <div className="wrap">
          <p className="label">Important to know</p>
          <h2 className="mt-3 font-display text-2xl font-bold">On Timelines and Scope Changes</h2>
          <div className="mt-6 grid gap-6 text-sm text-muted md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-card p-5">
              <p className="font-semibold text-soft">Timelines are estimates, not guarantees</p>
              <p className="mt-2">
                Project timelines depend on scope, complexity, and the responsiveness of both
                parties. We commit to a realistic estimate based on the agreed scope and communicate
                proactively if anything changes that could affect delivery.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card p-5">
              <p className="font-semibold text-soft">Scope changes are handled transparently</p>
              <p className="mt-2">
                When a scope change arises — whether from new requirements or a better understanding
                of the problem — we discuss the impact on timeline and cost before proceeding. There
                are no surprise invoices.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card p-5">
              <p className="font-semibold text-soft">Revisions are part of the process</p>
              <p className="mt-2">
                We build in review points at milestone stages for exactly this reason. Revisions
                within the agreed scope are included. Revisions that extend the scope are discussed
                and scoped separately.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card p-5">
              <p className="font-semibold text-soft">Client participation matters</p>
              <p className="mt-2">
                Timely feedback at review points keeps projects moving. Extended delays in feedback
                can affect delivery dates. We account for this in the project schedule and flag it
                early if it&apos;s becoming a risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="glow">
        <div className="wrap py-24 text-center">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-bold">
            Ready to start the conversation?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Tell us what you&apos;re working on. We&apos;ll take it from the first step.
          </p>
          <Link href="/contact" className="btn-p mt-8 inline-flex">
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
