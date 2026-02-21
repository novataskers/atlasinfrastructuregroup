"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TechShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="technology"
      ref={ref}
      className="atlas-section py-32 bg-[#020b18]"
    >
      {/* Full-width dark bg with content */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="section-label">The Platform</span>
          <div className="atlas-divider mx-auto mt-3" />
          <h2 className="section-title mt-4">
            Atlas <strong>Core Platform</strong>
          </h2>
          <p className="text-[#8ba0b8] text-[14px] font-light max-w-lg mx-auto mt-4 leading-relaxed">
            The unified AI operating system powering every Atlas solution —
            from edge nodes to sovereign data centers to orbital assets.
          </p>
        </motion.div>

        {/* Platform diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Layer 1: Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative"
          >
            <div className="atlas-card p-8 h-full">
              <div className="text-[9px] tracking-[0.25em] uppercase text-[#1a3a6b] mb-4 font-semibold">
                Layer 01 — Foundation
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">
                Sovereign Compute
              </h3>
              <p className="text-[#8ba0b8] text-[13px] leading-relaxed mb-6 font-light">
                Purpose-built GPU clusters, edge nodes, and air-gapped data
                centers designed for classified workloads at any classification
                level.
              </p>
              <div className="space-y-2">
                {["H100/A100 GPU Clusters", "Air-Gapped Architecture", "Multi-Cloud Sovereign", "Edge Deployment"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-[11px] text-[#8ba0b8]">
                    <div className="w-1 h-1 bg-[#00c2ff] rounded-full" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Layer 2: Intelligence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="relative"
          >
            <div className="atlas-card p-8 h-full border-[rgba(0,194,255,0.3)]">
              {/* Featured badge */}
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent" />
              <div className="text-[9px] tracking-[0.25em] uppercase text-[#00c2ff] mb-4 font-semibold">
                Layer 02 — Intelligence
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">
                Atlas Prometheus AI
              </h3>
              <p className="text-[#8ba0b8] text-[13px] leading-relaxed mb-6 font-light">
                Frontier large language models and multimodal AI systems fine-tuned
                on classified and unclassified datasets, with advanced RLHF
                alignment for operational accuracy.
              </p>
              <div className="space-y-2">
                {["470B Parameter Foundation Model", "Multimodal ISR Analysis", "Real-time RAG on Classified Data", "Adversarial Robustness"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-[11px] text-[#8ba0b8]">
                    <div className="w-1 h-1 bg-[#00c2ff] rounded-full" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Layer 3: Deployment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="relative"
          >
            <div className="atlas-card p-8 h-full">
              <div className="text-[9px] tracking-[0.25em] uppercase text-[#1a3a6b] mb-4 font-semibold">
                Layer 03 — Deployment
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">
                Operational Integration
              </h3>
              <p className="text-[#8ba0b8] text-[13px] leading-relaxed mb-6 font-light">
                APIs, SDKs, and pre-built integrations for C2 systems,
                EHR platforms, SCADA networks, and custom mission applications
                — deployable in 72 hours.
              </p>
              <div className="space-y-2">
                {["JADC2 Native Integration", "EMR/EHR Connectors", "SCADA/ICS Adapters", "FedRAMP High Certified"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-[11px] text-[#8ba0b8]">
                    <div className="w-1 h-1 bg-[#00c2ff] rounded-full" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(0,194,255,0.08)]"
        >
          {[
            { val: "< 10ms", label: "Inference Latency" },
            { val: "470B", label: "Model Parameters" },
            { val: "TS/SCI", label: "Clearance Level" },
            { val: "IL6", label: "Impact Level" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-[#020b18] py-8 px-6 text-center hover:bg-[#071828] transition-colors"
            >
              <div className="text-2xl font-bold text-white mb-1">{s.val}</div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-[#3a5570]">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
