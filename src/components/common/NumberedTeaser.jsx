import React from "react";

/**
 * Komponen helper langkah/item bernomor.
 * * @param {object} props
 * @param {string} props.number - Nomor steps.
 * @param {string} props.title - Judul langkah.
 * @param {string} props.description - Deskripsi langkah.
 */
function NumberedTeaser({ number, title, description }) {
  return (
    <div className="flex items-center space-x-4 p-8 bg-white rounded-xl shadow-md transition-shadow hover:bg-subtle-light hover:shadow-lg">
      <div className="flex-shrink-0 ">
        <span className="text-4xl font-bold text-txt-primary">{number}</span> 
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600 text-md">{description}</p>
      </div>
    </div>
  );
}

export default NumberedTeaser;