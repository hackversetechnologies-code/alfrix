import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} — Portfolio Case Study` : "Project",
    description: project?.summary,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      {/* ── Breadcrumb & Title ───────────────────────────────── */}
      <section className="border-b border-white/10 bg-bg pt-20 pb-16">
        <div className="wrap">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-lime transition"
          >
            <ArrowLeft size={14} /> Back to All Projects
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-lime/30 bg-lime/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-lime">
              {project.kind}
            </span>
            <span className="rounded-full border border-white/10 bg-card px-3 py-0.5 text-xs text-muted">
              {project.category}
            </span>
            {project.verified && (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-xs text-emerald-400">
                <ShieldCheck size={13} />
                Verified Production Build
              </span>
            )}
          </div>

          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight text-soft md:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {project.summary}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-p inline-flex items-center gap-2"
              >
                {project.category === "Websites" ? "Visit Live Site" : "View Live Build"}
                <ArrowUpRight size={16} />
              </a>
            )}
            {project.adminUrl && (
              <a
                href={project.adminUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-s inline-flex items-center gap-2"
              >
                Access Admin Portal
                <ArrowUpRight size={16} />
              </a>
            )}
            <Link href="/contact" className="btn-s">
              Request Similar Project
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Visual Showcase ─────────────────────────── */}
      <section className="wrap -mt-8 relative z-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-bg2 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <Image
            src={project.image}
            alt={`${project.title} interface preview`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent" />
        </div>
      </section>

      {/* ── Key Features & Engineering Highlights ────────────── */}
      <section className="wrap py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Key Capabilities */}
          <div className="lg:col-span-7">
            <p className="label">Project Scope</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-soft md:text-3xl">
              Engineered Capabilities & Execution
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Built to meet practical business requirements, performance benchmarks, and dependable daily operation.
            </p>

            {project.features && project.features.length > 0 ? (
              <div className="mt-8 space-y-4">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-card p-4"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-lime" />
                    <p className="text-sm leading-relaxed text-soft">{feature}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-xl border border-white/5 bg-card p-6 text-sm text-muted">
                Detailed technical specifications and integration notes available upon client request.
              </div>
            )}
          </div>

          {/* Technical Specifications Sidebar */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-card p-7">
              <p className="label mb-4">Technical Profile</p>

              <dl className="space-y-4 text-sm divide-y divide-white/5">
                <div className="pt-2">
                  <dt className="text-muted text-xs uppercase tracking-wider">Classification</dt>
                  <dd className="mt-1 font-semibold text-soft">{project.kind}</dd>
                </div>

                <div className="pt-4">
                  <dt className="text-muted text-xs uppercase tracking-wider">Category</dt>
                  <dd className="mt-1 font-semibold text-soft">{project.category}</dd>
                </div>

                {project.tags && project.tags.length > 0 && (
                  <div className="pt-4">
                    <dt className="text-muted text-xs uppercase tracking-wider mb-2">Technologies Used</dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-white/10 bg-bg3 px-2.5 py-1 text-xs text-soft font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}

                {project.url && (
                  <div className="pt-4">
                    <dt className="text-muted text-xs uppercase tracking-wider">Public Deployment</dt>
                    <dd className="mt-1 break-all">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-lime hover:underline text-xs font-mono"
                      >
                        {project.url}
                        <ArrowUpRight size={12} />
                      </a>
                    </dd>
                  </div>
                )}

                {project.adminUrl && (
                  <div className="pt-4">
                    <dt className="text-muted text-xs uppercase tracking-wider">Administrative Access</dt>
                    <dd className="mt-1 break-all">
                      <a
                        href={project.adminUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted hover:text-lime text-xs font-mono"
                      >
                        {project.adminUrl}
                        <ArrowUpRight size={12} />
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── More Selected Projects ───────────────────────────── */}
      {others.length > 0 && (
        <section className="bg-bg2 py-20 border-t border-white/10">
          <div className="wrap">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="label">Proof of Work</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-soft md:text-3xl">
                  More Selected Projects
                </h2>
              </div>
              <Link href="/work" className="btn-s">
                View All Projects
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <ProjectCard key={p.slug} p={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <section className="glow border-t border-white/10 bg-bg py-24 text-center">
        <div className="wrap">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-bold text-soft md:text-4xl">
            Have a Project Like This in Mind?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Tell us about your business goals. We&apos;ll propose an engineered solution with transparent deliverables.
          </p>
          <Link href="/contact" className="btn-p mt-8 inline-flex">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
