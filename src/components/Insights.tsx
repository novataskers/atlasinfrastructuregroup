"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    category: "Defense AI",
    date: "Feb 18, 2026",
    title: "Atlas Awarded $480M DoD Contract for Multi-Domain AI Command Systems",
    excerpt:
      "The Department of Defense has selected Atlas Infrastructure Group to deploy next-generation AI decision support across Joint All-Domain Command and Control (JADC2) networks.",
    image:
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=600&q=80",
    tag: "Press Release",
  },
  {
    category: "Technology",
    date: "Feb 12, 2026",
    title: "Introducing Atlas Prometheus: Frontier AI Model Purpose-Built for Classified Environments",
    excerpt:
      "Our latest large language model achieves state-of-the-art performance on intelligence analysis benchmarks while operating entirely within air-gapped sovereign infrastructure.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    tag: "Product Launch",
  },
  {
    category: "Healthcare AI",
    date: "Jan 28, 2026",
    title: "Atlas MedCore Reduces Combat Casualty Mortality Rate by 31% in Field Trials",
    excerpt:
      "Clinical data from forward operating bases across three theaters demonstrates Atlas MedCore's battlefield triage AI delivering unprecedented life-saving outcomes.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    tag: "Research",
  },
  {
    category: "Infrastructure",
    date: "Jan 15, 2026",
    title: "Atlas Expands Sovereign AI Data Center Network to 12 New Allied Nations",
    excerpt:
      "New facilities in Eastern Europe, Southeast Asia, and the Middle East bring Atlas's total sovereign compute footprint to 240 MW across 28 countries.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    tag: "Company News",
  },
];

export default function Insights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="insights"
      ref={ref}
      className="atlas-section py-32 bg-[#030e1e] atlas-grid-bg"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <span className="section-label">Latest</span>
            <div className="atlas-divider mt-3" />
            <h2 className="section-title mt-4">
              News &amp; <strong>Insights</strong>
            </h2>
          </div>
          <button className="atlas-btn-primary self-start flex items-center gap-2 group text-[10px]">
            All News
            <ArrowRight
              size={12}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(0,194,255,0.06)]">
          {insights.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-[#030e1e] group cursor-pointer hover:bg-[#071828] transition-all duration-400"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,14,30,0.8)] to-transparent" />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[8px] font-bold tracking-[0.2em] uppercase bg-[rgba(0,194,255,0.15)] border border-[rgba(0,194,255,0.3)] text-[#00c2ff] px-2.5 py-1">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[9px] font-semibold tracking-[0.15em] uppercase text-[#00c2ff]">
                    {item.category}
                  </span>
                  <span className="text-[#1a3a6b]">·</span>
                  <span className="text-[9px] tracking-wide text-[#3a5570]">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-[13px] font-semibold text-white leading-snug mb-3 group-hover:text-[#e0eaf5] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[11px] text-[#3a5570] leading-relaxed mb-5 line-clamp-3">
                  {item.excerpt}
                </p>

                <div className="flex items-center gap-2 text-[9px] font-semibold tracking-[0.15em] uppercase text-[#1a3a6b] group-hover:text-[#00c2ff] transition-colors">
                  Read More
                  <ArrowRight
                    size={10}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
