import React, { useState } from "react";

const PlusIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);
const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);
const EditIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);
const TrashIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);
const ChevronLeft = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);
const ChevronRight = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const TableLoader = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
    <span className="ml-3 text-txt-subtle">Memuat data...</span>
  </div>
);

const DataTable = ({
  title,
  subtitle,
  data = [],
  columns = [],
  onAdd,
  onEdit,
  onDelete,
  searchPlaceholder = "Cari data...",
  isLoading = false,
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = data
    .filter((item) => {
      const text = item.title || item.name || "";
      return text.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => {
      const dateA = new Date(a.date || a.createdAt || 0);
      const dateB = new Date(b.date || b.createdAt || 0);

      if (sortOption === "newest") return dateB - dateA;
      if (sortOption === "oldest") return dateA - dateB;

      const textA = (a.title || a.name || "").toLowerCase();
      const textB = (b.title || b.name || "").toLowerCase();

      if (sortOption === "a-z") return textA.localeCompare(textB);
      if (sortOption === "z-a") return textB.localeCompare(textA);
      return 0;
    });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-8 min-h-screen bg-primary">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-txt-primary">{title}</h1>
          <p className="text-txt-subtle mt-1">{subtitle}</p>
        </div>
        <button
          onClick={onAdd}
          className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
        >
          <PlusIcon />
          <span>Tambah Baru</span>
        </button>
      </div>
      {children && <div className="mb-6">{children}</div>}

      <div className="bg-white p-4 rounded-xl shadow-sm border border-subtle mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-sm text-txt-subtle font-medium whitespace-nowrap">
            Urutkan:
          </span>
          <select
            className="w-full md:w-48 p-2 rounded-lg border border-subtle bg-white text-txt-primary focus:outline-none focus:border-accent cursor-pointer"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="newest">Terbaru</option>
            <option value="oldest">Terlama</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-subtle overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-subtle-light border-b border-subtle">
              <tr>
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className="p-4 text-sm font-semibold text-txt-primary"
                  >
                    {col.header}
                  </th>
                ))}
                <th className="p-4 text-sm font-semibold text-txt-primary text-right">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-subtle">
              {isLoading ? (
                <tr>
                  <td colSpan={columns.length + 1}>
                    <TableLoader />
                  </td>
                </tr>
              ) : currentItems.length > 0 ? (
                currentItems.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {columns.map((col, idx) => (
                      <td
                        key={idx}
                        className="p-4 text-sm text-txt-primary align-middle"
                      >
                        {col.render ? col.render(item) : item[col.accessor]}
                      </td>
                    ))}
                    <td className="p-4 text-right align-middle">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          className="p-2 text-gray-500 hover:text-accent hover:bg-accent-light rounded-lg transition-colors"
                          onClick={() => onEdit(item)}
                        >
                          <EditIcon />
                        </button>
                        <button
                          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          onClick={() => onDelete(item.id)}
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length + 1}
                    className="p-8 text-center text-txt-subtle"
                  >
                    Data tidak ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {!isLoading && filteredData.length > 0 && (
          <div className="p-4 border-t border-subtle flex items-center justify-between bg-white">
            <p className="text-sm text-txt-subtle">
              {indexOfFirstItem + 1} -{" "}
              {Math.min(indexOfLastItem, filteredData.length)} dari{" "}
              {filteredData.length} data
            </p>
            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-lg border border-subtle hover:bg-gray-50 disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft />
              </button>
              <span className="text-sm font-medium px-2">
                Halaman {currentPage}
              </span>
              <button
                className="p-2 rounded-lg border border-subtle hover:bg-gray-50 disabled:opacity-50"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataTable;
