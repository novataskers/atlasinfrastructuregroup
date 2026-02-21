"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    id: "energy-systems",
    title: "Energy Systems",
    description: "Powering critical infrastructure. Unmatched reliability.",
    video: "https://cdn.northropgrumman.com/-/media/brand-team/new-homepage/advanced-weapons.mp4?rev=cf923ec784994e229afa4e7fb0134c02",
    link: "#energy-systems",
  },
  {
    id: "smart-cities",
    title: "Smart Cities",
    description: "Intelligent urban solutions at scale.",
    video: "https://cdn.northropgrumman.com/-/media/brand-team/new-homepage/aircraft.mp4?rev=8c70720d98734ce59bd32818ccb5a726",
    link: "#smart-cities",
  },
  {
    id: "transportation",
    title: "Transportation",
    description: "Moving nations forward.",
    video: "https://cdn.northropgrumman.com/-/media/brand-team/new-homepage/missile-defense.mp4?rev=ff8fce40211c4344bdfe35b7b21031ec",
    link: "#transportation",
  },
  {
    id: "digital-infrastructure",
    title: "Digital Infrastructure",
    description: "Connecting the future. Built to last.",
    video: "https://cdn.northropgrumman.com/-/media/Project/Northrop-Grumman/ngc/what-we-do/mission-solutions/mission-solutions-hero-video.mp4?rev=5240525e225e4e5da0f376e9e24e045b",
    link: "#digital-infrastructure",
  },
  {
    id: "defense-solutions",
    title: "Defense Solutions",
    description: "Securing every domain.",
    video: "https://cdn.northropgrumman.com/-/media/brand-team/new-homepage/we-will-show-you-every-blind-spot.mp4?rev=949ce0da18aa4b9986192f915b4c8f4a",
    link: "#defense-solutions",
  },
];

export default function JumpContentSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeTab) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [activeTab]);

  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-20 flex justify-center pt-8 pointer-events-none">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 pointer-events-auto max-w-[1600px] px-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-[12px] font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
                activeTab === index
                  ? "text-white border-b-2 border-white"
                  : "text-white/60 hover:text-white border-b-2 border-transparent"
              }`}
            >
              {slide.title}
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full h-[600px] md:h-[800px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              activeTab === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <div className="absolute inset-0 bg-black/30 z-[1]" />
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                src={slide.video}
                autoPlay={index === 0}
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-[1.01]"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-[2]" />
            </div>

            <div className="relative z-[3] mx-auto max-w-[1600px] h-full flex flex-col justify-end pb-24 md:pb-32 px-10">
              <div className="max-w-[1200px]">
                <p className="text-white text-[32px] md:text-[50px] font-bold tracking-[0.1em] uppercase mb-8 leading-tight text-shadow-heavy">
                  {slide.description}
                </p>

                <a
                  href={slide.link}
                  className="group inline-flex items-center gap-4 bg-black/45 backdrop-blur-md border border-white/20 hover:bg-black hover:border-white px-8 py-4 transition-all duration-300 rounded-[4px]"
                >
                  <span className="text-white text-[14px] font-semibold tracking-[0.2em] uppercase">
                    Learn More
                  </span>
                  <ChevronRight
                    className="text-white group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
