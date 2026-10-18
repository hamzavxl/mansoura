"use client";

import Image from "next/image";

/**
 * Institutional Partners & Accreditation Brands Logo Marquee
 * Pure borderless, floating official logos ribbon with ZERO text:
 * High-profile Algerian public institutions, telecom operators, and national enterprises:
 * 1. اتصالات الجزائر (Algérie Télécom)
 * 2. وزارة التكوين والتعليم المهنيين (MFEP)
 * 3. موبيليس (ATM Mobilis)
 * 4. سوناطراك (Sonatrach)
 * 5. الوكالة الوطنية للتشغيل (ANEM)
 * 6. بريد الجزائر (Algérie Poste)
 * 7. جازي (Djezzy)
 * 8. جامعة زيان عاشور بالجلفة (Univ Djelfa)
 * 9. الخطوط الجوية الجزائرية (Air Algérie)
 * 10. نفطال (Naftal)
 * 11. الوكالة الوطنية لدعم وتنمية المقاولاتية (NESDA)
 * 12. أوريدو الجزائر (Ooredoo)
 * 13. مجمع سونلغاز (Groupe Sonelgaz)
 * 14. غرفة التجارة والصناعة (CCI Ouarsenis • الجلفة)
 */

interface Partner {
  id: string;
  name: string;
  logo: string;
  width: number;
  height: number;
}

const partners: Partner[] = [
  {
    id: "at",
    name: "اتصالات الجزائر",
    logo: "/partners/algerie_telecom.svg",
    width: 130,
    height: 40,
  },
  {
    id: "mfep",
    name: "وزارة التكوين والتعليم المهنيين",
    logo: "/partners/mfep.svg",
    width: 115,
    height: 42,
  },
  {
    id: "mobilis",
    name: "موبيليس",
    logo: "/partners/mobilis.svg",
    width: 110,
    height: 38,
  },
  {
    id: "sonatrach",
    name: "سوناطراك",
    logo: "/partners/sonatrach.svg",
    width: 115,
    height: 40,
  },
  {
    id: "anem",
    name: "الوكالة الوطنية للتشغيل",
    logo: "/partners/anem.png",
    width: 105,
    height: 38,
  },
  {
    id: "poste",
    name: "بريد الجزائر",
    logo: "/partners/algerie_poste.svg",
    width: 115,
    height: 40,
  },
  {
    id: "djezzy",
    name: "جازي",
    logo: "/partners/djezzy.svg",
    width: 100,
    height: 38,
  },
  {
    id: "univ",
    name: "جامعة زيان عاشور بالجلفة",
    logo: "/partners/univ_djelfa.png",
    width: 95,
    height: 44,
  },
  {
    id: "air_algerie",
    name: "الخطوط الجوية الجزائرية",
    logo: "/partners/air_algerie.svg",
    width: 125,
    height: 38,
  },
  {
    id: "naftal",
    name: "نفطال",
    logo: "/partners/naftal.svg",
    width: 105,
    height: 38,
  },
  {
    id: "nesda",
    name: "الوكالة الوطنية لدعم وتنمية المقاولاتية",
    logo: "/partners/nesda.png",
    width: 110,
    height: 38,
  },
  {
    id: "ooredoo",
    name: "أوريدو الجزائر",
    logo: "/partners/ooredoo.svg",
    width: 110,
    height: 36,
  },
  {
    id: "sonelgaz",
    name: "مجمع سونلغاز",
    logo: "/partners/sonelgaz.png",
    width: 105,
    height: 38,
  },
  {
    id: "caci",
    name: "غرفة التجارة والصناعة",
    logo: "/partners/caci.png",
    width: 100,
    height: 40,
  },
];

export default function PartnerLogos() {
  // Duplicate for seamless 360 infinite loop
  const marqueeList = [...partners, ...partners];

  return (
    <section className="relative bg-gradient-to-b from-[#faf8f8] via-[#ffffff] to-[#faf8f8] py-5 sm:py-7 border-y border-[#ece3e4] overflow-hidden" aria-label="شركاء المدرسة">
      
      {/* Subtle Architectural Grid Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 48 0 L 0 0 0 48' fill='none' stroke='%23741922' stroke-width='1.2'/%3E%3C/svg%3E")`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="w-full relative z-10">
        {/* Infinite Moving Marquee Track (Pure borderless floating logos only, ZERO text) */}
        <div className="relative w-full overflow-hidden py-1" dir="ltr">
          
          {/* Gradient Fade Masks on Edges for Smooth Horizon Exit/Entry */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#faf8f8] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#faf8f8] to-transparent pointer-events-none z-10" />

          {/* Marquee Container with Pausing on Hover */}
          <div className="animate-partner-marquee flex gap-10 sm:gap-14 md:gap-16 items-center">
            {marqueeList.map((p, idx) => (
              <div
                key={`${p.id}-${idx}`}
                className="shrink-0 flex items-center justify-center p-2 opacity-85 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
                title={p.name}
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={p.width}
                  height={p.height}
                  className="max-h-8 sm:max-h-9 md:max-h-10 max-w-[125px] sm:max-w-[145px] w-auto h-auto object-contain transition-transform"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
