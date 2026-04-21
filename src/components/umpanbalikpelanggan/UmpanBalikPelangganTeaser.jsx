import React from "react";

import Teaser from "../common/Teaser";
import teaser1 from "../../assets/umpan-balik-pelanggan-Teaser-1.webp";

function UmpanBalikPelangganTeaser() {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6 mb-8 text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Ingin meningkatkan pengalaman Pelanggan?
        </h2>
        <p className="text-lg text-gray-600">
          Dengan solusi umpan balik pelanggan Exaque, Anda dapat mengumpulkan
          wawasan tentang kebutuhan pelanggan, memperkuat hubungan dengan
          pelanggan, dan meningkatkan kepuasan pelanggan di setiap titik kontak.
          Serta memenuhi kebutuhan dan tuntutan pelanggan saat ini dan melampaui
          ekspektasi mereka.
        </p>
      </div>

      {/* --- Teaser 1 --- */}
      <Teaser
        preTitle=""
        title="Lampaui ekspektasi pelanggan Anda dengan Exaque"
        description={
          <>
            <p className="mb-4">
              Sistem Antrean Virtual kami mengubah waktu tunggu yang membosankan
              menjadi waktu bebas. Biarkan pelanggan Anda menunggu di kafe, di
              taman, atau di mana pun mereka suka.
            </p>
          </>
        }
        imageSrc={teaser1}
        imageAlt="teaser1 Lampaui ekspektasi pelanggan Anda dengan Exaque"
        imageOnRight={true}
        disableButton={true}
      />
    </section>
  );
}

export default UmpanBalikPelangganTeaser;
