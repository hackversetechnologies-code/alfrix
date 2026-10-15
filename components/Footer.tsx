import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { services } from "@/data/services";
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowUpRight } from "lucide-react";

// Clean custom TikTok SVG icon
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.89-4.47V8.58a8.28 8.28 0 0 0 4.84 1.56V6.69h-.96Z" />
    </svg>
  );
}

const companyLinks = [
  { label: "Our Work", href: "/work" },
  { label: "Solutions", href: "/solutions" },
  { label: "About Us", href: "/about" },
  { label: "Our Process", href: "/process" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg2 pt-16 pb-12">
      <div className="wrap grid gap-10 md:grid-cols-4 lg:grid-cols-5">
        {/* Brand & Mission */}
        <div className="md:col-span-2">
          <Logo size="lg" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {site.description}
          </p>

          {/* Contact Details */}
          <div className="mt-5 space-y-2 text-sm">
            {site.email && (
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-muted hover:text-lime transition"
              >
                <Mail size={15} />
                <span>{site.email}</span>
              </a>
            )}
          </div>

          {/* Social Profiles with @alfrixtech */}
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-lime">
              Follow Us {site.handle}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              <a
                href={site.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ALFRIX TECH on TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-card text-muted transition hover:border-lime/40 hover:bg-lime/10 hover:text-lime"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>

              <a
                href={site.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ALFRIX TECH on X / Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-card text-muted transition hover:border-lime/40 hover:bg-lime/10 hover:text-lime"
              >
                <Twitter size={16} />
              </a>

              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ALFRIX TECH on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-card text-muted transition hover:border-lime/40 hover:bg-lime/10 hover:text-lime"
              >
                <Instagram size={16} />
              </a>

              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ALFRIX TECH on GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-card text-muted transition hover:border-lime/40 hover:bg-lime/10 hover:text-lime"
              >
                <Github size={16} />
              </a>

              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ALFRIX TECH on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-card text-muted transition hover:border-lime/40 hover:bg-lime/10 hover:text-lime"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Services Navigation */}
        <div className="lg:col-span-2">
          <p className="label mb-3">Services</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  className="inline-flex items-center gap-1 hover:text-lime transition"
                  href={`/services/${s.slug}`}
                >
                  <span>{s.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Navigation */}
        <div>
          <p className="label mb-3">Company</p>
          <ul className="space-y-2 text-sm text-muted">
            {companyLinks.map(({ label, href }) => (
              <li key={href}>
                <Link className="hover:text-lime transition" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="wrap mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted">
        <p>© {new Date().getFullYear()} ALFRIX TECH. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy-policy" className="hover:text-lime">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-lime">
            Terms of Service
          </Link>
          <span className="text-lime font-mono">{site.handle}</span>
        </div>
      </div>
    </footer>
  );
}
