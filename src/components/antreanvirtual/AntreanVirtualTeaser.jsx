import React from "react";

import Teaser from "../common/Teaser";
import teaser1 from "../../assets/antrean-virtual-teaser-1.webp";
import teaser2 from "../../assets/antrean-virtual-teaser-2.webp";
import teaser3 from "../../assets/antrean-virtual-teaser-3.webp";

function AntrianVirtualTeaser() {
  return (
    <section className="bg-primary">
      <Teaser
        preTitle="Untuk Pelanggan"
        title="Bebaskan pelanggan menunggu di mana saja dengan Mobile Ticket"
        description={
          <>
            <p className="mb-4">
              Izinkan pelanggan bergabung ke antrean virtual melalui SMS, QR
              Code, atau tautan URL. Pelanggan dapat menunggu secara remote
              sambil memantau posisi antrean mereka secara <i>real-time</i> melalui
              ponsel.
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>Notifikasi otomatis saat giliran mereka tiba</li>
              <li>Mengurangi persepsi waktu tunggu</li>
              <li>Pelanggan lebih nyaman dan tetap dalam kendali</li>
            </ul>
          </>
        }
        imageSrc={teaser1}
        imageAlt="Teaser Bebaskan pelanggan menunggu di mana saja dengan Mobile Ticket"
        buttonText="Selengkapnya"
        buttonLink="/mobile-ticket"
        imageOnRight={false}
        disableButton={false}
      />

      <Teaser
        preTitle="Untuk Staf"
        title="Kelola alur pelanggan dan tingkatkan efisiensi operasional"
        description={
          <>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>
                Pantau dan kelola pergerakan pelanggan di cabang secara{" "}
                <i>real-time</i>
              </li>
              <li>
                Dapatkan <i>insight</i> kondisi cabang melalui <i>dasbor</i> live
                untuk akses data
              </li>
              <li>
                Mempersiapkan layanan berikutnya dengan lebih tepat
              </li>
              <li>
                Menerapkan antrean yang aman dan tertib di cabang
              </li>
              <li>
                Tingkatkan produktivitas dan efektivitas staf
              </li>
            </ul>
          </>
        }
        imageSrc={teaser2}
        imageAlt="Teaser Kelola alur pelanggan dan tingkatkan efisiensi operasional"
        imageOnRight={true}
        disableButton={true}
      />

      <Teaser
        preTitle="Untuk Manajemen"
        title="Dapatkan insight untuk keputusan bisnis berbasis data"
        description={
          <>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>
                Kumpulkan data untuk menciptakan pengalaman pelanggan yang lebih
                personal
              </li>
              <li>
                Kelola seluruh perjalanan pelanggan dalam satu <i>platform</i>
                terintegrasi
              </li>
              <li>
                Kurangi waktu tunggu di lokasi dan minimalkan kepadatan di area
                tunggu
              </li>
              <li>
                Hadirkan pengalaman layanan yang konsisten di semua <i>channel</i>
              </li>
            </ul>
          </>
        }
        imageSrc={teaser3}
        imageAlt="Teaser Dapatkan insight untuk keputusan bisnis berbasis data"
        imageOnRight={false}
        disableButton={true}
      />
    </section>
  );
}

export default AntrianVirtualTeaser;
