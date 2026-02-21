"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const logos = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6a2ec8fd-d8af-4e7e-8f45-0c861bf86638/WhatsApp-Image-2026-02-12-at-12.45.19-AM-1771669352333.jpeg",
    alt: "HireMindX",
    href: "https://hiremindx.com",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6a2ec8fd-d8af-4e7e-8f45-0c861bf86638/ChatGPT-Image-Feb-21-2026-04_29_34-PM-1771669915569.png",
    alt: "Calculator App",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6a2ec8fd-d8af-4e7e-8f45-0c861bf86638/ChatGPT-Image-Feb-21-2026-04_31_44-PM-1771669915655.png",
    alt: "AI Spark App",
  },
];

function LogoCard({ src, alt, index, href }: { src: string; alt: string; index: number; href?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const card = (
    <div
      className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-[22px] overflow-hidden shadow-lg
        group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 ease-out cursor-pointer"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
    >
      <div
        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)' }}
      />
      <Image src={src} alt={alt} fill className="object-cover" sizes="120px" unoptimized />
    </div>
  );

  return (
    <div
      ref={ref}
      className="group relative flex flex-col items-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.92)',
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">{card}</a>
      ) : card}
      <p className="mt-3 text-[11px] font-semibold tracking-[0.15em] uppercase text-black/50 group-hover:text-black/80 transition-colors duration-300">
        {alt}
      </p>
    </div>
  );
}

const StatementBlock: React.FC = () => {
  return (
    <section className="bg-white py-[80px] px-10 md:px-20 lg:px-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="border-b border-[#E5E5E5] pb-2 mb-10">
          <h2 className="text-[32px] md:text-[50px] font-bold tracking-[0.15em] text-black uppercase leading-[1.2]">
            Accelerating the industry.
          </h2>
        </div>

        <div className="flex flex-wrap items-start gap-10 md:gap-16 pt-2">
            {logos.map((logo, i) => (
              <LogoCard key={logo.alt} src={logo.src} alt={logo.alt} index={i} href={logo.href} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default StatementBlock;
