"use client";

import React, { useEffect, useCallback, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const slides = [
  {
    id: "engine-1",
    title: "AIG ENGINE 1",
    description: "Empowering frontier level conversational model without restrictions",
    image: "/aig-engine-1.png",
  },
  {
    id: "engine-2",
    title: "AIG ENGINE 2",
    description: "Frontier level reasoning and conversational model empowered with bulk outreach, research, mail sending tracking systems.",
    image: "/aig-engine-2.png",
  },
  {
    id: "engine-3",
    title: "AIG ENGINE 3",
    description: "The most advanced and powerful model built till now empowering creative generations, large uncensored research, data, automations, development in the least amount of time.",
    image: "/aig-engine-3.png",
  },
];

export default function JumpContentSlider() {
  const [activeTab, setActiveTab] = useState(0);

  const goPrev = useCallback(() => {
    setActiveTab((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goNext = useCallback(() => {
    setActiveTab((prev) => (prev + 1) % slides.length);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    },
    [goNext, goPrev]
  );

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Header label */}
      <div className="w-full flex flex-col items-center pt-10 pb-0 z-20 relative">
        <p className="text-white/50 text-[11px] tracking-[0.3em] uppercase font-medium mb-4">
          Our top-tier frontier models till now
        </p>
        {/* Dot indicators */}
        <div className="flex gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveTab(index)}
              className={`transition-all duration-300 rounded-full ${
                activeTab === index
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slideshow */}
      <div
        className="relative w-full mt-6"
        style={{ aspectRatio: "16/9", maxHeight: "90vh" }}
        role="region"
        aria-roledescription="carousel"
        aria-label="AIG engine slideshow"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeTab === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-contain"
            />
          </div>
        ))}

        <Button
          variant="ghost"
          size="icon-sm"
          type="button"
          aria-label="Previous image"
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/40 text-white hover:bg-black/60 focus-visible:ring-white/40"
        >
          <ArrowLeft className="size-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon-sm"
          type="button"
          aria-label="Next image"
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/40 text-white hover:bg-black/60 focus-visible:ring-white/40"
        >
          <ArrowRight className="size-4" />
        </Button>

        {/* Progress bars overlay at bottom */}
        <div className="absolute bottom-6 left-0 w-full z-20 px-10">
          <div className="flex gap-2 max-w-[900px]">
            {slides.map((_, i) => (
              <div
                key={i}
                className="h-[2px] flex-1 bg-white/20 overflow-hidden rounded-full"
              >
                <div
                  className={`h-full bg-white rounded-full transition-all ${
                    i === activeTab
                      ? "animate-progress-bar"
                      : i < activeTab
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
