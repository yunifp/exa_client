import React from "react";

import Teaser from "../common/Teaser";
import teaser2 from "../../assets/rapat-virtual-teaser-2.webp";
import teaser3 from "../../assets/rapat-virtual-teaser-3.webp";
import teaser4 from "../../assets/rapat-virtual-teaser-4.webp";

function RapatVirtualTeaserDown() {
  return (
    <section className="bg-primary">
      <Teaser
        preTitle=""
        title="Layanan Tatap Muka, Langsung dari Rumah"
        description={
          <>
            Tawarkan layanan di mana saja sesuai kenyamanan klien.{" "}
            <em>Platform</em> kami terintegrasi dengan Microsoft Teams dan Zoom
            untuk penjadwalan janji temu virtual. Saat pelanggan memilih layanan
            jarak jauh, mereka otomatis menerima tautan rapat. Tautan ini akan
            menghubungkan mereka langsung dengan staf Anda, tanpa perlu panggilan
            fisik di area tunggu.
          </>
        }
        imageSrc={teaser2}
        imageAlt="teaser1 Terhubung dengan pelanggan di mana saja"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />

      <Teaser
        preTitle=""
        title="Solusi Rapat Virtual Fleksibel untuk Berbagai Kebutuhan"
        description={
          <>
            Qmatic Remote Services adalah solusi fleksibel untuk beragam kebutuhan
            perusahaan dan pelanggan. Pelanggan dapat memesan janji temu via{" "}
            <em>online</em>, <em>call center</em>, atau saat <em>walk-in</em>.
            Solusi kami dirancang untuk mencakup perjalanan pelanggan fisik
            sekaligus virtual sebagai satu <em>platform</em> terpadu.
          </>
        }
        imageSrc={teaser3}
        imageAlt="teaser1 Terhubung dengan pelanggan di mana saja"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={false}
        disableButton={true}
      />

      <Teaser
        preTitle=""
        title="Perangkat Lunak Pertemuan Virtual oleh Exaque"
        description={
          <>
            <ul className="list-disc pl-5">
              <li>
                Sediakan layanan melalui video, obrolan, atau
                <em>platform</em> lain
              </li>
              <li>
                Izinkan pelanggan untuk menjadwalkan, mengubah jadwal, dan
                membatalkan janji temu secara <em>online</em>, serta memberitahu
                mereka melalui SMS/email otomatis
              </li>
              <li>Hubungkan pelanggan dengan anggota staf yang tepat</li>
              <li>
                Integrasikan dengan alat pertemuan video yang sudah Anda gunakan
              </li>
              <li>
                Berbasis <em>browser</em> dan tidak memerlukan aplikasi seluler
              </li>
            </ul>
          </>
        }
        imageSrc={teaser4}
        imageAlt="teaser1 Terhubung dengan pelanggan di mana saja"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />
    </section>
  );
}

export default RapatVirtualTeaserDown;
