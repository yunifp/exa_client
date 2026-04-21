import React from "react";
import StatsFeatureCard from "../common/StatsFeatureCard";
import Checklist from "../../assets/icons/ic_checklist.svg";

function DigitalSignageStatsFeature() {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-6 mb-8 text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Tingkatkan pengalaman pelanggan di lingkungan layanan Anda
        </h2>
        <p className="text-lg text-gray-600">
          Optimalkan pelayanan dan pengalaman pelanggan dengan solusi Digital
          Signage Qmatic. Teknologi cerdas untuk menampilkan informasi antrian,
          konten multimedia, dan pengumuman interaktif di seluruh area layanan
          Anda.
        </p>
      </div>
      <div className="bg-subtle-light py-12 mx-auto px-6">
        <div className="container mx-auto px-6 mb-8 text-center max-w-7xl">
          <p className="text-sm font-semibold uppercase text-accent">
            Keunggulan Digital Signage
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mengapa Digital Signage?
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <StatsFeatureCard
            imageUrl={Checklist}
            title="Meningkatkan Pengalaman Menunggu"
            description={
              <>
                <p>
                  Sampaikan informasi antrian, video, dan grafik menarik secara
                  jelas kepada pelanggan. Buat suasana menunggu menjadi lebih
                  nyaman dan informatif.
                </p>
              </>
            }
          />
          <StatsFeatureCard
            imageUrl={Checklist}
            title="Mengurangi Ketidakpastian Pelanggan"
            description={
              <>
                <p>
                  Berikan informasi yang akurat dan <i>real-time</i> agar pelanggan
                  tahu kapan giliran mereka dan apa yang perlu dilakukan
                  selanjutnya. Proses transaksi pun menjadi lebih cepat dan
                  efisien.
                </p>
              </>
            }
          />
          <StatsFeatureCard
            imageUrl={Checklist}
            title="Mempercepat Waktu Tunggu"
            description={
              <>
                <p>
                  Persepsi waktu tunggu pelanggan dapat berkurang secara
                  signifikan dengan tampilan visual dan konten dinamis yang
                  menghibur. Buat pelanggan merasa dihargai dan puas.
                </p>
              </>
            }
          />
          <StatsFeatureCard
            imageUrl={Checklist}
            title="Meningkatkan Arus Pelanggan"
            description={
              <>
                <p>
                  Optimalkan alur layanan dan arahkan pelanggan dengan jelas.
                  Dengan alur yang lebih efisien, throughput meningkat,
                  penjualan naik, dan performa layanan Anda semakin maksimal.
                </p>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default DigitalSignageStatsFeature;
