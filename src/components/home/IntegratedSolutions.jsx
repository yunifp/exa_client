import React, { useState, useMemo } from "react";

import solutionImage from "../../assets/solution-stats.png";

import AntreanVirtualBlack from "../../assets/icons/ic_antrean-virtual-black.svg";
import ManajemenAntreanBlack from "../../assets/icons/ic_manajemen-antrean-black.svg";
import ManajemenJadwalJanjiTemuBlack from "../../assets/icons/ic_manajemen-jadwal-janji-temu-black.svg";
import ManajemenPerjalananPelangganBlack from "../../assets/icons/ic_manajemen-perjalanan-pelanggan-black.svg";
import RapatVirtualBlack from "../../assets/icons/ic_rapat-virtual-black.svg";
import AntreanVirtualWhite from "../../assets/icons/ic_antrean-virtual-white.svg";
import ManajemenAntreanWhite from "../../assets/icons/ic_manajemen-antrean-white.svg";
import ManajemenJadwalJanjiTemuWhite from "../../assets/icons/ic_manajemen-jadwal-janji-temu-white.svg";
import ManajemenPerjalananPelangganWhite from "../../assets/icons/ic_manajemen-perjalanan-pelanggan-white.svg";
import RapatVirtualWhite from "../../assets/icons/ic_rapat-virtual-white.svg";

function SolutionItem({ iconBlack, iconWhite, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  const currentIcon = useMemo(
    () => (isHovered ? iconWhite : iconBlack),
    [isHovered, iconBlack, iconWhite]
  );

  const backgroundClass = isHovered ? "bg-accent" : "bg-antiflash-white";

  return (
    <div
      className="flex items-start gap-4 transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-shrink-0">
        <div className={`p-3 rounded-full transition ${backgroundClass}`}>
          <img
            src={currentIcon}
            alt={`${title} icon`}
            className="w-7 h-7 md:w-8 md:h-8"
          />
        </div>
      </div>

      <div>
        <h4 className="text-lg md:text-xl font-semibold text-gray-800">
          {title}
        </h4>
        <p className="text-sm md:text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function IntegratedSolutions() {
  const description =
    "Di Exaque, kami tidak hanya mengelola titik interaksi. Kami merancang sebuah ekosistem. Setiap fitur, mulai dari antrean virtual hingga rapat jarak jauh, terintegrasi untuk memberikan efisiensi operasional bagi Anda dan pengalaman yang mulus tanpa hambatan bagi pelanggan Anda.";

  return (
    <section className="bg-white">
      <div className="container mx-auto px-5 md:px-8 space-y-16">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
              Solusi Terpadu Exaque
            </h2>

            <p className="text-lg md:text-xl text-gray-600">{description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <SolutionItem
              iconBlack={ManajemenAntreanBlack}
              iconWhite={ManajemenAntreanWhite}
              title="Manajemen Antrean"
              description="Melayani pelanggan secara efisien dan mengurangi waktu tunggu"
            />

            <SolutionItem
              iconBlack={ManajemenPerjalananPelangganBlack}
              iconWhite={ManajemenPerjalananPelangganWhite}
              title="Manajemen Perjalanan Pelanggan"
              description="Mengelola alur dari awal hingga akhir, dan dapatkan wawasan tentang operasi Anda"
            />

            <SolutionItem
              iconBlack={AntreanVirtualBlack}
              iconWhite={AntreanVirtualWhite}
              title="Antrean Virtual"
              description={
                <>
                  Memungkinkan pelanggan menunggu di mana saja dengan{" "}
                  <em>mobile ticket</em>
                </>
              }
            />

            <SolutionItem
              iconBlack={ManajemenJadwalJanjiTemuBlack}
              iconWhite={ManajemenJadwalJanjiTemuWhite}
              title="Manajemen Jadwal Janji Temu"
              description="Meningkatkan operasi dengan pemesanan janji temu dan manajemen kedatangan"
            />

            <SolutionItem
              iconBlack={RapatVirtualBlack}
              iconWhite={RapatVirtualWhite}
              title="Rapat Virtual"
              description="Pelayanan pelanggan dapat dilakukan dari jarak jauh melalui aplikasi rapat virtual."
            />
          </div>

          <div>
            <img
              src={solutionImage}
              alt="Solusi Terpadu Exaque"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntegratedSolutions;
