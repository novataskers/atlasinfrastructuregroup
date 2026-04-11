"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';

const CareersBanner = () => {
  const [activeTab] = useState(0);
  const [isOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const infographicItems = [
    { label: 'Fastest image generation', pos: 'top-0 left-1/2 -translate-x-1/2' },
    { label: 'Image + video + music generation', pos: 'top-[22%] right-0 translate-x-2' },
    { label: 'Fastest response', pos: 'top-[55%] right-0 translate-x-2' },
    { label: 'Deep research (internet + databases)', pos: 'bottom-[18%] right-0 translate-x-2' },
    { label: 'Reasoning + deep data extraction', pos: 'bottom-0 left-1/2 -translate-x-1/2' },
    { label: 'Creativity', pos: 'bottom-[18%] left-0 -translate-x-2' },
    { label: 'Automation creation + deployments', pos: 'top-[55%] left-0 -translate-x-2' },
    { label: 'Analysis + prediction', pos: 'top-[22%] left-0 -translate-x-2' },
  ];

  const tabs = [
    {
      label: "Early Career",
      content: "Discover a mission with meaning.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2f08d3-1d27-4c0f-8dcd-3a8affeb6b4f-northropgrumman-com/assets/images/Interns-Hero-no-gradient-4-2.jpg",
      link: "#early-career"
    },
    {
      label: "Professionals",
      content: "Elevate your career.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2f08d3-1d27-4c0f-8dcd-3a8affeb6b4f-northropgrumman-com/assets/images/professionals-3.jpg",
      link: "#professionals"
    },
    {
      label: "Veterans",
      content: "Careers that empower veterans.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2f08d3-1d27-4c0f-8dcd-3a8affeb6b4f-northropgrumman-com/assets/images/military-and-veterans-4.jpg",
      link: "#veterans"
    },
    {
      label: "Search By Location",
      content: "Explore your future at locations worldwide.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2f08d3-1d27-4c0f-8dcd-3a8affeb6b4f-northropgrumman-com/assets/images/world-map-bw-5.jpg",
      link: "#locations"
    },
    {
      label: "Life at Atlas",
      content: "Where innovation meets purpose.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2f08d3-1d27-4c0f-8dcd-3a8affeb6b4f-northropgrumman-com/assets/images/Arctic-Satellite-Broadband-Mission-slide-01-6.jpg",
      link: "#life-at-atlas"
    },
    {
      label: "Current Employees",
      content: "Start the next challenge of your career.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cd2f08d3-1d27-4c0f-8dcd-3a8affeb6b4f-northropgrumman-com/assets/images/Northrop-Grumman-recruiters-BEYA-2020-1-7.jpg",
      link: "#employees"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.18)_0%,rgba(0,0,0,0)_55%),radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_60%)]" />
          <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 pointer-events-none" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="w-full max-w-[1100px] pb-24">
            <div className="mb-10">
              <p className="label-caps !text-[11px] text-white/60 tracking-[0.25em] fade-in-up">
                Atlas AI Capability Infographic
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[900px] aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-[10%] rounded-full border border-white/10 animate-spin [animation-duration:18s]" />
                <div className="absolute inset-[22%] rounded-full border border-white/10 animate-spin [animation-duration:28s] [animation-direction:reverse]" />
                <div className="absolute inset-[34%] rounded-full border border-white/10" />

                <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full border border-[rgba(212,175,55,0.35)] bg-black/40 backdrop-blur-md flex flex-col items-center justify-center px-6">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.22)_0%,transparent_70%)] animate-pulse" />
                  <div className="relative">
                    <div className="text-white text-[11px] tracking-[0.35em] uppercase font-semibold">
                      AIG Engine 3
                    </div>
                    <div className="mt-4 text-white/80 text-[12px] leading-relaxed font-light">
                      Multimodal generation
                      <br />Research + reasoning
                      <br />Automation + prediction
                    </div>
                  </div>
                </div>
              </div>

              {infographicItems.map((item) => (
                <div
                  key={item.label}
                  className={`hidden md:flex absolute ${item.pos} items-center gap-3`}
                >
                  <div className="relative">
                    <span className="absolute -inset-2 rounded-full bg-[rgba(212,175,55,0.15)] blur-md animate-pulse" />
                    <span className="relative block w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
                  </div>
                  <div className="glass-panel border border-white/10 px-4 py-3 text-left max-w-[260px]">
                    <p className="text-white text-[11px] tracking-[0.12em] uppercase font-semibold">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infographicItems.map((item) => (
                <div
                  key={item.label}
                  className="glass-panel border border-white/10 px-4 py-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="block w-2 h-2 rounded-full bg-[#d4af37]" />
                    <p className="text-white text-[11px] tracking-[0.12em] uppercase font-semibold">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full h-24 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <div
        ref={contentRef}
        className={`relative transition-all duration-700 ease-in-out bg-black overflow-hidden ${
          isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="relative h-[600px] w-full">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeTab === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={tab.image}
                  alt={tab.label}
                  fill
                  className="object-cover grayscale brightness-50"
                  priority={activeTab === index}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

                <div className="mx-auto max-w-[1600px] px-8 relative h-full flex flex-col justify-center items-start text-white">
                  <div className="max-w-2xl space-y-6">
                    <p className="text-[32px] md:text-[40px] font-bold tracking-wider leading-tight text-shadow-heavy">
                      {tab.content}
                    </p>
                    <a
                      href={tab.link}
                      className="group inline-flex items-center gap-4 px-8 py-3 border border-white/40 bg-black/40 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <span className="label-caps !text-[14px]">LEARN MORE</span>
                      <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-white group-hover:stroke-black transition-colors">
                        <path d="M1 1L13 11.5L1 22" strokeWidth="2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersBanner;
