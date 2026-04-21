import React from "react";

/**
 * Komponen kartu
 * @param {object} props
 * @param {React.ReactNode} props.icon - SVG/ikon
 * @param {string} props.title - Judul kartu.
 * @param {string} props.description - Teks deskripsi kartu.
 */
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col items-center text-center border-t-10 border-transparent hover:border-t-[var(--color-accent)] transition-colors duration-300">
      <div className="text-accent mb-4 w-16 h-16">
        {typeof icon === "string" ? (
          <img
            src={icon}
            alt={`${title} icon`}
            className="w-full h-full object-contain"
          />
        ) : (
          icon
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default FeatureCard;
