"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const navItems = [
  {
    label: "Capabilities",
    href: "#capabilities",
    dropdown: [
      "AI Infrastructure",
      "Frontier AI Software",
      "Defense Systems",
      "Intelligence Solutions",
    ],
  },
  {
    label: "Sectors",
    href: "#sectors",
    dropdown: [
      "Defense & National Security",
      "Healthcare & Life Sciences",
      "Critical Infrastructure",
      "Space & Aerospace",
    ],
  },
  {
    label: "Technology",
    href: "#technology",
    dropdown: ["Atlas Core Platform", "Neural Processing", "Autonomous Systems"],
  },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-scrolled" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex-shrink-0">
                {/* Atlas A logo SVG */}
                <svg viewBox="0 0 100 120" fill="none" className="w-full h-full">
                  <polygon
                    points="50,0 0,120 20,120 50,45 80,120 100,120"
                    fill="#f0f4f8"
                  />
                  <polygon
                    points="30,120 50,70 70,120"
                    fill="#020b18"
                  />
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
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.dropdown && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-[11px] font-semibold tracking-[0.15em] uppercase text-[#c0d0e0] hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>
                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-4 w-56 bg-[#071828] border border-[rgba(0,194,255,0.15)] shadow-2xl"
                      >
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub}
                            href="#"
                            className="block px-5 py-3 text-[11px] tracking-[0.1em] uppercase text-[#8ba0b8] hover:text-[#00c2ff] hover:bg-[rgba(0,194,255,0.05)] transition-colors duration-200 border-b border-[rgba(255,255,255,0.05)] last:border-0"
                          >
                            {sub}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contact"
                className="atlas-btn-primary text-[11px] py-2.5 px-6"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#071828] border-t border-[rgba(0,194,255,0.15)]"
            >
              <div className="px-6 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-[#c0d0e0] hover:text-[#00c2ff] transition-colors py-2 border-b border-[rgba(255,255,255,0.05)]"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="atlas-btn-primary block text-center mt-4 py-3"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
