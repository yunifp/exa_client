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
    title: "Kunjungan dibuat",
    content: (
      <>
        <p className="mb-4">
          Kunjungan pelanggan dapat dilakukan dengan membuat janji temu atau
          dengan bergabung dalam antrean melalui kiosk atau Mobile Ticket di
          lokasi.
        </p>
      </>
    ),
  },
  {
    title: "Undangan survei",
    content: (
      <>
        <p className="mb-4">
          Setelah kunjungan berakhir, undangan untuk mengisi survei umpan balik
          pelanggan dikirimkan melalui SMS, email, atau Mobile Ticket.
        </p>
      </>
    ),
  },
  {
    title: "Data dikumpulkan dan disimpan",
    content: (
      <>
        <p className="mb-4">
          Setelah survei umpan balik dikirim, data umpan balik akan disimpan
          bersama dengan data perjalanan pelanggan yang dikumpulkan selama
          kunjungan.
        </p>
      </>
    ),
  },
];

function UmpanBalikPelangganAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-primary ">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Satukan Setiap Interaksi Pelanggan Dalam Satu <i>Platform</i> Terpusat.
          </h2>
          <p className="text-lg text-gray-600">
            Exaque melalui Qmatic adalah ekosistem terpadu yang dirancang untuk
            mengelola seluruh spektrum layanan Anda, mulai dari penjadwalan
            janji temu yang kompleks hingga alur antrean <i>walk-in</i> yang dinamis.
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

export default UmpanBalikPelangganAccordion;
