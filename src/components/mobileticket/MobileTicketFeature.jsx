import React from "react";

import FeatureCard from "../common/FeatureCard";
import AksesMudah from "../../assets/icons/ic_akses-mudah-mobile-ticket.svg";
import NotifikasiOtomatis from "../../assets/icons/ic_notifikasi-otomatis-mobile-ticket.svg";
import MonitirProsesAntrian from "../../assets/icons/ic_monitoring-proses-antrian-mobile-ticket.svg";
import BranchesBerlipat from "../../assets/icons/ic_branches-berlipat-mobile-ticket.svg";
import KetersediaanPelayanan from "../../assets/icons/ic_ketersediaan-pelayanan-mobile-ticket.svg";
import PreEntry from "../../assets/icons/ic_pre-entry-mobile-ticket.svg";
import UmpanBalik from "../../assets/icons/ic_umpan-balik-mobile-ticket.svg";
import PendaftaranJanjiTemu from "../../assets/icons/ic_pendaftaran-janji-temu-mobile-ticket.svg";
import MendukungBerbagaiBahasa from "../../assets/icons/ic_mendukung-berbagai-bahasa-mobile-ticket.svg";
import KustomisasiBranding from "../../assets/icons/ic_kustomisasi-branding-mobile-ticket.svg";
import Keamanan from "../../assets/icons/ic_keamanan-mobile-ticket.svg";
import VirtualMeeting from "../../assets/icons/ic_virtual-meeting-mobile-ticket.svg";
import KotakPesan from "../../assets/icons/ic_kotak-pesan-mobile-ticket.svg";
import EstimasiWaktuTunggu from "../../assets/icons/ic_estimasi-waktu-tunggu-mobile-ticket.svg";
import DelayVisit from "../../assets/icons/ic_delay-visit-mobile-ticket.svg";
import LacakPenggunaan from "../../assets/icons/ic_lacak-penggunaan-mobile-ticket.svg";

const italicizeText = (text) => {
  const keywords = [
    "real time",
    "real-time",
    "walkaways",
    "right to left",
    "rtl",
    "branding",
    "brand",
    "mobile",
  ];

  const regex = new RegExp(`(${keywords.join("|")})`, "gi");

  return text.split(regex).map((part, index) =>
    keywords.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
      <i key={index}>{part}</i>
    ) : (
      part
    )
  );
};

const featureData = [
  {
    icon: AksesMudah,
    title: italicizeText("Akses Mudah"),
    description: italicizeText(
      "Gabung antrean melalui SMS, QR Code, atau tautan web."
    ),
  },
  {
    icon: NotifikasiOtomatis,
    title: italicizeText("Notifikasi Otomatis"),
    description: italicizeText(
      "Dapatkan update status antrean melalui SMS."
    ),
  },
  {
    icon: MonitirProsesAntrian,
    title: italicizeText("Monitoring Proses Antrian"),
    description: italicizeText("Pantau proses antrean secara real-time."),
  },
  {
    icon: BranchesBerlipat,
    title: italicizeText("Branches Berlipat"),
    description: italicizeText(
      "Temukan dan bergabung pada antrean virtual di cabang terdekat."
    ),
  },
  {
    icon: KetersediaanPelayanan,
    title: italicizeText("Ketersediaan Pelayanan"),
    description: italicizeText(
      "Lihat semua layanan yang tersedia dan pelanggan yang sedang menunggu di cabang."
    ),
  },
  {
    icon: PreEntry,
    title: italicizeText("Pre-Entry"),
    description: italicizeText(
      "Bergabunglah dengan antrean virtual sebelum tiba di cabang."
    ),
  },
  {
    icon: UmpanBalik,
    title: italicizeText("Umpan Balik"),
    description: italicizeText(
      "Dapatkan form umpan balik setelah layanan selesai."
    ),
  },
  {
    icon: PendaftaranJanjiTemu,
    title: italicizeText("Pendaftaran Janji Temu"),
    description: italicizeText(
      "Daftar dan antre untuk janji temu yang telah dijadwalkan."
    ),
  },
  {
    icon: MendukungBerbagaiBahasa,
    title: italicizeText("Mendukung Berbagai Bahasa"),
    description: italicizeText(
      "Tersedia dalam berbagai bahasa dan RTL (Right to left)."
    ),
  },
  {
    icon: KustomisasiBranding,
    title: italicizeText("Kustomisasi Branding"),
    description: italicizeText(
      "Kostumisasi sesuai dengan brand, warna kustom, text, dan logo."
    ),
  },
  {
    icon: Keamanan,
    title: italicizeText("Keamanan"),
    description: italicizeText(
      "Verifikasi pengguna tiket mobile dengan kata sandi sekali pakai, atur geofence, dan fitur lainnya."
    ),
  },
  {
    icon: VirtualMeeting,
    title: italicizeText("Virtual Meetings"),
    description: italicizeText(
      "Laksanakan rapat virtual dengan mengintegrasikan Microsoft Teams dan Zoom."
    ),
  },
  {
    icon: KotakPesan,
    title: italicizeText("Kotak Pesan"),
    description: italicizeText(
      "Tambahkan pop-up yang mengarah ke formulir, survei, video, atau halaman lain yang ingin Anda bagikan."
    ),
  },
  {
    icon: EstimasiWaktuTunggu,
    title: italicizeText("Estimasi Waktu Tunggu"),
    description: italicizeText(
      "Berikan pelanggan pemahaman yang lebih baik tentang berapa lama mereka akan menunggu dalam antrean."
    ),
  },
  {
    icon: DelayVisit,
    title: italicizeText("Delay Visit"),
    description: italicizeText(
      "Berikan pelanggan kemampuan untuk mempertahankan posisi mereka dalam antrean dengan menambahkan waktu tambahan."
    ),
  },
  {
    icon: LacakPenggunaan,
    title: italicizeText("Lacak Penggunaan"),
    description: italicizeText(
      "Pantau aktivitas tiket mobile secara real-time dengan Google Analytics."
    ),
  },
];

function MobileTicketFeature() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {italicizeText("Fitur Unggulan")}
          </h2>
          <p className="text-lg text-gray-600">
            {italicizeText("Fitur Unggulan Mobile Ticketing")}
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

export default MobileTicketFeature;
