import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { PROJECTS } from "../constants";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = PROJECTS[activeIndex];

  return (
    <section id="work" data-scroll-section className="py-24 sm:py-36">
      <div
        data-section-heading
        className="grid gap-6 md:grid-cols-[1fr_.55fr] md:items-end"
      >
        <div>
          <p className="eyebrow">02 - Selected work</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-.07em] text-stone-100 sm:text-6xl lg:text-7xl">
            A closer look
            <br />
            <span className="text-stone-500">at the work.</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-stone-500 md:justify-self-end">
          A project reel built for browsing. Select an entry to explore its
          visual direction, tools, and live outcome.
        </p>
      </div>
      <div className="section-rule" />
      <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-white/[.1] bg-[#0d0d0d] lg:grid lg:grid-cols-[minmax(280px,.66fr)_minmax(0,1.34fr)]">
        <aside className="border-b border-white/[.1] lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between border-b border-white/[.08] px-5 py-5 sm:px-7">
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-stone-500">
              Project index
            </p>
            <span className="font-mono text-[10px] text-stone-600">
              {String(PROJECTS.length).padStart(2, "0")}
            </span>
          </div>
          <div className="flex overflow-x-auto lg:block">
            {PROJECTS.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative min-w-[230px] border-r border-white/[.07] px-5 py-5 text-left transition lg:min-w-0 lg:border-b lg:border-r-0 lg:px-7 ${activeIndex === index ? "bg-white/[.07]" : "hover:bg-white/[.03]"}`}
              >
                <span
                  className={`absolute bottom-0 left-0 top-0 w-0.5 transition ${activeIndex === index ? "bg-stone-100" : "bg-transparent"}`}
                />
                <div className="flex items-start gap-4">
                  <span
                    className={`mt-0.5 font-mono text-[10px] ${activeIndex === index ? "text-stone-300" : "text-stone-600"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      className={`text-sm font-semibold leading-5 tracking-[-.025em] transition ${activeIndex === index ? "text-stone-100" : "text-stone-400 group-hover:text-stone-200"}`}
                    >
                      {project.title}
                    </p>
                    <p className="mt-2 font-mono text-[9px] uppercase tracking-[.14em] text-stone-600">
                      {project.status}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>
        <div className="min-w-0 p-4 sm:p-6 lg:p-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="overflow-hidden rounded-xl border border-white/[.1] bg-stone-900">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  loading={activeIndex === 0 ? "eager" : "lazy"}
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[.18em] text-stone-500">
                    0{activeIndex + 1} /{" "}
                    {String(PROJECTS.length).padStart(2, "0")} -{" "}
                    {activeProject.status}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-.055em] text-stone-100 sm:text-4xl">
                    {activeProject.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-400">
                    {activeProject.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${activeProject.title} source code`}
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/[.13] text-stone-300 transition hover:border-white hover:text-white"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {activeProject.liveDemo && activeProject.liveDemo !== "/" && (
                    <a
                      href={activeProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${activeProject.title}`}
                      className="grid h-10 w-10 place-items-center rounded-full bg-stone-100 text-stone-900 transition hover:scale-105 hover:bg-white"
                    >
                      <HiArrowUpRight />
                    </a>
                  )}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[.08] pt-5">
                {activeProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/[.1] bg-white/[.025] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.12em] text-stone-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default Projects;
