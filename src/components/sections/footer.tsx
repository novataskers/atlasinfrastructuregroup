"use client";

import React from 'react';
import Image from 'next/image';

const LOGO_URL = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/cd2f08d3-1d27-4c0f-8dcd-3a8affeb6b4f/WhatsApp_Image_2026-02-20_at_4.12.53_PM-removebg-preview-1771621011092.png?width=8000&height=8000&resize=contain";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon fill="#000" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', url: '#', Icon: FacebookIcon },
    { name: 'Instagram', url: '#', Icon: InstagramIcon },
    { name: 'LinkedIn', url: '#', Icon: LinkedInIcon },
    { name: 'X', url: '#', Icon: XIcon },
    { name: 'YouTube', url: '#', Icon: YouTubeIcon },
  ];

  const mainLinks = [
    { title: 'Who We Are', url: '#who-we-are' },
    { title: 'What We Do', url: '#what-we-do' },
    { title: 'Careers', url: '#careers' },
  ];

  const secondaryLinks = [
    { title: 'Investors', url: '#investors' },
    { title: 'News', url: '#news' },
    { title: 'Partners', url: '#partners' },
  ];

  const subLinks = [
    { title: 'Privacy Notice', url: '#privacy' },
    { title: 'Terms of Use', url: '#terms' },
    { title: 'Corporate Governance', url: '#governance' },
    { title: 'Contact Us', url: '#contact' },
  ];

  return (
    <footer className="bg-black text-white pt-[60px] pb-[40px] font-sans">
      <div className="mx-auto max-w-[1600px] px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-[#262626] pb-8 gap-8 md:gap-0">
          <div className="flex-shrink-0">
            <a href="/" className="inline-block">
              <Image
                src={LOGO_URL}
                alt="Atlas Infrastructure Group Logo"
                width={220}
                height={55}
                className="h-[120px] w-auto object-contain brightness-0 invert"
              />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-3">
              {socialLinks.map(({ name, url, Icon }) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex items-center justify-center w-[38px] h-[38px] rounded-sm border border-[#444] text-white hover:border-white hover:bg-white hover:text-black transition-all duration-200"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="text-white hover:opacity-70 transition-opacity"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center mb-10 text-center">
          <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-8">
            {mainLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.url}
                  className="footer-link text-[13px] tracking-[0.1em] font-normal uppercase hover:underline"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-4">
            {secondaryLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.url}
                  className="footer-link text-[13px] tracking-[0.1em] font-normal uppercase hover:underline text-white"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-[#262626] pt-8 mb-8">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {subLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.url}
                  className="text-[12px] uppercase tracking-[0.05em] text-[#a3a3a3] hover:text-white transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <p className="text-[12px] text-[#737373] max-w-[800px] mx-auto leading-relaxed">
            &copy; 2026 Atlas Infrastructure Group&trade;. The Atlas Infrastructure Group name and logos are registered trademarks of Atlas Infrastructure Group.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
