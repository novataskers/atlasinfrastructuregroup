"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutAtlasSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="about" ref={ref} className="atlas-section py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="section-label text-black/60"
        >
          About Atlas Infrastructure Group
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.9 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="atlas-divider mt-3 origin-left"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="text-black tracking-[0.12em] uppercase leading-[1.15] font-[750] text-[clamp(28px,3.6vw,46px)]">
              Powering Tomorrow&apos;s Foundations with{" "}
              <span className="text-black font-[850]">Frontier-Level AI</span>
            </h2>
          </motion.div>

          <div className="lg:col-span-5 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-black/70 text-[15px] leading-[1.85] font-normal"
            >
              Atlas Infrastructure Group is at the forefront of AI innovation, serving as the powerhouse behind transformative platforms like HireMindX, IxraAI, and the AIG Engine series (AIG Engine 1, 2, and 3)—the most advanced frontier-level AI models delivered as scalable software services.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.30, ease: [0.16, 1, 0.3, 1] }}
              className="text-black/70 text-[15px] leading-[1.85] font-normal"
            >
              As a premier AI service and software solutions provider, we specialize in building the essential infrastructure for the future. Our cutting-edge technologies—AI agents, autonomous systems, and advanced infrastructure carriers—accelerate industries across digital ecosystems, energy systems, defense, and beyond. We turn complex challenges into seamless efficiencies, empowering organizations to thrive in a rapidly evolving world.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
