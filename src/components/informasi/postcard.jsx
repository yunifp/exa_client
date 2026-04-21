import React from "react";

const postcard = ({ logo, title, description, isActive = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        h-full flex flex-col relative group bg-white rounded-2xl p-8 shadow-lg cursor-pointer 
        transition-all duration-300 border border-transparent
        ${isActive ? "-translate-y-2" : "hover:-translate-y-2"} 
      `}
    >
      {/* Hiasan Atas */}
      <div
        className={`
          absolute top-0 left-0 w-full h-6 bg-accent rounded-t-2xl 
          transition-opacity duration-300
          ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
        `}
      />

      {/* Logo */}
      <div className="relative z-10 w-24 h-24 mx-auto mb-6 bg-white rounded-full border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
        <img src={logo} alt={title} className="w-14 h-14 object-contain" />
      </div>

      {/* Konten Teks */}
      {/* PERBAIKAN UTAMA: Tambahkan 'w-full' dan 'min-w-0' */}
      {/* min-w-0 adalah kunci agar Flexbox tidak meledak ke samping */}
      <div className="relative z-10 text-center flex flex-col flex-grow w-full min-w-0">
        
        <h3 className="text-xl font-bold text-txt-primary mb-4 leading-tight line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
          {title}
        </h3>

        {/* PERBAIKAN PADA PARAGRAF */}
        {/* whitespace-normal: Memaksa text wrap */}
        {/* break-words: Memotong kata panjang */}
        {/* w-full: Memastikan lebar mengikuti container */}
        <p className="text-sm text-txt-subtle text-justify leading-relaxed line-clamp-4 break-words whitespace-normal w-full">
          {description}
        </p>
      </div>
    </div>
  );
};

export default postcard;