import React from "react";

import FeatureCard from "../common/FeatureCard";
import PercepatLayanan from "../../assets/icons/ic_percepat-layanan-pengumuman-suara-otomatis.svg";
import AreaTungguPengumuman from "../../assets/icons/ic_area-tunggu-pengumuman-suara-otomatis.svg";
import BantuPelanggan from "../../assets/icons/ic_bantu-pelanggan-pengumuman-suara-otomatis.svg";
import PengumumanMultiBahasa from "../../assets/icons/ic_pengumuman-multi-bahasa-pengumuman-suara-otomatis.svg";
import LingkunganLayanan from "../../assets/icons/ic_lingkungan-layanan-pengumuman-suara-otomatis.svg";
import PengumumanInstan from "../../assets/icons/ic_pengumuman-secara-instan-pengumuman-suara-otomatis.svg";
import AITextToSpeech from "../../assets/icons/ic_AI-text-to-speech-pengumuman-suara-otomatis.svg";

const featureData = [
  {
    icon: PercepatLayanan,
    title: "Percepat Layanan Anda",
    description:
      "Percepat proses pelayanan dengan mengumumkan nomor konter dan tiket saat memanggil pelanggan — menghemat waktu Anda dan pelanggan.",
  },
  {
    icon: AreaTungguPengumuman,
    title: "Jadikan Area Tunggu Anda Mudah Diakses",
    description:
      "Promosikan lingkungan layanan yang mudah diakses dan inklusif bagi individu dengan keterbatasan pendengaran dan penglihatan.",
  },
  {
    icon: BantuPelanggan,
    title: "Bantu pelanggan bernavigasi di dalam lokasi Anda",
    description:
      "Tingkatkan penunjuk arah (wayfinding) dan alur pelanggan dengan membantu pelanggan pergi ke tempat layanan yang tepat.",
  },
  {
    icon: PengumumanMultiBahasa,
    title: "Sampaikan pengumuman multibahasa",
    description:
      "Pastikan semua pelanggan Anda mendapatkan informasi yang mereka butuhkan dengan pengumuman dalam bahasa kedua.",
  },
  {
    icon: LingkunganLayanan,
    title: "Tingkatkan lingkungan layanan Anda",
    description:
      "Kurangi ketidakpastian dan keraguan pelanggan di area tunggu Anda, turunkan tingkat stres bagi pelanggan dan karyawan.",
  },
  {
    icon: PengumumanInstan,
    title: "Buat pengumuman secara instan",
    description:
      "Hasilkan pengumuman suara Anda sendiri dengan Qmatic Text-to-speech. Pilih dari beragam suara pria dan wanita di lebih dari 50 bahasa",
  },
  {
    icon: AITextToSpeech,
    title: (
      <>
        <p>
          Kurangi biaya dengan AI <i>Text-to-Speech</i>
        </p>
      </>
    ),
    description:
      "urangi biaya yang terkait dengan perekaman atau penambahan pengumuman baru dengan teknologi AI Text-to-Speech.",
  },
];

function PengumumanSuaraOtomatisFeature() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Mengapa Pengumuman Suara?
          </h2>
          <p className="text-lg text-gray-600">
            Dapatkan fleksibilitas penuh untuk membuat pesan secara instan dan
            memandu pelanggan dengan jelas, sekaligus mengoptimalkan biaya
            operasional Anda.
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

export default PengumumanSuaraOtomatisFeature;
