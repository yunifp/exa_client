import React from "react";
import { Link } from "react-router-dom";

import allianzPng from "../../assets/logo/allianz-logo.png";
import allianzSvg from "../../assets/logo/allianz-logo.svg";
import axaLogo from "../../assets/logo/AXA_logo.png";
import axaMandiri from "../../assets/logo/AXA_Mandiri_Logo.png";
import bankOfChina from "../../assets/logo/Bank_Of_China_logo.png";
import bcaFinance from "../../assets/logo/BCA_Finance.png";
import bcaFinanceAlt from "../../assets/logo/bcafinancelogo.png";
import ikea from "../../assets/logo/ikea-logo.png";
import ioH from "../../assets/logo/Logo IOH-01.png";
import manulife from "../../assets/logo/manulife-logo.png";
import mufg from "../../assets/logo/MUFG_logo.gif";
import prudential from "../../assets/logo/Prudential_plc_logo.png";
import standardChartered from "../../assets/logo/Standard_Chartered_(2021).png";
import unilever from "../../assets/logo/Unilever_logo.png";
import unileverAnimated from "../../assets/logo/Unilever_logo-animated.svg";
import vipMoneyChanger from "../../assets/logo/VIP_Money_Changer_logo.png";

const logos = [
  { name: "Allianz", img: allianzPng },
  { name: "AXA", img: axaLogo },
  { name: "AXA Mandiri", img: axaMandiri },
  { name: "Bank of China", img: bankOfChina },
  { name: "BCA Finance", img: bcaFinance },
  { name: "IKEA", img: ikea },
  { name: "IOH", img: ioH },
  { name: "Manulife", img: manulife },
  { name: "MUFG", img: mufg },
  { name: "Prudential", img: prudential },
  { name: "Standard Chartered", img: standardChartered },
  { name: "Unilever", img: unilever },
  { name: "VIP Money Changer", img: vipMoneyChanger },
];

const logosRow1 = [...logos, ...logos];
const logosRow2 = [...logos.slice().reverse(), ...logos.slice().reverse()];

function IntegrationSection() {
  return (
    <section className="container mx-auto px-6 overflow-hidden">
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scrollLeft 22s linear infinite;
          }
          .animate-scroll-right {
            animation: scrollRight 22s linear infinite;
          }
          .mask-gradient {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        `}
      </style>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-full space-y-6 mask-gradient py-4">
          <div className="flex space-x-6 w-max animate-scroll-right hover:[animation-play-state:paused]">
            {logosRow1.map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="w-28 h-28 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center p-5 border border-gray-50 hover:scale-105 transition"
              >
                <img src={logo.img} alt={logo.name} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>

          <div className="flex space-x-6 w-max animate-scroll-left hover:[animation-play-state:paused]">
            {logosRow2.map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="w-28 h-28 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center p-5 border border-gray-50 hover:scale-105 transition"
              >
                <img src={logo.img} alt={logo.name} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Integrasi Exaque
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            Terintegrasi dengan <em className="italic font-medium text-gray-800"><i>platform</i></em> rapat
            virtual, kalender, CRM, papan informasi digital, alat visualisasi data,
            dan sistem enterprise lainnya.
          </p>

          <Link
            to="/integrasi"
            className="inline-block px-10 py-4 bg-[#9f1b3e] text-white font-bold rounded-full shadow-lg hover:bg-[#851633] hover:-translate-y-1 transition"
          >
            Lihat Selengkapnya
          </Link>
        </div>
      </div>
    </section>
  );
}

export default IntegrationSection;
