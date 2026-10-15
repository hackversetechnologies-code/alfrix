import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import type { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Digital Engineering & Development",
  description:
    "ALFRIX TECH delivers website development, custom web applications, mobile applications, blockchain systems, smart contracts, and bot automations.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="glow border-b border-white/10">
        <div className="wrap py-24 md:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
            <Sparkles size={13} />
            <span>Digital Engineering Disciplines</span>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-soft md:text-6xl">
            Digital Solutions for Ambitious Ideas.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            We design, develop, and connect the technology businesses need to launch, operate, and
            scale. Explore our dedicated disciplines below.
          </p>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────────── */}
      <section className="wrap py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition hover:border-lime/50 hover:shadow-[0_0_30px_rgba(181,243,106,0.12)]"
            >
              {/* Visual Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg2">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full border border-lime/40 bg-bg/90 px-3 py-1 text-xs font-semibold text-lime backdrop-blur">
                    {s.shortTitle}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-xl font-bold text-soft transition-colors group-hover:text-lime">
                  {s.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {s.summary}
                </p>

                {/* Capabilities subset */}
                <ul className="mt-5 space-y-1.5 text-xs text-muted">
                  {s.caps.slice(0, 3).map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <span className="text-lime">—</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                  {s.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-white/5 bg-bg3/80 px-2 py-0.5 text-[10px] text-muted font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-lime">
                  <span>Explore Service Details</span>
                  <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Consultation CTA ─────────────────────────────────── */}
      <section className="glow border-t border-white/10 bg-bg py-20 text-center">
        <div className="wrap">
          <h2 className="mx-auto max-w-xl font-display text-2xl font-bold text-soft md:text-3xl">
            Not Sure Which Solution Fits Your Business?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Share what problem you are solving or what product you want to build. We will help you determine the right engineering approach.
          </p>
          <Link href="/contact" className="btn-p mt-8 inline-flex">
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
