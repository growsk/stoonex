import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { serviceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas — Saskatoon + 50 km Radius",
  description:
    "Stoonex Services builds across Saskatoon, Warman, Martensville, Osler, Dalmeny, Langham, Asquith, Vanscoy, Delisle, Aberdeen, Clavet, Allan, Hague, Borden, and Hepburn.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Work"
        title="Saskatoon &"
        serif="50 km in every direction."
        subtitle="From Stonebridge to Warman, Martensville to Allan — if you can get there from Saskatoon in under an hour, we build there."
      />

      <section className="px-6 lg:px-10 mx-auto max-w-[1600px] pb-24 lg:pb-36">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-sand border border-sand">
          {serviceAreas.map((a) => (
            <Link
              key={a.slug}
              href={`/service-areas/${a.slug}`}
              className="group bg-cream p-6 lg:p-8 flex items-start justify-between gap-3 hover:bg-ink hover:text-cream transition-colors duration-300"
            >
              <div>
                <div className="display text-3xl lg:text-4xl">{a.name}</div>
                <div className="eyebrow opacity-60 mt-2 group-hover:opacity-90">
                  {a.distanceKm === 0 ? "Home base" : `${a.distanceKm} km`}
                </div>
              </div>
              <ArrowUpRight
                size={18}
                strokeWidth={1.6}
                className="opacity-50 group-hover:opacity-100 group-hover:rotate-45 transition-all shrink-0 mt-1"
              />
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
