import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { services, site } from "@/lib/site";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} in Saskatoon`,
    description: service.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.title} in Saskatoon — Stoonex Services`,
      description: service.description,
      images: [{ url: service.heroImage, width: 2000, height: 1500 }],
    },
  };
}

const processSteps = {
  landscaping: [
    ["Site Walkthrough", "On-site assessment, drainage check, sun mapping"],
    ["Design & Plan", "CAD layout, plant list, lighting plan"],
    ["Install", "Grading, sod or turf, beds, lighting, rock features"],
    ["Walk-Through", "Final review, care instructions, photos"],
  ],
  fencing: [
    ["Measure & Quote", "Property lines verified, post layout marked"],
    ["Demo", "Old fence removed and hauled away same day"],
    ["Install", "Posts set 3–4 ft deep in concrete, panels plumb"],
    ["Hardware", "Self-closing hinges, soft-close latches, final adjust"],
  ],
  paving: [
    ["Excavation", "Dig to depth, geo-textile fabric"],
    ["Base Prep", "8″ of compacted road base in 2″ lifts"],
    ["Lay & Cut", "Pavers to pattern, edge restraint, precision cuts"],
    ["Joint & Seal", "Polymeric sand, sweep, compact, optional sealing"],
  ],
  "wall-stone": [
    ["Survey", "Grade analysis, height check, base layout"],
    ["Foundation", "Compacted base, levelled course, drainage tile"],
    ["Coursing", "Each course pinned, plumbed, and backfilled"],
    ["Cap & Finish", "Cap stones glued, planters dressed, site cleaned"],
  ],
} as const;

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  const steps = processSteps[slug as keyof typeof processSteps];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "LocalBusiness", name: site.name, telephone: `+1-${site.phone}` },
    areaServed: { "@type": "City", name: "Saskatoon" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero
        eyebrow="Services"
        title={service.title}
        serif="built to last."
        subtitle={service.description}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* What's included */}
      <section className="px-6 lg:px-10 mx-auto max-w-[1600px] py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 reveal">
            <p className="eyebrow text-muted mb-5">What&apos;s included</p>
            <h2 className="display text-5xl lg:text-7xl text-ink leading-[0.95]">
              The whole job.
              <br />
              <span className="serif-italic normal-case lowercase text-forest">no surprises.</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-sand border border-sand">
              {service.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-4 p-6 lg:p-8 bg-cream reveal"
                >
                  <span className="shrink-0 mt-1 w-8 h-8 inline-flex items-center justify-center bg-lime text-ink">
                    <Check size={16} strokeWidth={2} />
                  </span>
                  <span className="text-base lg:text-lg text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-cream-2 border-y border-sand py-20 lg:py-32 px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-20">
            <div className="reveal">
              <p className="eyebrow text-muted mb-5">Our Process</p>
              <h2 className="display text-5xl lg:text-7xl text-ink leading-[0.95]">
                Four steps.
                <br />
                <span className="serif-italic normal-case lowercase text-forest">no shortcuts.</span>
              </h2>
            </div>
          </div>
          <ol className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-sand border border-sand">
            {steps.map(([t, d], i) => (
              <li
                key={t}
                className="bg-cream-2 p-6 lg:p-8 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="display text-5xl lg:text-6xl text-forest mb-6">
                  0{i + 1}
                </div>
                <h3 className="display text-2xl lg:text-3xl text-ink mb-3">{t}</h3>
                <p className="text-sm text-muted leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 lg:px-10 mx-auto max-w-[1600px] py-20 lg:py-32">
        <p className="eyebrow text-muted mb-5 reveal">Recent {service.title} Projects</p>
        <h2 className="display text-5xl lg:text-7xl text-ink leading-[0.95] mb-14 reveal">
          The portfolio,
          <br />
          <span className="serif-italic normal-case lowercase text-forest">in pieces.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-sand">
          {service.gallery.map((g, i) => (
            <div
              key={g}
              className="card-img relative aspect-[4/5] bg-cream reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Image
                src={g}
                alt={`${service.title} project ${i + 1} by Stoonex Services`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center reveal">
          <Link href="/portfolio" className="btn btn-ghost">
            View all projects
            <ArrowUpRight size={16} strokeWidth={1.6} />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
