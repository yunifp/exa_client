import React from "react";
import MegaMenuItem from "./MegaMenuItem";

const MegaMenuSolusi = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-8">
      <div className="col-span-1">
        <h3 className="text-sm font-semibold uppercase text-white tracking-wider border-b border-white pb-3">
          Solusi
        </h3>{" "}
        <ul className="mt-4 space-y-4">
          <li>
            <MegaMenuItem
              to="/solusi"
              title="Solusi"
              description="Solusi enterprise yang dibuat untuk organisasi dengan persyaratan kompleks, beberapa titik layanan, dan cabang."
            />
          </li>
        </ul>
      </div>

      <div className="col-span-2">
        <h3 className="text-sm font-semibold uppercase text-white tracking-wider border-b border-white pb-3">
          Solusi-solusi
        </h3>

        <div className="mt-4 grid grid-flow-col grid-rows-6 gap-x-6 gap-y-3">
          <MegaMenuItem
            to="/manajemen-antrean"
            title="Manajemen Antrean"
            description="Melayani pelanggan secara efisien dan mengurangi waktu tunggu."
          />
          <MegaMenuItem
            to="/manajemen-perjalanan-pelanggan"
            title="Manajemen Perjalanan Pelanggan"
            description="Mengelola alur dari awal hingga akhir, dan dapatkan wawasan tentang operasi Anda"
          />
          <MegaMenuItem
            to="/antrean-virtual"
            title="Antrean Virtual"
            description="Memungkinkan pelanggan menunggu di mana saja dengan tiket seluler"
          />
          <MegaMenuItem
            to="/manajemen-jadwal-janji-temu"
            title="Manajemen Jadwal Janji Temu"
            description="Meningkatkan operasi dengan pemesanan janji temu dan manajemen kedatangan"
          />
          <MegaMenuItem
            to="/rapat-virtual"
            title="Rapat Virtual"
            description="Pelayanan pelanggan dapat dilakukan dari jarak jauh melalui aplikasi rapat virtual."
          />
          <MegaMenuItem
            to="/manajemen-pengunjung"
            title="Manajemen Pengunjung"
            description="Kelola aliran pengunjung Anda dengan sistem pendaftaran pengunjung yang dirancang untuk meningkatkan efisiensi operasional dan menjaga keamanan pengunjung serta staf."
          />
        </div>
      </div>
    </div>
  );
};

export default MegaMenuSolusi;
