import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi2";

const Navbar = () => (
  <nav className="flex items-center justify-between py-6 sm:py-8">
    <a
      href="#top"
      className="group flex items-center gap-2"
      aria-label="Back to top"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-sm font-bold text-white transition group-hover:bg-white group-hover:text-black">
        AB
      </span>
      <span className="hidden text-sm font-semibold tracking-tight text-stone-200 sm:block">
        Achhyut Baral
      </span>
    </a>
    <div className="flex items-center gap-2 sm:gap-3">
      <a
        href="#work"
        className="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-stone-300 transition hover:border-white/35 hover:text-white sm:flex sm:items-center sm:gap-2"
      >
        Selected work <HiArrowDown />
      </a>
      <a
        className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-stone-300 transition hover:border-white/40 hover:text-white"
        href="https://github.com/AchhyutB"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-stone-300 transition hover:border-white/40 hover:text-white"
        href="https://www.linkedin.com/in/achhyut-baral-541793320/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
  </nav>
);
export default Navbar;
