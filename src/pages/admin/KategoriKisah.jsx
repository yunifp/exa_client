import React, { useState, useEffect } from "react";
import DataTable from "../../components/admin/DataTable";
import useApi from "../../hooks/UseApi";
import { FiX, FiSave } from "react-icons/fi";

const KategoriKisah = () => {
  const { request, loading } = useApi();
  const [data, setData] = useState([]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [formData, setFormData] = useState({ name: "", slug: "" });

  const ENDPOINT = "/story-categories";

  const fetchData = async () => {
    try {
      const res = await request(ENDPOINT);
      const result = res.data?.data || res.data || [];
      setData(result.sort((a, b) => b.id - a.id));
    } catch (err) {
      console.error("Gagal load kategori kisah:", err);
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
    if (!window.confirm("Yakin hapus kategori ini?")) return;
    try {
      await request(`${ENDPOINT}/${id}`, "DELETE");
      setData((prev) => prev.filter((item) => item.id !== id));
      alert("Kategori berhasil dihapus.");
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await request(`${ENDPOINT}/${currentId}`, "PUT", formData);
        alert("Kategori Kisah diperbarui!");
      } else {
        await request(ENDPOINT, "POST", formData);
        alert("Kategori Kisah dibuat!");
      }
      setIsModalOpen(false);
      fetchData();
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan data.");
    }
  };

  const handleNameChange = (e) => {
    const val = e.target.value;
    if (!isEditMode) {
      const slugVal = val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
      setFormData({ name: val, slug: slugVal });
    } else {
      setFormData({ ...formData, name: val });
    }
  };

  const columns = [
    { header: "Kategori Kisah", accessor: "name", render: (item) => <span className="font-semibold text-gray-900">{item.name}</span> },
    { header: "Slug", accessor: "slug", render: (item) => <span className="text-gray-500 font-mono text-sm">{item.slug}</span> },
    { header: "Dibuat", accessor: "createdAt", render: (item) => <span className="text-sm text-gray-500">{new Date(item.createdAt || Date.now()).toLocaleDateString()}</span> },
  ];

  return (
    <>
      <DataTable
        title="Kategori Kisah Pelanggan"
        subtitle="Atur kategori industri atau jenis studi kasus."
        data={data}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchPlaceholder="Cari kategori kisah..."
        isLoading={loading}
      />

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">{isEditMode ? "Edit Kategori" : "Tambah Kategori"}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600"><FiX size={20} /></button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Kategori</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name} 
                  onChange={handleNameChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="Contoh: Perbankan, Ritel"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                <input 
                  type="text" 
                  value={formData.slug} 
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-sm font-mono"
                />
              </div>
              
              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Batal</button>
                <button type="submit" disabled={loading} className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover flex items-center gap-2">
                   <FiSave /> {loading ? "Simpan..." : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default KategoriKisah;