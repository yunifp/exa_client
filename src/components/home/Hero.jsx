import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-beranda.webp";

function Hero() {
  const heroStyle = {
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
      url(${heroImage})
    `,
  };

  return (
    <section
      className="relative min-h-[900px] w-full flex items-center bg-cover bg-center text-white rounded-b-3xl overflow-hidden"
      style={heroStyle}
    >
      <div className="container mx-auto px-6">
        <div className="md:w-1/2 lg:w-2/3 text-left">
          <span className="block text-lg font-medium mb-2">
            Selamat Datang di Exaque
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
           Satu Sistem Untuk Kelola Perjalanan Pelanggan di Seluruh Cabang Anda
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-xl">
            Muluskan interaksi pelanggan, mulai dari titik antrian hingga
            perjalanan <i>omnichannel</i>.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/demo"
              className="px-6 py-3 bg-accent text-white font-semibold rounded-2xl shadow-md hover:bg-accent-hover transition-colors duration-300"
            >
              Permintaan Demo
            </Link>
            <Link
              to="/kontak"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-primary hover:text-gray-900 transition-colors duration-300"
            >
              Konsultasi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
