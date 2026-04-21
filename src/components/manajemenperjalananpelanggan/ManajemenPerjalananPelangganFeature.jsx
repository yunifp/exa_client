import React from "react";

import FeatureCard from "../common/FeatureCard";
import PemesananJadwal from "../../assets/icons/ic_pemesanan-jadwal.svg";
import ManajemenAntrian from "../../assets/icons/ic_pendaftaran-mandiri.svg";
import AnalisaDanLaporan from "../../assets/icons/ic_analisa-dan-laporan.svg";
import FeedbackPelanggan from "../../assets/icons/ic_feedback-pelanggan.svg";

const italicize = (text) => {
  const keywords = [
    "real time",
    "real-time",
    "touch point",
    "touchpoint",
    "benchmarking",
    "insight",
    "hybrid",
    "mobile",
  ];

  const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");

  return text.split(regex).map((part, index) =>
    keywords.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
      <span key={index} className="italic">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const featureData = [
  {
    icon: PemesananJadwal,
    title: "Manajemen Jadwal Janji Temu",
    description:
      "Pelanggan dapat menjadwalkan kunjungan online untuk pemerataan beban layanan.",
  },
  {
    icon: ManajemenAntrian,
    title: "Manajemen Antrian",
    description:
      "Optimalkan alur dan kurangi waktu tunggu dengan manajemen antrian terpusat.",
  },
  {
    icon: PemesananJadwal,
    title: "Antrian Virtual",
    description:
      "Pelanggan bisa menunggu dari mana saja dengan Mobile Ticket dan notifikasi real-time.",
  },
  {
    icon: PemesananJadwal,
    title: "Self Check-in",
    description:
      "Check-in mandiri via mobile atau kiosk untuk mengurangi beban tugas staf.",
  },
  {
    icon: AnalisaDanLaporan,
    title: "Analisa dan laporan",
    description:
      "Analitik dan laporan real-time untuk keputusan bisnis yang lebih akurat.",
  },
  {
    icon: PemesananJadwal,
    title: "Rapat Virtual",
    description:
      "Layani pelanggan secara remote dan dukung layanan hybrid fisik + digital.",
  },
  {
    icon: PemesananJadwal,
    title: "Layanan SMS",
    description:
      "Memberi update otomatis ke pelanggan melalui SMS atau email sebelum waktu layanan mereka.",
  },
  {
    icon: PemesananJadwal,
    title: "Staf Application",
    description:
      "Memberikan informasi real-time kepada staf agar lebih efisien dan meningkatkan kualitas layanan.",
  },
  {
    icon: FeedbackPelanggan,
    title: "Feedback Pelanggan",
    description:
      "Kirim survei otomatis setelah layanan selesai untuk mendapatkan umpan balik pelanggan secara cepat.",
  },
];

function ManajemenPerjalananPelangganFeature() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h3 className="text-sm font-semibold uppercase text-accent">
            Fitur Utama
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Manajemen Perjalanan Pelanggan
          </h2>
          <p className="text-lg text-gray-600">
            Fitur Unggulan Manajemen Antrean Kami
          </p>
        </div>

        <div className="px-10 xl:px-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={italicize(feature.title)}
              description={italicize(feature.description)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ManajemenPerjalananPelangganFeature;
