import React from "react";

import PromoTeaser from "../common/PromoTeaser";
import promoTeaser from "../../assets/kios-layanan-mandiri-promo.webp";

function KiosLayananMandiriPromo() {
  const promoTeaserProps = {
    preTitle: "QMATIC DEVICE MANAGEMENT",
    title: "Dukungan & pengelolaan hardware jadi mudah.",
    description: (
      <>
        <p>
          Dengan Qmatic Device Management, kami memantau, mengelola, dan
          mendukung semua perangkat keras Qmatic yang bersertifikat untuk
          membantu Anda memaksimalkan kesehatan, keamanan, waktu operasional,
          dan ketersediaannya dengan:
        </p>
        <ul className="list-disc pl-5 text-start">
          <li>Pembaruan perangkat lunak dan keamanan</li>
          <li>Pemantauan proaktif</li>
          <li>Bantuan jarak jauh</li>
          <li>Pembaruan aplikasi otomatis</li>
          <li>Mode kiosk</li>
          <li>Penerapan dan pendaftaran yang lancar</li>
        </ul>
      </>
    ),
    imageSrc: promoTeaser,
    imageAlt: "Qmatic device management",
    buttonText: "Selengkapnya",
    buttonLink: "/dukungan-perangkat-lunak",
    imageOnLeft: true,
    disableButton: false,
  };

  return <PromoTeaser {...promoTeaserProps} />;
}

export default KiosLayananMandiriPromo;
