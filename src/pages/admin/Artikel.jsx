/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import DataTable from "../../components/admin/DataTable";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/UseApi";

const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace('/api/v1', '');

const Artikel = () => {
      const [articles, setArticles] = useState([]);
      const { request, loading } = useApi();
      const navigate = useNavigate();

      const fetchArticles = async () => {
            try {
                  const response = await request("/articles?limit=100");
                  if (response.data && response.data.data) {
                        setArticles(response.data.data);
                  }
            } catch (error) {
                  console.error("Gagal mengambil artikel:", error);
            }
      };

      useEffect(() => {
            fetchArticles();
      }, [request]);

      const getImageUrl = (path) => {
            if (!path) return "/placeholder-image.jpg";

            if (path.startsWith("https")) return path;

            const baseUrl = import.meta.env.VITE_API_BASE;
            return `${baseUrl}${path}`;
      };

      const handleDelete = async (id) => {
            if (window.confirm("Apakah Anda yakin ingin menghapus artikel ini?")) {
                  try {
                        await request(`/articles/${id}`, "DELETE");
                        setArticles(articles.filter((a) => a.id !== id));
                  } catch (error) {
                        alert("Gagal menghapus artikel: " + error.message);
                  }
            }
      };

      const handleAdd = () => navigate("/admin/artikel/tambah");
      const handleEdit = (item) => navigate(`/admin/artikel/edit/${item.id}`);

      const handleRowClick = (item) => {
            navigate(`/admin/artikel/preview/${item.id}`);
      };

      const columns = [
            {
                  header: "Artikel",
                  accessor: "title",
                  render: (item) => {
                        const imageUrl = item.featured_image_url
                              ? `${BASE_URL}${item.featured_image_url}`
                              : "https://placehold.co/100x100/png?text=No+Image";

                        return (
                              <div
                                    className="flex items-center gap-4 cursor-pointer"
                                    onClick={(e) => { e.stopPropagation(); handleRowClick(item); }}
                              >
                                    <img
                                          src={getImageUrl(item.featured_image_url)}
                                          alt={item.title}
                                          className="w-12 h-12 rounded-lg object-cover bg-gray-200"
                                    />
                                    <div>
                                          <p className="font-semibold text-txt-primary line-clamp-1 hover:text-accent transition-colors">{item.title}</p>
                                          <p className="text-xs text-txt-subtle mt-0.5">{item.slug}</p>
                                    </div>
                              </div>
                        );
                  },
            },
            {
                  header: "Penulis",
                  accessor: "author",
                  render: (item) => item.author_name || (item.author ? item.author.name : "Admin")
            },
            {
                  header: "Tanggal",
                  accessor: "createdAt",
                  render: (item) => new Date(item.createdAt).toLocaleDateString()
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
                  title="Manajemen Artikel"
                  subtitle="Kelola semua konten blog dan berita dari sini."
                  data={articles}
                  columns={columns}
                  onAdd={handleAdd}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  searchPlaceholder="Cari judul artikel..."
                  // BARIS KRUSIAL: Meneruskan state loading ke DataTable
                  isLoading={loading}
            />
      );
};

export default Artikel;