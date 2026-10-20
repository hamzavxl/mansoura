import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const faqs = [
    {
      q: "هل شهادات مدرسة منصورة معتمدة رسمياً من طرف الدولة؟",
      a: "نعم، مدرسة منصورة مؤسسة خاصة معتمدة رسمياً من طرف وزارة التكوين والتعليم المهنيين، وتمنح شهادات دولة رسمية وشهادات تأهيل مهني معترف بها في الوظيفة العمومية والمؤسسات الاقتصادية."
    },
    {
      q: "كيف يتم تنظيم الجانب التطبيقي والمخبري في التكوين؟",
      a: "يعتمد نظامنا البيداغوجي على 70% تكوين تطبيقي مع توفير حاسوب محطة عمل فردي لكل متربص، وشاشات تفاعلية وشبكة ألياف بصرية سريعة لضمان الممارسة الفردية طيلة الحصة."
    },
    {
      q: "هل تضمن المدرسة فترات تربص ميداني للطلبة؟",
      a: "نعم، ترتبط المدرسة باتفاقيات شراكة وثيقة مع مختلف المؤسسات الاقتصادية والإدارات العمومية بولاية الجلفة لتأمين فترات التربص التطبيقي والمرافقة في إعداد مذكرات التخرج ومشاريع النهاية."
    },
    {
      q: "ما هي مواقيت الاستقبال وكيفية إتمام التسجيل؟",
      a: "تستقبل إدارة المدرسة المتربصين والأولياء من الأحد إلى الخميس من الساعة 08:30 صباحاً حتى 16:30 مساءً بمقرنا بمركز الأعمال حي 05 جويلية بالجلفة، أو عبر الهاتف المباشر 0557 56 44 04."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#faf8f8] overflow-hidden">
      
      {/* Global Architectural Square Grid Pattern for Entire /about Page (مثل الصفحة الرئيسية) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.14]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 48 0 L 0 0 0 48' fill='none' stroke='%23741922' stroke-width='1.2'/%3E%3C/svg%3E")`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Main Page Content */}
      <div className="w-[92%] max-w-[1200px] mx-auto py-8 sm:py-12 space-y-12 pb-16 relative z-10">
        
        {/* 1. Red Institutional Hero Header with Architectural Square Grid Pattern */}
        <div className="bg-gradient-to-br from-[#741922] via-[#59131a] to-[#3a080d] border-2 border-[#8e242f] rounded-3xl p-6 sm:p-10 shadow-xl text-white relative overflow-hidden">
          {/* Architectural Square Grid Lines inside Hero (Same as Home Hero) */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-90"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
              backgroundSize: '3rem 3rem'
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-4 text-right">
              <div className="inline-flex items-center gap-2 text-[#fde047] text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-[#fde047]" />
                <span>مؤسسة معتمدة بولاية الجلفة</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                عن مدرسة منصورة للتكوين والتعليم بالجلفة
              </h1>

              <p className="text-sm sm:text-base text-[#fce7eb]/90 leading-relaxed max-w-2xl">
                تأسست مدرسة منصورة بمدينة الجلفة لتوفير تكوين مهني وتطبيقي يواكب متطلبات سوق العمل. نعتمد على التأطير الميداني، التجهيزات الفردية داخل المخابر، والشهادات المعتمدة رسمياً من طرف الدولة برعاية وإشراف مستمر.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-bold text-white/95">
                <span className="px-3 py-1 rounded-xl bg-white/10 border border-white/15">
                  اعتماد وزاري رسمي
                </span>
                <span className="px-3 py-1 rounded-xl bg-white/10 border border-white/15">
                  حي 05 جويلية • الجلفة
                </span>
                <span className="px-3 py-1 rounded-xl bg-white/10 border border-white/15">
                  شهادات دولة وتأهيل مهني
                </span>
              </div>
            </div>

            {/* Large Square Showcase Frame: Hijabi Speaker (9.webp) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[400px] h-[340px] sm:h-[390px] rounded-3xl bg-gradient-to-b from-[#8f212c] via-[#5c131b] to-[#200508] border-2 border-[#b38a38]/80 shadow-[0_20px_45px_rgba(0,0,0,0.6)] overflow-hidden flex items-end justify-center group p-2">
                
                {/* Subtle Architectural Square Grid */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.14]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 32 0 L 0 0 0 32' fill='none' stroke='%23facc15' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '32px 32px'
                  }}
                />

                {/* Ambient Radial Illumination */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.2)_0%,transparent_65%)] pointer-events-none" />

                {/* Big Prominent Image */}
                <Image
                  src="/images/9.webp"
                  alt="كلمة الإدارة والتأطير الأكاديمي — مدرسة منصورة للتكوين والتعليم بالجلفة"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain object-bottom scale-110 sm:scale-115 drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)] relative z-10"
                  priority
                />

                {/* Floating Pill Tag at the bottom right */}
                <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/75 border border-[#b38a38]/70 shadow-lg backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#fde047]" />
                  <span className="text-[11px] font-bold text-white">التأطير والإشراف التربوي</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Institutional Identity & Leadership Grid with Large Square Directress Showcase (8.webp) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Institutional Logo + Directress Card with Large Square Frame */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Official Institution Logo Card */}
            <div className="bg-white border-2 border-[#ece3e4] rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-xs">
              <div className="w-full max-w-[260px] mx-auto py-3 px-4 rounded-2xl bg-[#faf8f8] border border-[#ece3e4] flex items-center justify-center">
                <Image
                  src="/images/1.webp"
                  alt="شعار مدرسة منصورة للتكوين والتعليم بالجلفة"
                  width={240}
                  height={80}
                  className="object-contain max-h-[70px] w-auto"
                  priority
                />
              </div>
              <div className="space-y-1 text-center">
                <h3 className="text-lg font-black text-[#111827]">
                  مدرسة منصورة للتكوين والتعليم
                </h3>
                <p className="text-xs text-[#741922] font-bold">
                  مؤسسة خاصة معتمدة من وزارة التكوين والتعليم المهنيين
                </p>
                <p className="text-xs text-[#6b7280]">
                  حي 05 جويلية، مركز الأعمال، الجلفة 17001
                </p>
              </div>
            </div>

            {/* Directress Leadership Card with Large Square Frame */}
            <div className="bg-gradient-to-b from-[#741922] via-[#5c131b] to-[#420a0f] rounded-3xl p-6 sm:p-7 text-white text-center space-y-5 shadow-xl border-2 border-[#8e242f] relative overflow-hidden flex flex-col items-center">
              
              {/* Architectural Square Grid Lines */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.14]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 32 0 L 0 0 0 32' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
                  backgroundSize: '32px 32px'
                }}
              />

              {/* Ambient Radial Illumination */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.14)_0%,transparent_65%)] pointer-events-none" />

              {/* Large Square Portrait Showcase */}
              <div className="relative w-full max-w-[340px] h-[370px] sm:h-[410px] rounded-3xl bg-gradient-to-b from-[#8f212c] via-[#5c131b] to-[#200508] border-2 border-[#b38a38]/80 shadow-[0_20px_45px_rgba(0,0,0,0.6)] overflow-hidden flex items-end justify-center p-2 group">
                
                {/* Architectural Square Grid */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.14]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 32 0 L 0 0 0 32' fill='none' stroke='%23facc15' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '32px 32px'
                  }}
                />

                {/* Ambient Radial Spotlight */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.22)_0%,transparent_65%)] pointer-events-none" />

                {/* Big High-Res Directress Cutout (8.webp) */}
                <Image
                  src="/images/8.webp"
                  alt="المديرة العامة أ. نوال عيساوي — مدرسة منصورة للتكوين والتعليم بالجلفة"
                  width={400}
                  height={500}
                  className="w-full h-full object-contain object-bottom scale-110 sm:scale-115 drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)] relative z-10"
                  priority
                />
              </div>

              {/* Balanced Official Credential Plaque */}
              <div className="w-full p-4 rounded-2xl bg-black/35 border border-white/10 backdrop-blur-xs text-center space-y-1 relative z-20 shadow-sm">
                <div className="inline-block px-3 py-0.5 rounded-full bg-white/10 text-[#fde047] text-[11px] font-bold border border-white/15 mb-1">
                  الإدارة العامة والتسيير
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  أ. نوال عيساوي
                </h3>
                <p className="text-xs sm:text-sm text-[#fde047] font-semibold">
                  المديرة العامة لمدرسة منصورة للتكوين والتعليم
                </p>
                <p className="text-xs text-[#fce7eb]/80 pt-0.5">
                  استقبال وتوجيه يومي للطلبة والأولياء بمقر المؤسسة
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Pillars, Facility & Contact Information */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white border-2 border-[#ece3e4] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#741922] uppercase tracking-wider">الاعتماد والبيئة التعليمية</div>
                <h2 className="text-xl sm:text-2xl font-black text-[#111827]">
                  معايير التكوين وظروف الاستقبال
                </h2>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  يقع مقر المدرسة في موقع مركزي بمركز الأعمال حي 05 جويلية بالجلفة، مجهز بقاعات تدريس ومخابر إعلام آلي تضمن محطة عمل مستقلة لكل متربص طيلة فترة التكوين.
                </p>
              </div>

              <div className="space-y-4 text-sm pt-2 border-t border-[#ece3e4]">
                
                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#fdf2f4] text-[#741922] flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <strong className="text-[#111827] block text-xs sm:text-sm">المقر الرسمي:</strong>
                    <span className="text-xs sm:text-sm text-[#4b5563]">حي 05 جويلية، مركز الأعمال، رقم 13/14 (محلات أسواق سابقاً)، الجلفة 17001، الجزائر.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#fdf2f4] text-[#741922] flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="text-[#111827] block text-xs sm:text-sm">الهاتف المباشر والواتساب:</strong>
                    <a href="tel:0557564404" className="text-[#741922] font-mono font-bold hover:underline">
                      0557 56 44 04
                    </a>
                    <span className="text-xs text-[#6b7280] font-mono mr-2" dir="ltr">(+213 557 56 44 04)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#fdf2f4] text-[#741922] flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <div>
                    <strong className="text-[#111827] block text-xs sm:text-sm">البريد الإلكتروني:</strong>
                    <a href="mailto:mansouraschooldjelfa3@gmail.com" className="text-[#741922] font-mono hover:underline text-xs">
                      mansouraschooldjelfa3@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#fdf2f4] text-[#741922] flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <div>
                    <strong className="text-[#111827] block text-xs sm:text-sm">أوقات العمل والاستقبال:</strong>
                    <span className="text-xs sm:text-sm text-[#4b5563]">الأحد إلى الخميس: من 08:30 صباحاً حتى 16:30 مساءً.</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick CTA to Contacts or Home */}
            <div className="bg-[#faf8f8] border border-[#ece3e4] rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-[#111827]">هل ترغب في التسجيل أو الاستفسار؟</div>
                <div className="text-xs text-[#6b7280]">فريق الاستقبال مستعد لتوجيهك نحو التخصص الأنسب لمسارك.</div>
              </div>
              <Link
                href="/#contact"
                className="px-5 py-2.5 rounded-xl bg-[#741922] hover:bg-[#5a131a] text-white text-xs font-bold transition-all shadow-xs"
              >
                تواصل معنا أو زر المقر
              </Link>
            </div>

          </div>

        </div>

        {/* 3. Djezzy Student Partnership Showcase Banner (10.webp) */}
        <section className="bg-gradient-to-br from-[#741922] via-[#59131a] to-[#3a080d] border-2 border-[#8e242f] rounded-3xl p-6 sm:p-10 shadow-xl text-white relative overflow-hidden">
          {/* Subtle Architectural Square Grid */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.09]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 32 0 L 0 0 0 32' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
              backgroundSize: '32px 32px'
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left/Graphic Column: Djezzy Student Campuce Visual (10.webp) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[340px] h-[300px] sm:h-[340px] rounded-3xl bg-gradient-to-b from-[#8f212c] via-[#5c131b] to-[#200508] border-2 border-[#b38a38]/80 shadow-[0_20px_45px_rgba(0,0,0,0.6)] overflow-hidden flex items-center justify-center p-4 group">
                
                {/* Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.22)_0%,transparent_65%)] pointer-events-none" />

                <Image
                  src="/images/10.webp"
                  alt="عرض وشراكة جازي للطلبة والمتربصين — مدرسة منصورة Djezzy Student Campuce"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] relative z-10"
                />

                {/* Floating Partnership Badge */}
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e11d48]/90 text-white text-[11px] font-black border border-white/20 shadow-md">
                  <span>شراكة حصرية للطلبة</span>
                </div>
              </div>
            </div>

            {/* Right/Text Column: Djezzy Student Offer Details */}
            <div className="lg:col-span-7 space-y-4 text-right">
              <div className="inline-flex items-center gap-2 text-[#fde047] text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-[#fde047]" />
                <span>شراكة رسمية مع متعامل الهاتف النقال جازي (Djezzy)</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                عرض خاص واستثنائي <span className="text-[#fde047]">لطلبة ومتربصي مدرسة منصورة</span>
              </h2>

              <p className="text-sm sm:text-base text-[#fce7eb]/90 leading-relaxed max-w-2xl">
                في إطار الشراكة الميدانية بين مدرسة منصورة للتكوين والتعليم وشركة <strong className="text-white font-bold">جازي (Djezzy)</strong>، يستفيد جميع المتربصين والطلبة المسجلين رسمياً من مزايا برنامج <strong className="text-[#fde047]">Student Campuce</strong>، بما في ذلك شريحة طالب مجانية وباقات إنترنت ومكالمات بأسعار مخفضة لمرافقتهم في مسارهم التكويني والبحثي.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-bold">
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fde047] shrink-0" />
                  <span>شريحة مجانية مخصصة للطلبة (SIM Student)</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fde047] shrink-0" />
                  <span>رصيد إنترنت ترحيبي 5GB مجاناً عند التفعيل</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fde047] shrink-0" />
                  <span>تخفيضات تصل إلى 20% على باقات الإنترنت الشهرية</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fde047] shrink-0" />
                  <span>مكالمات ورسائل مجانية لتسهيل التواصل والتربص</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="tel:0557564404"
                  className="px-6 py-2.5 rounded-xl bg-[#fde047] hover:bg-[#facc15] text-[#741922] font-black text-xs transition-colors shadow-lg"
                >
                  استفسر لدى مكتب الاستقبال بالمدرسة
                </a>
                <span className="text-xs text-[#fce7eb]/70">
                  تقديم بطاقة الطالب أو شهادة التسجيل المدرسية بمقرنا بالجلفة
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* 4. Official Recognitions & Field Accreditations Showcase */}
        <section className="space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-[#741922] text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#741922]" />
              شهادات وتكريمات رسمية معتمدة
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827]">
              محطات التكريم والاعتماد الميداني
            </h2>
            <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
              مشاهد توثق لحظات تسليم الشهادات المعتمدة، تكريم الكفاءات التربوية، وتتويج المتربصين برعاية الإدارة العامة لمدرسة منصورة.
            </p>
          </div>

          {/* 4.1 Grand Showcase Banner: Graduates Ceremony (4.webp) */}
          <div className="bg-gradient-to-br from-[#4e0f16] via-[#741922] to-[#2d050a] rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white shadow-xl border-2 border-[#8e242f] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center overflow-hidden relative">
            <div className="lg:col-span-5 space-y-4 text-right order-2 lg:order-1 relative z-20">
              <div className="inline-flex items-center gap-2 text-[#fde047] text-xs font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fde047]" />
                <span>تتويج الدفعات المتخرجة</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-white leading-tight">
                  تتويج فوج الخريجين بشهادات الدولة الرسمية
                </h3>
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
            </div>

            <div className="lg:col-span-7 flex items-center justify-center order-1 lg:order-2 relative z-10">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border-2 border-[#facc15]/80 bg-gradient-to-b from-[#2a060a] via-[#1a0305] to-[#0d0102] shadow-2xl p-2 flex items-center justify-center">
                {/* Architectural Grid Lines (خلفية مخططة) */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.16]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 24 0 L 0 0 0 24' fill='none' stroke='%23facc15' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '24px 24px'
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.18)_0%,transparent_65%)] pointer-events-none" />
                <Image
                  src="/images/4.webp"
                  alt="تتويج فوج الخريجين بشهادات الدولة وميداليات التميز — مدرسة منصورة للتكوين والتعليم بالجلفة"
                  width={680}
                  height={420}
                  className="w-full h-full object-contain object-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* 4.2 Triad of Verified Official Recognition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* Card 1: Official Award from Directorate of Education (5.webp) */}
            <div className="bg-gradient-to-br from-[#741922] via-[#59131a] to-[#3a080d] rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white shadow-xl border-2 border-[#8e242f] flex flex-col justify-between space-y-4 relative overflow-hidden group">
              <div className="flex items-center justify-between gap-2 z-20">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white shadow-md border border-white/20">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#fde047">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-[11px] font-black">وسام الاستحقاق والتكريم</span>
                </div>
                <span className="text-[10px] font-bold text-[#fde047] bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                  2025
                </span>
              </div>

              <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#b38a38]/80 bg-gradient-to-b from-[#2a060a] via-[#1a0305] to-[#0d0102] shadow-xl p-2 flex items-center justify-center group-hover:border-[#facc15] transition-colors">
                {/* Architectural Grid Lines (خلفية مخططة) */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.16]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 24 0 L 0 0 0 24' fill='none' stroke='%23facc15' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '24px 24px'
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.18)_0%,transparent_65%)] pointer-events-none" />
                <Image
                  src="/images/5.webp"
                  alt="تكريم الأستاذة بن ناصر فاطمة بشهادة تقدير من مديرية التربية لولاية الجلفة بحضور المديرة العامة أ. نوال عيساوي"
                  width={420}
                  height={320}
                  className="w-full h-full object-contain object-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

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

            {/* Card 2: Handing Official State Certificate to Graduate (6.webp) */}
            <div className="bg-gradient-to-br from-[#741922] via-[#59131a] to-[#3a080d] rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white shadow-xl border-2 border-[#8e242f] flex flex-col justify-between space-y-4 relative overflow-hidden group">
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

              <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#b38a38]/80 bg-gradient-to-b from-[#2a060a] via-[#1a0305] to-[#0d0102] shadow-xl p-2 flex items-center justify-center group-hover:border-[#facc15] transition-colors">
                {/* Architectural Grid Lines (خلفية مخططة) */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.16]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 24 0 L 0 0 0 24' fill='none' stroke='%23facc15' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '24px 24px'
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.18)_0%,transparent_65%)] pointer-events-none" />
                <Image
                  src="/images/6.webp"
                  alt="المديرة العامة أ. نوال عيساوي تسلم شهادة التخرج الرسمية لمتربص"
                  width={420}
                  height={320}
                  className="w-full h-full object-contain object-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

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

            {/* Card 3: Graduation Ceremony Class 2025 (7.webp) */}
            <div className="bg-gradient-to-br from-[#741922] via-[#59131a] to-[#3a080d] rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white shadow-xl border-2 border-[#8e242f] flex flex-col justify-between space-y-4 relative overflow-hidden group">
              <div className="flex items-center justify-between gap-2 z-20">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white shadow-md border border-white/20">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#fde047">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-[11px] font-bold text-white">دفعة التميز 2025</span>
                </div>
                <span className="text-[10px] font-bold text-[#fde047] bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                  احتفال التخرج
                </span>
              </div>

              <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#b38a38]/80 bg-gradient-to-b from-[#2a060a] via-[#1a0305] to-[#0d0102] shadow-xl p-2 flex items-center justify-center group-hover:border-[#facc15] transition-colors">
                {/* Architectural Grid Lines (خلفية مخططة) */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.16]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 24 0 L 0 0 0 24' fill='none' stroke='%23facc15' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '24px 24px'
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.18)_0%,transparent_65%)] pointer-events-none" />
                <Image
                  src="/images/7.webp"
                  alt="الاحتفال الرسمي بتخرج دفعة 2025 وتتويج المتربصين — مدرسة منصورة للتكوين والتعليم"
                  width={420}
                  height={320}
                  className="w-full h-full object-contain object-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="space-y-1.5 text-right relative z-20">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[#fde047] text-[10px] font-bold border border-white/15">
                  حفل رسمي • ولاية الجلفة
                </span>
                <h4 className="text-base sm:text-lg font-black text-white leading-tight">
                  الاحتفال بتخرج دفعات التكوين المهني
                </h4>
                <p className="text-xs text-[#fce7eb]/80 leading-relaxed">
                  تتويج المتربصين الناجحين في مختلف التخصصات بحضور الأساتذة والشركاء الاقتصاديين.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 5. FAQ Section */}
        <section className="space-y-6 max-w-3xl mx-auto pt-4">
          <div className="text-center space-y-2">
            <div className="text-xs font-bold text-[#741922] uppercase tracking-wider">الأسئلة الشائعة</div>
            <h2 className="text-2xl font-black text-[#111827]">استفسارات حول المؤسسة والتكوين</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#ece3e4] rounded-2xl p-5 space-y-2 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-[#741922] flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed pr-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
