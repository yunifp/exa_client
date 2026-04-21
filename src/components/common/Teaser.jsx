import React from "react";
import { Link } from "react-router-dom";

/**
 * Komponen Teaser yang dapat digunakan kembali untuk memamerkan fitur produk/solusi.
 * @param {object} props
 * @param {string} props.title - Judul bagian.
 * @param {React.ReactNode} props.description - Deskripsi bagian (dapat berupa string atau JSX seperti ul/li).
 * @param {string} props.imageSrc - URL gambar.
 * @param {string} props.imageAlt - Alt teks untuk gambar.
 * @param {string} props.buttonText - Teks tombol utama.
 * @param {string} props.buttonLink - Link tujuan tombol utama.
 * @param {boolean} [props.imageOnRight=true] - Jika true, gambar di kanan. Jika false, gambar di kiri.
 * @param {React.ReactNode} [props.preTitle] - Elemen opsional untuk pre-title/kategori.
 * @param {boolean} [props.disableButton=false] - Jika true, tombol tidak akan ditampilkan.
 */
function Teaser({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  buttonLink,
  preTitle,
  imageOnRight = true,
  disableButton = false,
}) {
  const contentOrder = imageOnRight ? "md:order-1" : "md:order-2";
  const imageOrder = imageOnRight ? "md:order-2" : "md:order-1";

  return (
    <section className="container mx-auto px-6 pt-16 md:pt-20">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        {/* Kolom Gambar */}
        <div className={`order-2 ${imageOrder}`}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full mx-auto rounded-2xl"
          />
        </div>

        {/* Kolom Teks */}
        <div className={`order-1 ${contentOrder} space-y-4`}>
          {preTitle && (
            <p className="text-sm font-semibold uppercase text-accent">
              {preTitle}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight capitalize">
            {title}
          </h2>
          <div className="text-base text-gray-600 mb-6">{description}</div>
          {/* Kolom Button */}
          {!disableButton && (
            <Link
              to={buttonLink}
              className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-2xl shadow-md hover:bg-accent-hover transition-colors"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default Teaser;
