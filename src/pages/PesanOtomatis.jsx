import React from "react";

import Hero from "../components/common/Hero";
import productHeroImage from "../assets/hero-pesan-otomatis.webp";

import PesanOtomatisNumberedTeaser from "../components/pesanotomatis/PesanOtomatisNumberedTeaser";
import PesanOtomatisTeaser from "../components/pesanotomatis/PesanOtomatisTeaser";
import PesanOtomatisCTA from "../components/pesanotomatis/PesanOtomatisCTA";

function PesanOtomatis() {
  const productHeroProps = {
    welcomeText: "Qmatic Orchestra",
    title: "Pesan Otomatis",
    subtitle: (
      <>
        Layanan pengiriman SMS yang andal dan efektif untuk mendekatkan pelanggan,
        didukung <span className="italic">platform</span> dengan penyiapan mudah dan
        biaya operasional efisien.
      </>
    ),
    imageUrl: productHeroImage,
    textAlign: "text-center mx-auto",
    showButtons: false
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...productHeroProps} />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
      <PesanOtomatisNumberedTeaser />
      <PesanOtomatisTeaser />
      </div>
      <PesanOtomatisCTA />
    </div>
  );
}

export default PesanOtomatis;
