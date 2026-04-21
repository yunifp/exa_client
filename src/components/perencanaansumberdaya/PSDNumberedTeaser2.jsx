import React from "react";

import NumberedTeaser from "../common/NumberedTeaser";
import teaserImage from "../../assets/perencanaan-sumber-daya-teaser-2.webp";

function PSDNumberedTeaser2({ imageOnRight = true }) {
  const preTitle = "KELOLA JANJI TEMU";
  const title = "Tetap Pantau Janji Temu Anda yang Akan Datang";
  const subtitle =
    "Lihat semua janji temu yang akan datang di seluruh cabang anda. Akses detail yang anda butuhkan, kapan pun anda membutuhkannya.";

  const steps = [
    {
      number: "01",
      title: "Lacak Status",
      description:
        "Periksa status janji temu anda apakah pelanggan terlambat, sudah tiba, atau janji temu telah dibatalkan.",
    },
    {
      number: "02",
      title: "Tambah Catatan",
      description:
        "Tambahkan catatan internal ke janji temu, seperti permintaan khusus atau informasi penting lainnya untuk tim Anda.",
    },
    {
      number: "03",
      title: "Ubah Janji Temu",
      description:
        "Pilih janji temu untuk melihat detailnya, menjadwalkan ulang, membatalkan, atau mengirim ulang konfirmasi.",
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

export default PSDNumberedTeaser2;
