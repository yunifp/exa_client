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
    title: <>Pelanggan melakukan pendaftaran layanan</>,
    content: (
      <>
        <p className="mb-4">
          Pelanggan dapat membuat janji temu secara <i>online</i> atau langsung
          bergabung dalam antrean menggunakan kios pendaftaran saat tiba.
        </p>
      </>
    ),
  },
  {
    title: <>Transfer data ke Salesforce</>,
    content: (
      <>
        <p className="mb-4">
          Setelah pelanggan melakukan <i>check-in</i> untuk janji temu atau
          bergabung dalam antrean, semua data Qmatic akan ditransfer ke
          Salesforce.
        </p>
      </>
    ),
  },
  {
    title: (
      <>
        Kelola dengan aplikasi <i>Counter</i>
      </>
    ),
    content: (
      <>
        <p className="mb-4">
          Dengan aplikasi <i>Counter</i>, staf dapat melakukan panggilan,
          mengalihkan, dan melayani janji temu serta pelanggan yang datang
          langsung dalam antrean secara langsung di dalam Salesforce.
        </p>
      </>
    ),
  },
];

function IntegrasiSalesforceAccordion() {
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
            Cara Kerja Integrasi Dengan Salesforce
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

export default IntegrasiSalesforceAccordion;
