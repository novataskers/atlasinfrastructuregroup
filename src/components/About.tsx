"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="atlas-section py-32 bg-[#020b18]"
    >
      {/* Ambient glow right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Images collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&q=80"
                alt="Atlas AI Technology"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,11,24,0.5)] to-transparent" />
              <div className="absolute inset-0 border border-[rgba(0,194,255,0.15)]" />
            </div>

            {/* Secondary image */}
            <div className="absolute -bottom-8 -right-8 w-48 h-36 border-4 border-[#020b18]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                alt="Atlas Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(0,194,255,0.1)]" />
            </div>

            {/* Founded badge */}
            <div className="absolute -left-4 top-8 bg-[#071828] border border-[rgba(0,194,255,0.2)] px-5 py-3">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#8ba0b8] mb-1">
                Established
              </div>
              <div className="text-2xl font-bold text-white">2019</div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="section-label">Who We Are</span>
            <div className="atlas-divider mt-3" />
            <h2 className="section-title mt-4 mb-6">
              Built for the <br />
              <strong>Hardest Problems</strong>
            </h2>

            <p className="text-[#8ba0b8] text-[14px] leading-relaxed font-light mb-5">
              Atlas Infrastructure Group was founded by veterans of the defense,
              intelligence, and technology communities with a singular conviction:
              that advanced AI could — and must — be built specifically for
              missions where failure is not an option.
            </p>
            <p className="text-[#8ba0b8] text-[14px] leading-relaxed font-light mb-8">
              Unlike commercial AI companies that retrofit consumer products for
              government use, Atlas engineers mission-specific AI from the
              ground up. Every system we build operates at the intersection of
              security, reliability, and performance.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { title: "Mission First", desc: "Every decision optimized for operational outcomes" },
                { title: "Sovereign AI", desc: "Compute and data that stays under your control" },
                { title: "Zero Compromise", desc: "Security and performance are not tradeoffs" },
                { title: "Allied Proven", desc: "Deployed and trusted across 40+ nations" },
              ].map((v) => (
                <div key={v.title} className="border-l-2 border-[rgba(0,194,255,0.3)] pl-4">
                  <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-white mb-1">
                    {v.title}
                  </div>
                  <div className="text-[11px] text-[#3a5570] leading-relaxed">
                    {v.desc}
                  </div>
                </div>
              ))}
            </div>

            <button className="atlas-btn-primary flex items-center gap-2 group">
              Our Story
              <ArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>
        </div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-24"
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="section-label">Leadership</span>
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.05)]" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "James R. Caldwell",
                role: "Chief Executive Officer",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
              },
              {
                name: "Dr. Sarah Lin",
                role: "Chief AI Officer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
              },
              {
                name: "Marcus Webb",
                role: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
              },
              {
                name: "Col. (Ret.) Diana Park",
                role: "Chief Defense Officer",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
              },
            ].map((p) => (
              <div key={p.name} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-52 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,11,24,0.7)] to-transparent" />
                  <div className="absolute inset-0 border border-[rgba(0,194,255,0.1)] group-hover:border-[rgba(0,194,255,0.3)] transition-colors duration-300" />
                </div>
                <div className="text-[12px] font-semibold text-white tracking-wide">
                  {p.name}
                </div>
                <div className="text-[10px] tracking-[0.1em] uppercase text-[#3a5570] mt-0.5">
                  {p.role}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
