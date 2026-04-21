import React from "react";

import Hero from "../components/common/Hero";
import BussinessIntelligenceTeaser from "../components/bussinessintelligence/BussinessIntelligenceTeaser";
import BussinessIntelligenceFeature from "../components/bussinessintelligence/BussinessIntelligenceFeature";
import BussinessIntelligenceCTA from "../components/bussinessintelligence/BussinessIntelligenceCTA";

import BussinessIntelligenceHeroImage from "../assets/hero-business-intelligence.webp";

const italicizeText = (text) => {
  const keywords = [
    "real time",
    "real-time",
    "walkaways",
    "right to left",
    "rtl",
    "branding",
    "brand",
    "mobile",
  ];

  const regex = new RegExp(`(${keywords.join("|")})`, "gi");

  return text.split(regex).map((part, index) =>
    keywords.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
      <i key={index}>{part}</i>
    ) : (
      part
    )
  );
};

function BussinessIntelligence() {
  const BussinessIntelligenceHeroProps = {
    welcomeText: italicizeText("Qmatic Orchestra"),
    title: italicizeText("Intelegensi Bisnis"),
    subtitle: italicizeText(
      "Buat keputusan yang lebih baik berdasarkan data. Tanggapi data real-time, tinjau dengan laporan detail, dan temukan potensi dan nilai tersembunyi menggunakan alat favorit Anda."
    ),
    imageUrl: BussinessIntelligenceHeroImage,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Konsultasi",
    button2Link: "/kontak",
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...BussinessIntelligenceHeroProps} />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
      <BussinessIntelligenceTeaser />
      <BussinessIntelligenceFeature />
      </div>
      <BussinessIntelligenceCTA />
    </div>
  );
}

export default BussinessIntelligence;
