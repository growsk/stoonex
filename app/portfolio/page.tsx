import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio — Completed Projects",
  description:
    "Browse completed Stoonex Services projects across Saskatoon and central Saskatchewan — composite decks, white vinyl fencing, paver driveways, retaining walls, artificial turf, and landscape lighting.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Yards, walls"
        serif="& driveways."
        subtitle="Every Stoonex project, photographed at golden hour. Decks, fences, pavers, stone, turf — across Saskatoon and the prairies."
      />

      <section className="px-6 lg:px-10 mx-auto max-w-[1600px] pb-24 lg:pb-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-sand">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href="/contact"
              className="group bg-cream reveal"
              style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            >
              <div
                className="card-img relative"
                style={{ aspectRatio: i % 5 === 0 ? "4 / 5" : i % 3 === 0 ? "5 / 4" : "1 / 1.1" }}
              >
                <Image
                  src={p.image}
                  alt={`${p.title} — ${p.location}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-cream text-ink eyebrow px-2.5 py-1">
                  {p.tags[0]}
                </span>
              </div>
              <div className="px-5 lg:px-7 py-5 lg:py-7 flex items-start justify-between gap-4 border-t border-sand">
                <div>
                  <h3 className="display text-2xl lg:text-3xl text-ink">
                    {p.title}
                  </h3>
                  <p className="text-xs text-muted mt-1.5">
                    {p.location} · {p.year}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.6}
                  className="text-ink/60 group-hover:text-ink group-hover:rotate-45 transition-all shrink-0 mt-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
