import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomerCard from "./CustomerCard"; // Pastikan path ini benar
import useApi from "../../hooks/UseApi";

function CustomerStories() {
  const { request, loading } = useApi();
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();

  // --- FETCH DATA ---
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await request("/stories");
        const rawData = response.data?.data || [];

        const filtered = rawData
          .filter((item) => item.status === "published")
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 6);

        setStories(filtered);
      } catch (err) {
        console.error("Gagal memuat kisah pelanggan home:", err);
      }
    };

    fetchStories();
  }, [request]);

  const getImageUrl = (path) => {
    if (!path) return "/placeholder-image.jpg";
    if (path.startsWith("https")) return path;
    const baseUrl = import.meta.env.VITE_API_BASE;
    return `${baseUrl}${path}`;
  };

  const stripHtml = (html) => {
    if (!html) return "";
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  // --- PERBAIKAN LOGIC EXCERPT ---
  const getLimitedDescription = (item, limit = 100) => {
    // 1. Ambil teks dari excerpt ATAU content
    let text = item.excerpt || stripHtml(item.content);
    
    // 2. Jika kosong, return string kosong
    if (!text) return "";

    // 3. Potong jika terlalu panjang
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    
    return text;
  };

  return (
    // Style tetap sama: bg-white, padding, max-width
    <section className="bg-white container mx-auto px-6 max-w-5xl">
      
      {/* Header Section */}
      <h2 className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-16">
        Kisah Pelanggan
      </h2>

      {loading && stories.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          Memuat kisah pelanggan...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((cust) => (
            <CustomerCard
              key={cust.id}
              logo={getImageUrl(cust.featured_image_url)}
              title={cust.title}
              // Gunakan fungsi helper baru di sini
              description={getLimitedDescription(cust, 120)} 
              // Pastikan onClick dipassing ke komponen anak
              onClick={() => navigate(`/kisah-pelanggan/${cust.slug}`)}
            />
          ))}
        </div>
      )}

      <div className="text-center">
        <Link
          to="/kisah-pelanggan"
          className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-2xl shadow-md hover:bg-accent-hover transition-colors"
        >
          Lihat Selengkapnya
        </Link>
      </div>
    </section>
  );
}

export default CustomerStories;