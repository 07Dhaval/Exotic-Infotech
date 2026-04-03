import CareersCTA from "../components/Careers/CareersCTA";
import CareersHero from "../components/Careers/CareersHero";
import JobOpenings from "../components/Careers/JobOpenings";
import WhyJoinUs from "../components/Careers/WhyJoinUs";
import ContactSection from "../components/Letsconnect/ContactSection";

function Careers() {
  return (
    <div style={{}}>
      <CareersHero />
      <WhyJoinUs />
      <JobOpenings />
      <CareersCTA />
      <ContactSection />
    </div>
  );
}

export default Careers;