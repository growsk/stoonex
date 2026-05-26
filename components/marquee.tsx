import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  fast = false,
}: {
  items: string[];
  className?: string;
  fast?: boolean;
}) {
  const row = (
    <div className="flex items-center gap-12 px-6">
      {items.map((t, i) => (
        <span key={i} className="display text-[12vw] lg:text-[8vw] leading-none">
          {t}
          <span className="inline-block mx-6 align-middle">
            <Star />
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("overflow-hidden", className)} aria-hidden="true">
      <div className={fast ? "marquee-fast" : "marquee-track"}>
        {row}
        {row}
      </div>
    </div>
  );
}

function Star() {
  return (
    <svg
      width="0.5em"
      height="0.5em"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-lime inline-block"
    >
      <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
    </svg>
  );
}
