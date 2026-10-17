import ZisaaStyleHero from "@/components/landing/ZisaaStyleHero";
import PartnerLogos from "@/components/landing/PartnerLogos";
import DirectorMessage from "@/components/landing/DirectorMessage";
import InstitutionStory from "@/components/landing/InstitutionStory";
import CommunityReviews from "@/components/landing/CommunityReviews";
import MapSection from "@/components/landing/MapSection";

export default function HomePage() {
  return (
    <div className="space-y-0 bg-[#faf8f8] min-h-screen">
      {/* 1. Zisaa-Style Architectural Hero with Directress Showcase & 4 Feature Pillars */}
      <ZisaaStyleHero />

      {/* 3. Institutional Partners & Ecosystem Logo Cloud (Algérie Télécom, MFEP, ANEM...) */}
      <PartnerLogos />

      {/* 4. Leadership Identity: Who the Directress is & Executive Pedagogical Mission */}
      <DirectorMessage />

      {/* 4. Institutional Foundation & 3 Core Pillars in Djelfa */}
      <InstitutionStory />

      {/* 5. Verified Community Reviews & Alumni Feedback */}
      <CommunityReviews />

      {/* 6. Verified GPS OpenStreetMap & Direct Contacts (Room 13/14) */}
      <MapSection />
    </div>
  );
}
