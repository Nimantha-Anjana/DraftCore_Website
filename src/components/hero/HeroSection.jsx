import HeroVideo from "./HeroVideo";
import HeroOverlay from "./HeroOverlay";
import ScrollIndicator from "./ScrollIndicator";

import "./hero.css";

const HeroSection = () => {
  return (
    <section className="hero-section">

      <HeroVideo />

      <div className="hero-dark-overlay"></div>

      <HeroOverlay />

      <ScrollIndicator />

    </section>
  );
};

export default HeroSection;