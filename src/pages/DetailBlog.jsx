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
        const detailRes = await request(`/articles/${slug}`);
        const rawDetail = detailRes.data;
        const articleData = rawDetail?.data || rawDetail;
        setPost(articleData);

        const [recentRes, catRes] = await Promise.all([
          request("/articles"),
          request("/article-categories"),
        ]);

        const rawRecent = recentRes.data;
        const allArticles = rawRecent?.data || rawRecent || [];

        if (Array.isArray(allArticles) && articleData) {
          const otherArticles = allArticles
            .filter(
              (a) =>
                a.id !== articleData.id &&
                (a.status || "").toLowerCase() === "published"
            )
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 3);

          setRecentPosts(otherArticles);
        }

        const rawCat = catRes.data;
        const catData = rawCat?.data || rawCat || [];
        if (Array.isArray(catData)) {
          setCategories(catData);
        }
      } catch (err) {
        console.error(err);
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

  const authorName = post.author_override || post.author_name || post.author?.name || "Tim Exaque";
  const authorBio = post.author_profile || post.author?.profile || "Penulis aktif membagikan wawasan dan informasi seputar solusi IT terintegrasi.";
  const authorQuotes = post.author_quotes || null;
  const initial = authorName.charAt(0).toUpperCase();

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...heroProps} />
      
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
        
        <div className="text-sm text-gray-500 mb-8 uppercase tracking-wide font-medium mt-8 flex items-center gap-2">
          <Link to="/blog" className="hover:text-accent transition-colors">BLOG</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{post.categories?.[0]?.name || "DETAIL"}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          <div className="lg:col-span-2 min-w-0 w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-left">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-6">
              <div className="flex items-center gap-2 text-accent font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span>{formatDate(post.published_at || post.createdAt)}</span>
              </div>
              
              <Link 
                to="/blog" 
                state={{ authorId: post.author_id, authorName: authorName }}
                className="flex items-center gap-2 text-gray-500 font-medium hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span>{authorName}</span>
              </Link>
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

          <div className="lg:col-span-1 w-full pl-0 lg:pl-8">
            <div className="sticky top-28 space-y-12">

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent opacity-5 rounded-bl-full z-0 transition-transform group-hover:scale-110"></div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                      
                      {post.author_image ? (
                        <div className="w-20 h-20 rounded-full overflow-hidden shadow-md border-4 border-white mb-4">
                          <img 
                            src={getImageUrl(post.author_image)} 
                            alt={authorName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-20 h-20 bg-gradient-to-br from-accent to-blue-700 text-white rounded-full flex items-center justify-center text-3xl font-extrabold shadow-md border-4 border-white mb-4">
                            {initial}
                        </div>
                      )}

                      <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                          Penulis Artikel
                      </span>
                      
                      <Link 
                        to="/blog" 
                        state={{ authorId: post.author_id, authorName: authorName }}
                        className="hover:text-accent transition-colors"
                      >
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {authorName}
                        </h3>
                      </Link>

                      <p className="text-sm text-gray-600 leading-relaxed mb-5">
                          {authorBio}
                      </p>

                      {authorQuotes && (
                          <div className="w-full bg-gray-50 rounded-xl p-4 border border-gray-100 relative text-left">
                              <svg className="w-6 h-6 text-accent opacity-20 absolute -top-2 -left-1" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                              </svg>
                              <p className="text-gray-700 italic font-medium leading-relaxed z-10 relative pl-4 text-xs">
                                  "{authorQuotes}"
                              </p>
                          </div>
                      )}
                  </div>
              </div>

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
                      <p className="text-sm text-gray-400 italic bg-gray-50 p-4 rounded-lg text-center">
                        Belum ada artikel lainnya.
                      </p>
                  )}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Kategori</h3>
                <ul className="space-y-3">
                  {categories.length > 0 ? (
                      categories.map((cat, idx) => (
                        <li key={idx}>
                          <Link
                            to="/blog"
                            state={{ category: cat.name }}
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