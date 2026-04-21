import React from "react";

import FeatureCard from "../common/FeatureCard";
import PenjadwalanJanjitemu from "../../assets/icons/ic_penjadwalan-janji-temu.svg";
import KonfirmasiOtomatis from "../../assets/icons/ic_konfirmasi-otomatis.svg";
import CheckInMandiri from "../../assets/icons/ic_pendaftaran-mandiri.svg";
import RapatVirtual from "../../assets/icons/ic_rapat-virtual.svg";
import DatadanLaporanRealTime from "../../assets/icons/ic_analisa-dan-laporan.svg";
import ManajemenPerjalanan from "../../assets/icons/ic_manajemen-perjalanan.svg";

const italicWords = [
  "check in",
  "real time",
  "hybrid",
  "smartphone",
  "end to end",
  "contactless",
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

const featureData = [
  {
    icon: PenjadwalanJanjitemu,
    title: "Penjadwalan Janji Temu",
    description: (
      <ItalicText text="Optimalkan jadwal layanan dengan sistem janji temu online. Izinkan pelanggan memesan via online atau telepon untuk alur kerja yang lebih efisien dan antrean kunjungan langsung yang lebih singkat." />
    ),
  },
  {
    icon: KonfirmasiOtomatis,
    title: "Konfirmasi Otomatis",
    description: (
      <ItalicText text="Hemat waktu dengan konfirmasi dan pengingat otomatis. Kirim notifikasi pemesanan, konfirmasi, serta pengingat melalui SMS atau email secara otomatis untuk mencegah pembatalan dan meningkatkan kepuasan pelanggan." />
    ),
  },
  {
    icon: CheckInMandiri,
    title: "Check In Mandiri",
    description: (
      <ItalicText text="Permudah pelanggan dengan fitur check in mandiri. Pelanggan dapat melakukan check in sendiri melalui smartphone atau kios layanan mandiri untuk pengalaman yang cepat dan praktis tanpa antre." />
    ),
  },
  {
    icon: RapatVirtual,
    title: "Rapat Virtual",
    description: (
      <ItalicText text="Berikan layanan terbaik tanpa batasan lokasi. Lakukan pertemuan virtual melalui video, chat, atau platform digital lainnya untuk memudahkan pelanggan mendapatkan layanan di mana pun mereka berada." />
    ),
  },
  {
    icon: DatadanLaporanRealTime,
    title: "Data dan Laporan Real Time",
    description: (
      <ItalicText text="Pantau kinerja bisnis Anda secara real time. Dapatkan wawasan akurat melalui dashboard analitik dan laporan canggih untuk meningkatkan efisiensi, mengelola sumber daya, serta memprediksi kebutuhan pelanggan." />
    ),
  },
  {
    icon: ManajemenPerjalanan,
    title: "Manajemen Perjalanan",
    description: (
      <ItalicText text="Kelola pengalaman pelanggan end to end. Sistem terintegrasi mendukung alur layanan hybrid dan contactless untuk pengalaman pelanggan yang mulus, efisien, dan modern." />
    ),
  },
];

function ManajemenJadwalJanjiTemuFeature() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Fitur Utama
          </h2>
          <p className="text-lg text-gray-600">
            Sistem Manajemen Jadwal Janji Temu
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

export default ManajemenJadwalJanjiTemuFeature;
