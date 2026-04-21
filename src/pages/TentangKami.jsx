import React, { useEffect } from "react";
import Hero from "../components/common/Hero";
import AboutIntro from "../components/tentang/AboutIntro";
import WhyExaque from "../components/tentang/WhyExaque";
import PartnershipFoundation from "../components/tentang/PartnershipFoundation";
import heroBg from "../assets/hero-tentang-exaque.webp"; 
import TentangCTA from "../components/tentang/TentangCTA";

const TentangKami = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroProps = {
    welcomeText: "Informasi",
    title: "Tentang Exaque",
    subtitle: "Kami mengubah interaksi pelanggan menjadi keunggulan kompetitif. Pelajari bagaimana kami mentransformasi perjalanan pelanggan di sektor keuangan, telekomunikasi, dan layanan publik.",
    imageUrl: heroBg,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Konsultasi",
    button2Link: "/kontak",
  };

  return (
    <div className="bg-white min-h-screen">
      <Hero {...heroProps} />
      <div className="py-8 md:py-20 space-y-15 md:space-y-20">
        <AboutIntro />
        <WhyExaque />
        <PartnershipFoundation />
      </div>
      <TentangCTA />
    </div>
  );
};

export default TentangKami;