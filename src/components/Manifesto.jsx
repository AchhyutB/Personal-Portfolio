import { motion } from "framer-motion";

const words = ["Design", "Build", "Animate", "Ship", "Evolve"];
const Manifesto = () => (
  <section className="relative left-1/2 my-4 w-screen -translate-x-1/2 overflow-hidden border-y border-white/[.09] bg-white/[.025] py-5">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      className="flex w-max whitespace-nowrap"
    >
      {[...words, ...words, ...words, ...words].map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="flex items-center gap-7 px-7 text-3xl font-semibold tracking-[-.06em] text-stone-400 sm:text-5xl"
        >
          <span>{word}</span>
          <i className="h-2 w-2 rounded-full bg-stone-600" />
        </span>
      ))}
    </motion.div>
  </section>
);
export default Manifesto;
