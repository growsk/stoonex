import Link from "next/link";
import { site } from "@/lib/site";
import { services, serviceAreas } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-cream relative overflow-hidden">
      <div className="tape h-3 w-full" aria-hidden />

      <div className="mx-auto max-w-[1600px] px-6 lg:px-10 pt-20 lg:pt-28 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6">
          <div className="lg:col-span-5">
            <p className="eyebrow text-lime mb-6">
              Quality You Can Trust · Since {site.founded}
            </p>
            <h2 className="display text-[64px] sm:text-[88px] lg:text-[120px] leading-[0.85]">
              LET&apos;S
              <br />
              <span className="serif-italic normal-case lowercase tracking-tight text-lime">
                build something.
              </span>
            </h2>
            <Link
              href="/contact"
              className="btn btn-lime mt-10 inline-flex"
            >
              Request a Quote
              <ArrowUpRight size={16} strokeWidth={1.6} />
            </Link>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <p className="eyebrow text-lime/70 mb-5">Services</p>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-lime transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-lime/70 mb-5">Navigate</p>
            <ul className="space-y-3 text-sm">
              <li><Link href="/portfolio" className="hover:text-lime">Work</Link></li>
              <li><Link href="/about" className="hover:text-lime">About</Link></li>
              <li><Link href="/service-areas" className="hover:text-lime">Service Areas</Link></li>
              <li><Link href="/contact" className="hover:text-lime">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-lime/70 mb-5">Reach Us</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="hover:text-lime block">
                  <span className="display text-2xl">{site.phone}</span>
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="hover:text-lime break-all">
                  {site.email}
                </a>
              </li>
              <li className="text-cream/70">
                {site.city}, {site.region} · {site.country}
              </li>
              <li className="text-cream/70">{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 pt-8 border-t border-cream/15 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 text-xs text-cream/55 leading-relaxed">
            Serving{" "}
            {serviceAreas
              .map((a) => a.name)
              .slice(0, -1)
              .join(", ")}
            , and {serviceAreas[serviceAreas.length - 1].name}. ICPI-method
            installation. Fully insured. WCB Saskatchewan compliant.
          </div>
          <div className="lg:col-span-5 flex flex-col lg:flex-row lg:items-center lg:justify-end gap-3 text-xs text-cream/55">
            <span>
              © {new Date().getFullYear()} {site.name}. Built in {site.city}.
            </span>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-10 left-0 right-0 text-center display text-[22vw] leading-none text-cream/[0.04]"
      >
        STOONEX
      </div>
    </footer>
  );
}
