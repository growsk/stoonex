import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  serif,
  subtitle,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  serif?: string;
  subtitle?: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="pt-36 lg:pt-44 pb-16 lg:pb-24 px-6 lg:px-10 mx-auto max-w-[1600px]">
      {crumbs && (
        <nav className="flex items-center gap-2 mb-10 eyebrow text-muted">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              {c.href ? (
                <Link href={c.href} className="hover:text-ink">
                  {c.label}
                </Link>
              ) : (
                <span className="text-ink">{c.label}</span>
              )}
              {i < crumbs.length - 1 && <span className="opacity-50">/</span>}
            </span>
          ))}
        </nav>
      )}
      <p className="eyebrow text-muted mb-5 reveal">{eyebrow}</p>
      <h1 className="display text-[64px] sm:text-[96px] lg:text-[160px] leading-[0.86] text-ink reveal">
        {title}
        {serif && (
          <>
            <br />
            <span className="serif-italic normal-case lowercase text-forest">
              {serif}
            </span>
          </>
        )}
      </h1>
      {subtitle && (
        <p className="mt-10 lg:mt-14 max-w-2xl text-lg lg:text-xl text-muted leading-relaxed reveal">
          {subtitle}
        </p>
      )}
    </section>
  );
}
