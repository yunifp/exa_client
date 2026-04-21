import React from "react";

import Hero from "../components/common/Hero";
import ManajemenAntreanHeroImage from "../assets/hero-manajemen-antrean.webp";
import ManajemenAntreanTeaser from "../components/manajemenantrean/ManajemenAntreanTeaser";
import ManajemenAntreanFeature from "../components/manajemenantrean/ManajemenAntreanFeature";
import ManajemenAntreanAccordion from "../components/manajemenantrean/ManajemenAntreanAccordion";
import ManajemenAntreanCTA from "../components/manajemenantrean/ManajemenAntreanCTA";

function ManajemenAntrean() {
  const ManajemenAntreanHeroProps = {
    welcomeText: "Solusi-Solusi",
    title: "Manajemen Antrean",
    subtitle:
      "Terapkan struktur pada operasional Anda dengan solusi manajemen antrian untuk perusahaan.",
    imageUrl: ManajemenAntreanHeroImage,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Konsultasi",
    button2Link: "/kontak",
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...ManajemenAntreanHeroProps} />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
      <ManajemenAntreanTeaser />
      <ManajemenAntreanFeature />
      <ManajemenAntreanAccordion />
      </div>
      <ManajemenAntreanCTA />
    </div>
  );
}

export default ManajemenAntrean;
