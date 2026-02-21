"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Cpu, Shield, Brain, Network, Satellite, Lock } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Frontier AI Software",
    description:
      "Purpose-built large language models and multimodal AI systems trained on classified and open-source intelligence datasets for mission-critical applications.",
    tags: ["LLM Deployment", "Multimodal AI", "Edge Inference"],
    accent: "#00c2ff",
  },
  {
    icon: Cpu,
    title: "AI Infrastructure",
    description:
      "Sovereign compute clusters, secure GPU fabrics, and distributed training infrastructure designed for the world's most demanding AI workloads.",
    tags: ["Sovereign Compute", "GPU Clusters", "MLOps Pipeline"],
    accent: "#00c2ff",
  },
  {
    icon: Shield,
    title: "Defense AI Systems",
    description:
      "AI-enabled decision support, autonomous systems integration, and real-time threat analysis platforms built to meet DoD standards and allied nation requirements.",
    tags: ["ISR Fusion", "Threat Analysis", "C2 Systems"],
    accent: "#00c2ff",
  },
  {
    icon: Network,
    title: "Intelligence Platforms",
    description:
      "End-to-end data fusion and analytics platforms that transform disparate intelligence streams into actionable, high-confidence operational intelligence.",
    tags: ["OSINT Fusion", "Signal Processing", "Pattern of Life"],
    accent: "#00c2ff",
  },
  {
    icon: Satellite,
    title: "Space & Orbital AI",
    description:
      "Onboard AI processing for satellite constellations, space domain awareness, and next-generation ISR enabling persistent global coverage.",
    tags: ["Space Domain", "Orbital Analytics", "Persistent ISR"],
    accent: "#00c2ff",
  },
  {
    icon: Lock,
    title: "Cyber & Zero Trust",
    description:
      "AI-native cybersecurity architecture, zero-trust network frameworks, and autonomous threat hunting systems defending critical digital infrastructure.",
    tags: ["Zero Trust", "Threat Hunting", "AI-Driven SOC"],
    accent: "#00c2ff",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Capabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="capabilities"
      ref={ref}
      className="atlas-section py-32 bg-[#020b18] atlas-grid-bg"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(26,58,107,0.3)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-label">What We Build</span>
          <div className="atlas-divider mt-3" />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mt-4">
            <h2 className="section-title max-w-xl">
              Core <strong>Capabilities</strong>
              <br />& Solutions
            </h2>
            <p className="text-[#8ba0b8] text-base leading-relaxed max-w-md font-light">
              Atlas delivers integrated AI systems across the full spectrum—from
              raw compute to deployable intelligence—for the most complex
              operational environments on earth and beyond.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(0,194,255,0.08)]"
        >
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-[#020b18] p-8 group cursor-pointer relative overflow-hidden hover:bg-[#071828] transition-all duration-500"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,194,255,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 border border-[rgba(0,194,255,0.2)] flex items-center justify-center group-hover:border-[rgba(0,194,255,0.5)] transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-[#00c2ff] opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold tracking-wide text-white mb-3 uppercase text-[13px] tracking-[0.1em]">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-[#8ba0b8] text-[13px] leading-relaxed mb-6 font-light">
                  {cap.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 border border-[rgba(0,194,255,0.15)] text-[#8ba0b8] group-hover:border-[rgba(0,194,255,0.3)] group-hover:text-[#00c2ff] transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.15em] uppercase text-[#3a5570] group-hover:text-[#00c2ff] transition-colors duration-300">
                  Learn More
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <button className="atlas-btn-primary inline-flex items-center gap-2 group">
            View All Capabilities
            <ArrowRight
              size={13}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
