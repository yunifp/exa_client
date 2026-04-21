import React, { useState } from "react";

import Accordion from "../common/Accordion";
import accordionimage1 from "../../assets/icons/ic_daftar-pengunjung.svg";
import accordionimage2 from "../../assets/icons/ic_antrian-virtual.svg";
import accordionimage3 from "../../assets/icons/ic_layanan-pesan.svg";
import accordionimage4 from "../../assets/icons/ic_pelanggan.svg";

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
    title: <>Akses yang mudah melalui alat visualisasi data pilihan Anda</>,
    content: (
      <>
        <p className="mb-4">
          API <i>Data Connect</i> memudahkan akses ke data perjalanan pelanggan
          melalui alat BI atau visualisasi pilihan Anda, menggunakan teknologi
          web untuk kompatibilitas maksimal.
        </p>
        <p className="mb-4">
          Impor data dengan mudah ke alat Anda dan buat laporan atau dasbor
          secara langsung tanpa perlu prapemrosesan atau pemodelan.
        </p>
        <p className="mb-4">
          API ini memastikan transmisi data terenkripsi dan menawarkan kontrol
          akses penuh melalui portal administratif. Dirancang untuk integrasi
          sistem yang mulus, <i>Data Connect</i> memfasilitasi analitik dan
          penyimpanan canggih, memungkinkan penarikan data secara bertahap untuk
          pemrosesan yang mudah, skalabel, dan aman.
        </p>
      </>
    ),
  },
  {
    title: <>Sederhana, terstandarisasi, dan terbuka</>,
    content: (
      <>
        <p className="mb-4">
          <i>Data Connect</i> beroperasi melalui OData, sebuah protokol data
          terbuka yang memungkinkan pembuatan dan penggunaan REST API yang dapat
          diinterogasi dan interoperabel dengan cara yang sederhana dan standar.
        </p>
        <p className="mb-4">
          Dengan kata lain, OData adalah cara yang lancar dan mudah bagi
          pengguna BI untuk mendapatkan data spesifik dari satu sistem ke sistem
          lain. Memungkinkan Anda untuk menginterogasi dan berbagi data antara
          sistem yang tidak terhubung atau bahkan menggabungkan semua sumber
          data Anda yang beragam menjadi tampilan tunggal yang terkonsolidasi
          untuk wawasan yang lebih cepat dan lebih kuat.
        </p>
      </>
    ),
  },
];

function IntegrasiPowerBIAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Cara Kerja
          </h2>
          <p className="text-lg text-gray-600">
            Cara Kerja Integrasi Power BI (<i>Data Connect</i>)
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

export default IntegrasiPowerBIAccordion;
