import PageHero from "../components/common/PageHero";
import ServicesPreview from "../components/sections/ServicesPreview";
import ProcessSection from "../components/sections/ProcessSection";
import FinalCTA from "../components/sections/FinalCTA";

export default function Services() {
  return (
    <>
      <PageHero sheet="A-03" label="Services" tag="Our capabilities" title={<>Services built <em>for delivery.</em></>}
        lede="Six connected capabilities that can be used separately or together, from the first model to the final snag." />
      <ServicesPreview intro={false} />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
