import React, { useState, useEffect } from "react";
import Hero from "../components/common/Hero";
import Accordion from "../components/common/Accordion";
import heroBg from "../assets/hero-faq.webp";

const ChevronIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 15l7-7 7 7"
    />
  </svg>
);

const DATA_EXAQUE = [
  {
    id: 1,
    question: "Apa itu Exaque?",
    answer:
      "Exaque adalah solusi manajemen perjalanan pelanggan end-to-end yang membantu bisnis enterprise mengelola antrean, janji temu, dan interaksi pelanggan secara efisien dan terintegrasi."
  },
  {
    id: 2,
    question: "Mengapa harus Exaque?",
    answer:
      "Manajemen antrean adalah sistem yang mengatur aliran pelanggan untuk mengurangi waktu tunggu, meningkatkan efisiensi layanan, dan memberikan pengalaman yang lebih baik bagi pelanggan maupun staf."
  },
  // {
  //   id: 3,
  //   question: "Dimana lokasi kantor Exaque?",
  //   answer:
  //     "Pelanggan dapat mengambil tiket antrean melalui smartphone mereka tanpa harus berada di lokasi secara fisik. Mereka akan mendapatkan notifikasi saat giliran mereka hampir tiba."
  // },
  {
    id: 4,
    question: "Layanan apa saja yang ditawarkan oleh Exaque?",
    answer:
      "Exaque dirancang dengan skalabilitas tinggi. Meskipun fokus utama kami adalah enterprise, solusi kami modular dan dapat disesuaikan untuk kebutuhan bisnis berkembang."
  }
];

const DATA_PRODUK = [
  {
    id: 101,
    question: "Apa itu manajemen perjalanan pelanggan?",
    answer:
      "Manajemen perjalanan pelanggan berfokus pada pengelolaan pengalaman di setiap titik interaksi. Mulai dari sebelum kedatangan hingga pasca-layanan, pendekatan ini mengintegrasikan dunia fisik dan digital untuk menciptakan alur layanan yang mulus tanpa hambatan."
  },
  {
    id: 102,
    question: "Apa itu Qmatic Orchestra?",
    answer:
      "Qmatic Orchestra adalah <i>platform</i> on-premise yang dirancang untuk mengelola perjalanan pelanggan. Didesain untuk organisasi dengan persyaratan kompleks, lokasi multiple, atau fasilitas besar, serta kebutuhan untuk mengelola solusi secara terpusat. Dengan solusi modular dan fleksibelnya, bisnis dapat mengakses segala hal mulai dari manajemen antrian dan solusi janji temu hingga analitik canggih, umpan balik pelanggan, dan lebih banyak lagi, memungkinkan Anda untuk menyediakan perjalanan pelanggan yang sempurna sesuai dengan kebutuhan bisnis Anda."
  },
  {
    id: 103,
    question: "Bagaimana saya mendapatkan demo produk?",
    answer:
      'Untuk mendapatkan demo produk, Anda dapat <a href="/kontak" class="text-accent hover:underline font-semibold">menghubungi sales kami</a>.'
  },
  {
    id: 104,
    question: "Bagaimana Qmatic dapat terintegrasi dengan sistem yang sudah ada?",
    answer:
      '<i>Platform</i> Qmatic dapat terintegrasi dengan berbagai sistem, termasuk: <ul class="list-disc pl-5 mt-2 space-y-1"><li>Penyedia Single Sign-On (SSO)</li><li>Platform pertemuan virtual</li><li>Sistem kalender</li><li>Perangkat lunak Manajemen Hubungan Pelanggan (CRM)</li><li>Perangkat lunak papan informasi digital</li><li>Alat BI / visualisasi data</li></ul>'
  },
  {
    id: 105,
    question: "Apakah Exaque menyediakan layanan antrean virtual?",
    answer:
      "Exaque menyediakan layanan antrean virtual melalui Mobile Ticket, sebuah aplikasi berbasis web yang memungkinkan pelanggan untuk bergabung dalam antrean virtual menggunakan perangkat seluler mereka. Dengan Mobile Ticket, pelanggan dapat bergabung dalam antrean untuk layanan Anda sebelum tiba di cabang Anda dan menerima pembaruan status real-time tentang kemajuan antrean dan informasi lainnya."
  },
  // {
  //   id: 106,
  //   question: "Berapa biaya layanan yang diperlukan?",
  //   answer:
  //     'Untuk mendapatkan informasi biaya, Anda dapat <a href="/kontak" class="text-accent hover:underline font-semibold">menghubungi sales kami</a>.'
  // },
  // {
  //   id: 107,
  //   question: "Komponen hardware apa saja yang diperlukan?",
  //   answer:
  //     "Komponen hardware yang umum meliputi kiosk, layar di area tunggu, layar di konter, dan printer tiket. Namun, Qmatic juga dapat digunakan tanpa hardware dengan fitur antrian virtual dan tiket mobile."
  // },
  {
    id: 108,
    question: "Apakah ada studi kasus atau testimoni yang tersedia?",
    answer:
      'Ya, Anda dapat melihatnya pada halaman <a href="/kisah-pelanggan" class="text-accent hover:underline font-semibold">Kisah Pelanggan</a>.'
  }
];

const Faq = () => {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroProps = {
    welcomeText: "Informasi",
    title: "FAQ",
    subtitle: (
      <>
        Kumpulan pertanyaan yang sering diajukan untuk membantu Anda memahami
        layanan kami sebagai sebuah <span className="italic">platform</span>{" "}
        enterprise.
      </>
    ),
    imageUrl: heroBg,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center"
  };

  return (
    <div className="bg-white min-h-screen">
      <Hero {...heroProps} />

      <div className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Seputar Exaque
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {DATA_EXAQUE.map((item) => (
              <Accordion
                key={item.id}
                title={item.question}
                isOpen={openId === item.id}
                onClick={() => handleToggle(item.id)}
                chevronIcon={<ChevronIcon />}
              >
                {item.answer}
              </Accordion>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Seputar Produk
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {DATA_PRODUK.map((item) => (
              <Accordion
                key={item.id}
                title={item.question}
                isOpen={openId === item.id}
                onClick={() => handleToggle(item.id)}
                chevronIcon={<ChevronIcon />}
              >
                <div
                  className="
                    text-gray-600 text-sm md:text-base leading-relaxed
                    [&_a]:text-accent [&_a]:font-semibold [&_a]:underline hover:[&_a]:text-red-800
                    [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mt-2 [&_li]:mb-1
                    [&_i]:italic
                  "
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
