import React from "react";

import Teaser from "../common/Teaser";
import teaser1 from "../../assets/kios-layanan-mandiri-teaser-1.webp";

function KiosLayananMandiriTeaser1() {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6 mb-8 text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Berapa Banyak Pelanggan Pergi Karena Menunggu?
        </h2>
        <p className="text-lg text-gray-600">
          Setiap pelanggan yang memutuskan pergi <i>(walkaway)</i> karena
          antrean terlalu panjang adalah kerugian pendapatan dan loyalitas. Kios
          Layanan Mandiri adalah garda terdepan Anda untuk mencegah hal ini.
          Dengan memberdayakan pelanggan untuk <i>check-in</i> secara instan dan
          mandiri, Anda secara drastis mengurangi <i>walkaways</i> dan menunjukkan
          bahwa Anda menghargai waktu mereka.
        </p>
      </div>
      {/* Teaser 1 */}
      <Teaser
        preTitle=""
        title="Mengapa Kios Layanan Mandiri?"
        description={
          <>
            Optimalkan alur pelanggan Anda, kurangi waktu tunggu, dan tingkatkan
            efisiensi operasional dengan kios layanan mandiri kami. Mulai dari
            pendaftaran dan <i>check-in</i> hingga pengelolaan antrean, kami
            menciptakan pengalaman pelanggan yang lancar di lokasi Anda.
          </>
        }
        imageSrc={teaser1}
        imageAlt="teaser1 Mengapa Kios Layanan Mandiri?"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />
    </section>
  );
}

export default KiosLayananMandiriTeaser1;
