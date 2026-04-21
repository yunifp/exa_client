import React from "react";

import Hero from "../components/common/Hero";
import MobileTicketTeaser from "../components/mobileticket/MobileTicketTeaser";
import MobileTicketFeature from "../components/mobileticket/MobileTicketFeature";
import MobileTicketAccordion from "../components/mobileticket/MobileTicketAccordion";
import MobileTicketCTA from "../components/mobileticket/MobileTicketCTA";

import MobileTicketHeroImage from "../assets/hero-mobile-ticket.webp";

const italicizeText = (text) => {
  const keywords = [
    "real time",
    "walkaways",
    "right to left",
    "branding",
    "brand",
    "mobile",
    "ticket",
  ];

  const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");

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

function MobileTicket() {
  const MobileTicketHeroProps = {
    welcomeText: italicizeText("Qmatic Orchestra"),
    title: italicizeText("Mobile Ticket"),
    subtitle: italicizeText(
      "Biarkan pelanggan Anda menunggu secara virtual, di mana saja dengan mobile experience real time untuk memperkuat branding dan brand secara konsisten dari right to left tanpa walkaways."
    ),
    imageUrl: MobileTicketHeroImage,
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
      <div className="py-16 md:py-20 space-y-8 md:space-y-20">
        <MobileTicketTeaser />
        <MobileTicketFeature />
        <MobileTicketAccordion />
      </div>
      <MobileTicketCTA />
    </div>
  );
}

export default MobileTicket;
