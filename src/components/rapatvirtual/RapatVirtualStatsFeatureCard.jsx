import React from "react";
import StatsFeatureCard from "../common/StatsFeatureCard";
import defaultImage from "../../assets/icons/ic_checklist.svg";

function RapatVirtualStatsFeature() {
  return (
    <div className="w-full bg-subtle-light py-12">
      <div className="container mx-auto px-6">
        <div className="container mx-auto px-6 mb-8 text-center max-w-7xl">
          <h3 className="text-sm font-semibold uppercase text-accent">
            KEUNGGULAN RAPAT VIRTUAL
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mengapa Rapat Virtual
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatsFeatureCard
            imageUrl={defaultImage}
            title={
              <>
                Tawarkan Fleksibilitas Layanan <em>Hybrid</em>
              </>
            }
            description={
              <>
                Berikan pelanggan Anda layanan yang lebih mudah diakses dan
                fleksibilitas yang lebih baik dengan menggabungkan opsi layanan
                tatap muka (<em>in-person</em>) dan <em>online</em>.
              </>
            }
          />

          <StatsFeatureCard
            imageUrl={defaultImage}
            title={
              <>
                <em>Platform</em> Terpadu untuk Pengalaman <em>Omnichannel</em>
              </>
            }
            description={
              <>
                Kelola rapat virtual, janji temu, dan antrean dalam satu{" "}
                <em>platform</em> tunggal, serta berikan pengalaman{" "}
                <em>omnichannel</em> yang mulus untuk pelanggan Anda.
              </>
            }
          />

          <StatsFeatureCard
            imageUrl={defaultImage}
            title={
              <>
                Ciptakan Tenaga Kerja <em>Hybrid</em> yang Gesit
              </>
            }
            description={
              <>
                Bangun tim kerja <em>hybrid</em> yang gesit (<em>agile</em>) agar
                dapat melayani permintaan pelanggan di berbagai saluran secara
                efisien.
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default RapatVirtualStatsFeature;
