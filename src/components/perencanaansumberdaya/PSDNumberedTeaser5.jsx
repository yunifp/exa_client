import React from "react";
import NumberedTeaser from "../common/NumberedTeaser";
import teaserImage from "../../assets/perencanaan-sumber-daya-teaser-7.webp";

function PSDNumberedTeaser5({ imageOnRight = true }) {
  const preTitle = "PEMBATALAN JANJI TEMU MASSAL";
  const title = "Tangani Gangguan Layanan dengan Mudah";
  const subtitle =
    "Mengalami gangguan layanan tak terduga? Baik karena keadaan darurat atau konflik penjadwalan, Anda dapat dengan cepat menutup layanan, membatalkan semua janji temu terkait, dan langsung memberi tahu pelanggan anda melalui SMS atau email hanya dengan beberapa klik.";

  const steps = [
    {
      number: "01",
      title: "Tutup Layanan",
      description:
        "Pilih layanan yang ingin Anda tutup dan batalkan semua janji temu terkait dalam jangka waktu yang ditentukan.",
    },
    {
      number: "02",
      title: "Beri Notifikasi",
      description:
        "Berikan alasan pembatalan dan segera beri tahu pelanggan Anda melalui SMS dan email.",
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

export default PSDNumberedTeaser5;
