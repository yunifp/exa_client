import React from "react";
import Teaser from "../common/Teaser";
import teaser1 from "../../assets/dukungan-perangkat-lunak-teaser.webp";

const italicizeKeywords = (text) => {
  const keywords = ["troubleshooting"];
  const regex = new RegExp(`(${keywords.join("|")})`, "gi");
  return text.split(regex).map((part, index) =>
    keywords.includes(part.toLowerCase()) ? <i key={index}>{part}</i> : part
  );
};

function DukunganPerangkatLunakTeaser() {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6 mb-8 text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Tidak ada waktu untuk gangguan
        </h2>
        <p className="text-lg text-gray-600">
          {italicizeKeywords(
            "Kami menyederhanakan perjalanan pelanggan yang rumit, mulai dari pemesanan online hingga analisis, dengan perangkat lunak dan keras terintegrasi. Untuk memastikan pengalaman ini berjalan lancar tanpa gangguan dalam skala besar, Qmatic Care selalu siap mencegah masalah, mengoptimalkan sistem Anda, dan menjaga kelancaran operasional kritis Anda agar tidak ada yang mengganggu pengalaman pelanggan."
          )}
        </p>
      </div>
      <Teaser
        preTitle=""
        title="Layanan Dukungan Qmatic"
        description={italicizeKeywords(
          "Layanan Dukungan Qmatic memberi Anda akses prioritas ke tim ahli teknis kami yang berdedikasi. Kami berkomitmen untuk memberikan respons cepat dan resolusi yang efektif untuk memastikan operasional Anda tetap berjalan. Mulai dari pemecahan masalah (troubleshooting) yang kompleks hingga dukungan operasional harian, kami hadir untuk memaksimalkan uptime dan keandalan sistem Anda."
        )}
        imageSrc={teaser1}
        imageAlt="teaser1 Bebaskan Pelanggan Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />
    </section>
  );
}

export default DukunganPerangkatLunakTeaser;
