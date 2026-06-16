
// ------------------------------------------------           1st Idea            -------------------------------------------------------------




// import { BiLogoTailwindCss } from "react-icons/bi";
// import { BsBootstrap } from "react-icons/bs";
// import {
//   DiDocker,
//   DiHtml5,
//   DiMongodb,
//   DiNodejs,
//   DiPostgresql,
//   DiPython,
//   DiRedis,
// } from "react-icons/di";
// import { FaBootstrap } from "react-icons/fa";
// import { FaCss3 } from "react-icons/fa6";
// import { RiReactjsLine } from "react-icons/ri";
// import { SiExpress, SiExpressdotcom, SiGsap } from "react-icons/si";
// import {
//   TbBrandFramerMotion,
//   TbBrandNextjs,
//   TbBrandThreejs,
// } from "react-icons/tb";

// const Technologies = () => {
//   return (
//     <div className="pb-24">
//       <h2 className="my-20 text-center text-4xl">Technologies</h2>
//       <div className="flex flex-wrap items-center justify-center gap-4">
//         <div>
//           <RiReactjsLine className="text-7xl text-cyan-400" />
//         </div>
//         <div className="p-4">
//           <TbBrandNextjs className="text-7xl" />
//         </div>
//         <div className="p-4">
//           <DiNodejs className="text-7xl text-green-600" />
//         </div>
//         <div className="p-4">
//           <DiPostgresql className="text-7xl text-blue-500" />
//         </div>
//         <div className="p-4">
//           <DiMongodb className="text-7xl text-green-500" />
//         </div>
//         <div className="p-4">
//           <DiRedis className="text-7xl text-red-700" />
//         </div>
//         <div className="p-4">
//           <BiLogoTailwindCss className="text-7xl text-blue-500/80" />
//         </div>
//         <div className="p-4">
//           <SiExpress className="text-7xl" />
//         </div>
//         <div className="p-4">
//           <TbBrandThreejs className="text-7xl " />
//         </div>
//         <div className="p-4">
//           <FaBootstrap className="text-7xl" style={{ color: "#7952B3" }} />
//         </div>
//         <div className="p-4">
//           <FaCss3 className="text-7xl text-[#264de4]" />
//         </div>
//         <div className="p-4">
//           <DiHtml5 className="text-7xl text-[#e34f26]" />
//         </div>
//         <div className="p-4">
//           <DiPython className="text-7xl text-[#3776AB]" />
//         </div>
//         <div className="p-4">
//           <TbBrandFramerMotion className="text-7xl text-[#BB4B96]" />
//         </div>
//         <div className="p-4">
//           <DiDocker className="text-7xl text-[#2496ED]" />
//         </div>
//         <div className="p-4">
//           <SiGsap className="text-7xl text-[#88CE02]" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Technologies;


// ------------------------------------------------           2nd Idea            -------------------------------------------------------------

// To run --   npm install gsap react-icons
//             npm install react-icons gsap





// import { useEffect, useRef } from "react";
// import { BiLogoTailwindCss } from "react-icons/bi";
// import { FaBootstrap } from "react-icons/fa";
// import { FaCss3 } from "react-icons/fa6";
// import { RiReactjsLine } from "react-icons/ri";
// import { SiExpress, SiGsap } from "react-icons/si";
// import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";
// import {
//   DiDocker,
//   DiHtml5,
//   DiNodejs,
//   DiPostgresql,
//   DiPython,
//   DiRedis,
// } from "react-icons/di";
// import { gsap } from "gsap";

// const techs = [
//   {
//     icon: RiReactjsLine,
//     name: "React",
//     color: "#22d3ee",
//     glow: "rgba(34,211,238,0.18)",
//     iconClass: "text-cyan-400",
//   },
//   {
//     icon: TbBrandNextjs,
//     name: "Next.js",
//     color: "#e5e7eb",
//     glow: "rgba(229,231,235,0.1)",
//     iconClass: "",
//   },
//   {
//     icon: DiNodejs,
//     name: "Node.js",
//     color: "#4ade80",
//     glow: "rgba(74,222,128,0.18)",
//     iconClass: "text-green-500",
//   },
//   {
//     icon: DiPostgresql,
//     name: "PostgreSQL",
//     color: "#60a5fa",
//     glow: "rgba(96,165,250,0.18)",
//     iconClass: "text-blue-400",
//   },
//   {
//     icon: DiRedis,
//     name: "Redis",
//     color: "#f87171",
//     glow: "rgba(248,113,113,0.18)",
//     iconClass: "text-red-400",
//   },
//   {
//     icon: BiLogoTailwindCss,
//     name: "Tailwind",
//     color: "#38bdf8",
//     glow: "rgba(56,189,248,0.18)",
//     iconClass: "text-sky-400",
//   },
//   {
//     icon: SiExpress,
//     name: "Express",
//     color: "#d1d5db",
//     glow: "rgba(209,213,219,0.1)",
//     iconClass: "",
//   },
//   {
//     icon: FaBootstrap,
//     name: "Bootstrap",
//     color: "#a855f7",
//     glow: "rgba(168,85,247,0.18)",
//     iconClass: "",
//     style: { color: "#a855f7" },
//   },
//   {
//     icon: FaCss3,
//     name: "CSS3",
//     color: "#60a5fa",
//     glow: "rgba(96,165,250,0.18)",
//     iconClass: "text-blue-400",
//   },
//   {
//     icon: DiHtml5,
//     name: "HTML5",
//     color: "#fb923c",
//     glow: "rgba(251,146,60,0.18)",
//     iconClass: "text-orange-400",
//   },
//   {
//     icon: DiPython,
//     name: "Python",
//     color: "#facc15",
//     glow: "rgba(250,204,21,0.18)",
//     iconClass: "text-yellow-400",
//   },
//   {
//     icon: TbBrandFramerMotion,
//     name: "Framer",
//     color: "#ec4899",
//     glow: "rgba(236,72,153,0.18)",
//     iconClass: "text-pink-400",
//   },
//   {
//     icon: DiDocker,
//     name: "Docker",
//     color: "#38bdf8",
//     glow: "rgba(56,189,248,0.18)",
//     iconClass: "text-sky-400",
//   },
//   {
//     icon: SiGsap,
//     name: "GSAP",
//     color: "#a3e635",
//     glow: "rgba(163,230,53,0.18)",
//     iconClass: "text-lime-400",
//   },
// ];

// const Technologies = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const cardsRef = useRef([]);
//   const floatTweens = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Title entrance
//       gsap.from(titleRef.current, {
//         opacity: 0,
//         y: -20,
//         duration: 0.6,
//         ease: "power3.out",
//       });

//       // Cards staggered pop-in
//       gsap.from(cardsRef.current, {
//         opacity: 0,
//         y: 50,
//         scale: 0.65,
//         duration: 0.55,
//         stagger: { each: 0.06, from: "random" },
//         ease: "back.out(1.8)",
//         delay: 0.2,
//         clearProps: "all",
//         onComplete: startFloating,
//       });
//     }, sectionRef);

//     return () => {
//       ctx.revert();
//       floatTweens.current.forEach((t) => t && t.kill());
//     };
//   }, []);

//   function startFloating() {
//     floatTweens.current = cardsRef.current.map((card, i) =>
//       gsap.to(card, {
//         y: gsap.utils.random(-7, 7),
//         duration: gsap.utils.random(2, 3.5),
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//         delay: i * 0.12,
//       })
//     );
//   }

//   const handleMouseEnter = (card, color, glow, i) => {
//     if (floatTweens.current[i]) floatTweens.current[i].pause();

//     gsap.to(card, {
//       scale: 1.14,
//       y: -10,
//       duration: 0.35,
//       ease: "back.out(2)",
//     });

//     // Shimmer sweep
//     const shimmer = card.querySelector(".tech-shimmer");
//     gsap.fromTo(
//       shimmer,
//       { x: "-110%" },
//       { x: "210%", duration: 0.5, ease: "power2.out" }
//     );

//     card.style.borderColor = color + "88";
//     card.style.boxShadow = `0 0 24px 4px ${glow}, 0 8px 32px ${color}22`;
//   };

//   const handleMouseLeave = (card, i) => {
//     gsap.to(card, {
//       scale: 1,
//       y: 0,
//       duration: 0.4,
//       ease: "back.out(1.5)",
//       onComplete: () => {
//         if (floatTweens.current[i]) floatTweens.current[i].resume();
//       },
//     });
//     card.style.borderColor = "";
//     card.style.boxShadow = "";
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="pb-24 px-4"
//     >
//       {/* Title */}
//       <h2
//         ref={titleRef}
//         className="my-20 text-center text-4xl font-semibold tracking-tight"
//       >
//         Technologies
//       </h2>

//       {/* Grid */}
//       <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
//         {techs.map(({ icon: Icon, name, color, glow, iconClass, style }, i) => (
//           <div
//             key={name}
//             ref={(el) => (cardsRef.current[i] = el)}
//             onMouseEnter={(e) => handleMouseEnter(e.currentTarget, color, glow, i)}
//             onMouseLeave={(e) => handleMouseLeave(e.currentTarget, i)}
//             className="relative flex flex-col items-center justify-center gap-2 w-24 h-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer overflow-hidden select-none"
//             style={{ willChange: "transform" }}
//           >
//             {/* Shimmer layer */}
//             <div
//               className="tech-shimmer pointer-events-none absolute inset-0 rounded-2xl"
//               style={{
//                 background:
//                   "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)",
//                 transform: "translateX(-110%)",
//               }}
//             />

//             {/* Icon */}
//             <Icon
//               className={`text-5xl z-10 ${iconClass}`}
//               style={style || {}}
//             />

//             {/* Label */}
//             <span className="text-[10px] font-medium tracking-wide text-white/50 z-10">
//               {name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Technologies;






// ------------------------------------------------           3rd Idea            -------------------------------------------------------------




// To run--  npm install framer-motion react-icons

// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { BiLogoTailwindCss } from "react-icons/bi";
// import { DiDocker, DiHtml5, DiNodejs, DiPostgresql, DiPython, DiRedis } from "react-icons/di";
// import { FaBootstrap } from "react-icons/fa";
// import { FaCss3 } from "react-icons/fa6";
// import { RiReactjsLine } from "react-icons/ri";
// import { SiExpress, SiGsap } from "react-icons/si";
// import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";

// // Stagger container: children animate in one by one
// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// // Each icon: fades up from below
// const iconVariants = {
//   hidden: { opacity: 0, y: 40, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { type: "spring", stiffness: 260, damping: 20 },
//   },
// };

// const icons = [
//   { Icon: RiReactjsLine, className: "text-7xl text-cyan-400" },
//   { Icon: TbBrandNextjs, className: "text-7xl" },
//   { Icon: DiNodejs, className: "text-7xl text-green-600" },
//   { Icon: DiPostgresql, className: "text-7xl text-blue-500" },
//   { Icon: DiRedis, className: "text-7xl text-red-700" },
//   { Icon: BiLogoTailwindCss, className: "text-7xl text-blue-500/80" },
//   { Icon: SiExpress, className: "text-7xl" },
//   { Icon: FaBootstrap, style: { color: "#7952B3" }, className: "text-7xl" },
//   { Icon: FaCss3, className: "text-7xl text-[#264de4]" },
//   { Icon: DiHtml5, className: "text-7xl text-[#e34f26]" },
//   { Icon: DiPython, className: "text-7xl text-[#3776AB]" },
//   { Icon: TbBrandFramerMotion, className: "text-7xl text-[#BB4B96]" },
//   { Icon: DiDocker, className: "text-7xl text-[#2496ED]" },
//   { Icon: SiGsap, className: "text-7xl text-[#88CE02]" },
// ];

// const Technologies = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-80px" });

//   return (
//     <div className="pb-24">
//       <motion.h2
//         className="my-20 text-center text-4xl"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         Technologies
//       </motion.h2>

//       <motion.div
//         ref={ref}
//         className="flex flex-wrap items-center justify-center gap-4"
//         variants={containerVariants}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//       >
//         {icons.map(({ Icon, className, style }, i) => (
//           <motion.div
//             key={i}
//             className="p-4"
//             variants={iconVariants}
//             whileHover={{ scale: 1.2, rotate: 5 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Icon className={className} style={style} />
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Technologies;





// ------------------------------------------------           4th Idea            -------------------------------------------------------------
