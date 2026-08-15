import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollMotion = () => {
  const progress = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.to(progress.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.15,
        },
      });
      gsap.utils.toArray("[data-scroll-section]").forEach((section) => {
        const heading = section.querySelector("[data-section-heading]");
        const rule = section.querySelector(".section-rule");
        if (heading)
          gsap.fromTo(
            heading,
            { y: 36, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power4.out",
              scrollTrigger: { trigger: section, start: "top 76%", once: true },
            },
          );
        if (rule)
          gsap.fromTo(
            rule,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 1.15,
              ease: "expo.out",
              scrollTrigger: { trigger: section, start: "top 70%", once: true },
            },
          );
      });
    });
    return () => context.revert();
  }, []);

  return (
    <div className="pointer-events-none fixed right-4 top-1/2 z-50 hidden h-24 w-px -translate-y-1/2 overflow-hidden bg-white/10 lg:block">
      <div
        ref={progress}
        className="h-full w-full origin-top scale-y-0 bg-stone-200"
      />
    </div>
  );
};

export default ScrollMotion;
