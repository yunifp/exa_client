import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import useApi from "../hooks/UseApi";
import LogoImage from "../assets/logo-red.webp";

const ResetPassword = () => {
  const { token } = useParams(); 
  const navigate = useNavigate();
  const { request, loading, error } = useApi();
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [localError, setLocalError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError("");
    if (password !== confirmPassword) {
      setLocalError("Password dan Konfirmasi Password tidak sama.");
      return;
    }
    if (password.length < 6) {
        setLocalError("Password minimal 6 karakter.");
        return;
    }

    try {
      await request(`/auth/reset-password/${token}`, "POST", { password });
      alert("Password berhasil diubah! Silakan login.");
      navigate("/login");

    } catch (err) {
      console.error("Reset Password Error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-subtle">
        
        <div className="text-center mb-8">
          <Link to="/">
            <img src={LogoImage} alt="exaque profile" className="h-10 mx-auto mb-4" />
          </Link>
          <h1 className="text-2xl font-bold text-txt-primary">Reset Password</h1>
          <p className="text-txt-subtle text-sm mt-2">
            Buat password baru untuk akun Anda.
          </p>
        </div>

        {/* Gabungan Error API & Error Lokal */}
        {(error || localError) && (
          <div className="bg-red-50 text-accent text-sm p-3 rounded-lg mb-6 border border-red-100 text-center animate-pulse">
            {localError || error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-txt-primary mb-2">Password Baru</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-txt-primary mb-2">Ulangi Password Baru</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold text-white transition-all shadow-md
              ${loading 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-accent hover:bg-accent-hover hover:shadow-lg"
              }`}
          >
            {loading ? "Menyimpan..." : "Simpan Password Baru"}
          </button>
        </form>
        
        <div className="mt-6 text-center">
            <Link to="/login" className="text-sm text-txt-subtle hover:text-accent transition-colors">
                Batal
            </Link>
        </div>

      </div>
    </div>
  );
};

export default ResetPassword;