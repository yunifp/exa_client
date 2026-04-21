import React from "react";
import { Link } from "react-router-dom";

const MegaMenuItem = ({ to, title, description }) => (
  <Link
    to={to}
    className="group block p-2 -m-2 rounded-lg border-l-4 border-transparent hover:border-l-accent-hover transition-colors"
  >
    <p className="text-base font-medium text-white">{title}</p>
    {description && (
      <p className="text-sm text-gray-300 group-hover:text-gray-300">
        {description}
      </p>
    )}
  </Link>
);

export default MegaMenuItem;