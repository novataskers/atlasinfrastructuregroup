"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LOGO_URL = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/cd2f08d3-1d27-4c0f-8dcd-3a8affeb6b4f/WhatsApp_Image_2026-02-20_at_4.12.53_PM-removebg-preview-1771621011092.png?width=8000&height=8000&resize=contain";

/* ── Searchable content index ── */
interface SearchItem {
  title: string;
  description: string;
  url: string;
  category: string;
}

const SEARCH_INDEX: SearchItem[] = [
  // Pages
  { title: "Home", description: "Atlas Infrastructure Group — Building Tomorrow's Foundation", url: "/", category: "Pages" },
  { title: "Our Story", description: "Meet the revolutionaries behind Atlas Infrastructure Group — Jihan Ahmed, Kemai Price, and Nour Elhouda Faiz", url: "/our-story", category: "Pages" },
  { title: "Careers", description: "Join the Atlas team — explore roles across AI engineering, research, and operations", url: "/careers", category: "Pages" },
  { title: "Contact Us", description: "Send a message or inquiry to Atlas Infrastructure Group", url: "/careers#contact", category: "Pages" },
  { title: "News & Updates", description: "Product releases, research milestones, and company announcements", url: "/news", category: "Pages" },
  { title: "Privacy Notice", description: "How Atlas Infrastructure Group collects, uses, and protects your information", url: "/privacy", category: "Pages" },
  { title: "Terms of Use", description: "Terms and conditions for using Atlas Infrastructure Group services", url: "/terms", category: "Pages" },

  // Products & Technology
  { title: "AIG Engine 1", description: "Frontier-level conversational AI model — the first engine that started it all", url: "/", category: "Technology" },
  { title: "AIG Engine 2", description: "Advanced reasoning model with bulk outreach, research, and mail tracking systems", url: "/news", category: "Technology" },
  { title: "AIG Engine 3", description: "The most advanced model — multimedia generation, deep research, automation, and development", url: "/", category: "Technology" },
  { title: "HireMindX", description: "AI-powered SaaS platform for intelligent client outreach and automation", url: "/", category: "Technology" },
  { title: "IxraAI", description: "Creative AI production platform for intelligent decision-making and content generation", url: "/", category: "Technology" },

  // News articles
  { title: "Introducing AIG Engine 3", description: "Our most advanced system with multimedia generation, data analysis, and real-time insights", url: "/news", category: "News" },
  { title: "HireMindX SaaS Launch", description: "HireMindX transforms into a full-scale SaaS platform with voice outreach", url: "/news", category: "News" },
  { title: "IxraAI Announcement", description: "Redefining creative AI production at scale", url: "/news", category: "News" },
  { title: "Atlas Infrastructure Founding", description: "Building tomorrow's foundation with AI-driven digital solutions", url: "/news", category: "News" },
  { title: "Voice-Based Outreach", description: "The next frontier of client engagement with personalized voice messages", url: "/news", category: "News" },

  // Team
  { title: "Jihan Ahmed", description: "Founder & CEO — Technical architect of the AIG Engine series", url: "/our-story", category: "Team" },
  { title: "Kemai Price", description: "Co-Founder — Leadership and vision for Atlas Infrastructure Group", url: "/our-story", category: "Team" },
  { title: "Nour Elhouda Faiz", description: "Co-Founder & EVP — Global reach and international platform expansion", url: "/our-story", category: "Team" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    if (value.trim().length === 0) {
      setResults([]);
      return;
    }
    const q = value.toLowerCase();
    const matched = SEARCH_INDEX.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
    setResults(matched);
  }, []);

  const openSearch = () => {
    setIsSearchOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setQuery("");
    setResults([]);
  };

  // Group results by category
  const grouped = results.reduce<Record<string, SearchItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <>
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
              <Link href="/" className="block outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                <Image
                  src={LOGO_URL}
                  alt="Atlas Infrastructure Group Logo"
                  width={220}
                  height={55}
                  className="h-[100px] w-auto object-contain brightness-0 invert"
                  priority
                />
              </Link>
            </div>

            <div className="flex items-center justify-end flex-grow">
              <button
                type="button"
                onClick={openSearch}
                className="flex items-center justify-center p-2 text-white hover:opacity-70 transition-opacity"
                aria-label="Open Search"
              >
                <Search size={20} strokeWidth={2.5} />
              </button>
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

      {/* ── Search Overlay ── */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-sm">
          <div ref={searchContainerRef} className="w-full max-w-[700px] mx-auto mt-[80px] px-6">
            {/* Search input */}
            <div className="flex items-center gap-3 border-b border-white/15 pb-4">
              <Search size={20} className="text-white/40 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search Atlas Infrastructure Group..."
                className="flex-1 bg-transparent text-white text-lg outline-none placeholder-white/25"
                autoFocus
              />
              <button onClick={closeSearch} className="text-white/40 hover:text-white transition-colors p-1">
                <X size={20} />
              </button>
            </div>

            {/* Results */}
            <div className="mt-4 max-h-[60vh] overflow-y-auto pr-1">
              {query.trim().length > 0 && results.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-white/30 text-sm">No results found for &quot;{query}&quot;</p>
                </div>
              )}

              {Object.entries(grouped).map(([category, items]) => (
                <div key={category} className="mb-6">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#d4af37]/70 font-medium mb-2 px-1">
                    {category}
                  </div>
                  {items.map((item) => (
                    <Link
                      key={item.title + item.url}
                      href={item.url}
                      onClick={closeSearch}
                      className="flex flex-col gap-0.5 px-4 py-3 rounded-sm hover:bg-white/[0.04] transition-colors group"
                    >
                      <span className="text-white text-sm font-medium group-hover:text-[#d4af37] transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[#666] text-xs line-clamp-1">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>
              ))}

              {query.trim().length === 0 && (
                <div className="py-8 text-center">
                  <p className="text-white/20 text-sm">Start typing to search...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
