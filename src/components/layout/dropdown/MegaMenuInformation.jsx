import React from "react";
import MegaMenuItem from "./MegaMenuItem";

const MegaMenuInformasi = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-8">
      <div className="col-span-1">
        <h3 className="text-sm font-semibold uppercase text-white tracking-wider border-b border-white pb-3">
          Informasi
        </h3>

        <div className="mt-4 grid grid-flow-col grid-rows-6 gap-x-6 gap-y-3">
          <MegaMenuItem
            to="/tentang-exaque"
            title="Tentang Exaque"
            description="Pelajari siapa kami dan bagaimana kami membantu kesuksesan organisasi Anda"
          />
          <MegaMenuItem
            to="/blog"
            title="Blog"
            description="Dapatkan wawasan industri, berita terbaru, dan tips dari tim ahli kami"
          />
          <MegaMenuItem
            to="/faq"
            title="FAQ"
            description="Butuh bantuan? Cek pertanyaan dan jawaban umum di sini"
          />
        </div>
      </div>
    </div>
  );
};

export default MegaMenuInformasi;
