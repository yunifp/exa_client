import React from "react";

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ViewDetailModal = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  const statusColors = {
    new: "bg-blue-100 text-blue-800",
    contacted: "bg-yellow-100 text-yellow-800",
    resolved: "bg-green-100 text-green-800",
    spam: "bg-red-100 text-red-800",
  };
  const colorClass = statusColors[item.status] || "bg-gray-100 text-gray-800";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-subtle sticky top-0 bg-white z-10 rounded-t-xl">
          <h3 className="text-xl font-bold text-txt-primary">
            Detail Permintaan
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6 pb-4 border-b border-gray-100">
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium uppercase ${colorClass} mb-2`}
            >
              {item.status}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {item.first_name} {item.last_name}
            </h2>
            <p className="text-sm text-gray-600">
              {item.job_title || "-"} {item.company ? `@ ${item.company}` : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <DetailItem title="Email" value={item.email} />
            <DetailItem title="Telepon" value={item.phone_number || "-"} />
            <DetailItem
              title="Kebutuhan Layanan"
              value={item.service_needed || "-"}
              isAccent
            />
            <DetailItem
              title="Persona Pengguna"
              value={item.user_persona || "-"}
            />
          </div>

          <div>
            <h4 className="text-sm font-bold text-txt-primary mb-2">
              Pesan Pelanggan:
            </h4>
            <div className="p-4 bg-gray-50 rounded-lg border border-subtle whitespace-pre-wrap text-gray-800 text-sm">
              {item.message || "(Tidak ada pesan)"}
            </div>
          </div>
        </div>

        <div className="flex justify-end p-4 border-t border-subtle">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ title, value, isAccent }) => (
  <div>
    <h4 className="text-xs font-semibold text-txt-subtle uppercase">{title}</h4>
    <p
      className={`text-sm mt-1 ${
        isAccent ? "text-accent font-medium" : "text-gray-800"
      }`}
    >
      {value}
    </p>
  </div>
);

export default ViewDetailModal;
