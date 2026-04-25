import React, { createContext, useState, useEffect, useContext } from "react";
import useApi from "../hooks/UseApi";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const { request } = useApi();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const response = await request("/auth/me");
        console.log("Auth check response:", response.data);
        if (response && response.data && response.data.user) {
          setUser(response.data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
      } finally {
        setIsInitialized(true);
      }
    };

    checkUserLoggedIn();
  }, [request]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = async () => {
    try {
      await request("/auth/logout", "POST");
      setUser(null);
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isInitialized }}>
      {isInitialized ? children : null}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);