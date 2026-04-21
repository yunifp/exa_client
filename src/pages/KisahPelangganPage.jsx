import React from "react";
import Hero from "../components/common/Hero";
import StoryMainSection from "../components/informasi/storymainsection";
import heroImage from "../assets/hero-kisah-pelanggan.webp"; 
import KisahPelangganCTA from "../components/kisahpelanggan/KisahPelangganCTA";


function KisahPelangganPage() {
  const heroProps = {
    title: "Kisah Pelanggan",
    subtitle: "Pelajari bagaimana kami membantu mengubah tantangan mereka menjadi pencapaian yang luar biasa.",
    imageUrl: heroImage,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Konsultasi",
    button2Link: "/kontak",
  };

  return (
    <div className="bg-white min-h-screen">
      <Hero {...heroProps} />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
      <StoryMainSection />
      </div>
      <KisahPelangganCTA />
    </div>
  );
}

export default KisahPelangganPage;