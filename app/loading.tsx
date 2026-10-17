import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gradient-to-b from-[#3a080d] via-[#200407] to-[#120204] text-white">
      <div className="flex flex-col items-center gap-6 text-center">
        {/* White Medallion with the Official Logo */}
        <div className="relative w-24 h-24 rounded-full bg-white p-3.5 flex items-center justify-center shadow-2xl border-4 border-white/95">
          <Image
            src="/images/1.webp"
            alt="شعار مدرسة منصورة للتكوين والتعليم بالجلفة"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </div>

        {/* School Name & Tagline */}
        <div className="space-y-1">
          <div className="text-lg font-black text-white">مدرسة منصورة للتكوين والتعليم</div>
          <div className="text-[11px] font-bold text-[#fde047] uppercase tracking-wider">ولاية الجلفة</div>
        </div>

        {/* Moving Progress Bar - Zero Text */}
        <div className="w-48 sm:w-56 h-1.5 bg-white/10 rounded-full overflow-hidden border border-white/10 relative">
          <div className="h-full bg-gradient-to-r from-[#b38a38] via-[#fde047] to-white rounded-full animate-pulse w-3/4" />
        </div>
      </div>
    </div>
  );
}
