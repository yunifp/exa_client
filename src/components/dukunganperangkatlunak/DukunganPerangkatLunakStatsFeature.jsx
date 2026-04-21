import React from "react";
import StatsFeatureCard from "../common/StatsFeatureCard";


function DukunganPerangkatLunakStatsFeature() {
  return (
    <div className="w-full bg-subtle-light py-12">
      <div className="container mx-auto px-6">
        <div className="container mx-auto px-6 mb-8 text-center max-w-5xl">
          <p className="text-sm text-start font-semibold uppercase text-accent">
            BANDINGKAN PILIHAN PAKET DUKUNGAN
          </p>
          <h2 className="text-3xl text-start md:text-4xl font-bold text-gray-800 mb-4">
            Temukan Paket Dukungan yang kamu butuhkan
          </h2>
          <p className="text-lg text-start text-gray-600">
            Pilih tingkat dukungan yang tepat untuk membantu meningkatkan nilai
            bagi bisnis Anda dengan Qmatic.
            <ul className="text-start list-disc list-outside pl-5 text-sm">
              <li>
                Paket dukungan Basic, Standard, dan Enterprise kami tersedia
                Qmatic Orchestra. untuk
              </li>
              <li>
                Paket dukungan Standard kami termasuk dalam langganan Qmatic
                Experience Cloud.
              </li>
            </ul>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatsFeatureCard
            description={
              <>
                <div className="space-y-3">
                  <h3 className="text-xl text-start font-semibold text-black uppercase">
                    Basic
                  </h3>
                  <ul className="text-start list-disc list-outside pl-5 text-sm">
                    <li>Dukungan melalui email, telepon, dan web</li>
                    <p>
                      Senin-Jumat 08.00-17.00 (CET) <br />
                      Senin-Jumat 07.00-19.00 (EST)
                    </p>
                    <li>Dukungan di luar jam kerja</li>
                    <li>Bahasa dukungan</li>
                    <p>
                      Inggris, Belanda, Spanyol, Prancis, Jerman
                    </p>
                    <li>Waktu respons awal target: &lt; 8 jam</li>
                    <li>Pembaruan perangkat lunak</li>
                  </ul>
                  <h3 className="text-xl text-start font-semibold text-black">
                    Layanan Tambahan
                  </h3>
                  <ul className="text-start list-disc list-outside pl-5 text-sm">
                    <li>Pelatihan</li>
                    <li>Perubahan konfigurasi sistem</li>
                  </ul>
                </div>
              </>
            }
          />{" "}
          <StatsFeatureCard
            description={
              <>
                <div className="space-y-3">
                  <h3 className="text-xl text-start font-semibold text-black uppercase">
                    Standar
                  </h3>
                  <ul className="text-start list-disc list-outside pl-5 text-sm">
                    <li>Dukungan melalui email, telepon, dan web</li>
                    <p>
                      Senin-Jumat 08.00-17.00 (CET) <br />
                      Senin-Jumat 07.00-19.00 (EST)
                    </p>
                    <li>Dukungan di luar jam kerja</li>
                    <li>Bahasa dukungan</li>
                    <p>
                      Inggris, Belanda, Spanyol, Prancis, Jerman
                    </p>
                    <li>Waktu respons selama 1 jam</li>
                    <li>Pembaruan perangkat lunak</li>
                    <li>Dukungan Integrasi</li>
                  </ul>
                  <h3 className="text-xl text-start font-semibold text-black">
                    Layanan Tambahan
                  </h3>
                  <ul className="text-start list-disc list-outside pl-5 text-sm">
                    <li>Laporan Dukungan</li>
                    <li>Pelatihan</li>
                    <li>Perubahan konfigurasi sistem</li>
                  </ul>
                  <h3 className="text-xl text-start font-semibold text-black">
                    Perawatan Perangkat Keras Bersertifikat
                  </h3>
                  <ul className="text-start list-disc list-outside pl-5 text-sm">
                    <li>
                      Penggantian Perangkat Cepat (pengiriman keesokan harinya)
                    </li>
                    <li>Perlindungan Kerusakan Akibat Kecelakaan</li>
                    <li>Layanan Pemasangan dan Pembongkaran</li>
                  </ul>
                </div>
              </>
            }
          />
          <StatsFeatureCard
            description={
              <>
                <div className="space-y-3">
                  <h3 className="text-xl text-start font-semibold text-black uppercase">
                    Enterprise
                  </h3>
                  <ul className="text-start list-disc list-outside pl-5 text-sm">
                    <li>Dukungan melalui email, telepon, dan web</li>
                    <p>
                      Senin-Jumat 08.00-17.00 (CET) <br />
                      Senin-Jumat 07.00-19.00 (EST)
                    </p>
                    <li>Dukungan di luar jam kerja</li>
                    <li>Bahasa dukungan</li>
                    <p>
                      Inggris, Belanda, Spanyol, Prancis, Jerman
                    </p>
                    <li>Waktu respons awal pertama 1 jam</li>
                    <li>Pembaruan perangkat lunak</li>
                    <li>Dukungan Integrasi</li>
                    <li>Laporan Dukungan</li>
                  </ul>
                  <h3 className="text-xl text-start font-semibold text-black">
                    Layanan Tambahan
                  </h3>
                  <ul className="text-start list-disc list-outside pl-5 text-sm">
                    <li>Pelatihan</li>
                    <li>Perubahan konfigurasi sistem</li>
                  </ul>
                  <h3 className="text-xl text-start font-semibold text-black">
                    Perawatan Perangkat Keras Bersertifikat
                  </h3>
                  <ul className="text-start list-disc list-outside pl-5 text-sm">
                    <li>
                      Penggantian Perangkat Cepat (pengiriman keesokan harinya)
                    </li>
                    <li>Perlindungan Kerusakan Akibat Kecelakaan</li>
                    <li>Layanan Pemasangan dan Pembongkaran</li>
                  </ul>
                </div>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default DukunganPerangkatLunakStatsFeature;
