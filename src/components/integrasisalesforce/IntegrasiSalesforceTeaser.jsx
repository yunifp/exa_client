import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import Teaser from "../common/Teaser";

import teaser1 from "../../assets/integrasi-salesforce-teaser-1.webp";
import teaser2 from "../../assets/integrasi-salesforce-teaser-2.webp";
import teaser3 from "../../assets/integrasi-salesforce-teaser-3.webp";
import videoThumbnail from "../../assets/salesforce.webp";

const VIDEO_SRC = "/video/QmaticSalesforceIntegration.m3u8";

function IntegrasiSalesforceTeaser() {
  const videoRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const video = videoRef.current;
    if (!video) return;

    let hls;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = VIDEO_SRC;
    } else if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(VIDEO_SRC);
      hls.attachMedia(video);
    }

    video.play();

    return () => {
      video.pause();
      video.removeAttribute("src");
      video.load();
      if (hls) hls.destroy();
    };
  }, [open]);

  return (
    <section className="bg-primary">
      <div className="container mx-auto max-w-7xl space-y-10 px-6 mb-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Permudah Dengan Integrasi Salesforce
          </h2>
          <p className="text-lg text-gray-600">
            Integrasi Salesforce memudahkan staf untuk mengelola antrean dan alur
            pelanggan langsung di Salesforce.
          </p>
        </div>

        <div
          className="relative w-full overflow-hidden rounded-xl shadow-lg cursor-pointer"
          style={{ paddingTop: "56.25%" }}
          onClick={() => setOpen(true)}
        >
          <img
            src={videoThumbnail}
            alt="Salesforce Integration Video"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white/90">
              <svg
                className="w-12 h-12 text-red-600 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-5xl px-6">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>
            <div
              className="relative w-full overflow-hidden rounded-xl bg-black"
              style={{ paddingTop: "56.25%" }}
            >
              <video
                ref={videoRef}
                controls
                playsInline
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

      <Teaser
        preTitle=""
        title="Tingkatkan pengalaman pelanggan Anda"
        description={
          <ul className="list-disc pl-5">
            <li>
              Persiapkan staf dengan informasi penting dari Salesforce tentang
              pelanggan untuk memberikan layanan cepat dan personal.
            </li>
            <li>
              Fokus pada kebutuhan pelanggan dan sesuaikan persyaratan layanan
              mereka dengan anggota staf yang tepat.
            </li>
          </ul>
        }
        imageSrc={teaser1}
        imageAlt="teaser1"
        imageOnRight={true}
        disableButton={true}
      />

      <Teaser
        preTitle=""
        title="Berdayakan karyawan Anda"
        description={
          <ul className="list-disc pl-5">
            <li>
              Berikan staf seperangkat alat lengkap di ruang kerja mereka untuk
              mengelola aliran pelanggan.
            </li>
            <li>
              Berikan pemberitahuan otomatis kepada pelanggan langsung dari
              Salesforce.
            </li>
          </ul>
        }
        imageSrc={teaser2}
        imageAlt="teaser2"
        imageOnRight={false}
        disableButton={true}
      />

      <Teaser
        preTitle=""
        title="Tingkatkan Efisiensi Kinerja"
        description={
          <ul className="list-disc pl-5">
            <li>
              Menghilangkan kebutuhan berpindah antar aplikasi sehingga staf
              fokus pada pelanggan.
            </li>
            <li>
              Tambahkan data pelanggan walk-in dan janji temu ke Salesforce.
            </li>
          </ul>
        }
        imageSrc={teaser3}
        imageAlt="teaser3"
        imageOnRight={true}
        disableButton={true}
      />
    </section>
  );
}

export default IntegrasiSalesforceTeaser;
