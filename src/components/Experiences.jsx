import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experiences = () => (
  <section data-scroll-section className="py-24 sm:py-36">
    <div
      data-section-heading
      className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
    >
      <div>
        <p className="eyebrow">03 - Timeline</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-.07em] text-stone-100 sm:text-6xl lg:text-7xl">
          Experience in
          <br />
          <span className="text-stone-500">constant motion.</span>
        </h2>
      </div>
      <p className="max-w-sm text-sm leading-7 text-stone-500">
        Every role, program, and collaboration adds another perspective to how I
        design and build.
      </p>
    </div>
    <div className="section-rule" />
    <div className="relative mt-10 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-gradient-to-b before:from-stone-600 before:via-stone-800 before:to-transparent sm:before:left-[8.7rem]">
      {EXPERIENCES.map((experience, index) => (
        <motion.article
          key={`${experience.role}-${index}`}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
          className="relative grid gap-5 pb-12 pl-10 sm:grid-cols-[140px_1fr] sm:pl-0"
        >
          <div className="relative">
            <span className="absolute -left-[1.73rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#080808] bg-stone-300 sm:-right-[1.6rem] sm:left-auto" />
            <p className="font-mono text-[10px] uppercase tracking-[.18em] text-stone-500">
              {experience.year}
            </p>
          </div>
          <div className="group rounded-2xl border border-transparent px-5 py-5 transition duration-300 hover:border-white/[.09] hover:bg-white/[.025] sm:-mt-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-semibold tracking-[-.04em] text-stone-100">
                {experience.role}
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[.13em] text-stone-500">
                {experience.company}
              </span>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-400">
              {experience.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[9px] uppercase tracking-[.16em] text-stone-600 transition group-hover:text-stone-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);
export default Experiences;
