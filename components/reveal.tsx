"use client";

import { useEffect } from "react";

export function Reveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) =>
        el.classList.add("is-in")
      );
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => io.observe(el));

    const mo = new MutationObserver(() => {
      document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => {
        io.observe(el);
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
