import ZisaaStyleHero from "@/components/landing/ZisaaStyleHero";
import PartnerLogos from "@/components/landing/PartnerLogos";
import DirectorMessage from "@/components/landing/DirectorMessage";
import InstitutionStory from "@/components/landing/InstitutionStory";
import CommunityReviews from "@/components/landing/CommunityReviews";
import MapSection from "@/components/landing/MapSection";

export default function HomePage() {
  return (
    <div className="space-y-0 bg-[#faf8f8] min-h-screen">
      {/* 1. الواجهة الترحيبية الشاملة وعرض ركائز التكوين والمديرة العامة (Hero Section & Core Pillars) */}
      <ZisaaStyleHero />

      {/* 2. شريط الشركاء المؤسساتيين ورعاة التكوين المتحرك (Institutional Partners Logo Cloud & Marquee) */}
      <PartnerLogos />

      {/* 3. رسالة المديرة العامة وهوية القيادة البيداغوجية (Directress Leadership Message & Vision) */}
      <DirectorMessage />

      {/* 4. القصة المؤسساتية وركائز التكوين الميداني والاعتمادات الرسمية (Institutional Foundation Story & Field Accreditations) */}
      <InstitutionStory />

      {/* 5. انطباعات وآراء المتربصين الحقيقية الموثقة من صفحة فيسبوك (Verified Community Reviews & Facebook Testimonials) */}
      <CommunityReviews />

      {/* 6. الخريطة التفاعلية الدقيقة وقنوات الاتصال المباشرة بالمقر (OpenStreetMap Interactive Map & Contact Information) */}
      <MapSection />
    </div>
  );
}
