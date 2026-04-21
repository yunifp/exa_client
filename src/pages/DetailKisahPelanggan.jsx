import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useApi from "../hooks/UseApi"; 
import Hero from "../components/common/Hero";
import heroBg from "../assets/hero-kisah-pelanggan.webp";

const DetailKisahPelanggan = () => {
  const { slug } = useParams(); 
  const { request, loading } = useApi();
  const [story, setStory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request(`/stories/${slug}`);
        const storyData = response.data || response;
        setStory(storyData);
      } catch (err) {
        console.error("Gagal memuat detail kisah pelanggan:", err);
      }
    };

    if (slug) fetchData();
    window.scrollTo(0, 0); 
  }, [slug, request]);

  const getImageUrl = (path) => {
    if (!path) return "/placeholder-image.jpg"; 
    if (path.startsWith("https")) return path;
    const baseUrl = import.meta.env.VITE_API_BASE;
    return `${baseUrl}${path}`;
  };

  if (loading && !story)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Memuat cerita...
      </div>
    );

  if (!story && !loading)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Kisah tidak ditemukan
        </h2>
        <Link to="/kisah-pelanggan" className="text-accent hover:underline">
          Kembali ke Daftar
        </Link>
      </div>
    );

  const heroProps = {
    hideContent: true,
    imageUrl: heroBg,
    isDetailPage: true,
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...heroProps} />

      {/* --- CSS RESET KHUSUS (Sama seperti Blog) --- */}
      <style>{`
        #story-content-wrapper {
          color: #374151; /* Gray-700 */
          font-size: 1.125rem; /* 18px */
          line-height: 1.8;
          text-align: left; /* Paksa Rata Kiri agar rapi */
        }

        /* Jarak antar paragraf */
        #story-content-wrapper p {
          margin-bottom: 24px !important;
          display: block;
        }

        /* Heading Style */
        #story-content-wrapper h1, 
        #story-content-wrapper h2, 
        #story-content-wrapper h3, 
        #story-content-wrapper h4 {
          margin-top: 40px !important;
          margin-bottom: 16px !important;
          font-weight: 700;
          color: #111827;
        }

        /* List / Bullet Points */
        #story-content-wrapper ul {
          list-style: disc inside !important;
          margin-bottom: 24px !important;
          padding-left: 16px !important;
        }
        #story-content-wrapper ol {
          list-style: decimal inside !important;
          margin-bottom: 24px !important;
          padding-left: 16px !important;
        }
        #story-content-wrapper li {
          margin-bottom: 8px !important;
        }

        /* Gambar Responsif & Rapi */
        #story-content-wrapper img {
          max-width: 100% !important;
          height: auto !important;
          border-radius: 12px;
          margin: 32px auto !important;
          display: block;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        /* Link Style */
        #story-content-wrapper a {
          color: #a60046;
          text-decoration: underline;
          font-weight: 500;
        }

        /* MATIKAN Auto-Hyphenation & Word Break Aneh */
        #story-content-wrapper * {
          word-break: normal !important;
          overflow-wrap: break-word;
          hyphens: none !important;
          text-align: left !important;
        }
      `}</style>

      <div className="container mx-auto px-6 max-w-7xl pb-20"> 
        
        {/* Breadcrumb */}
        <div className="text-sm text-txt-subtle mb-6 uppercase tracking-wide pt-8 flex items-center gap-2">
          <Link to="/kisah-pelanggan" className="hover:text-accent transition-colors">KISAH PELANGGAN</Link>
          <span>/</span>
          <span className="text-txt-primary font-medium">{story.categories?.[0]?.name || "DETAIL"}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* KOLOM KIRI (Konten Utama) */}
          <div className="lg:col-span-2 min-w-0 w-full"> 
            <h1 className="text-3xl md:text-5xl font-bold text-txt-primary mb-8 leading-tight">
              {story.title}
            </h1>

            <div className="rounded-2xl overflow-hidden mb-10 shadow-sm bg-gray-100 border border-gray-200">
              <img
                src={getImageUrl(story.featured_image_url)}
                alt={story.title}
                className="w-full h-auto object-cover max-h-[500px]"
                onError={(e) => { e.target.src = "https://placehold.co/1200x600?text=No+Image"; }}
              />
            </div>

            {/* AREA KONTEN AMAN & RAPI */}
            <div className="w-full">
               <div 
                 id="story-content-wrapper"
                 dangerouslySetInnerHTML={{ 
                    // 1. Ambil konten (default string kosong jika null)
                    // 2. Ganti &nbsp; jadi spasi biasa
                    __html: (story.content || "").replace(/&nbsp;/g, " ") 
                 }} 
               />
            </div>

            <div className="mt-12 lg:hidden">
                <Link to="/kisah-pelanggan" className="text-accent font-semibold flex items-center gap-2">
                    &larr; Kembali ke Daftar Kisah
                </Link>
            </div>
          </div>

          {/* KOLOM KANAN (Sidebar) */}
          <div className="lg:col-span-1 w-full">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 sticky top-28">
              <h3 className="text-xl font-bold text-txt-primary mb-6 border-b border-gray-100 pb-4">
                Informasi Proyek
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-txt-primary mb-2 text-sm uppercase tracking-wider">Ringkasan</h4>
                  <p className="text-txt-subtle text-sm leading-relaxed">
                    {story.excerpt || "Deskripsi singkat belum tersedia."}
                  </p>
                </div>

                {(story.challenges) && (
                    <div>
                    <h4 className="font-semibold text-txt-primary mb-2 text-sm uppercase tracking-wider">Tantangan</h4>
                    <p className="text-txt-subtle text-sm leading-relaxed">{story.challenges}</p>
                    </div>
                )}

                {(story.results) && (
                    <div>
                    <h4 className="font-semibold text-txt-primary mb-2 text-sm uppercase tracking-wider">Hasil</h4>
                    <p className="text-txt-subtle text-sm leading-relaxed">{story.results}</p>
                    </div>
                )}

                {story.tags && story.tags.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                        <h4 className="font-semibold text-txt-primary mb-3 text-sm uppercase tracking-wider">Industri / Topik</h4>
                        <div className="flex flex-wrap gap-2">
                            {story.tags.map((tag, idx) => (
                                <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                                    {tag.name || tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailKisahPelanggan;