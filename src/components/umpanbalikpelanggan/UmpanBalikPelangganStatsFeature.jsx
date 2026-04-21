import React from "react";
import StatsFeatureCard from "../common/StatsFeatureCard";
import IconLocation from "../../assets/icons/ic_location-filled.svg";
import IconPaperPlane from "../../assets/icons/ic_paper-plane-tilt.svg";
import IconAscending from "../../assets/icons/ic_ascending.svg";

function UmpanBalikPelangganStatsFeature() {
  return (
    <div className="w-full bg-subtle-light py-12">
      <div className="container mx-auto px-6">
        <div className="container mx-auto px-6 mb-8 text-center max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Identifikasi. Jangkau. Tingkatkan.
          </h2>
          <p className="text-lg text-gray-600">
            Ubah data pelanggan dan umpan balik menjadi pengalaman layanan yang
            sempurna.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatsFeatureCard
            imageUrl={IconLocation}
            title="Identifikasi area-area yang perlu ditingkatkan secara spesifik di setiap cabang."
            description="Identifikasi masalah yang dihadapi pelanggan dan evaluasi kinerja cabang untuk meningkatkan pengalaman pelanggan dan memastikan kualitas layanan yang konsisten di setiap lokasi cabang."
          />
          <StatsFeatureCard
            imageUrl={IconPaperPlane}
            title="Jangkau pelanggan pada waktu yang tepat"
            description="Kirimkan formulir umpan balik yang disesuaikan kepada pelanggan Anda untuk berinteraksi dengan mereka sesuai kenyamanan mereka, segera setelah kunjungan, keesokan harinya, atau minggu depan, agar Anda dapat memperoleh wawasan yang diperlukan untuk meningkatkan layanan Anda."
          />
          <StatsFeatureCard
            imageUrl={IconAscending}
            title="Kumpulkan data pelanggan yang berharga."
            description="Identifikasi masalah yang dihadapi pelanggan dan evaluasi kinerja cabang untuk meningkatkan pengalaman pelanggan dan memastikan kualitas layanan yang konsisten di setiap lokasi cabang."
          />
        </div>
      </div>
    </div>
  );
}

export default UmpanBalikPelangganStatsFeature;
