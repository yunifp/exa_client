import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../hooks/UseApi";

import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

// Base URL default
const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace('/api/v1', '');

const ArrowLeftIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>);
const UploadIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>);
const SaveIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>);

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    ['clean'],
  ],
};

const ArtikelForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const { request, loading } = useApi();
  const fileInputRef = useRef(null);

  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    category_id: "",
    tags: "", 
    status: "draft",
  });
  
  const [featuredImage, setFeaturedImage] = useState(null); 
  const [imagePreview, setImagePreview] = useState(null);

  // --- 1. FUNGSI HELPER UNTUK URL GAMBAR ---
  const getImageUrl = (path) => {
    if (!path) return null;
    // Jika path sudah ada http/https, kembalikan langsung (jangan tambah BASE_URL)
    if (path.startsWith("http")) return path;
    
    // Jika path relatif, tambahkan BASE_URL
    const base = import.meta.env.VITE_API_BASE || BASE_URL;
    return `${base}${path}`;
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await request("/article-categories");
        if(response.data) setCategories(response.data);
      } catch (err) {
        console.error("Gagal load kategori", err);
      }
    };
    fetchCategories();
  }, [request]);

  useEffect(() => {
    if (isEditMode) {
      const fetchDetail = async () => {
        try {
          const response = await request(`/articles?limit=1000`);
          const found = response.data.data.find(a => a.id === parseInt(id));
          
          if (found) {
            setFormData({
              title: found.title,
              slug: found.slug,
              content: found.content,
              category_id: found.categories?.[0]?.id || "",
              tags: found.tags ? found.tags.map(t => t.name).join(", ") : "",
              status: found.status,
            });
            
            // --- 2. GUNAKAN FUNGSI HELPER DI SINI ---
            if (found.featured_image_url) {
              setImagePreview(getImageUrl(found.featured_image_url));
            }
          }
        } catch (error) {
          console.error("Gagal load detail", error);
        }
      };
      fetchDetail();
    }
  }, [isEditMode, id, request]); // getImageUrl stabil

  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview.startsWith("blob:")) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "title" && !isEditMode) {
      const slugValue = value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
      setFormData(prev => ({ ...prev, title: value, slug: slugValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleEditorChange = (content) => {
    setFormData(prev => ({ ...prev, content: content }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFeaturedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageAreaClick = () => {
    if (fileInputRef.current) {
        fileInputRef.current.click();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append("title", formData.title);
    data.append("slug", formData.slug);
    data.append("content", formData.content);
    data.append("status", formData.status);
    
    if (formData.category_id) {
        const catArr = [parseInt(formData.category_id)];
        data.append("categories", JSON.stringify(catArr));
    }

    if (formData.tags) {
        const tagsArr = formData.tags.split(",").map(t => t.trim()).filter(t => t);
        data.append("tags", JSON.stringify(tagsArr));
    }

    if (featuredImage) {
      data.append("featured_image", featuredImage);
    }

    try {
      if (isEditMode) {
        await request(`/articles/${id}`, "PUT", data);
        alert("Artikel diperbarui!");
      } else {
        await request("/articles", "POST", data);
        alert("Artikel berhasil dibuat!");
      }
      navigate("/admin/artikel");
    } catch (error) {
      alert("Gagal menyimpan: " + error.message);
    }
  };

  return (
    <div className="p-8 min-h-screen bg-primary">
      <style>{`
        .quill { background: white; border-radius: 0.5rem; display: flex; flex-direction: column; height: 400px; }
        .ql-toolbar { border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem; border-color: #E4E4E4 !important; }
        .ql-container { border-bottom-left-radius: 0.5rem; border-bottom-right-radius: 0.5rem; border-color: #E4E4E4 !important; flex: 1; overflow-y: auto; font-family: inherit; font-size: 0.875rem; }
        .ql-editor { min-height: 100%; }
      `}</style>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate("/admin/artikel")} 
            className="p-2 hover:bg-white rounded-lg transition-colors text-txt-subtle hover:text-txt-primary"
          >
            <ArrowLeftIcon />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-txt-primary">
              {isEditMode ? "Edit Artikel" : "Tambah Artikel Baru"}
            </h1>
          </div>
        </div>
        <button 
          onClick={handleSubmit}
          disabled={loading}
          className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium shadow-md transition-colors disabled:opacity-50"
        >
          <SaveIcon />
          <span>{loading ? "Menyimpan..." : (isEditMode ? "Perbarui Artikel" : "Terbitkan Artikel")}</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-subtle">
            <label className="block text-sm font-semibold text-txt-primary mb-2">Judul Artikel</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Masukkan judul artikel..."
              className="w-full p-3 rounded-lg border border-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-lg font-medium"
              required
            />

            <div className="mt-4">
              <label className="block text-xs font-semibold text-txt-subtle mb-1">Slug (URL)</label>
              <div className="flex items-center bg-gray-50 border border-subtle rounded-lg px-3 py-2">
                <span className="text-gray-500 text-sm">exaque.com/blog/</span>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className="bg-transparent flex-1 ml-1 text-sm text-txt-primary focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-subtle">
            <label className="block text-sm font-semibold text-txt-primary mb-2">Konten Lengkap</label>
            <ReactQuill 
                theme="snow"
                value={formData.content}
                onChange={handleEditorChange}
                modules={modules}
                placeholder="Tulis artikel lengkap di sini..."
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-subtle">
            <h3 className="font-semibold text-txt-primary mb-4 border-b border-subtle pb-2">Status</h3>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-subtle bg-white focus:outline-none focus:border-accent"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-subtle">
            <h3 className="font-semibold text-txt-primary mb-4 border-b border-subtle pb-2">Pengaturan</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-txt-primary mb-1">Kategori</label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                className="w-full p-2 rounded-lg border border-subtle bg-white focus:outline-none focus:border-accent"
              >
                <option value="">-- Pilih Kategori --</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-txt-primary mb-1">Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Contoh: Bisnis, Teknologi"
                className="w-full p-2 rounded-lg border border-subtle focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-subtle">
            <h3 className="font-semibold text-txt-primary mb-4 border-b border-subtle pb-2">Gambar Utama</h3>
            
            <div 
                onClick={handleImageAreaClick}
                className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors relative h-64 flex flex-col justify-center items-center group cursor-pointer overflow-hidden"
            >
              <input 
                type="file" 
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden" 
              />
              
              {/* --- 3. PREVIEW GAMBAR --- */}
              {imagePreview ? (
                <>
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="absolute inset-0 w-full h-full object-cover rounded-md z-10" 
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <div className="text-white flex flex-col items-center">
                        <UploadIcon />
                        <span className="mt-2 text-sm font-medium">Klik untuk ganti gambar</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="py-8 z-10 text-gray-400 group-hover:text-accent transition-colors">
                  <div className="mx-auto w-12 h-12 mb-2">
                    <UploadIcon />
                  </div>
                  <p className="text-sm font-medium">Klik untuk upload</p>
                  <p className="text-xs mt-1 text-gray-400">JPG, PNG, GIF, WEBP</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ArtikelForm;