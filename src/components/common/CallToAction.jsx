import React from "react";
import { Link } from "react-router-dom";

import CtaImage from "../../assets/cta-woman-1.webp";

/**
 * Komponen Call To Action (CTA)
 * @param {object} props
 * @param {string} [props.preTitle] - Teks di atas judul (pre-title).
 * @param {string} [props.title] - Judul utama CTA.
 * @param {string} [props.buttonText] - Teks tombol.
 * @param {string} [props.buttonLink] - Link tombol.
 * @param {string} [props.imageUrl] - URL gambar. Jika tidak diisi, menggunakan default.
 * @param {string} [props.bgColor] - Kelas background kustom.
 * @param {string} [props.buttonColor] - Kelas warna background tombol.
 * @param {string} [props.titleColor] - Kelas warna judul kustom.
 */
function CallToAction({
  preTitle = "Siap Mentransformasi Pengalaman Pelanggan Anda?",
  title = "Mari Diskusikan Kebutuhan Anda, Kami Akan Tunjukkan Solusinya.",
  buttonText = "Konsultasi Sekarang",
  buttonLink = "/kontak",
  imageUrl = CtaImage,
  bgColor= "bg-[#DEE1E3]",
  buttonColor = "bg-accent text-white hover:bg-accent-hover",
  titleColor = "text-gray-800",
}) {
  const finalButtonClass = `inline-block px-8 py-3 font-semibold rounded-2xl shadow-md transition-colors ${buttonColor}`;

  return (
    <section className={`py-12 lg:py-20 ${bgColor}`}>
      <div className="container flex flex-col md:flex-row mx-auto px-6 gap-12 items-center">
        <div className="space-y-6 w-2/3">
          <p className="text-lg text-gray-600">{preTitle}</p>
          <h2
            className={`text-3xl lg:text-5xl font-bold leading-tight ${titleColor}`}
          >
            {title}
          </h2>
          <Link to={buttonLink} className={finalButtonClass}>
            {buttonText}
          </Link>
        </div>

        <div className="text-center md:text-right">
          <img
            src={imageUrl}
            alt={title}
            className="inline-block w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
