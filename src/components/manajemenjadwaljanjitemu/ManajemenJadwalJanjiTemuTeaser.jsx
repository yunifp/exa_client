import React from "react";

import Teaser from "../common/Teaser";
import teaser1 from "../../assets/manajemen-jadwal-janji-temu-teaser-1.webp";
import teaser2 from "../../assets/manajemen-jadwal-janji-temu-teaser-2.webp";
import teaser3 from "../../assets/manajemen-jadwal-janji-temu-teaser-3.webp";
import teaser4 from "../../assets/manajemen-jadwal-janji-temu-teaser-4.webp";
import teaser5 from "../../assets/manajemen-jadwal-janji-temu-teaser-5.webp";

const italicWords = [
  "check in",
  "real time",
  "hybrid",
  "smartphone",
  "end to end",
  "contactless",
  "platform",
  "booking",
];

function ItalicText({ text }) {
  const regex = new RegExp(`(${italicWords.join("|")})`, "gi");

  return (
    <>
      {text.split(regex).map((part, index) =>
        italicWords.some(
          (word) => word.toLowerCase() === part.toLowerCase()
        ) ? (
          <i key={index}>{part}</i>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}

function ManajemenJadwalJanjiTemuFeatureTeaser() {
  return (
    <section className="bg-primary">
      <Teaser
        preTitle=""
        title="Jadwalkan Janji Temu dengan Mudah dan Fleksibel"
        description={
          <ItalicText
            text="Tingkatkan kenyamanan pelanggan dengan sistem booking online yang memudahkan mereka menjadwalkan janji temu kapan saja. Melalui platform penjadwalan layanan digital, pelanggan dapat memesan, mengubah, atau membatalkan janji temu dengan mudah, sementara sistem otomatis mengirim pengingat jadwal untuk pengalaman layanan yang lebih efisien dan profesional."
          />
        }
        imageSrc={teaser1}
        imageAlt="Teaser Bebaskan Pelanggan Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={false}
      />

      <Teaser
        preTitle=""
        title="Kelola Kedatangan dan Check In dengan Mudah"
        description={
          <ItalicText
            text="Tingkatkan efisiensi layanan dengan sistem manajemen kedatangan dan check in online yang terintegrasi. Pelanggan dapat melakukan check in melalui tautan SMS atau email dan menerima tiket digital untuk menunggu secara nyaman tanpa antre. Sistem ini akan memberi notifikasi otomatis kepada staf, membantu mengurangi kerumunan, serta memastikan proses check in berjalan efisien, aman, dan profesional."
          />
        }
        imageSrc={teaser2}
        imageAlt="Teaser Kelola Kedatangan Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={false}
        disableButton={true}
      />

      <Teaser
        preTitle=""
        title="Dapatkan Wawasan Mendalam tentang Operasional Bisnis Anda"
        description={
          <ItalicText
            text="Manfaatkan kekuatan data dan analitik untuk memahami perilaku pelanggan serta kinerja cabang bisnis Anda. Dapatkan informasi akurat mengenai data janji temu, waktu tunggu, performa staf, dan umpan balik pelanggan secara real time. Dengan analisis tren layanan dan perkiraan permintaan, Anda dapat meningkatkan efisiensi operasional dan mengoptimalkan keputusan bisnis."
          />
        }
        imageSrc={teaser3}
        imageAlt="Teaser Business Intelligence Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />

      <Teaser
        preTitle=""
        title="Layanan Virtual Kapan Saja dan di Mana Saja"
        description={
          <ItalicText
            text="Berikan pelanggan kemudahan untuk mengakses layanan secara online melalui pertemuan virtual yang efisien dan aman. Pelanggan dapat menjadwalkan janji temu virtual, berinteraksi melalui video call atau chat, serta terhubung menggunakan platform meeting digital. Solusi ini mendukung layanan hybrid yang cepat, fleksibel, dan relevan dengan kebutuhan pelanggan masa kini."
          />
        }
        imageSrc={teaser4}
        imageAlt="Teaser Layanan Virtual Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={false}
        disableButton={true}
      />

      <Teaser
        preTitle=""
        title="Kelola Semua Layanan dalam Satu Sistem Terpadu"
        description={
          <ItalicText
            text="Sederhanakan operasional Anda dengan sistem manajemen jadwal janji temu terpusat yang mengatur alur pelanggan, check in, antrean, dan pelayanan dalam satu platform. Sistem ini mendukung proses end to end, memungkinkan transisi layanan online ke kunjungan langsung, serta mendukung layanan contactless berbasis smartphone."
          />
        }
        imageSrc={teaser5}
        imageAlt="Teaser Sistem Terpadu Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />
    </section>
  );
}

export default ManajemenJadwalJanjiTemuFeatureTeaser;
