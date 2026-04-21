import React from "react";
import { Link } from "react-router-dom";

import productImage from "../../assets/product-teaser.webp";

function ProductTeaser() {
  const title = "Solusi Modern Untuk Antrean Perjalanan Pelanggan Anda.";
  const description =
    "Qmatic Orchestra mengelola seluruh aliran pelanggan Anda secara efisien mulai dari janji temu, antrean, umpan balik, hingga analisis canggih. Ini adalah alat lengkap Anda untuk menciptakan pengalaman pelanggan yang luar biasa, meningkatkan lingkungan kerja, dan mengoptimalkan operasional melalui wawasan yang mendalam.";
  const buttonText = "Permintaan Demo";
  const buttonLink = "/demo";
  const imageUrl = productImage;

  return (
    <section className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left max">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">{description}</p>
          <Link
            to={buttonLink}
            className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-full shadow-md hover:bg-accent-hover transition-colors"
          >
            {buttonText}
          </Link>
        </div>

        <div>
          <img
            src={imageUrl}
            alt="Solusi Modern Exaque"
            className="w-full mx-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductTeaser;
