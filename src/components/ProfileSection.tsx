"use client";

import React from "react";
import Image from "next/image";

export default function ProfileSection() {
  return (
    <section id="about">

    <div  className="flex flex-col md:flex-row items-center justify-center gap-8 p-20 ">


      <div className="w-64 h-64 rounded-full overflow-hidden border-4  shadow-lg">
        <Image
          src="/Profile.png"
          alt="Profile photo"
          width={250}
          height={250}
          className="object-cover"
        />
      </div>

      <div className="text-center md:text-left max-w-xl">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
          About Me
        </h2>
        <p className="text-white/90 leading-relaxed">
          A passionate developer with experience in building
          full-stack applications and exploring the power of AI. I enjoy
          crafting scalable, user-friendly solutions and constantly learning
          new technologies to improve my skills. Beyond coding, I love working
          on creative projects and collaborating with people to bring ideas to
          life.
        </p>
      </div>
    </div>

    </section>
  );
}
