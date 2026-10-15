"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactSchema, type Contact } from "@/lib/contact";

const services = [
  "Website Development",
  "Web Applications",
  "Mobile Applications",
  "Blockchain Development",
  "Smart Contracts",
  "Bot Automation",
  "Custom Software",
  "Other",
];

const fieldClass =
  "mt-1 w-full rounded-lg border border-white/10 bg-bg3 px-3 py-3 text-sm text-soft placeholder-muted focus:border-lime/50 focus:outline-none";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1 text-xs text-red-400">
      {message}
    </p>
  );
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Contact>({ resolver: zodResolver(contactSchema) });

  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  const onSubmit = async (data: Contact) => {
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setStatus({ ok: res.ok, msg: json.message });
      if (res.ok) reset();
    } catch {
      setStatus({ ok: false, msg: "Network error. Please try again." });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("website")}
      />

      <div>
        <label htmlFor="name" className="text-sm text-soft">
          Full name
        </label>
        <input id="name" className={fieldClass} {...register("name")} />
        <FieldError message={errors.name?.message} />
      </div>

      <div>
        <label htmlFor="email" className="text-sm text-soft">
          Email address
        </label>
        <input id="email" type="email" className={fieldClass} {...register("email")} />
        <FieldError message={errors.email?.message} />
      </div>

      <div>
        <label htmlFor="company" className="text-sm text-soft">
          Company or organisation{" "}
          <span className="text-muted">(optional)</span>
        </label>
        <input id="company" className={fieldClass} {...register("company")} />
      </div>

      <div>
        <label htmlFor="service" className="text-sm text-soft">
          Service required
        </label>
        <select id="service" className={fieldClass} {...register("service")}>
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <FieldError message={errors.service?.message} />
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-soft">
          Project description
        </label>
        <textarea
          id="message"
          rows={5}
          className={fieldClass}
          placeholder="Tell us what you're building, what problem you're solving, or what you'd like to improve."
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <label className="flex items-start gap-2 text-sm text-muted">
        <input type="checkbox" className="mt-1" {...register("consent")} />
        <span>
          I agree to my details being used to respond to this inquiry. We do not share your
          information with third parties.
        </span>
      </label>
      <FieldError message={errors.consent?.message} />

      <button disabled={isSubmitting} className="btn-p w-full disabled:opacity-60">
        {isSubmitting ? "Sending…" : "Send Inquiry"}
      </button>

      {status && (
        <p
          role="status"
          aria-live="polite"
          className={status.ok ? "text-sm text-lime" : "text-sm text-red-400"}
        >
          {status.msg}
        </p>
      )}
    </form>
  );
}
