"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&q=80",
    label: "Defense & National Security",
    title: "Defining the Future of",
    titleBold: "AI-Powered Defense",
    subtitle:
      "Frontier-grade artificial intelligence that gives warfighters and decision-makers an asymmetric edge across all domains.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    label: "Critical Infrastructure",
    title: "Protecting What",
    titleBold: "Matters Most",
    subtitle:
      "Advanced AI infrastructure securing critical systems, supply chains, and national assets at enterprise scale.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
    label: "Frontier AI Software",
    title: "Intelligence at",
    titleBold: "Machine Speed",
    subtitle:
      "Atlas AI platforms process, analyze, and act on complex data streams in real-time—enabling decisions no human team could achieve alone.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 6000;

  const resetTimers = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(0);

    let p = 0;
    progressRef.current = setInterval(() => {
      p += 100 / (SLIDE_DURATION / 50);
      setProgress(Math.min(p, 100));
    }, 50);

    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
      p = 0;
      setProgress(0);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    resetTimers();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, []);

  const goTo = (i: number) => {
    setCurrent(i);
    resetTimers();
  };

  const slide = heroSlides[current];

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background images */}
      {heroSlides.map((s, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img
            src={s.image}
            alt={s.label}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(2,11,24,0.92)] via-[rgba(2,11,24,0.65)] to-[rgba(2,11,24,0.3)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,11,24,0.8)] via-transparent to-[rgba(2,11,24,0.3)]" />
        </motion.div>
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 atlas-grid-bg opacity-40" />

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,194,255,0.4)] to-transparent"
          animate={{ y: ["0%", "100vh"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-[1400px] mx-auto px-6 lg:px-12 pt-20">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#00c2ff]" />
            <span className="section-label">{slide.label}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-white mb-6">
            {slide.title}
            <br />
            <span className="font-bold">{slide.titleBold}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#8ba0b8] text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button className="atlas-btn-primary flex items-center gap-2 group">
              Explore Capabilities
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="atlas-btn-secondary flex items-center gap-2">
              Our Technology
            </button>
          </div>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-6">
          {heroSlides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="flex flex-col gap-1.5 group"
            >
              <span
                className={`text-[9px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                  i === current ? "text-[#00c2ff]" : "text-[#3a5570]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-16 h-px bg-[#1a3a6b] relative overflow-hidden">
                {i === current && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-[#00c2ff]"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 right-6 lg:right-12 flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#3a5570] rotate-90 mb-2">
            Scroll
          </span>
          <ChevronDown size={16} className="text-[#3a5570]" />
        </motion.div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[rgba(2,11,24,0.85)] border-t border-[rgba(0,194,255,0.1)] backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex divide-x divide-[rgba(255,255,255,0.06)]">
            {[
              { val: "40+", label: "Nations Served" },
              { val: "99.99%", label: "Platform Uptime" },
              { val: "$2.4B+", label: "Programs Supported" },
              { val: "100ms", label: "Decision Latency" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex-1 py-4 px-6 text-center hidden md:block"
              >
                <div className="text-xl font-bold text-white mb-0.5">
                  {stat.val}
                </div>
                <div className="text-[9px] tracking-[0.2em] uppercase text-[#8ba0b8]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
