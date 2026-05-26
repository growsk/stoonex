"use client";

import { useEffect, useRef, useState } from "react";

export function Stat({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const dur = 1400;
        const step = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(value * eased));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <div className="stat-num text-[88px] lg:text-[140px] text-ink tabular-nums">
        {n}
        <span className="text-forest">{suffix}</span>
      </div>
      <div className="eyebrow text-muted">{label}</div>
    </div>
  );
}
