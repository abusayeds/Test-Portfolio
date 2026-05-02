"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Users } from "lucide-react";

export default function ExperienceSection() {
  return (
    <div className="min-h-screen bg-dark-card rounded-4xl mt-10 text-white overflow-hidden relative">
      {/* Background Gradient */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 text-xs tracking-[3px] uppercase border border-white/10 rounded-full mb-4"
          >
            EXPERIENCE
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold leading-none mb-6 text-gradient">
            A timeline that reads like
            <br />
            real progress, not filler.
          </h1>

          <p className="max-w-2xl text-lg text-[#94a3b8] leading-relaxed">
            My path combines education, leadership, and hands-on engineering
            work. The goal here is simple: make each step easy to scan, easy to
            understand, and clearly tied to what it added to the craft.
          </p>
        </div>

        {/* Glowing Orb */}
        <div className="absolute top-32 right-20 w-6 h-6 rounded-full bg-white shadow-[0_0_80px_30px_#a855f7] z-20" />

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current Role Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass rounded-3xl p-8 card-gradient card-hover border border-white/5 group relative overflow-hidden h-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="uppercase text-xs tracking-widest text-[#6366f1]">
                  CURRENT ROLE
                </div>
                <div className="text-2xl font-semibold mt-1">
                  Intern Full-Stack Software Developer
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#94a3b8]">
                <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-3 h-3" />
                </div>
                <span>Bitzify</span>
              </div>
              <div className="flex items-center gap-3 text-[#94a3b8]">
                <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-3 h-3" />
                </div>
                <span>2025 — Present</span>
              </div>
            </div>

            <div className="mt-auto pt-12 border-t border-white/10 text-sm text-[#94a3b8] group-hover:text-white transition-colors">
              Building scalable web applications with modern tech stack
            </div>

            {/* Decorative line */}
            <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.div>

          {/* Academic Track Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass rounded-3xl p-8 card-gradient card-hover border border-white/5 group relative overflow-hidden h-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="uppercase text-xs tracking-widest text-[#a855f7]">
                  ACADEMIC TRACK
                </div>
                <div className="text-2xl font-semibold mt-1 leading-tight">
                  BSc in Computer Science with Artificial Intelligence
                </div>
                <div className="text-sm text-[#6366f1]">(Reading)</div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-[#94a3b8] mb-1">
                National Institute of Business Management
              </div>
              <div className="text-xs uppercase tracking-widest text-white/50">
                Expected 2027
              </div>
            </div>

            <div className="mt-auto pt-12 border-t border-white/10 text-sm text-[#94a3b8] group-hover:text-white transition-colors">
              Focused on AI/ML, Full-Stack Development, and System Design
            </div>
          </motion.div>

          {/* Leadership Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass rounded-3xl p-8 card-gradient card-hover border border-white/5 group relative overflow-hidden h-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="uppercase text-xs tracking-widest text-cyan-400">
                  LEADERSHIP
                </div>
                <div className="text-2xl font-semibold mt-1">
                  Technology Leadership
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="font-medium">Community Contribution</div>
                <div className="text-sm text-[#94a3b8]">
                  Open Source • Tech Events • Mentorship
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 text-[120px] font-black text-white/5 select-none pointer-events-none">
              03
            </div>
          </motion.div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-20 flex justify-center">
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="h-px w-40 bg-gradient-to-r from-transparent via-[#6366f1] to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
