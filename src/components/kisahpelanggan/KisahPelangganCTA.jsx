import React from "react";
import CallToAction from "../common/CallToAction";
import CtaImage from "../../assets/cta-woman-4.webp";

function KisahPelangganCTA() {
  const ctaProps = {
    preTitle: "Siap Mentransformasi Pengalaman Pelanggan Anda?",
    title: "Mari Diskusikan Kebutuhan Anda, Kami Akan Tunjukkan Solusinya.",
    buttonText: "Konsultasi Sekarang",
    buttonLink: "/kontak",
    imageUrl: CtaImage,
    bgColor: "bg-[#DEE1E3]",
  };

  return <CallToAction {...ctaProps} />;
}

export default KisahPelangganCTA;
