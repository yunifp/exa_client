import React from "react";

import PromoTeaser from "../common/PromoTeaser";

import promoTeaser from "../../assets/janji-promo.svg";

function JanjiPromo() {
  const promoTeaserProps = {
    preTitle: "Qmatic Experience Cloud",
    title: "Penjadwalan Janji Temu Yang Mudah Dengan Qmatic Experience Cloud",
    description: (
      <>
        Perangkat lunak penjadwalan janji temu kami tersedia di <em>platform</em>{" "}
        manajemen perjalanan pelanggan berbasis Qmatic Experience Cloud. Andalkan
        satu pemasok untuk menawarkan perjalanan pelanggan yang mulus dan
        memberikan pengalaman pelanggan yang luar biasa di setiap titik kontak,
        mulai dari pemesanan janji temu, check-in, pengiriman layanan, hingga
        pengumpulan umpan balik.
      </>
    ),
    imageSrc: promoTeaser,
    imageAlt: "Qmatic Experience Cloud Dashboard",
    buttonText: "Selengkapnya",
    buttonLink: "/experience-cloud",
    imageOnLeft: true,
    disableButton: false,
  };

  return <PromoTeaser {...promoTeaserProps} />;
}

export default JanjiPromo;
