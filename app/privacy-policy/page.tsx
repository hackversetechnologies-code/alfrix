import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ALFRIX TECH handles information submitted through this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="wrap max-w-3xl py-20">
      <p className="label">Legal</p>
      <h1 className="mt-3 font-display text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted">Last reviewed: October 2026</p>

      <div className="mt-10 space-y-8 text-muted [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-soft [&_p]:mt-3 [&_p]:text-sm [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:text-sm [&_ul_li]:flex [&_ul_li]:gap-2">

        <p className="text-base">
          This policy explains what information ALFRIX TECH collects when you use this website and
          how that information is used.
        </p>

        <div>
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly when you submit a project inquiry through the
            contact form on this website. This includes:
          </p>
          <ul>
            <li><span className="text-lime">—</span><span>Your name</span></li>
            <li><span className="text-lime">—</span><span>Your email address</span></li>
            <li><span className="text-lime">—</span><span>Your company or organisation name (if provided)</span></li>
            <li><span className="text-lime">—</span><span>The service you are enquiring about</span></li>
            <li><span className="text-lime">—</span><span>Your project description</span></li>
          </ul>
          <p>
            We do not collect any payment information, passwords, or sensitive personal data through
            this website.
          </p>
        </div>

        <div>
          <h2>How We Use Your Information</h2>
          <p>
            Information submitted through the contact form is used solely for the purpose of
            responding to your inquiry and conducting any resulting business discussion. We do not
            use your information for marketing purposes without your explicit agreement.
          </p>
        </div>

        <div>
          <h2>Who Sees Your Information</h2>
          <p>
            Your inquiry is delivered to ALFRIX TECH via a third-party email delivery service. We do
            not sell, rent, or trade your personal information with any third party for their own
            commercial purposes.
          </p>
        </div>

        <div>
          <h2>Data Retention</h2>
          <p>
            We retain inquiry information for as long as is necessary to conduct the related business
            conversation, and for a reasonable period thereafter for reference purposes. If you would
            like your information removed, contact us directly.
          </p>
        </div>

        <div>
          <h2>Cookies and Tracking</h2>
          <p>
            This website does not currently use third-party analytics, tracking pixels, or
            advertising cookies. If this changes, this policy will be updated.
          </p>
        </div>

        <div>
          <h2>Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion of personal
            information you have submitted to us. To exercise any of these rights, contact us
            directly.
          </p>
        </div>

        <div>
          <h2>Contact</h2>
          <p>
            If you have questions about this policy or how your information is handled, contact us
            {site.email ? (
              <> at <a href={`mailto:${site.email}`} className="text-lime hover:underline">{site.email}</a></>
            ) : (
              " via the contact form on this website"
            )}
            .
          </p>
        </div>

        <div>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Changes will be published on this page with
            an updated review date.
          </p>
        </div>
      </div>
    </section>
  );
}
