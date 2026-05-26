import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { serviceAreas, services, projects, site } from "@/lib/site";

export async function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `Landscaping, Fencing & Paving in ${area.name}`,
    description: `Stoonex Services builds landscaping, fencing, paving stone, and wall-stone projects in ${area.name}, Saskatchewan. Free quotes, 10-year workmanship warranty.`,
    alternates: { canonical: `/service-areas/${slug}` },
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) return notFound();

  const localJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Outdoor Construction Services in ${area.name}`,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: `+1-${site.phone}`,
    },
    areaServed: { "@type": "City", name: area.name, addressRegion: "SK" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Service Area"
        title={area.name}
        serif="we build here."
        subtitle={`Landscaping, fencing, paving stone, and wall stone in ${area.name}${area.distanceKm > 0 ? ` — ${area.distanceKm} km from our Saskatoon home base` : ""}. Free on-site estimates, single-crew install, 10-year workmanship warranty.`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
          { label: area.name },
        ]}
      />

      {/* Services we offer in this area */}
      <section className="px-6 lg:px-10 mx-auto max-w-[1600px] py-12 lg:py-24">
        <p className="eyebrow text-muted mb-5 reveal">
          What We Build in {area.name}
        </p>
        <h2 className="display text-5xl lg:text-7xl text-ink leading-[0.95] mb-14 reveal">
          The full studio,
          <br />
          <span className="serif-italic normal-case lowercase text-forest">
            at your door.
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-sand">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group bg-cream reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="card-img aspect-[5/4] relative">
                <Image
                  src={s.heroImage}
                  alt={`${s.title} in ${area.name}, SK by Stoonex Services`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="px-6 lg:px-8 py-7 flex items-start justify-between gap-4 border-t border-sand">
                <div>
                  <h3 className="display text-3xl lg:text-4xl text-ink">
                    {s.title} in {area.name}
                  </h3>
                  <p className="text-sm text-muted mt-2 max-w-md">{s.short}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.6}
                  className="text-ink/60 group-hover:rotate-45 transition-all shrink-0 mt-2"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-cream-2 border-y border-sand py-16 lg:py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 reveal">
            <h2 className="display text-4xl lg:text-6xl text-ink leading-[0.95]">
              Got a project in {area.name}?
              <br />
              <span className="serif-italic normal-case lowercase text-forest">
                let&apos;s walk it.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3 reveal">
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
              <ArrowUpRight size={16} strokeWidth={1.6} />
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              <Phone size={14} strokeWidth={1.6} /> Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <CtaBand />

      {/* Hidden but indexed: other areas */}
      <nav aria-label="Other service areas" className="px-6 lg:px-10 mx-auto max-w-[1600px] py-12">
        <p className="eyebrow text-muted mb-6">We also serve</p>
        <ul className="flex flex-wrap gap-2">
          {serviceAreas
            .filter((a) => a.slug !== slug)
            .map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/service-areas/${a.slug}`}
                  className="inline-flex eyebrow border border-sand px-3 py-2 hover:bg-ink hover:text-cream hover:border-ink transition-colors"
                >
                  {a.name}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
}
