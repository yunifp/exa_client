import React, { useState, useEffect } from "react";
import { Link, useLocation} from "react-router-dom";
import Pagination from "../common/Pagination";
import useApi from "../../hooks/UseApi";

const BlogMainSection = () => {
  // State Data
  const [posts, setPosts] = useState([]); // Semua artikel
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  // State Filter & Pagination
  const [selectedCategory, setSelectedCategory] = useState(null); // Filter Kategori
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const { request, loading, error } = useApi();

  // --- 1. FETCH DATA ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [articlesRes, categoriesRes] = await Promise.all([
          request("/articles"),
          request("/article-categories"),
        ]);

        const articlesData = articlesRes.data?.data || [];

        // Filter Published & Sort Date Descending
        const publishedPosts = articlesData
          .filter((p) => (p.status || "").toLowerCase() === "published")
          .sort(
            (a, b) =>
              new Date(b.published_at || b.createdAt) -
              new Date(a.published_at || a.createdAt)
          );

        setPosts(publishedPosts);
        setRecentPosts(publishedPosts.slice(0, 3)); // Ambil 3 untuk sidebar

        const categoriesData =
          categoriesRes.data?.data || categoriesRes.data || [];
        setCategories(categoriesData);
      } catch (err) {
        console.error("Gagal memuat data blog:", err);
      }
    };

    fetchData();
  }, [request]);

  useEffect(() => {
    // Jika ada state category dari halaman Detail, pasang ke filter
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
      // Bersihkan state agar saat refresh tidak nyangkut (opsional)
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);
  // --- 2. LOGIC FILTER KATEGORI ---
  const filteredPosts = selectedCategory
    ? posts.filter((post) =>
        post.categories?.some((cat) => cat.name === selectedCategory)
      )
    : posts;

  // --- 3. LOGIC PAGINATION ---
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);

  // --- HELPERS ---
  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById("blog-top")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1); // Reset ke halaman 1 saat filter berubah
    document.getElementById("blog-top")?.scrollIntoView({ behavior: "smooth" });
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getImageUrl = (path) => {
    if (!path) return "/placeholder-image.jpg";
    if (path.startsWith("https")) return path;
    const baseUrl = import.meta.env.VITE_API_BASE;
    return `${baseUrl}${path}`;
  };

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

  // --- RENDER ---
  if (loading)
    return <div className="py-32 text-center">Memuat konten blog...</div>;
  if (error)
    return <div className="py-32 text-center text-red-600">Error: {error}</div>;

  return (
    <section id="blog-top" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Filter Info */}
        {selectedCategory && (
            <div className="mb-8 flex items-center gap-4">
                <h2 className="text-xl font-bold text-gray-700">
                    Kategori: <span className="text-accent">{selectedCategory}</span>
                </h2>
                <button 
                    onClick={() => handleCategoryClick(null)}
                    className="text-sm text-gray-500 underline hover:text-accent"
                >
                    Tampilkan Semua
                </button>
            </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* KOLOM KIRI: Daftar Artikel */}
          <div className="lg:col-span-2">
            <div className="space-y-16">
              {currentPosts.length > 0 ? (
                currentPosts.map((post) => (
                  <div key={post.id} className="group">
                    <div className="rounded-2xl overflow-hidden mb-6 shadow-sm bg-gray-100">
                      <img
                        src={getImageUrl(post.featured_image_url)}
                        alt={post.title}
                        className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      {/* Tanggal & Kategori */}
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                         <span>{formatDate(post.published_at || post.createdAt)}</span>
                         {post.categories?.[0] && (
                            <>
                                <span>•</span>
                                <span className="text-accent font-medium">{post.categories[0].name}</span>
                            </>
                         )}
                      </div>

                      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-accent transition-colors">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      
                      {/* Deskripsi Singkat */}
                      <p className="text-gray-600 text-md leading-relaxed mb-6">
                        {getLimitedDescription(post, 190)}
                      </p>
                      
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-full hover:bg-accent-hover transition-colors shadow-md"
                      >
                        Lihat Selengkapnya &rarr;
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-xl">
                  Tidak ada artikel ditemukan untuk kategori ini.
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredPosts.length > itemsPerPage && (
              <div className="mt-16">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </div>

          {/* KOLOM KANAN: Sidebar */}
          <div className="lg:col-span-1 pl-0 lg:pl-8">
            <div className="sticky top-24 space-y-12">
              
              {/* Widget Artikel Terbaru */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Artikel Terbaru
                </h3>
                <div className="space-y-6">
                  {recentPosts.map((recent) => (
                    <div
                      key={recent.id}
                      className="flex items-center gap-4 group cursor-pointer"
                    >
                      <Link to={`/blog/${recent.slug}`} className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden border border-gray-100">
                          <img
                            src={getImageUrl(recent.featured_image_url)}
                            alt={recent.title}
                            className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                          />
                        </div>
                      </Link>
                      <div>
                        <p className="text-xs text-accent font-semibold mb-1 flex items-center gap-1">
                          {formatDate(recent.published_at || recent.createdAt)}
                        </p>
                        <h4 className="text-base font-bold text-gray-800 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                          <Link to={`/blog/${recent.slug}`}>{recent.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Widget Kategori */}
              <div className="bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Kategori
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button
                        onClick={() => handleCategoryClick(null)}
                        className={`text-sm w-full text-left border-b border-gray-100 pb-2 transition-all capitalize
                            ${selectedCategory === null 
                                ? "text-accent font-bold pl-2 border-l-2 border-l-accent" 
                                : "text-gray-600 hover:text-accent hover:pl-2"}`}
                    >
                        Semua Kategori
                    </button>
                  </li>

                  {categories.length > 0 ? (
                    categories.map((cat) => (
                      <li key={cat.id || cat.name}>
                        <button
                          onClick={() => handleCategoryClick(cat.name)}
                          className={`text-sm w-full text-left border-b border-gray-100 pb-2 transition-all capitalize
                            ${selectedCategory === cat.name 
                                ? "text-accent font-bold pl-2 border-l-2 border-l-accent" 
                                : "text-gray-600 hover:text-accent hover:pl-2"}`}
                        >
                          {cat.name}
                        </button>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-400 text-sm">
                      Tidak ada kategori
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMainSection;