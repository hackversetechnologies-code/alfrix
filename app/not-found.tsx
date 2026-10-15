import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap py-40 text-center">
      <p className="label">404</p>
      <h1 className="mt-3 font-display text-4xl font-bold">Page not found.</h1>
      <p className="mx-auto mt-4 max-w-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-p">
          Back to home
        </Link>
        <Link href="/contact" className="btn-s">
          Contact us
        </Link>
      </div>
    </section>
  );
}
