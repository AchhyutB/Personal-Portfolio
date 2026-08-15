import { motion } from "framer-motion";
import { BiLogoTailwindCss } from "react-icons/bi";
import {
  DiDocker,
  DiMongodb,
  DiNodejs,
  DiPostgresql,
  DiPython,
  DiRedis,
} from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiFigma, SiGsap } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";

const tools = [
  { Icon: RiReactjsLine, name: "React", type: "Frontend", size: "large" },
  { Icon: DiNodejs, name: "Node.js", type: "Backend", size: "small" },
  { Icon: DiMongodb, name: "MongoDB", type: "Database", size: "small" },
  { Icon: SiExpress, name: "Express", type: "Backend", size: "small" },
  { Icon: DiPostgresql, name: "PostgreSQL", type: "Database", size: "large" },
  { Icon: DiRedis, name: "Redis", type: "Infrastructure", size: "small" },
  {
    Icon: BiLogoTailwindCss,
    name: "Tailwind",
    type: "Frontend",
    size: "small",
  },
  { Icon: FaGitAlt, name: "Git", type: "Workflow", size: "small" },
  { Icon: SiFigma, name: "Figma", type: "Design", size: "small" },
  { Icon: DiPython, name: "Python", type: "Backend", size: "small" },
  {
    Icon: TbBrandFramerMotion,
    name: "Motion",
    type: "Animation",
    size: "small",
  },
  { Icon: DiDocker, name: "Docker", type: "Infrastructure", size: "large" },
  { Icon: SiGsap, name: "GSAP", type: "Animation", size: "small" },
];

const Technologies = () => (
  <section data-scroll-section className="py-24 sm:py-36">
    <div
      data-section-heading
      className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
    >
      <div>
        <p className="eyebrow">01 - The stack</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[.92] tracking-[-.07em] text-stone-100 sm:text-6xl lg:text-7xl">
          Tools that turn
          <br />
          <span className="text-stone-500">ideas into systems.</span>
        </h2>
      </div>
      <p className="max-w-sm text-sm leading-7 text-stone-500">
        From first sketch to production infrastructure, every part of the stack
        is chosen to make digital work feel effortless.
      </p>
    </div>
    <div className="section-rule" />
    <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/[.1] bg-[#0d0d0e] p-5 sm:p-8 lg:p-12">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[.04]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[530px] w-[530px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[.05]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[.07]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,.09),transparent_28%)]" />
      <div className="relative z-10 grid gap-10 lg:grid-cols-[.77fr_1.23fr] lg:items-center">
        <div className="max-w-sm">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.16em] text-stone-400">
            <span className="h-1.5 w-1.5 rounded-full bg-stone-200" />
            Full-stack orbit
          </div>
          <p className="mt-7 text-2xl font-medium leading-tight tracking-[-.04em] text-stone-200">
            One connected practice, from interface details to production-ready
            architecture.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-y-5 border-t border-white/[.1] pt-6 font-mono text-[10px] uppercase tracking-[.16em] text-stone-500">
            <span>13 tools</span>
            <span>06 disciplines</span>
            <span>Design led</span>
            <span>Build focused</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {tools.map(({ Icon, name, type, size }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.84, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.035 }}
              whileHover={{ y: -9, rotateX: 6, rotateY: index % 2 ? -6 : 6 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/[.1] bg-[#121212]/90 p-4 shadow-xl shadow-black/20 ${size === "large" ? "sm:col-span-2" : ""}`}
              style={{ transformPerspective: 850 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[.08] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative flex min-h-[108px] flex-col justify-between">
                <div className="flex items-start justify-between">
                  <Icon className="text-3xl text-stone-300 transition duration-300 group-hover:scale-110 group-hover:text-white" />
                  <span className="font-mono text-[9px] text-stone-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <p className="text-base font-semibold tracking-[-.04em] text-stone-200">
                    {name}
                  </p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[.16em] text-stone-600">
                    {type}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default Technologies;
