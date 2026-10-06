import HeroSection from "../components/hero/HeroSection";
import CapabilityStrip from "../components/sections/CapabilityStrip";
import AboutPreview from "../components/sections/AboutPreview";
import ServicesPreview from "../components/sections/ServicesPreview";
import ProcessSection from "../components/sections/ProcessSection";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import WhyDraftCore from "../components/sections/WhyDraftCore";
import Industries from "../components/sections/Industries";
import FinalCTA from "../components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CapabilityStrip />
      <AboutPreview />
      <ServicesPreview />
      <ProcessSection />
      <FeaturedProjects />
      <WhyDraftCore />
      <Industries />
      <FinalCTA />
    </>
  );
}
