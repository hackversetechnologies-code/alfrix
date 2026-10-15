import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return {
    title: article?.title ?? "Insight",
    description: article?.summary,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function renderBody(body: string) {
  // Split on double newlines for paragraphs. **text** becomes bold.
  return body.split("\n\n").map((block, i) => {
    const isBold = block.startsWith("**") && block.includes("**");
    if (isBold) {
      const text = block.replace(/\*\*/g, "");
      return (
        <h3 key={i} className="mt-8 font-display text-lg font-semibold text-soft">
          {text}
        </h3>
      );
    }
    return (
      <p key={i} className="mt-4 text-sm leading-relaxed text-muted">
        {block}
      </p>
    );
  });
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <section className="glow">
        <div className="wrap py-20 md:py-28">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-lime"
          >
            <ArrowLeft size={14} /> Back to Insights
          </Link>
          <p className="label mt-6">{article.category}</p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-4xl">
            {article.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted">
            <span>{formatDate(article.publishedAt)}</span>
            <span>·</span>
            <span>{article.readingTime} read</span>
          </div>
        </div>
      </section>

      <section className="wrap max-w-3xl py-12">
        <p className="text-base text-muted">{article.summary}</p>
        <div className="mt-8 border-t border-white/10 pt-8">
          {renderBody(article.body)}
        </div>
      </section>

      {/* Related articles */}
      {others.length > 0 && (
        <section className="bg-bg2 py-16">
          <div className="wrap">
            <p className="label">More from the desk</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {others.map((a) => (
                <Link
                  key={a.slug}
                  href={`/insights/${a.slug}`}
                  className="group rounded-2xl border border-white/10 bg-card p-6 transition hover:border-lime/40"
                >
                  <p className="label">{a.category}</p>
                  <h2 className="mt-2 font-display text-lg font-semibold text-soft group-hover:text-lime transition-colors">
                    {a.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted line-clamp-2">{a.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-lime">
                    Read article <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="glow">
        <div className="wrap py-20 text-center">
          <h2 className="mx-auto max-w-xl font-display text-2xl font-bold">
            Ready to start a project?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Tell us what you&apos;re building and we&apos;ll help you figure out the right approach.
          </p>
          <Link href="/contact" className="btn-p mt-8 inline-flex">
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
