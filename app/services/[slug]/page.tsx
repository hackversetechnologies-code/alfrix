import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles, HelpCircle, Layers } from "lucide-react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return {
    title: service ? `${service.title} — Digital Engineering` : "Service",
    description: service?.summary,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Filter relevant projects based on service category
  const relevantProjects = projects.filter((p) => {
    if (service.slug === "website-development") {
      return p.category === "Websites";
    }
    if (service.slug === "web-applications") {
      return p.category === "Web Applications" || p.adminUrl !== undefined;
    }
    if (service.slug === "mobile-app-development") {
      return p.category === "Mobile Applications";
    }
    return p.verified;
  }).slice(0, 3);

  const relatedServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* ── Hero Section with Visual Backdrop ────────────────── */}
      <section className="relative overflow-hidden border-b border-white/10 bg-bg">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
        </div>

        <div className="wrap relative z-10 py-24 md:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
            <Sparkles size={13} />
            <span>Dedicated Service</span>
          </div>

          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight text-soft md:text-6xl">
            {service.heroHeadline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {service.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-p">
              Start a Project <ArrowRight size={16} />
            </Link>
            <Link href="/work" className="btn-s">
              View Verified Work
            </Link>
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-10 flex flex-wrap items-center gap-2 pt-6 border-t border-white/10">
            <span className="text-xs font-medium text-muted mr-2">Core Tech:</span>
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-card px-2.5 py-1 text-xs text-soft font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deep Service Explanation ─────────────────────────── */}
      <section className="wrap py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="label">Overview & Approach</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-soft md:text-3xl">
              Engineered for Performance, Scalability, and Clean Maintenance.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {service.explanation}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(36,75,42,0.3)]">
              <Image
                src={service.image}
                alt={`${service.title} illustration`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Problems Solved vs Capabilities ───────────────────── */}
      <section className="bg-bg2 py-20 border-y border-white/10">
        <div className="wrap grid gap-10 lg:grid-cols-2">
          {/* Business Problems */}
          <div className="rounded-2xl border border-red-500/20 bg-card p-8">
            <div className="flex items-center gap-2.5">
              <AlertCircle size={20} className="text-red-400" />
              <h3 className="font-display text-xl font-bold text-soft">
                Challenges This Service Solves
              </h3>
            </div>
            <p className="mt-3 text-sm text-muted">
              Common friction points and business liabilities our engineering directly addresses:
            </p>
            <ul className="mt-6 space-y-3.5">
              {service.problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/80" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="rounded-2xl border border-lime/30 bg-card p-8">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={20} className="text-lime" />
              <h3 className="font-display text-xl font-bold text-soft">
                What We Build & Deliver
              </h3>
            </div>
            <p className="mt-3 text-sm text-muted">
              Technical capabilities and architectural disciplines integrated into each deployment:
            </p>
            <ul className="mt-6 space-y-3.5">
              {service.caps.map((cap) => (
                <li key={cap} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  <span className="text-soft">{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {service.note && (
          <div className="wrap mt-8">
            <div className="rounded-xl border border-lime/40 bg-card p-5 text-sm text-muted">
              <span className="font-semibold text-lime">Architectural Note: </span>
              {service.note}
            </div>
          </div>
        )}
      </section>

      {/* ── Concrete Deliverables ────────────────────────────── */}
      <section className="wrap py-20">
        <div className="max-w-2xl">
          <p className="label">Tangible Deliverables</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-soft md:text-3xl">
            What You Receive Upon Completion
          </h2>
          <p className="mt-3 text-sm text-muted">
            We deliver complete, production-ready systems with full documentation and deployment assets.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {service.deliverables.map((item, idx) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-card p-5 flex items-start gap-3.5 transition hover:border-lime/40"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-lime/10 text-xs font-bold text-lime font-mono">
                0{idx + 1}
              </div>
              <p className="text-sm leading-relaxed text-muted">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Real-World Use Cases ─────────────────────────────── */}
      <section className="bg-bg2 py-20 border-y border-white/10">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="label">Practical Applications</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-soft md:text-3xl">
              Example Use Cases
            </h2>
            <p className="mt-3 text-sm text-muted">
              How businesses apply this capability to create operational efficiencies and unlock new revenue.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {service.useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-2xl border border-white/10 bg-card p-6 transition hover:border-lime/40"
              >
                <div className="flex items-center gap-2">
                  <Layers size={18} className="text-lime" />
                  <h3 className="font-display text-lg font-semibold text-soft">
                    {useCase.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {useCase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service-Specific Development Process ─────────────── */}
      <section className="wrap py-20">
        <div className="max-w-2xl">
          <p className="label">Step-by-Step Methodology</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-soft md:text-3xl">
            How We Execute This Service
          </h2>
          <p className="mt-3 text-sm text-muted">
            A transparent, disciplined roadmap keeping you informed at every milestone.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {service.process.map((step) => (
            <div
              key={step.step}
              className="rounded-xl border border-white/10 bg-card p-5 relative flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-2xl font-bold text-lime font-mono">
                  {step.step}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-soft">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Relevant Portfolio Work ──────────────────────────── */}
      {relevantProjects.length > 0 && (
        <section className="bg-bg2 py-20 border-y border-white/10">
          <div className="wrap">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="label">Proven Proof of Work</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-soft md:text-3xl">
                  Relevant Work in This Domain
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Real projects and applications engineered for actual businesses and use cases.
                </p>
              </div>
              <Link href="/work" className="btn-s inline-flex items-center gap-1.5">
                Explore All Projects <ArrowRight size={14} />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relevantProjects.map((p) => (
                <ProjectCard key={p.slug} p={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Frequently Asked Questions ───────────────────────── */}
      <section className="wrap py-20">
        <div className="max-w-2xl">
          <p className="label">Clarity & Expectations</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-soft md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-muted">
            Direct, transparent answers regarding scope, security, and technical delivery.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {service.faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl border border-white/10 bg-card p-6"
            >
              <div className="flex items-start gap-3">
                <HelpCircle size={18} className="mt-0.5 shrink-0 text-lime" />
                <div>
                  <h3 className="font-display text-base font-semibold text-soft">
                    {faq.q}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <section className="glow border-t border-white/10 bg-bg py-24 text-center">
        <div className="wrap">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-soft md:text-4xl">
            Ready to Build Your {service.shortTitle}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Share your requirements or project idea with ALFRIX TECH. We will review your specifications and provide a realistic roadmap.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-p">
              Start a Project <ArrowRight size={16} />
            </Link>
            <Link href="/work" className="btn-s">
              Explore Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related Services ─────────────────────────────────── */}
      <section className="wrap py-16 border-t border-white/10">
        <p className="label">Other Services</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {relatedServices.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="btn-s text-xs"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
