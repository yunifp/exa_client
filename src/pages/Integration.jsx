import React from "react";

import Hero from "../components/common/Hero";
import IntegrasiHeroImage from "../assets/hero-integrasi.webp";
import IntegrasiCard from "../components/integrasi/IntegrasiCard";


function integrasi() {
  const MobileTicketHeroProps = {
    welcomeText: "",
    title: "Integrasi",
    subtitle: (
      <p>
        Hubungkan alat favorit Anda dengan Exaque.
        <br />
        Di sini Anda akan menemukan beberapa contoh terpilih dari integrasi
        paling populer yang telah dibuat.
      </p>
    ),
    imageUrl: IntegrasiHeroImage,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Konsultasi",
    button2Link: "/kontak",
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...MobileTicketHeroProps} />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
      <IntegrasiCard />
      </div>
    </div>
  );
}

export default integrasi;
