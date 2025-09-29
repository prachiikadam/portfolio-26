"use client";

import React from "react";
import {useTime, useTransform , motion} from "framer-motion";



type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function AnimatedButton({ children, onClick }: ButtonProps) {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360],{ clamp: false });
  const rotationBg = useTransform(rotate, (v) => `conic-gradient(from ${v}deg ,#00b3ff,#0088ff,#005eff)`);
  return (
    <main>
        <div className="relative ">
          <button
          onClick={onClick}
          className="relative bg-black px-6 py-2 rounded-md z-10 transition-colors duration-200 flex items-center gap-2 text-white"
          >
            {children}
          </button>
          <motion.div className=" absolute -inset-[1px] rounded-md bg-yellow-400"
          style={{
            background:rotationBg
          }}
          >

          </motion.div>
    
      </div>
    </main>
  
   
  );
}
