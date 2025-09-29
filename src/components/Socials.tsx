"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Socials() {
  return (

    <section >
      <div className="flex gap-6 justify-center ">
        <a
          href="https://www.linkedin.com/in/prachi-kadam-63a0b1188/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-200 transition-colors duration-300"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://github.com/prachiikadam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-200 transition-colors duration-300"
        >
          <FaGithub size={28} />
        </a>
      </div>
    </section>
  );
}
