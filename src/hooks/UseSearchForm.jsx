import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useSearchForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Ambil query dari URL saat ini (jika ada) agar input terisi otomatis
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  // Sinkronisasi: Jika URL berubah, update isi input
  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  // Handler saat user mengetik
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handler saat form disubmit (Enter atau Klik Tombol)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Arahkan ke halaman pencarian dengan parameter
      navigate(`/pencarian?q=${encodeURIComponent(query)}`);
    }
  };

  return {
    query,
    handleInputChange,
    handleSubmit
  };
};