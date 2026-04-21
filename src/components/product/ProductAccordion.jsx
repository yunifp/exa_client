import React, { useState } from "react";

import Accordion from "../common/Accordion";

const ChevronDownIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    width="20"
    height="20"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const accordionData = [
  {
    title: "Manajemen Antrean",
    content: (
      <>
        <p className="mb-4">
          Berikan layanan yang lebih baik kepada pelanggan, pastikan karyawan
          memiliki waktu dan ruang yang cukup untuk menjalankan tugas mereka
          dengan efektif, dan berikan waktu yang mereka butuhkan untuk tetap
          mengontrol situasi.
        </p>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>Kurangi waktu tunggu dan minimalkan area tunggu yang ramai</li>
          <li>
            Perbaiki aliran pelanggan untuk operasional yang lebih efisien
          </li>
          <li>
            Berikan informasi kepada pelanggan di setiap tahap perjalanan
            pelanggan
          </li>
          <li>
            Dapatkan wawasan tentang pengalaman pelanggan untuk mengambil
            keputusan bisnis yang didasarkan pada data
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Manajemen Jadwal Janji Temu",
    content: (
      <>
        <p className="mb-4">
          Izinkan pelanggan untuk membuat janji temu di mana saja, kapan saja -
          memberi Anda opsi untuk menyeimbangkan aliran pelanggan dan
          mencocokkan karyawan yang tepat dengan pelanggan yang tepat.
        </p>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>
            Pemesanan layanan <i>multiple</i>
          </li>
          <li>Konfirmasi dan pengingat otomatis</li>
          <li>Sesuaikan halaman pemesanan Anda dengan warna dan logo</li>
          <li>Dukungan multi-bahasa</li>
          <li>Integrasi dengan perangkat lunak pertemuan virtual</li>
          <li>Integrasi kalender</li>
          <li>Dan masih banyak lagi</li>
        </ul>
      </>
    ),
  },
  {
    title: (
      <>
        <i>Feedback</i> Pengguna
      </>
    ),
    content: (
      <>
        <p className="mb-4">
          Selalu ketahui seberapa baik Anda memenuhi kebutuhan. Terus tingkatkan
          ketersediaan pelanggan dan karyawan dengan mengumpulkan umpan balik
          dan memantau interaksi.
        </p>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>Umpan balik di Lokasi</li>
          <li>
            Kumpulkan umpan balik dari pelanggan saat mereka berada di lokasi
            fisik Anda.
          </li>
          <li>Survei Umpan Balik</li>
          <li>
            Gunakan survei <i>online</i> untuk mendapatkan wawasan tentang
            pengalaman pengunjung Anda. Mendukung berbagai jenis pertanyaan dan
            pertanyaan tindak lanjut bersyarat.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Analisa Dan Laporan",
    content: (
      <>
        <p className="mb-4">
          Pilih data yang paling sesuai untuk membantu Anda tetap fleksibel.
          Dari analisis <i>real-time</i> hingga analitik historis, sesuaikan
          dashboard Anda agar dapat memengaruhi operasi saat ini dengan cara
          yang paling efektif.
        </p>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>Panel Operasi</li>
          <li>
            Dapatkan tampilan <i>real-time</i> tentang informasi berguna dan
            dapat ditindaklanjuti mengenai beberapa titik operasi Anda berjalan.
          </li>
          <li>Laporan Standar</li>
          <li>
            Laporan otomatis menyediakan metrik bisnis terpenting, tren, dan
            pengecualian.
          </li>
          <li>Laporan Kustom</li>
          <li>
            Sesuaikan laporan analitik untuk mendapatkan wawasan dan informasi
            yang Anda butuhkan untuk bisnis Anda.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Sesuaikan Dengan Kebutuhan Anda",
    content: (
      <p>
        Orchestra 7 dapat disesuaikan dengan kebutuhan spesifik Anda, baik dalam
        hal fungsionalitas, jumlah cabang, maupun jumlah pengguna. Dan, seiring
        dengan perubahan kebutuhan Anda, Orchestra menawarkan fleksibilitas yang
        diperlukan untuk beradaptasi.
      </p>
    ),
  },
];

function ProductAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Satukan Setiap Interaksi Pelanggan Dalam Satu <i>Platform</i> Terpusat.
          </h2>
          <p className="text-lg text-gray-600">
            Exaque melalui Qmatic adalah ekosistem terpadu yang dirancang untuk
            mengelola seluruh spektrum layanan Anda, mulai dari penjadwalan
            janji temu yang kompleks hingga alur antrean <i>walk-in</i> yang
            dinamis.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
              chevronIcon={<ChevronDownIcon className="-rotate-90" />}
            >
              {item.content}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductAccordion;
