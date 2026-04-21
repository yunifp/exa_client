import React from "react";
import Card from "../common/Card";
import dummyImage from "../../assets/dummy.png";
import Microsoft from "../../assets/microsoft-teams.svg";
import Salesforce from "../../assets/salesforce.svg";
import Zoom from "../../assets/zoom.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import PowerBI from "../../assets/power-bi.svg";
import SiebelOracle from "../../assets/siebel-oracle.svg";

const integrationData = [
  {
    title: "Microsoft Teams",
    description:
      "Izinkan pelanggan untuk memesan pertemuan virtual melalui Teams.",
    imageUrl: Microsoft,
  },
  {
    title: "Salesforce",
    description:
      "Kelola antrean dan atur aliran pelanggan langsung di Salesforce.",
    imageUrl: Salesforce,
    link: "/salesforce",
  },
  {
    title: "Zoom",
    description:
      "Memungkinkan pelanggan untuk menjadwalkan pertemuan virtual dengan Zoom.",
    imageUrl: Zoom,
  },
  {
    title: "Whatsapp",
    description:
      "Izinkan pelanggan untuk masuk ke antrean virtual melalui WhatsApp.",
    imageUrl: Whatsapp,
  },
  {
    title: "Power BI",
    description:
      "Lihat data Anda bersama data dari sistem dan sumber lain untuk mengambil keputusan bisnis yang lebih cerdas.",
    imageUrl: PowerBI,
    link: "/power-bi",
  },
  {
    title: "Siebel Oracle",
    description:
      "Identifikasi dan prioritaskan permintaan pelanggan sesuai dengan tingkat prioritasnya.",
    imageUrl: SiebelOracle,
  },
];

function IntegrasiCard() {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {integrationData.map((item, index) => (
            <Card
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
              link={item.link || ""}
            />
          ))}

          {integrationData.length % 3 !== 0 && (
            <div className="hidden lg:block"></div>
          )}
        </div>
      </div>
    </section>
  );
}

export default IntegrasiCard;
