import React from "react";

const ITALIC_KEYWORDS = [
  "check in",
  "customer journey management",
  "end to end",
  "customer experience",
  "smartphone",
  "real time",
  "hardware",
];

const italicizeText = (text) => {
  let result = text;
  ITALIC_KEYWORDS.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    result = result.replace(regex, (match) => `<i>${match}</i>`);
  });
  return result;
};

const WHY_ITEMS = [
  {
    title: "Tantangan Era Baru",
    desc: "Pelanggan menuntut layanan instan, personal, dan efisien di setiap langkah. Mereka tidak mau menunggu.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    active: true,
  },
  {
    title: "Praktik Terbaik",
    desc: "Didukung 20+ tahun pengalaman, kami proaktif menyempurnakan customer experience Anda melalui pendekatan end to end.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    active: false,
  },
  {
    title: "Produk Berkualitas",
    desc: "Sistem kami berjalan stabil di berbagai hardware dan terintegrasi mulus dengan smartphone untuk kebutuhan operasional harian.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    ),
    active: false,
  },
  {
    title: "Layanan Purna Jual",
    desc: "Nikmati proses check in yang cepat dan dukungan real time untuk memastikan customer journey management berjalan optimal.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    active: false,
  },
];

const WhyExaque = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Exaque
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_ITEMS.map((item, idx) => (
            <div key={idx} className="text-center px-4">
              <div
                className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-md transition-transform hover:scale-105 ${
                  item.active
                    ? "bg-accent text-white"
                    : "bg-white text-gray-700 border border-gray-100"
                }`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p
                className="text-sm text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: italicizeText(item.desc),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyExaque;
