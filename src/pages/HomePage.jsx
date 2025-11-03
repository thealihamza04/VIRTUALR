import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import FeatureSection from "../components/FeatureSection.jsx";
import WorkFlow from "../components/WorkFlow.jsx";
import Pricing from "../components/Pricing.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <WorkFlow />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
