"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Grid3X3, Sparkles, Cloud, Database, Code2 } from "lucide-react";


function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90 shadow-sm backdrop-blur transition hover:bg-white/10">
      {label}
    </span>
  );
}

const STACK = [
  { name: "JavaScript", category: "Frontend" },
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Express.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
] as const;

const CATEGORY_META: Record<string, { icon: React.ReactNode; hint: string }> = {
  Frontend: { icon: <Layers className="h-4 w-4" />, hint: "UI, interactivity, and UX" },
  Backend: { icon: <Code2 className="h-4 w-4" />, hint: "APIs, services, and logic" },
  Database: { icon: <Database className="h-4 w-4" />, hint: "Data modeling & queries" },
  Cloud: { icon: <Cloud className="h-4 w-4" />, hint: "Deployments & scale" },
};

export default function TechStackSection() {
  const [view, setView] = useState<"all" | "category">("category");
  const categories = Array.from(new Set(STACK.map((s) => s.category)));

  return (
    <section  id ="skills" className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(56,189,248,0.15),transparent),radial-gradient(800px_400px_at_20%_110%,rgba(168,85,247,0.12),transparent)] p-8 sm:p-12 mb-12">
      <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
        <svg className="absolute -left-10 -top-10 h-64 w-64 blur-3xl" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="100" fill="url(#g1)" />
        </svg>
      </div>

      <header className="mb-8 flex flex-col items-start gap-3 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            I constantly try to improve my stack
          </h2>
          <p className="mt-1 max-w-2xl text-pretty text-sm text-white/70">
            Currently exploring <span className="font-bold text-white"> Artificial Intelligence </span> to expand into <span className="font-bold text-white">  Machine Learning and NLP.</span>
             A quick peek at the technologies I use across the frontend, backend, databases, and cloud — with a
            simple, minimal interaction.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-white/80 shadow-sm backdrop-blur">
          <button
            onClick={() => setView("category")}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 transition ${
              view === "category" ? "bg-white/15" : "hover:bg-white/10"
            }`}
            aria-pressed={view === "category"}
          >
            <Grid3X3 className="h-4 w-4" /> By category
          </button>
          <button
            onClick={() => setView("all")}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 transition ${
              view === "all" ? "bg-white/15" : "hover:bg-white/10"
            }`}
            aria-pressed={view === "all"}
          >
            <Sparkles className="h-4 w-4" /> All
          </button>
        </div>
      </header>

      {view === "category" ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: idx * 0.04, ease: "easeOut" }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-md"
            >
              <div className="mb-3 flex items-center gap-2 text-white">
                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-white/10">
                  {CATEGORY_META[cat]?.icon}
                </span>
                <div>
                  <h3 className="text-base font-medium">{cat}</h3>
                  <p className="text-xs text-white/60">{CATEGORY_META[cat]?.hint}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {STACK.filter((s) => s.category === cat).map((s) => (
                  <motion.div
                    key={s.name}
                    whileHover={{ translateY: -2 }}
                    transition={{ duration: 0.15 }}
                    className="[&>*]:select-none"
                  >
                    <Chip label={s.name} />
                  </motion.div>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 transition group-hover:ring-1 group-hover:ring-cyan-300/30" />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {STACK.map((s, idx) => (
            <motion.button
              key={s.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.35, delay: idx * 0.03, ease: "easeOut" }}
              whileHover={{ y: -3 }}
              className="group flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white shadow-sm backdrop-blur hover:bg-white/10"
            >
              <span>{s.name}</span>
              <span className="text-xs text-white/60">{s.category}</span>
              <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 transition group-hover:ring-1 group-hover:ring-fuchsia-300/30" />
            </motion.button>
          ))}
        </motion.div>
      )}

    </section>
  );
}
