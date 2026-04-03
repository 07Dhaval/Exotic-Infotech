import ContactSection from "../components/Letsconnect/ContactSection";
import CoreDevelopmentTechnologies from "../components/Technologies/CoreDevelopmentTechnologies";
import ModernTechSection from "../components/Technologies/ModernTechSection";
// import TechnologiesSection from "../components/Technologies/TechnologiesSection";
import TechnologyExpertise from "../components/Technologies/TechnologyExpertise";
import TechStrategySection from "../components/Technologies/TechStrategySection";

function Technology() {
  return (
    <div style={{}}>
      {/* <TechnologiesSection /> */}
      <TechnologyExpertise />
      <CoreDevelopmentTechnologies />

      <ModernTechSection />
      <TechStrategySection />
      <ContactSection />
    </div>
  );
}

export default Technology;
