import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Intro = () => {
  const overlay = useRef(null);
  const mark = useRef(null);
  const words = useRef(null);
  const line = useRef(null);
  const [active, setActive] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (!active) return undefined;
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        delay: 0.1,
        onComplete: () => setActive(false),
      });
      timeline
        .fromTo(
          "[data-intro-meta]",
          { opacity: 0, y: -12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: "power3.out",
          },
        )
        .fromTo(
          mark.current,
          { y: "115%", rotate: 4 },
          { y: "0%", rotate: 0, duration: 1.15, ease: "expo.out" },
          "<0.05",
        )
        .fromTo(
          words.current.children,
          { y: 26, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.09,
            ease: "power3.out",
          },
          "<0.42",
        )
        .to(
          line.current,
          { scaleX: 1, duration: 1.15, ease: "expo.inOut" },
          "<0.1",
        )
        .to(
          words.current.children,
          {
            y: -18,
            opacity: 0,
            duration: 0.38,
            stagger: 0.05,
            ease: "power2.in",
          },
          "+=0.35",
        )
        .to(
          mark.current,
          {
            letterSpacing: "0.03em",
            scale: 1.18,
            duration: 0.65,
            ease: "power3.in",
          },
          "<",
        )
        .to(
          overlay.current,
          { clipPath: "inset(0 0 100% 0)", duration: 1.1, ease: "expo.inOut" },
          "<0.18",
        );
    });
    return () => context.revert();
  }, [active]);

  if (!active) return null;
  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-[100] overflow-hidden bg-[#080808] text-stone-100"
    >
      <div className="intro-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="absolute inset-x-7 top-7 flex items-center justify-between font-mono text-[9px] uppercase tracking-[.22em] text-stone-500 sm:inset-x-10 sm:top-10">
        <span data-intro-meta>Achhyut Baral / Portfolio</span>
        <span data-intro-meta>01 - 01 / 2026</span>
      </div>
      <div className="absolute inset-x-7 bottom-7 flex items-center justify-between font-mono text-[9px] uppercase tracking-[.22em] text-stone-500 sm:inset-x-10 sm:bottom-10">
        <span data-intro-meta>Open to opportunities</span>
        <span data-intro-meta>Pokhara, Nepal</span>
      </div>
      <div className="absolute left-1/2 top-1/2 w-[min(92vw,1100px)] -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-hidden">
          <div
            ref={mark}
            className="text-center text-[clamp(8rem,28vw,22rem)] font-semibold leading-[.73] tracking-[-.095em]"
          >
            AB
          </div>
        </div>
        <div
          ref={words}
          className="mt-10 flex justify-center gap-3 overflow-hidden font-mono text-[10px] uppercase tracking-[.22em] text-stone-400 sm:gap-7 sm:text-xs"
        >
          <span>Imagine</span>
          <i className="h-1.5 w-1.5 self-center rounded-full bg-stone-500" />
          <span>Engineer</span>
          <i className="h-1.5 w-1.5 self-center rounded-full bg-stone-500" />
          <span>Elevate</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10">
        <div ref={line} className="h-full origin-left scale-x-0 bg-stone-100" />
      </div>
    </div>
  );
};
export default Intro;