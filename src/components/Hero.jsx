import profilePic from "../assets/Profile_pic.jpg";
import { HERO_CONTENT } from "../constants";
import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";
const HeroScene = lazy(() => import("./HeroScene"));

const rise = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const Hero = () => {
  const [showScene, setShowScene] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return undefined;
    const revealScene = () => setShowScene(true);
    const idleId = window.requestIdleCallback
      ? window.requestIdleCallback(revealScene, { timeout: 1800 })
      : window.setTimeout(revealScene, 700);
    return () => {
      if (window.cancelIdleCallback && typeof idleId === "number")
        window.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
    };
  }, []);
  return (
    <section
      id="top"
      className="relative isolate grid min-h-[calc(100svh-80px)] items-center gap-12 py-16 sm:py-20 lg:min-h-[calc(100svh-112px)] lg:grid-cols-[1.08fr_.92fr] lg:gap-16 lg:py-16 xl:gap-24"
    >
      {showScene && (
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      )}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
        className="relative z-10"
      >
        <motion.p
          variants={rise}
          transition={{ duration: 0.6 }}
          className="eyebrow flex items-center gap-3"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-stone-200" />
          Available for opportunities · Nepal
        </motion.p>
        <motion.h1
          variants={rise}
          transition={{ duration: 0.7 }}
          className="mt-7 max-w-4xl text-[clamp(3.8rem,8.4vw,9rem)] font-semibold leading-[.86] tracking-[-.09em] text-stone-100"
        >
          Developing the <span className="text-stone-500">web</span>
          <br />
          with intent.
        </motion.h1>
        <motion.p
          variants={rise}
          transition={{ duration: 0.7 }}
          className="mt-9 max-w-xl text-base leading-8 text-stone-400 sm:text-lg sm:leading-8"
        >
          {HERO_CONTENT.split("\n")[0]}
        </motion.p>
        <motion.div
          variants={rise}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="flex items-center gap-2 rounded-full bg-stone-100 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white"
          >
            Explore my work <HiArrowDown />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-stone-300 transition hover:border-white/40 hover:text-white"
          >
            Resume <HiArrowUpRight />
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="relative z-10 mx-auto w-full max-w-md lg:max-w-[34rem] xl:max-w-[38rem]"
      >
        <div className="absolute -inset-3 rounded-[2rem] border border-white/[.07]" />
        <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-stone-900 p-2 shadow-2xl shadow-black">
          <img
            src={profilePic}
            alt="Achhyut Baral"
            fetchPriority="high"
            decoding="async"
            sizes="(max-width: 1024px) 88vw, 40vw"
            className="aspect-[4/5] w-full rounded-[1.2rem] object-cover object-top grayscale transition duration-700 hover:grayscale-0"
          />
          <div className="absolute inset-x-2 bottom-2 flex items-end justify-between rounded-b-[1.2rem] bg-gradient-to-t from-black/80 to-transparent p-5">
            <span className="font-mono text-[10px] uppercase tracking-[.2em] text-stone-300">
              Full-stack developer
            </span>
            <span className="text-xs text-stone-400">01 / 01</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
