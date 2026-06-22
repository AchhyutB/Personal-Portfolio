import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { HiArrowUpRight } from "react-icons/hi2";

// Inject keyframes once into the document
const injectStyles = () => {
  if (document.getElementById("project-shimmer-styles")) return;
  const style = document.createElement("style");
  style.id = "project-shimmer-styles";
  style.innerHTML = `
    @keyframes shimmerMove {
      0%   { transform: translateX(-150%) skewX(-15deg); }
      100% { transform: translateX(350%) skewX(-15deg); }
    }
    @keyframes borderGlow {
      0%, 100% { opacity: 0.5; }
      50%       { opacity: 1; }
    }
    @keyframes pulseDot {
      0%, 100% { box-shadow: 0 0 6px 1px rgba(255,255,255,0.6); opacity: 0.5; }
      50%       { box-shadow: 0 0 14px 3px rgba(255,255,255,0.95); opacity: 1; }
    }
    .shimmer-beam {
      position: absolute;
      top: 0;
      left: 0;
      width: 40%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,0.06),
        rgba(255,255,255,0.13),
        rgba(255,255,255,0.06),
        transparent
      );
      animation: shimmerMove 2s linear infinite;
      pointer-events: none;
    }
    .glow-line-top {
      animation: borderGlow 2s ease-in-out infinite;
    }
    .glow-line-bottom {
      animation: borderGlow 2s ease-in-out infinite reverse;
    }
    .pulse-dot {
      animation: pulseDot 1.6s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);
};

const ProjectImage = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  injectStyles();

  const isOpen = hovered || mobileOpen;

  return (
    <div
      className="relative rounded-[20px] sm:rounded-[30px] overflow-hidden w-full sm:w-[450px] cursor-pointer"
      style={{
        height: "clamp(180px, 45vw, 250px)",
        boxShadow: isOpen
          ? "0 0 0 1px rgba(255,255,255,0.18), 0 0 35px rgba(255,255,255,0.1), 0 8px 40px rgba(0,0,0,0.7)"
          : "0 4px 24px rgba(0,0,0,0.4)",
        transition: "box-shadow 0.5s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setMobileOpen((prev) => !prev)}
    >
      {/* Image zoom */}
      <motion.img
        src={project.image}
        alt={project.title}
        animate={{ scale: isOpen ? 1.06 : 1 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full h-full object-cover object-top"
      />

      {/* Moving shimmer beam — only rendered when open */}
      {isOpen && <div className="shimmer-beam" />}

      {/* Main overlay — slides up */}
      <motion.div
        initial={false}
        animate={{ y: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.95) 50%, rgba(0,0,0,0.72) 100%)",
          backdropFilter: "blur(5px)",
        }}
      >
        {/* Top glowing line — pulses continuously */}
        <div
          className="absolute top-0 left-0 h-[1.5px] w-full glow-line-top"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.95), rgba(255,255,255,0.5), transparent)",
            boxShadow:
              "0 0 10px rgba(255,255,255,0.6), 0 0 28px rgba(255,255,255,0.25)",
          }}
        />

        {/* Pulsing dot */}
        <div className="w-1.5 h-1.5 rounded-full bg-white pulse-dot" />

        {/* Label */}
        <motion.p
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 8 }}
          transition={{ duration: 0.3, delay: 0.18 }}
          className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-medium"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          View Project
        </motion.p>

        {/* Buttons */}
        <div className="flex gap-2 sm:gap-3">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 14 }}
              transition={{ duration: 0.32, delay: 0.22 }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 18px rgba(255,255,255,0.2), 0 0 6px rgba(255,255,255,0.12)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              <FaGithub className="text-sm sm:text-base" />
              GitHub
            </motion.a>
          )}

          {project.liveDemo && (
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 14 }}
              transition={{ duration: 0.32, delay: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 18px rgba(255,255,255,0.2), 0 0 6px rgba(255,255,255,0.12)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium"
              style={{
                background: "rgba(255,255,255,0.11)",
                border: "1px solid rgba(255,255,255,0.22)",
                color: "rgba(255,255,255,0.92)",
              }}
            >
              <SiVercel className="text-sm sm:text-base" />
              Live Demo
              <HiArrowUpRight className="text-xs opacity-70" />
            </motion.a>
          )}
        </div>

        {/* Mobile close hint */}
        <motion.p
          animate={{ opacity: mobileOpen ? 0.35 : 0 }}
          transition={{ duration: 0.3, delay: 0.35 }}
          className="text-[9px] tracking-widest uppercase text-white sm:hidden"
        >
          tap to close
        </motion.p>

        {/* Bottom glowing line — pulses opposite phase */}
        <div
          className="absolute bottom-0 right-0 h-[1.5px] w-full glow-line-bottom"
          style={{
            background:
              "linear-gradient(to left, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.95), rgba(255,255,255,0.5), transparent)",
            boxShadow:
              "0 0 10px rgba(255,255,255,0.6), 0 0 28px rgba(255,255,255,0.25)",
          }}
        />
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="pb-8 max-w-4xl mx-auto px-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-16 flex flex-col lg:flex-row lg:items-start lg:gap-10 "
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-auto lg:shrink-0 mb-6 lg:mb-0"
            >
              <ProjectImage project={project} />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="flex-1 text-left"
            >
              <h3 className="mb-4 font-semibold text-xl sm:text-2xl">
                {project.title}
              </h3>

              <p className="mb-4 text-stone-400 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    className="rounded bg-stone-900 px-2 py-1.5 text-xs sm:text-sm  font-medium text-stone-500"
                    key={i}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
