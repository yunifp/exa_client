import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useKisah from "../../hooks/UseKisah";

const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace('/api/v1', '');

const ArrowLeftIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>);
const EditIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>);

const KisahPelangganPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchStoryById } = useKisah();
  const [story, setStory] = useState(null);

  const getImageUrl = (path) => {
    if (!path) return "https://placehold.co/800x400/png?text=No+Logo";
    if (path.startsWith("https")) return path;
    const baseUrl = import.meta.env.VITE_API_BASE;
    return `${baseUrl}${path}`;
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchStoryById(id);
      if (data) setStory(data);
    };
    loadData();
  }, [id, fetchStoryById]);

  if (!story) return <div className="p-8 text-center text-txt-subtle">Memuat kisah...</div>;

  const finalImageUrl = getImageUrl(story.featured_image_url);

  return (
    <div className="p-8 min-h-screen bg-primary">
      
      {/* --- CSS RESET KHUSUS (NUCLEAR OPTION) --- */}
      <style>{`
        #preview-kisah-wrapper {
          color: #374151; /* Gray-700 */
          font-size: 1.125rem; /* 18px */
          line-height: 1.8;
          text-align: left !important;
        }

        /* Jarak antar paragraf */
        #preview-kisah-wrapper p {
          margin-bottom: 24px !important;
          display: block;
        }

        /* Heading Style */
        #preview-kisah-wrapper h1, 
        #preview-kisah-wrapper h2, 
        #preview-kisah-wrapper h3, 
        #preview-kisah-wrapper h4 {
          margin-top: 40px !important;
          margin-bottom: 16px !important;
          font-weight: 700;
          color: #111827;
        }

        /* List / Bullet Points */
        #preview-kisah-wrapper ul {
          list-style: disc inside !important;
          margin-bottom: 24px !important;
          padding-left: 16px !important;
        }
        #preview-kisah-wrapper ol {
          list-style: decimal inside !important;
          margin-bottom: 24px !important;
          padding-left: 16px !important;
        }
        #preview-kisah-wrapper li {
          margin-bottom: 8px !important;
        }

        /* Gambar Responsif */
        #preview-kisah-wrapper img {
          max-width: 100% !important;
          height: auto !important;
          border-radius: 8px;
          margin: 32px auto !important;
          display: block;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        /* Link Style */
        #preview-kisah-wrapper a {
          color: #a60046;
          text-decoration: underline;
          font-weight: 500;
        }

        /* ANTI-POTONG KATA & &nbsp; FIX */
        #preview-kisah-wrapper * {
          word-break: normal !important;
          overflow-wrap: break-word;
          hyphens: none !important;
          text-align: left !important;
        }
      `}</style>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/admin/kisah-pelanggan")}
            className="p-2 bg-white rounded-lg border border-subtle hover:bg-gray-50 transition-colors"
          >
            <ArrowLeftIcon />
          </button>
          <h1 className="text-2xl font-bold text-txt-primary">Preview Kisah Pelanggan</h1>
        </div>

        <button
          onClick={() => navigate(`/admin/kisah-pelanggan/edit/${id}`)}
          className="flex items-center gap-2 px-4 py-2 border border-subtle rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          <EditIcon />
          Edit Data
        </button>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-subtle max-w-4xl mx-auto">

        <div className="flex flex-col md:flex-row gap-8 mb-8 border-b border-gray-100 pb-8">
          <div className="w-32 h-32 flex-shrink-0 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center p-4">
            <img
              src={finalImageUrl}
              alt={story.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize
                ${story.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {story.status}
              </span>
              <span className="text-sm text-gray-500">
                Published: {story.published_at ? new Date(story.published_at).toLocaleDateString() : "-"}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">{story.title}</h1>

            {story.categories && story.categories.length > 0 && (
              <p className="text-sm text-accent font-medium">{story.categories.map(c => c.name).join(", ")}</p>
            )}
          </div>
        </div>

        {story.tags && story.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {story.tags.map(tag => (
              <span key={tag.id} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                #{tag.name}
              </span>
            ))}
          </div>
        )}

        {story.excerpt && (
          <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-400">
            <h3 className="text-xs font-bold text-blue-800 uppercase mb-1">Ringkasan</h3>
            <p className="text-blue-900 italic">{story.excerpt}</p>
          </div>
        )}
         
         {/* KONTEN UTAMA DENGAN FIX */}
         <div className="w-full">
            <div 
                id="preview-kisah-wrapper"
                dangerouslySetInnerHTML={{ 
                    // Ganti &nbsp; dengan spasi biasa
                    __html: (story.content || "").replace(/&nbsp;/g, " ") 
                }} 
            />
         </div>

      </div>
    </div>
  );
};

export default KisahPelangganPreview;