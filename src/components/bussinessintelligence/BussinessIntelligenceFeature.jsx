import React from "react";

import FeatureCard from "../common/FeatureCard";
import PerformaBranch from "../../assets/icons/ic_performa-branch-business-intelligence.svg";
import PolaHarian from "../../assets/icons/ic_pola-harian-business-intelligence.svg";
import PerformaStaff from "../../assets/icons/ic_performa-staff-business-intelligence.svg";
import FeedbackPelangganDanNPS from "../../assets/icons/ic_feedback-pelanggan-dan-NPS-business-intelligence.svg";
import AnalisisJanjiTemu from "../../assets/icons/ic_analisis-janji-temu-business-intelligence.svg";
import AnalisisDistribusi from "../../assets/icons/ic_analisis-distribusi-business-intelligence.svg";
import AnalisisTren from "../../assets/icons/ic_analisis-tren-business-intelligence.svg";

const featureData = [
  {
    icon: PerformaBranch,
    title: (
      <>
        Performa <i>Branch</i>
      </>
    ),
    description:
      "Bandingkan cabang-cabang berbeda dari indikator kinerja utama (KPI) yang berbeda, seperti jumlah pelanggan yang tidak hadir dan waktu tunggu tingkat layanan.",
  },
  {
    icon: PolaHarian,
    title: "Pola Harian",
    description:
      "Pantau tren waktu kedatangan, kedatangan, dan pelayanan. Ideal untuk HR Manager dan staf, menemukan waktu kerja pada aktivitas yang berbeda.",
  },
  {
    icon: PerformaStaff,
    title: "Performa Staff",
    description:
      "Bandingkan waktu transaksi rata-rata (untuk layanan dan karyawan) dan berbagai metrik untuk menentukan kinerja kompetitif.",
  },
  {
    icon: FeedbackPelangganDanNPS,
    title: (
      <>
        <i>Feedback</i> Pelanggan dan NPS
      </>
    ),
    description:
      "Pahami apa yang mendorong pelanggan yang puas per pelanggan dan dapatkan nilai dari NPS (Net Promoter Score). Sesuaikan Metrik untuk mencerminkan batas waktu tunggu layanan Anda.",
  },
  {
    icon: AnalisisJanjiTemu,
    title: "Analisis Janji Temu",
    description:
      "Pelajari berapa banyak pelanggan yang datang untuk janji temu, berapa banyak pelanggan yang datang/walk-in, dan analisis waktu yang dihabiskan untuk layanan dan staf yang berbeda terkait kualitas.",
  },
  {
    icon: AnalisisDistribusi,
    title: "Analisis Distribusi Waktu Tunggu dan Waktu Transaksi",
    description:
      "Tentukan waktu tunggu dan waktu transaksi Anda yang sebenarnya, bukan dengan melihat rata-rata. Bandingkan metrik dengan tujuan di berbagai tingkat layanan.",
  },
  {
    icon: AnalisisTren,
    title: "Analisis Tren Waktu/Tanggal",
    description:
      "Analisis tingkat kesibukan, atau perubahan aktivitas antara periode yang berbeda. Temukan sub-wilayah dengan pengunjung yang paling banyak, dan kemungkinan pelanggan yang diabaikan untuk mengambil keputusan mengenai periode masa yang paling sibuk.",
  },
];

function BussinessIntelligenceFeature() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Gunakan Wawasan Data Untuk Mengambil Keputusan Terbaik Demi Layanan
            Pelanggan
          </h2>
          <p className="text-lg text-gray-600">
            Dengan akses mudah ke data dari setiap tahap perjalanan pelanggan,
            serta layanan pilihan untuk mengintegrasikan data lain seperti suku
            atau penjualan, Anda dapat meningkatkan efisiensi sambil membuat
            pelanggan semakin puas.
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

export default BussinessIntelligenceFeature;
