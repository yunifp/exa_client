import React from "react";
import NumberedTeaser from "../common/NumberedTeaser";

import teaserImage from "../../assets/perencanaan-sumber-daya-teaser-1.webp";

function PSDNumberedTeaser1({ imageOnRight = false }) {
  const preTitle = "GAMBARAN PERENCANAAN";
  const title = "Kelola Janji Temu Dan Alokasi Sumber Daya Dengan Lebih Akurat";
  const subtitle =
    "Kelola sumber daya untuk janji temu anda secara efisien menggunakan Qmatic Experience Cloud. Koordinasikan janji temu dan sumber daya untuk memberikan layanan berkualitas tinggi dan tepat waktu yang memenuhi kebutuhan pelanggan.";

  const steps = [
    {
      number: "01",
      title: "Kelola Terpusat",
      description:
        "Lihat dan Kelola Semua Janji Temu Dan Sumber Daya Untuk Cabang Dan Berbagai Layanan Anda.",
    },
    {
      number: "02",
      title: "Pastikan Kesiapan",
      description:
        "Pastikan Semua Sumber Daya Yang Diperlukan Siap Dan Tersedia Untuk Layanan Anda.",
    },
    {
      number: "03",
      title: "Penugasan Cerdas",
      description:
        "Tugaskan Sumber Daya Yang Sesuai Ke Layanan Anda Berdasarkan Keahlian Atau Ketersediaan Mereka.",
    },
    {
      number: "04",
      title: "Seimbangkan Beban Kerja",
      description:
        "Pastikan Beban Kerja Tim Anda Seimbang Dan Tugas Terbagi Secara Adil.",
    },
  ];

  const contentOrder = imageOnRight ? "md:order-1" : "md:order-2";
  const imageOrder = imageOnRight ? "md:order-2" : "md:order-1";

  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6 mb-8 text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Solusi Cedas Perencanaan Sumber Daya yang efisien
        </h2>
        <p className="text-lg text-gray-600">
          Dapatkan gambaran menyeluruh dan terpusat atas ketersediaan dan
          pemanfaatan semua sumber daya mulai dari staf, ruangan, hingga
          peralatan. <i>Platform</i> cerdas kami membantu anda mengidentifikasi
          kesenjangan sumber daya, mengalokasikan tugas berdasarkan keahlian,
          dan membuat keputusan berbasis data untuk memaksimalkan produktivitas
          serta meminimalkan waktu henti.
        </p>
      </div>

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

export default PSDNumberedTeaser1;
