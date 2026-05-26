import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
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
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-6 left-0 right-0 text-center display text-[22vw] leading-none text-ink/[0.06]"
      >
        QUALITY YOU CAN TRUST
      </div>
    </section>
  );
}
