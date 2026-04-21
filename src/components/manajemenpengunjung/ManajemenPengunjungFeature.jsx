import React from "react";
import FeatureCard from "../common/FeatureCard";

import PemesananIcon from "../../assets/icons/ic_sistem-pemesanan-pengunjung-manajemen-pengunjung.svg";
import SistemPendaftaranPengunjung from "../../assets/icons/ic_sistem-pendaftaran-pengunjung-manajemen-pengunjung.svg";
import AntrianVirtual from "../../assets/icons/ic_antrian-virtual-manajemen-pengunjung.svg";
import DigitalSignage from "../../assets/icons/ic_digital-signage-manajemen-pengunjung.svg";
import PertemuanVirtual from "../../assets/icons/ic_pertemuan-virtual-manajemen-pengunjung.svg";
import AnalisaDanLaporan from "../../assets/icons/ic_analisisa-dan-laporan-manajemen-pengunjung.svg";
import LayananPesan from "../../assets/icons/ic_layanan-pesan-manajemen-pengunjung.svg";
import AplikasiKaryawan from "../../assets/icons/ic_aplikasi-karyawan-manajemen-pengunjung.svg";

const featureData = [
  {
    icon: PemesananIcon,
    title: "Sistem Pemesanan Pengunjung",
    description:
      "Beri pengunjung opsi memesan, mengubah jadwal, atau membatalkan janji. Ini mengurangi waktu tunggu, menekan ketidakhadiran, dan meningkatkan pengalaman pelanggan.",
  },
  {
    icon: SistemPendaftaranPengunjung,
    title: "Sistem Pendaftaran Pengunjung",
    description:
      "Izinkan pelanggan untuk melakukan pendaftaran melalui kios layanan mandiri, atau menggunakan <i>smartphone</i> mereka.",
  },
  {
    icon: AntrianVirtual,
    title: "Antrian Virtual",
    description:
      "Izinkan pengunjung untuk menunggu di mana saja sambil memantau perkembangan <i>real-time</i> melalui aplikasi Mobile Ticket di ponsel mereka.",
  },
  {
    icon: DigitalSignage,
    title: "Digital Signage",
    description:
      "Bantu pengunjung menavigasi area di lokasi dan tetap terinformasi sepanjang kunjungan dengan pembaruan dan informasi melalui papan informasi digital.",
  },
  {
    icon: PertemuanVirtual,
    title: "Pertemuan Virtual Untuk Layanan Jarak Jauh",
    description:
      "Sistem manajemen pengunjung Qmatic memungkinkan pengunjung untuk mengatur pertemuan virtual ketika mereka tidak dapat hadir secara langsung di kantor.",
  },
  {
    icon: AnalisaDanLaporan,
    title: "Analisa Dan Laporan",
    description:
      "Gunakan BI Qmatic untuk memantau operasional <i>real-time</i>, menganalisis kinerja staf, dan menemukan area perbaikan.",
  },
  {
    icon: LayananPesan,
    title: "Layanan Pesan",
    description:
      "Bantu pengunjung mempersiapkan kunjungan dengan mengirimkan pesan notifikasi otomatis.",
  },
  {
    icon: AplikasiKaryawan,
    title: "Aplikasi Untuk Karyawan",
    description:
      "Aplikasi karyawan kami memungkinkan staf Anda melayani dan memanggil pelanggan langsung dari <i>smartphone</i> atau tablet.",
  },
];

function ManajemenPengunjungFeature() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Fitur Utama
          </h2>
          <p className="text-lg text-gray-600">
            Fitur Utama Sistem Manajemen Pengunjung Kami.
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

export default ManajemenPengunjungFeature;
