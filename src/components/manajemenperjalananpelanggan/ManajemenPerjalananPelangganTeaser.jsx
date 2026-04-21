import React from "react";

import Teaser from "../common/Teaser";

import teaser1 from "../../assets/manajemen-perjalanan-pelanggan-teaser-1.webp";
import teaser2 from "../../assets/manajemen-perjalanan-pelanggan-teaser-2.webp";
import teaser3 from "../../assets/manajemen-perjalanan-pelanggan-teaser-3.webp";
import teaser4 from "../../assets/manajemen-perjalanan-pelanggan-teaser-4.webp";

const italicize = (text) => {
  const keywords = [
    "real time",
    "real-time",
    "touch point",
    "touchpoint",
    "benchmarking",
    "insight",
    "hybrid",
    "mobile",
  ];

  const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");

  return text.split(regex).map((part, index) =>
    keywords.some(
      (k) => k.toLowerCase() === part.toLowerCase()
    ) ? (
      <span key={index} className="italic">
        {part}
      </span>
    ) : (
      part
    )
  );
};

function ManajemenPerjalananPelangganTeaser() {
  return (
    <section className="bg-primary">
      <Teaser
        preTitle=""
        title={
          <>
            Satu <span className="italic">Platform</span> untuk Pengalaman
            Pelanggan Menyeluruh
          </>
        }
        description={
          <>
            <span className="italic">Platform</span> manajemen perjalanan
            pelanggan dari Exaque membantu Anda mengelola pengalaman pelanggan
            sebelum, selama, dan setelah layanan. Mulai dari pemesanan janji temu
            dan proses kedatangan, hingga penyampaian layanan dan pengumpulan
            umpan balik, kelola semuanya dalam satu{" "}
            <span className="italic">platform</span>.
          </>
        }
        imageSrc={teaser1}
        imageAlt="teaser1 Bebaskan Pelanggan Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={false}
      />

      <Teaser
        preTitle="Untuk Pelanggan"
        title={italicize(
          "Tingkatkan pengalaman pelanggan di setiap touch point layanan"
        )}
        description={
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>
              {italicize(
                "Berikan fleksibilitas bagi pelanggan untuk memilih cara mengakses layanan anda secara hybrid di lokasi atau digital."
              )}
            </li>
            <li>
              {italicize(
                "Izinkan pelanggan menunggu secara remote melalui mobile ticket sehingga mereka tidak harus antri secara fisik."
              )}
            </li>
            <li>
              Sediakan layanan tatap muka virtual melalui video meeting untuk
              pelanggan yang tidak dapat hadir langsung.
            </li>
            <li>
              {italicize(
                "Pastikan pelanggan selalu terinformasi dan mendapatkan update real-time sepanjang perjalanan layanan mereka."
              )}
            </li>
          </ul>
        }
        imageSrc={teaser2}
        imageAlt="teaser2 Tingkatkan pengalaman pelanggan"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={false}
        disableButton={true}
      />

      <Teaser
        preTitle="Untuk Manajemen"
        title="Optimalkan organisasi dan dapatkan data yang tepat"
        description={
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>
              Tingkatkan efisiensi layanan dengan mencocokkan kebutuhan dan
              prioritas pelanggan dengan ketersediaan serta kompetensi staf.
            </li>
            <li>
              Distribusikan beban kerja staf secara merata sepanjang hari agar
              operasional lebih stabil dan terukur.
            </li>
            <li>
              {italicize(
                "Kumpulkan data dari setiap touch point untuk meningkatkan performa layanan sekaligus membuka peluang benchmarking."
              )}
            </li>
            <li>
              {italicize(
                "Temukan area perbaikan dengan memanfaatkan data historis, insight, analitik, dan laporan performa."
              )}
            </li>
          </ul>
        }
        imageSrc={teaser3}
        imageAlt="teaser3 Optimalkan organisasi"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />

      <Teaser
        preTitle="Untuk Staf"
        title="Tingkatkan efisiensi operasional dan kinerja tim"
        description={
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>
              Kendalikan seluruh alur pelanggan dan tingkat hunian cabang secara
              menyeluruh.
            </li>
            <li>
              Tingkatkan produktivitas staf dengan otomatisasi tugas
              administratif dan alur kerja.
            </li>
            <li>
              {italicize(
                "Dapatkan insight operasional secara real-time melalui dashboard sehingga keputusan dapat diambil lebih cepat."
              )}
            </li>
          </ul>
        }
        imageSrc={teaser4}
        imageAlt="teaser4 Tingkatkan efisiensi operasional"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={false}
        disableButton={true}
      />
    </section>
  );
}

export default ManajemenPerjalananPelangganTeaser;
