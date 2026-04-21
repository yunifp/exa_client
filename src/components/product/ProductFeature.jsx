import React from "react";
import FeatureCard from "../common/FeatureCard";

import ManajemenAntrean from "../../assets/icons/ic_manajemen-antrean-product.svg";
import ManajemenJadwalJanjiTemu from "../../assets/icons/ic_manajemen-jadwal-janji-temu-product.svg";
import AntrianVirtual from "../../assets/icons/ic_antrian-virtual-product.svg";
import AnalisaDanLaporan from "../../assets/icons/ic_analisis-laporan-product.svg";
import RapatVirtual from "../../assets/icons/ic_rapat-virtual-product.svg";
import Pesan from "../../assets/icons/ic_pesan-product.svg";
import FeedbackPengguna from "../../assets/icons/ic_feedback-pengguna-product.svg";
import Integrasi from "../../assets/icons/ic_integrasi-product.svg";

const featureData = [
  {
    icon: ManajemenAntrean,
    title: "Manajemen Antrean",
    description:
      "Ciptakan pengalaman menunggu yang terstruktur dan nyaman dengan kios pendaftaran, layar informasi, serta pengumuman suara.",
  },
  {
    icon: ManajemenJadwalJanjiTemu,
    title: "Manajemen Jadwal Janji Temu",
    description: (
      <>
        Izinkan tim dan pelanggan Anda untuk dengan mudah menjadwalkan janji
        temu, menerima pengingat, dan melakukan <i>check-in</i> saat tiba.
      </>
    ),
  },
  {
    icon: AntrianVirtual,
    title: "Antrian Virtual",
    description:
      "Izinkan pelanggan Anda untuk mengantri secara virtual menggunakan ponsel mereka untuk mengakses sistem tiket elektronik Anda.",
  },
  {
    icon: AnalisaDanLaporan,
    title: "Analisa dan laporan",
    description: (
      <>
        Buat keputusan yang lebih baik berdasarkan data, tanggapi data{" "}
        <i>real-time</i>, tinjau laporan detail, dan temukan potensi dari nilai
        tersembunyi menggunakan alat favorit Anda.
      </>
    ),
  },
  {
    icon: RapatVirtual,
    title: "Rapat Virtual",
    description:
      "Tawarkan pertemuan virtual dan layani pelanggan Anda secara jarak jauh melalui Microsoft Teams atau Zoom.",
  },
  {
    icon: Pesan,
    title: "Pesan",
    description:
      "Penuhi harapan pelanggan Anda dengan selalu memberitahukan mereka tentang setiap langkah dalam perjalanan mereka.",
  },
  {
    icon: FeedbackPengguna,
    title: (
      <>
        <i>Feedback</i> Pengguna
      </>
    ),
    description:
      "Buat dan kirimkan survei umpan balik yang ramah pengguna kepada pelanggan setelah kunjungan mereka untuk mengumpulkan wawasan unik tentang kebutuhan pelanggan Anda.",
  },
  {
    icon: Integrasi,
    title: "Integrasi",
    description:
      "Maksimalkan nilai investasi Anda dengan integrasi yang fleksibel ke dalam aplikasi Anda.",
  },
];

function ProductFeature() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-7xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Fitur Unggulan
          </h2>
          <p className="text-lg text-gray-600">
            Dengan solusi modular dan fleksibelnya, bisnis dan organisasi dapat
            mengakses solusi yang kuat untuk menyediakan pengalaman pelanggan
            yang <br />
            sempurna sesuai dengan kebutuhan Anda.
          </p>
        </div>

        <div className="px-10 xl:px-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductFeature;
