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
    title: "Fitur",
    content: (
      <>
        <ul className="list-disc pl-5 text-start">
          <li className="text-gray-600 mb-2">
            Pendaftaran tanpa tiket & antrean Pembaruan dan dukungan yang lancar
            dengan Qmatic Device Management
          </li>
          <li className="text-gray-600 mb-2">Desain ramping dan modern</li>
          <li className="text-gray-600 mb-2">
            Siap untuk penggunaan publik yang berkelanjutan
          </li>
          <li className="text-gray-600 mb-2">Mengurangi limbah kertas</li>
          <li className="text-gray-600 mb-2">
            Pembaruan dan dukungan yang lancar dengan Qmatic Device Management
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Aksesoris",
    content: (
      <>
        <ul className="list-disc pl-5 text-start">
          <li className="text-gray-600 mb-2">Pemindai Barcode / QR Code</li>
        </ul>
      </>
    ),
  },
];

function KiosLayananMandiriAccordion4() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6 max-w-5xl">
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

export default KiosLayananMandiriAccordion4;
