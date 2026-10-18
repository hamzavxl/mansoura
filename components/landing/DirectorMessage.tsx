"use client";

import Image from "next/image";

export default function DirectorMessage() {
  const commitments = [
    {
      num: "01",
      title: "التأطير والمرافقة اليومية",
      desc: "حضور يومي لإدارة المؤسسة بحي 05 جويلية للإشراف البيداغوجي واستقبال الطلبة والأولياء وتوجيههم.",
    },
    {
      num: "02",
      title: "التركيز على الجانب التطبيقي",
      desc: "توفير محطة عمل فردية لكل متربص داخل قاعات ومخابر الإعلام الآلي لضمان الاستيعاب العملي للتقنيات.",
    },
    {
      num: "03",
      title: "شهادات معتمدة رسمياً",
      desc: "تكوين مطابق لمعايير وزارة التكوين والتعليم المهنيين، يؤهل الخريجين للاندماج في سوق العمل والوظيفة العمومية.",
    },
  ];

  return (
    <section id="leadership" className="py-16 sm:py-24 bg-[#faf8f8] relative overflow-hidden border-b border-[#ece3e4]">
      
      {/* Clean Architectural Square Grid Lines (خطوط مربعات هندسية واضحة وأنيقة) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 48 0 L 0 0 0 48' fill='none' stroke='%23741922' stroke-width='1.2'/%3E%3C/svg%3E")`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-[#741922] text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#741922]" />
            <span>عن المؤسسة والتأطير البيداغوجي</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827]">
            من نحن: التميز، الالتزام، <span className="text-[#741922]">والقيادة التربوية الميدانية</span>
          </h2>

          <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
            مدرسة منصورة للتكوين والتعليم بالجلفة هي صرح تكويني خاص معتمد رسمياً من طرف الدولة، تقوده إدارة وهيئة تدريس تحرص على توفير بيئة تعليمية تجمع بين الانضباط والتحصيل التطبيقي الفعلي.
          </p>
        </div>

        {/* 1. Directress Executive Profile */}
        <div className="bg-white rounded-3xl border-2 border-[#ece3e4] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Portrait Column: Balanced Institutional Profile */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#741922] via-[#5c131b] to-[#420a0f] p-6 sm:p-8 flex flex-col justify-between items-center text-white relative overflow-hidden h-full">
            
            {/* Subtle Architectural Grid Lines */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 32 0 L 0 0 0 32' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
                backgroundSize: '32px 32px'
              }}
            />

            {/* Ambient Radial Illumination */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.14)_0%,transparent_65%)] pointer-events-none" />

            {/* 3D Pop-Out Circular Avatar Showcase */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[380px] sm:h-[440px] flex items-end justify-center my-auto">
              
              {/* Outer Golden Ambient Glow */}
              <div className="absolute bottom-2 w-[280px] sm:w-[330px] h-[280px] sm:h-[330px] rounded-full bg-[#b38a38]/25 blur-3xl pointer-events-none" />

              {/* Decorative Concentric Ring */}
              <div className="absolute bottom-0 w-[300px] sm:w-[354px] h-[300px] sm:h-[354px] rounded-full border border-[#facc15]/30 pointer-events-none animate-pulse" />

              {/* 1. Circular Backdrop Frame with Gold Border */}
              <div className="absolute bottom-2 w-[280px] sm:w-[330px] h-[280px] sm:h-[330px] rounded-full bg-gradient-to-b from-[#8f212c] via-[#5c131b] to-[#200508] border-4 border-[#b38a38] shadow-[0_25px_50px_rgba(0,0,0,0.65)] overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 24 0 L 0 0 0 24' fill='none' stroke='%23facc15' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '24px 24px'
                  }}
                />
                <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#fde047]/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* 2. Directress 3D Pop-Out: Bounded circularly at the bottom, head proudly popping out over top rim */}
              <div className="absolute bottom-2 w-[280px] sm:w-[330px] h-[370px] sm:h-[430px] rounded-b-full overflow-hidden flex items-end justify-center z-10 pointer-events-none">
                <Image
                  src="/images/2.webp"
                  alt="المديرة العامة أ. نوال عيساوي — مدرسة منصورة للتكوين والتعليم بالجلفة"
                  width={420}
                  height={500}
                  className="w-[270px] sm:w-[320px] h-auto object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)]"
                  priority
                />
              </div>
            </div>

            {/* Balanced Official Credential Plaque */}
            <div className="w-full mt-4 p-4 rounded-2xl bg-black/25 border border-white/10 backdrop-blur-xs text-center space-y-1 relative z-20 shadow-sm">
              <h3 className="text-lg sm:text-xl font-black text-white">
                أ. نوال عيساوي
              </h3>
              <p className="text-xs sm:text-sm text-[#fde047] font-semibold">
                المديرة العامة لمدرسة منصورة للتكوين والتعليم
              </p>
              <p className="text-xs text-[#fce7eb]/80 pt-0.5">
                حي 05 جويلية، مركز الأعمال، الجلفة
              </p>
            </div>
          </div>

          {/* Statement & Commitments Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 text-right bg-gradient-to-br from-white via-[#fdfbfb] to-[#faf5f6] flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="text-xs font-bold text-[#741922] uppercase tracking-wider">
                كلمة إدارة المؤسسة
              </div>

              <div className="relative pr-4 border-r-4 border-[#741922]">
                <h3 className="text-xl sm:text-2xl font-black text-[#111827] leading-snug">
                  «هدفنا تكوين كفاءات قادرة على الاندماج المباشر في الميدان المهني»
                </h3>
              </div>

              <p className="text-sm text-[#4b5563] leading-relaxed pt-1">
                نحرص داخل مدرسة منصورة على المتابعة الدائمة لجميع الدورات التكوينية، وتوفير كل ما يحتاجه المتربص من تجهيزات ومرافقة مستمرة لإتمام مساره الدراسي والتطبيقي في أحسن الظروف.
              </p>
            </div>

            {/* Commitments List */}
            <div className="space-y-3 pt-2">
              {commitments.map((c) => (
                <div key={c.num} className="p-4 rounded-2xl bg-[#fdf2f4]/70 border border-[#f2c7cc] border-r-4 border-r-[#741922] flex items-start gap-4 hover:bg-[#fdeef0] hover:border-[#741922]/40 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-[#741922] text-white font-mono font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    {c.num}
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="text-sm font-black text-[#111827]">
                      {c.title}
                    </h4>
                    <p className="text-xs text-[#4b5563] leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-[#6b7280]">
              <span>مدرسة منصورة للتكوين والتعليم</span>
              <span className="font-bold text-[#741922]">الجلفة 17001</span>
            </div>
          </div>

        </div>

        {/* 2. Faculty / Professor Profile */}
        <div className="bg-white rounded-3xl border-2 border-[#ece3e4] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Portrait Column: Balanced Institutional Profile */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#1e293b] via-[#151f30] to-[#0b1120] p-6 sm:p-8 flex flex-col justify-between items-center text-white order-1 lg:order-2 relative overflow-hidden h-full">
            
            {/* Subtle Architectural Grid Lines */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 32 0 L 0 0 0 32' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
                backgroundSize: '32px 32px'
              }}
            />

            {/* Ambient Radial Illumination */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.12)_0%,transparent_65%)] pointer-events-none" />

            {/* 3D Pop-Out Circular Avatar Showcase */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[380px] sm:h-[440px] flex items-end justify-center my-auto">
              
              {/* Outer Cyan/Blue Ambient Glow */}
              <div className="absolute bottom-2 w-[280px] sm:w-[330px] h-[280px] sm:h-[330px] rounded-full bg-[#38bdf8]/20 blur-3xl pointer-events-none" />

              {/* Decorative Concentric Ring */}
              <div className="absolute bottom-0 w-[300px] sm:w-[354px] h-[300px] sm:h-[354px] rounded-full border border-[#38bdf8]/30 pointer-events-none animate-pulse" />

              {/* 1. Circular Backdrop Frame with Cyan Border */}
              <div className="absolute bottom-2 w-[280px] sm:w-[330px] h-[280px] sm:h-[330px] rounded-full bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-[#020617] border-4 border-[#38bdf8] shadow-[0_25px_50px_rgba(0,0,0,0.65)] overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 24 0 L 0 0 0 24' fill='none' stroke='%2338bdf8' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '24px 24px'
                  }}
                />
                <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#38bdf8]/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* 2. Prof. Slimane 3D Pop-Out: Bounded circularly at the bottom, head proudly popping out over top rim */}
              <div className="absolute bottom-2 w-[280px] sm:w-[330px] h-[370px] sm:h-[430px] rounded-b-full overflow-hidden flex items-end justify-center z-10 pointer-events-none">
                <Image
                  src="/images/3.webp"
                  alt="الأستاذ سليمان مسعودي — أستاذ مكوّن بمدرسة منصورة بالجلفة"
                  width={420}
                  height={500}
                  className="w-[270px] sm:w-[320px] h-auto object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
                  priority
                />
              </div>
            </div>

            {/* Balanced Official Credential Plaque */}
            <div className="w-full mt-4 p-4 rounded-2xl bg-black/35 border border-white/10 backdrop-blur-xs text-center space-y-1 relative z-20 shadow-sm">
              <div className="flex items-center justify-center gap-2">
                <h3 className="text-lg sm:text-xl font-black text-white">
                  أ. سليمان مسعودي
                </h3>
                <a
                  href="https://www.facebook.com/msd171985"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#93c5fd] hover:text-white bg-white/10 hover:bg-[#1877f2] px-2.5 py-0.5 rounded-full border border-white/15 transition-colors"
                  title="صفحة الأستاذ على فيسبوك"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>فيسبوك</span>
                </a>
              </div>
              <p className="text-xs sm:text-sm text-[#93c5fd] font-semibold">
                أستاذ مكوّن ومؤطر بيداغوجي بالمؤسسة
              </p>
              <p className="text-xs text-slate-400 pt-0.5">
                تأطير دورات الإعلام الآلي والتطبيقات المهنية
              </p>
            </div>
          </div>

          {/* Faculty Description Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 text-right bg-gradient-to-br from-white via-[#fdfbfb] to-[#f8fafc] order-2 lg:order-1 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="text-xs font-bold text-[#1e293b] uppercase tracking-wider">
                هيئة التدريس والتأطير
              </div>

              <div className="relative pr-4 border-r-4 border-[#1e293b]">
                <h3 className="text-xl sm:text-2xl font-black text-[#111827] leading-snug">
                  كفاءات تعليمية تجمع بين الخبرة الأكاديمية والتطبيق الميداني
                </h3>
              </div>

              <p className="text-sm text-[#4b5563] leading-relaxed pt-1">
                يعتمد التأطير داخل مدرسة منصورة على مرافقة فردية لكل متربص، مع التركيز على حل المشكلات التقنية وتطوير المشاريع العملية التي تمنح الطالب ثقة حقيقية قبل دخول سوق العمل.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#fdf2f4]/70 border border-[#f2c7cc] border-r-4 border-r-[#741922] flex items-start gap-4 hover:bg-[#fdeef0] hover:border-[#741922]/40 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#741922] text-white font-mono font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  01
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="text-sm font-black text-[#111827]">
                    تطبيق عملي مستمر داخل المخابر
                  </h4>
                  <p className="text-xs text-[#4b5563] leading-relaxed">
                    مرافقة المتربص في تطبيق الدروس مباشرة على البرمجيات المعتمدة واكتساب المهارات خطوة بخطوة.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#fdf2f4]/70 border border-[#f2c7cc] border-r-4 border-r-[#741922] flex items-start gap-4 hover:bg-[#fdeef0] hover:border-[#741922]/40 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#741922] text-white font-mono font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  02
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="text-sm font-black text-[#111827]">
                    متابعة مشاريع التخرج
                  </h4>
                  <p className="text-xs text-[#4b5563] leading-relaxed">
                    تأطير مشاريع نهاية التربص وتوجيه الطلبة لاجتياز الامتحانات الرسمية بنجاح.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-[#6b7280]">
              <span>مخابر وقاعات مدرسة منصورة</span>
              <span className="font-bold text-[#1e293b]">ولاية الجلفة</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

