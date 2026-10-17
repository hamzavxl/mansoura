import Link from "next/link";
import Image from "next/image";
import { SCHOOL_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full pt-4 pb-10 sm:pb-14 px-4 sm:px-6 relative z-20">
      {/* Floating Island Bento Card (مستديرة الحواف بهوامش جانبية وخلفية محيطة) */}
      <div className="max-w-[1240px] mx-auto rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-[#22070b] via-[#1a0407] to-[#120204] text-[#fce7eb]/80 pt-12 sm:pt-16 pb-10 sm:pb-12 px-6 sm:px-10 border-2 border-[#741922]/50 shadow-2xl relative overflow-hidden">
        
        {/* Subtle Architectural Grid Inside Floating Card */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 32 0 L 0 0 0 32' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Ambient Top Glow */}
        <div className="absolute -top-24 inset-x-1/4 h-32 bg-[#741922]/30 blur-3xl pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10">
          
          {/* Main Grid: 4 Balanced Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10 sm:pb-12 border-b border-[#741922]/40">

          {/* Col 1: Brand & Logo (Crystal clear white card for the logo) */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              {/* Prominent White Logo Card so #741922 logo stands out clearly */}
              <div className="w-14 h-14 rounded-2xl bg-white p-2 flex items-center justify-center shadow-lg border-2 border-white/90 shrink-0">
                <Image
                  src="/images/1.webp"
                  alt="شعار مدرسة منصورة بالجلفة"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-black text-white leading-tight">
                  مدرسة منصورة
                </div>
                <div className="text-[10px] font-bold text-[#facc15] tracking-widest uppercase">
                  MANSOURA SCHOOL • DJELFA
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-[#fce7eb]/75">
              مؤسسة خاصة معتمدة من طرف وزارة التكوين المهني — صرح التكوين والتميز المهني والتدريب التطبيقي بولاية الجلفة.
            </p>

            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-[#facc15]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] animate-pulse" />
              <span>صرح التكوين والتعليم المعتمد بالجلفة</span>
            </div>

            {/* Social Channels (Refined institutional style matching burgundy palette) */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={SCHOOL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1877f2] border border-white/15 text-white flex items-center justify-center transition-all shadow-xs"
                title="صفحة فيسبوك الرسمية"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href={SCHOOL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-gradient-to-tr hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] border border-white/15 text-white flex items-center justify-center transition-all shadow-xs"
                title="حساب إنستغرام الرسمي"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              <a
                href={`https://wa.me/213${SCHOOL_INFO.phone.replace(/\s+/g, '').replace(/^0/, '')}?text=%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#25d366] border border-white/15 text-white flex items-center justify-center transition-all shadow-xs"
                title="واتساب مباشر"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Institutional Sections */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider pb-1.5 border-b border-[#741922] inline-block">
              أقسام المؤسسة
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/#hero" className="hover:text-white transition-colors">واجهة المؤسسة والتقديم العام</Link>
              </li>
              <li>
                <Link href="/#leadership" className="hover:text-white transition-colors">عن الإدارة والمديرة العامة</Link>
              </li>
              <li>
                <Link href="/#institution-pillars" className="hover:text-white transition-colors">ركائز التكوين والاعتماد</Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-white transition-colors">آراء ومجتمع المتربصين</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">الموقع الجغرافي وخريطة الوصول</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">عن المدرسة والاعتماد الوزاري</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quality & Accreditations */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider pb-1.5 border-b border-[#741922] inline-block">
              معايير الجودة والاعتماد
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] shrink-0" />
                <span>اعتماد رسمي صادر عن وزارة التكوين المهني</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] shrink-0" />
                <span>تكوين تطبيقي بنسبة 70% داخل المخابر</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] shrink-0" />
                <span>محطة عمل فردية (1:1) لكل متربص</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] shrink-0" />
                <span>مرافقة بيداغوجية وتربصات ميدانية</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] shrink-0" />
                <span>شهادات دولة وتأهيل مهني معترف به</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider pb-1.5 border-b border-[#741922] inline-block">
              المقر والتواصل
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2.5" className="shrink-0 mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="leading-relaxed text-[#fce7eb]/90">
                  حي 05 جويلية، مركز الأعمال، رقم 13/14 (محلات أسواق سابقاً)، الجلفة 17001، الجزائر
                </span>
              </li>

              <li className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2.5" className="shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className="flex flex-col">
                  <a href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white font-mono font-bold text-white transition-colors">
                    {SCHOOL_INFO.phone}
                  </a>
                  <span className="text-[11px] text-[#fce7eb]/60 font-mono" dir="ltr">
                    {SCHOOL_INFO.phoneIntl}
                  </span>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2.5" className="shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white transition-colors text-xs text-[#fce7eb]/80 break-all font-mono">
                  {SCHOOL_INFO.email}
                </a>
              </li>

              <li className="flex items-center gap-2 pt-1 text-[11px] text-[#fce7eb]/70">
                <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                <span>أوقات الاستقبال: الأحد — الخميس (<span dir="ltr" className="font-mono">08:30 — 16:30</span>)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & GitHub Source Code Badge */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#fce7eb]/70 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-right">
            <span className="font-medium text-white/80">
              مدرسة منصورة للتكوين والتعليم — الجلفة &copy; 2026. جميع الحقوق محفوظة.
            </span>
          </div>

          {/* GitHub Source Code Icon Only */}
          <a
            href="https://github.com/hamzavxl/mansoura"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white hover:text-[#facc15] flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-sm group shrink-0"
            title="GitHub: hamzavxl/mansoura"
            aria-label="GitHub Repository"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
        </div>

      </div>
    </div>
  </footer>
  );
}
