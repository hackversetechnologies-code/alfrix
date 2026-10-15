import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Ideas, practical guides, and engineering perspectives from the ALFRIX TECH team.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function InsightsPage() {
  return (
    <>
      <section className="glow">
        <div className="wrap py-24 md:py-32">
          <p className="label">From the engineering desk</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
            Ideas, Insights, and Practical Technology.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Articles on software development, digital products, and the practical questions businesses
            ask before they build something.
          </p>
        </div>
      </section>

      <section className="wrap py-20">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/insights/${a.slug}`}
              className="group flex flex-col rounded-2xl border border-white/10 bg-card p-6 transition hover:border-lime/40"
            >
              <p className="label">{a.category}</p>
              <h2 className="mt-3 flex-1 font-display text-xl font-semibold leading-snug text-soft group-hover:text-lime transition-colors">
                {a.title}
              </h2>
              <p className="mt-3 text-sm text-muted line-clamp-3">{a.summary}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-muted">
                <span>{formatDate(a.publishedAt)}</span>
                <span>{a.readingTime} read</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="glow">
        <div className="wrap py-20 text-center">
          <h2 className="mx-auto max-w-xl font-display text-2xl font-bold md:text-3xl">
            Have a project you&apos;d like to discuss?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Reading helps — but a conversation is faster. Tell us what you&apos;re building.
          </p>
          <Link href="/contact" className="btn-p mt-8 inline-flex">
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
