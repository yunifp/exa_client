import React from "react";

import teamImage from "../../assets/hero-1.jpg";

const AboutIntro = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tentang <span className="text-accent">EXAQUE</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-justify">
              <p>
                Perjalanan Exaque berawal dari keyakinan sederhana: pengalaman
                pelanggan yang baik dimulai dari pengelolaan antrean yang
                cerdas. Sejak tahun 1990-an, tim pendiri Exaque menjadi pionir
                dalam memperkenalkan sistem antrean digital Qmatic di Indonesia
                jauh sebelum istilah <i>customer journey management</i> dikenal
                luas.
              </p>
              <p>
                Dari satu cabang bank yang mencoba sistem antrean modern, kami
                belajar bahwa teknologi hanyalah awal. Yang lebih penting adalah
                bagaimana setiap interaksi pelanggan diatur, diukur, dan diubah
                menjadi pengalaman yang lebih baik. Dari sanalah visi Exaque
                tumbuh: membantu organisasi besar mengelola perjalanan pelanggan
                mereka secara <i>end to end</i> dari antrean hingga kepuasan.
              </p>
              <p>
                Hari ini, Exaque menjadi mitra terpercaya bagi sektor keuangan,
                telekomunikasi, dan layanan publik dalam menghadirkan
                <i> customer experience</i> yang konsisten di seluruh cabang.
                Kami menggabungkan warisan panjang kami bersama Qmatic dengan
                pendekatan baru yang berfokus pada integrasi digital, analitik,
                dan efisiensi operasional.
              </p>
              <p>
                Lebih dari sekadar implementator sistem, kami melihat diri kami
                sebagai arsitek perjalanan pelanggan. Tugas kami adalah
                memastikan setiap titik kontak dari kedatangan hingga layanan
                selesai berjalan mulus, efisien, dan bermakna. Karena bagi kami,
                teknologi hanyalah alat; yang utama adalah pengalaman manusia di
                baliknya.
              </p>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <img
              src={teamImage}
              alt="Tim Exaque"
              className="rounded-2xl w-full h-auto shadow-lg object-cover"
            />

            <div className="absolute top-10 -left-6 md:-left-10 bg-accent text-white p-6 rounded-xl shadow-xl max-w-[200px] flex flex-col items-center text-center z-10">
              <svg
                className="w-8 h-8 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-3xl font-bold">10+ Mitra</h3>
              <p className="text-xs mt-1 opacity-90">
                Dipercaya Oleh 10+ Mitra Strategis
              </p>
            </div>

            <div className="absolute top-4 -right-4 md:-right-8 bg-white text-gray-800 p-6 rounded-xl shadow-xl max-w-[220px] flex items-center gap-4 z-10 border border-gray-100">
              <div className="bg-gray-100 p-3 rounded-full text-accent">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold">25+ Tahun</h3>
                <p className="text-xs text-gray-500 leading-tight">
                  Pelopor Sistem Manajemen Antrean Di Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
