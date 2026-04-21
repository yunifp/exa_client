import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useApi from "../../hooks/UseApi";
import NewsCard from "./NewsCard";

function NewsSection() {
  const { request, loading } = useApi();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await request("/articles");
        const rawData = response.data?.data || [];

        const latestArticles = rawData
          .filter(p => p.status === "published")
          .sort(
            (a, b) =>
              new Date(b.published_at || b.createdAt) -
              new Date(a.published_at || a.createdAt)
          )
          .slice(0, 3);

        setArticles(latestArticles);
      } catch (err) {
        console.error("Gagal memuat berita:", err);
      }
    };

    fetchLatestNews();
  }, [request]);

  const getImageUrl = (path) => {
    if (!path) return "/placeholder-image.jpg";
    if (path.startsWith("https")) return path;
    return `${import.meta.env.VITE_API_BASE}${path}`;
  };


  if (loading) {
    return (
      <div className="py-20 text-center text-gray-600">
        Memuat Berita...
      </div>
    );
  }

  if (articles.length === 0) return null;
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
    <section className="bg-primary">
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Artikel Exaque
          </h2>

          <Link
            to="/blog"
            className="
              w-full md:w-auto
              text-center
              px-6 sm:px-8 py-3
              bg-accent text-white font-semibold
              rounded-2xl shadow-md
              hover:bg-accent-hover transition-colors
            "
          >
            Lihat Selengkapnya
          </Link>
        </div>

        <div className="
          grid gap-8
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        ">
          {articles.map(item => (
            <NewsCard
              key={item.id}
              title={item.title}
              description={getLimitedDescription(item, 120)} 
              link={`/blog/${item.slug}`}
              imageUrl={getImageUrl(item.featured_image_url)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
