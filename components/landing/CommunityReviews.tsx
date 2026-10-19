import Image from "next/image";
import { COMMUNITY_REVIEWS } from "@/lib/data";

export default function CommunityReviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-gradient-to-br from-[#741922] via-[#59131a] to-[#3a080d] relative overflow-hidden border-b border-[#59131a]">
      {/* Clean Architectural Square Grid Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 48 0 L 0 0 0 48' fill='none' stroke='white' stroke-width='1.2'/%3E%3C/svg%3E")`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="w-[92%] max-w-[1240px] mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-white text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#fde047]" />
              <span>شهادات وتجارب المتربصين الحقيقية</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              انطباعات <span className="text-[#fde047]">المتربصين والخريجين</span>
            </h2>

            <p className="text-sm sm:text-base text-[#fce7eb]/80 max-w-2xl leading-relaxed">
              شهادات وانطباعات موثقة من متربصي وخريجي دفعات مدرسة منصورة، تعكس جودة التكوين التطبيقي والمرافقة الميدانية.
            </p>
          </div>

          {/* Clean Rating & Excellence Trust Badge */}
          <div className="flex items-center gap-4 bg-white/10 border border-white/15 backdrop-blur-xs px-5 py-3.5 rounded-2xl shadow-sm">
            <div className="flex items-center gap-1 text-[#fde047]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <div className="h-7 w-px bg-white/20" />
            <div className="text-right">
              <div className="text-sm font-black text-white leading-none">
                4.9 <span className="text-xs font-semibold text-[#fde047]">/ 5</span>
              </div>
              <div className="text-[11px] text-[#fce7eb]/80 font-medium mt-1">
                مؤشر الرضا وجودة التكوين
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid (All 12 Reviews Displayed Directly - No Filter / No Pagination) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMUNITY_REVIEWS.map((r, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* User Header with Real Avatar */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#ece3e4] shrink-0 bg-[#f3f4f6]">
                    <Image
                      src={r.avatar}
                      alt={r.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-black text-[#111827] truncate">
                      {r.name}
                    </h3>
                    <p className="text-[11px] text-[#6b7280] truncate">
                      {r.role}
                    </p>
                  </div>
                </div>

                {/* Stars Rating SVG (Clean vector, no emoji) */}
                <div className="flex items-center gap-1 text-[#eab308]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                  «{r.comment}»
                </p>
              </div>

              {/* Verified Source Footer */}
              <div className="pt-3 border-t border-[#ece3e4] flex items-center justify-between text-[11px] text-[#9ca3af]">
                <span className="flex items-center gap-1.5 text-[#059669] font-bold">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>متربص معتمد</span>
                </span>
                <span>{r.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
