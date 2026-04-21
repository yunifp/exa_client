import React from "react";

import Hero from "../components/common/Hero";
import productHeroImage from "../assets/hero-integrasi.webp";

import IntegrasiPowerBITeaser from "../components/integrasipowerbi/IntegrasiPowerBITeaser";
import IntegrasiPowerBIAccordion from "../components/integrasipowerbi/IntegrasiPowerBIAccordion";
import IntegrasiPowerBICTA from "../components/integrasipowerbi/IntegrasiPowerBICTA";

function PowerBI() {
  const productHeroProps = {
    welcomeText: "Integrasi",
    title: "Power BI (Data Connect)",
    subtitle: (
      <p>
        Buka <i>insight</i> berharga untuk keberlangsungan alur perjalanan
        pelanggan Anda.
      </p>
    ),
    imageUrl: productHeroImage,
    textAlign: "text-center mx-auto",
    showButtons: true,
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Konsultasi",
    button2Link: "/kontak",
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...productHeroProps} />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
      <IntegrasiPowerBITeaser />
      <IntegrasiPowerBIAccordion />
      </div>
      <IntegrasiPowerBICTA />   
    </div>
  );
}

export default PowerBI;
