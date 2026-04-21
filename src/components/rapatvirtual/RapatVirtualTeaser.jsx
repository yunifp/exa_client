import React from "react";

import Teaser from "../common/Teaser";
import teaser1 from "../../assets/rapat-virtual-teaser-1.webp";

function RapatVirtualTeaser() {
  return (
    <section className="bg-primary">
      <Teaser
        preTitle=""
        title="Terhubung dengan pelanggan di mana saja"
        description={
          <>
            Jembatani jarak antara Anda dan pelanggan. Dengan alat konferensi
            video kami yang aman dan mudah digunakan, Anda dapat menghadirkan
            layanan tatap muka yang personal langsung ke perangkat pelanggan, di
            mana pun mereka berada. Ini adalah solusi ideal untuk memaksimalkan
            jangkauan layanan dan menjaga interaksi berkualitas tinggi di era
            kerja <em>hybrid</em>.
          </>
        }
        imageSrc={teaser1}
        imageAlt="teaser1 Terhubung dengan pelanggan di mana saja"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />
    </section>
  );
}

export default RapatVirtualTeaser;
