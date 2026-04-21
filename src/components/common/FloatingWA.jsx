import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloating = ({
  phoneNumber = "6285775558787",
  message = "Hallo admin, Saya ingin berkonsultasi terkait solusi end-to-end untuk manajemen Perjalanan Pelanggan di Tingkat Enterprise.",
}) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat kami via WhatsApp"
      className="
        fixed bottom-6 right-6 
        bg-green-500 text-white
        w-14 h-14 rounded-full 
        shadow-lg flex justify-center items-center 
        hover:bg-green-600
        transition
        z-50
      "
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppFloating;