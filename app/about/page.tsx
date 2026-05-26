import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Stoonex Services is a small Saskatoon crew with a long view of every job. Founded in 2020 — landscaping, fencing, paving, and wall stone built like a studio.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Small crew."
        serif="long view."
        subtitle={`Stoonex Services is a Saskatoon-based outdoor construction studio. Founded in ${site.founded}, we build landscaping, fencing, paving stone, and wall stone projects across central Saskatchewan — every job by the same small crew, start to finish.`}
      />

      {/* Founder spread */}
      <section className="px-6 lg:px-10 mx-auto max-w-[1600px] py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-6 reveal">
            <div className="card-img relative aspect-[4/5]">
              <Image
                src="/projects/deck-install-crew.jpg"
                alt="Stoonex Services crew installing a composite deck in Saskatoon"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:pt-12 reveal">
            <p className="eyebrow text-muted mb-5">Our Story</p>
            <h2 className="display text-5xl lg:text-7xl text-ink leading-[0.92] mb-8">
              Built by a crew
              <br />
              <span className="serif-italic normal-case lowercase text-forest">
                that signs every job.
              </span>
            </h2>
            <div className="space-y-5 text-base lg:text-lg text-ink/85 leading-relaxed">
              <p>
                We started in 2020 with one truck, two hands, and a refusal to
                build the kind of yards that look fine in week one and
                regrettable by year three.
              </p>
              <p>
                Today, Stoonex is still small on purpose. The crew that walks
                your property on day one is the same crew that hands you the
                final keys. No subcontractor handoffs. No drive-by foremen. No
                day-laborers cycled in to hit a deadline.
              </p>
              <p>
                We&apos;ve laid pavers through Saskatchewan winters that froze the
                ground solid by 4pm. We&apos;ve replaced 80-foot fences in two days
                flat. We&apos;ve hand-cut stone facade courses in the rain because
                the homeowner had a deadline. That&apos;s the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-2 border-y border-sand py-24 lg:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <p className="eyebrow text-muted mb-5 reveal">What We Stand For</p>
          <h2 className="display text-5xl lg:text-7xl text-ink leading-[0.95] mb-14 reveal">
            Three commitments.
            <br />
            <span className="serif-italic normal-case lowercase text-forest">
              every project.
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-sand border border-sand">
            {[
              {
                t: "Material honesty",
                d: "We use real natural stone, real cedar, real concrete pavers — never composites that look fake. We tell you what each option costs and what each option does in year ten.",
              },
              {
                t: "Single-crew accountability",
                d: "The same team that starts your job finishes it. No subcontractor handoffs. If something settles in year three, the same guy who set the base comes back to fix it.",
              },
              {
                t: "A warranty that means it",
                d: "10-year workmanship guarantee on every fence, wall, and paver we install. Settling, leaning, sinking? We come back, full stop.",
              },
            ].map((v, i) => (
              <div
                key={v.t}
                className="bg-cream-2 p-8 lg:p-10 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="display text-5xl text-forest mb-8">
                  0{i + 1}
                </div>
                <h3 className="display text-3xl lg:text-4xl text-ink mb-4">{v.t}</h3>
                <p className="text-muted leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-ink text-cream py-20 lg:py-28 px-6 lg:px-10 relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
          {[
            ["250+", "Projects completed"],
            ["6", `Years in ${site.city}`],
            ["5★", "Average rating"],
            ["100%", "Saskatoon-owned"],
          ].map(([v, l]) => (
            <div key={l} className="reveal">
              <div className="stat-num text-[72px] lg:text-[140px] tabular-nums">
                {v}
              </div>
              <div className="eyebrow text-cream/60 mt-3">{l}</div>
            </div>
          ))}
        </div>
        <div
          aria-hidden
          className="pointer-events-none select-none absolute -bottom-3 left-0 right-0 text-center display text-[20vw] leading-none text-cream/[0.04]"
        >
          STOONEX
        </div>
      </section>

      <CtaBand />
    </>
  );
}
