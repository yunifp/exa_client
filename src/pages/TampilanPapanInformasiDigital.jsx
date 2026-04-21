import React from "react";

import Hero from "../components/common/Hero";
import productHeroImage from "../assets/hero-digital-signage.webp";
import DigitalSignageTeaser from "../components/digitalsignage/DigitalSignageTeaser";
import DigitalSignageStatsFeature from "../components/digitalsignage/DigitalSignageStatsFeature";
function PesanOtomatis() {
  const productHeroProps = {
    welcomeText: "Qmatic Orchestra",
    title: "Digital Signage",
    subtitle: "Ubah waktu tunggu menjadi pengalaman pelanggan yang luar biasa",
    imageUrl: productHeroImage,
    textAlign: "text-center mx-auto",
    showButtons: false,
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...productHeroProps} />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
      <DigitalSignageStatsFeature />
      <DigitalSignageTeaser />
      </div>
    </div>
  );
}

export default PesanOtomatis;
