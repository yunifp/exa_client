import React from "react";
import StatsFeatureCard from "../common/StatsFeatureCard";
import ISO27001 from "../../assets/icons/ic_ISO-27001-keamanan-sistem.svg";
import ISO9001 from "../../assets/icons/ic_ISO-9001-keamanan-sistem.svg";
import GDPR from "../../assets/icons/ic_gdpr-keamanan-sistem.svg";

function KeamananSistemStatsFeature() {
  return (
    <div className="w-full bg-subtle-light py-12">
      <div className="container mx-auto px-6">
        <div className="container mx-auto px-6 mb-8 text-center max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Sertifikasi Kepatuhan, Standar, dan Peraturan
          </h2>
          <p className="text-lg text-gray-600">
            Kami mematuhi standar dan peraturan dengan tingkat kepatuhan yang
            tinggi dan secara terus-menerus memantau perkembangan kepatuhan dan
            regulasi untuk tetap berada di depan perubahan yang akan datang.
            Kami sepenuhnya mematuhi hal-hal berikut:
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatsFeatureCard imageUrl={ISO27001} title="ISO 27001" />
          <StatsFeatureCard imageUrl={ISO9001} title="ISO 9001" />
          <StatsFeatureCard imageUrl={GDPR} title="GDPR" />
        </div>
      </div>
    </div>
  );
}

export default KeamananSistemStatsFeature;
