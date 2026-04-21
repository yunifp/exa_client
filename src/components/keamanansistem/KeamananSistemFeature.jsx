import React from "react";
import FeatureCard from "../common/FeatureCard";

import ProteksiData from "../../assets/icons/ic_proteksi-data-keamanan-sistem.svg";
import KontrolAkses from "../../assets/icons/ic_kontrol-akses-keamanan-sistem.svg";
import KeamananAplikasi from "../../assets/icons/ic_kemanan-aplikasi-keamanan-sistem.svg";
import ArsikteturTangguh from "../../assets/icons/ic_arsitektur-tangguh-keamnan-sistem.svg";
import DukunganDanPemantauan from "../../assets/icons/ic_dukungan-dan-pemantauan-proaktif-keamanan-sistem.svg";

const featureData = [
  {
    icon: ProteksiData,
    title: "Proteksi Data",
    description: (
      <>
        <p className="text-start">
          Data dienkripsi sepenuhnya saat disimpan maupun ditransmisikan. Qmatic
          menggunakan TLS untuk mengamankan semua komunikasi ke dan dari
          <i> platform</i> kami.
        </p>
        <ul className="list-disc pl-5 text-start">
          <li>
            Data sensitif dienkripsi menggunakan algoritma standar industri
            tingkat tinggi.
          </li>
          <li>
            Lingkungan <i>multi-tenant</i> kami menjamin data Anda tetap terpisah dan
            hanya dapat diakses oleh pihak berwenang.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: KontrolAkses,
    title: "Kontrol Akses",
    description: (
      <>
        <p className="text-start">
          <i>Platform</i> Qmatic dapat terintegrasi mulus dengan penyedia SSO Anda,
          atau Anda bisa menggunakan repositori pengguna kami. Anda dapat
          mendelegasikan izin dan peran untuk memastikan setiap pengguna hanya
          mengakses fitur dan data yang sesuai dengan tingkat akses mereka.
        </p>
      </>
    ),
  },
  {
    icon: KeamananAplikasi,
    title: "Keamanan Aplikasi",
    description: (
      <>
        <p className="text-start">
          Kami menjamin produk aman berkualitas tinggi melalui SDLC ketat yang
          teruji, serta diverifikasi oleh auditor eksternal melalui tes
          penetrasi dan audit keamanan tahunan.
        </p>
      </>
    ),
  },
  {
    icon: ArsikteturTangguh,
    title: "Aksitektur Tangguh",
    description: (
      <>
        <p className="text-start">
          <i>Platform</i> kami dirancang agar skalabel dan andal, dibangun dengan
          standar industri dan berjalan di cloud terkemuka. Ini menjamin
          ketersediaan tinggi dan redundansi, dengan prioritas pada keandalan,
          skalabilitas, dan keamanan.
        </p>
      </>
    ),
  },
  {
    icon: DukunganDanPemantauan,
    title: "Dukungan dan Pemantauan Proaktif",
    description: (
      <>
        <p className="text-start">
          Kami telah menerapkan sistem pemantauan untuk memastikan ketersediaan
          dan kinerja layanan, tim dukungan kami secara proaktif diberitahu
          tentang setiap gangguan layanan atau aktivitas yang tidak biasa.
        </p>
      </>
    ),
  },
];

function KeamananSistemFeature() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Fondasi Keamanan untuk Skala Enterprise
          </h2>
          <p className="text-lg text-gray-600">
            <i>Platform</i> kami tidak hanya dirancang untuk fungsionalitas, tetapi
            dibangun di atas fondasi keamanan berlapis dan arsitektur yang
            tangguh. Kami memastikan data Anda terlindungi dan layanan Anda
            berjalan tanpa henti, sehingga Anda dapat fokus pada hal terpenting:
            pelanggan Anda.
          </p>
        </div>
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Fitur Unggulan
          </h2>
          <p className="text-lg text-gray-600">
            Fitur Unggulan Keamanan Sistem Kami.
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

export default KeamananSistemFeature;
