import React from "react";
import { Link } from "react-router-dom";

/**
 * Komponen kartu sederhana dan reusable untuk menampilkan solusi/kapabilitas.
 * Mendukung gambar/ikon opsional dan tautan opsional.
 * * @param {object} props
 * @param {string} props.title - Judul Kartu.
 * @param {string} props.description - Deskripsi singkat.
 * @param {string} [props.imageUrl] - URL gambar/ikon opsional.
 * @param {string} [props.link] - URL tujuan redirect opsional.
 */
function Card({ title, description, imageUrl, link }) {
  const CardContainer = link ? Link : "div";
  const cardProps = link ? { to: link } : {};

  return (
    <div className="h-full">
      <CardContainer
        {...cardProps}
        className={`
          bg-white justify-between rounded-2xl shadow-lg p-8 h-full flex flex-col border-t-10 border-transparent hover:border-t-[var(--color-accent)] transition-colors duration-300
          ${link ? "hover:shadow-xl cursor-pointer" : ""}
        `}
      >
        <div>
          {imageUrl && (
            <div className="mb-4 w-12 h-12">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {!imageUrl && <div className="w-1/4 mb-4"></div>}

          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        {link && (
          <div className="mt-4">
            <span className="text-accent font-semibold hover:underline text-sm">
              Selengkapnya &rarr;
            </span>
          </div>
        )}
      </CardContainer>
    </div>
  );
}

export default Card;
