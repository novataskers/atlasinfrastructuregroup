"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { useState, useRef } from "react";

export default function CareersPage() {
  const [appForm, setAppForm] = useState({ name: "", expertise: "", contact: "", email: "", message: "" });
  const [contactForm, setContactForm] = useState({ email: "", message: "" });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [appStatus, setAppStatus] = useState<"idle" | "sent">("idle");
  const [contactStatus, setContactStatus] = useState<"idle" | "sent">("idle");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend/API
    const mailto = `mailto:info@atlasinfrastructuregroup.com?subject=Career Application - ${encodeURIComponent(appForm.name)}&body=${encodeURIComponent(
      `Name: ${appForm.name}\nExpertise: ${appForm.expertise}\nContact: ${appForm.contact}\nEmail: ${appForm.email}\n\nMessage:\n${appForm.message}\n\n(CV attached separately if applicable)`
    )}`;
    window.open(mailto, "_blank");
    setAppStatus("sent");
    setTimeout(() => setAppStatus("idle"), 4000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:info@atlasinfrastructuregroup.com?subject=Contact Inquiry&body=${encodeURIComponent(
      `From: ${contactForm.email}\n\n${contactForm.message}`
    )}`;
    window.open(mailto, "_blank");
    setContactStatus("sent");
    setTimeout(() => setContactStatus("idle"), 4000);
  };

  const inputClasses =
    "w-full bg-white/[0.04] border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#d4af37]/50 transition-colors";
  const labelClasses = "text-white/50 text-[11px] tracking-[0.15em] uppercase block mb-2";

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-10 px-6 lg:px-12">
        <div className="max-w-[900px] mx-auto">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#d4af37]/70 font-mono block mb-4">
            [ careers ]
          </span>
          <h1 className="text-white text-[clamp(28px,4vw,48px)] font-bold tracking-tight leading-[1.15] mb-4">
            Build With Atlas
          </h1>
          <p className="text-[#888] text-sm md:text-base font-light max-w-2xl leading-relaxed">
            We&apos;re building the infrastructure that powers the next generation of AI systems.
            If you&apos;re passionate about pushing boundaries in AI engineering, research, and product development — we want to hear from you.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="px-6 lg:px-12 pb-10">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Innovation First", desc: "Work on frontier-level AI models and systems that power real-world platforms like HireMindX and IxraAI." },
              { title: "Global Impact", desc: "Our technology reaches users across academic, enterprise, and innovation platforms worldwide." },
              { title: "Grow With Us", desc: "Join a founding team where your contributions directly shape the company's trajectory and culture." },
            ].map((item) => (
              <div key={item.title} className="border border-white/[0.06] bg-[#0a0a0a] rounded-sm p-6">
                <div className="w-2 h-2 rounded-full bg-[#d4af37] mb-4" />
                <h3 className="text-white text-sm font-semibold tracking-wide uppercase mb-2">{item.title}</h3>
                <p className="text-[#777] text-[13px] leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        <div className="w-full h-px bg-gradient-to-r from-[#d4af37]/30 via-[#d4af37]/10 to-transparent my-8" />
      </div>

      {/* Application Form */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-8">
            <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-2">
              Join Our Team
            </h2>
            <p className="text-[#777] text-sm font-light">
              Welcome — we&apos;d love to have you on board. Fill out the form below with your details and attach your CV. We&apos;ll be in touch.
            </p>
          </div>

          <form onSubmit={handleAppSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className={labelClasses}>Full Name *</label>
                <input
                  type="text"
                  required
                  className={inputClasses}
                  placeholder="Your full name"
                  value={appForm.name}
                  onChange={(e) => setAppForm({ ...appForm, name: e.target.value })}
                />
              </div>
              <div>
                <label className={labelClasses}>Area of Expertise *</label>
                <input
                  type="text"
                  required
                  className={inputClasses}
                  placeholder="e.g. AI Engineering, Product Design, Research"
                  value={appForm.expertise}
                  onChange={(e) => setAppForm({ ...appForm, expertise: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className={labelClasses}>Email Address *</label>
                <input
                  type="email"
                  required
                  className={inputClasses}
                  placeholder="you@example.com"
                  value={appForm.email}
                  onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                />
              </div>
              <div>
                <label className={labelClasses}>Contact Information</label>
                <input
                  type="text"
                  className={inputClasses}
                  placeholder="Phone number or other contact"
                  value={appForm.contact}
                  onChange={(e) => setAppForm({ ...appForm, contact: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className={labelClasses}>Tell us about yourself</label>
              <textarea
                rows={4}
                className={`${inputClasses} resize-none`}
                placeholder="Brief message about your background and why you'd like to join Atlas..."
                value={appForm.message}
                onChange={(e) => setAppForm({ ...appForm, message: e.target.value })}
              />
            </div>

            {/* CV Upload */}
            <div>
              <label className={labelClasses}>Attach CV / Resume</label>
              <div
                className="border border-dashed border-white/10 rounded-sm px-6 py-8 text-center cursor-pointer hover:border-[#d4af37]/30 transition-colors"
                onClick={() => fileRef.current?.click()}
              >
                <input
                  ref={fileRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                />
                {cvFile ? (
                  <div className="flex items-center justify-center gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span className="text-[#d4af37] text-sm">{cvFile.name}</span>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setCvFile(null); }}
                      className="text-white/40 hover:text-white text-xs ml-2"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div>
                    <svg className="mx-auto mb-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <p className="text-white/30 text-sm">Click to upload your CV</p>
                    <p className="text-white/15 text-xs mt-1">PDF, DOC, DOCX</p>
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-[#d4af37] text-black text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-[#e8c84a] transition-colors"
            >
              {appStatus === "sent" ? "✓ Application Sent" : "Send Application"}
            </button>
          </form>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        <div className="w-full h-px bg-white/[0.06] my-4" />
      </div>

      {/* Contact Us Section */}
      <section id="contact" className="px-6 lg:px-12 py-16">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-8">
            <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-2">
              Contact Us
            </h2>
            <p className="text-[#777] text-sm font-light">
              Have a question, proposal, or just want to say hello? Send us a message at{" "}
              <a href="mailto:info@atlasinfrastructuregroup.com" className="text-[#d4af37] hover:underline">
                info@atlasinfrastructuregroup.com
              </a>{" "}
              or use the form below.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-5">
            <div>
              <label className={labelClasses}>Your Email *</label>
              <input
                type="email"
                required
                className={inputClasses}
                placeholder="you@example.com"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
              />
            </div>
            <div>
              <label className={labelClasses}>Message *</label>
              <textarea
                rows={5}
                required
                className={`${inputClasses} resize-none`}
                placeholder="Type your message or request here..."
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-white/[0.06] border border-white/10 text-white text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-white/[0.1] hover:border-white/20 transition-colors"
            >
              {contactStatus === "sent" ? "✓ Message Sent" : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
