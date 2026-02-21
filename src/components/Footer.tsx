"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from "lucide-react";

const footerLinks = {
  Capabilities: [
    "AI Infrastructure",
    "Frontier AI Software",
    "Defense AI Systems",
    "Intelligence Platforms",
    "Space & Orbital AI",
    "Cyber & Zero Trust",
  ],
  Sectors: [
    "Defense & National Security",
    "Healthcare & Life Sciences",
    "Critical Infrastructure",
    "Space & Aerospace",
    "Financial Systems",
    "Energy & Utilities",
  ],
  Company: [
    "About Atlas",
    "Leadership",
    "Careers",
    "Partnerships",
    "News & Press",
    "Investor Relations",
  ],
  Resources: [
    "Technical Documentation",
    "Whitepapers",
    "Case Studies",
    "Atlas Academy",
    "Security & Compliance",
    "Contact Sales",
  ],
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer
      id="contact"
      ref={ref}
      className="bg-[#010810] border-t border-[rgba(0,194,255,0.1)]"
    >
      {/* Contact CTA band */}
      <div className="border-b border-[rgba(0,194,255,0.1)] bg-[#071828]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label">Ready to Deploy</span>
              <div className="atlas-divider mt-2" />
              <h3 className="text-3xl md:text-4xl font-light text-white mt-3">
                Advance Your <strong>Mission</strong>
              </h3>
              <p className="text-[#8ba0b8] text-[13px] mt-3 font-light max-w-md">
                Talk to an Atlas solutions engineer about your specific
                operational requirements and how our AI systems can be deployed
                for your mission.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="atlas-btn-primary text-[10px] py-3 px-8">
                Request a Briefing
              </button>
              <button className="atlas-btn-secondary text-[10px] py-3 px-8">
                Download Capabilities Brief
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex-shrink-0">
                <svg viewBox="0 0 100 120" fill="none" className="w-full h-full">
                  <polygon
                    points="50,0 0,120 20,120 50,45 80,120 100,120"
                    fill="#f0f4f8"
                  />
                  <polygon points="30,120 50,70 70,120" fill="#010810" />
                  <polygon
                    points="50,60 38,90 50,85"
                    fill="#00c2ff"
                    opacity="0.8"
                  />
                </svg>
              </div>
              <div className="leading-none">
                <div className="text-white font-bold text-sm tracking-[0.12em] uppercase">
                  Atlas
                </div>
                <div className="text-[#8ba0b8] font-light text-[9px] tracking-[0.2em] uppercase">
                  Infrastructure Group™
                </div>
              </div>
            </div>

            <p className="text-[#3a5570] text-[12px] leading-relaxed mb-8 font-light">
              Frontier-grade AI infrastructure and solutions for defense,
              national security, healthcare, and critical systems. Built for
              missions where failure is not an option.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              {[
                { icon: Mail, text: "intel@atlasig.com" },
                { icon: Phone, text: "+1 (703) 555-0142" },
                { icon: MapPin, text: "Arlington, VA · London · Singapore" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={12} className="text-[#1a3a6b] flex-shrink-0" />
                  <span className="text-[11px] text-[#3a5570]">{text}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-8">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#3a5570] hover:text-[#00c2ff] hover:border-[rgba(0,194,255,0.3)] transition-all duration-300"
                >
                  <Icon size={13} />
                </button>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="lg:col-span-1">
              <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#8ba0b8] mb-5">
                {group}
              </div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[11px] text-[#3a5570] hover:text-[#8ba0b8] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(255,255,255,0.04)] bg-[#010810]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[10px] text-[#1a3a6b] tracking-wide">
              © 2026 Atlas Infrastructure Group™. All rights reserved. Certain
              capabilities are controlled under ITAR/EAR.
            </div>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Security", "FOIA"].map(
                (l) => (
                  <a
                    key={l}
                    href="#"
                    className="text-[10px] text-[#1a3a6b] hover:text-[#3a5570] transition-colors tracking-wide"
                  >
                    {l}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
