import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="bg-primary min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">  
      <div className="max-w-2xl mx-auto">
        <h1 className="text-8xl md:text-9xl font-extrabold text-accent mb-6">
          404
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Maaf, kami tidak dapat menemukan halaman yang Anda cari. 
          Mungkin halaman tersebut telah dipindahkan, dihapus, atau Anda salah mengetik alamatnya.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-2xl shadow-md hover:bg-accent-hover transition-colors"
        >
          &larr; Kembali ke Beranda
        </Link>
        <div className="mt-8">
            <p className="text-base text-txt-subtle">
                Atau, jika Anda memerlukan bantuan, silakan <Link to="/kontak" className="text-accent font-medium hover:underline">Hubungi Kami</Link>.
            </p>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;