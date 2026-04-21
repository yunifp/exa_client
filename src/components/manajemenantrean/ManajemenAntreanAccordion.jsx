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
    title: "Berikan pengalaman pelanggan yang lebih baik",
    content: (
      <>
        <p className="text-gray-600 mb-4">
          Berikan struktur dan kepastian di ruang tunggu Anda dengan pendaftaran
          mandiri yang mudah, penugasan layanan otomatis saat kedatangan,
          pembaruan rutin melalui ponsel mereka atau layar di cabang, dan
          navigasi yang jelas.
        </p>
      </>
    ),
  },
  {
    title: "Meningkatkan efisiensi karyawan",
    content: (
      <>
        <p className="text-gray-600 mb-4">
          Dengan pemberitahuan otomatis, segmentasi pelanggan, dan dasbor
         <i> real-time</i>, kami membantu staf Anda menjadi lebih produktif dan efisien
          dalam mengelola aliran pelanggan.
        </p>
      </>
    ),
  },
  {
    title: "Meningkatkan layanan dan operasional",
    content: (
      <>
        <p className="text-gray-600 mb-4">
          Integrasikan dan gabungkan sistem yang Anda kuasai untuk mengurangi
          biaya administrasi, mengoptimalkan kapasitas layanan, dan meningkatkan
          pengalaman pelanggan dan karyawan.
        </p>
      </>
    ),
  },
];

function ManajemenAntreanAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sambut alur layanan yang terstruktur, terprediksi, dan mulus.
          </h2>
          <p className="text-lg text-gray-600">
            <i>Platform</i> kami memberi Anda kendali penuh untuk mengoptimalkan
            operasional, memberdayakan staf, dan menciptakan pengalaman
            pelanggan yang superior di setiap titik.
          </p>
        </div>

        <div className="space-y-4">
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

export default ManajemenAntreanAccordion;
