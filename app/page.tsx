import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Star, Phone, MapPin } from "lucide-react";
import { Marquee } from "@/components/marquee";
import { site, services, projects, testimonials, serviceAreas } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden isolate">
        <div className="absolute inset-0 z-0">
          <Image
            src="/projects/yard-evening-lights.jpg"
            alt="Stoonex Services backyard build at dusk with warm perimeter lighting in Saskatoon"
            fill
            priority
            sizes="100vw"
            className="object-cover slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/5 to-cream pointer-events-none" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-end pt-32 pb-12 lg:pb-16 px-6 lg:px-10 mx-auto max-w-[1600px] w-full">
          <div className="flex items-center gap-3 mb-6">
            <span className="kbd-circle text-ink/80">✦</span>
            <span className="eyebrow text-ink/80">Saskatoon · Since {site.founded}</span>
          </div>

          <h1 className="display text-[16vw] sm:text-[14vw] lg:text-[11vw] text-ink leading-[0.85] tracking-tight">
            Built for
            <br />
            the <span className="serif-italic normal-case lowercase text-forest">prairies.</span>
          </h1>

          <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 max-w-[1280px]">
            <p className="text-lg lg:text-xl text-ink/85 max-w-xl leading-snug">
              Landscaping, fencing, paving stone, and wall stone — designed and
              installed by a single, accountable crew across Saskatoon and a
              50&nbsp;km radius.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                Request a Free Quote
                <ArrowUpRight size={16} strokeWidth={1.6} />
              </Link>
              <Link href="/portfolio" className="btn btn-ghost">
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 px-6 lg:px-10 pb-6 lg:pb-8 mx-auto max-w-[1600px] w-full grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 border-t border-ink/15 pt-6">
          {[
            ["Landscaping", "Sod · Turf · Lighting"],
            ["Fencing", "Vinyl · Wood · Composite"],
            ["Paving", "Driveways · Walkways · Patios"],
            ["Wall Stone", "Retaining · Facade · Feature"],
          ].map(([t, s]) => (
            <div key={t} className="flex flex-col gap-1">
              <span className="display text-2xl lg:text-3xl text-ink">{t}</span>
              <span className="text-xs text-ink/70">{s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Marquee strip ===== */}
      <section className="py-8 lg:py-10 bg-cream border-y border-sand overflow-hidden">
        <Marquee items={["Landscaping", "Fencing", "Paving", "Wall Stone", "Decks", "Turf"]} />
      </section>

      {/* ===== INTRO / MANIFESTO ===== */}
      <section className="py-28 lg:py-44 px-6 lg:px-10 mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 reveal">
            <p className="eyebrow text-muted mb-6">Our Approach</p>
            <h2 className="display text-[58px] lg:text-[88px] text-ink leading-[0.92]">
              We don&apos;t build yards.
              <br />
              <span className="serif-italic normal-case lowercase text-forest">we compose them.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 reveal">
            <p className="text-xl lg:text-2xl text-ink/85 leading-[1.45]">
              Every patio, fence, retaining wall, and lighting run is drawn to
              scale, sourced from suppliers we&apos;ve vetted for prairie weather,
              and installed by the same small crew start to finish.
            </p>
            <p className="mt-6 text-base text-muted leading-relaxed">
              No subcontractor handoffs. No rushed corners. No <i>that&apos;ll do</i>.
              Just the kind of work that&apos;s still standing — and still
              looking right — ten years from now.
            </p>
            <Link href="/about" className="mt-10 inline-flex link-underline text-ink">
              How we work <ArrowRight size={16} strokeWidth={1.6} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-24 lg:py-36 bg-cream-2 border-y border-sand">
        <div className="px-6 lg:px-10 mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-20">
            <div className="reveal">
              <p className="eyebrow text-muted mb-4">What We Build</p>
              <h2 className="display text-[52px] lg:text-[80px] leading-[0.92] text-ink">
                Four crafts.
                <br />
                <span className="serif-italic normal-case lowercase text-forest">one standard.</span>
              </h2>
            </div>
            <Link href="/services" className="link-underline eyebrow text-ink self-start lg:self-end">
              All services <ArrowRight size={14} strokeWidth={1.6} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-sand">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative bg-cream-2 reveal"
              >
                <div className="card-img aspect-[5/6] lg:aspect-[5/4] relative">
                  <Image
                    src={s.heroImage}
                    alt={`Stoonex Services ${s.title.toLowerCase()} project in Saskatoon`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute top-5 left-5 eyebrow bg-cream text-ink px-3 py-1.5">
                    0{i + 1}
                  </span>
                </div>
                <div className="px-5 lg:px-8 py-7 lg:py-10 flex items-start justify-between gap-6 border-t border-sand">
                  <div className="flex-1">
                    <h3 className="display text-4xl lg:text-6xl text-ink mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm lg:text-base text-muted max-w-md">{s.short}</p>
                  </div>
                  <span className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full border border-ink/30 group-hover:bg-ink group-hover:text-cream group-hover:border-ink transition-all duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={18} strokeWidth={1.6} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECT SPREAD ===== */}
      <section className="py-28 lg:py-44 px-6 lg:px-10 mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7 reveal">
            <div className="card-img relative aspect-[4/5] lg:aspect-[4/4.6]">
              <Image
                src={projects[0].image}
                alt={`${projects[0].title} in ${projects[0].location}`}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5 lg:pt-12 flex flex-col reveal">
            <p className="eyebrow text-muted mb-5">Featured Work</p>
            <h3 className="display text-[44px] lg:text-[68px] leading-[0.95] text-ink mb-6">
              Evergreen
              <br />
              <span className="serif-italic normal-case lowercase text-forest">evening lights.</span>
            </h3>
            <p className="text-base lg:text-lg text-muted leading-relaxed mb-10 max-w-md">
              {projects[0].summary}
            </p>
            <dl className="grid grid-cols-3 gap-6 mb-10 border-t border-sand pt-8">
              {[
                ["Location", projects[0].location.split(",")[0]],
                ["Year", projects[0].year],
                ["Scope", "Multi-trade"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="eyebrow text-muted mb-2">{k}</dt>
                  <dd className="display text-2xl lg:text-3xl text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <Link href="/portfolio" className="btn btn-ghost self-start">
              See the full portfolio
              <ArrowUpRight size={16} strokeWidth={1.6} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY ===== */}
      <section className="py-24 lg:py-36 bg-ink text-cream relative overflow-hidden">
        <div className="px-6 lg:px-10 mx-auto max-w-[1600px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16 lg:mb-24">
            <div className="lg:col-span-8 reveal">
              <p className="eyebrow text-lime mb-5">Why Stoonex</p>
              <h2 className="display text-[58px] lg:text-[110px] leading-[0.9]">
                Built for the prairies.
                <br />
                <span className="serif-italic normal-case lowercase text-lime">
                  detailed like a studio.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-cream/75 reveal">
              <p className="text-base lg:text-lg">
                Three commitments on every project — no fine print, no
                exceptions, no surprises.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-cream/10 border border-cream/10">
            {[
              {
                t: "ICPI-method install",
                d: "Eight inches of compacted base, geo-textile fabric, polymeric sand joints. Every paver, every time.",
              },
              {
                t: "Single-crew accountability",
                d: "The same team that starts your job finishes it. No subcontractor handoffs, no day-one stranger.",
              },
              {
                t: "10-year workmanship warranty",
                d: "On every fence, wall, and paver we install. Settling, leaning, or sinking? We come back.",
              },
            ].map((it, i) => (
              <div
                key={it.t}
                className="bg-ink p-8 lg:p-12 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="display text-lime text-3xl mb-8">0{i + 1}</div>
                <h3 className="display text-4xl lg:text-5xl mb-5">{it.t}</h3>
                <p className="text-cream/75 leading-relaxed">{it.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 border-t border-cream/15 pt-14">
            <div className="text-cream">
              <div className="stat-num text-[88px] lg:text-[140px] tabular-nums">
                250<span className="text-lime">+</span>
              </div>
              <div className="eyebrow text-cream/60 mt-3">Projects completed</div>
            </div>
            <div className="text-cream">
              <div className="stat-num text-[88px] lg:text-[140px] tabular-nums">
                5<span className="text-lime">★</span>
              </div>
              <div className="eyebrow text-cream/60 mt-3">Average Google rating</div>
            </div>
            <div className="text-cream">
              <div className="stat-num text-[88px] lg:text-[140px] tabular-nums">
                10<span className="text-lime">yr</span>
              </div>
              <div className="eyebrow text-cream/60 mt-3">Workmanship warranty</div>
            </div>
            <div className="text-cream">
              <div className="stat-num text-[88px] lg:text-[140px] tabular-nums">
                50<span className="text-lime">km</span>
              </div>
              <div className="eyebrow text-cream/60 mt-3">Service radius</div>
            </div>
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none select-none absolute -bottom-4 left-0 right-0 text-center display text-[18vw] leading-none text-cream/[0.045]"
        >
          STOONEX
        </div>
      </section>

      {/* ===== Portfolio strip ===== */}
      <section className="py-24 lg:py-36 px-6 lg:px-10 mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between gap-8 mb-12">
          <div className="reveal">
            <p className="eyebrow text-muted mb-5">Recent Work</p>
            <h2 className="display text-[52px] lg:text-[80px] text-ink leading-[0.95]">
              A decade of yards,
              <br />
              <span className="serif-italic normal-case lowercase text-forest">walls & driveways.</span>
            </h2>
          </div>
          <Link href="/portfolio" className="hidden md:inline-flex link-underline eyebrow text-ink">
            All projects <ArrowRight size={14} strokeWidth={1.6} />
          </Link>
        </div>

        <div className="flex gap-5 overflow-x-auto no-scrollbar -mx-6 px-6 pb-2 snap-x snap-mandatory">
          {projects.slice(0, 7).map((p) => (
            <Link
              key={p.slug}
              href="/portfolio"
              className="group shrink-0 w-[80vw] sm:w-[60vw] lg:w-[420px] snap-start reveal"
            >
              <div className="card-img relative aspect-[4/5]">
                <Image
                  src={p.image}
                  alt={`${p.title} — ${p.location}`}
                  fill
                  sizes="(min-width: 1024px) 420px, 80vw"
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-cream text-ink eyebrow px-2.5 py-1">
                  {p.tags[0]}
                </span>
              </div>
              <div className="pt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="display text-2xl lg:text-3xl text-ink">{p.title}</h3>
                  <p className="text-xs text-muted mt-1">{p.location} · {p.year}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.6}
                  className="text-ink/70 group-hover:text-ink group-hover:rotate-45 transition-all"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 lg:py-36 bg-cream-2 border-y border-sand">
        <div className="px-6 lg:px-10 mx-auto max-w-[1600px]">
          <p className="eyebrow text-muted mb-5 reveal">Homeowners</p>
          <h2 className="display text-[48px] lg:text-[80px] leading-[0.95] mb-14 lg:mb-20 reveal">
            Their <span className="serif-italic normal-case lowercase text-forest">words,</span> not ours.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-sand border border-sand">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="bg-cream-2 p-8 lg:p-10 flex flex-col reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-1 mb-6 text-forest">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="serif-italic normal-case text-[26px] lg:text-[32px] leading-[1.2] text-ink mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto pt-6 border-t border-sand">
                  <div className="display text-xl text-ink">{t.author}</div>
                  <div className="eyebrow text-muted mt-1">{t.location}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Service area ===== */}
      <section className="py-24 lg:py-36 px-6 lg:px-10 mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 reveal">
            <p className="eyebrow text-muted mb-5">Where We Work</p>
            <h2 className="display text-[52px] lg:text-[88px] leading-[0.92] text-ink mb-6">
              Saskatoon &<br />
              <span className="serif-italic normal-case lowercase text-forest">50&nbsp;km in every direction.</span>
            </h2>
            <p className="text-base lg:text-lg text-muted leading-relaxed max-w-md mb-10">
              From Stonebridge to Warman, Martensville to Allan — if you can get
              there from Saskatoon in under an hour, we build there.
            </p>
            <Link href="/service-areas" className="btn btn-ghost self-start">
              All service areas
              <ArrowRight size={16} strokeWidth={1.6} />
            </Link>
          </div>
          <div className="lg:col-span-7 reveal">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-sand border border-sand">
              {serviceAreas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/service-areas/${a.slug}`}
                  className="group bg-cream p-5 lg:p-6 flex items-start justify-between gap-2 hover:bg-ink hover:text-cream transition-colors duration-300"
                >
                  <div>
                    <div className="display text-2xl lg:text-3xl">{a.name}</div>
                    <div className="eyebrow opacity-60 mt-1.5 group-hover:opacity-80">
                      {a.distanceKm === 0 ? "Home base" : `${a.distanceKm} km`}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.6}
                    className="opacity-50 group-hover:opacity-100 group-hover:rotate-45 transition-all"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Final CTA band ===== */}
      <section className="bg-lime text-ink py-24 lg:py-32 px-6 lg:px-10 relative overflow-hidden border-y border-ink">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <div className="lg:col-span-8 reveal">
            <p className="eyebrow mb-5">Free Estimate · 48-hour Response</p>
            <h2 className="display text-[60px] lg:text-[120px] leading-[0.88]">
              Tell us about
              <br />
              <span className="serif-italic normal-case lowercase">your project.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3 reveal">
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
              <ArrowUpRight size={16} strokeWidth={1.6} />
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              <Phone size={14} strokeWidth={1.6} /> Call {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="link-underline eyebrow text-ink self-start mt-2"
            >
              <MapPin size={14} strokeWidth={1.6} />
              {site.email}
            </a>
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none select-none absolute -bottom-6 left-0 right-0 text-center display text-[22vw] leading-none text-ink/[0.06]"
        >
          QUALITY YOU CAN TRUST
        </div>
      </section>
    </>
  );
}
