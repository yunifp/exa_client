import React, { useState } from "react";
import { Link } from "react-router-dom";
import useApi from "../hooks/UseApi"; 
import LogoImage from "../assets/logo-red.webp";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { request, loading, error } = useApi();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(""); 

    try {
      const response = await request("/auth/forgot-password", "POST", { email });
      if (response) {
        setSuccessMessage("Link reset password telah dikirim ke email Anda.");
      }
    } catch (err) {
      console.error("Forgot Password Error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-subtle">

        <div className="text-center mb-8">
          <Link to="/">
            <img src={LogoImage} alt="exaque profile" className="h-10 mx-auto mb-4" />
          </Link>
          <h1 className="text-2xl font-bold text-txt-primary">Lupa Password?</h1>
          <p className="text-txt-subtle text-sm mt-2">
            Masukkan email Anda dan kami akan mengirimkan instruksi reset password.
          </p>
        </div>
        {error && (
          <div className="bg-red-50 text-accent text-sm p-3 rounded-lg mb-6 border border-red-100 text-center animate-pulse">
            {error}
          </div>
        )}
        {successMessage && (
          <div className="bg-green-50 text-green-700 text-sm p-3 rounded-lg mb-6 border border-green-100 text-center">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-txt-primary mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              placeholder="nama@email.com"
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
            {loading ? "Mengirim..." : "Kirim Link Reset"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/login" className="text-sm text-txt-subtle hover:text-accent transition-colors font-medium">
            &larr; Kembali ke Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;