import React, { useState } from "react";

function AboutTeaser() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Update ID video dari link baru (AeeMT7FuQ1k)
  const videoId = "AeeMT7FuQ1k";
  const thumbnailImage = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <>
      <section className="bg-white">
        <div className="container mx-auto px-5 md:px-8 space-y-16">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
            <div
              className="relative w-full overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              style={{ paddingTop: "56.25%" }}
              onClick={() => setIsOpen(true)}
            >
              <img
                src={thumbnailImage}
                alt="About Exaque Video"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  <svg
                    className="w-6 h-6 text-accent ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                Temukan Solusi Kami
              </h2>

              <p className="text-lg md:text-xl text-gray-600">
                <span className="italic">Platform</span> Manajemen Perjalanan
                Pelanggan yang dipercaya oleh perusahaan-perusahaan terkemuka
                untuk meningkatkan{" "}
                <span className="font-semibold text-gray-800">
                  operasional, keuntungan,
                </span>{" "}
                serta{" "}
                <span className="font-semibold text-gray-800">
                  pengalaman pelanggan dan karyawan.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Exaque Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>

            <button
              className="absolute -top-10 right-0 text-white hover:text-accent transition"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutTeaser;