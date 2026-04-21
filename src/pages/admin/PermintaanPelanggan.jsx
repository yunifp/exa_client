import React, { useState, useEffect } from "react";
import DataTable from "../../components/admin/DataTable";
import useApi from "../../hooks/useApi"; 
import ViewDataModal from "../../components/admin/ViewDataModal";

const REQUEST_TYPES = [
 { id: "Berbicara Dengan Sales", label: "Sales" },
 { id: "Permintaan Demo", label: "Permintaan Demo" },
 { id: "Bantuan Teknis", label: "Bantuan Teknis" },
 { id: "Lokasi Kantor Exaque", label: "Lokasi Kantor" },
];

const PermintaanPelanggan = () => {
 const { request, loading } = useApi();
 const [data, setData] = useState([]);
 
 const [activeTab, setActiveTab] = useState(REQUEST_TYPES[0].id);

  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await request("/inquiries");
    const inquiries = response.data?.data || response.data || [];
    const sortedData = inquiries.sort((a, b) => b.id - a.id);
    
    setData(sortedData);
   } catch (err) {
    console.error("Gagal memuat permintaan:", err);
   }
  };

  fetchData();
 }, [request]);
 const handleStatusUpdated = (id, newStatus) => {
        setData(prevData => 
            prevData.map(item => item.id === id ? { ...item, status: newStatus } : item)
        );
    };

 const filteredData = data.filter((item) => item.service_needed === activeTab);
 const columns = [
  {
   header: "Nama Lengkap",
   accessor: "first_name", 
   render: (item) => (
    <div>
     <p className="font-semibold text-gray-900">
      {item.first_name} {item.last_name}
     </p>
     <p className="text-xs text-gray-500">
      {item.job_title || "-"} {item.company ? `@ ${item.company}` : ""}
     </p>
    </div>
   ),
  },
  { 
   header: "Kontak", 
   accessor: "email",
   render: (item) => (
    <div>
     <p className="text-sm text-gray-700">{item.email}</p>
     <p className="text-xs text-gray-500">{item.phone_number || "-"}</p>
    </div>
   )
  },
  { 
   header: "Persona", 
   accessor: "user_persona",
   render: (item) => <span className="text-sm text-gray-600">{item.user_persona || "-"}</span>
  },
  {
   header: "Status",
   accessor: "status",
   render: (item) => {
    const statusColors = {
     new: "bg-blue-100 text-blue-800",
     contacted: "bg-yellow-100 text-yellow-800",
     resolved: "bg-green-100 text-green-800",
     spam: "bg-red-100 text-red-800",
    };
    const colorClass = statusColors[item.status] || "bg-gray-100 text-gray-800";
    
    return (
     <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium uppercase ${colorClass}`}>
      {item.status}
     </span>
    );
   },
  },
 ];

 const handleViewDetail = (item) => {
  setSelectedItem(item);
    setIsDetailModalOpen(true);
 };
  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedItem(null);
  };

 const handleDelete = async (id) => {
  if (!window.confirm("Apakah Anda yakin ingin menghapus data ini?")) return;

  try {
   await request(`/inquiries/${id}`, "DELETE");
   setData((prev) => prev.filter((item) => item.id !== id));
   alert("Data berhasil dihapus.");
  } catch (err) {
   console.error(err);
   alert("Gagal menghapus data.");
  }
 };

 return (
    <>
   <DataTable
    title="Permintaan Masuk"
    subtitle="Kelola semua permintaan masuk dari formulir website."
    data={filteredData}
    columns={columns}
    hideAddButton={true}
    onEdit={handleViewDetail} 
    onDelete={handleDelete} 
    searchPlaceholder={`Cari di ${REQUEST_TYPES.find(t => t.id === activeTab)?.label || 'sini'}...`}
    isLoading={loading} 
   >
    <div className="flex items-center gap-2 border-b border-gray-200 overflow-x-auto mt-2 no-scrollbar">
     {REQUEST_TYPES.map((type) => (
      <button
       key={type.id}
       onClick={() => setActiveTab(type.id)}
       className={`
        px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap outline-none
        ${
         activeTab === type.id
          ? "border-accent text-accent bg-white rounded-t-lg shadow-sm" 
          : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-white/50"
        }
       `}
      >
       {type.label}
      </button>
     ))}
    </div>
    
   </DataTable>
      <ViewDataModal 
        isOpen={isDetailModalOpen}
        onClose={handleCloseDetailModal}
        item={selectedItem}
        onStatusChange={handleStatusUpdated}
      />
    </>
 );
};

export default PermintaanPelanggan;