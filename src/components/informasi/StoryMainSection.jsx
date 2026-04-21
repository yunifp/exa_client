import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Postcard from "../informasi/Postcard";
import Pagination from "../common/Pagination";
import useApi from "../../hooks/UseApi"; 

const StoryMainSection = () => {
  // --- STATE ---
  const [stories, setStories] = useState([]);
  const [categories, setCategories] = useState(["Semua"]); // Default ada "Semua"
  
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { request, loading, error } = useApi();
  const navigate = useNavigate();

  // --- FETCH DATA (PARALEL) ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Stories & Categories bersamaan
        const [storiesRes, categoriesRes] = await Promise.all([
          request("/stories"),          // Endpoint Artikel (yang nanti difilter jadi Kisah Pelanggan)
          request("/story-categories")   // Endpoint Kategori Khusus Story
        ]);
        
        // 1. PROSES STORIES
        const rawStories = storiesRes.data?.data || [];
        
        // Filter hanya artikel yang merupakan "Studi Kasus" (atau penanda lain untuk Kisah Pelanggan)
        setStories(rawStories);

        // 2. PROSES KATEGORI
        // Ambil data kategori dari endpoint /story-categories
        const rawCategories = categoriesRes.data?.data || categoriesRes.data || [];
        
        // Mapping nama kategori, dan tambahkan "Semua" di awal
        const categoryNames = ["Semua", ...rawCategories.map(c => c.name)];
        setCategories(categoryNames);

      } catch (err) {
        console.error("Gagal memuat data:", err);
      }
    };

    fetchData();
  }, [request]);

  // --- LOGIC FILTERING ---
  const filteredData = stories.filter(item => {
    // 1. Jika "Semua", tampilkan semua
    if (activeCategory === "Semua") return true;
    
    // 2. Normalisasi kategori yang dipilih (huruf kecil)
    const targetCategory = activeCategory.toLowerCase();

    // 3. Cek di TAGS (Misal: "Klinik", "Bank")
    const hasTag = item.tags?.some(tag => 
      (tag.name || tag).toLowerCase() === targetCategory
    );

    // 4. Cek di CATEGORIES (Sebagai cadangan, siapa tau datanya ada di sini)
    const hasCat = item.categories?.some(cat => 
      (cat.name || cat).toLowerCase() === targetCategory
    );

    // Jika salah satu cocok, tampilkan
    return hasTag || hasCat;
  });

  // --- LOGIC PAGINATION ---
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // --- HANDLERS ---
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.getElementById("story-section-top")?.scrollIntoView({ behavior: "smooth" });
  };

  // Helper Gambar
  const getImageUrl = (path) => {
  if (!path) return "/placeholder-image.jpg"; // Gambar default jika kosong
  
  // Jika path sudah lengkap (https://...), kembalikan langsung
  if (path.startsWith("https")) return path;

  // Ambil Base URL dari environment variable
  const baseUrl = import.meta.env.VITE_API_BASE;
  
  // Gabungkan: http://localhost:3000 + /uploads/gambar.webp
  return `${baseUrl}${path}`;
  };

  if (loading) return <div className="py-32 text-center">Memuat kisah pelanggan...</div>;
  if (error) return <div className="py-32 text-center text-red-600">Gagal memuat data.</div>;
  const stripHtml = (html) => {
    if (!html) return "";
    const doc = new DOMParser().parseFromString(html, "text/html");
    let text = doc.body.textContent || "";
    
    // TAMBAHAN: Hapus Non-Breaking Space (&nbsp;) yang bikin teks memanjang
    // Ganti semua jenis spasi aneh menjadi spasi biasa
    text = text.replace(/\u00A0/g, " "); 
    
    return text;
};

  // --- PERBAIKAN UTAMA DI SINI ---
  const getLimitedDescription = (item, limit = 10) => {
    // 1. Ambil teks dari excerpt ATAU content
    let text = item.excerpt || stripHtml(item.content);
    
    // 2. Jika kosong, return string kosong
    if (!text) return "";

    // 3. Potong jika terlalu panjang
    if (text.length > limit) {
      // PERBAIKAN: Gunakan 0, bukan 1. Agar huruf pertama tidak hilang.
      return text.substring(0, limit) + "..."; 
    }
    
    
    return text;
  };

  return (
    <section id="story-section-top" className="bg-white py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        
        {/* Filter Kategori (Dari API /story-categories) */}
        <div className="flex justify-center mb-12">
          {/* Container Scrollable untuk Mobile */}
          <div className="overflow-x-auto pb-2 px-1 w-full md:w-auto flex justify-start md:justify-center no-scrollbar">
            
            {/* Pembungkus Abu-abu (Pill Shape) */}
            <div className="inline-flex bg-gray-100 p-1.5 rounded-lg space-x-1">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCategoryChange(cat)}
                  className={`
                    px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 capitalize whitespace-nowrap
                    ${activeCategory === cat 
                      ? "bg-accent text-white shadow-md" // Aktif: Merah Penuh
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-200/50" // Tidak Aktif: Teks Abu, Transparan
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Grid Kartu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <Postcard
                key={item.id}
                logo={getImageUrl(item.featured_image_url)} 
                title={item.title} 
                description={getLimitedDescription(item, 190)}
                onClick={() => navigate(`/kisah-pelanggan/${item.slug}`)}
              />
            ))
          ) : (
            <div className="col-span-2 text-center py-20 text-gray-500">
              Tidak ada kisah pelanggan di kategori ini.
            </div>
          )}
        </div>

        {/* Pagination */}
        {stories.length > itemsPerPage && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}

      </div>
    </section>
  );
};

export default StoryMainSection;