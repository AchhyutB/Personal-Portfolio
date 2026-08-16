import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Intro = () => {
  const overlay = useRef(null);
  const mark = useRef(null);
  const fill = useRef(null);
  const outline = useRef(null);
  const [active, setActive] = useState(() => !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const date = new Intl.DateTimeFormat(undefined, { weekday: "short", day: "2-digit", month: "short", year: "numeric" }).format(now);
      const time = new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZoneName: "short" }).format(now);
      setLocalTime(`${date} / ${time}`);
    };
    updateClock();
    const clock = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(clock);
  }, []);

  useEffect(() => {
    if (!active) return undefined;
    const timer = window.setTimeout(() => setActive(false), 3500);
    const context = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline
        .fromTo("[data-intro-meta]", { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: .45, stagger: .08, ease: "power3.out" })
        .fromTo(mark.current, { opacity: 0, rotationX: 60, rotationY: -65, z: -220, scale: .58 }, { opacity: 1, rotationX: 0, rotationY: 0, z: 0, scale: 1, duration: 1.15, ease: "expo.out" }, "<.1")
        .fromTo(outline.current, { opacity: 0, scale: 1.16 }, { opacity: .58, scale: 1, duration: .75, ease: "expo.out" }, "<.2")
        .fromTo(fill.current, { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", duration: .92, ease: "expo.inOut" }, "<.08")
        .to(mark.current, { rotationY: 12, rotationX: -5, z: 100, scale: 1.08, duration: .55, ease: "power3.in" }, "+=.45")
        .to(overlay.current, { clipPath: "inset(0 0 100% 0)", duration: .8, ease: "expo.inOut" }, "<.06");
    });
    return () => { window.clearTimeout(timer); context.revert(); };
  }, [active]);

  if (!active) return null;
  return <div ref={overlay} className="fixed inset-0 z-[100] overflow-hidden bg-[#080808] text-stone-100"><div className="intro-grid pointer-events-none absolute inset-0 opacity-45" /><div className="intro-scan pointer-events-none absolute inset-x-0 top-0 h-px bg-white/50" />
    <div className="absolute inset-x-7 top-7 flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[.18em] text-stone-500 sm:inset-x-10 sm:top-10 sm:tracking-[.22em]"><span data-intro-meta>Achhyut Baral / Portfolio</span><span data-intro-meta className="text-right">{localTime || "Loading local time"}</span></div>
    <div className="absolute inset-x-7 bottom-7 flex items-center justify-between font-mono text-[9px] uppercase tracking-[.18em] text-stone-500 sm:inset-x-10 sm:bottom-10"><span data-intro-meta>Independent developer</span><span data-intro-meta>Welcome</span></div>
    <div className="absolute left-1/2 top-1/2 w-[min(94vw,1200px)] -translate-x-1/2 -translate-y-1/2"><div ref={mark} className="intro-mark-3d relative mx-auto aspect-[2.2/1] max-h-[420px] max-w-[900px]"><span ref={outline} className="absolute inset-0 flex items-center justify-center text-[clamp(9rem,28vw,24rem)] font-semibold leading-none tracking-[-.105em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,.45)]">AB</span><span className="intro-depth absolute inset-0 flex items-center justify-center text-[clamp(9rem,28vw,24rem)] font-semibold leading-none tracking-[-.105em] text-stone-700">AB</span><span ref={fill} className="absolute inset-0 flex items-center justify-center text-[clamp(9rem,28vw,24rem)] font-semibold leading-none tracking-[-.105em] text-stone-100">AB</span></div><p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[.28em] text-stone-500">Imagine / Engineer / Elevate</p></div>
  </div>;
};
export default Intro;
