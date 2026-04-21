import React from "react";
import MegaMenuItem from "./MegaMenuItem";

const MegaMenuProduct = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-8">
      <div className="col-span-1">
        <h3 className="text-sm font-semibold uppercase text-white tracking-wider border-b border-white pb-3">
          Produk
        </h3>
        <ul className="mt-4 space-y-4">
          <li>
            <MegaMenuItem
              to="/qmatic-orchestra"
              title="Qmatic Orchestra"
              description="Solusi enterprise yang dibuat untuk organisasi dengan persyaratan kompleks, beberapa titik layanan, dan cabang."
            />
          </li>
        </ul>
      </div>

      <div className="col-span-2">
        <h3 className="text-sm font-semibold uppercase text-white tracking-wider border-b border-white pb-3">
          Kapabilitas
        </h3>

        <div className="mt-4 grid grid-flow-col grid-rows-6 gap-x-6 gap-y-3">
          <MegaMenuItem
            to="/janji-temu"
            title="Janji Temu Digital"
            description="Ciptakan pengalaman pelanggan yang lebih personal dan efisien dengan sistem penjadwalan online yang mudah dan fleksibel."
          />
          <MegaMenuItem
            to="/perencanaan-sumber-daya"
            title="Perencanaan Sumber Daya"
            description="Dapatkan gambaran menyeluruh tentang alokasi sumber daya, identifikasi kekurangan, dan optimalkan kinerja tim untuk memenuhi permintaan pelanggan."
          />
          <MegaMenuItem
            to="/mobile-ticket"
            title="Mobile Ticket"
            description="Biarkan pelanggan Anda menunggu secara virtual kapan pun dan di mana pun dengan sistem antrian digital berbasis mobile."
          />
          <MegaMenuItem
            to="/umpan-balik"
            title="Umpan Balik Pelanggan"
            description="Kumpulkan insight berharga tentang kebutuhan pelanggan Anda, tingkatkan hubungan dan kepuasan pelanggan di setiap titik interaksi."
          />
          <MegaMenuItem
            to="/business-intelligence"
            title="Intelegensi Bisnis"
            description="Dorong keunggulan operasional dan produktivitas melalui integrasi data serta analisis bisnis yang cerdas."
          />
          <MegaMenuItem
            to="/pesan-otomatis"
            title="Pesan Otomatis"
            description="Hubungkan pelanggan di setiap tahap perjalanan mereka melalui sistem SMS dan notifikasi yang handal dan efektif."
          />

          <MegaMenuItem
            to="/keamanan-sistem"
            title="Keamanan Sistem"
            description="Keamanan adalah prioritas utama kami setiap solusi Qmatic dirancang dengan standar keamanan tinggi untuk melindungi data dan privasi pelanggan Anda."
          />
          <MegaMenuItem
            to="/kios-layanan-mandiri"
            title="Kios Layanan Mandiri"
            description="Optimalkan alur pelanggan dan kurangi waktu tunggu dengan solusi kios mandiri yang modern dan efisien."
          />
          <MegaMenuItem
            to="/tampilan-papan-informasi-digital"
            title="Tampilan & Papan Informasi Digital"
            description="Tingkatkan pengalaman pelanggan melalui tampilan digital yang informatif, menarik, dan mudah diperbarui."
          />
          <MegaMenuItem
            to="/pengumuman-suara-otomatis"
            title="Pengumuman Suara Otomatis"
            description="Informasikan pelanggan secara real-time tentang giliran mereka dengan teknologi pengumuman berbasis AI."
          />
          <MegaMenuItem
            to="/dukungan-perangkat-lunak"
            title="Dukungan Perangkat Lunak"
            description="Pastikan sistem Anda selalu dalam kondisi terbaik dengan layanan dukungan dan optimasi profesional dari tim kami."
          />
        </div>
      </div>
    </div>
  );
};

export default MegaMenuProduct;
