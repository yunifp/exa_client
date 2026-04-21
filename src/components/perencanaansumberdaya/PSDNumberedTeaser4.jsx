import React from "react";
import NumberedTeaser from "../common/NumberedTeaser";
import teaserImage from "../../assets/perencanaan-sumber-daya-teaser-6.webp";

function PSDNumberedTeaser4({ imageOnRight = false }) {
  const preTitle = "INTEGRASI KALENDER OUTLOOK";
  const title = "Sinkronkan dengan Kalender Pribadi Staf";
  const subtitle =
    "Sinkronkan kalender pribadi anggota staf anda dengan Qmatic Experience Cloud untuk mengimpor acara dan janji temu ke tampilan kalender anda.";

  const steps = [
    {
      number: "01",
      title: "Cegah Pemesanan Ganda",
      description: "Lihat semua acara dan janji temu di satu tempat.",
    },
    {
      number: "02",
      title: "Pastikan Ketersediaan",
      description: (
        <>
          Pastikan pelanggan hanya dapat memesan janji di halaman Pemesanan{" "}
          <i>Online</i> saat anggota staf tersedia.
        </>
      ),
    },
    {
      number: "03",
      title: "Visibilitas Staf",
      description:
        "Izinkan staf melihat janji temu Qmatic yang akan datang di Kalender Outlook mereka.",
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

export default PSDNumberedTeaser4;
