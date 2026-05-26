import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site, serviceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Request a Free Quote",
  description:
    "Tell us about your project. Free on-site estimate, usually within 48 hours. Call 306-222-0409 or email structocontracting@gmail.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Tell us about"
        serif="your project."
        subtitle="Free on-site estimate, usually within 48 hours. We respond to every inquiry personally — no auto-responders, no junior estimators."
      />

      <section className="px-6 lg:px-10 mx-auto max-w-[1600px] pb-24 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7 reveal">
            <div className="bg-cream-2 border border-sand p-7 lg:p-12">
              <h2 className="display text-3xl lg:text-5xl text-ink mb-2">
                Request a Quote
              </h2>
              <p className="text-sm text-muted mb-10">
                Fields marked with <span className="text-forest">*</span> are required.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Direct info */}
          <div className="lg:col-span-5 reveal space-y-10">
            <Info
              eyebrow="Prefer to call?"
              icon={<Phone size={18} strokeWidth={1.6} />}
              value={site.phone}
              href={site.phoneHref}
              hint={site.hours}
              big
            />
            <Info
              eyebrow="Email"
              icon={<Mail size={18} strokeWidth={1.6} />}
              value={site.email}
              href={site.emailHref}
            />
            <Info
              eyebrow="Hours"
              icon={<Clock size={18} strokeWidth={1.6} />}
              value={site.hours}
              hint="Closed Sundays. Emergencies handled by phone."
            />
            <Info
              eyebrow="Where we work"
              icon={<MapPin size={18} strokeWidth={1.6} />}
              value={`${site.city}, ${site.region}`}
              hint={
                <>
                  Plus a 50 km radius:{" "}
                  {serviceAreas
                    .slice(1)
                    .map((a) => a.name)
                    .join(", ")}
                  .
                </>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Info({
  eyebrow,
  icon,
  value,
  href,
  hint,
  big = false,
}: {
  eyebrow: string;
  icon: React.ReactNode;
  value: string;
  href?: string;
  hint?: React.ReactNode;
  big?: boolean;
}) {
  const valueEl = (
    <div
      className={
        big
          ? "display text-4xl lg:text-6xl text-ink"
          : "text-lg text-ink break-words"
      }
    >
      {value}
    </div>
  );
  return (
    <div className="border-t border-sand pt-8">
      <div className="flex items-center gap-2 eyebrow text-muted mb-4">
        <span className="text-forest">{icon}</span>
        {eyebrow}
      </div>
      {href ? (
        <a href={href} className="hover:text-forest transition-colors">
          {valueEl}
        </a>
      ) : (
        valueEl
      )}
      {hint && (
        <p className="text-sm text-muted mt-3 leading-relaxed">{hint}</p>
      )}
    </div>
  );
}
