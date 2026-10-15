import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Link2,
  FileCode,
  Bot,
  LayoutDashboard,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALFRIX TECH — Software, Mobile, Blockchain & Automation",
  description:
    "ALFRIX TECH builds digital products, software systems, and automations designed around real business needs.",
};

const steps: [string, string][] = [
  ["Discover", "Understand the business, users and constraints."],
  ["Plan & Design", "Define scope, user journeys and architecture."],
  ["Build", "Clean code, responsive interfaces, integrations."],
  ["Test & Refine", "Test critical workflows and fix issues."],
  ["Launch & Support", "Deploy, document, and support as agreed."],
];

const whyUs = [
  {
    title: "Purposeful Engineering",
    body: "Solutions are built around defined objectives, real workflows, and long-term usability — not feature checklists.",
  },
  {
    title: "Thoughtful User Experience",
    body: "Products should be clear, accessible, and intuitive. Good UX is not an afterthought.",
  },
  {
    title: "Maintainable Architecture",
    body: "Organised code, sensible structure, and security considerations built in from the start.",
  },
  {
    title: "Collaborative Delivery",
    body: "Clear communication, reasonable milestones, and transparent expectations throughout the project.",
  },
];

const techStack = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML & CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "Python", "Django", "REST APIs"] },
  { label: "Data", items: ["PostgreSQL", "MySQL", "SQLite", "Data modelling"] },
  { label: "Mobile", items: ["React Native", "Expo", "Android CI/CD"] },
  { label: "Blockchain", items: ["Solidity", "EVM ecosystems", "Web3 integrations", "Viem / Wagmi"] },
  { label: "Automation", items: ["Telegram Bot API", "Meta WhatsApp Cloud API", "Webhooks", "Third-party APIs"] },
];

const serviceIcons: Record<string, React.ReactNode> = {
  "website-development": <Globe size={22} className="text-lime" />,
  "web-applications": <LayoutDashboard size={22} className="text-lime" />,
  "mobile-app-development": <Smartphone size={22} className="text-lime" />,
  "blockchain-development": <Link2 size={22} className="text-lime" />,
  "smart-contracts": <FileCode size={22} className="text-lime" />,
  "bot-automation": <Bot size={22} className="text-lime" />,
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/10 bg-bg">
        {/* Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(36,75,42,0.6),transparent_70%)] pointer-events-none" />

        <div className="wrap relative z-10 pt-24 pb-16 md:pt-36 md:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
              <Sparkles size={13} />
              <span>Digital Engineering · Software · Automation</span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-soft md:text-6xl lg:text-7xl">
              We Build Digital Products That Move Businesses Forward.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              From web and mobile applications to blockchain systems and intelligent automation,
              ALFRIX TECH turns ideas into reliable digital solutions built for real-world impact.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Link href="/contact" className="btn-p">
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link href="/work" className="btn-s">
                Explore Our Work
              </Link>
            </div>

            <p className="mt-8 text-xs uppercase tracking-widest text-muted">
              Built around your business. Engineered for what comes next.
            </p>
          </div>

          {/* Cinematic Hero Visual Showcase */}
          <div className="relative mx-auto mt-14 max-w-5xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-card shadow-[0_0_50px_rgba(36,75,42,0.4)]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&auto=format&fit=crop&q=80"
                alt="ALFRIX TECH Digital Engineering Team"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />

              {/* Floating Performance Pill */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto flex items-center gap-4 rounded-xl border border-white/15 bg-bg/90 backdrop-blur-md p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-lime/20 text-lime">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-soft">
                    100% Production-Grade Engineering
                  </p>
                  <p className="text-xs text-muted">
                    No template bloat · Clean architecture · Scalable codebases
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capability Strip ────────────────────────────── */}
      <section className="border-b border-white/10 bg-bg2">
        <ul className="wrap flex flex-wrap justify-between gap-x-6 gap-y-3 py-5 text-xs font-semibold uppercase tracking-widest text-muted">
          {["Web Engineering", "Mobile Apps", "Blockchain", "Smart Contracts", "Automation", "Custom Software"].map(
            (t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-lime/80" />
                <span>{t}</span>
              </li>
            )
          )}
        </ul>
      </section>

      {/* ── Who We Are ──────────────────────────────────── */}
      <section className="wrap py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="label">Who We Are</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-snug text-soft md:text-4xl">
              Technology Built Around Real Business Needs.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              ALFRIX TECH is a software development and digital engineering company combining technical
              precision, design excellence, and practical problem-solving. We partner with clients to
              understand their commercial objectives, define the right technical approach, and deliver
              maintainable digital products that grow with their demands.
            </p>

            <div className="mt-8 space-y-3.5 text-sm text-muted">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 text-lime shrink-0" />
                <span>
                  <strong className="text-soft">Thoughtful Engineering:</strong> Clean, modular code
                  engineered for longevity rather than hasty shortcuts.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 text-lime shrink-0" />
                <span>
                  <strong className="text-soft">Practical Innovation:</strong> We apply modern
                  technologies to genuine operational use cases.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 text-lime shrink-0" />
                <span>
                  <strong className="text-soft">Dependable Execution:</strong> Transparent milestones,
                  predictable communication, and end-to-end delivery.
                </span>
              </div>
            </div>

            <Link href="/about" className="btn-s mt-9 inline-flex">
              Learn More About Us
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-card p-2 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=80"
                  alt="Modern Software Architecture"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                
                {/* Overlay Statistics */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-bg/85 backdrop-blur-md p-4 text-center">
                  <div>
                    <p className="font-display text-2xl font-bold text-lime">15+</p>
                    <p className="text-[11px] text-muted uppercase tracking-wider">Projects</p>
                  </div>
                  <div className="border-x border-white/10">
                    <p className="font-display text-2xl font-bold text-lime">6</p>
                    <p className="text-[11px] text-muted uppercase tracking-wider">Disciplines</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-lime">100%</p>
                    <p className="text-[11px] text-muted uppercase tracking-wider">Custom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Section ────────────────────────────── */}
      <section className="bg-bg2 py-24 md:py-32 border-y border-white/10">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="label">What We Do</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-soft md:text-4xl">
              Digital Solutions for Ambitious Ideas.
            </h2>
            <p className="mt-4 text-muted">
              We design, develop, and connect the technology businesses need to launch, operate, and
              scale.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition hover:border-lime/40 hover:shadow-[0_0_25px_rgba(181,243,106,0.1)]"
              >
                {/* Visual Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg2">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <div className="absolute top-4 left-4 rounded-lg bg-bg/80 backdrop-blur p-2 text-lime border border-white/10">
                    {serviceIcons[s.slug]}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-soft transition-colors group-hover:text-lime">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                    {s.summary}
                  </p>

                  <ul className="mt-5 space-y-1.5 text-xs text-muted">
                    {s.caps.slice(0, 3).map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <span className="text-lime">—</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-lime">
                    View Service Details{" "}
                    <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected Work ───────────────────────────────── */}
      <section className="wrap py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="label">Selected Work</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-soft md:text-4xl">
              Ideas Turned Into Working Products.
            </h2>
            <p className="mt-4 text-muted">
              Explore selected applications, websites, and digital systems developed to solve practical
              problems.
            </p>
          </div>
          <Link href="/work" className="btn-s">
            View All {projects.length} Projects <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      {/* ── Why Work With Us ────────────────────────────── */}
      <section className="bg-bg2 py-24 border-y border-white/10">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="label">Why Work With Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-soft md:text-4xl">
              Good Software Starts With Good Decisions.
            </h2>
            <p className="mt-4 text-muted">
              We focus on building dependable digital systems that stand the test of daily operation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyUs.map(({ title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-card p-7 transition hover:border-lime/30"
              >
                <h3 className="font-display text-xl font-bold text-soft">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Development Process ─────────────────────────── */}
      <section className="wrap py-24">
        <div className="max-w-2xl">
          <p className="label">How We Work</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-soft md:text-4xl">
            A Clear Process From Idea to Launch.
          </h2>
          <p className="mt-4 text-muted">
            Structured stages that keep development focused, predictable, and transparent.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-5">
          {steps.map(([title, desc], i) => (
            <li
              key={title}
              className="rounded-xl border border-white/10 bg-card p-5 relative flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-lime">0{i + 1}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-soft">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <Link href="/process" className="btn-s inline-flex items-center gap-1.5">
            Explore Full Development Process <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Technical Capabilities ──────────────────────── */}
      <section className="bg-bg2 py-24 border-y border-white/10">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="label">Technical Capabilities</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-soft md:text-4xl">
              The Right Technology for the Right Problem.
            </h2>
            <p className="mt-4 text-muted">
              We apply battle-tested modern tools chosen for speed, reliability, and maintainability.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {techStack.map(({ label, items }) => (
              <div key={label} className="rounded-xl border border-white/10 bg-card p-6">
                <p className="label mb-3">{label}</p>
                <ul className="space-y-2 text-sm text-muted">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-lime">—</span>
                      <span className="text-soft font-mono text-xs">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA: Let Us Build Together ──────────── */}
      <section className="glow border-t border-white/10 bg-bg py-28 text-center">
        <div className="wrap">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
            <Sparkles size={13} />
            <span>Let&apos;s Build Together</span>
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-bold text-soft md:text-5xl lg:text-6xl">
            Have an Idea? Let&apos;s Build Something That Works.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Tell us what you&apos;re planning, what problem you&apos;re trying to solve, or what
            you&apos;d like to improve. We&apos;ll help you explore the right digital solution.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <Link href="/contact" className="btn-p">
              Start a Project <ArrowRight size={16} />
            </Link>
            <Link href="/services/website-development" className="btn-s">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
