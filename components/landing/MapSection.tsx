"use client";

import { useState } from "react";

// Verified GPS coordinates from official Google Maps place (Mansoura School)
// Google Maps link: https://maps.app.goo.gl/ntoBzZktqzwspUmz6
// Coordinates: 34.6610422, 3.2745361
// Address: حي 05 جويلية، مركز الأعمال، رقم 13/14 (محلات أسواق سابقاً)، الجلفة 17001، الجزائر

const LAT  = 34.6610422;
const LNG  = 3.2745361;
const ZOOM = 17;

const GMAPS_LINK  = "https://maps.app.goo.gl/ntoBzZktqzwspUmz6";
const GMAPS_EMBED = `https://maps.google.com/maps?q=${LAT},${LNG}+(Mansoura+School)&t=&z=17&ie=UTF8&iwloc=B&output=embed`;
const OSM_EMBED   = `https://www.openstreetmap.org/export/embed.html?bbox=${LNG - 0.007},${LAT - 0.005},${LNG + 0.007},${LAT + 0.005}&layer=mapnik&marker=${LAT},${LNG}`;
const OSM_LINK    = `https://www.openstreetmap.org/?mlat=${LAT}&mlon=${LNG}#map=${ZOOM}/${LAT}/${LNG}`;

const contactItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "العنوان الكامل",
    value: (
      <>
        حي 05 جويلية، مركز الأعمال<br />
        رقم 13/14 (محلات أسواق سابقاً)<br />
        <span className="font-mono font-bold text-[#741922]">الجلفة 17001، الجزائر</span>
      </>
    ),
    action: { href: GMAPS_LINK, label: "فتح في خرائط Google", external: true },
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "الهاتف وخدمة الواتساب المباشرة",
    value: (
      <div className="space-y-1.5 pt-1 text-right">
        <div className="flex items-center justify-between text-xs border-b border-[#f1f5f9] pb-1">
          <span className="font-bold text-[#111827]">خط الإدارة وواتساب (موبيليس):</span>
          <span className="font-mono font-bold text-[#741922]" dir="ltr">0557 56 44 04</span>
        </div>
        <div className="flex items-center justify-between text-xs border-b border-[#f1f5f9] pb-1">
          <span className="text-[#4b5563]">مصلحة التوجيه (موبيليس):</span>
          <span className="font-mono font-semibold text-[#111827]" dir="ltr">0557 56 44 01</span>
        </div>
        <div className="flex items-center justify-between text-xs border-b border-[#f1f5f9] pb-1">
          <span className="text-[#4b5563]">المتابعة البيداغوجية (موبيليس):</span>
          <span className="font-mono font-semibold text-[#111827]" dir="ltr">0663 02 94 02</span>
        </div>
        <div className="flex items-center justify-between text-xs border-b border-[#f1f5f9] pb-1">
          <span className="text-[#4b5563]">مصلحة التربصات (جازي):</span>
          <span className="font-mono font-semibold text-[#111827]" dir="ltr">0772 81 41 61</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#4b5563]">الاستقبال والاستفسار (أوريدو):</span>
          <span className="font-mono font-semibold text-[#111827]" dir="ltr">0674 17 74 87</span>
        </div>
      </div>
    ),
    action: { href: "tel:0557564404", label: "اتصال هاتفي", external: false },
    secondaryAction: { href: "https://wa.me/213557564404?text=%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85", label: "واتساب مباشر (سلام عليكم)", external: true },
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "البريد الإلكتروني الرسمي",
    value: <span className="break-all text-xs font-mono font-semibold text-[#111827]" dir="ltr">mansouraschooldjelfa3@gmail.com</span>,
    action: { href: "mailto:mansouraschooldjelfa3@gmail.com", label: "إرسال رسالة", external: false },
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "أوقات الاستقبال",
    value: (
      <div className="space-y-0.5">
        <span className="block font-semibold text-[#111827]">الأحد — الخميس</span>
        <span className="font-mono font-bold text-[#741922] block text-xs sm:text-sm text-right" dir="ltr">08:30 — 16:30</span>
      </div>
    ),
    action: null,
  },
];

export default function MapSection() {
  const [mapProvider, setMapProvider] = useState<"google" | "osm">("osm");

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#faf8f8] relative overflow-hidden border-t border-[#ece3e4]">
      {/* Clean Architectural Square Grid Lines (خطوط مربعات هندسية واضحة وأنيقة) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 48 0 L 0 0 0 48' fill='none' stroke='%23741922' stroke-width='1.2'/%3E%3C/svg%3E")`,
          backgroundSize: '48px 48px'
        }}
      />
      <div id="map-section" className="-top-24 relative" />
      <div className="w-[92%] max-w-[1240px] mx-auto space-y-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-[#741922] text-xs font-black">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>موقع مدرسة منصورة على الخريطة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827]">
            تعرف على <span className="text-[#741922]">مقرنا بالجلفة</span> وتعال زرنا
          </h2>

          <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
            نتواجد في قلب مدينة الجلفة — حي 05 جويلية، مركز الأعمال، رقم 13/14 (محلات أسواق سابقاً).
            موقع مركزي سهل الوصول من جميع أحياء المدينة ومحطات النقل الحضري.
          </p>
        </div>

        {/* Map + Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Interactive Map Embed Column (Static 60FPS for zero mobile freezing) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-[#ece3e4] shadow-lg relative bg-white">
            {/* Map Header Bar with Provider Switcher */}
            <div className="bg-white px-4 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-[#ece3e4]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#741922] animate-pulse" />
                <span className="text-xs font-black text-[#111827]">
                  مدرسة منصورة (Mansoura School) — حي 05 جويلية
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Map Type Switcher */}
                <div className="inline-flex rounded-lg border border-[#ece3e4] p-0.5 bg-[#f9fafb] text-[11px] font-bold">
                  <button
                    type="button"
                    onClick={() => setMapProvider("google")}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      mapProvider === "google"
                        ? "bg-[#741922] text-white shadow-xs"
                        : "text-[#4b5563] hover:text-[#111827]"
                    }`}
                  >
                    Google Maps
                  </button>
                  <button
                    type="button"
                    onClick={() => setMapProvider("osm")}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      mapProvider === "osm"
                        ? "bg-[#741922] text-white shadow-xs"
                        : "text-[#4b5563] hover:text-[#111827]"
                    }`}
                  >
                    OpenStreetMap
                  </button>
                </div>

                <a
                  href={GMAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-[#fdf2f4] hover:bg-[#741922] text-[#741922] hover:text-white border border-[#f2c7cc] text-[11px] font-bold flex items-center gap-1 transition-all"
                  title="فتح في خرائط Google"
                >
                  <span>فتح الرابط</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17l9.2-9.2M17 17V8H8" />
                  </svg>
                </a>
              </div>
            </div>

            {/* The Live Iframe */}
            <iframe
              title="موقع مدرسة منصورة للتكوين والتدريب بالجلفة"
              src={mapProvider === "google" ? GMAPS_EMBED : OSM_EMBED}
              width="100%"
              height="390"
              className="block border-0 w-full"
              loading="lazy"
              allowFullScreen
            />

            {/* Coordinates Badge */}
            <div className="bg-white px-4 py-2.5 border-t border-[#ece3e4] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#6b7280] gap-2">
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#741922" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span className="text-[#741922] font-bold">GPS:</span>
                <span>{LAT}°N, {LNG}°E</span>
                <span className="text-[#ece3e4]">|</span>
                <span>الرمز البريدي: <strong className="text-[#111827]">17001</strong></span>
              </div>

              <a
                href={GMAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-[#741922] hover:underline font-bold font-sans text-[11px]"
              >
                maps.app.goo.gl/ntoBzZktqzwspUmz6 &larr;
              </a>
            </div>
          </div>

          {/* Contact Cards — Right in RTL */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-[#ece3e4] hover:border-[#741922]/30 rounded-xl p-4 sm:p-5 transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#fdf2f4] text-[#741922] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold text-[#6b7280] uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm text-[#374151] leading-relaxed">
                      {item.value}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      {item.action && (
                        <a
                          href={item.action.href}
                          target={item.action.external ? "_blank" : undefined}
                          rel={item.action.external ? "noreferrer" : undefined}
                          className="inline-flex items-center gap-1 text-[11px] font-black text-[#741922] hover:underline"
                        >
                          {item.action.label}
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M7 17l9.2-9.2M17 17V8H8" />
                          </svg>
                        </a>
                      )}
                      {(item as any).secondaryAction && (
                        <a
                          href={(item as any).secondaryAction.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-black text-[#059669] hover:underline"
                        >
                          {(item as any).secondaryAction.label}
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M7 17l9.2-9.2M17 17V8H8" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Facebook Card */}
            <a
              href="https://www.facebook.com/dzmansoura"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1877f2] hover:bg-[#1464cc] rounded-xl p-4 sm:p-5 flex items-center gap-4 transition-all hover:shadow-lg hover:-translate-y-0.5 group text-white"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-bold text-[#c8deff] uppercase tracking-wider">صفحة الفيسبوك الرسمية</div>
                <div className="text-sm font-black text-white truncate">facebook.com/dzmansoura</div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                  <span className="text-[11px] text-[#c8deff]">226,672 متابع • 713 تفاعل</span>
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0">
                <path d="M7 17l9.2-9.2M17 17V8H8" />
              </svg>
            </a>

            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/mansoura_schooldjelfa"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#f56040] hover:opacity-95 rounded-xl p-4 sm:p-5 flex items-center gap-4 transition-all hover:shadow-lg hover:-translate-y-0.5 group text-white"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-bold text-white/80 uppercase tracking-wider">حساب إنستغرام الرسمي</div>
                <div className="text-sm font-black text-white truncate">@mansoura_schooldjelfa</div>
                <div className="text-[11px] text-white/90 mt-0.5">
                  منشورات، ستوريات يومية ونشاطات الطلبة
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0">
                <path d="M7 17l9.2-9.2M17 17V8H8" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
