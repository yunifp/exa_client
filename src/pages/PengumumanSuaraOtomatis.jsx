import React from "react";
import Hero from "../components/common/Hero";
import PengumumanSuaraOtomatisTeaser from "../components/pengumumansuaraotomatis/PengumumanSuaraOtomatisTeaser";
import PengumumanSuaraOtomatisFeature from "../components/pengumumansuaraotomatis/PengumumanSuaraOtomatisFeature";
import PengumumanSuaraOtomatisTeaserDown from "../components/pengumumansuaraotomatis/PengumumanSuaraOtomatisTeaserDown";
import PengumumanSuaraOtomatisPromo from "../components/pengumumansuaraotomatis/PengumumanSuaraOtomatisPromo";
import PengumumanSuaraOtomatisFlag from "../components/pengumumansuaraotomatis/PengumumanSuaraOtomatisFlag";
import PengumumanSuaraOtomatisCTA from "../components/pengumumansuaraotomatis/PengumumanSuaraOtomatisCTA";

import PengumumanSuaraOtomatisHeroImage from "../assets/hero-pengumuman-suara-otomatis.webp";

function PengumumanSuaraOtomatis() {
  const PengumumanSuaraOtomatisHeroProps = {
    welcomeText: "Qmatic Orchestra",
    title: "Pengumuman Suara Otomatis",
    subtitle:
      "Berkomunikasilah dengan jelas kepada semua orang di area tunggu Anda.",
    imageUrl: PengumumanSuaraOtomatisHeroImage,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Konsultasi",
    button2Link: "/kontak",
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...PengumumanSuaraOtomatisHeroProps} />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
      <PengumumanSuaraOtomatisTeaser />
      <PengumumanSuaraOtomatisFeature />
      <PengumumanSuaraOtomatisTeaserDown />
      <PengumumanSuaraOtomatisFlag />
      <PengumumanSuaraOtomatisPromo />
      </div>
      <PengumumanSuaraOtomatisCTA />
    </div>
  );
}

export default PengumumanSuaraOtomatis;
