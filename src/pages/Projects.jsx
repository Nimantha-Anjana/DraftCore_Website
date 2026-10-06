import PageHero from "../components/common/PageHero";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import FinalCTA from "../components/sections/FinalCTA";

export default function Projects() {
  return (
    <>
      <PageHero sheet="A-04" label="Projects" tag="Portfolio" title={<>Selected <em>scopes of work.</em></>}
        lede="The kinds of packages we document and deliver. Client case studies and sample sheets are shared on request." />
      <FeaturedProjects intro={false} />
      <FinalCTA />
    </>
  );
}
