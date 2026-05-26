import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Landscaping, Fencing, Paving & Wall Stone",
  description:
    "Four crafts, one uncompromising standard. Stoonex Services builds landscaping, fencing, paving stone, and wall stone projects across Saskatoon and central Saskatchewan.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Build"
        title="Four crafts."
        serif="one standard."
        subtitle="Landscaping, fencing, paving stone, wall stone. Every project drawn to scale, installed by a single crew, backed by a 10-year workmanship warranty."
      />

      <section className="px-6 lg:px-10 mx-auto max-w-[1600px] pb-24 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 bg-sand">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative bg-cream reveal"
            >
              <div className="card-img aspect-[5/4] relative">
                <Image
                  src={s.heroImage}
                  alt={`${s.title} by Stoonex Services in Saskatoon`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute top-5 left-5 eyebrow bg-cream text-ink px-3 py-1.5">
                  0{i + 1}
                </span>
              </div>
              <div className="px-6 lg:px-10 py-8 lg:py-12 flex items-start justify-between gap-6 border-t border-sand">
                <div className="flex-1">
                  <h2 className="display text-5xl lg:text-7xl text-ink mb-4">
                    {s.title}
                  </h2>
                  <p className="text-base lg:text-lg text-muted max-w-md">
                    {s.short}
                  </p>
                </div>
                <span className="shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-full border border-ink/30 group-hover:bg-ink group-hover:text-cream group-hover:border-ink transition-all duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={20} strokeWidth={1.6} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
