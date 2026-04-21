import React from "react";

import NumberedTeaser from "../common/NumberedTeaser";
import teaserImage from "../../assets/pesan-otomatis-teaser-1.webp";

function italicizeKeywords(text) {
  const keywords = ["omnichannel"];
  const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    keywords.includes(part.toLowerCase()) ? (
      <i key={index}>{part}</i>
    ) : (
      part
    )
  );
}

function PesanOtomatisNumberedTeaser({ imageOnRight = false }) {
  const preTitle = "";
  const title = "";
  const subtitle = "";

  const steps = [
    {
      number: "01",
      title: "Bangun hubungan pelanggan yang lebih baik",
      description:
        "Perkuat hubungan dan buat komunikasi lebih langsung melalui pesan SMS. Penuhi kebutuhan pelanggan hari ini dan besok – sesuai dengan kondisi mereka.",
    },
    {
      number: "02",
      title: "Tingkatkan retensi pelanggan",
      description:
        "Tingkatkan loyalitas merek dengan mengintegrasikan pesan SMS ke dalam pengalaman pelanggan omnichannel.",
    },
    {
      number: "03",
      title: "Pastikan pelanggan siap dan terinformasi",
      description:
        "Kirim konfirmasi janji temu otomatis, pengingat, dan informasi relevan lainnya melalui SMS sebelum janji temu mendatang untuk memastikan pelanggan tiba tepat waktu dan siap.",
    },
    {
      number: "04",
      title: "Kurangi tingkat ketidakhadiran",
      description:
        "Kirim pengingat tepat waktu untuk menghindari pelanggan melewatkan janji temu mereka dan kurangi tingkat ketidakhadiran.",
    },
    {
      number: "05",
      title: "Memberdayakan pelanggan untuk bergabung dalam antrean",
      description:
        "Pelanggan dapat mengirim SMS untuk bergabung dalam antrean layanan yang mereka butuhkan dan memantau progress antrean mereka melalui notifikasi SMS otomatis.",
    },
    {
      number: "06",
      title: "Beritahu staf",
      description:
        "Izinkan staf untuk menerima pemberitahuan instan saat pelanggan tiba untuk janji temu atau saat SLA (Perjanjian Tingkat Layanan) yang ditetapkan tercapai.",
    },
  ];

  const contentOrder = imageOnRight ? "md:order-1" : "md:order-2";
  const imageOrder = imageOnRight ? "md:order-2" : "md:order-1";

  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6 mb-8 text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          SMS memegang peranan penting dalam perjalanan pelanggan saat ini
        </h2>
        <p className="text-lg text-gray-600">
          {italicizeKeywords(
            "Semakin banyak pelanggan yang menuntut informasi dan akses ke layanan sesuai dengan syarat mereka sendiri – dan secepat serta semudah mungkin. Jika tidak, mereka akan beralih ke tempat lain, dan bisnis serta organisasi tersebut akan kesulitan untuk tetap kompetitif dan relevan."
          )}
        </p>
      </div>

      <div className="container mx-auto pt-10 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className={`order-2 ${imageOrder}`}>
          <div className="space-y-4">
            <p className="text-lg font-bold uppercase text-accent">
              {preTitle}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {italicizeKeywords(subtitle)}
            </p>

            <img
              src={teaserImage}
              alt="Dashboard Perencanaan Sumber Daya Qmatic"
              className="w-full mx-auto rounded-xl"
            />
          </div>
        </div>

        <div className={`relative order-1 ${contentOrder}`}>
          <div className="container mx-auto px-6 mb-8 text-start max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Terhubung dengan pelanggan di mana pun mereka berada dalam
              perjalanan mereka.
            </h2>
          </div>

          <div
            className="absolute sm:top-50 bottom-0 z-0 border-l-2 border-dashed border-gray-300"
            style={{ left: "42px" }}
          ></div>

          <div className="space-y-15 relative z-10">
            {steps.map((step, index) => (
              <NumberedTeaser
                key={index}
                number={step.number}
                title={step.title}
                description={italicizeKeywords(step.description)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PesanOtomatisNumberedTeaser;
