import React from "react";
import Hero from "../components/common/Hero";
import ManajemenPengunjungAccordion from "../components/manajemenpengunjung/ManajemenPengunjungAccordion";
import heroBg from "../assets/hero-manajemen-pengunjung.webp";
import ManajemenPengunjungTeaser from "../components/manajemenpengunjung/ManajemenPengunjungTeaser";
import ManajemenPengunjungFeature from "../components/manajemenpengunjung/ManajemenPengunjungFeature";
import ManajemenPengunjungCTA from "../components/manajemenpengunjung/ManajemenPengunjungCTA";

const ManajemenPengunjung = () => {
  const heroProps = {
    welcomeText: "Solusi",
    title: "Manajemen Pengunjung",
    subtitle:
      "Kelola aliran pengunjung Anda dengan sistem pendaftaran pengunjung yang dirancang untuk meningkatkan efisiensi operasional dan menjaga keamanan pengunjung serta staf.",
    imageUrl: heroBg,
    textAlign: "text-center mx-auto",
    showButtons: false,
  };

  return (
    <div className="bg-white min-h-screen">
      <Hero {...heroProps} />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
      <ManajemenPengunjungTeaser />
      <ManajemenPengunjungAccordion />
      <ManajemenPengunjungFeature />
      </div>
      <ManajemenPengunjungCTA />
    </div>
  );
};

export default ManajemenPengunjung;
