import React from "react";

import Teaser from "../common/Teaser";
import teaser1 from "../../assets/power-BI-teaser-1.webp";
import teaser2 from "../../assets/power-BI-teaser-2.webp";
import teaser3 from "../../assets/power-BI-teaser-3.webp";

function IntegrasiPowerBITeaser() {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6 mb-8 text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Peroleh <i>Insight</i> dari Data Perjalanan Pelanggan Anda
        </h2>
        <p className="text-lg text-gray-600">
          Data Connect adalah API Business Intelligence (BI) yang membantu
          pengguna Exaque mendapatkan wawasan yang kuat tentang data perjalanan
          pelanggan mereka. Mudah dan praktis untuk dipasang dan digunakan, Data
          Connect memungkinkan Anda mengimpor data yang kaya ini ke alat
          BI/Visualisasi Data Anda sendiri, seperti Microsoft Power BI, Tableau,
          Spotfire, QlikView, dan lainnya. Selain dapat menggunakan alat
          analisis data pilihan Anda, Data Connect juga memudahkan Anda
          menggabungkan data perjalanan pelanggan dengan sumber data lain
          seperti penjualan, cuaca, lalu lintas pengunjung, dan data produksi
          untuk mengungkap wawasan yang lebih mendalam.
        </p>
      </div>
      {/* --- Teaser 1 --- */}
      <Teaser
        preTitle=""
        title="Analisis Manajemen Perjalanan Pelanggan"
        description={
          <>
            <p>
              Dengan penambahan <i>Data Connect</i> ke dasbor dan laporan{" "}
              <i>real-time</i>
              yang sudah ada, Anda dapat menganalisis data sesuai kebutuhan Anda
              dan menggunakan alat BI yang sudah Anda miliki.
            </p>
            <br />
            <p>
              Hal ini membantu Anda menggali lebih dalam dan memahami cara
              meningkatkan dan mengoptimalkan proses layanan pelanggan Anda,
              baik itu untuk mengelola biaya, meningkatkan penjualan,
              mengoptimalkan kinerja staf/cabang, atau meningkatkan pengalaman
              pelanggan.
            </p>
          </>
        }
        imageSrc={teaser1}
        imageAlt="teaser1 Analisis Manajemen Perjalanan Pelanggan"
        imageOnRight={true}
        disableButton={true}
      />
      {/* --- Teaser 2 --- */}
      <Teaser
        preTitle=""
        title="Jalin koneksi yang lebih dalam dengan data Anda"
        description={
          <>
            <ul className="list-disc pl-5">
              <li>
                Impor dengan mudah lebih dari 70 titik data dari <i>platform</i> Kami
              </li>
              <li>
                Bandingkan data perjalanan pelanggan dengan data dari sumber
                lain
              </li>
              <li>
                Mengoptimalkan perencanaan dan penjadwalan staf, ruangan, atau
                peralatan
              </li>
              <li>
                Mulai gunakan data secara langsung tanpa perlu pemrosesan awal
                atau pemodelan
              </li>
              <li>
                Integrasikan dan simpan data Anda dengan aman menggunakan
                enkripsi yang aman selama transmisi
              </li>
            </ul>
          </>
        }
        imageSrc={teaser2}
        imageAlt="teaser2 Jalin koneksi yang lebih dalam dengan data Anda"
        imageOnRight={false}
        disableButton={true}
      />
      {/* --- Teaser 3 --- */}
      <Teaser
        preTitle=""
        title="Dapatkan nilai maksimal dari data perjalanan pelanggan Anda"
        description={
          <>
            <p>
              Dengan Data Connect API, Anda dapat menggunakan alat BI atau
              visualisasi data secara mulus dalam perjalanan pelanggan dan data
              lainnya. Dan temukan wawasan baru dan nilai tersembunyi untuk
              membantu Anda:
            </p>
            <ul className="list-disc pl-5">
              <li>Memperlancar proses</li>
              <li>Memperpendek waktu transaksi</li>
              <li>
                Mengoptimalkan perencanaan dan penjadwalan staf, ruangan, atau
                peralatan
              </li>
              <li> Menemukan waktu antrian optimal</li>
              <li>Membuat keputusan yang lebih baik dan didukung data</li>
              <li>Belajar dan temukan lebih banyak lagi</li>
            </ul>
          </>
        }
        imageSrc={teaser3}
        imageAlt="teaser3 Dapatkan nilai maksimal dari data perjalanan pelanggan Anda"
        imageOnRight={true}
        disableButton={true}
      />
    </section>
  );
}

export default IntegrasiPowerBITeaser;
