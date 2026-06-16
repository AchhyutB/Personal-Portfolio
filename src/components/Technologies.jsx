import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
import { SiExpress, SiGsap } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

// Stagger container: children animate in one by one
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

// Each icon: fades up from below
const iconVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

const icons = [
  { Icon: RiReactjsLine, className: "text-7xl text-cyan-400" },
  { Icon: DiNodejs, className: "text-7xl text-green-600" },
  { Icon: DiMongodb, className: "text-7xl text-green-600" },
  { Icon: SiExpress, className: "text-7xl" },
  { Icon: DiPostgresql, className: "text-7xl text-blue-500" },
  { Icon: DiRedis, className: "text-7xl text-red-700" },
  { Icon: BiLogoTailwindCss, className: "text-7xl text-blue-500/80" },
  { Icon: FaGitAlt, className: "text-7xl text-[#F05033]" },
  { Icon: SiFigma, className: "text-7xl" },
  { Icon: DiPython, className: "text-7xl text-[#3776AB]" },
  { Icon: TbBrandFramerMotion, className: "text-7xl text-[#BB4B96]" },
  { Icon: DiDocker, className: "text-7xl text-[#2496ED]" },
  { Icon: SiGsap, className: "text-7xl text-[#88CE02]" },
];

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        ref={ref}
        className="flex flex-wrap items-center justify-center gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {icons.map(({ Icon, className, style }, i) => (
          <motion.div
            key={i}
            className="p-4"
            variants={iconVariants}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className={className} style={style} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
