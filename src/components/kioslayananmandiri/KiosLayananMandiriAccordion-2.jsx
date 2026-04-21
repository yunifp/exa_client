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
          <li className="text-gray-600 mb-2">Stand ramping dan hemat ruang </li>
          <li className="text-gray-600 mb-2">
            Dirancang untuk lingkungan yang menuntut
          </li>
          <li className="text-gray-600 mb-2">Printer terintegrasi</li>
          <li className="text-gray-600 mb-2">
            Dukungan untuk mode potret atau lanskap
          </li>
          <li className="text-gray-600 mb-2">
            Layar besar yang memudahkan untuk <i>check-in</i> dan antre
          </li>
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

function KiosLayananMandiriAccordion2() {
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

export default KiosLayananMandiriAccordion2;
