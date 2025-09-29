"use client";

import React from "react";

const NavGlow: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-4 transform">
        <div className="h-96 w-96 rounded-full bg-torch-core opacity-60 blur-3xl animate-torch-flicker mix-blend-screen" />
        <div className="absolute left-1/2 top-0 h-[100px] w-[500px] -translate-x-1/2 transform rounded-full bg-torch-glow opacity-40 blur-[100px] animate-torch-pulse mix-blend-screen" />

        <div className="absolute left-1/2 top-0 h-[200px] w-[600px] -translate-x-1/2 transform rounded-full bg-torch-outer opacity-20 blur-[120px] mix-blend-screen" />

        <div className="absolute left-1/2 top-0 h-[300px] w-[800px] -translate-x-1/2 transform rounded-full bg-torch-ambient opacity-10 blur-[150px] mix-blend-screen" />
      </div>
    </div>
  );
};

export default NavGlow;
