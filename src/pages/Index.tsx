import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Header from "@/components/common/Header";
import Hero from "@/components/sections/Hero";
import DashboardPreview from "@/components/sections/DashboardPreview";
import TrustedBy from "@/components/sections/TrustedBy";
import FeatureStats from "@/components/sections/FeatureStats";
import SplitFeature from "@/components/sections/SplitFeature";
import CTABanner from "@/components/sections/CTABanner";
import Services from "@/components/sections/Services";
import ProgressSection from "@/components/sections/ProgressSection";
import GradientStrip from "@/components/sections/GradientStrip";
import Analytics from "@/components/sections/Analytics";
import BottomCTA from "@/components/sections/BottomCTA";
import Footer from "@/components/common/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <Hero />
      <DashboardPreview />
      <TrustedBy />
      <FeatureStats />
      <SplitFeature />
      <CTABanner />
      <Services />
      <ProgressSection />
      <GradientStrip />
      <Analytics />
      <BottomCTA />
      <Footer />
    </div>
  );
};

export default Index;
