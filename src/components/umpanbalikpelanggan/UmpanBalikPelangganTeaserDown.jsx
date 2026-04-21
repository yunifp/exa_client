import React from "react";

import Teaser from "../common/Teaser";
import teaser1 from "../../assets/umpan-balik-pelanggan-Teaser-2.webp";
import teaser2 from "../../assets/umpan-balik-pelanggan-Teaser-3.webp";
import teaser3 from "../../assets/umpan-balik-pelanggan-teaser-4.webp";

function UmpanBalikPelangganTeaserDown() {
  return (
    <section className="bg-primary ">
      {/* --- Teaser 1 --- */}
      <Teaser
        preTitle=""
        title="Desain formulir umpan balik yang menarik dan intuitif"
        description={
          <>
            <p>Survei Cerdas untuk Wawasan Mendalam.</p>
            <ul className="list-disc pl-5">
              <li>
                Jangkau Tepat Waktu: Kirim survei <i>user-friendly</i> via SMS, Email,
                atau Tiket Mobile segera setelah kunjungan.
              </li>
              <li>
                Format Fleksibel: Dapatkan data kualitatif dan kuantitatif
                dengan NPS, rating bintang, smiley, teks bebas, atau pertanyaan
                bersyarat.
              </li>
              <li>
                Kustomisasi Penuh: Buat survei unik untuk setiap cabang dengan
                dukungan multi-bahasa yang lengkap.
              </li>
            </ul>
          </>
        }
        imageSrc={teaser1}
        imageAlt="teaser1 Ciptakan pengalaman menunggu yang lebih baik"
        imageOnRight={true}
        disableButton={true}
      />
      {/* --- Teaser 2 --- */}
      <Teaser
        preTitle=""
        title="Sesuaikan dengan merek Anda"
        description={
          <>
            <p className="mb-4">
              Survei Umpan Balik Pelanggan kami dapat disesuaikan dan
              memungkinkan Anda untuk menambahkan logo perusahaan, palet warna
              merek, serta mengubah <i>font</i> dan ikon agar selalu sesuai dengan
              identitas merek Anda.
            </p>
          </>
        }
        imageSrc={teaser2}
        imageAlt="teaser2 Sesuaikan dengan merek Anda"
        imageOnRight={false}
        disableButton={true}
      />
      {/* --- Teaser 3 --- */}

      <Teaser
        preTitle=""
        title="Tindaklanjuti umpan balik pelanggan Anda"
        description={
          <>
            <p>
              Ambil keputusan berbasis data untuk meningkatkan retensi dan
              loyalitas pelanggan secara nyata.
            </p>
            <ul className="list-disc pl-5">
              <li>
                Dasbor Terpadu: Akses laporan, bagan, dan ringkasan data
                kunjungan dan umpan balik di satu layar.
              </li>
              <li>
                Filter Analisis Mendalam: Buat dasbor kustom dan saring data
                berdasarkan cabang, staf, layanan, atau periode waktu.
              </li>
              <li>
                Koneksi Data Unik: Pahami gambaran utuh dengan menghubungkan
                data survei (apa kata pelanggan) dengan data kunjungan (apa yang
                mereka alami).
              </li>
            </ul>
          </>
        }
        imageSrc={teaser3}
        imageAlt="teaser3 Tindaklanjuti umpan balik pelanggan Anda"
        imageOnRight={true}
        disableButton={true}
      />
    </section>
  );
}

export default UmpanBalikPelangganTeaserDown;
