"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';

const CareersBanner = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

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

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setIsOpen(true);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover grayscale opacity-60"
          >
            <source src="https://cdn.northropgrumman.com/-/media/brand-team/new-homepage/careers-banner.mp4?rev=a19d14fe24b54eac98796190b11d6d51" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <a href="#careers" className="group">
            <h1 className="mb-2 text-white text-shadow-heavy fade-in-up text-[clamp(32px,5vw,64px)]">
              ADVANCING INFRASTRUCTURE
            </h1>
            <h1 className="text-white text-shadow-heavy fade-in-up text-[clamp(32px,5vw,64px)]" style={{ animationDelay: '0.2s' }}>
              AND YOUR CAREER.
            </h1>

            <div className="mt-12 flex justify-center fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button className="glass-panel flex items-center justify-between gap-4 px-6 py-2 border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
                <span className="label-caps !text-[12px] text-white group-hover:text-black">CAREERS</span>
                <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-white group-hover:stroke-black">
                  <path d="M1 1L13 11.5L1 22" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </a>
        </div>

        <div className="absolute bottom-0 left-0 z-20 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-20">
          <div className="mx-auto max-w-[1600px] px-8 flex flex-wrap items-center justify-center gap-1 sm:gap-4 pb-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`nav-link px-4 py-2 transition-colors duration-200 hover:text-white ${
                  activeTab === index && isOpen ? 'text-white border-b-2 border-white' : 'text-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="absolute bottom-4 right-8 hidden items-center space-x-3 lg:flex">
            <div className="flex flex-col items-center">
              <span className="block w-[1px] h-6 bg-white/40 animate-pulse" />
              <span className="block w-[1px] h-2 bg-white/20" />
            </div>
            <p className="label-caps !text-[10px] text-white/60 tracking-widest whitespace-nowrap">SCROLL FOR MORE</p>
          </div>
        </div>
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

          <div className="absolute top-0 left-0 w-full z-20 border-b border-white/10 bg-black/40 backdrop-blur-md">
            <div className="mx-auto max-w-[1600px] px-8 py-4">
              <div className="flex flex-wrap justify-center gap-6">
                {tabs.map((tab, index) => (
                  <button
                    key={`secondary-${index}`}
                    onClick={() => setActiveTab(index)}
                    className={`nav-link text-[11px] px-2 py-1 transition-all duration-300 hover:text-white ${
                      activeTab === index ? 'text-white border-b border-white' : 'text-white/40'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersBanner;
