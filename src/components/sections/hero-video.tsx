"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroVideo() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const jumpNavItems = [
    "Energy Systems",
    "Smart Cities",
    "Transportation",
    "Digital Infrastructure",
    "Defense Solutions"
  ];

  const videoUrl = "https://cdn.northropgrumman.com/-/media/brand-team/WSY/WSY_STATUS_QUO_HOMEPAGE_REVD_02.mp4?rev=5b4d7e95e89f48fa969dfc5bc53ccd21";

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black select-none">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
          src={videoUrl}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
        <a
          href="#about"
          className="group flex flex-col items-center focus:outline-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex flex-col gap-0">
            <h1 className="text-white text-[clamp(36px,6vw,72px)] font-[800] tracking-[0.25em] leading-[1.1] uppercase text-shadow-heavy">
              Building
            </h1>
            <h1 className="text-white text-[clamp(36px,6vw,72px)] font-[800] tracking-[0.25em] leading-[1.1] uppercase text-shadow-heavy">
              Tomorrow&apos;s
            </h1>
            <h1 className="text-white text-[clamp(36px,6vw,72px)] font-[800] tracking-[0.25em] leading-[1.1] uppercase text-shadow-heavy">
              Foundation
            </h1>
          </div>

          <div className="mt-8 transition-opacity duration-300">
            <button className="px-6 py-2 glass-panel border border-white/30 text-white label-caps flex items-center gap-2 hover:bg-white hover:text-black transition-all">
              Powering Infrastructure
              <svg width="12" height="12" viewBox="0 0 15 23" fill="none" stroke="currentColor" strokeWidth="3" className="rotate-[-90deg]">
                <path d="M1 1L14 11.5L1 22" />
              </svg>
            </button>
          </div>
        </a>
      </div>

      {isHovering && (
        <div
          className="fixed pointer-events-none z-[100] px-4 py-2 glass-panel border border-white/50 rounded-sm text-white label-caps transition-transform duration-75 ease-out flex items-center gap-3"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: 'translate(20px, 20px)'
          }}
        >
          Powering Infrastructure
          <svg width="10" height="16" viewBox="0 0 15 23" fill="none" stroke="currentColor" strokeWidth="3" className="rotate-[-90deg]">
            <path d="M1 1L14 11.5L1 22" />
          </svg>
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full z-20 flex flex-col">
        <div className="mx-auto max-w-[1600px] w-full px-8 flex items-center justify-between pb-4">
          <div className="flex flex-wrap gap-8">
            {jumpNavItems.map((item) => (
              <button
                key={item}
                className="text-white nav-link hover:text-white/70 transition-colors whitespace-nowrap"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-white">
            <div className="flex flex-col items-center">
              <div className="flex flex-col -space-y-4 animate-bounce">
                <ChevronDown size={24} className="opacity-40" />
                <ChevronDown size={24} className="opacity-80" />
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase mt-2">Scroll for More</p>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/10" />
      </div>
    </section>
  );
}
