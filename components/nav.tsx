"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/service-areas", label: "Areas" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-400",
        scrolled
          ? "bg-cream/96 backdrop-blur-md border-b border-sand shadow-[0_4px_24px_-12px_rgba(15,15,15,0.22)]"
          : "bg-cream/92 backdrop-blur-md border-b border-sand/60"
      )}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Stoonex Services home"
          className="flex items-baseline group"
        >
          <span className="display text-[28px] lg:text-[34px] tracking-tight text-ink">
            STOONE
          </span>
          <span className="display text-[28px] lg:text-[34px] tracking-tight text-forest group-hover:rotate-6 transition-transform duration-500 inline-block origin-bottom">
            X
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="eyebrow text-ink/80 hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden md:inline-flex eyebrow text-ink/80 hover:text-ink items-center gap-2"
          >
            <Phone size={14} strokeWidth={1.6} />
            {site.phone}
          </a>
          <Link href="/contact" className="btn btn-lime hidden sm:inline-flex">
            Free Quote
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            className="lg:hidden p-2 -mr-2"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} strokeWidth={1.6} />
          </button>
        </div>
      </div>

      <div
        aria-hidden={!open}
        className="fixed top-0 left-0 right-0 h-[100dvh] z-[60] bg-cream overflow-y-auto transition-transform duration-500 lg:hidden"
        style={{ transform: open ? "translateY(0)" : "translateY(-100%)" }}
      >
        <div className="h-16 px-6 flex items-center justify-between border-b border-sand">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="display text-[28px]"
          >
            STOONE<span className="text-forest">X</span>
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="p-2 -mr-2"
          >
            <X size={22} strokeWidth={1.6} />
          </button>
        </div>
        <nav className="px-6 py-10 flex flex-col gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display text-5xl py-3 border-b border-sand"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="display text-4xl py-3 mt-6 text-forest"
          >
            {site.phone}
          </a>
          <a
            href={site.emailHref}
            className="serif-italic text-2xl py-1 text-muted"
          >
            {site.email}
          </a>
        </nav>
      </div>
    </header>
  );
}
