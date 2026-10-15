"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const categories = ["All", "Websites", "Mobile Applications"] as const;
type Category = (typeof categories)[number];

export default function WorkPage() {
  const [active, setActive] = useState<Category>("All");
  const filtered = projects.filter((p) => active === "All" || p.category === active);

  return (
    <>
      <section className="glow">
        <div className="wrap py-24">
          <p className="label">Our work</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
            Projects We&apos;ve Built.
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Live websites and applications built by the ALFRIX TECH team across a range of
            industries and use cases.
          </p>
        </div>
      </section>

      <section className="wrap py-16">
        {/* Filter */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active === cat
                  ? "border-lime bg-lime text-bg"
                  : "border-white/10 text-muted hover:border-lime/40 hover:text-lime"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-muted">No projects found in this category.</p>
        )}
      </section>
    </>
  );
}
