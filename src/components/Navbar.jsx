import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
//import logo from "../assets/AB_space_logo.png";
import React from "react";
import { FaX } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <a href="/" aria-label="Home">
          <img src={logo} className="w-[10rem] h-[8rem] md:w-[8rem] md:h-[7rem] " alt="Logo" />
        </a> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.Github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.x.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <FaX />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
