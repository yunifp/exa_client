import React from "react";

import NumberedTeaser from "../common/NumberedTeaser";
import meetingImage from "../../assets/hero-1.jpg";

const ITALIC_KEYWORDS = [
  "check in",
  "customer journey management",
  "end to end",
  "customer experience",
  "smartphone",
  "real time",
  "hardware",
];

const italicizeText = (text) => {
  let result = text;
  ITALIC_KEYWORDS.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    result = result.replace(regex, (match) => `<i>${match}</i>`);
  });
  return result;
};

const FOUNDATION_STEPS = [
  {
    number: "01",
    title: "Komitmen",
    description:
      "Kami Bersemangat Dengan Pekerjaan Kami, Dan Berusaha Sebaik Mungkin Membantu Mewujudkan Customer Experience Yang Lebih Baik Secara End To End.",
  },
  {
    number: "02",
    title: "Integritas",
    description:
      "Kami Menjaga Kepercayaan Melalui Proses Kerja Yang Transparan Dan Dukungan Real Time Di Setiap Tahapan.",
  },
  {
    number: "03",
    title: "Keahlian",
    description:
      "Solusi Kami Dirancang Agar Mudah Digunakan Di Berbagai Hardware Dan Smartphone Tanpa Mengorbankan Performa.",
  },
  {
    number: "04",
    title: "Tim Kerja",
    description:
      "Kolaborasi Tim Kami Memastikan Customer Journey Management Berjalan Optimal Sejak Check In Hingga Layanan Selesai.",
  },
];

const PartnershipFoundation = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fondasi Kemitraan Exaque
          </h2>
          <p className="text-gray-600">
            Inilah yang kami yakini, dan inilah yang akan Anda rasakan saat
            bekerja bersama kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={meetingImage}
              alt="Fondasi Kemitraan"
              className="rounded-2xl w-full h-auto shadow-lg object-cover"
            />

            <div className="absolute top-6 left-6">
              <span className="text-accent font-bold text-2xl tracking-widest opacity-80">
                EXAQUE
              </span>
            </div>
          </div>

          <div className="relative pl-4 md:pl-8">
            <div className="absolute top-0 bottom-0 border-l-2 border-dashed border-gray-200 left-[3.2rem] md:left-[4.2rem] z-0"></div>

            <div className="space-y-8 relative z-10">
              {FOUNDATION_STEPS.map((step, idx) => (
                <NumberedTeaser
                  key={idx}
                  number={step.number}
                  title={step.title}
                  description={
                    <span
                      dangerouslySetInnerHTML={{
                        __html: italicizeText(step.description),
                      }}
                    />
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipFoundation;
