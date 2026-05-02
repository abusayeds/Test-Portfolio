/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    dateRange: "APR 2025 — APR 2026",
    type: "WORK",
    title: "Intern Full-Stack Software Developer",
    org: "Bitzify",
    desc: "Developing production full-stack applications using modern web technologies. Designed backend systems for inventory and POS platforms, refactored frontend architecture, and contributed to payment system integration.",
    tags: ["Production development", "Frontend architecture", "System design"],
    focus: "Production development",
    active: true,
  },
  {
    dateRange: "JUL 2025 — PRESENT",
    type: "EDUCATION",
    title: "BSc in Computer Science with Artificial Intelligence (Reading)",
    org: "National Institute of Business Management",
    desc: "Undergraduate program focused on computer science fundamentals, artificial intelligence, and modern software engineering practices.",
    tags: ["AI/ML concepts", "System design", "Advanced programming"],
    focus: "AI/ML concepts",
    active: true,
    showArrow: true,
  },
  {
    dateRange: "MAR 2024 — JUN 2025",
    type: "EDUCATION",
    title: "Higher National Diploma in Software Engineering",
    org: "National Institute of Business Management",
    desc: "Developed practical experience across full-stack delivery, OOP, APIs, databases, and collaborative software workflows.",
    tags: ["Full-stack delivery", "APIs", "Databases"],
    focus: "Full-stack delivery",
    active: false,
  },
];

const badgeColors: any = {
  WORK: "bg-indigo-500/15 text-indigo-400 border border-indigo-500/25",
  EDUCATION: "bg-indigo-500/10 text-indigo-500 border border-indigo-500/20",
};

export default function ExperienceTimeline() {
  return (
    <div className="min-h-screen bg-[#0a0d1a] text-white px-6 py-10 font-sans">
      <div className="max-w-7xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-[68px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent" />

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-0 relative"
            >
              {/* Left column */}
              <div className="w-[140px] flex-shrink-0 flex flex-col items-end pr-5 relative">
                <div className="text-[9px] font-medium text-slate-600 uppercase tracking-wide leading-snug text-right mb-1.5">
                  {exp.dateRange}
                </div>
                <span
                  className={`text-[8.5px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded ${badgeColors[exp.type]}`}
                >
                  {exp.type}
                </span>

                {/* Dot */}
                <div className="absolute -right-1.5 top-0">
                  <div
                    className={`w-2.5 h-2.5 rounded-full border-2 border-indigo-500 bg-[#0a0d1a] z-10 relative
                      ${exp.active ? "bg-indigo-500 shadow-[0_0_0_3px_rgba(99,102,241,0.2)]" : ""}`}
                  />
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 ml-2.5 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 flex gap-4 items-start hover:bg-white/[0.05] hover:border-indigo-500/25 transition-all duration-200">
                <div className="flex-1 min-w-0">
                  <div className="text-[15px] font-bold text-white leading-snug mb-1">
                    {exp.title}
                  </div>
                  <div className="text-[11px] text-indigo-400 font-medium mb-2.5">
                    {exp.org}
                  </div>
                  <div className="text-[11.5px] text-slate-500 leading-relaxed mb-3">
                    {exp.desc}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-slate-400 bg-white/5 border border-white/[0.08] rounded px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Focus box */}
                <div className="w-36 flex-shrink-0 bg-white/[0.03] border border-white/[0.07] rounded-xl p-3 self-start">
                  <div className="text-[8px] font-semibold tracking-widest uppercase text-slate-600 mb-1.5">
                    Primary Focus
                  </div>
                  <div className="text-[11.5px] font-semibold text-slate-200 leading-snug">
                    {exp.focus}
                  </div>
                </div>

                {/* Optional arrow dot */}
                {exp.showArrow && (
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 text-sm flex-shrink-0 self-center">
                    →
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
