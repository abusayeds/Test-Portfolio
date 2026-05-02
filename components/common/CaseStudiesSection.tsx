"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hostel Management System",
    category: "Cloud-Deploys Management Platform",
    year: "2025",
    image:
      "https://t4.ftcdn.net/jpg/02/19/66/93/360_F_219669327_v12pBKc7TB62E3uCJrgRRkDhfVENK3z5.jpg",
    delivery:
      "Full-stack management system for handling tenant records, room allocation, and administrative operations with cloud deployments.",
    challenge:
      "Build a scalable system that manages multiple co-tenant workflows while maintaining clean architecture and reliable deployments.",
    solution:
      "Designed REST APIs with Next.js + TypeScript, implemented Next.js frontend with TypeScript, containerized with Docker, and deployed on AWS EC2.",
    impact:
      "Demonstrated end-to-end full-stack delivery including automated CI/CD pipelines, comprehensive testing, and production-grade deployment.",
    techStack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Docker",
      "AWS EC2",
      "GitHub Actions",
    ],
    featureTags: [
      "Scalable backend architecture",
      "Role-based access control",
      "Automated testing",
    ],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 1,
    title: "Hostel Management System",
    category: "Cloud-Deploys Management Platform",
    year: "2025",
    image:
      "https://t4.ftcdn.net/jpg/02/19/66/93/360_F_219669327_v12pBKc7TB62E3uCJrgRRkDhfVENK3z5.jpg",
    delivery:
      "Full-stack management system for handling tenant records, room allocation, and administrative operations with cloud deployments.",
    challenge:
      "Build a scalable system that manages multiple co-tenant workflows while maintaining clean architecture and reliable deployments.",
    solution:
      "Designed REST APIs with Next.js + TypeScript, implemented Next.js frontend with TypeScript, containerized with Docker, and deployed on AWS EC2.",
    impact:
      "Demonstrated end-to-end full-stack delivery including automated CI/CD pipelines, comprehensive testing, and production-grade deployment.",
    techStack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Docker",
      "AWS EC2",
      "GitHub Actions",
    ],
    featureTags: [
      "Scalable backend architecture",
      "Role-based access control",
      "Automated testing",
    ],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 1,
    title: "Hostel Management System",
    category: "Cloud-Deploys Management Platform",
    year: "2025",
    image:
      "https://t4.ftcdn.net/jpg/02/19/66/93/360_F_219669327_v12pBKc7TB62E3uCJrgRRkDhfVENK3z5.jpg",
    delivery:
      "Full-stack management system for handling tenant records, room allocation, and administrative operations with cloud deployments.",
    challenge:
      "Build a scalable system that manages multiple co-tenant workflows while maintaining clean architecture and reliable deployments.",
    solution:
      "Designed REST APIs with Next.js + TypeScript, implemented Next.js frontend with TypeScript, containerized with Docker, and deployed on AWS EC2.",
    impact:
      "Demonstrated end-to-end full-stack delivery including automated CI/CD pipelines, comprehensive testing, and production-grade deployment.",
    techStack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Docker",
      "AWS EC2",
      "GitHub Actions",
    ],
    featureTags: [
      "Scalable backend architecture",
      "Role-based access control",
      "Automated testing",
    ],
    liveLink: "#",
    githubLink: "#",
  },
];

export default function CaseStudiesSection() {
  return (
    <div className="min-h-screen mt-10 px-6 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[11px] tracking-[3px] uppercase text-indigo-400 mb-5">
            Projects
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white mb-5"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Case studies that explain
            <br />
            the work without making
            <br />
            you fight the layout.
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
            This section is now built to scan cleanly: project context first,
            delivery choices next, and outcome last. That makes the work easier
            to review whether the demo is public or the product is still
            private.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-10"
        >
          {[
            { num: "7", label: "Case Studies" },
            { num: "4", label: "Live Demos" },
            { num: "3", label: "Private Builds" },
          ].map((s) => (
            <div
              key={s.label}
              className="border border-white/[0.08] rounded-[18px] py-6 px-4 text-center bg-dark-card backdrop-blur"
            >
              <div
                className="text-5xl md:text-6xl font-bold text-white leading-none mb-2"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {s.num}
              </div>
              <p className="text-[9px] tracking-[2px] uppercase text-zinc-600">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Project Cards */}
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`border border-white/[0.09] rounded-3xl overflow-hidden bg-dark-card flex flex-col mb-6 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Left: Image Column */}
            <div className="relative flex-shrink-0 md:w-[38%] min-h-[320px] md:min-h-[500px] overflow-hidden group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 ${
                  index % 2 === 0
                    ? "bg-gradient-to-r from-black/75 via-black/35 to-transparent"
                    : "bg-gradient-to-l from-black/75 via-black/35 to-transparent"
                }`}
              />

              {/* Case Study Label */}
              <p className="absolute left-6 bottom-[100px] text-[9px] tracking-[2px] uppercase text-zinc-600 z-10">
                Case Study {index + 1}
              </p>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-[10px] text-white mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
                  {project.category}
                </div>
                <h3
                  className="text-[26px] md:text-[30px] font-bold text-white leading-[1.15] tracking-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {project.title.split(" ").slice(0, 1).join(" ")}
                  <br />
                  {project.title.split(" ").slice(1, 3).join(" ")}
                  <br />
                  {project.title.split(" ").slice(3).join(" ")}
                </h3>
                <p className="text-xs text-zinc-500 mt-1">{project.year}</p>
              </div>

              {/* Year Badge */}
              <div className="absolute bottom-6 right-6 z-10 bg-black/70 border border-white/10 rounded-lg px-3 py-1 text-[11px] text-zinc-400">
                {project.year}
              </div>
            </div>

            {/* Right: Details Column */}
            <div className="flex-1 p-8 md:p-9 flex flex-col gap-0">
              {/* Top badges */}
              <div className="flex items-center gap-3 mb-5">
                <span className="px-3 py-1 rounded-[5px] text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 tracking-wide">
                  Selected work
                </span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">
                  {project.category}
                </span>
              </div>

              {/* Delivery Brief */}
              <div className="mb-5">
                <p className="text-[9px] tracking-[2.5px] uppercase text-zinc-600 mb-2">
                  Delivery Brief
                </p>
                <p className="text-[13px] text-zinc-400 leading-relaxed">
                  {project.delivery}
                </p>
              </div>

              {/* Challenge / Solution / Impact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                {[
                  { label: "Challenge", text: project.challenge },
                  { label: "Solution", text: project.solution },
                  { label: "Impact", text: project.impact },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[9px] tracking-[2px] uppercase text-indigo-400 mb-2">
                      {item.label}
                    </p>
                    <p className="text-[11.5px] text-zinc-500 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mb-5">
                <p className="text-[9px] tracking-[2px] uppercase text-zinc-600 mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full text-[10px] text-zinc-400 border border-white/10 bg-white/[0.03]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.featureTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-[6px] text-[10px] text-indigo-400 bg-indigo-500/[0.08] border border-indigo-500/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-auto flex gap-3">
                <motion.a
                  href={project.githubLink}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-[14px] border border-white/10 text-zinc-400 text-[12px] font-medium hover:bg-white/5 transition"
                >
                  G Source
                </motion.a>
                <motion.a
                  href={project.liveLink}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-[14px] text-white text-[12px] font-medium transition"
                  style={{
                    background: "linear-gradient(135deg, #7b6ef6, #a78bfa)",
                  }}
                >
                  <ExternalLink size={14} />
                  Live demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
