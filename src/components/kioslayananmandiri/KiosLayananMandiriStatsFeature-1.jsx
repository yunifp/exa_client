import React from "react";
import StatsFeatureCard from "../common/StatsFeatureCard";
import Checklist from "../../assets/icons/ic_checklist.svg";

function KiosLayananMandiriStatsFeature1() {
  return (
    <div className="w-full bg-subtle-light">
      <div className="container mx-auto px-6">
        <div className="container mx-auto px-6 mb-8 text-center max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ciptakan Nilai di Setiap Interaksi.
          </h2>
          <p className="text-lg text-gray-600">
            Optimalkan layanan, efisiensi, dan pendapatan melalui satu <i>platform</i>
            terintegrasi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatsFeatureCard
            imageUrl={Checklist}
            title="Meningkatkan Pengalaman Pelanggan"
            description={
              <>
                <ul className="list-disc pl-5 text-start">
                  <li>Mengurangi waktu tunggu dan antrean</li>
                  <li>
                    Menyediakan pengalaman yang personal dan terpadu sesuai
                    dengan kebutuhan layanan
                  </li>
                  <li>
                    Menciptakan lingkungan layanan yang nyaman dan menyenangkan
                  </li>
                </ul>
              </>
            }
          />
          <StatsFeatureCard
            imageUrl={Checklist}
            title="Meningkatkan Operasional"
            description={
              <>
                <ul className="list-disc pl-5 text-start">
                  <li>
                    Segmentasikan pelanggan untuk menghindari waktu tunggu yang
                    tidak perlu
                  </li>
                  <li>
                    Bebaskan karyawan untuk mengelola tugas-tugas tingkat tinggi
                    guna meningkatkan kualitas layanan dan produktivitas
                    karyawan yang optimal
                  </li>
                  <li>Tingkatkan kepuasan karyawan dan pelanggan</li>
                </ul>
              </>
            }
          />
          <StatsFeatureCard
            imageUrl={Checklist}
            title="Tingkatkan Penjualan"
            description={
              <>
                <ul className="list-disc pl-5 text-start">
                  <li>
                    Mengurangi waktu transaksi, pelanggan yang pergi tanpa
                    membeli, dan pelanggan yang tidak hadir
                  </li>
                  <li>
                    Mengidentifikasi pelanggan untuk penjualan silang dan
                    peningkatan penjualan
                  </li>
                  <li>
                    Menyesuaikan staf dengan kebutuhan pelanggan dan membangun
                    kepercayaan serta loyalitas pelanggan{" "}
                  </li>
                </ul>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default KiosLayananMandiriStatsFeature1;
