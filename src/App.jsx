import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Headersection from "./components/Homepage/HeaderSection";
import Header from "./components/Homepage/Header";
import Footer from "./components/Homepage/Footer";
import Footersection from "./components/Homepage/FooterSection";
import Services from "./pages/Services";
import Technology from "./pages/Technology";
import Homepage from "./pages/Homepage";
import Company from "./pages/aboutuspage";
import Design from "./pages/Design";
import Blog from "./pages/Blog";
import Industries from "./pages/Industries";
import IndustryDetail from "./pages/IndustryDetail";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Letsconnect from "./pages/letsconnect";
import Product from "./pages/Product";
import ScrollToTop from "./components/ScrollToTop";
import Careers from "./pages/Careers";

function App() {
  const location = useLocation();

  return (
    <>
      <Headersection />
      <Header />

      <ScrollToTop />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/company" element={<Company />} />
        <Route path="/design" element={<Design />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:slug" element={<IndustryDetail />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/letsconnect" element={<Letsconnect />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<Services />} />

        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>

      <WhatsAppButton />
      <Footer />
      <Footersection />
    </>
  );
}

export default App;