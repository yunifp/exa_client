import React from "react";
import { Link } from "react-router-dom";
import { useSearchForm } from "../../hooks/useSearchForm";
import heroBg from "../../assets/hero-1.jpg";

const SearchHero = ({ title, subtitle, showButtonBack = false }) => {
  const { query, handleInputChange, handleSubmit } = useSearchForm();

  return (
    <section className="relative py-32 md:py-40 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Search Background"
          className="w-full h-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <form onSubmit={handleSubmit} className="relative w-full">
            <input
              type="text"
              placeholder="Cari"
              className="w-full py-4 pl-6 pr-20 rounded-xl text-gray-800 bg-white text-lg focus:outline-none focus:ring-4 focus:ring-accent/30 shadow-2xl transition-all placeholder:text-gray-400"
              value={query}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 aspect-square bg-accent hover:bg-accent-hover text-white rounded-lg flex items-center justify-center transition-colors shadow-md"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </form>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-6 capitalize leading-tight tracking-tight">
          {title}
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
          {subtitle}
        </p>

        {showButtonBack && (
          <div className="animate-fade-in-up">
            <Link
              to="/"
              className="inline-block px-8 py-3.5 bg-accent text-white font-semibold rounded-xl shadow-lg hover:bg-accent-hover hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Kembali Ke Halaman Awal
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchHero;
