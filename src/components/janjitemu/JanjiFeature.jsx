import React from "react";

import FeatureCard from "../common/FeatureCard";
import PeranDanIzinPengguna from "../../assets/icons/ic_peran-dan-izin-pengguna-janji-temu.svg";
import AnalisaDanLaporan from "../../assets/icons/ic_analisis-dan-laporan-janji-temu.svg";
import PengigatDanNotifikasi from "../../assets/icons/ic_pengingat-dan-notifikasi-janji-temu.svg";
import Keamanan from "../../assets/icons/ic_keamanan-janji-temu.svg";
import SSO from "../../assets/icons/ic_SSO-janji-temu.svg";
import IntegrasiKalender from "../../assets/icons/ic_integrasi-kalender-janji-temu.svg";
import RapatVirtual from "../../assets/icons/ic_rapat-virtual-janji-temu.svg";
import PerencanaanKapasitasSumberDaya from "../../assets/icons/ic_perencanaan-kapasitas-sumber-daya-janji-temu.svg";
import Compilance from "../../assets/icons/ic_compilance-janji-temu.svg";
import PenjadwalanMultiSumberDaya from "../../assets/icons/ic_penjadwalan-multi-sumber-daya-janji-temu.svg";
import PemesananMultiLayanan from "../../assets/icons/ic_pemesanan-multi-layanan-janji-temu.svg";
import DukunganMultiBahasa from "../../assets/icons/ic_dukungan-multi-bahasa-janji-temu.svg";
import DukunganMultiZonaWaktu from "../../assets/icons/ic_dukungan-multi-zona-waktu-janji-temu.svg";
import Kustomisasi from "../../assets/icons/ic_kustomisasi-janji-temu.svg";
import APIJanjiTemu from "../../assets/icons/ic_api-janji-temu.svg";

const featureData = [
  {
    icon: PeranDanIzinPengguna,
    title: "Peran dan Izin Pengguna",
    description:
      "Kelola akses bertahap yang memungkinkan Anda memutuskan siapa yang dapat melihat dan siapa yang dapat melakukan apa saja.",
  },
  {
    icon: AnalisaDanLaporan,
    title: "Analisa dan laporan",
    description: (
      <>
        Dapatkan wawasan berharga (<i>real-time</i> maupun historis). Cetak dan
        ekspor data dalam berbagai format.
      </>
    ),
  },
  {
    icon: PengigatDanNotifikasi,
    title: "Pengingat dan Notifikasi",
    description:
      "Komunikasi dua arah yang tepat dan penting. Kirim pengingat otomatis kepada pelanggan untuk mengurangi angka tidak hadir dan laporan.",
  },
  {
    icon: Keamanan,
    title: "Keamanan",
    description:
      "Qmatic Bereskan ISO 27001, memastikan bahwa data pelanggan dan bisnis Anda terenkripsi saat disimpan maupun saat dikirim.",
  },
  {
    icon: SSO,
    title: (
      <>
        <i>Single Sign-On</i> (SSO)
      </>
    ),
    description:
      "Integrasi SSO melalui penyedia identitas (AD, Okta/ID, SAML, dll.) mempermudah manajemen masuk dan izin staf di organisasi Anda.",
  },
  {
    icon: IntegrasiKalender,
    title: "Integrasi Kalender",
    description: "Sinkronisasi otomatis dengan kalender Outlook Anda.",
  },
  {
    icon: RapatVirtual,
    title: "Rapat Virtual",
    description:
      "Layanan pelanggan dapat dilakukan melalui Microsoft Teams atau Zoom.",
  },
  {
    icon: PerencanaanKapasitasSumberDaya,
    title: "Perencanaan Kapasitas Sumber Daya",
    description:
      "Lacak ketersediaan waktu staf, alokasikan sumber daya yang tepat dan akurat, serta tentukan jadwal layanan untuk mengelola beban operasional.",
  },
  {
    icon: Compilance,
    title: (
      <>
        <i>Compliance</i>
      </>
    ),
    description: "Perangkat keras Qmatic mematuhi WCAG 2.1 level AA dan GDPR.",
  },
  {
    icon: PenjadwalanMultiSumberDaya,
    title: (
      <>
        Penjadwalan <i>Multi</i>-Sumber Daya
      </>
    ),
    description:
      "Kelola lebih dari satu sumber daya, contohnya gabungan antara staf, ruangan, dan peralatan untuk satu program.",
  },
  {
    icon: PemesananMultiLayanan,
    title: (
      <>
        Pemesanan <i>Multi</i>-Layanan
      </>
    ),
    description:
      "Izinkan pelanggan dan staf reservasi waktu untuk beberapa layanan dalam sekali janji temu.",
  },
  {
    icon: DukunganMultiBahasa,
    title: (
      <>
        Dukungan <i>Multi</i>-Bahasa
      </>
    ),
    description:
      "Aplikasi dan halaman pemesanan kami tersedia dalam bahasa Inggris, Spanyol, Prancis, Belanda dan Jerman.",
  },
  {
    icon: DukunganMultiZonaWaktu,
    title: (
      <>
        Dukungan <i>Multi</i>-Zona Waktu
      </>
    ),
    description:
      "Pastikan penjadwalan janji temu yang akurat untuk setiap lokasi dan pelanggan Anda di seluruh dunia.",
  },
  {
    icon: Kustomisasi,
    title: "Kustomisasi",
    description: (
      <>
        Tambahkan logo, warna, dan tema Anda ke halaman <i>booking</i> dan tiket
        antrean Anda.
      </>
    ),
  },
  {
    icon: APIJanjiTemu,
    title: "API Yang Terstruktur",
    description:
      "Integrasikan sistem manajemen antrean janji temu kami hanya dengan beberapa baris kode.",
  },
];

function JanjiFeature() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Fitur Unggulan
          </h2>
          <p className="text-lg text-gray-600">
            Perangkat Lunak Pengelolaan Janji Temu
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

export default JanjiFeature;
