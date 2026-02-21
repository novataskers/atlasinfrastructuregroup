"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MissionBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a1628 0%, #071828 50%, #0a1628 100%)",
      }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[rgba(10,22,40,0.85)] to-[#0a1628]" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 atlas-grid-bg opacity-30" />

      {/* Cyan accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,194,255,0.3)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,194,255,0.3)] to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Our Mission</span>
          <div className="atlas-divider mx-auto mt-3 mb-8" />

          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-white max-w-5xl mx-auto">
            "To build the{" "}
            <span className="font-bold atlas-text-gradient-2">
              AI infrastructure
            </span>{" "}
            that powers humanity's most critical missions — from the{" "}
            <span className="font-bold">battlefield</span> to the{" "}
            <span className="font-bold">operating room</span> to the{" "}
            <span className="font-bold">edge of space</span>."
          </blockquote>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-[rgba(255,255,255,0.2)]" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#8ba0b8]">
              Atlas Infrastructure Group™
            </span>
            <div className="w-12 h-px bg-[rgba(255,255,255,0.2)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
