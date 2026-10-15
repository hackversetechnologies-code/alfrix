import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the ALFRIX TECH website.",
};

export default function TermsPage() {
  return (
    <section className="wrap max-w-3xl py-20">
      <p className="label">Legal</p>
      <h1 className="mt-3 font-display text-4xl font-bold">Terms of Service</h1>
      <p className="mt-4 text-sm text-muted">Last reviewed: October 2026</p>

      <div className="mt-10 space-y-8 text-muted [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-soft [&_p]:mt-3 [&_p]:text-sm [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:text-sm [&_ul_li]:flex [&_ul_li]:gap-2">

        <p className="text-base">
          These terms govern your use of the ALFRIX TECH website. By using this site, you agree to
          these terms. If you do not agree, please do not use the website.
        </p>

        <div>
          <h2>Use of This Website</h2>
          <p>
            This website is provided for informational purposes and to allow prospective clients to
            make inquiries. You agree to use it only for lawful purposes and in a manner that does
            not infringe the rights of others.
          </p>
        </div>

        <div>
          <h2>Accuracy of Information</h2>
          <p>
            We make reasonable efforts to keep the information on this website accurate and current.
            However, we do not warrant the completeness or accuracy of any information provided. The
            content of this website does not constitute a legally binding offer, specification, or
            guarantee of any service outcome.
          </p>
        </div>

        <div>
          <h2>Project Engagements</h2>
          <p>
            Any agreement for software development, design, or related services is governed by a
            separate written agreement between ALFRIX TECH and the client. The content of this
            website — including service descriptions, process explanations, and example project
            descriptions — does not constitute contractual terms for any engagement.
          </p>
        </div>

        <div>
          <h2>Intellectual Property</h2>
          <p>
            The content on this website, including text, design, and structure, is the property of
            ALFRIX TECH. You may not reproduce, distribute, or use it without written permission,
            except for personal, non-commercial reference purposes.
          </p>
          <p>
            Project examples and portfolio items displayed on this website are included with
            appropriate permission. Any rights in those products belong to their respective owners.
          </p>
        </div>

        <div>
          <h2>External Links</h2>
          <p>
            This website may contain links to external websites, including live project
            demonstrations. We are not responsible for the content, availability, or practices of
            external sites.
          </p>
        </div>

        <div>
          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, ALFRIX TECH shall not be liable for
            any loss or damage arising from your use of this website or your reliance on any
            information contained within it.
          </p>
        </div>

        <div>
          <h2>Changes to These Terms</h2>
          <p>
            We may update these terms from time to time. Changes will be published on this page with
            an updated review date. Continued use of the website after changes constitutes
            acceptance of the updated terms.
          </p>
        </div>

        <div>
          <h2>Contact</h2>
          <p>
            Questions about these terms can be directed to us
            {site.email ? (
              <> at <a href={`mailto:${site.email}`} className="text-lime hover:underline">{site.email}</a></>
            ) : (
              " via the contact form on this website"
            )}
            .
          </p>
        </div>
      </div>
    </section>
  );
}
