import React from "react";

import PromoTeaser from "../common/PromoTeaser";
import promoTeaser from "../../assets/pengumuman-suara-otomatis-teaser-6.webp";

function PengumumanSuaraOtomatisPromo() {
  const promoTeaserProps = {
    preTitle: "Aplikasi",
    title: "Qmatic Display App",
    description:
      "Qmatic Display adalah aplikasi pemutar media untuk Android. Aplikasi ini memungkinkan Anda untuk menampilkan konten media terintegrasi, grafis, informasi status antrean, dan pengumuman suara kepada semua orang di lingkungan layanan Anda.",
    imageSrc: promoTeaser,
    imageAlt: "Qmatic Display App",
    buttonText: "Selengkapnya",
    buttonLink: "/#",
    imageOnLeft: true,
    disableButton: false,
  };

  return <PromoTeaser {...promoTeaserProps} />;
}

export default PengumumanSuaraOtomatisPromo;
