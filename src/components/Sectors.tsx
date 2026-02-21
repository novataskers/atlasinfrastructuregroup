"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const sectors = [
  {
    id: "defense",
    label: "01",
    title: "Defense & National Security",
    subtitle: "Warfighter Advantage",
    description:
      "Atlas delivers AI systems for multi-domain operations, intelligence fusion, autonomous logistics, and battlefield decision support. Our platforms are used by allied forces across NATO and partner nations to achieve decision superiority.",
    image:
      "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=900&q=80",
    stats: [
      { val: "15+", label: "Allied Nations" },
      { val: "24/7", label: "Operational Uptime" },
      { val: "10ms", label: "OODA Loop Speed" },
    ],
    features: [
      "Multi-Domain Operations AI",
      "ISR Fusion & Analysis",
      "Autonomous Logistics",
      "Command Decision Support",
    ],
  },
  {
    id: "health",
    label: "02",
    title: "Healthcare & Life Sciences",
    subtitle: "Mission-Critical Medical AI",
    description:
      "From battlefield triage AI to large-scale genomic analysis, Atlas deploys medical intelligence systems that save lives and accelerate breakthroughs. Our HIPAA-compliant, air-gapped platforms serve military medical commands and civilian health agencies.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
    stats: [
      { val: "2.4M+", label: "Patient Records Analyzed" },
      { val: "94%", label: "Diagnostic Accuracy" },
      { val: "8min", label: "Avg Triage Time Reduction" },
    ],
    features: [
      "Clinical Decision AI",
      "Genomic Intelligence",
      "Battlefield Medical Triage",
      "Drug Discovery Acceleration",
    ],
  },
  {
    id: "infrastructure",
    label: "03",
    title: "Critical Infrastructure",
    subtitle: "Resilient Grid Intelligence",
    description:
      "AI-driven monitoring, predictive maintenance, and autonomous response systems protecting power grids, water systems, financial networks, and communications infrastructure against natural and adversarial threats.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    stats: [
      { val: "99.97%", label: "Grid Uptime Protected" },
      { val: "340+", label: "Assets Monitored" },
      { val: "3min", label: "Mean Time to Detect" },
    ],
    features: [
      "Predictive Maintenance AI",
      "Threat Detection & Response",
      "Supply Chain Resilience",
      "Autonomous Grid Management",
    ],
  },
  {
    id: "space",
    label: "04",
    title: "Space & Aerospace",
    subtitle: "Orbital Intelligence",
    description:
      "Onboard AI for satellite constellations, launch vehicle guidance, space domain awareness, and persistent ISR. Atlas systems operate in the harshest environment known — providing uninterrupted global coverage and space situational awareness.",
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=900&q=80",
    stats: [
      { val: "160+", label: "Satellites Tracked" },
      { val: "5ms", label: "On-Orbit Inference" },
      { val: "LEO/GEO", label: "Full Orbit Coverage" },
    ],
    features: [
      "Space Domain Awareness",
      "Onboard Edge AI",
      "ISR Satellite Analytics",
      "Launch Guidance Systems",
    ],
  },
];

export default function Sectors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const sector = sectors[active];

  return (
    <section
      id="sectors"
      ref={ref}
      className="atlas-section py-32 bg-[#030e1e]"
    >
      {/* Ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(0,194,255,0.04)_0%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-label">Where We Operate</span>
          <div className="atlas-divider mt-3" />
          <h2 className="section-title mt-4">
            Mission <strong>Sectors</strong>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-wrap gap-0 mb-0 border-b border-[rgba(255,255,255,0.06)]"
        >
          {sectors.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`relative px-6 py-4 text-[10px] font-semibold tracking-[0.18em] uppercase transition-all duration-300 ${
                i === active
                  ? "text-[#00c2ff] border-b-2 border-[#00c2ff] -mb-px"
                  : "text-[#3a5570] hover:text-[#8ba0b8]"
              }`}
            >
              <span className="mr-2 text-[#1a3a6b]">{s.label}</span>
              {s.subtitle}
            </button>
          ))}
        </motion.div>

        {/* Content Panel */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0"
        >
          {/* Left: Info */}
          <div className="bg-[#071828] border border-t-0 border-[rgba(0,194,255,0.1)] p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl lg:text-3xl font-light text-white mb-2 leading-tight">
                {sector.title}
              </h3>
              <div className="atlas-divider mb-6" />
              <p className="text-[#8ba0b8] text-[14px] leading-relaxed font-light mb-8">
                {sector.description}
              </p>

              {/* Features */}
              <div className="space-y-2.5 mb-10">
                {sector.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#00c2ff] rounded-full flex-shrink-0" />
                    <span className="text-[12px] tracking-wide text-[#c0d0e0]">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[rgba(255,255,255,0.06)]">
              {sector.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-bold text-white mb-1">
                    {s.val}
                  </div>
                  <div className="text-[9px] tracking-[0.15em] uppercase text-[#3a5570]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <button className="atlas-btn-primary mt-8 self-start flex items-center gap-2 group text-[10px]">
              Explore Sector
              <ArrowRight
                size={12}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Right: Image */}
          <div className="relative min-h-[400px] lg:min-h-0 overflow-hidden">
            <img
              src={sector.image}
              alt={sector.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071828] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,11,24,0.6)] to-transparent" />

            {/* Sector label overlay */}
            <div className="absolute bottom-8 right-8">
              <div className="text-[80px] font-black text-white opacity-[0.04] leading-none select-none">
                {sector.label}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
