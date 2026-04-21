import React from "react";

import Hero from "../components/home/Hero";
import AboutTeaser from "../components/home/AboutTeaser";
import IntegratedSolutions from "../components/home/IntegratedSolutions";
import IntegrationSection from "../components/home/IntegrationSection";
import NewsSection from "../components/home/NewsSection";
import CustomerStories from "../components/home/CustomerStories";
import HomeCTA from "../components/home/HomeCTA";

function Home() {
  return (
    <div className="bg-primary min-h-screen">
      <Hero />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
      <AboutTeaser />
      <IntegratedSolutions />
      <IntegrationSection />
      {/* <CustomerStories /> */}
      {/* <NewsSection /> */}
      </div>
      <HomeCTA />
    </div>
  );
}

export default Home;
