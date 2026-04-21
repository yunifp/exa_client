import React from "react";
import StatsFeatureCard from "../common/StatsFeatureCard";
import item1 from "../../assets/icons/kios-layanan-mandiri-item-1.svg";
import item2 from "../../assets/icons/kios-layanan-mandiri-item-2.svg";
import item3 from "../../assets/icons/kios-layanan-mandiri-item-3.svg";

function KiosLayananMandiriStatsFeature2() {
  return (
    <div className="w-full bg-subtle-light">
      <div className="container mx-auto px-6">
        <div className="container mx-auto px-6 mb-8 text-center max-w-5xl">
          <p className="text-sm text-start font-semibold uppercase text-accent">
            AKSESORIS
          </p>
          <h2 className="text-3xl text-start md:text-4xl font-bold text-gray-800 mb-4">
            Temukan aksesoris yang tepat untuk kebutuhan bisnis Anda.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatsFeatureCard
            imageUrl={item1}
            iconSizeClass="w-full h-full"
            title="Barcode / QR Scanner"
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
            imageUrl={item2}
            iconSizeClass="w-full h-full"
            title="Tombol Bantuan"
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
            imageUrl={item3}
            iconSizeClass="w-full h-full"
            title="Keypad Navigasi"
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
        </div>
      </div>
    </div>
  );
}

export default KiosLayananMandiriStatsFeature2;
