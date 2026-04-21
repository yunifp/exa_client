import React from "react";
import CallToAction from "../common/CallToAction";
import CtaImage from "../../assets/cta-woman-5.webp";

function ManajemenPerjalananPelangganCTA() {
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

export default ManajemenPerjalananPelangganCTA;
