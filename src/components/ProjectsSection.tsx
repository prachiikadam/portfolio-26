"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, PenTool, MonitorSmartphone, BrainCircuit } from "lucide-react";
import React from "react";


export type Project = {
  title: string;
  summary: string;
  tech: string[];
  bullets?: string[];
  liveUrl?: string;
  githubUrl?: string;
  icon?: React.ReactNode;
};


const DEFAULT_PROJECTS: Project[] = [
  {
    title: "Digital Signature Canvas App",
    summary: "Draw a digital signature on HTML Canvas and download as PNG.",
    tech: ["JavaScript", "Canvas API", "HTML", "CSS"],
    icon: <PenTool className="h-5 w-5" />,
    liveUrl: "https://digital-sign-5fhs.vercel.app/",
    githubUrl: "https://github.com/prachiikadam/digital-sign",
  },
  {
    title: "Pixel-Perfect Responsive Site",
    summary: "Marketing website built with React + TypeScript to match design specs.",
    tech: ["React", "TypeScript", "Tailwind"],
    icon: <MonitorSmartphone className="h-5 w-5" />,
    liveUrl: "https://videoplaylist.vercel.app/",
    githubUrl: "https://github.com/prachiikadam/videoplaylist",
  },
  {
    title: "AI Sales Insights Dashboard",
    summary:
      "Streamlit dashboard combining descriptive analytics and Hugging Face summarization for exec‑ready insights.",
    tech: ["Python", "Streamlit", "Plotly", "Hugging Face"],
    icon: <BrainCircuit className="h-5 w-5" />,
  },
];

// =============== Small UI bits ===============
function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/90 shadow-sm backdrop-blur transition hover:bg-white/10">
      {label}
    </span>
  );
}

function ProjectCard({ p, idx }: { p: Project; idx: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.3, delay: idx * 0.04, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur"
    >
      <div>
        <div className="mb-3 flex items-center gap-2 text-white">
          {p.icon && (
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/10">
              {p.icon}
            </span>
          )}
          <h3 className="text-base font-medium">{p.title}</h3>
        </div>

        <p className="mb-3 text-sm text-white/75">{p.summary}</p>

        {p.bullets && (
          <ul className="mb-3 list-disc space-y-1 pl-5 text-sm text-white/70">
            {p.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        <div className="mb-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <Chip key={t} label={t} />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {p.liveUrl && (
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 shadow-sm transition hover:bg-white/10"
          >
            <ExternalLink className="h-4 w-4" /> Live
          </a>
        )}
        {p.githubUrl && (
          <a
            href={p.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 shadow-sm transition hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> Code
          </a>
        )}
        <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 transition group-hover:ring-1 group-hover:ring-cyan-300/30" />
      </div>
    </motion.article>
  );
}


export default function ProjectsSection({
  projects = DEFAULT_PROJECTS,
  sectionTitle = "Projects",
  className = "",
}: {
  projects?: Project[];
  sectionTitle?: string;
  className?: string;
}) {
  return (
    <section id ="projects"
      className={`relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(56,189,248,0.15),transparent),radial-gradient(800px_400px_at_20%_110%,rgba(168,85,247,0.12),transparent)] p-8 sm:p-12 mb-8 ${className}`}
    >
      <header className="mb-8 sm:mb-10">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {sectionTitle}
        </h2>
        <p className="mt-1 max-w-2xl text-pretty text-sm text-white/70">
          A few builds I'm proud of — minimal motion, clean details.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, idx) => (
          <ProjectCard key={p.title} p={p} idx={idx} />
        ))}
      </div>
    </section>
  );
}
