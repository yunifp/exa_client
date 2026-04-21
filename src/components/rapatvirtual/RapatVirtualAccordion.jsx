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
    title: "Pemesanan janji temu",
    content: (
      <>
        <p className="mb-4">
          Pelanggan memesan janji temu dan memilih opsi pertemuan virtual.
        </p>
      </>
    ),
  },
  {
    title: "Konfirmasi dan pengingat",
    content: (
      <>
        <p className="mb-4">
          Konfirmasi pemesanan dan pengingat janji temu dikirim melalui SMS dan
          email kepada pelanggan.
        </p>
      </>
    ),
  },
  {
    title: "Pendaftaran",
    content: (
      <>
        <p className="mb-4">
          Pelanggan yang memiliki janji temu terjadwal dapat melakukan{" "}
          <em>check-in</em> dengan mengklik tautan pertemuan dalam pesan
          pengingat. Pelanggan yang datang tanpa janji temu dapat memindai kode
          QR, memilih layanan yang dibutuhkan, dan menunggu secara jarak jauh
          untuk pertemuan virtual.
        </p>
      </>
    ),
  },
  {
    title: "Pemberitahuan staf",
    content: (
      <>
        <p className="mb-4">
          Anggota staf yang ditugaskan menerima pemberitahuan{" "}
          <em>check-in</em> dan masuk ke ruang rapat yang sama.
        </p>
      </>
    ),
  },
  {
    title: "Pelayanan jarak jauh",
    content: <p>Layanan disediakan melalui pertemuan video.</p>,
  },
  {
    title: "Umpan balik pelanggan",
    content: <p>Segera setelah pertemuan, pelanggan menerima survei <em>online</em>.</p>,
  },
];

function RapatVirtualAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Satukan Setiap Interaksi Pelanggan Dalam Satu <em>Platform</em>{" "}
            Terpusat.
          </h2>
          <p className="text-lg text-gray-600">
            Exaque melalui Qmatic adalah ekosistem terpadu yang dirancang untuk
            mengelola seluruh spektrum layanan Anda, mulai dari penjadwalan
            janji temu yang kompleks hingga alur antrean{" "}
            <em>walk-in</em> yang dinamis.
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

export default RapatVirtualAccordion;
