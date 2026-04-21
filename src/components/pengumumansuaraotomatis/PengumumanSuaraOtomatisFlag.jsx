import React from "react";

import flagUrlRow1 from "../../assets/flag-row-1.webp";
import flagUrlRow2 from "../../assets/flag-row-2.webp";
import flagUrlRow3 from "../../assets/flag-row-3.webp";
import flagUrlRow4 from "../../assets/flag-row-4.webp";
import flagUrlRow5 from "../../assets/flag-row-5.webp";
import flagUrlRow6 from "../../assets/flag-row-6.webp";
import flagUrlRow7 from "../../assets/flag-row-7.webp";
import flagUrlRow8 from "../../assets/flag-row-8.webp";
import flagUrlRow9 from "../../assets/flag-row-9.webp";
import flagUrlRow10 from "../../assets/flag-row-10.webp";
import flagUrlRow11 from "../../assets/flag-row-11.webp";
import flagUrlRow12 from "../../assets/flag-row-12.webp";
import flagUrlRow13 from "../../assets/flag-row-13.webp";
import flagUrlRow14 from "../../assets/flag-row-14.webp";

const flagData = [
  { flagUrl: flagUrlRow1 },
  { flagUrl: flagUrlRow2 },
  { flagUrl: flagUrlRow3 },
  { flagUrl: flagUrlRow4 },
  { flagUrl: flagUrlRow5 },
  { flagUrl: flagUrlRow6 },
  { flagUrl: flagUrlRow7 },
  { flagUrl: flagUrlRow8 },
  { flagUrl: flagUrlRow9 },
  { flagUrl: flagUrlRow10 },
  { flagUrl: flagUrlRow11 },
  { flagUrl: flagUrlRow12 },
  { flagUrl: flagUrlRow13 },
  { flagUrl: flagUrlRow14 },
];

function FlagItem({ name, flagUrl }) {
  return (
    <div className="flex flex-col items-center text-center p-2">
      <img
        src={flagUrl}
        alt={`Bendera ${name}`}
        className="w-full object-cover mb-3"
      />
      <span className="text-sm font-medium text-gray-800">{name}</span>
    </div>
  );
}

function PengumumanSuaraOtomatisFlag() {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <p className="text-sm font-semibold uppercase text-accent mb-2">
            BAHASA YANG DIDUKUNG (TEXT-TO-SPEECH)
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Pilih Dari Berbagai Suara Dalam Lebih Dari 50 Bahasa.
          </h2>
        </div>

        <div className=" grid grid-cols-1 max-w-7xl mx-auto">
          {flagData.map((flag, index) => (
            <FlagItem key={index} name={flag.name} flagUrl={flag.flagUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PengumumanSuaraOtomatisFlag;
