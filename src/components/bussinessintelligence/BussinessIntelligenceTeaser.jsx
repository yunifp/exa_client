import React from "react";

import Teaser from "../common/Teaser";
import teaser1 from "../../assets/bussiness-intelligence-teaser-1.webp";
import teaser2 from "../../assets/bussiness-intelligence-teaser-2.webp";
import teaser3 from "../../assets/bussiness-intelligence-teaser-3.webp";

function BussinessIntelligenceTeaser() {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6 mb-8 text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Dapatkan nilai maksimal dari data perjalanan pelanggan Anda
        </h2>
        <p className="text-lg text-gray-600">
          Dapatkan kendali penuh atas kinerja layanan Anda melalui dasbor{" "}
          <em>real-time</em> Exaque, yang menyajikan data performa terkini
          sekaligus historis. Untuk analisis yang lebih mendalam, integrasikan
          data ini secara mulus dengan alat BI yang sudah Anda gunakan melalui
          Data Connect API. Ini memungkinkan Anda menggali wawasan strategis
          untuk mengambil keputusan yang tepat untuk mengelola biaya,
          meningkatkan penjualan, mengoptimalkan kinerja staf, maupun
          menyempurnakan pengalaman pelanggan Anda.
        </p>
      </div>

      <Teaser
        preTitle={
          <>
            Dasbor <em>Real-Time</em>
          </>
        }
        title={
          <>
            Pantau operasi Anda secara <em>real-time</em>
          </>
        }
        description={
          <>
            <p>
              Semua data yang Anda butuhkan dalam satu dasbor, sehingga Anda
              dapat dengan cepat mengetahui kinerja cabang Anda, termasuk:
            </p>
            <ul className="list-disc list-outside pl-5">
              <li>Waktu tunggu rata-rata</li>
              <li>Jumlah pelanggan yang dilayani</li>
              <li>Pelanggan yang tidak hadir</li>
              <li>Pelanggan yang menunggu</li>
              <li>Waktu transaksi rata-rata</li>
            </ul>
          </>
        }
        imageSrc={teaser1}
        imageAlt="Dashboard Real-Time"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={false}
        disableButton={true}
      />

      <Teaser
        preTitle="Laporan"
        title="Buat laporan yang komprehensif"
        description={
          <ul className="list-disc list-outside pl-5">
            <li>Buat laporan tentang metrik kinerja terpenting Anda</li>
            <li>
              Perbaiki proses pelaporan untuk manajer dan tim, memastikan akses
              yang lancar ke data yang diperlukan.
            </li>
            <li>
              Semua laporan dapat diunduh dalam format PDF, CSV, atau XLSX.
            </li>
            <li>
              Jadwalkan laporan dan terima semua data Anda langsung ke email
              Anda—harian, mingguan, atau bulanan.
            </li>
          </ul>
        }
        imageSrc={teaser2}
        imageAlt="Buat laporan yang komprehensif"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />

      <Teaser
        preTitle="Koneksi Data"
        title="Integrasikan dan analisis data secara fleksibel menggunakan alat BI pilihan Anda."
        description={
          <>
            <ul className="list-disc list-outside pl-5">
              <li>
                Buka potensi wawasan paling berharga Anda dengan Data Connect
                API:
              </li>
              <li>Gunakan alat BI favorit Anda seperti Power BI</li>
              <li>
                Integrasikan dengan mulus ke sistem dan sumber data lain untuk
                mengungkap nilai tersembunyi
              </li>
              <li>
                Impor dengan mudah lebih dari 70 titik data dari{" "}
                <em>platform</em> Qmatic
              </li>
            </ul>
          </>
        }
        imageSrc={teaser3}
        imageAlt="Koneksi Data"
        buttonText="Selengkapnya"
        buttonLink="/integrasi"
        imageOnRight={false}
        disableButton={false}
      />
    </section>
  );
}

export default BussinessIntelligenceTeaser;
