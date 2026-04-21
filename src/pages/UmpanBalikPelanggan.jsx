import React from "react";
import Hero from "../components/common/Hero";

import productHeroImage from "../assets/hero-umpan-balik-pelanggan.webp";
import UmpanBalikPelangganTeaser from "../components/umpanbalikpelanggan/UmpanBalikPelangganTeaser";
import UmpanBalikPelangganTeaserDown from "../components/umpanbalikpelanggan/UmpanBalikPelangganTeaserDown";
import UmpanBalikPelangganAccordion from "../components/umpanbalikpelanggan/UmpanBalikPelangganAccordion";
import UmpanBalikPelangganStatsFeature from "../components/umpanbalikpelanggan/UmpanBalikPelangganStatsFeature";
import UmpanBalikPelangganCTA from "../components/umpanbalikpelanggan/UmpanBalikPelangganCTA";

function UmpanBalikPelanggan() {
  const productHeroProps = {
    welcomeText: "Qmatic Orchestra",
    title: "Umpan Balik Pelanggan",
    subtitle:
      "Alokasikan sumber daya secara efisien untuk memenuhi permintaan pelanggan tanpa membebani staf anda",
    imageUrl: productHeroImage,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Konsultasi",
    button2Link: "/konsultasi",
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...productHeroProps} />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
      <UmpanBalikPelangganTeaser />
      <UmpanBalikPelangganStatsFeature />
      <UmpanBalikPelangganTeaserDown />
      <UmpanBalikPelangganAccordion />
      </div>
      <UmpanBalikPelangganCTA />
    </div>
  );
}

export default UmpanBalikPelanggan;
