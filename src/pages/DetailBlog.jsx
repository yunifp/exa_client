import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useApi from "../hooks/UseApi";
import Hero from "../components/common/Hero";
import heroBg from "../assets/hero-blog.webp";

const DetailBlog = () => {
  const { slug } = useParams();
  const { request, loading } = useApi();

  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Fetch Detail Artikel
        const detailRes = await request(`/articles/${slug}`);
        const rawDetail = detailRes.data;
        const articleData = rawDetail?.data || rawDetail;
        setPost(articleData);

        // 2. Fetch Artikel Lain & Kategori
        const [recentRes, catRes] = await Promise.all([
          request("/articles"), // Ambil daftar artikel
          request("/article-categories"), // Ambil daftar kategori
        ]);

        // --- PROSES ARTIKEL TERBARU ---
        const rawRecent = recentRes.data;
        const allArticles = rawRecent?.data || rawRecent || [];

        if (Array.isArray(allArticles) && articleData) {
          const otherArticles = allArticles
            .filter(
              (a) =>
                a.id !== articleData.id && // HAPUS artikel yang sedang dibaca dari list
                (a.status || "").toLowerCase() === "published"
            )
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 3); // Ambil 3 biji saja

          setRecentPosts(otherArticles);
        }

        // --- PROSES KATEGORI ---
        const rawCat = catRes.data;
        const catData = rawCat?.data || rawCat || [];
        if (Array.isArray(catData)) {
          setCategories(catData);
        }

      } catch (err) {
        console.error("Gagal memuat detail blog:", err);
      }
    };

    if (slug) {
      fetchData();
      window.scrollTo(0, 0);
    }
  }, [slug, request]);

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

  if (loading && !post) return <div className="py-40 text-center">Memuat...</div>;

  if (!post && !loading)
    return (
      <div className="py-40 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Artikel Tidak Ditemukan</h2>
        <Link to="/blog" className="text-accent underline mt-4 block">Kembali ke Blog</Link>
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
      
      {/* --- CSS RESET & STYLE FIX --- */}
      <style>{`
        #blog-content-wrapper {
          color: #374151;
          font-size: 1.125rem;
          line-height: 1.8;
          text-align: left;
        }
        #blog-content-wrapper p { margin-bottom: 24px !important; display: block; }
        #blog-content-wrapper h1, #blog-content-wrapper h2, #blog-content-wrapper h3 {
          margin-top: 40px !important; margin-bottom: 16px !important; font-weight: 700; color: #111827;
        }
        #blog-content-wrapper ul, #blog-content-wrapper ol {
          margin-bottom: 24px !important; padding-left: 16px !important;
        }
        #blog-content-wrapper ul { list-style: disc inside !important; }
        #blog-content-wrapper ol { list-style: decimal inside !important; }
        #blog-content-wrapper img {
          max-width: 100% !important; height: auto !important; border-radius: 8px; margin: 32px auto !important; display: block;
        }
        #blog-content-wrapper * {
          word-break: normal !important; overflow-wrap: break-word; hyphens: none !important; text-align: left !important;
        }
      `}</style>

      <div className="container mx-auto px-6 max-w-6xl pb-20">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8 uppercase tracking-wide font-medium mt-8 flex items-center gap-2">
          <Link to="/blog" className="hover:text-accent transition-colors">BLOG</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{post.categories?.[0]?.name || "DETAIL"}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* KOLOM KIRI (Konten Utama) */}
          <div className="lg:col-span-2 min-w-0 w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-left">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-6">
              <div className="flex items-center gap-2 text-accent font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span>{formatDate(post.published_at || post.createdAt)}</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-10 shadow-sm bg-gray-100 border border-gray-100">
              <img
                src={getImageUrl(post.featured_image_url)}
                alt={post.title}
                className="w-full h-auto object-cover max-h-[500px]"
                onError={(e) => { e.target.src = "https://placehold.co/1200x600?text=No+Image"; }}
              />
            </div>

            <div className="w-full">
               <div 
                 id="blog-content-wrapper" 
                 dangerouslySetInnerHTML={{ __html: (post.content || "").replace(/&nbsp;/g, " ") }} 
               />
            </div>

            <div className="mt-8 lg:hidden">
                <Link to="/blog" className="text-accent font-semibold flex items-center gap-2">&larr; Kembali ke Blog</Link>
            </div>
          </div>

          {/* KOLOM KANAN (Sidebar) */}
          <div className="lg:col-span-1 w-full pl-0 lg:pl-8">
            <div className="sticky top-28 space-y-12">
              
              {/* Artikel Terbaru */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Artikel Terbaru</h3>
                <div className="space-y-6">
                  {recentPosts.length > 0 ? (
                      recentPosts.map((recent) => (
                        <Link key={recent.id} to={`/blog/${recent.slug}`} className="flex items-center gap-4 group">
                          <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden border border-gray-100">
                            <img src={getImageUrl(recent.featured_image_url)} alt={recent.title} className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
                          </div>
                          <div>
                            <p className="text-xs text-accent font-semibold mb-1 flex items-center gap-1">{formatDate(recent.published_at || recent.created_at)}</p>
                            <h4 className="text-base font-bold text-gray-800 group-hover:text-accent transition-colors line-clamp-2">{recent.title}</h4>
                          </div>
                        </Link>
                      ))
                  ) : (
                      // PESAN INI MUNCUL JIKA HANYA ADA 1 ARTIKEL TOTAL
                      <p className="text-sm text-gray-400 italic bg-gray-50 p-4 rounded-lg text-center">
                        Belum ada artikel lainnya.
                      </p>
                  )}
                </div>
              </div>

              {/* Kategori (SUDAH BISA DIKLIK) */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Kategori</h3>
                <ul className="space-y-3">
                  {categories.length > 0 ? (
                      categories.map((cat, idx) => (
                        <li key={idx}>
                          {/* MENGGUNAKAN LINK AGAR BISA DIKLIK */}
                          <Link
                            to="/blog"
                            state={{ category: cat.name }} // Mengirim data filter ke halaman blog
                            className="text-gray-600 hover:text-accent hover:pl-2 transition-all block text-sm border-b border-gray-100 pb-2 capitalize"
                          >
                            {cat.name}
                          </Link>
                        </li>
                      ))
                  ) : (
                      <li className="text-sm text-gray-400 italic">Tidak ada kategori.</li>
                  )}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailBlog;