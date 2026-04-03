import { useParams } from "react-router-dom";
import industries from "../data/IndustriesData";
import IndustryPage from "../components/Industries/IndustryPage";
import IndustryBenefits from "../components/Industries/IndustryBenefits";
import IndustrySlider from "../components/Industries/IndustrySlider";
import ContactSection from "../components/Letsconnect/ContactSection";

const IndustryDetail = () => {
  const { slug } = useParams();
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    return (
      <h2 style={{ padding: "120px 8%", textAlign: "center" }}>
        Industry Not Found
      </h2>
    );
  }

  return (
    <>
      <IndustryPage industry={industry} />
      <IndustryBenefits industry={industry} />
      <IndustrySlider currentSlug={slug} />
      <ContactSection />
    </>
  );
};

export default IndustryDetail;
