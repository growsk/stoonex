"use client";

import { useState, useTransition } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { submitContact } from "@/app/contact/actions";

const SERVICES = [
  "Landscaping",
  "Fencing",
  "Paving Stone",
  "Wall Stone",
  "Multiple services",
  "Not sure yet",
];

export function ContactForm() {
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<
    { state: "idle" } | { state: "ok" } | { state: "err"; message: string }
  >({ state: "idle" });

  if (status.state === "ok") {
    return (
      <div className="py-10 text-center">
        <CheckCircle2
          size={48}
          strokeWidth={1.4}
          className="text-forest mx-auto mb-6"
        />
        <h3 className="display text-3xl lg:text-4xl text-ink mb-4">
          Thanks — we&apos;ll be in touch.
        </h3>
        <p className="text-muted max-w-md mx-auto">
          We&apos;ve received your request and will respond within one business
          day. If your project is urgent, give us a call at{" "}
          <a href="tel:+13062220409" className="link-underline text-ink">
            306-222-0409
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        startTransition(async () => {
          const res = await submitContact(fd);
          if (res.ok) setStatus({ state: "ok" });
          else setStatus({ state: "err", message: res.error || "Something went wrong." });
        });
      }}
      className="space-y-7"
    >
      {/* honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <Field name="name" label="Full Name" required placeholder="Your name" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <Field name="email" label="Email" type="email" required placeholder="you@example.com" />
        <Field name="phone" label="Phone" type="tel" placeholder="306-555-0123" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="eyebrow text-muted">
          Service Interest <span className="text-forest">*</span>
        </label>
        <select name="service" required defaultValue="" className="field">
          <option value="" disabled>
            Choose one…
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <Field
        name="location"
        label="Approx. Location"
        placeholder="e.g. Stonebridge, Saskatoon"
      />

      <div className="flex flex-col gap-2">
        <label className="eyebrow text-muted">
          About the Project <span className="text-forest">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Property size, what you'd like built, ideal timeline…"
          className="field resize-none"
        />
      </div>

      {status.state === "err" && (
        <div className="p-4 border border-red-600/30 bg-red-50 text-red-700 text-sm">
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? "Sending…" : (
          <>
            Send my request
            <ArrowUpRight size={16} strokeWidth={1.6} />
          </>
        )}
      </button>

      <p className="text-xs text-muted">
        We respond within one business day. Your details are used only to
        prepare your quote — never shared.
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="eyebrow text-muted">
        {label} {required && <span className="text-forest">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="field"
        autoComplete={
          name === "name"
            ? "name"
            : name === "email"
            ? "email"
            : name === "phone"
            ? "tel"
            : "off"
        }
      />
    </div>
  );
}
