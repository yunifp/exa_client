import React from "react";

import Teaser from "../common/Teaser";
import teaser1 from "../../assets/perencanaan-sumber-daya-teaser-8.webp";

function PSDTeaserDown() {
  return (
    <section className="bg-primary">
      <Teaser
        preTitle="DAFTAR JANJI TEMU"
        title={
          <>
            Ekspor Janji Temu Anda ke <em>Spreadsheet</em>
          </>
        }
        description={
          <>
            <p className="mb-4">
              Ekspor data janji temu anda dengan mudah sebagai <em>file</em> CSV
              untuk melacak dan menganalisis data anda. Anda dapat memfilter
              berdasarkan jenis layanan, rentang tanggal, atau status janji
              temu. Daftar ini mencakup:
            </p>

            <ul className="list-decimal pl-5 space-y-2">
              <li>Nama, email, dan nomor telepon</li>
              <li>Jenis layanan dan lokasi cabang</li>
              <li>Tanggal, waktu, catatan, dan status janji temu</li>
            </ul>
          </>
        }
        imageSrc={teaser1}
        imageAlt="teaser1 Bebaskan Pelanggan Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />
    </section>
  );
}

export default PSDTeaserDown;
  