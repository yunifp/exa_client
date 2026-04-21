import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../../components/admin/DataTable";
import useKisah from "../../hooks/UseKisah";

const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace('/api/v1', '');

const AdminKisahPelanggan = () => {
 const navigate = useNavigate();
 const { stories, fetchStories, deleteStory, loading } = useKisah(); 

 useEffect(() => {
  fetchStories();
 }, [fetchStories]); 

 const handleDelete = async (id) => {
  if (window.confirm("Apakah Anda yakin ingin menghapus kisah ini?")) {
   try {
    await deleteStory(id);
   } catch (error) {
    alert("Gagal menghapus: " + error.message);
   }
  }
 };

 const handleAdd = () => navigate("/admin/kisah-pelanggan/tambah");
 const handleEdit = (item) => navigate(`/admin/kisah-pelanggan/edit/${item.id}`);
 
 const handleRowClick = (item) => {
  navigate(`/admin/kisah-pelanggan/preview/${item.id}`);
 };
 
  const getImageUrl = (path) => {
   if (!path) return "/placeholder-image.jpg"; 
   
   if (path.startsWith("https")) return path;

   const baseUrl = import.meta.env.VITE_API_BASE;
   return `${baseUrl}${path}`;
 };

 const columns = [
  {
   header: "Perusahaan / Judul",
   accessor: "title",
   render: (item) => {
    const imageUrl = item.featured_image_url 
     ? `${BASE_URL}${item.featured_image_url}` 
     : "https://placehold.co/100x100/png?text=No+Img";
     
    return (
     <div 
      className="flex items-center gap-4 cursor-pointer"
      onClick={(e) => { e.stopPropagation(); handleRowClick(item); }}
     >
      <img 
       src={getImageUrl(item.featured_image_url)} 
       alt={item.title} 
       className="w-12 h-12 rounded-lg object-contain bg-gray-50 border border-gray-200" 
      />
      <div>
       <p className="font-semibold text-txt-primary line-clamp-1 hover:text-accent transition-colors">
        {item.title}
       </p>
       <p className="text-xs text-txt-subtle mt-0.5">{item.slug}</p>
      </div>
     </div>
    );
   },
  },
  { 
   header: "Penulis", 
   accessor: "author",
   render: (item) => (item.author ? item.author.name : "Admin")
  },
  { 
   header: "Tanggal", 
   accessor: "published_at",
   render: (item) => item.published_at ? new Date(item.published_at).toLocaleDateString() : "-"
  },
  {
   header: "Status",
   accessor: "status",
   render: (item) => (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
     ${item.status === "published" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
     {item.status}
    </span>
   ),
  },
 ];

 return (
  <DataTable
   title="Manajemen Kisah Pelanggan"
   subtitle="Kelola studi kasus dan cerita sukses klien."
   data={stories}
   columns={columns}
   onAdd={handleAdd}
   onEdit={handleEdit}
   onDelete={handleDelete}
   searchPlaceholder="Cari perusahaan..."
   isLoading={loading} 
  />
 );
};

export default AdminKisahPelanggan;