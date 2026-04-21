import React from "react";

import Teaser from "../common/Teaser";
import teaser2 from "../../assets/kios-layanan-mandiri-teaser-2.webp";
import teaser3 from "../../assets/kios-layanan-mandiri-teaser-3.webp";

function KiosLayananMandiriTeaser2() {
  return (
    <section className="bg-primary">
      <div className="bg-subtle-light w-screen mx-auto px-6 mb-8 bg-subtle-light py-5 md:py-10 text-center">
        <p className="text-sm font-semibold uppercase text-accent">
          QMATIC CERTIFIED HARDWARE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          <i>Check-in Kiosk</i>
        </h2>
      </div>
      {/* Teaser 2 */}
      <Teaser
        preTitle=""
        title={
          <>
            <i>Check-in Kiosks</i>
          </>
        }
        description={
          <>
            <p>
              Kiosk Pendaftaran Terverifikasi Qmatic dari Elo dirancang untuk
              memberikan solusi ideal bagi pelanggan Anda untuk mendaftar janji
              temu atau antre untuk layanan berbeda saat tiba, memastikan
              pengalaman pelanggan yang lancar.
            </p>
            <br />
            <p>
              Baik di lingkungan kesehatan, lembaga publik, ritel, atau
              perbankan, kiosk serbaguna dan rendah perawatan ini siap untuk
              penggunaan yang sering.
            </p>
            <br />
            <p>
              Dengan perangkat keras bersertifikat kami, Anda mendapatkan
              teknologi terbaru yang tersedia, kompatibilitas yang siap untuk
              masa depan, dan ketahanan untuk melindungi investasi Anda.
            </p>
          </>
        }
        imageSrc={teaser2}
        imageAlt="teaser2 Mengapa Kios Layanan Mandiri?"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />
      {/* Teaser 3 */}
      <Teaser
        preTitle=""
        title={
          <>
            <i>Check-in Kiosk</i> 22"
          </>
        }
        description={
          <>
            <p>
              Kiosk Pendaftaran 22” dirancang untuk membantu Anda menyediakan
              solusi terbaik bagi pelanggan Anda untuk melakukan pendaftaran
              mandiri untuk janji temu atau antre untuk layanan yang berbeda.
            </p>
            <br />
            <p>
              Kiosk pendaftaran canggih dan berkualitas tinggi ini dilengkapi
              dengan layar sentuh komersial berukuran 22 inci yang mendukung
              berbagai aksesori, termasuk pemindai barcode/QR code, tombol
              bantuan, dan lainnya. Memungkinkan Anda untuk membuat perjalanan
              pelanggan menjadi lebih mudah dan nyaman.
            </p>
            <br />
            <p>
              Kiosk Pendaftaran 22” menawarkan opsi pemasangan yang fleksibel.
              Pilih dari pemasangan di lantai, di atas meja, di dinding, satu
              sisi, atau dua sisi.
            </p>
          </>
        }
        imageSrc={teaser3}
        imageAlt="teaser3 Check-in Kiosk 22"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={false}
        disableButton={true}
      />
    </section>
  );
}

export default KiosLayananMandiriTeaser2;
