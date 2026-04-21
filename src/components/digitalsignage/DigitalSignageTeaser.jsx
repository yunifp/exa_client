import React from "react";
import Teaser from "../common/Teaser";

import teaser1 from "../../assets/digital-signage-teaser-1.webp";
import teaser2 from "../../assets/digital-signage-teaser-2.webp";
import teaser3 from "../../assets/digital-signage-teaser-3.webp";
import teaser4 from "../../assets/digital-signage-teaser-4.webp";

const italicize = (text) => {
  if (typeof text !== "string") return text;
  const parts = text.split(/(real-time)/gi);
  return parts.map((part, index) =>
    part.toLowerCase() === "real-time" ? <i key={index}>{part}</i> : part
  );
};

function DigitalSignageTeaser() {
  return (
    <section className="bg-primary">
      <div className="bg-subtle-light w-screen mx-auto px-6 mb-8 py-5 md:py-10 text-center">
        <p className="text-sm font-semibold uppercase text-accent">
          PRODUK KAMI
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Digital Signage Displays
        </h2>
      </div>

      <Teaser
        preTitle="Perangkat Bersertifikasi Qmatic"
        title="Display Area Tunggu"
        description={italicize(
          "Tampilkan informasi antrian secara real-time, tiket panggilan, serta video atau gambar menarik di area tunggu pelanggan anda. Tersedia berbagai ukuran layar mulai dari 32” hingga 98”, siap mempercantik area layanan Anda."
        )}
        imageSrc={teaser1}
        imageAlt="teaser1 Display Area Tunggu"
        buttonText="Dapatkan perangkat ini"
        buttonLink="/kontak"
        imageOnRight={true}
        disableButton={false}
      />

      <Teaser
        preTitle="Perangkat Bersertifikasi Qmatic"
        title="Display Meja Layanan"
        description={italicize(
          "Berikan arah yang jelas dan pastikan pelanggan dapat berpindah dari satu layanan ke layanan lainnya dengan mudah. Dengan tampilan yang informatif, pengalaman pelanggan menjadi lebih nyaman dan efisien."
        )}
        imageSrc={teaser2}
        imageAlt="teaser2 Display Meja Layanan"
        buttonText="Dapatkan perangkat ini"
        buttonLink="/kontak"
        imageOnRight={false}
        disableButton={false}
      />

      <div className="bg-subtle-light w-screen mx-auto px-6 mb-8 py-5 md:py-10 text-center">
        <p className="text-sm font-semibold uppercase text-accent">
          PRODUK KAMI
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Digital Signage Software
        </h2>
      </div>

      <Teaser
        preTitle="Perangkat Bersertifikasi Qmatic"
        title="Aplikasi Qmatic Display"
        description={italicize(
          "Qmatic Display App adalah aplikasi media player berbasis Android yang memungkinkan anda menampilkan konten multimedia, grafik, dan status antrian secara real-time melalui layar digital dan pengumuman suara."
        )}
        imageSrc={teaser3}
        imageAlt="teaser3 Aplikasi Qmatic Display"
        buttonText="Dapatkan perangkat ini"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />

      <Teaser
        preTitle="Perangkat Bersertifikasi Qmatic"
        title={
          <>
            Pengumuman Suara Otomatis AI <i>Text-to-Speech</i>
          </>
        }
        description={italicize(
          "Tetap informatif dengan pengumuman suara otomatis saat giliran pelanggan tiba. Teknologi AI (TTS) dari Qmatic mendukung lebih dari 50 bahasa dan berbagai pilihan suara alami yang realistis, menciptakan pengalaman yang lebih profesional dan ramah bagi pelanggan Anda."
        )}
        imageSrc={teaser4}
        imageAlt="teaser4 Pengumuman Suara Otomatis AI Text-to-Speech"
        buttonText="Selengkapnya"
        buttonLink="/pengumuman-suara-otomatis"
        imageOnRight={false}
        disableButton={false}
      />
    </section>
  );
}

export default DigitalSignageTeaser;
