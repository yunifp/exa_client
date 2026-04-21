import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../hooks/UseApi";
import { useAuth } from "../context/AuthContext";
import LogoImage from "../assets/logo-red.webp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { request, loading, error } = useApi();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await request("/auth/login", "POST", { email, password });
      
      if (response && response.data && response.data.user) {
        login(response.data.user);
        navigate("/admin/dashboard");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-subtle">
        
        <div className="text-center mb-8">
          <img src={LogoImage} alt="exaque profile" className="h-10 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-txt-primary">Admin Login</h1>
          <p className="text-txt-subtle text-sm">Masuk untuk mengelola dashboard</p>
        </div>

        {error && (
          <div className="bg-red-50 text-accent text-sm p-3 rounded-lg mb-6 border border-red-100 text-center">
            {error}
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
              placeholder="email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-txt-primary mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="/lupa-password" className="text-sm text-txt-subtle hover:text-accent transition-colors">
            Lupa password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;