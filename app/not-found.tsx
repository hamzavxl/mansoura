import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#faf8f8] relative overflow-hidden flex flex-col justify-between py-12 px-4 sm:px-6">
      
      {/* Background Manuscript Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M80 20 C60 35 45 55 45 80 C45 105 60 125 80 140 C100 125 115 105 115 80 C115 55 100 35 80 20 Z' fill='%23741922' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px'
        }}
      />

      {/* Top Header Logo */}
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between relative z-10">
        <Link href="/" className="inline-flex items-center gap-3 bg-white p-2.5 px-4 rounded-2xl border border-[#ece3e4] shadow-xs">
          <Image
            src="/images/1.webp"
            alt="شعار مدرسة منصورة"
            width={120}
            height={40}
            className="object-contain max-h-9 w-auto"
            priority
          />
        </Link>

        <span className="text-xs font-bold text-[#741922]">
          الجلفة 17001
        </span>
      </div>

      {/* Center 404 Hero Card */}
      <div className="w-full max-w-2xl mx-auto my-auto text-center space-y-6 relative z-10 py-10">
        
        {/* Large 404 Emblem */}
        <div className="space-y-2">
          <span className="font-mono text-7xl sm:text-9xl font-black text-[#741922] tracking-tighter block drop-shadow-sm">
            404
          </span>
          <div className="inline-flex items-center gap-2 text-[#741922] text-xs font-black">
            <span className="w-2 h-2 rounded-full bg-[#741922]" />
            خطأ في المسار • الصفحة غير موجودة
          </div>
        </div>

        <div className="space-y-3 max-w-lg mx-auto">
          <h1 className="text-2xl sm:text-3xl font-black text-[#111827]">
            عذراً، لم نتمكن من العثور على هذه الصفحة
          </h1>
          <p className="text-sm text-[#4b5563] leading-relaxed">
            يبدو أن الرابط الذي حاولت الوصول إليه غير متوفر أو تم نقله. يمكنك العودة إلى البوابة الرئيسية أو استكشاف أقسام المدرسة الرسمية أدناه.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#741922] hover:bg-[#59131a] text-white font-black text-xs sm:text-sm shadow-md transition-all hover:-translate-y-0.5"
          >
            <span>العودة للصفحة الرئيسية</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#faf8f8] text-[#111827] font-bold text-xs sm:text-sm border-2 border-[#ece3e4] hover:border-[#741922]/30 shadow-xs transition-all"
          >
            <span>عن المدرسة (من نحن)</span>
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#faf8f8] text-[#741922] font-bold text-xs sm:text-sm border-2 border-[#ece3e4] hover:border-[#741922]/30 shadow-xs transition-all"
          >
            <span>مقر المدرسة والتواصل</span>
          </Link>
        </div>

      </div>

      {/* Bottom Footer Info Strip */}
      <div className="w-full max-w-[1200px] mx-auto text-center text-xs text-[#6b7280] space-y-1 relative z-10 border-t border-[#ece3e4] pt-6">
        <div>
          مدرسة منصورة للتكوين والتعليم — حي 05 جويلية، مركز الأعمال، رقم 13/14، الجلفة 17001، الجزائر
        </div>
        <div className="font-mono text-[11px] text-[#741922] font-bold">
          الهاتف: 0557 56 44 04 • البريد: mansouraschooldjelfa3@gmail.com
        </div>
      </div>

    </main>
  );
}
