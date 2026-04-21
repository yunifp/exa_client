import React from "react";

import Hero from "../components/common/Hero";

import productHeroImage from "../assets/hero-perencanaan-sumber-daya.webp";
import PSDNumberedTeaser1 from "../components/perencanaansumberdaya/PSDNumberedTeaser1";
import PSDNumberedTeaser2 from "../components/perencanaansumberdaya/PSDNumberedTeaser2";
import PSDNumberedTeaser3 from "../components/perencanaansumberdaya/PSDNumberedTeaser3";
import PSDNumberedTeaser4 from "../components/perencanaansumberdaya/PSDNumberedTeaser4";
import PSDNumberedTeaser5 from "../components/perencanaansumberdaya/PSDNumberedTeaser5";
import PSDTeaser from "../components/perencanaansumberdaya/PSDTeaser";
import PSDTeaserDown from "../components/perencanaansumberdaya/PSDTeaserDown";

function JanjiTemuDigital() {
  const productHeroProps = {
    welcomeText: "Qmatic Orchestra",
    title: "Perencanaan Sumber Daya",
    subtitle:
      "Alokasikan sumber daya secara efisien untuk memenuhi permintaan pelanggan tanpa membebani staf anda",
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
        <PSDNumberedTeaser1 />
        <PSDNumberedTeaser2 />
        <PSDNumberedTeaser3 />
        <PSDTeaser />
        <PSDNumberedTeaser4 />
        <PSDNumberedTeaser5 />
        <PSDTeaserDown />
      </div>
      ``
    </div>
  );
}

export default JanjiTemuDigital;
