import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import heroImage from "../assets/hero-kontak.png";
import Hero from "../components/common/Hero";
import useApi from "../hooks/useApi";

const CONTACT_OPTIONS = [
  {
    id: "sales",
    label: "Berbicara Dengan Sales",
    title: "Berbicara Dengan Sales",
    serviceValue: "Berbicara Dengan Sales",
  },
  {
    id: "demo",
    label: "Permintaan Demo",
    title: "Dapatkan Demo Produk",
    serviceValue: "Permintaan Demo",
  },
  {
    id: "support",
    label: "Bantuan Teknis",
    title: "Hubungi Bantuan Teknis",
    serviceValue: "Bantuan Teknis",
  },
  {
    id: "location",
    label: "Lokasi Kantor Exaque",
    title: "Kunjungi Kami",
    serviceValue: "Lokasi Kantor Exaque",
  },
];

const KontakPage = () => {
  const location = useLocation();
  const { request, loading } = useApi();
  const [activeTab, setActiveTab] = useState(
    location.pathname === "/demo" ? "demo" : "sales"
  );
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    job_title: "",
    user_persona: "",
    message: "",
  });

  useEffect(() => {
    const targetTab = location.pathname === "/demo" ? "demo" : "sales";

    if (
      activeTab !== targetTab &&
      (location.pathname === "/demo" || location.pathname === "/kontak")
    ) {
      setActiveTab(targetTab);
    }

    window.scrollTo(0, 0);
  }, [location.pathname]);

  const currentTab =
    CONTACT_OPTIONS.find((opt) => opt.id === activeTab) || CONTACT_OPTIONS[0];

  const heroProps = {
    welcomeText: "Mari Terhubung",
    title: <>{currentTab.title}</>,
    subtitle:
      "Punya pertanyaan tentang produk, harga, atau butuh bantuan teknis? Tim kami siap membantu Anda.",
    imageUrl: heroImage,
    textAlign: "text-center mx-auto",
    showButtons: false,
  };

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const payload = {
        ...formData,
        service_needed: currentTab.serviceValue,
      };

      console.log("Mengirim data:", payload);

      const response = await request("/inquiries", "POST", payload);

      if (response) {
        setSuccessMsg(
          "Pesan Anda berhasil dikirim! Tim kami akan segera menghubungi Anda."
        );
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          company: "",
          job_title: "",
          user_persona: "",
          message: "",
        });
      }
    } catch (err) {
      console.error("Gagal mengirim pesan:", err);
      setErrorMsg(err.message || "Terjadi kesalahan saat mengirim pesan.");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Hero {...heroProps} />

      <div className="container mx-auto px-6 max-w-7xl py-12 lg:py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentTab.title}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Siap mengambil langkah selanjutnya? Isi formulir di bawah ini atau
            pilih opsi bantuan lain di sebelah kanan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <div className="lg:col-span-2 order-2 lg:order-1">
            {successMsg && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                {successMsg}
              </div>
            )}
            {errorMsg && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                {errorMsg}
              </div>
            )}

            {activeTab === "location" ? (
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Kantor Pusat Exaque
                </h3>
                <p className="text-gray-600 mb-6">
                  Jl. RC. Veteran Raya No.1, RT.1/RW.3, Bintaro Business Centre,
                  Jakarta Selatan, DKI Jakarta 12330, ID
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Nama Depan
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      value={formData.first_name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Nama Belakang
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      value={formData.last_name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Perusahaan
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Jabatan
                  </label>
                  <input
                    type="text"
                    name="job_title"
                    value={formData.job_title}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Apa yang paling tepat menggambarkan anda ?
                  </label>
                  <select
                    name="user_persona"
                    value={formData.user_persona}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors bg-white"
                  >
                    <option value="">Pilih salah satu...</option>
                    <option value="C-Level Executive">C-Level Executive</option>
                    <option value="Manager Operasional">
                      Manager Operasional
                    </option>
                    <option value="IT Professional">IT Professional</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Bagaimana kami bisa membantu anda?
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`bg-accent text-white font-bold py-3 px-10 rounded-xl shadow-md transition-colors
                      ${
                        loading
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:bg-red-800"
                      }`}
                  >
                    {loading ? "Mengirim..." : "Kirim"}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="bg-white p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.05)] border border-gray-100 sticky top-28">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                Apa Yang Bisa Kami Bantu?
              </h3>

              <div className="flex flex-col space-y-2">
                {CONTACT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setActiveTab(opt.id);
                      setSuccessMsg("");
                      setErrorMsg("");
                    }}
                    className={`
                      text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 border-l-4
                      ${
                        activeTab === opt.id
                          ? "border-accent bg-red-50 text-accent"
                          : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      }
                    `}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontakPage;