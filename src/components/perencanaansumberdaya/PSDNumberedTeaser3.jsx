import React from "react";

import NumberedTeaser from "../common/NumberedTeaser";
import teaserImage from "../../assets/perencanaan-sumber-daya-teaser-3.webp";

function PSDNumberedTeaser3({ imageOnRight = false }) {
  const preTitle = "TAMPILAN KALENDER";
  const title = "Dapatkan Gambaran Lengkap Alokasi Sumber Daya Anda";
  const subtitle =
    "Dapatkan gambaran komprehensif tentang ketersediaan sumber daya anda. Identifikasi kesenjangan sumber daya dengan cepat, lakukan penyesuaian untuk pemanfaatan optimal, dan pastikan layanan Anda berjalan lancar tanpa konflik.";

  const steps = [
    {
      number: "01",
      title: "Pantau Pemanfaatan",
      description: "Monitor ketersediaan dan utilisasi sumber daya",
    },
    {
      number: "02",
      title: "Tampilan Berdampingan",
      description:
        "Lihat kalender staf individu atau beberapa staf secara berdampingan.",
    },
    {
      number: "03",
      title: "Sinkronisasi Kalender",
      description:
        "Sinkronkan dengan Kalender Outlook staf Anda untuk gambaran ketersediaan yang terpusat.",
    },
    {
      number: "04",
      title: "Filter Waktu",
      description:
        "Lihat ketersediaan sumber daya per hari, minggu, bulan, atau rentang tanggal tertentu.",
    },
  ];

  const contentOrder = imageOnRight ? "md:order-1" : "md:order-2";
  const imageOrder = imageOnRight ? "md:order-2" : "md:order-1";

  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className={`order-2 ${imageOrder}`}>
          <div className="space-y-4">
            <p className="text-lg font-bold uppercase text-accent">
              {preTitle}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">{subtitle}</p>

            <img
              src={teaserImage}
              alt="Dashboard Perencanaan Sumber Daya Qmatic"
              className="w-full mx-auto rounded-xl"
            />
          </div>
        </div>

        <div className={`relative order-1 ${contentOrder}`}>
          <div
            className="absolute top-0 bottom-0 z-0 border-l-2 border-dashed border-gray-300"
            style={{ left: "42px" }}
          ></div>

          <div className="space-y-15 relative z-10">
            {steps.map((step, index) => (
              <NumberedTeaser
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PSDNumberedTeaser3;
