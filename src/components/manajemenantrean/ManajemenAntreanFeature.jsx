import React from "react";

import FeatureCard from "../common/FeatureCard";
import PemesananJadwalIcon from "../../assets/icons/ic_pemesanan-jadwal.svg";
import AntrianVirtual from "../../assets/icons/ic_antrian-virtual.svg";
import PendaftaranMandiri from "../../assets/icons/ic_pendaftaran-mandiri.svg";
import PemberitahuanOtomatis from "../../assets/icons/ic_pemberitahuan-otomatis.svg";
import AnalisaDanLaporan from "../../assets/icons/ic_analisa-dan-laporan.svg";
import FeedbackPelanggan from "../../assets/icons/ic_feedback-pelanggan.svg";

const italicizeKeywords = (text) => {
  const keywords = ["check-in", "check in", "real-time"];
  const regex = new RegExp(`(${keywords.join("|")})`, "gi");
  return text.split(regex).map((part, index) =>
    keywords.map(k => k.toLowerCase()).includes(part.toLowerCase())
      ? <i key={index}>{part}</i>
      : part
  );
};

const featureData = [
  {
    icon: PemesananJadwalIcon,
    title: "Pemesanan Jadwal",
    description:
      "Permudah pelanggan membuat janji temu kapan saja, di mana saja. Ini memungkinkan Anda menyeimbangkan alur kunjungan dan memasangkan staf yang tepat dengan pelanggan.",
  },
  {
    icon: AntrianVirtual,
    title: "Antrian Virtual",
    description:
      "Dengan sistem antrian virtual, pelanggan dapat menunggu di mana saja, memantau kemajuan mereka secara real-time, dan menerima pemberitahuan saat giliran mereka untuk dilayani.",
  },
  {
    icon: PendaftaranMandiri,
    title: "Pendaftaran Mandiri",
    description:
      "Ketika pelanggan tiba, mereka dapat melakukan check in dengan cepat melalui kios layanan mandiri, perangkat seluler, atau resepsionis.",
  },
  {
    icon: PemberitahuanOtomatis,
    title: "Pemberitahuan Otomatis",
    description:
      "Berikan pelanggan informasi waktu tunggu terkini, baik melalui ponsel mereka maupun di layar digital.",
  },
  {
    icon: AnalisaDanLaporan,
    title: "Analisa Dan Laporan",
    description:
      "Dapatkan wawasan data (seperti waktu tunggu & kinerja staf) untuk mengoptimalkan operasional dan meningkatkan pengalaman pelanggan secara berkelanjutan.",
  },
  {
    icon: FeedbackPelanggan,
    title: "Feedback Pelanggan",
    description:
      "Dapatkan umpan balik pelanggan dengan survei online yang cepat dan ramah pengguna. Rating dalam hitungan detik dari pelanggan memberi Anda wawasan unik untuk menyempurnakan layanan.",
  },
];

function ManajemenAntreanFeature() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Fitur Unggulan
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
              title={feature.title}
              description={italicizeKeywords(feature.description)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ManajemenAntreanFeature;
