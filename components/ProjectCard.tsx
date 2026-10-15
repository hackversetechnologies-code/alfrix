import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition hover:border-lime/50 hover:shadow-[0_0_25px_rgba(181,243,106,0.12)]">
      {/* Project Visual Showcase */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg2">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        
        <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
          <span className="rounded-full border border-lime/40 bg-bg/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-lime">
            {p.kind}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-soft transition-colors group-hover:text-lime">
          {p.title}
        </h3>

        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
          {p.summary}
        </p>

        {/* Tags */}
        {p.tags && p.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded border border-white/5 bg-bg3/80 px-2 py-0.5 text-[11px] text-muted font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Links */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4 text-xs font-semibold">
          <Link
            href={`/work/${p.slug}`}
            className="inline-flex items-center gap-1 text-soft transition hover:text-lime"
          >
            Project Details <ArrowRight size={13} />
          </Link>

          <div className="flex items-center gap-3">
            {p.url && (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-lime hover:underline"
              >
                {p.category === "Websites" ? "Live Site" : "Live Build"}
                <ArrowUpRight size={13} />
              </a>
            )}
            {p.adminUrl && (
              <a
                href={p.adminUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted hover:text-lime"
              >
                Admin <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
