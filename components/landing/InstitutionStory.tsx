"use client";

import Image from "next/image";

export default function InstitutionStory() {
  const pillars = [
    {
      num: "01",
      title: "أصالة التأسيس والاعتماد الرسمي",
      desc: "تأسست مدرسة منصورة لتكون صرحاً تكوينياً رائداً بقلب ولاية الجلفة، معتمدة من طرف وزارة التكوين والتعليم المهنيين، وتعمل وفق المعايير البيداغوجية المعتمدة وطنياً.",
      tag: "اعتماد وزاري",
    },
    {
      num: "02",
      title: "تجهيزات ومخابر للتطبيق الفردي",
      desc: "نحرص على توفير محطة عمل وحاسوب مستقل لكل متربص، مع قاعات مكيفة وشاشات تفاعلية، لإتاحة ممارسة عملية متواصلة طيلة فترة التربص.",
      tag: "تجهيز تطبيقي",
    },
    {
      num: "03",
      title: "مرافقة للتربص الميداني",
      desc: "ترتبط المدرسة بعلاقات تعاون مع مؤسسات اقتصادية وإدارية بالجلفة لتأمين فترات التربص التطبيقي ومساعدة المتربصين في مشاريع التخرج.",
      tag: "مرافقة مهنية",
    },
  ];

  return (
    <section id="institution-pillars" className="py-12 sm:py-20 bg-[#faf8f8] relative overflow-hidden border-b border-[#ece3e4]">
      
      {/* Clean Architectural Square Grid Lines (خطوط مربعات هندسية واضحة وأنيقة) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 48 0 L 0 0 0 48' fill='none' stroke='%23741922' stroke-width='1.2'/%3E%3C/svg%3E")`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="w-[92%] max-w-[1240px] mx-auto space-y-12 sm:space-y-16 relative z-10">
        
        {/* 1. Section Header: Pillars */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 text-[#741922] text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#741922]" />
            <span>عن المؤسسة وركائز التكوين</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827]">
            مسار التكوين والتعليم في <span className="text-[#741922]">ولاية الجلفة</span>
          </h2>

          <p className="text-xs sm:text-base text-[#4b5563] leading-relaxed">
            منذ انطلاقها في حي 05 جويلية بمدينة الجلفة، تركز مدرسة منصورة على التكوين التطبيقي الذي يمنح المتربص مهارات جاهزة للاستخدام في الميدان المهني.
          </p>
        </div>

        {/* 2. Three Main Pillars Cards (تضم التباعد على الهاتف) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-white border-2 border-[#ece3e4] rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between space-y-4 sm:space-y-6 shadow-xs hover:border-[#741922]/30 transition-all"
            >
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-black font-mono text-[#741922]">
                    {pillar.num}
                  </span>
                  <span className="text-[11px] font-bold text-[#741922] bg-[#fdf2f4] border border-[#f2c7cc] px-2.5 py-0.5 rounded-full">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#111827]">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-2.5 border-t border-[#ece3e4] text-[11px] font-bold text-[#6b7280]">
                مدرسة منصورة — الجلفة
              </div>
            </div>
          ))}
        </div>

        {/* 3. High-Impact Documentation & Field Accreditations Showcase (قسم التوثيقات والاعتماد الميداني) */}
        <div className="space-y-8 pt-2">
          
          {/* Documentation Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 border-b border-[#ece3e4] pb-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-[#741922] text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-[#741922]" />
                <span>سجل التوثيق والاعتماد الميداني • ولاية الجلفة</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-[#111827]">
                شواهد التميز والتتويج الرسمي بالشهادات
              </h3>
              <p className="text-xs sm:text-sm text-[#4b5563] max-w-2xl leading-relaxed">
                مشاهد توثق تسليم شهادات التخرج، تكريمات مديرية التربية لولاية الجلفة، وتتويج المتربصين بشهادات الدولة.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-xl bg-white border border-[#ece3e4] text-xs font-bold text-[#741922] shadow-xs">
                مقر المدرسة • حي 05 جويلية
              </span>
            </div>
          </div>

          {/* 3.1 بطاقة التتويج الكبرى: تكريم فوج الخريجين بشهادات الدولة الرسمية والميداليات الشرفية */}
          <div className="bg-gradient-to-br from-[#4e0f16] via-[#741922] to-[#2d050a] rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white shadow-xl border-2 border-[#8e242f] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center overflow-hidden relative">
            
            {/* Context & Description */}
            <div className="lg:col-span-5 space-y-4 text-right order-2 lg:order-1 relative z-20">
              <div className="inline-flex items-center gap-2 text-[#fde047] text-xs font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fde047]" />
                <span>تتويج الدفعات المتخرجة</span>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg sm:text-2xl lg:text-3xl font-black text-white leading-tight">
                  تتويج فوج الخريجين بشهادات الدولة الرسمية
                </h4>
                <p className="text-xs sm:text-sm text-[#fce7eb]/90 leading-relaxed">
                  تتويج كوكبة من متربصي مدرسة منصورة بالجلفة بشهادات الدولة المعتمدة وميداليات الاستحقاق بعد استكمال التكوين والامتحانات بنجاح.
                </p>
              </div>

              <div className="space-y-1.5 text-xs font-bold text-white/95">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fde047]" />
                  <span>شهادات مطابقة لمعايير وزارة التكوين والتعليم المهنيين</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fde047]" />
                  <span>ميداليات التميز لأوائل الدفعات في التخصصات التطبيقية</span>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#fce7eb] text-[#741922] font-black text-xs sm:text-sm transition-all shadow-sm"
                >
                  <span>زيارة مقر المؤسسة والتسجيل</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Structured Luxury Photo Frame with Defined Edges */}
            <div className="lg:col-span-7 flex items-center justify-center order-1 lg:order-2 relative z-10">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border-2 border-[#facc15]/80 bg-gradient-to-b from-black/60 to-[#1e0306] shadow-2xl p-2 flex items-center justify-center group/stage">
                <Image
                  src="/images/4.webp"
                  alt="تتويج خريجي مدرسة منصورة للتكوين والتعليم بالجلفة بالشهادات والميداليات الرسمية"
                  width={640}
                  height={420}
                  priority
                  className="w-full h-full object-contain object-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] group-hover/stage:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 right-2.5 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#741922]/90 border border-[#facc15]/60 text-white text-[11px] font-bold shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] animate-pulse" />
                  <span>فوج خريجي مدرسة منصورة</span>
                </div>
              </div>
            </div>

          </div>

          {/* 3.2 بطاقات التوثيق الميداني الثلاث للأنشطة والاعتمادات الرسمية بالمؤسسة */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch pt-2">
            
            {/* بطاقة توثيق 1: وسام التكريم والتقدير الرسمي من مديرية التربية لولاية الجلفة */}
            <div className="bg-gradient-to-br from-[#741922] via-[#59131a] to-[#3a080d] rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white shadow-xl border-2 border-[#8e242f] flex flex-col justify-between space-y-4 relative overflow-hidden group">
              
              {/* Prestigious Badge */}
              <div className="flex items-center justify-between gap-2 z-20">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#b45309] to-[#d97706] text-white shadow-md border border-[#fde047]/60">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#fde047">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-[11px] font-black">وسام الاستحقاق والتكريم</span>
                </div>
                <span className="text-[10px] font-bold text-[#fde047] bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                  2025
                </span>
              </div>

              {/* Crisp Defined Frame with Clear Golden Border */}
              <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#b38a38]/80 bg-gradient-to-b from-black/70 to-[#1e0306] shadow-xl p-2 flex items-center justify-center group-hover:border-[#facc15] transition-colors">
                <Image
                  src="/images/5.webp"
                  alt="تكريم الأستاذة بن ناصر فاطمة بشهادة تقدير من مديرية التربية لولاية الجلفة بحضور المديرة العامة أ. نوال عيساوي"
                  width={420}
                  height={320}
                  className="w-full h-full object-contain object-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Concise Text */}
              <div className="space-y-1.5 text-right relative z-20">
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[#fde047] text-[10px] font-bold border border-white/15">
                  مديرية التربية • ولاية الجلفة
                </div>
                <h4 className="text-base sm:text-lg font-black text-white leading-tight">
                  تكريم رسمي للأستاذة بن ناصر فاطمة
                </h4>
                <p className="text-xs text-[#fce7eb]/80 leading-relaxed">
                  شهادة تقدير وتكريم رسمي تقديراً للجهود التربوية المتميزة بحضور المديرة العامة.
                </p>
              </div>

            </div>

            {/* بطاقة توثيق 2: تسليم شهادات التخرج والتأهيل المهني المعتمدة برعاية المديرة العامة */}
            <div className="bg-gradient-to-br from-[#741922] via-[#59131a] to-[#3a080d] rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white shadow-xl border-2 border-[#8e242f] flex flex-col justify-between space-y-4 relative overflow-hidden group">
              
              {/* Official Certificate Badge */}
              <div className="flex items-center justify-between gap-2 z-20">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white shadow-md border border-white/20">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fde047" strokeWidth="2.2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span className="text-[11px] font-bold text-white">شهادة دولة معتمدة</span>
                </div>
                <span className="text-[10px] font-bold text-[#fde047] bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                  تأهيل رسمي
                </span>
              </div>

              {/* Crisp Defined Frame with Clear Golden Border */}
              <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#b38a38]/80 bg-gradient-to-b from-black/70 to-[#1e0306] shadow-xl p-2 flex items-center justify-center group-hover:border-[#facc15] transition-colors">
                <Image
                  src="/images/6.webp"
                  alt="المديرة العامة أ. نوال عيساوي تسلم شهادة التخرج الرسمية لمتربص"
                  width={420}
                  height={320}
                  className="w-full h-full object-contain object-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Concise Text */}
              <div className="space-y-1.5 text-right relative z-20">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[#fde047] text-[10px] font-bold border border-white/15">
                  مدرسة منصورة • إشراف ميداني
                </span>
                <h4 className="text-base sm:text-lg font-black text-white leading-tight">
                  تسليم شهادات التخرج والتأهيل المهني
                </h4>
                <p className="text-xs text-[#fce7eb]/80 leading-relaxed">
                  إشراف مباشر من المديرة العامة على تسليم شهادات التأهيل للمتربصين بعد اجتياز الامتحانات.
                </p>
              </div>

            </div>

            {/* بطاقة توثيق 3: الاحتفال الرسمي بتخرج دفعة 2025 وتتويج المتربصين */}
            <div className="bg-gradient-to-br from-[#741922] via-[#59131a] to-[#3a080d] rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white shadow-xl border-2 border-[#8e242f] flex flex-col justify-between space-y-4 relative overflow-hidden group">
              
              {/* Batch Year Badge */}
              <div className="flex items-center justify-between gap-2 z-20">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white shadow-md border border-white/20">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#fde047">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-[11px] font-bold text-white">دفعة التميز 2025</span>
                </div>
                <span className="text-[10px] font-bold text-[#fde047] bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                  حفل التخرج
                </span>
              </div>

              {/* Crisp Defined Frame with Clear Golden Border */}
              <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#b38a38]/80 bg-gradient-to-b from-black/70 to-[#1e0306] shadow-xl p-2 flex items-center justify-center group-hover:border-[#facc15] transition-colors">
                <Image
                  src="/images/7.webp"
                  alt="الاحتفال بتخرج دفعة 2025 بمدرسة منصورة بالجلفة"
                  width={420}
                  height={320}
                  className="w-full h-full object-contain object-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Concise Text */}
              <div className="space-y-1.5 text-right relative z-20">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[#fde047] text-[10px] font-bold border border-white/15">
                  احتفاء رسمي • دفعة 2025
                </span>
                <h4 className="text-base sm:text-lg font-black text-white leading-tight">
                  فرحة تخرج وتتويج دفعة 2025
                </h4>
                <p className="text-xs text-[#fce7eb]/80 leading-relaxed">
                  احتفاء بهيج بكعكة التخرج الرسمية وتتويج المتربصين المتفوقين في التخصصات المختلفة.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
