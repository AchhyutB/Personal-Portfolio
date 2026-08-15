import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const Contact = () => (
  <section data-scroll-section className="pb-20 pt-24 sm:pb-28 sm:pt-36">
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative isolate overflow-hidden rounded-[2rem] border border-white/[.12] bg-[#101010] px-6 py-10 sm:px-12 sm:py-16 lg:px-16 lg:py-20"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[420px] w-[420px] rounded-full border border-white/[.08]" />
      <div className="pointer-events-none absolute -right-10 top-8 -z-10 h-[280px] w-[280px] rounded-full bg-white/[.07] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div data-section-heading>
        <p className="eyebrow">04 - Let&apos;s work together</p>
        <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[.9] tracking-[-.075em] text-stone-100 sm:text-7xl lg:text-8xl">
          Let&apos;s make
          <br />
          <span className="text-stone-500">something felt.</span>
        </h2>
      </div>
      <div className="mt-12 grid gap-10 border-t border-white/[.1] pt-7 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="max-w-xl text-base leading-8 text-stone-400">
            For ambitious products, expressive digital experiences, or simply a
            good conversation about what comes next.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[10px] uppercase tracking-[.15em] text-stone-500">
            <a
              href={`mailto:${CONTACT.email}`}
              className="transition hover:text-white"
            >
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phoneNo}`}
              className="transition hover:text-white"
            >
              {CONTACT.phoneNo}
            </a>
            <span>{CONTACT.address}</span>
          </div>
        </div>
        <a
          href={`mailto:${CONTACT.email}`}
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-stone-100 px-6 py-4 text-sm font-semibold text-stone-900 transition duration-300 hover:scale-105 hover:bg-white"
        >
          Start a conversation{" "}
          <HiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </motion.div>
    <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[.24em] text-stone-700">
      © {new Date().getFullYear()} Achhyut Baral / Designed &amp; built with
      intent
    </p>
  </section>
);
export default Contact;
