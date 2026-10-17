"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ZisaaStyleHero() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-[#741922] via-[#5b1219] to-[#3f0b10] text-white -mt-[72px] sm:-mt-[82px] pt-24 sm:pt-32 pb-28 sm:pb-36 overflow-hidden">
      
      {/* Background Architectural Grid Lines (optimized for mobile 60fps) */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-90 pointer-events-none" 
      />

      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-[#b38a38]/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-64 h-64 rounded-full bg-[#fce7eb]/10 blur-2xl pointer-events-none" />

      <div className="w-[92%] max-w-[1240px] mx-auto relative z-10">
        
        {/* Main Grid: Headline & Content vs Visual & Floating Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Right Column in RTL: Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-right"
          >
            {/* Prominent Official Mansoura Logo Emblem */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-3 shadow-2xl border-2 border-white/90 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/1.webp"
                  alt="شعار مدرسة منصورة بالجلفة"
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#fce7eb] mb-1.5 w-fit">
                  <span className="w-2 h-2 rounded-full bg-[#facc15] animate-pulse" />
                  <span>معتمدة رسمياً من وزارة التكوين المهني</span>
                </div>
                <span className="text-xl sm:text-2xl font-black text-white leading-tight tracking-tight">
                  مدرسة منصورة للتكوين والتعليم
                </span>
                <span className="text-xs font-bold text-[#facc15] tracking-widest uppercase">
                  MANSOURA SCHOOL • DJELFA
                </span>
              </div>
            </div>

            {/* Main Punchy Title with Highlighted Accent Words */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.25] tracking-normal text-white">
              تعلّم، طوّر مهاراتك، <br />
              وحقّق التميّز مع <br />
              <span className="text-[#facc15] underline decoration-[#facc15]/30 underline-offset-8">
                مدرسة منصورة
              </span>
            </h1>

            {/* Institutional Description (Without listing specialties) */}
            <p className="text-base sm:text-lg text-[#fce7eb]/90 leading-relaxed max-w-xl font-normal">
              مؤسسة خاصة معتمدة من طرف الدولة، نكرس خبراتنا وطاقاتنا البيداغوجية لمرافقة المتربصين والطلبة نحو امتلاك كفاءات تطبيقية صلبة وشهادات دولة رسمية تفتح آفاق التشغيل والريادة.
            </p>

            {/* CTA Button & Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#institution-pillars"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#facc15] hover:bg-[#eab308] text-[#111827] font-black text-sm sm:text-base shadow-md transition-colors"
              >
                <span>اكتشف المؤسسة</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </a>

              <a
                href="#leadership"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>كلمة ورؤية الإدارة</span>
              </a>
            </div>

            {/* Student Review & Trust Proof Widget (Clean Vector Stars, Fully Responsive) */}
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center -space-x-2.5 space-x-reverse shrink-0">
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white shadow-md overflow-hidden bg-white/20">
                  <Image
                    src="/profiles/avatar_1.webp"
                    alt="Messaoud Sami - متابع متفاعل"
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white shadow-md overflow-hidden bg-white/20">
                  <Image
                    src="/profiles/avatar_4.webp"
                    alt="Mà Sîlvä - متربصة سابقة"
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white shadow-md overflow-hidden bg-white/20">
                  <Image
                    src="/profiles/avatar_2.webp"
                    alt="Abdo El Rahim - طالب مسجل"
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white shadow-md overflow-hidden bg-white/20">
                  <Image
                    src="/profiles/avatar_3.webp"
                    alt="Siham Rouibah - متابعة معتمدة"
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Unified Rating & Social Proof */}
              <div className="flex flex-col justify-center text-right">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5 text-[#facc15]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-black text-white font-mono">4.9 / 5</span>
                  <span className="text-[10px] text-[#facc15] font-bold px-2 py-0.5 rounded-full bg-white/10 border border-white/15">
                    تقييم ممتاز
                  </span>
                </div>
                <div className="text-[11px] sm:text-xs text-[#fce7eb]/85 font-medium mt-1">
                  ثقة واعتماد أجيال من الخريجين • <strong className="text-white font-bold font-mono">+2,850</strong> متخرج معتمد
                </div>
              </div>
            </div>

          </motion.div>

          {/* Left Column in RTL: Institution Mascot / Showcase with 3 Floating Translucent Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center"
          >
            
            {/* Center Institutional 3D Pop-Out Circular Avatar Showcase */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] h-[420px] sm:h-[480px] flex items-end justify-center">
              
              {/* Outer Golden Ambient Glow behind Circle */}
              <div className="absolute bottom-4 sm:bottom-6 w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] rounded-full bg-[#b38a38]/25 blur-3xl pointer-events-none" />

              {/* Decorative Concentric Halo Ring */}
              <div className="absolute bottom-2 sm:bottom-4 w-[300px] sm:w-[364px] h-[300px] sm:h-[364px] rounded-full border border-[#facc15]/25 pointer-events-none animate-pulse" />

              {/* 1. Circular Backdrop Frame with Gold Border */}
              <div className="absolute bottom-4 sm:bottom-6 w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] rounded-full bg-gradient-to-b from-[#8f212c] via-[#5c131b] to-[#200508] border-4 border-[#b38a38] shadow-[0_25px_60px_rgba(0,0,0,0.65)] overflow-hidden">
                {/* Subtle Geometric Dots/Grid inside Circle */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 24 0 L 0 0 0 24' fill='none' stroke='%23facc15' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '24px 24px'
                  }}
                />
                {/* Inner Top Golden Ambient Radiance */}
                <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#fde047]/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* 2. Mansoura Official Crest Badge (Top Right of Composition) */}
              <div className="absolute top-2 sm:top-4 right-1 sm:-right-2 z-30 flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white shadow-xl border-2 border-white/90">
                <Image
                  src="/images/1.webp"
                  alt="شعار مدرسة منصورة"
                  width={34}
                  height={34}
                  className="object-contain"
                />
                <div className="flex flex-col text-right">
                  <span className="text-xs font-black text-[#741922] leading-none">مدرسة منصورة</span>
                  <span className="text-[9px] font-bold text-[#b38a38] uppercase tracking-wider mt-0.5">MANSOURA</span>
                </div>
              </div>

              {/* 3. Directress Portrait Head Popping OUT over the Top Rim in Full 3D */}
              <div className="absolute bottom-4 sm:bottom-6 w-[280px] sm:w-[340px] h-[380px] sm:h-[450px] rounded-b-full overflow-hidden flex items-end justify-center z-10 pointer-events-none">
                <Image
                  src="/images/12.webp"
                  alt="المديرة العامة لمدرسة منصورة للتكوين والتعليم أ. نوال عيساوي"
                  width={420}
                  height={520}
                  className="w-[275px] sm:w-[335px] h-auto object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)]"
                  priority
                />
              </div>

              {/* 4. Leadership Anchor Badge (Overlapping Bottom Rim of Circle) */}
              <div className="absolute bottom-1 sm:bottom-2 z-20 flex flex-col items-center justify-center text-center px-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b0306]/90 backdrop-blur-md border border-[#facc15]/40 text-[#facc15] text-[11px] font-bold shadow-2xl">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] animate-pulse" />
                  <span>المديرة العامة: أ. نوال عيساوي</span>
                  <span className="text-white/40 text-[10px]">•</span>
                  <span className="text-white/80 text-[10px] font-normal">الإشراف العام</span>
                </div>
              </div>
            </div>

            {/* Desktop / Tablet Floating Glass Cards (Hidden on mobile to eliminate overlap) */}
            {/* Floating Glass Card 1: Total Graduates (Top Left in RTL) */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden sm:flex absolute top-4 sm:top-8 -left-4 sm:-left-6 lg:-left-10 bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl p-3.5 shadow-xl items-center gap-3 text-right z-30"
            >
              <div className="w-10 h-10 rounded-xl bg-[#facc15] text-[#111827] flex items-center justify-center font-black">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <div className="text-[11px] text-[#fce7eb] font-semibold">الخريجون المعتمدون</div>
                <div className="text-base font-black font-mono text-white">+2,850 خريج</div>
              </div>
            </motion.div>

            {/* Floating Glass Card 2: Facebook Community (Middle Right in RTL) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden sm:flex absolute top-1/2 -right-4 sm:-right-6 lg:-right-8 -translate-y-1/2 bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl p-3.5 shadow-xl items-center gap-3 text-right z-30"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1877f2] text-white flex items-center justify-center font-black">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <div className="text-[11px] text-[#fce7eb] font-semibold">متابعو الصفحة الرسمية</div>
                <div className="text-base font-black font-mono text-white">226,672+</div>
              </div>
            </motion.div>

            {/* Floating Glass Card 3: Success Rate (Lower Left, well clear of bottom badge) */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 15 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden sm:flex absolute bottom-6 sm:bottom-10 -left-4 sm:-left-6 lg:-left-10 bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl p-3.5 shadow-xl items-center gap-3 text-right z-30"
            >
              <div className="w-10 h-10 rounded-xl bg-[#10b981] text-white flex items-center justify-center font-black">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <div className="text-[11px] text-[#fce7eb] font-semibold">نسبة النجاح الرسمي</div>
                <div className="text-base font-black font-mono text-white">94.2%</div>
              </div>
            </motion.div>

            {/* Mobile Dedicated Clean Stats Grid (Zero overlapping, 100% visible) */}
            <div className="sm:hidden grid grid-cols-3 gap-2 w-full max-w-[340px] mt-4">
              <div className="bg-white/10 border border-white/15 rounded-2xl p-2.5 text-center flex flex-col items-center">
                <div className="text-[10px] text-[#fce7eb]/80 font-semibold mb-0.5">الخريجون</div>
                <div className="text-xs font-black font-mono text-[#facc15]">+2,850</div>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-2.5 text-center flex flex-col items-center">
                <div className="text-[10px] text-[#fce7eb]/80 font-semibold mb-0.5">المتابعون</div>
                <div className="text-xs font-black font-mono text-[#60a5fa]">226K+</div>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-2.5 text-center flex flex-col items-center">
                <div className="text-[10px] text-[#fce7eb]/80 font-semibold mb-0.5">نسبة النجاح</div>
                <div className="text-xs font-black font-mono text-[#34d399]">94.2%</div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Integrated Institutional Authority Ribbon (Seamless, executive, zero disconnected white box) */}
      <div className="w-full border-t border-white/10 bg-black/25 backdrop-blur-lg mt-16 sm:mt-20">
        <div className="w-[92%] max-w-[1240px] mx-auto py-5 sm:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-center">
            
            <div className="flex items-center gap-3.5 text-right">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-[#fde047]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="text-xs sm:text-sm font-black text-white">اعتماد وزاري رسمي</div>
                <div className="text-[11px] text-[#fce7eb]/75">وزارة التكوين والتعليم المهنيين</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 text-right">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-[#fde047]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div>
                <div className="text-xs sm:text-sm font-black text-white">70% تطبيق مخبري</div>
                <div className="text-[11px] text-[#fce7eb]/75">محطة عمل فردية لكل متربص</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 text-right">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-[#fde047]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <div className="text-xs sm:text-sm font-black text-white">تأطير بيداغوجي رفيع</div>
                <div className="text-[11px] text-[#fce7eb]/75">نخبة المكونين بإشراف الأساتذة</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 text-right">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-[#fde047]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="text-xs sm:text-sm font-black text-white">المقر الرسمي بالجلفة</div>
                <div className="text-[11px] text-[#fce7eb]/75">حي 05 جويلية، مركز الأعمال</div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

