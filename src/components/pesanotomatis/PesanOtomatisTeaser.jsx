import React from "react";
import Teaser from "../common/Teaser";
import teaser1 from "../../assets/pesan-otomatis-teaser-2.webp";

function PesanOtomatisTeaser() {
  return (
    <section className="bg-primary">
      {/* --- Teaser 1 --- */}
      <Teaser
        preTitle=""
        title="Pengaturan Andal, Operasional Hemat Biaya."
        description={
          <>
            <p className="mb-4">
              Layanan Pesan Qmatic memudahkan komunikasi SMS global Anda. Tak
              perlu lagi mengurus <i>gateway</i> lokal atau banyak mitra di berbagai
              negara; Qmatic menangani registrasi jaringan dan memastikan
              kepatuhan regulasi. <i>Platform</i> kami yang tangguh menjamin tingkat
              pengiriman optimal dan terintegrasi mulus dengan solusi janji temu
              serta antrean virtual Anda, lengkap dengan laporan penggunaan
              untuk menyempurnakan pengalaman pelanggan.
            </p>
          </>
        }
        imageSrc={teaser1}
        imageAlt="teaser1 Pengaturan Andal, Operasional Hemat Biaya."
        imageOnRight={true}
        disableButton={true}
      />
    </section>
  );
}

export default PesanOtomatisTeaser;
