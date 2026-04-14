import AnnouncementBar from "@/components/sections/global/AnnouncementBar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutMission from "@/components/sections/about/AboutMission";
import AboutStats from "@/components/sections/about/AboutStats";
import AboutMissionVision from "@/components/sections/about/AboutMissionVision";
import AboutCTA from "@/components/sections/about/AboutCTA";
import AboutProgress from "@/components/sections/about/AboutProgress";
import AboutBottomCTA from "@/components/sections/about/AboutBottomCTA";
import usePageTitle from "@/hooks/usePageTitle";

const About = () => {
  usePageTitle("About Us");
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutMissionVision />
      <AboutCTA />
      <AboutProgress />
      <AboutBottomCTA />
      <Footer />
    </div>
  );
};

export default About;
