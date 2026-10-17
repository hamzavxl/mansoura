"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { SCHOOL_INFO } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  // Balanced, streamlined navigation links (zero duplicates)
  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "عن الإدارة والمديرة", href: "/#leadership" },
    { name: "ركائز التكوين والاعتماد", href: "/#institution-pillars" },
    { name: "انطباعات المتربصين", href: "/#reviews" },
    { name: "الموقع الجغرافي", href: "/#contact" },
    { name: "عن المؤسسة", href: "/about" },
  ];

  // ScrollSpy to track active section dynamically
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["leadership", "institution-pillars", "reviews", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 130;
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Smooth animated scroll with offset when clicking on section links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        const yOffset = -85;
        const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const isLinkActive = (href: string) => {
    if (pathname === "/about" && href === "/about") return true;
    if (pathname === "/" && href === "/" && !activeSection) return true;
    if (href === `/#${activeSection}`) return true;
    return false;
  };

  return (
    <header className="sticky top-2 sm:top-3.5 z-50 px-3 sm:px-6 lg:px-8 transition-all">
      {/* Balanced wide container with rounded borders */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-2 sm:py-2.5 rounded-2xl sm:rounded-full bg-white/95 backdrop-blur-md border border-[#ece3e4] shadow-[0_4px_25px_rgba(0,0,0,0.06)] flex items-center justify-between">

        {/* Right side in RTL: Brand & Official Logo without awkward borders */}
        <Link href="/" className="flex items-center gap-3.5 no-underline group shrink-0">
          <Image
            src="/images/1.webp"
            alt="شعار مدرسة منصورة"
            width={48}
            height={48}
            priority
            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-black text-[#741922] leading-tight tracking-tight">
              مدرسة منصورة
            </span>
            <span className="text-[10px] font-bold tracking-widest text-[#b38a38] uppercase">
              MANSOURA SCHOOL • DJELFA
            </span>
          </div>
        </Link>

        {/* Center: Balanced, evenly-spaced Nav Links with animated downward press & smooth glide */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1.5 px-0.5 text-xs sm:text-sm font-bold transition-all duration-200 inline-flex flex-col items-center hover:translate-y-0.5 active:translate-y-1.5 ${
                  active
                    ? "text-[#741922]"
                    : "text-[#4b5563] hover:text-[#741922]"
                }`}
              >
                <span>{link.name}</span>
                {/* Smooth Animated Indicator */}
                {active && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-2 inset-x-0 h-[2.5px] bg-[#741922] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Left side in RTL: Primary Action & Social Links */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Subtle Branded Social Badges */}
          <div className="flex items-center gap-1.5">
            <a
              href={SCHOOL_INFO.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#fdf2f4] text-[#741922] hover:bg-[#1877f2] hover:text-white border border-[#f2c7cc] flex items-center justify-center transition-all shadow-xs"
              title="صفحة فيسبوك الرسمية"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a
              href={SCHOOL_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#fdf2f4] text-[#741922] hover:bg-[#741922] hover:text-white border border-[#f2c7cc] flex items-center justify-center transition-all shadow-xs"
              title="حساب إنستغرام الرسمي"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
          </div>

          {/* Primary Action Button: Visit Campus */}
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#741922] hover:bg-[#5b1219] text-white text-xs font-bold shadow-xs transition-colors"
          >
            <span>زيارة المقر</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-xl border border-[#ece3e4] text-[#741922] hover:bg-[#fdf2f4]"
          aria-label="تبديل القائمة"
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 max-w-[1440px] mx-auto rounded-2xl border border-[#ece3e4] bg-white/98 backdrop-blur-md px-6 py-4 flex flex-col gap-2 shadow-xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                  isActive
                    ? "text-[#741922] bg-[#fdf2f4]"
                    : "text-[#374151] hover:bg-[#fdf2f4] hover:text-[#741922]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2 flex items-center justify-between border-t border-[#ece3e4]">
            <div className="flex items-center gap-2">
              <a
                href={SCHOOL_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#fdf2f4] text-[#741922] flex items-center justify-center border border-[#f2c7cc]"
                title="فيسبوك"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={SCHOOL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#fdf2f4] text-[#741922] flex items-center justify-center border border-[#f2c7cc]"
                title="إنستغرام"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                </svg>
              </a>
            </div>
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2 rounded-xl bg-[#741922] hover:bg-[#5b1219] text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <span>زيارة المقر</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
