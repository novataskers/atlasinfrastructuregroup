"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { useEffect, useRef } from "react";

const teamMembers = [
  {
    name: "Jihan Ahmed",
    role: "Founder, CEO",
  },
  {
    name: "Kemai Price",
    role: "Co-Founder",
  },
  {
    name: "Nour Elhouda Faiz",
    role: "Co-Founder & EVP",
  }
];

/* Animated particle / grid canvas background */
function TechCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight * 3);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight * 3;
    };
    window.addEventListener("resize", handleResize);

    // Particles
    const PARTICLE_COUNT = 90;
    const CONNECTION_DIST = 160;
    interface Particle { x: number; y: number; vx: number; vy: number; r: number; }
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.5,
    }));

    // Grid
    const GRID_SIZE = 60;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid
      ctx.strokeStyle = "rgba(200, 160, 80, 0.03)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < width; x += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Move & draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(212, 175, 55, 0.45)";
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * (1 - dist / CONNECTION_DIST)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.7 }}
    />
  );
}

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden relative">
      <Header />

      {/* Techie animated canvas background */}
      <TechCanvas />

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-[120px]" style={{ zIndex: 1 }} />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-yellow-600/8 rounded-full blur-[120px]" style={{ zIndex: 1 }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-700/5 rounded-full blur-[160px]" style={{ zIndex: 1 }} />

      <section className="pt-28 pb-16 bg-transparent relative" style={{ zIndex: 2 }}>
        <div className="max-w-[860px] mx-auto px-6 lg:px-10 relative">
          
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-white mt-6 mb-2 text-[clamp(32px,5vw,54px)] font-bold tracking-tight" style={{ textShadow: "0 0 40px rgba(212,175,55,0.15)" }}>
              Our Story
            </h1>
            <p className="text-[#aa926b] text-sm max-w-xl mx-auto uppercase tracking-[0.25em] font-medium">
              Meet The Revolutionaries
            </p>
          </div>

          {/* Team profiles — responsive layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-16 max-w-sm md:max-w-lg mx-auto">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-default">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-3 p-[1.5px] bg-gradient-to-b from-amber-400/30 to-transparent transition-all duration-500 group-hover:scale-110 group-hover:from-amber-400/60">
                  <div className="w-full h-full bg-[#0a0e14] rounded-full flex items-center justify-center border border-white/5 overflow-hidden relative">
                    <div className="text-amber-400/30 text-lg md:text-xl font-light tracking-widest group-hover:text-amber-400/60 transition-colors duration-500">
                      {member.name.split(' ').slice(0,2).map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                <h3 className="text-white text-sm md:text-base font-semibold mb-0.5 group-hover:text-amber-100 transition-colors text-center leading-tight">
                  {member.name}
                </h3>
                <p className="text-[#aa926b] text-[11px] md:text-xs tracking-wide text-center leading-snug">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          {/* Story content — more compact */}
          <div className="prose prose-invert max-w-none text-[#b8a88a] text-[0.9rem] md:text-[0.95rem] leading-[1.75] font-light space-y-5">
            <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-amber-300 first-letter:mr-1.5 first-letter:float-left first-letter:leading-none">
              The AIG Engine began as a simple experiment driven by necessity. In May 2025, Jihan Ahmed set out to solve a personal challenge: making client outreach faster, more reliable, and less repetitive. Working with just a modest 4GB RAM computer, he built an early agent capable of finding potential clients and sending emails in bulk, removing the need to write and send messages one by one. What started as a small personal solution quickly revealed a much larger potential.
            </p>
            <p>
              Recognizing this, Kemai Price saw the vision behind the technology and joined in shaping it into something greater. Together, they began expanding the system, gradually adding more features and refining its capabilities. Over time, the AIG Engine evolved beyond a simple outreach tool into a more powerful and flexible system, eventually giving rise to HireMindX. Initially built for personal use, HireMindX soon became a response to a growing public need, introducing new features such as voice-based outreach and intelligent automation.
            </p>
            <p>
              By November 2025, the development reached a major milestone with the creation of AIG Engine 2. This version significantly expanded the system&apos;s capabilities, enabling it to explore large portions of the internet, gather and structure data, and identify relevant business contacts based on user needs. It also enhanced automation by allowing outreach to be performed more efficiently. Unlike many traditional AI systems, it was designed to operate without heavy computational requirements, making it both efficient and scalable. However, its growing capabilities also raised important questions about its potential and how it should be introduced to the public.
            </p>
            <p>
              In December 2025, Nour Elhouda Faiz joined the journey, bringing a broader vision and helping position the project on a global stage. Through her efforts, HireMindX gained international exposure across academic and innovation platforms, accelerating its transformation into a scalable SaaS ecosystem. With Jihan Ahmed leading the technical architecture, Kemai Price strengthening leadership and vision, and Nour Elhouda Faiz expanding global reach, the project evolved into something far beyond its original scope.
            </p>
            <p>
              As the ecosystem grew, Atlas Infrastructure Group was established with the goal of delivering advanced AI-driven digital solutions to real-world problems. Behind the scenes, development continued rapidly, leading to the creation of AIG Engine 3—an even more advanced and capable system. Architected by Jihan Ahmed, this version introduced a wide range of capabilities, including multimedia generation, deep data analysis, automation, application development, and real-time insights. It became the core technology powering platforms like HireMindX and IxraAI, enabling faster workflows, intelligent decision-making, and creative production at scale.
            </p>
            <p>
              Over time, these platforms demonstrated the true potential of the AIG Engine, evolving from a simple tool into a comprehensive ecosystem of intelligent solutions. Today, the AIG Engine continues to grow as part of the Atlas Infrastructure Group, balancing innovation with scalability and pushing the boundaries of what AI-powered systems can achieve. What began as a small experiment has transformed into a broader vision—to create technology that empowers people, simplifies complex work, and redefines the future of digital interaction.
            </p>
            <p className="text-white/80 text-sm font-medium pt-6 pb-10 mt-6 border-t border-white/10 text-center">
              This journey has been made possible through the combined efforts of Jihan Ahmed, Kemai Price, and Nour Elhouda Faiz, whose shared vision continues to drive the innovation forward.
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
