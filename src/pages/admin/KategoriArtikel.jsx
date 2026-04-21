import React, { useState, useEffect } from "react";
import DataTable from "../../components/admin/DataTable";
import useApi from "../../hooks/useApi";
import { FiX, FiSave } from "react-icons/fi";

const KategoriArtikel = () => {
  const { request, loading } = useApi();
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [formData, setFormData] = useState({ name: "", slug: "" });

  const fetchData = async () => {
    try {
      const res = await request("/article-categories");
      const result = res.data?.data || res.data || [];
      setData(result.sort((a, b) => b.id - a.id));
    } catch (err) {
      console.error("Gagal load kategori:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [request]);

  const handleAdd = () => {
    setIsEditMode(false);
    setFormData({ name: "", slug: "" }); 
    setIsModalOpen(true);
  };

  const handleEdit = (item) => {
    setIsEditMode(true);
    setCurrentId(item.id);
    setFormData({ name: item.name, slug: item.slug || "" }); 
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus kategori ini?")) return;
    try {
      await request(`/article-categories/${id}`, "DELETE");
      setData((prev) => prev.filter((item) => item.id !== id));
      alert("Kategori berhasil dihapus.");
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.message || "Gagal menghapus.";
      alert(msg);
    }
  };
  const handleNameChange = (e) => {
    const val = e.target.value;
    const autoSlug = val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    setFormData({ name: val, slug: autoSlug });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { ...formData };
    if (!payload.slug) {
        payload.slug = payload.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    }

    try {
      if (isEditMode) {
        await request(`/article-categories/${currentId}`, "PUT", payload);
        alert("Kategori diperbarui!");
      } else {
        await request("/article-categories", "POST", payload);
        alert("Kategori dibuat!");
      }
      setIsModalOpen(false);
      fetchData();
    } catch (err) {
      console.error("Error submit:", err);
      const msg = err.response?.data?.message || err.response?.data?.error || "Gagal menyimpan data.";
      alert(`Gagal: ${msg}`);
    }
  };

  const columns = [
    { 
      header: "Nama Kategori", 
      accessor: "name", 
      render: (item) => <span className="font-semibold text-gray-900">{item.name}</span> 
    },
    { 
      header: "Slug", 
      accessor: "slug", 
      render: (item) => (
        <span className="bg-gray-100 text-gray-600 font-mono text-xs px-2 py-1 rounded border border-gray-200">
            {item.slug}
        </span>
      ) 
    },
    { 
      header: "Dibuat Pada", 
      accessor: "createdAt", 
      render: (item) => <span className="text-sm text-gray-500">{new Date(item.createdAt || Date.now()).toLocaleDateString()}</span> 
    },
  ];

  return (
    <>
      <DataTable
        title="Kategori Artikel"
        subtitle="Kelola kategori blog. Slug dibuat otomatis."
        data={data}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchPlaceholder="Cari kategori..."
        isLoading={loading}
      />

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">
                {isEditMode ? "Edit Kategori" : "Tambah Kategori Baru"}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <FiX size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Kategori <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  required 
                  value={formData.name} 
                  onChange={handleNameChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent transition-all placeholder:text-gray-400"
                  placeholder="Contoh: Teknologi AI"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Slug (URL Otomatis)
                </label>
                <input 
                  type="text" 
                  readOnly
                  value={formData.slug} 
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-100 text-gray-500 font-mono text-sm cursor-not-allowed"
                />
              </div>
              
              <div className="pt-2 flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium">
                    Batal
                </button>
                <button type="submit" disabled={loading} className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover flex items-center gap-2 font-medium shadow-sm transition-all">
                   <FiSave /> {loading ? "Menyimpan..." : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default KategoriArtikel;