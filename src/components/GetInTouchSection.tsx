"use client";

import React, { useState } from "react";
import AnimatedButton from "./AnimatedButton";
import { Copy, Check } from "lucide-react";

export default function GetInTouchSection() {
  const [copied, setCopied] = useState(false);
  const email = "workprachikadam@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Fallback for older browsers / non-secure context
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="mt-24 mb-24 flex flex-col items-center justify-center text-white">
      <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>

      <p className="mb-8 text-center max-w-xl">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your visions. Feel free to reach out!
      </p>

      <AnimatedButton
        onClick={handleCopy}       // pointer cursor
        aria-label="Copy my email address to clipboard"
      >
        {copied ? (
          <>
            Mail copied
            <Check className="ml-2 h-4 w-4" />
          </>
        ) : (
          <>
            Copy My Email
            <Copy className="ml-2 h-4 w-4" />
          </>
        )}
      </AnimatedButton>

      {/* Small toast/message area */}
      <div className="relative h-6 mt-3" aria-live="polite" role="status">
        {copied && (
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur transition-opacity duration-300">
            Mail copied
          </span>
        )}
      </div>
    </section>
  );
}
