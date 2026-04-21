import React from "react";

import Teaser from "../common/Teaser";
import teaser1 from "../../assets/mobile-ticket-teaser-1.webp";
import teaser2 from "../../assets/mobile-ticket-teaser-2.webp";
import teaser3 from "../../assets/mobile-ticket-teaser-3.webp";
import teaser4 from "../../assets/mobile-ticket-teaser-4.webp";

const italicizeText = (text) => {
  const keywords = [
    "real time",
    "real-time",
    "walkaways",
    "right to left",
    "branding",
    "brand",
    "mobile",
    "ticket",
  ];

  const regex = new RegExp(`(${keywords.join("|")})`, "gi");

  return text
    .split(regex)
    .map((part, index) =>
      keywords.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
        <i key={index}>{part}</i>
      ) : (
        part
      )
    );
};

function MobileTicketTeaser() {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6 mb-8 text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {italicizeText("Akses Cepat, Tepat di Ponsel Anda.")}
        </h2>
        <p className="text-lg text-gray-600">
          {italicizeText(
            "Mobile Ticket memungkinkan organisasi untuk membuat ruang tunggu virtual dan secara efektif menghilangkan ketidaknyamanan menunggu. Pelanggan dapat bergabung dalam antrean virtual dan menunggu di mana saja mereka inginkan sambil tetap mendapatkan pembaruan real-time di perangkat seluler mereka. Tidak hanya mereka dapat memilih untuk menunggu di tempat yang lebih nyaman atau melakukan tugas lain sambil menunggu antrean virtual juga akan meminimalkan waktu tunggu dan mengurangi kerumunan di area tunggu Anda."
          )}
        </p>
      </div>

      <Teaser
        preTitle=""
        title={italicizeText("Bebaskan Pelanggan Anda dari Ruang Tunggu")}
        description={italicizeText(
          "Sistem Antrean Virtual kami mengubah waktu tunggu yang membosankan menjadi waktu bebas. Biarkan pelanggan Anda menunggu di kafe, di taman, atau di mana pun mereka suka."
        )}
        imageSrc={teaser1}
        imageAlt="teaser1 Bebaskan Pelanggan Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />

      <Teaser
        preTitle=""
        title={italicizeText("Pangkas Waktu Tunggu, Hapus Kerumunan")}
        description={italicizeText(
          "Sistem kami secara drastis mengurangi waktu tunggu dan menghilangkan antrean fisik di dalam area layanan Anda, menciptakan lingkungan yang lebih santai dan produktif."
        )}
        imageSrc={teaser2}
        imageAlt="teaser2 Pangkas Waktu Tunggu Exaque"
        imageOnRight={false}
        disableButton={true}
      />

      <Teaser
        preTitle=""
        title={italicizeText("Bangun hubungan pelanggan yang lebih baik")}
        description={italicizeText(
          "Perkuat hubungan dan fasilitasi perjalanan pelanggan dengan antrean virtual. Penuhi kebutuhan pelanggan hari ini dan di masa depan dan sesuai keinginan mereka."
        )}
        imageSrc={teaser3}
        imageAlt="teaser3 Hubungan Pelanggan Exaque"
        imageOnRight={true}
        disableButton={true}
      />

      <Teaser
        preTitle=""
        title={italicizeText("Kelola arus pelanggan dan tingkatkan efisiensi")}
        description={italicizeText(
          "Kelola arus pelanggan dan minimalkan pelanggan yang pergi (walkaways) dengan menjaga pelanggan tetap terinformasi melalui pembaruan status dan notifikasi."
        )}
        imageSrc={teaser4}
        imageAlt="teaser4 Efisiensi Exaque"
        imageOnRight={false}
        disableButton={true}
      />
    </section>
  );
}

export default MobileTicketTeaser;
