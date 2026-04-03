import AboutHero from "../components/AboutUs/AboutHero";
import ServiceSection from "../components/AboutUs/ServicesSection";
import OurApproach from "../components/AboutUs/OurApproach";
import WhyChooseUs from "../components/AboutUs/WhyChoose";
import LifeAtExotic from "../components/AboutUs/LifeAtExotic";
import GallerySection from "../components/AboutUs/GallerySection";
import ContactSection from "../components/Letsconnect/ContactSection"; 

export default function AboutUsPage() {
  return (
    <div>
      <AboutHero />
      <ServiceSection />
      <OurApproach />
      <WhyChooseUs />
      <LifeAtExotic />
      <GallerySection />
      <ContactSection />
    </div>
  );
}
