import React from "react";

import Hero from "../components/common/Hero";
import productHeroImage from "../assets/hero-keamanan-sistem.webp";
import KeamananSistemStatsFeature from "../components/keamanansistem/KeamananSistemStatsFeature";
import KeamananSistemFeature from "../components/keamanansistem/KeamananSistemFeature";
import KeamananSistemCTA from "../components/keamanansistem/KeamananSistemCTA";

function PesanOtomatis() {
  const productHeroProps = {
    welcomeText: "Qmatic Orchestra",
    title: "Keamanan Sistem",
    subtitle:
      "Fungsionalitas enterprise untuk jutaan perjalanan pelanggan harian, tanpa kompromi pada stabilitas, kinerja, dan keamanan.",
    imageUrl: productHeroImage,
    textAlign: "text-center mx-auto",
    showButtons: false,
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...productHeroProps} />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
      <KeamananSistemFeature />
      <KeamananSistemStatsFeature />
      </div>
      <KeamananSistemCTA />
    </div>
  );
}

export default PesanOtomatis;
