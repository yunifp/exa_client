import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useApi from "../../hooks/UseApi";

const ArrowLeftIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const ArtikelPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { request } = useApi();
  const [article, setArticle] = useState(null);

  const getImageUrl = (path) => {
    if (!path) return "/placeholder-image.jpg";
    if (path.startsWith("https")) return path;
    const baseUrl = import.meta.env.VITE_API_BASE;
    return `${baseUrl}${path}`;
  };

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await request("/articles?limit=1000");
        const found = response.data.data.find((a) => a.id === parseInt(id));
        setArticle(found);
      } catch (error) {
        console.error("Gagal mengambil artikel", error);
      }
    };
    fetchArticle();
  }, [id, request]);

  if (!article)
    return (
      <div className="p-8 text-center text-txt-subtle">Memuat artikel...</div>
    );

  const finalImageUrl = getImageUrl(article.featured_image_url);

  return (
    <div className="p-8 min-h-screen bg-primary">
      
      {/* --- CSS RESET KHUSUS UNTUK PREVIEW --- */}
      <style>{`
        #preview-content-wrapper {
          color: #374151; /* Gray-700 */
          font-size: 1.125rem; /* 18px */
          line-height: 1.8;
          text-align: left !important; /* Paksa Rata Kiri */
        }

        /* Jarak antar paragraf */
        #preview-content-wrapper p {
          margin-bottom: 24px !important;
          display: block;
        }

        /* Heading Style */
        #preview-content-wrapper h1, 
        #preview-content-wrapper h2, 
        #preview-content-wrapper h3, 
        #preview-content-wrapper h4 {
          margin-top: 40px !important;
          margin-bottom: 16px !important;
          font-weight: 700;
          color: #111827;
        }

        /* List / Bullet Points */
        #preview-content-wrapper ul {
          list-style: disc inside !important;
          margin-bottom: 24px !important;
          padding-left: 16px !important;
        }
        #preview-content-wrapper ol {
          list-style: decimal inside !important;
          margin-bottom: 24px !important;
          padding-left: 16px !important;
        }
        #preview-content-wrapper li {
          margin-bottom: 8px !important;
        }

        /* Gambar Responsif */
        #preview-content-wrapper img {
          max-width: 100% !important;
          height: auto !important;
          border-radius: 8px;
          margin: 32px auto !important;
          display: block;
        }

        /* Link Style */
        #preview-content-wrapper a {
          color: #a60046;
          text-decoration: underline;
          font-weight: 500;
        }

        /* ANTI-POTONG KATA & ANTI-TEMBOK TEKS */
        #preview-content-wrapper * {
          word-break: normal !important;   /* Jangan potong tanda strip (-) */
          overflow-wrap: break-word;       /* Potong hanya jika URL kepanjangan */
          hyphens: none !important;        /* Matikan auto-hyphenation browser */
          text-align: left !important;     /* Pastikan rata kiri */
        }
      `}</style>

      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate("/admin/artikel")}
          className="p-2 bg-white rounded-lg border border-subtle hover:bg-gray-50 transition-colors"
        >
          <ArrowLeftIcon />
        </button>
        <h1 className="text-2xl font-bold text-txt-primary">Preview Artikel</h1>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-subtle max-w-4xl mx-auto">
        <div className="mb-6">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 capitalize
            ${
              article.status === "published"
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {article.status}
          </span>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center text-sm text-gray-500 gap-4">
            <span>Penulis: {article.author?.name || "Admin"}</span>
            <span>|</span>
            <span>{new Date(article.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden mb-8 bg-gray-100 w-full h-[400px]">
          <img
            src={finalImageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* --- KONTEN UTAMA DENGAN FIX --- */}
        {/* Hapus class 'prose' dan gunakan ID reset */}
        <div className="w-full">
            <div 
              id="preview-content-wrapper"
              dangerouslySetInnerHTML={{ 
                  // Ganti &nbsp; dengan spasi biasa agar teks mau turun baris
                  __html: (article.content || "").replace(/&nbsp;/g, " ") 
              }}
            />
        </div>

        {article.tags && article.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h4 className="text-sm font-bold text-gray-700 mb-2">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtikelPreview;