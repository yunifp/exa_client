import React from "react";

import Hero from "../components/common/Hero";
import productHeroImage from "../assets/hero-kios-layanan-mandiri.webp";
import KiosLayananMandiriTeaser1 from "../components/kioslayananmandiri/KiosLayananMandiriTeaser-1";
import KiosLayananMandiriStatsFeature1 from "../components/kioslayananmandiri/KiosLayananMandiriStatsFeature-1";
import KiosLayananMandiriTeaser2 from "../components/kioslayananmandiri/KiosLayananMandiriTeaser-2";
import KiosLayananMandiriAccordion1 from "../components/kioslayananmandiri/KiosLayananMandiriAccordion-1";
import KiosLayananMandiriTeaser3 from "../components/kioslayananmandiri/KiosLayananMandiriTeaser-3";
import KiosLayananMandiriAccordion2 from "../components/kioslayananmandiri/KiosLayananMandiriAccordion-2";
import KiosLayananMandiriTeaser4 from "../components/kioslayananmandiri/KiosLayananMandiriTeaser-4";
import KiosLayananMandiriAccordion3 from "../components/kioslayananmandiri/KiosLayananMandiriAccordion-3";
import KiosLayananMandiriTeaser5 from "../components/kioslayananmandiri/KiosLayananMandiriTeaser-5";
import KiosLayananMandiriAccordion4 from "../components/kioslayananmandiri/KiosLayananMandiriAccordion-4";
import KiosLayananMandiriPromo from "../components/kioslayananmandiri/KiosLayananMandiriPromo";
import KiosLayananMandiriStatsFeature2 from "../components/kioslayananmandiri/KiosLayananMandiriStatsFeature-2";
import KiosLayananMandiriCTA from "../components/kioslayananmandiri/KiosLayananMandiriCTA";

function PesanOtomatis() {
  const productHeroProps = {
    welcomeText: "Qmatic Orchestra",
    title: "Kios Layanan Mandiri",
    subtitle:
      "Optimalkan aliran pelanggan, kurangi antrean dan waktu tunggu, serta tingkatkan pengalaman pelanggan dengan kios layanan mandiri untuk kedatangan dan check-in.",
    imageUrl: productHeroImage,
    textAlign: "text-center mx-auto",
    showButtons: false,
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...productHeroProps} />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
      <KiosLayananMandiriTeaser1 />
      <KiosLayananMandiriStatsFeature1 />
      <KiosLayananMandiriTeaser2 />
      <KiosLayananMandiriAccordion1 />
      <KiosLayananMandiriTeaser3 />
      <KiosLayananMandiriAccordion2 />
      <KiosLayananMandiriTeaser4 />
      <KiosLayananMandiriAccordion3 />
      <KiosLayananMandiriTeaser5 />
      <KiosLayananMandiriAccordion4 />
      <KiosLayananMandiriPromo />
      <KiosLayananMandiriStatsFeature2 />
      </div>
      <KiosLayananMandiriCTA />
    </div>
  );
}

export default PesanOtomatis;
