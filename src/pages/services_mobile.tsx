import DiscountBanner from "@/components/DiscountBanner";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SuccessSection from "@/components/SuccessSection";
import StatsSection from "@/components/StatsSection";
import MissionSection from "@/components/MissionSection";
import StrengthSection from "@/components/StrengthSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import About from "./About";

const Service_mobile_Page = () => {
  return (
    <div className="min-h-screen bg-background">
      <DiscountBanner />
      <Header />
      <HeroSection />
      <ClientLogos />
      <FeaturesSection />
      <AboutSection />
      <HowItWorksSection />
      <SuccessSection />
      <StatsSection />
      <MissionSection />
      <StrengthSection />
      <CTASection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Service_mobile_Page;
