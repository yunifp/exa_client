import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import SearchHero from "../components/search/SearchHero";
import Pagination from "../components/common/Pagination";
import useApi from "../hooks/useApi"; 
import { routes } from "../routes"; 

const stripHtml = (html) => {
   if (!html) return "";
   return html.replace(/<[^>]*>?/gm, '');
};

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { request } = useApi();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  useEffect(() => {
    const performSearch = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setLoading(true);
      const lowerQuery = query.toLowerCase();

      try {
        const staticResults = routes
          .filter(r => r.meta) 
          .filter(r => {
            const { title, description, keywords } = r.meta;
            return (
              title.toLowerCase().includes(lowerQuery) ||
              description.toLowerCase().includes(lowerQuery) ||
              (keywords && keywords.toLowerCase().includes(lowerQuery))
            );
          })
          .map(r => ({
            id: `static-${r.path}`,
            typeLabel: "Halaman", 
            title: r.meta.title,
            description: r.meta.description,
            link: r.path
          }));
        const apiRes = await request("/articles");
        const apiData = apiRes.data?.data || [];
        
        const dynamicResults = apiData
          .filter(item => {
             const titleMatch = item.title?.toLowerCase().includes(lowerQuery);
             const contentMatch = stripHtml(item.content || "").toLowerCase().includes(lowerQuery);
             return (titleMatch || contentMatch) && item.status === 'published';
          })
          .map(item => {
            const isStory = item.categories?.some(c => c.name === "Studi Kasus");
            
            return {
              id: `dynamic-${item.id}`,
              typeLabel: isStory ? "Kisah Pelanggan" : "Blog", 
              title: item.title,
              description: item.excerpt || stripHtml(item.content).substring(0, 200) + "...",
              link: isStory ? `/kisah-pelanggan/${item.slug}` : `/blog/${item.slug}`
            };
          });

        setResults([...staticResults, ...dynamicResults]);
        setCurrentPage(1); 

      } catch (err) {
        console.error("Search Error:", err);
      } finally {
        setLoading(false);
      }
    };

    performSearch();
    window.scrollTo(0, 0); 
  }, [query, request]);

  const totalPages = Math.ceil(results.length / itemsPerPage);
  const currentItems = results.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  
  const handlePageChange = (p) => {
    setCurrentPage(p);
    document.getElementById("search-results-list")?.scrollIntoView({ behavior: "smooth" });
  };

  const hasResults = results.length > 0;

  return (
    <div className="bg-white min-h-screen">
      <SearchHero 
        title={hasResults ? `Menampilkan Hasil Pencarian Untuk "${query}"` : `Tidak Ada Hasil Pencarian Untuk "${query}"`}
        subtitle={hasResults 
          ? "Silakan telusuri hasil yang paling relevan di bawah ini. Klik pada judul untuk membaca lebih lanjut."
          : "Maaf, kami tidak dapat menemukan apa yang Anda cari. Coba periksa kembali ejaan Anda atau gunakan kata kunci lain yang lebih umum."
        }
        showButtonBack={!loading}
      />

      <div id="search-results-list" className="container mx-auto px-6 py-20 max-w-4xl">
        
        {loading ? (
          <div className="text-center py-10">
             <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
             <p className="mt-2 text-gray-500">Mencari data...</p>
          </div>
        ) : (
          hasResults && (
            <>
              <div className="space-y-10">
                {currentItems.map((item, idx) => (
                  <div key={item.id} className="group">
                    <Link to={item.link} className="block">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                        {item.typeLabel} - {item.title}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 leading-relaxed text-base line-clamp-3">
                      {item.description}
                    </p>
                    
                    {idx !== currentItems.length - 1 && (
                       <hr className="mt-8 border-gray-100" />
                    )}
                  </div>
                ))}
              </div>

              {results.length > itemsPerPage && (
                <div className="mt-16">
                  <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={handlePageChange} 
                  />
                </div>
              )}
            </>
          )
        )}
      </div>
    </div>
  );
};

export default SearchPage;