import { Navbar } from "@/components/navbar";
import { BookedServices } from "@/components/booked-services";
import { Footer } from "@/components/footer";
import { Servicelooking } from "@/components/Servicelooking";
import StatsSection from "@/components/StatsSection";
import HowEazzyWorks from "@/components/HowEazzyWorks";
import TrustedBrands from "@/components/TrustedBrands";
import TestimonialSection from "@/components/TestimonialSection";
import PartnerSection from "@/components/PartnerSection";
import HomeHero from "@/components/Homehero";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HomeHero />
      <Servicelooking />
      <BookedServices />
      <StatsSection />

      <HowEazzyWorks />
      <PartnerSection />
      <TrustedBrands />
      <TestimonialSection />

      <Footer />
    </main>
  );
}
