/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiVite,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiInertia,
  SiPython,
  SiFlask,
  SiFastapi,
  SiPhp,
  SiKotlin,
  SiCplusplus,
  // New imports for the image tools
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiFirebase,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiIntellijidea,
  SiGit,
  SiGithub,
  SiJest,
  SiVitest,
  SiEslint,
  SiPrettier,
  SiFigma,
  SiPostman,
  SiSwagger,
  SiJupyter,
} from "react-icons/si";

const techs = {
  frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML", icon: SiHtml5 },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "MUI", icon: SiMui },
    { name: "Vite", icon: SiVite },
  ],

  backend: [
    { name: "Java", icon: SiSpringboot }, // or use SiJava if you import it
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Laravel", icon: SiLaravel },
    { name: "Inertia.js", icon: SiInertia },
    { name: "Python", icon: SiPython },
    { name: "Flask", icon: SiFlask },
    { name: "FastAPI", icon: SiFastapi },
    { name: "PHP", icon: SiPhp },
    { name: "Kotlin", icon: SiKotlin },
    { name: "C++", icon: SiCplusplus },
  ],

  // === New Sections from your image ===
  databases: [
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "SQLite", icon: SiSqlite },
    // { name: "Microsoft SQL Server", icon: SiMicrosoftsqlserver },
    { name: "Firebase", icon: SiFirebase },
  ],

  cloudDevops: [
    // { name: "Microsoft Azure", icon: SiMicrosoftazure },
    // { name: "AWS", icon: SiAmazonaws },
    { name: "Docker", icon: SiDocker },
    { name: "GitHub Actions", icon: SiGithubactions },
    { name: "Vercel", icon: SiVercel },
    { name: "Render", icon: SiVercel }, // SiRender doesn't exist in simple-icons; fallback to Vercel style
  ],

  devTools: [
    // { name: "VS Code", icon: SiVscode },
    { name: "IntelliJ IDEA", icon: SiIntellijidea },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Jest", icon: SiJest },
    { name: "Vitest", icon: SiVitest },
    { name: "ESLint", icon: SiEslint },
    { name: "Prettier", icon: SiPrettier },
    { name: "Figma", icon: SiFigma },
    { name: "Postman", icon: SiPostman },
    { name: "Swagger", icon: SiSwagger },
    { name: "Jupyter Notebook", icon: SiJupyter },
  ],
};

const container: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const item: any = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export default function TechStackSection() {
  return (
    <div className="min-h-screen mt-10 bg-dark-card rounded-4xl py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <p className="uppercase text-xs tracking-[3px] text-indigo-400 mb-3">
            TOOLS & TECH STACK
          </p>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white">
            The tools I keep closest
            <br />
            to the work.
          </h2>
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto md:mx-0">
            Built like a dedicated section instead of loose badges: the core
            technologies, delivery tools, and product workflow essentials I
            return to most often.
          </p>
        </motion.div>

        <div className="space-y-20">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
              <span className="text-indigo-400">●</span> Frontend
              <span className="text-xs text-zinc-500">
                — UI frameworks, styling, and browser-focused tooling
              </span>
            </h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {techs.frontend.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover="hover"
                  className="glass px-6 py-3 rounded-2xl flex items-center gap-3 text-sm font-medium text-white card-hover cursor-pointer border border-white/10 hover:border-indigo-500/30"
                >
                  <tech.icon className="text-2xl text-accent" />
                  {tech.name}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
              <span className="text-purple-400">●</span> Backend
              <span className="text-xs text-zinc-500">
                — Server-side runtime, frameworks, and languages
              </span>
            </h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {techs.backend.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover="hover"
                  className="glass px-6 py-3 rounded-2xl flex items-center gap-3 text-sm font-medium text-white card-hover cursor-pointer border border-white/10 hover:border-purple-500/30"
                >
                  <tech.icon className="text-2xl text-accent-2" />
                  {tech.name}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Databases & Data */}
          <div>
            <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
              <span className="text-emerald-400">●</span> Databases & Data
              <span className="text-xs text-zinc-500">
                — Data persistence, queries, and cloud storage
              </span>
            </h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {techs.databases.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover="hover"
                  className="glass px-6 py-3 rounded-2xl flex items-center gap-3 text-sm font-medium text-white card-hover cursor-pointer border border-white/10 hover:border-emerald-500/30"
                >
                  <tech.icon className="text-2xl text-emerald-400" />
                  {tech.name}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Cloud & DevOps */}
          <div>
            <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
              <span className="text-sky-400">●</span> Cloud & DevOps
              <span className="text-xs text-zinc-500">
                — Infrastructure, containers, and deployment
              </span>
            </h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {techs.cloudDevops.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover="hover"
                  className="glass px-6 py-3 rounded-2xl flex items-center gap-3 text-sm font-medium text-white card-hover cursor-pointer border border-white/10 hover:border-sky-500/30"
                >
                  <tech.icon className="text-2xl text-sky-400" />
                  {tech.name}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Development Tools */}
          <div>
            <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
              <span className="text-amber-400">●</span> Development Tools
              <span className="text-xs text-zinc-500">
                — IDE, version control, testing, and design
              </span>
            </h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {techs.devTools.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover="hover"
                  className="glass px-6 py-3 rounded-2xl flex items-center gap-3 text-sm font-medium text-white card-hover cursor-pointer border border-white/10 hover:border-amber-500/30"
                >
                  <tech.icon className="text-2xl text-amber-400" />
                  {tech.name}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
