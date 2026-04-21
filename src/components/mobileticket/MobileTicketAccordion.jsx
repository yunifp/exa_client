import React, { useState } from "react";
import Accordion from "../common/Accordion";

import flowImage1 from "../../assets/mobile-ticket-flow-1.webp";
import flowImage2 from "../../assets/mobile-ticket-flow-2.webp";
import flowImage3 from "../../assets/mobile-ticket-flow-3.webp";

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
    title:
      "1. Biarkan pelanggan masuk ke antrean virtual dengan berbagai cara.",
    content: (
      <>
        <div className="mb-6">
          <img
            src={flowImage1}
            alt="Cara Kerja Mobile Ticket Langkah 1"
            className="mx-auto w-min rounded-lg"
          />
        </div>
        <p className="text-gray-600 text-center text-lg">
          Pelanggan dapat masuk dalam antrian virtual melalui QR Code, SMS, atau
          Tautan Web. Dari sana mereka dapat memilih layanan yang mereka
          butuhkan dan bergabung dalam antrean.
        </p>
      </>
    ),
  },
  {
    title: "2. Pantau antrean secara real-time dan terima notifikasi.",
    content: (
      <>
        <div className="mb-6">
          <img
            src={flowImage2}
            alt="Cara Kerja Mobile Ticket Langkah 2"
            className="mx-auto w-min rounded-lg"
          />
        </div>
        <p className="text-gray-600 text-center text-lg">
          Setelah pelanggan bergabung dalam antrean, mereka kini dapat menunggu
          di mana saja dan memantau perkembangan antrean secara real-time.
          Pemberitahuan mengenai posisi mereka dalam antrean dapat dikirim
          melalui SMS, tergantung pada preferensi pelanggan.
        </p>
      </>
    ),
  },
  {
    title: "3. Dapatkan giliran.",
    content: (
      <>
        <div className="mb-6">
          <img
            src={flowImage3}
            alt="Cara Kerja Mobile Ticket Langkah 3"
            className="mx-auto w-min rounded-lg"
          />
        </div>
        <p className="text-gray-600 text-center text-lg">
          Ketika giliran mereka untuk dilayani, pelanggan akan menerima
          pemberitahuan lain. Mereka kemudian dapat menuju ke loket layanan
          untuk dilayani.
        </p>
      </>
    ),
  },
];

function MobileTicketAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Cara Kerja
          </h2>
          <p className="text-gray-600 text-center">
            Berikan kemudahan kepada pelanggan Anda dengan cara yang sederhana
            dan aman untuk antre melalui perangkat seluler mereka, sekaligus
            menghilangkan antrean dan area ramai di lingkungan layanan Anda.
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

export default MobileTicketAccordion;
