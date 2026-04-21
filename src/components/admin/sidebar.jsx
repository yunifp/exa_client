import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiPieChart, FiBookOpen, FiUsers, FiMail, FiTag } from "react-icons/fi";
import logoFull from "../../assets/logo-red.webp";

// Path ikon logo saat sidebar tertutup
const logoIconPath = "/logo-helmet.svg";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  const menuItems = [
    { title: "Dashboard", path: "/admin/dashboard", icon: <FiPieChart className="w-6 h-6" /> },
    { title: "Artikel", path: "/admin/artikel", icon: <FiBookOpen className="w-6 h-6" /> },
    { title: "Kategori Artikel", path: "/admin/kategori-artikel", icon: <FiTag className="w-5 h-5 ml-1" /> },
    { title: "Kisah Pelanggan", path: "/admin/kisah-pelanggan", icon: <FiUsers className="w-6 h-6" /> },
    { title: "Kategori Kisah", path: "/admin/kategori-kisah", icon: <FiTag className="w-5 h-5 ml-1" /> },
    { title: "Permintaan Demo", path: "/admin/permintaan-demo", icon: <FiMail className="w-6 h-6" /> },
  ];

  return (
    <aside 
      className={`
        fixed inset-y-0 left-0 z-30
        h-full bg-sidebar border-r border-subtle flex flex-col
        transition-all duration-300 ease-in-out
        w-64
        ${isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full shadow-none"}
        md:static md:translate-x-0 md:shadow-none
        ${isOpen ? "md:w-64" : "md:w-20"}
      `}
    >
      {/* HEADER LOGO */}
      <div className={`
          h-20 flex items-center bg-sidebar transition-all duration-300
          /* JIKA BUKA: Padding Kiri 8, Start. JIKA TUTUP: Padding 0, Center */
          px-8 justify-start
          ${isOpen ? "md:px-8 md:justify-start" : "md:px-0 md:justify-center"}
        `}>
        <Link to="/admin/dashboard" className="block flex items-center justify-center">
          <img 
            src={isOpen ? logoFull : logoIconPath}
            alt="exaque profile" 
            className={`
              object-contain transition-all duration-300
              /* Ukuran Logo: */
              h-8 w-auto
              /* Saat tutup, pastikan ukurannya pas di tengah */
              ${isOpen ? "" : "md:h-8 md:w-8"} 
            `}
          />
        </Link>
      </div>

      {/* MENU ITEMS */}
      <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto no-scrollbar">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={index}
              to={item.path}
              title={!isOpen ? item.title : ""} 
              className={`
                flex items-center gap-3 py-3 rounded-md text-sm font-medium transition-all duration-200 group whitespace-nowrap
                
                /* State Aktif vs Tidak Aktif */
                ${isActive
                    ? "bg-accent text-white shadow-md"
                    : "text-txt-subtle hover:bg-accent-light hover:text-accent"
                }

                /* --- LOGIKA POSISI (PERBAIKAN UTAMA) --- */
                /* Mobile: Selalu rata kiri (px-4) */
                px-4 justify-start

                /* Desktop: */
                /* Jika BUKA: Rata kiri (px-4) */
                /* Jika TUTUP: Rata tengah (px-0, justify-center) -> Ikon pasti di tengah */
                ${isOpen ? "md:px-4 md:justify-start" : "md:px-0 md:justify-center"} 
              `}
            >
              {/* ICON */}
              {/* Tambahkan w-6 h-6 di parent span agar ukurannya rigid/tetap */}
              <span className={`
                flex items-center justify-center w-6 h-6 transition-all duration-200 shrink-0 
                ${isActive ? "text-white" : "text-txt-subtle group-hover:text-accent"}
              `}>
                {item.icon}
              </span>

              {/* TEXT */}
              <span 
                className={`
                  transition-all duration-300 overflow-hidden
                  w-auto opacity-100 ml-0
                  ${isOpen ? "md:w-auto md:opacity-100" : "md:w-0 md:opacity-0 md:ml-0 md:hidden"}
                `}
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;