import React from "react";
import Card from "../common/Card";

const solutionData = [
  {
    title: "Manajemen Antrean",
    description:
      "Melayani pelanggan dengan efisien dan mengurangi waktu tunggu.",
    link: "/manajemen-antrean",
  },
  {
    title: "Manajemen Jadwal Janji Temu",
    description:
      "Perbaiki operasional dengan sistem pemesanan janji temu dan pengelolaan kedatangan.",
    link: "/manajemen-jadwal-janji-temu",
  },
  {
    title: "Antrean Virtual",
    description: "Biarkan pelanggan menunggu di mana saja dengan tiket mobile.",
    link: "/Antrean-Virtual",
  },
  {
    title: "Manajemen Perjalanan Pelanggan",
    description:
      "Kelola alur kerja dari awal hingga akhir, dan dapatkan wawasan tentang operasional Anda.",
    link: "/manajemen-perjalanan-pelanggan",
  },
  {
    title: "Business Intelligence",
    description:
      "Kumpulkan data dari setiap titik sentuh dan dapatkan wawasan bisnis.",
    link: "/business-intelligence",
  },
  {
    title: "Rapat Virtual",
    description: "Melayani pelanggan jarak jauh melalui pertemuan video.",
    link: "/rapat-virtual",
  },
  {
    title: "Manajemen Pengunjung",
    description:
      "Pengalaman yang lancar dan layanan yang disesuaikan untuk pengunjung.",
    link: "/manajemen-pengunjung",
  },
];

function SolusiCard() {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6 mb-8 text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Solusi Tepat Untuk Setiap Tahap <br />
          Perjalanan Pelanggan
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Kami telah merancang rangkaian solusi khusus untuk mengelola setiap
          interaksi, mulai dari janji temu online, manajemen akur kedatangan,
          hingga pengumpulan umpan balik dan analisis. Temukan solusi yang Anda
          butuhkan di bawah ini.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutionData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
          {solutionData.length % 3 !== 0 && (
            <div className="hidden lg:block"></div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SolusiCard;
