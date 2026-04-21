import React from "react";

/**
 * Komponen kartu fitur yang reusable untuk menampilkan poin utama dengan visual di atas teks.
 * @param {object} props
 * @param {string} [props.imageUrl] - URL gambar (misalnya, ikon SVG). Jika ada, ini akan ditampilkan.
 * @param {string} props.title - Judul fitur atau statistik.
 * @param {React.ReactNode} props.description - Deskripsi singkat tentang fitur tersebut.
 * @param {string} [props.bgColor] - Warna latar belakang kustom.
 * @param {string} [props.iconSizeClass]
 */
function StatsFeatureCard({
  imageUrl,
  title,
  description,
  bgColor = "bg-white",
  iconSizeClass = "w-16 h-16",
}) {
  const VisualContent = () => {
    if (imageUrl) {
      const marginClass = iconSizeClass.includes("w-16 h-16") ? "mb-6" : "mb-4";

      return (
        <div
          className={`${iconSizeClass} ${marginClass} flex items-center justify-center`}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className={`flex flex-col items-center text-center ${bgColor} p-6 rounded-xl shadow-lg h-full transition duration-300 hover:shadow-xl`}
    >
      <VisualContent />

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        <div className="text-base text-gray-600">{description}</div>
      </div>
    </div>
  );
}

export default StatsFeatureCard;
