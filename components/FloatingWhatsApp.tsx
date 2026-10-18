"use client";

import { SCHOOL_INFO } from "@/lib/data";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="تواصل عبر واتساب" className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        {/* Subtle Pulse Animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25d366]/40 animate-ping pointer-events-none" />

        <a
          href={SCHOOL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-110 active:scale-95"
          title="مراسلة مدرسة منصورة على واتساب (سلام عليكم)"
          aria-label="مراسلة مدرسة منصورة على واتساب"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
        </a>
      </div>
    </aside>
  );
}
