import AnnouncementBar from "@/components/sections/global/AnnouncementBar";
import Header from "@/components/common/Header";
import Hero from "@/components/sections/homepage/Hero";
import DashboardPreview from "@/components/sections/homepage/DashboardPreview";
import TrustedBy from "@/components/sections/homepage/TrustedBy";
import FeatureStats from "@/components/sections/homepage/FeatureStats";
import SplitFeature from "@/components/sections/homepage/SplitFeature";
import CTABanner from "@/components/sections/homepage/CTABanner";
import Services from "@/components/sections/homepage/Services";
import ProgressSection from "@/components/sections/homepage/ProgressSection";
import GradientStrip from "@/components/sections/homepage/GradientStrip";
import Analytics from "@/components/sections/homepage/Analytics";
import BottomCTA from "@/components/sections/homepage/BottomCTA";
import Footer from "@/components/common/Footer";
import usePageTitle from "@/hooks/usePageTitle";

const Index = () => {
  usePageTitle("Home");
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
