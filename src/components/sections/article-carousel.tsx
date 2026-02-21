"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const articles = [
  {
    market: "energy systems",
    title: "Grid Modernization",
    video: "https://cdn.northropgrumman.com/-/media/Project/Northrop-Grumman/ngc/what-we-do/advanced-weapons/srm/PROPULSION_WEB_HDR_16-7_V02.mp4?rev=aa4bd86da7cb4d24912fc8c0ec9b392b#t=0.0001",
    cta: "Grid Solutions",
    href: "#grid-modernization",
  },
  {
    market: "digital infrastructure",
    title: "Data Center Networks",
    video: "https://cdn.northropgrumman.com/-/media/Project/Northrop-Grumman/ngc/what-we-do/microelectronics/ME_BOP_FPA_WEB_HDR_16_7_FINAL_251028.mp4?rev=0307e501fcec40ffa649853da086f1ef#t=0.0001",
    cta: "Network Solutions",
    href: "#data-centers",
  },
  {
    market: "transportation",
    title: "Autonomous Systems",
    video: "https://cdn.northropgrumman.com/-/media/brand-team/new-homepage/fpa-thumbnails/talon-fpa.mp4?rev=c231bf3870664ab0a16994f21613df26#t=0.0001",
    cta: "Autonomous Fleet",
    href: "#autonomous-systems",
  },
  {
    market: "defense solutions",
    title: "Mission-Critical Platforms",
    video: "https://cdn.northropgrumman.com/-/media/Project/Northrop-Grumman/ngc/what-we-do/mission-solutions/fast-tracking-concept-combat-1920x840_V4.mp4?rev=e0915f8a1a204bbb956e4b3a69239f8d#t=0.0001",
    cta: "Defense Platforms",
    href: "#defense-platforms",
  },
];

const ArticleCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (index: number) => {
    setActiveIndex(index);
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / (window.innerWidth > 1024 ? 1.2 : 1.05);
      sliderRef.current.scrollTo({
        left: index * (cardWidth + 30),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: sliderRef.current,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-index") || "0");
          setActiveIndex(index);
        }
      });
    }, observerOptions);

    const cards = sliderRef.current?.querySelectorAll(".media-container");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-[100px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 mb-8">
        <div className="flex flex-wrap gap-4 lg:gap-8">
          {articles.map((article, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(idx)}
              className={`px-6 py-2 border rounded-md transition-all duration-300 transform font-sans text-[12px] font-semibold tracking-[0.2em] uppercase cursor-pointer ${
                activeIndex === idx
                  ? "bg-black text-white border-black scale-105"
                  : "bg-transparent text-black border-[#e5e5e5] hover:bg-black/5"
              }`}
            >
              {article.title}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-[30px] px-[5vw] lg:px-[10vw]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {articles.map((article, idx) => (
          <div
            key={idx}
            data-index={idx}
            className="media-container relative flex-shrink-0 w-[85vw] lg:w-[80vw] h-[550px] rounded-[12px] overflow-hidden snap-center group"
          >
            <div className="absolute inset-0 z-0">
              <video
                src={article.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            </div>

            <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end items-start text-white">
              <div className="mb-6">
                <p className="font-sans text-[14px] font-semibold tracking-[0.2em] uppercase mb-4 text-white/90 drop-shadow-md">
                  {article.market}
                </p>
                <h3 className="font-sans text-[32px] lg:text-[40px] font-bold tracking-[0.1em] uppercase leading-tight text-shadow-heavy max-w-3xl">
                  {article.title}
                </h3>
              </div>

              <a
                href={article.href}
                className="group/btn flex items-center px-6 py-3 glass-panel border border-white/40 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
              >
                <span className="font-sans text-[12px] font-semibold tracking-[0.15em] uppercase">
                  {article.cta}
                </span>
                <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleCarousel;
