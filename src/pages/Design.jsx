import DesignShowcase from "../components/Design/DesignGrid";
import Showcase from "../components/Design/Showcase";
import ContactSection from "../components/Letsconnect/ContactSection";

function Design() {
  return (
    <div style={{ padding: "" }}>
      <Showcase />
      <DesignShowcase />
      <ContactSection />
    </div>
  );
}

export default Design;
