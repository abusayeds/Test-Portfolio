"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="min-h-screen bg-dark-card rounded-4xl py-16 px-6 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <p className="text-[10px] tracking-[3px] uppercase text-zinc-500 mb-5">
          Contact
        </p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Let us make the next
          <br />
          build feel stronger from
          <br />
          the start.
        </motion.h2>

        {/* Sub text */}
        <p className="text-[13px] text-zinc-500 leading-relaxed max-w-sm mb-10">
          If you have a product idea, SE opportunity, collaboration, or a
          portfolio review request, I am happy to talk through it with clear
          expectations and a focused approach.
        </p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            {/* Best Fit For */}
            <div className="border border-white/[0.07] rounded-2xl bg-[#131a24] p-5 relative">
              <p className="text-[9px] tracking-[2px] uppercase text-zinc-600 mb-3">
                Best Fit For
              </p>
              <p className="text-[13px] text-zinc-300 leading-relaxed font-medium">
                SE roles, focused freelance work, and teams that value both code
                quality and presentation.
              </p>
              {/* small circle indicator */}
              <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full border border-white/10 bg-[#1e2a3a] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
              </div>
            </div>

            {/* Email */}
            <motion.a
              href="mailto:isuranga880@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between border border-white/[0.07] rounded-2xl bg-[#131a24] px-5 py-4 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl border border-white/[0.07] bg-[#1a2332] flex items-center justify-center flex-shrink-0">
                  <Mail size={15} className="text-zinc-400" />
                </div>
                <div>
                  <p className="text-[9px] tracking-[2px] uppercase text-zinc-600 mb-1">
                    Email
                  </p>
                  <p className="text-[13px] text-zinc-300 font-medium">
                    isuranga880@gmail.com
                  </p>
                </div>
              </div>
              <div className="w-7 h-7 rounded-lg border border-white/[0.07] bg-[#1a2332] flex items-center justify-center opacity-60 group-hover:opacity-100 transition">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-zinc-400 rotate-[-45deg]"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+94771732201"
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between border border-white/[0.07] rounded-2xl bg-[#131a24] px-5 py-4 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl border border-white/[0.07] bg-[#1a2332] flex items-center justify-center flex-shrink-0">
                  <Phone size={15} className="text-zinc-400" />
                </div>
                <div>
                  <p className="text-[9px] tracking-[2px] uppercase text-zinc-600 mb-1">
                    Phone
                  </p>
                  <p className="text-[13px] text-zinc-300 font-medium">
                    +94 77 173 2201
                  </p>
                </div>
              </div>
              <div className="w-7 h-7 rounded-lg border border-white/[0.07] bg-[#1a2332] flex items-center justify-center opacity-60 group-hover:opacity-100 transition">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-zinc-400 rotate-[-45deg]"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between border border-white/[0.07] rounded-2xl bg-[#131a24] px-5 py-4 group cursor-default"
            >
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl border border-white/[0.07] bg-[#1a2332] flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} className="text-zinc-400" />
                </div>
                <div>
                  <p className="text-[9px] tracking-[2px] uppercase text-zinc-600 mb-1">
                    Location
                  </p>
                  <p className="text-[13px] text-zinc-300 font-medium">
                    Matale, Sri Lanka
                  </p>
                </div>
              </div>
              <div className="w-7 h-7 rounded-lg border border-white/[0.07] bg-[#1a2332] flex items-center justify-center opacity-60 group-hover:opacity-100 transition">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-zinc-400 rotate-[-45deg]"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: "GitHub", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Medium", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "WhatsApp", href: "#" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.07] bg-[#131a24] text-zinc-400 text-[11px] hover:text-zinc-200 hover:border-white/[0.15] transition"
                >
                  O{s.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — Message Form */}
          <div className="border border-white/[0.07] rounded-2xl bg-[#131a24] p-6 flex flex-col">
            <p className="text-[9px] tracking-[2px] uppercase text-zinc-600 mb-3">
              Message Form
            </p>
            <h3
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Start the conversation
            </h3>
            <p className="text-[12px] text-zinc-500 mb-6 leading-relaxed">
              Share the goal, the stage you are in, and what kind of help you
              need.
            </p>

            <div className="flex flex-col gap-4 flex-1">
              {/* Name + Email row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] text-zinc-500 mb-1.5 block">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full bg-[#0d1117] border border-white/[0.07] rounded-xl px-4 py-3 text-[12px] text-zinc-300 placeholder:text-zinc-600 outline-none focus:border-indigo-500/50 transition"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-zinc-500 mb-1.5 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@email.com"
                    className="w-full bg-[#0d1117] border border-white/[0.07] rounded-xl px-4 py-3 text-[12px] text-zinc-300 placeholder:text-zinc-600 outline-none focus:border-indigo-500/50 transition"
                  />
                </div>
              </div>

              {/* Project Brief */}
              <div className="flex-1">
                <label className="text-[10px] text-zinc-500 mb-1.5 block">
                  Project brief
                </label>
                <textarea
                  placeholder="Tell me what you are building, what stage you are in, and how I can help."
                  rows={6}
                  className="w-full bg-[#0d1117] border border-white/[0.07] rounded-xl px-4 py-3 text-[12px] text-zinc-300 placeholder:text-zinc-600 outline-none focus:border-indigo-500/50 transition resize-none"
                />
              </div>

              {/* Send Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl text-white text-[13px] font-medium flex items-center justify-center gap-2 transition"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                }}
              >
                <Send size={14} />
                Send message
              </motion.button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-white/[0.05]">
          <p className="text-[10px] text-zinc-700">
            2026 Anushka Isuranga. full stack software engineer portfolio.
          </p>
          <p className="text-[10px] tracking-[2px] uppercase text-zinc-700">
            Matale / Sri Lanka
          </p>
        </div>
      </div>
    </div>
  );
}
