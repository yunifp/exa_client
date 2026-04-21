import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const location = useLocation();
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, [location]);

  return (
    <div className="flex h-screen bg-secondary overflow-hidden">
      
      <Sidebar isOpen={isSidebarOpen} />

      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity"
        />
      )}

      <div className="flex-1 flex flex-col h-full min-w-0 transition-all duration-300"> 
        <AdminNavbar 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
          isSidebarOpen={isSidebarOpen}
        />

        <main className="flex-1 overflow-y-auto bg-white p-4 md:p-8">
            <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;