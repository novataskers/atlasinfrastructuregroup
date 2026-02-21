"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const LOGO_URL = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/cd2f08d3-1d27-4c0f-8dcd-3a8affeb6b4f/WhatsApp_Image_2026-02-20_at_4.12.53_PM-removebg-preview-1771621011092.png?width=8000&height=8000&resize=contain";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] w-full transition-all duration-300 ease-in-out",
          isScrolled
            ? "bg-black py-1 shadow-lg"
            : "bg-transparent py-2"
      )}
    >
      <div className="mx-auto max-w-[1600px] px-8">
        <nav
          className="flex items-center justify-between"
          aria-label="Atlas Infrastructure Group Site Navigation"
        >
          <div className="flex-shrink-0">
            <a href="/" className="block outline-none focus-visible:ring-2 focus-visible:ring-white/50">
              <Image
                src={LOGO_URL}
                alt="Atlas Infrastructure Group Logo"
                width={220}
                height={55}
                className="h-[100px] w-auto object-contain brightness-0 invert"
                priority
              />
            </a>
          </div>

          <div className="flex items-center justify-end flex-grow">
            <form id="searchform" role="search" className="group relative flex items-center">
              <label htmlFor="s" className="sr-only">Search</label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="s"
                  className={cn(
                    "h-10 w-0 bg-transparent text-white border-b border-white/30 transition-all duration-300 focus:w-48 focus:outline-none focus:border-white opacity-0 focus:opacity-100 mr-2",
                    isScrolled ? "placeholder-white/50" : "placeholder-white/70"
                  )}
                  placeholder="SEARCH"
                />
                <button
                  type="submit"
                  id="searchsubmit"
                  className="flex items-center justify-center p-2 text-white hover:opacity-70 transition-opacity"
                  aria-label="Submit Search"
                >
                  <Search size={20} strokeWidth={2.5} />
                </button>
              </div>
            </form>
          </div>
        </nav>
      </div>

      <div
        className={cn(
          "absolute bottom-0 left-0 h-[1px] w-full bg-white/10 transition-opacity duration-300",
          isScrolled ? "opacity-100" : "opacity-0"
        )}
      />
    </header>
  );
}
