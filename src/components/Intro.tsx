"use client";

import React, { useEffect, useState } from "react";
import  AnimatedButton from "./AnimatedButton";

const roles = [
  "Full-Stack Developer",
  "AI Practitioner",
  "Software Developer",
];

export default function Intro() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

    const handleShowWorkClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Open resume in new tab
  const handleViewCVClick = () => {
    window.open("/Prachi_Resume.pdf", "_blank"); 
  };

  return (
    <div className="flex flex-col items-center justify-center text-center pt-20">
      <p className="mt-2 text-white/90 sm:text-4xl ">
        Hi, I am <span className="text-cyan-400">Prachi </span>
        and I am a{" "}
        <span className="text-cyan-300 transition-opacity duration-700 ease-in-out">
          {roles[index]}
        </span>
      </p>
      <div className="mt-32 flex gap-6 justify-center">
        <AnimatedButton  onClick={handleShowWorkClick}>
          Show My Work
         <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
          <line x1="22" y1="2" x2="11" y2="13" />
        </svg>
        </AnimatedButton>
        <AnimatedButton onClick={handleViewCVClick}>
          View My CV
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        </AnimatedButton>
      </div>
    </div>
  );
}
