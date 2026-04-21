import React from "react";
import { Link } from "react-router-dom";

function NewsCard({ imageUrl, title, description, link }) {
  return (
    <Link to={link} className="block group">
      <div className="overflow-hidden rounded-xl">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 sm:h-52 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 group-hover:text-accent transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm sm:text-base mb-3 line-clamp-3">
          {description}
        </p>

        <span className="inline-block text-accent font-semibold text-sm sm:text-base group-hover:underline">
          Baca Selengkapnya &rsaquo;
        </span>
      </div>
    </Link>
  );
}

export default NewsCard;
