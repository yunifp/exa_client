import React from "react";
import Teaser from "../common/Teaser";
import teaser1 from "../../assets/manajemen-pengunjung-teaser-1.webp";
import teaser2 from "../../assets/manajemen-pengunjung-teaser-2.webp";
import teaser3 from "../../assets/manajemen-pengunjung-teaser-3.webp";
import teaser4 from "../../assets/manajemen-pengunjung-teaser-4.webp";

function ManajemenPengunjungTeaser() {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6 mb-8 text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Buat alur yang mulus dan sinergis.
        </h2>
        <p className="text-lg text-gray-600">
          Sistem manajemen pengunjung Qmatic membantu Anda mengelola layanan
          pelanggan online dan di tempat secara efektif. Ciptakan proses yang
          lebih efisien dan lingkungan yang lebih aman bagi staf serta
          pengunjung, batasi jumlah orang di lokasi, dan pastikan alur kunjungan
          yang lancar.
        </p>
      </div>

      <Teaser
        preTitle=""
        title="Minimalkan waktu tunggu dan kerumunan."
        description={
          <ul className="list-disc pl-5">
            <li>
              Izinkan pengunjung untuk menjadwalkan janji temu secara online,
              sehingga saat mereka tiba, mereka dapat menghindari waktu tunggu
              yang tidak perlu dan memastikan area tunggu tetap tidak ramai.
            </li>
            <li>
              Aktifkan pendaftaran mandiri melalui kiosk, atau menggunakan{" "}
              <i>smartphone</i> dengan mengikuti tautan dalam pesan SMS atau
              email pengingat atau memindai kode QR yang ditempatkan di pintu
              masuk.
            </li>
            <li>
              Izinkan pengunjung untuk menunggu secara jarak jauh dan memantau
              perkembangan <i>real-time</i> melalui <i>smartphone</i> mereka
              dengan Mobile Ticket.
            </li>
          </ul>
        }
        imageSrc={teaser1}
        imageAlt="Teaser manajemen pengunjung 1"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />

      <Teaser
        preTitle=""
        title="Mengurangi beban kerja karyawan dan meningkatkan efisiensi."
        description={
          <ul className="list-disc pl-5">
            <li>
              Otomatiskan administrasi janji temu mulai dari konfirmasi,
              notifikasi, hingga penetapan staf dan ruangan.
            </li>
            <li>
              Segmentasikan pengunjung sejak proses pemesanan atau saat
              kedatangan.
            </li>
            <li>
              Beri staf akses ke data janji temu dan detail pengunjung agar
              mereka dapat mempersiapkan layanan sebelumnya.
            </li>
            <li>
              Permudah pengunjung melakukan <i>check-in</i> mandiri (
              <i>self check-in</i>) saat tiba di lokasi.
            </li>
            <li>
              Dapatkan prakiraan (<i>forecast</i>) permintaan untuk
              mengantisipasi jam sibuk, meratakan beban kerja, dan merencanakan
              alokasi sumber daya.
            </li>
          </ul>
        }
        imageSrc={teaser2}
        imageAlt="Teaser manajemen pengunjung 2"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={false}
        disableButton={true}
      />

      <Teaser
        preTitle=""
        title="Tetap informasikan pengunjung sepanjang perjalanan."
        description={
          <ul className="list-disc pl-5">
            <li>
              Kirim konfirmasi pemesanan otomatis, pengingat janji temu, dan
              pembaruan lainnya melalui SMS atau email.
            </li>
            <li>
              Bantu pengunjung menavigasi area gedung dengan papan informasi
              digital di lobi.
            </li>
            <li>
              Perbarui pengunjung yang menunggu dengan pembaruan <i>real-time</i>{" "}
              melalui Mobile Ticket dan papan informasi digital.
            </li>
          </ul>
        }
        imageSrc={teaser3}
        imageAlt="Teaser manajemen pengunjung 3"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />

      <Teaser
        preTitle=""
        title="Terhubung dengan pelanggan di mana saja."
        description={
          <>
            <p>
              Dapatkan gambaran umum tentang kinerja cabang, analisis, dan laporan
              Anda untuk mengambil keputusan berdasarkan data. Alat Business
              Intelligence Qmatic memberikan wawasan tentang:
            </p>
            <ul className="list-disc pl-5">
              <li>
                Jumlah pengunjung, waktu tunggu rata-rata, dan waktu layanan
                rata-rata.
              </li>
              <li>
                Data janji temu, termasuk tingkat kehadiran, jumlah janji temu
                yang dipesan versus kunjungan tanpa janji, serta statistik
                kedatangan.
              </li>
              <li>
                Tren waktu dan tanggal, termasuk perkiraan permintaan sehingga
                Anda dapat merencanakan sumber daya sebelumnya dan
                mendistribusikan beban kerja secara merata.
              </li>
              <li>
                Pembandingan dan kinerja staf yang diukur berdasarkan KPI dan
                SLA.
              </li>
            </ul>
          </>
        }
        imageSrc={teaser4}
        imageAlt="Teaser manajemen pengunjung 4"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={false}
        disableButton={true}
      />
    </section>
  );
}

export default ManajemenPengunjungTeaser;
