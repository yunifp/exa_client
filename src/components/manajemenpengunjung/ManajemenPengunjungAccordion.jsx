import React, { useState } from "react";
import Accordion from "../common/Accordion";

const ChevronDownIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
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

const WORK_STEPS = [
  {
    title: "Pemesanan Janji Temu",
    content:
      "Pengunjung dapat memesan janji temu secara online dan memilih layanan tertentu dengan staf tertentu. Mereka kemudian akan menerima konfirmasi otomatis dan pengingat untuk kunjungan mereka, beserta tautan <i>check-in</i> untuk janji temu tersebut.",
  },
  {
    title: "Pendaftaran Mandiri",
    content:
      "Setelah tiba, pengunjung dapat melakukan <i>check-in</i> mandiri melalui perangkat seluler mereka atau melalui kiosk, dan tetap terinformasi selama menunggu.",
  },
  {
    title: "Pemberitahuan Staf",
    content:
      "Staf yang berwenang diberitahu segera setelah pengunjung melakukan <i>check-in</i> di lokasi atau secara virtual untuk memastikan sumber daya digunakan secara efektif.",
  },
  {
    title: "Bantuan",
    content:
      "Staf menyambut dan melayani pelanggan. Proses ini dapat dilakukan secara langsung di lokasi atau secara virtual, tergantung pada janji temu.",
  },
  {
    title: "Umpan Balik Pelanggan",
    content:
      "Pengunjung akan menerima tautan untuk memberikan umpan balik setelah pertemuan. Anda akan mendapatkan masukan mereka, bersama dengan data lain yang dikumpulkan dari setiap titik kontak dalam perjalanan, untuk wawasan dan analisis.",
  },
];

const ManajemenPengunjungAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cara Kerja
          </h2>
          <p className="text-gray-600">
            Cara Kerja Perangkat Lunak Pertemuan Virtual Qmatic.
          </p>
        </div>

        <div className="space-y-4">
          {WORK_STEPS.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
              chevronIcon={<ChevronDownIcon className="-rotate-90" />}
            >
              <p
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManajemenPengunjungAccordion;
