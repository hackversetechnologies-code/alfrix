import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";
import { Mail, MessageSquare, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with ALFRIX TECH. Share your idea, business challenge, or the digital product you have in mind.",
};

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

export default function ContactPage() {
  return (
    <>
      <section className="glow relative border-b border-white/10">
        <div className="wrap py-24 md:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
            <Sparkles size={13} />
            <span>Direct Client Access</span>
          </div>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-soft md:text-5xl">
            Tell Us What You&apos;re Building.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Share your idea, your business challenge, or the digital product you have in mind.
            We&apos;ll review the details to understand your requirements and propose the next steps.
          </p>
        </div>
      </section>

      <section className="wrap py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-card p-7 md:p-9 shadow-xl">
              <p className="label mb-2">Project Inquiry Form</p>
              <h2 className="font-display text-2xl font-bold text-soft mb-6">
                Send Project Brief
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Sidebar & Direct Channels */}
          <aside className="space-y-8 lg:col-span-5">
            {/* What Happens Next */}
            <div className="rounded-2xl border border-white/10 bg-card p-6">
              <p className="label">What Happens Next</p>
              <ol className="mt-4 space-y-4 text-sm text-muted">
                <li className="flex gap-3">
                  <span className="font-mono font-bold text-lime">01</span>
                  <span>We thoroughly review your requirements and business goals.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono font-bold text-lime">02</span>
                  <span>We follow up directly with clarifying questions or suggestions.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono font-bold text-lime">03</span>
                  <span>We provide an agreed technical architecture, scope, and timeline.</span>
                </li>
              </ol>
            </div>

            {/* Direct Email & Social Channels */}
            <div className="rounded-2xl border border-white/10 bg-card p-6">
              <p className="label">Social & Direct Channels</p>
              <p className="mt-2 text-sm text-muted">
                Connect with our team across our verified channels using{" "}
                <span className="font-mono font-semibold text-lime">{site.handle}</span>
              </p>

              <div className="mt-5 space-y-3">
                {site.email && (
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-bg3 p-3 text-sm text-soft transition hover:border-lime/40 hover:text-lime"
                  >
                    <Mail size={16} className="text-lime" />
                    <span>{site.email}</span>
                  </a>
                )}

                <a
                  href={site.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-bg3 p-3 text-sm text-soft transition hover:border-lime/40 hover:text-lime"
                >
                  <div className="flex items-center gap-3">
                    <TikTokIcon className="h-4 w-4 text-lime" />
                    <span>TikTok</span>
                  </div>
                  <span className="font-mono text-xs text-muted">{site.handle}</span>
                </a>

                <a
                  href={site.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-bg3 p-3 text-sm text-soft transition hover:border-lime/40 hover:text-lime"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare size={16} className="text-lime" />
                    <span>X (Twitter)</span>
                  </div>
                  <span className="font-mono text-xs text-muted">{site.handle}</span>
                </a>

                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-bg3 p-3 text-sm text-soft transition hover:border-lime/40 hover:text-lime"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-lime">IG</span>
                    <span>Instagram</span>
                  </div>
                  <span className="font-mono text-xs text-muted">{site.handle}</span>
                </a>

                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-bg3 p-3 text-sm text-soft transition hover:border-lime/40 hover:text-lime"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-lime">GH</span>
                    <span>GitHub</span>
                  </div>
                  <span className="font-mono text-xs text-muted">{site.handle}</span>
                </a>
              </div>
            </div>

            {/* Engineering Promise */}
            <div className="rounded-xl border border-lime/30 bg-bg3/60 p-5">
              <p className="text-sm font-semibold text-soft">Dependable Delivery</p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                We do not simulate submissions or make exaggerated claims. When you submit a project brief to ALFRIX TECH, it goes straight to our lead engineers.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
