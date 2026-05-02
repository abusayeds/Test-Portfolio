/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState, useRef } from "react";
import { Download, MessageCircle, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import AboutSection from "@/components/common/AboutSection";
import TechStackSection from "@/components/common/TechStackSection";
import ExperienceSection from "@/components/common/ExperienceSection";
import CaseStudiesSection from "@/components/common/CaseStudiesSection";
import ContactSection from "@/components/common/Contactsection";
import GithubSection from "@/components/common/GithubSection";

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};
const slideLeft: any = {
  hidden: { opacity: 0, x: -60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};
const slideRight: any = {
  hidden: { opacity: 0, x: 60 },
  visible: () => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
  }),
};
const scaleIn: any = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function AnimatedSection({
  children,
  className = "",
  variants = fadeUp,
  custom = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: typeof fadeUp;
  custom?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={custom}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StatCard({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="glass p-6 sm:p-8 rounded-3xl text-center cursor-default"
    >
      <motion.p
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-indigo-400"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      >
        {value}
      </motion.p>
      <p className="mt-2 text-zinc-400 text-sm sm:text-base">{label}</p>
    </motion.div>
  );
}

export default function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollY } = useScroll();
  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10,10,20,0)", "rgba(10,10,20,0.95)"],
  );

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* ── Navbar ── */}
      <motion.nav className="fixed top-0 md:top-6 left-0 right-0 z-50">
        <motion.div
          style={{ backgroundColor: navBg }}
          className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative backdrop-blur-xl border border-white/20 rounded-lg"
        >
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-9 h-9 rounded-2xl bg-white/20 flex items-center justify-center text-white font-bold text-xl shadow-inner"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              A
            </motion.div>
            <div className="leading-tight">
              <p className="font-semibold text-base tracking-tighter">
                Abu Sayed
              </p>
              <p className="text-[10px] text-white/60 -mt-0.5 tracking-widest">
                FULL-STACK SOFTWARE ENGINEER
              </p>
            </div>
          </motion.div>

          {/* Scroll Progress Bar - Center */}
          <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[min(500px,60vw)] h-[6px] bg-white/10 rounded overflow-hidden hidden md:block">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
              style={{ width: `${scrollProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Right buttons */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl text-sm font-medium transition-colors backdrop-blur-md"
            >
              <span className="hidden xs:inline">Let's Talk</span>
              <span className="xs:hidden">Talk</span>
              <MessageCircle size={16} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Mobile progress bar */}
        <div className="h-[2px] bg-white/5 md:hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </motion.nav>
      <div className="px-3 sm:px-0 m-auto md:max-w-5xl lg:max-w-7xl">
        <div className="mx-auto pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-20 md:flex justify-between gap-10 md:gap-12">
          {/* Left Side */}
          <div className="w-full md:flex-1 space-y-8">
            {/* Badge */}
            <AnimatedSection custom={0}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                FULL-STACK ENGINEER BUILDING SCALABLE WEB SYSTEMS
              </motion.div>
            </AnimatedSection>

            {/* Heading */}
            <AnimatedSection custom={1} variants={slideLeft}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] whitespace-pre font-semibold tracking-tighter text-white">
                Full Stack <span className="text-gradient">Developer</span>
              </h1>
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection custom={2} variants={fadeUp}>
              <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-lg leading-relaxed">
                I build software that feels professional in both code and
                presentation: clear interfaces, dependable flows, and product
                decisions that make sense to the people using them.
              </p>
            </AnimatedSection>

            {/* Action Buttons */}
            <AnimatedSection custom={3} variants={fadeUp}>
              <div className="flex flex-wrap gap-3 text-sm">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(99,102,241,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl font-medium flex items-center gap-2.5 transition-shadow"
                >
                  View Selected Work
                  <ExternalLink size={16} />
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 border border-white/20 rounded-2xl font-medium flex items-center gap-2.5 transition-colors"
                >
                  Start a conversation
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 border border-white/20 rounded-2xl font-medium flex items-center gap-2.5 transition-colors"
                >
                  Download CV <Download size={16} />
                </motion.button>
              </div>
            </AnimatedSection>

            {/* Info Cards */}
            <div className="space-y-8">
              {[
                {
                  label: "CURRENT ROLE",
                  title: "Software Engineer Intern",
                  sub: "Shipping production-facing features at Company",
                  subColor: "text-zinc-400",
                },
                {
                  label: "CORE STACK",
                  title:
                    "Next.js · Tailwind · TypeScript · Spring Boot · Python",
                  sub: null,
                  subColor: "",
                },
                {
                  label: "LOCATION",
                  title: "Dhaka, Bangladesh",
                  sub: "Open to opportunities",
                  subColor: "text-emerald-400",
                },
              ].map((card, i) => (
                <AnimatedSection key={card.label} custom={i} variants={fadeUp}>
                  <motion.div
                    whileHover={{ x: 6, borderColor: "rgba(255,255,255,0.2)" }}
                    className="glass p-5 rounded-3xl border border-white/10 transition-colors"
                  >
                    <p className="text-[10px] tracking-[2px] text-zinc-500 mb-1">
                      {card.label}
                    </p>
                    <p className="font-semibold text-sm sm:text-base">
                      {card.title}
                    </p>
                    {card.sub && (
                      <p className={`text-xs sm:text-sm mt-1 ${card.subColor}`}>
                        {card.sub}
                      </p>
                    )}
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Card */}
          <AnimatedSection variants={slideRight}>
            <motion.div
              className="w-full md:flex-[0.9] lg:flex-[0.8] relative md:mt-0 mt-8"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="rounded-3xl overflow-hidden  ">
                {/* Image Container */}
                <div className=" bg-dark-card p-5 rounded-4xl">
                  <div className="relative h-[300px] sm:h-[320px] md:h-[400px] lg:h-[440px] overflow-hidden ">
                    <Image
                      src="https://avatars.githubusercontent.com/u/108521995?v=4"
                      alt="Abu Sayed"
                      fill
                      className="object-cover rounded-4xl"
                      priority
                    />

                    {/* FIX 2: gradient overlay এ z-[1] যোগ */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent rounded-4xl via-black/40 to-black/85 z-[1]" />

                    {/* FIX 3: text overlay এ z-[2] যোগ */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white z-[2]">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-[10px] tracking-widest mb-3 sm:mb-4">
                          OPEN TO FULL-TIME ROLES & TECHNICAL COLLABORATIONS
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
                          Product-minded engineering
                          <br className="hidden sm:block" /> with a clear visual
                          finish
                        </h3>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="p-6 sm:p-8 space-y-6 rounded-4xl mt-4 bg-dark-card ">
                  <div>
                    <p className="uppercase text-[10px] tracking-[2px] text-zinc-400 mb-4">
                      WHAT I FOCUS ON
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Frontend structure, readable UI systems, cleaner spacing",
                        "Product delivery — interfaces shaped around actual workflow",
                        "Scalable Backend Systems with Spring Boot & ASP.NET",
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-sm sm:text-[15px] text-zinc-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                        >
                          <span className="text-indigo-400 mt-1 flex-shrink-0">
                            •
                          </span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-2 pt-4 border-t border-white/10">
                    {[
                      { label: "GitHub" },
                      { label: "LinkedIn" },
                      { label: "Twitter" },
                    ].map(({ label }) => (
                      <motion.a
                        key={label}
                        href="#"
                        aria-label={label}
                        whileHover={{
                          scale: 1.15,
                          backgroundColor: "rgba(255,255,255,0.08)",
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-2xl transition-colors text-zinc-400 hover:text-white"
                      >
                        <p>{label}</p>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
        <AboutSection />
        <TechStackSection />
        <ExperienceSection />
        <CaseStudiesSection />
        <ContactSection />
        <GithubSection />
      </div>
    </main>
  );
}
