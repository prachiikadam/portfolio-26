"use client";

import React, { useEffect, useState } from "react";
import NavGlow from "./NavGlow";

type NavLink = { href: string; label: string };

// Use hash IDs for same-page sections
const links: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    // highlight on load if there's a hash
    setActiveLink(window.location.hash || "");
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full">
      <div className="relative flex items-start justify-center pt-6">
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform">
          <NavGlow />
        </div>

        <div
          className="relative z-10 mx-auto flex items-center gap-1 rounded-[28px]
                     border border-white/10
                     bg-[linear-gradient(180deg,rgba(12,21,35,.92),rgba(3,7,18,.92))]
                     px-6 py-3 backdrop-blur-md
                     shadow-[0_18px_60px_-18px_rgba(0,193,255,0.3)]"
        >
          {links.map((link) => {
            const active = activeLink === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                aria-current={active ? "page" : undefined}
                className={[
                  "relative rounded-full px-5 py-2 text-md font-medium transition-all duration-300",
                  active
                    ? "bg-white/10 text-white shadow-lg"
                    : "text-white/85 hover:bg-white/5 hover:text-white",
                ].join(" ")}
              >
                <span aria-hidden className="absolute inset-0 -z-10" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
