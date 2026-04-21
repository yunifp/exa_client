import React from "react";
import { Link } from "react-router-dom";

/**
 * Komponen Promo Teaser yang dapat digunakan kembali untuk menampilkan solusi/platform utama.
 * @param {object} props
 * @param {string} props.title - Judul bagian.
 * @param {string} props.description - Deskripsi bagian.
 * @param {string} props.imageSrc - URL gambar.
 * @param {string} props.imageAlt - Alt teks untuk gambar.
 * @param {string} props.buttonText - Teks tombol utama.
 * @param {string} props.buttonLink - Link tujuan tombol utama.
 * @param {boolean} [props.imageOnLeft=true] - Jika true, gambar di kiri. Jika false, gambar di kanan.
 * @param {React.ReactNode} [props.preTitle] - Elemen opsional untuk pre-title/kategori.
 * @param {boolean} [props.disableButton=false] - Jika true, tombol tidak akan ditampilkan.
 */
function PromoTeaser({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  buttonLink,
  preTitle,
  imageOnLeft = true,
  disableButton = false,
}) {
  const contentOrder = imageOnLeft ? "md:order-2" : "md:order-1";
  const imageOrder = imageOnLeft ? "md:order-1" : "md:order-2";

  return (
    <section className="bg-subtle-light">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`order-1 ${imageOrder}`}>
            <div className="relative rounded-3xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full mx-auto rounded-xl"
              />
            </div>
          </div>

          <div className={`order-2 ${contentOrder} space-y-4`}>
            {preTitle && (
              <p className="text-sm font-semibold uppercase text-accent">
                {preTitle}
              </p>
            )}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              {title}
            </h2>
            <p className="text-base text-gray-600 mb-6">{description}</p>

            {!disableButton && (
              <Link
                to={buttonLink}
                className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg shadow-md hover:bg-accent-hover transition-colors"
              >
                {buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoTeaser;
