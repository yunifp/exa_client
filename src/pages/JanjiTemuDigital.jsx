import React from "react";

import Hero from "../components/common/Hero";
import JanjiTeaser from "../components/janjitemu/JanjiTeaser";
import JanjiFeature from "../components/janjitemu/JanjiFeature";

import productHeroImage from "../assets/hero-janji-temu.webp";

function JanjiTemuDigital() {
  const productHeroProps = {
    welcomeText: "Qmatic Orchestra",
    title: "Janji Temu",
    subtitle: "Optimalkan perencanaan & penjadwalan janji temu anda",
    imageUrl: productHeroImage,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Konsultasi",
    button2Link: "/kontak",
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...productHeroProps} />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
      <JanjiTeaser />
      <JanjiFeature />
      </div>
    </div>
  );
}

export default JanjiTemuDigital;