"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { services } from "@/data/services";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#", hasDropdown: true },
  { label: "Solutions", href: "/solutions" },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/90 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="ALFRIX TECH home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Primary navigation">
          {navLinks.map(({ label, href, hasDropdown }) =>
            hasDropdown ? (
              <div key={label} className="group relative">
                <button className="flex items-center gap-1 text-muted hover:text-lime">
                  {label}
                  <ChevronDown size={14} className="transition group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full w-64 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-xl border border-white/10 bg-bg3 p-2 shadow-xl">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-card hover:text-lime"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={label}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={pathname === href ? "text-lime" : "text-muted hover:text-lime"}
              >
                {label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <Link href="/contact" className="btn-p hidden md:inline-flex">
          Start a Project
        </Link>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 text-muted hover:text-lime md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="wrap flex flex-col gap-1 border-t border-white/10 pb-6 pt-4 md:hidden" aria-label="Mobile navigation">
          {navLinks
            .filter((n) => !n.hasDropdown)
            .map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm transition ${
                  pathname === href ? "text-lime" : "text-muted hover:text-lime"
                }`}
              >
                {label}
              </Link>
            ))}
          <p className="label mt-3 px-3">Services</p>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-muted hover:text-lime"
            >
              {s.title}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-p mt-4"
          >
            Start a Project
          </Link>
        </nav>
      )}
    </header>
  );
}
