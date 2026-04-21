import React from "react";

import Teaser from "../common/Teaser";

import teaser1 from "../../assets/perencanaan-sumber-daya-teaser-4.webp";
import teaser2 from "../../assets/perencanaan-sumber-daya-teaser-5.webp";

function PSDTeaser() {
  return (
    <section className="bg-primary">
      <div className="text-center max-w-7xl mx-auto mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Optimalkan Alur Kerja Anda <br />
          dengan Fitur Cerdas
        </h2>
      </div>
      {/* --- Teaser 1 --- */}
      <Teaser
        preTitle="ALOKASI SUMBER DAYA OTOMATIS"
        title="Tugaskan Sumber Daya ke Layanan Spesifik"
        description="Tugaskan sumber daya seperti anggota staf, ruangan, atau peralatan ke layanan tertentu yang membutuhkannya. Saat layanan dijadwalkan, sumber daya tersebut dipesan secara otomatis, mencegah konflik jika ada sumber daya yang tidak tersedia."
        imageSrc={teaser1}
        imageAlt="teaser1 Tugaskan Sumber Daya ke Layanan Spesifik"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />
      {/* --- Teaser 2 --- */}
      <Teaser
        preTitle="EDIT KAPASITAS"
        title="Lacak dan Sesuaikan Kapasitas Anda Seketika"
        description={
          <>
            Sesuaikan jumlah kuota janji temu pada setiap slot waktu sesuai
            kebutuhan layanan anda. Dengan mengatur kapasitas sumber daya secara
            tepat, Anda dapat mencegah <i>overscheduling</i>, menjaga jadwal
            tetap rapi, dan membuat manajemen kalender jadi jauh lebih mudah
            serta efisien.
          </>
        }
        imageSrc={teaser2}
        imageAlt="teaser2 Lacak dan Sesuaikan Kapasitas Anda Seketika"
        imageOnRight={false}
        disableButton={true}
      />
    </section>
  );
}

export default PSDTeaser;
